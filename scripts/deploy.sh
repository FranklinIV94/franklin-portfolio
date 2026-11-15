#!/usr/bin/env bash
# Deploy franklin.simplifyingbusinesses.com.
#
# Why this exists (2026-11-15): `vercel deploy --prod` and `vercel pull` both fall back to the CLI's
# stored session, and when that session expires they open an interactive device-login prompt. In a
# background shell nobody is watching that prompt, so the deploy simply hangs — it happened twice in
# one afternoon on two different projects, costing about twenty minutes of "is it still building?".
#
# So: always pass --token, and fail immediately if there isn't one. A deploy that cannot authenticate
# should say so in one second, not in fifteen minutes.
set -euo pipefail
cd "$(dirname "$0")/.."

TOKEN="${VERCEL_TOKEN:-}"
if [ -z "$TOKEN" ] && [ -f /tmp/.vt ]; then
  TOKEN="$(tr -d '\n' < /tmp/.vt)"
fi
if [ -z "$TOKEN" ]; then
  echo "✗ No Vercel token." >&2
  echo "  Set VERCEL_TOKEN, or write it to /tmp/.vt, then re-run." >&2
  echo "  Do not fall back to the CLI session: when it expires it waits for a device login that" >&2
  echo "  nobody answers in a background shell, and the deploy hangs instead of failing." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "✗ Working tree is dirty. Commit first, so the deploy is the commit." >&2
  git status --short >&2
  exit 1
fi

echo "HEAD: $(git log --oneline -1)"
vercel pull --yes --environment=production --token "$TOKEN" >/dev/null
vercel build --prod --token "$TOKEN" >/dev/null
vercel deploy --prebuilt --prod --yes --token "$TOKEN" 2>&1 | tail -3
echo "✓ deployed. Verify the live page, not this message."
