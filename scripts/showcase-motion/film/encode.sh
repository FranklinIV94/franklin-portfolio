#!/usr/bin/env bash
# Delivery encode for the two showcase films. Remotion renders a mezzanine MP4 into out/; this
# pass produces what ships under public/showcase/motion/film/: H.264 (faststart) + VP9 WebM +
# a poster JPG per film, sized for the brief's budgets (16:9 ≤ 2.5 MB, 9:16 ≤ 1.8 MB).
# FFmpeg is used as a tool here; no FFmpeg code ships. Prints the final sizes.
set -euo pipefail
cd "$(dirname "$0")"
DEST=../../../public/showcase/motion/film
mkdir -p "$DEST"
CHROME=${CHROME:-$(node -e "console.log(require('playwright').chromium.executablePath())" 2>/dev/null || echo "")}
BROWSER=${CHROME:+--browser-executable=$CHROME}

render () { npx remotion render src/index.jsx "$1" "out/$1.mp4" $BROWSER --gl=swiftshader --codec=h264 --crf=20 --log=error; }
enc () { # name, h264 crf, vp9 crf
  ffmpeg -loglevel error -y -i "out/$1.mp4" -an -c:v libx264 -preset slow -crf "$2" -pix_fmt yuv420p -profile:v high -movflags +faststart "$DEST/$1.mp4"
  ffmpeg -loglevel error -y -i "out/$1.mp4" -an -c:v libvpx-vp9 -b:v 0 -crf "$3" -row-mt 1 -deadline good -cpu-used 2 "$DEST/$1.webm"
  ffmpeg -loglevel error -y -ss "$4" -i "out/$1.mp4" -frames:v 1 -q:v 4 "$DEST/$1.jpg"
}
[ "${SKIP_RENDER:-}" ] || { render launch; render vertical; }
enc launch 24 36 1.6
enc vertical 24 36 1.2
ls -l "$DEST" | awk 'NR>1{printf "%-16s %7.2f MB\n",$9,$5/1048576}'
