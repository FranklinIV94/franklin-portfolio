#!/usr/bin/env bash
# Live verification of the 2026-10-17 credibility pass on franklin.simplifyingbusinesses.com
B=https://franklin.simplifyingbusinesses.com
OUT=/tmp/live_verify
mkdir -p $OUT

SLUGS="agentic-engineer agent-to-retainer build-the-system context-beats-compute crypto-compliance-after-nexfundai data-brokerage-boom fifty-articles-one-pattern governance-by-default loops-to-graphs-week-in-review-july-18 pacing-the-frontier-is-a-moat pulled-punch research-intelligence-pipeline source-of-permission system-of-action the-accountability-moat the-cost-of-waiting the-team-they-never-hired verification-is-the-scarcity we-let-ai-run-our-sales-pipeline when-creatives-meet-agents who-guards-the-guardians"

printf "%-46s %-5s %-7s %-8s %-6s %s\n" POST HTTP TLDR SOURCES SRC# LONGALT
fail=0
for s in $SLUGS; do
  f=$OUT/$s.html
  code=$(curl -s -o "$f" -w "%{http_code}" "$B/blog/$s")
  tldr=$(grep -c 'TL;DR' "$f")
  src=$(grep -c 'id="sources"' "$f")
  n=$(grep -o 'id="source-[0-9]*"' "$f" | wc -l)
  alts=$(grep -oE 'alt="[^"]{60,}"' "$f" | wc -l)
  printf "%-46s %-5s %-7s %-8s %-6s %s\n" "$s" "$code" "$tldr" "$src" "$n" "$alts"
  [ "$code" != "200" ] && fail=1
  [ "$tldr" -lt 1 ] && fail=1
done

echo
echo "=== homepage regression probe (must find all) ==="
for needle in "Book 15 minutes" "dist-intake-src" "Flagships" "14 agents"; do
  c=$(curl -s "$B/" | grep -c "$needle")
  printf "%-20s %s\n" "$needle" "$c"
  [ "$c" -lt 1 ] && fail=1
done

echo
echo "=== SEO spot-check on one post ==="
curl -s "$B/blog/governance-by-default" > $OUT/gov.html
grep -o '<link rel="canonical"[^>]*>' $OUT/gov.html | head -1
grep -o '<meta property="og:image"[^>]*>' $OUT/gov.html | head -1
grep -o 'rel="alternate" type="application/rss+xml"' $OUT/gov.html | head -1

echo
echo "=== field-notes content check ==="
curl -s "$B/field-notes/ai-usage-policy" | grep -oE '(A named human owns every deliverable|No autonomous client-facing action|Your data is not training data|You can switch it off)' | sort -u
echo "checklist items: $(curl -s "$B/field-notes/pre-launch-security-checklist" | grep -oE 'Protect yourself, not just the app|Patch known vulnerabilities|Rate limits, concurrency limits' | wc -l)"

echo
echo "FAIL_FLAG=$fail"
