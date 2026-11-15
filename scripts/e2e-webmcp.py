"""End-to-end proof that the WebMCP layer registers and answers in a real browser.

Serves the built Next.js app on localhost (a secure context), launches Chromium with the
WebMCP feature enabled, and calls the tools the way a browser agent would. Then relaunches
WITHOUT the flag and checks two things: `document.modelContext` is undefined, and no script
the page downloads contains the tools marker — i.e. a non-supporting browser pays zero extra
bytes for this feature.

    npm run build
    /usr/local/lib/hermes-agent/venv/bin/python scripts/e2e-webmcp.py

Exit code 0 means every browser check passed.
"""
import json
import re
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

from playwright.sync_api import sync_playwright

REPO = Path(__file__).resolve().parent.parent
PORT = 3102
URL = f"http://localhost:{PORT}/"

# A string that only exists in the lazily-imported tools chunk. If a browser without WebMCP
# downloads a script containing it, the dynamic import leaked into the initial payload.
MARKER = "list-work"

server = subprocess.Popen(
    ["npx", "next", "start", "-p", str(PORT)],
    cwd=str(REPO),
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL,
)

for _ in range(60):
    try:
        urllib.request.urlopen(URL, timeout=2).read()
        break
    except Exception:
        time.sleep(0.5)
else:
    server.terminate()
    sys.exit("server never came up on %s" % URL)

JS_PROBE = """
async () => {
  const mc = document.modelContext;
  if (!mc) return { api: false };
  const tools = await mc.getTools();
  const out = {
    api: true,
    names: tools.map(t => t.name),
    readOnly: tools.every(t => t.annotations && t.annotations.readOnlyHint === true),
  };
  const byName = (n) => tools.find(t => t.name === n);
  // The result shape is whatever execute() returned, marshalled by the browser: an object
  // with .text/.total/.hasMore. Be tolerant of a {content:[{text}]} envelope too.
  const asText = (r) => {
    if (r == null) return '';
    if (typeof r === 'string') { try { const j = JSON.parse(r); return j.text || r; } catch { return r; } }
    if (r.content) return r.content.map(c => c.text).join('\\n');
    return r.text || JSON.stringify(r);
  };
  const call = async (n, args) => asText(await mc.executeTool(byName(n), args));
  const work = await call('list-work', {});
  out.work = { text: work.slice(0, 300), chars: work.length, raw: work };
  out.writing = await call('list-writing', { max: 3 });
  out.answer = await call('answer-question', { question: 'how does an engagement start' });
  out.contact = await call('get-contact', {});
  const bad = await call('list-work', { tier: 'enterprise' });
  out.bad = bad;
  out.meta = document.querySelectorAll('meta[http-equiv="origin-trial"]').length;
  return out;
}
"""

fail = 0


def check(name, cond, detail=""):
    global fail
    if cond:
        print(f"ok: {name}")
    else:
        fail += 1
        print(f"FAIL: {name} {detail}")


def scripts_containing(page, marker: str):
    """Every script the page actually fetched, with the ones whose body contains `marker`."""
    urls = page.evaluate(
        "() => performance.getEntriesByType('resource').filter(e => e.initiatorType === 'script').map(e => e.name)"
    )
    hits = []
    for u in urls:
        try:
            body = urllib.request.urlopen(u, timeout=5).read().decode("utf-8", "replace")
        except Exception:
            continue
        if marker in body:
            hits.append(u)
    return urls, hits


try:
    with sync_playwright() as p:
        # 1) with the feature enabled — the real test
        browser = p.chromium.launch(args=["--enable-features=WebMCP"])
        page = browser.new_page()
        page.goto(URL, wait_until="load")
        page.wait_for_timeout(2000)
        res = page.evaluate(JS_PROBE)
        print("probe:", json.dumps({k: res[k] for k in ("api", "names", "readOnly", "meta") if k in res}, indent=2))
        check("document.modelContext exists with --enable-features=WebMCP", res.get("api") is True)
        check(
            "four tools registered",
            sorted(res.get("names") or []) == ["answer-question", "get-contact", "list-work", "list-writing"],
            str(res.get("names")),
        )
        check("all four declare readOnlyHint", res.get("readOnly") is True)
        check("no origin-trial meta without an env token", res.get("meta") == 0, str(res.get("meta")))
        if res.get("api"):
            print("\n--- list-work live ---\n" + res["work"]["text"][:300] + " ...")
            check("list-work answers", "published projects" in res["work"]["text"], res["work"]["text"][:80])
            check("list-work under 2000 chars", res["work"]["chars"] <= 2000, str(res["work"]["chars"]))
            check("list-work names the real total", "of 28" in res["work"]["text"], res["work"]["text"][:80])
            check("list-work rows keep their line structure", res["work"]["text"].count("\n") >= 3, str(res["work"]["text"].count("\n")))
            print("\n--- list-writing live ---\n" + res["writing"][:280])
            check("list-writing answers", "published essays" in res["writing"], res["writing"][:80])
            print("\n--- answer-question live ---\n" + res["answer"][:300])
            check("answer-question quotes the site", "AIIO assessment" in res["answer"], res["answer"][:80])
            print("\n--- get-contact live ---\n" + res["contact"][:300])
            check("get-contact returns the published phone", "(561) 589-8900" in res["contact"], res["contact"][:80])
            print("\n--- list-work bad tier live ---\n" + res["bad"])
            check("a miss returns a sentence, not an exception", res["bad"].startswith("No project is filed"), res["bad"][:60])
        _, hits_with_flag = scripts_containing(page, MARKER)
        check("the tools chunk exists at all (marker is real)", len(hits_with_flag) >= 1, str(hits_with_flag))
        browser.close()

        # 2) without the feature — no API, and the tools chunk never crosses the wire
        browser2 = p.chromium.launch()
        page2 = browser2.new_page()
        page2.goto(URL, wait_until="load")
        page2.wait_for_timeout(2000)
        no_api = page2.evaluate("() => typeof document.modelContext")
        urls2, hits_without = scripts_containing(page2, MARKER)
        browser2.close()
        print(f"\nwithout the feature: document.modelContext = {no_api}; scripts fetched = {len(urls2)}; tools chunks fetched = {len(hits_without)}")
        check("API absent without the feature flag", no_api == "undefined", no_api)
        check("tools chunk never downloaded for non-supporting browsers", len(hits_without) == 0, str(hits_without))
finally:
    server.terminate()
    server.wait(timeout=10)

print("\nALL BROWSER CHECKS PASSED" if fail == 0 else f"\n{fail} FAILURES")
sys.exit(1 if fail else 0)
