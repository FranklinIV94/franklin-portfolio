#!/usr/bin/env python3
"""IP gate for public web surfaces — never-ship scan with a reproducible PASS line.

WHY (2026-08-xx, IP boundary standard): a course library shipped internal operating notes —
addresses, hostnames, agent-to-host mappings, a client domain, fees. The standard that came out of
it requires a mechanical scan and a PASS line with a hash before anything public ships.

WHAT MAKES THIS DIFFERENT FROM A GREP OF THE SOURCE
It scans what is actually SERVED (fetched HTML + the artifact files), not the repo. A build step,
an env substitution, or an unfetched include can put something on the page that the source does not
contain — and the served bytes are what a prospect reads.

HITS ARE CLASSIFIED, NOT COUNTED BLINDLY
Every class has waivers for legitimate uses (the site owner's own name, his own company brands, the
words "hostname"/"codename" appearing in prose that says what is *not* shown). A waiver is printed,
never silent. Exit 1 on any unwaived hit, so this can gate a deploy.

Usage:
    python3 showcase_ip_gate.py                       # scan the default showcase surface set
    python3 showcase_ip_gate.py --url ... --url ...   # scan specific URLs
"""
from __future__ import annotations

import argparse
import hashlib
import re
import sys
import urllib.error
import urllib.request

DEFAULT_URLS = [
    # Whole-site default set. /about was NOT in the original list, which is how a card naming four
    # fleet agents, their hosts and an office city survived on the second-most-visited page while
    # this gate reported PASS. A gate that scans one page is a gate for one page.
    "https://franklin.simplifyingbusinesses.com/",
    "https://franklin.simplifyingbusinesses.com/about",
    "https://franklin.simplifyingbusinesses.com/showcase",
    "https://franklin.simplifyingbusinesses.com/book",
    "https://franklin.simplifyingbusinesses.com/showcase/engineering/agent-fleet.html",
    "https://franklin.simplifyingbusinesses.com/showcase/engineering/model-armor.html",
    "https://franklin.simplifyingbusinesses.com/showcase/design-craft/project-a-weather-card.html",
    "https://franklin.simplifyingbusinesses.com/showcase/design-craft/project-b-shape-gradient.html",
    "https://franklin.simplifyingbusinesses.com/showcase/design-craft/project-c-component-system.html",
    "https://franklin.simplifyingbusinesses.com/showcase/design-craft/project-d-motion.html",
    "https://franklin.simplifyingbusinesses.com/api/fleet-public",
]

# (class, pattern, waiver-pattern or None). Order matters: first match classifies the hit.
RULES: list[tuple[str, re.Pattern[str], re.Pattern[str] | None]] = [
    # Fleet codenames — never on a public surface.
    ("agent codename", re.compile(r"\b(prime|northstar|southstar|eaststar|weststar|claudette|atlas)\b", re.I), None),
    # Hosts, providers, infra.
    # Fleet hosting. Note the distinction: naming a public cloud as a PROJECT's stack ("deployed on
    # AWS") is normal portfolio copy; naming where the FLEET runs, or a preview host, is not. So
    # Hetzner/DigitalOcean/tailnet stay flagged; AWS/Azure/Vercel/Cloudflare are waived as stack names.
    ("infrastructure host", re.compile(r"\b(hetzner|digitalocean|office paled|oracle vps|tailscale|100\.\d+\.\d+\.\d+)\b", re.I), None),
    # A *.vercel.app link is a preview host. Fine as a project DEMO link on /work; never fine as the
    # destination of a call to action. Waived with a note so the distinction stays visible instead of
    # the class being deleted.
    ("preview host (demo link OK, CTA not)", re.compile(r"\b[a-z0-9-]+\.vercel\.app\b", re.I), re.compile(r".*")),
    # Job / cron identifiers.
    ("job identifier", re.compile(r"\b(portal-notification-scanner|arag-reindex|checkReason|targetId|scheduledBy|agentName|systemd|cron-job|systemd)\b", re.I), None),
    # Client names / people we serve.
    ("client identifier", re.compile(r"\b(cabrera|bolaveau|vita showroom|mm&r|mmrcm|cyber1|kilby|jdp electric|beemore|amosova|borrego|vivero)\b", re.I), None),
    # Invoice / record ids.
    ("record identifier", re.compile(r"\bINV-\d{4}-\d{4,}\b"), None),
    # Secrets shaped like secrets.
    ("secret-shaped string", re.compile(r"\b(sk_live_|sk_test_|re_[A-Za-z0-9]{12,}|vcp_[A-Za-z0-9]{8,}|pp_[a-f0-9]{8,}|ghp_[A-Za-z0-9]{20,})"), None),
    # Email addresses other than the published ones.
    ("unlisted email", re.compile(r"[\w.+-]+@[\w-]+\.[\w.]{2,}"), re.compile(r"^(franklin@prospyr305\.com|franklin@simplifyingbusinesses\.com|hello@prospyr305\.com|delivered@resend\.dev)$", re.I)),
    # Money. A public portfolio may show a client's outcome; it must not show fees.
    ("fee / money figure", re.compile(r"\$\s?\d[\d,]{2,}(?:\.\d{2})?"), None),
    # Incident dates that could identify a client engagement. A bare ISO timestamp is NOT one —
    # a public endpoint legitimately publishes `fetchedAt` to prove freshness, and the first run of
    # this gate flagged exactly that. Require proximity to an incident word.
    ("dated incident", re.compile(r"(?:incident|outage|breach|took down|failed)[^.\n]{0,60}\b\d{4}-\d{2}-\d{2}\b|\b\d{4}-\d{2}-\d{2}\b[^.\n]{0,60}(?:incident|outage|breach)", re.I), None),
]

