#!/usr/bin/env bash
# Compile the WebMCP tool layer standalone and exercise every tool. Exit non-zero on failure.
#
# This is the gate before a deploy. The tools are read-only, but they publish project names,
# essay dates and quoted policy copy, so a wrong answer here is a wrong answer in front of a
# buyer or an agent acting for one.
#
# Requires a build (.next/server/app/about.html) for the verbatim-quote check: `npm run build`
# first. Usage: bash scripts/verify-webmcp.sh
set -euo pipefail
cd "$(dirname "$0")/.."
export WEBMCP_OUT="${WEBMCP_OUT:-/tmp/webmcp-verify}"
rm -rf "$WEBMCP_OUT"
npx tsc lib/webmcp/tools.ts \
  --outDir "$WEBMCP_OUT" --module commonjs --target es2022 --moduleResolution node \
  --skipLibCheck --esModuleInterop --noEmit false --incremental false
node scripts/verify-webmcp.cjs