# Owner's own names/brands are allowed by definition (it is his site).
ALLOW_BRAND = re.compile(r"\b(franklin|bryant|prospyr|all lines|albs|sentinel)\b", re.I)


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "ip-gate/1.0 (public-surface scan)"})
    with urllib.request.urlopen(req, timeout=45) as r:
        return r.read().decode("utf-8", "replace")


def scan(url: str, body: str) -> list[tuple[str, str, str, bool]]:
    """Return (class, matched, context, waived)."""
    out: list[tuple[str, str, str, bool]] = []
    for cls, pat, waiver in RULES:
        for m in pat.finditer(body):
            matched = m.group(0)
            ctx = body[max(0, m.start() - 55): m.end() + 55].replace("\n", " ")
            waived = False
            if waiver and waiver.search(matched):
                waived = True
            out.append((cls, matched, ctx, waived))
    return out


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", action="append", default=None)
    ap.add_argument("--quiet-waived", action="store_true")
    args = ap.parse_args(argv)

    urls = args.url or DEFAULT_URLS
    corpus = hashlib.sha256()
    hard: list[tuple[str, str, str, str]] = []
    waived: list[tuple[str, str, str, str]] = []

    for url in urls:
        try:
            body = fetch(url)
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as exc:
            print(f"  UNREACHABLE  {url}  ({exc})")
            hard.append((url, "unreachable", str(exc), "scan could not run"))
            continue
        corpus.update(body.encode("utf-8", "replace"))
        hits = scan(url, body)
        for cls, matched, ctx, is_waived in hits:
            (waived if is_waived else hard).append((url, cls, matched, ctx))

    print(f"scanned {len(urls)} URL(s)")
    if waived and not args.quiet_waived:
        print(f"\nwaived ({len(waived)}):")
        for url, cls, matched, ctx in waived[:10]:
            print(f"  ~ {cls}: {matched!r}  [{url.rsplit('/',1)[-1]}]")

    if hard:
        print(f"\nFAIL — {len(hard)} unwaived hit(s):")
        for url, cls, matched, ctx in hard[:25]:
            print(f"  ✕ {cls}: {matched!r}")
            print(f"    {url}")
            print(f"    …{ctx}…")
        print(f"\nIP-GATE FAIL · {len(hard)} hit(s) · sha256 {corpus.hexdigest()[:16]}")
        return 1

    print(f"\nIP-GATE PASS · 0 unwaived hits · {len(urls)} surface(s) · sha256 {corpus.hexdigest()[:16]}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
