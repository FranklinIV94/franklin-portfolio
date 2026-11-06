# Showcase — Motion & Film: build spec and receipts

**Date:** 6 November 2026 · **Direction:** B · Console (Franklin's ruling) · **Brief:** `docs/handoff-showcase-motion-2026-11-06.md`

This page exists so every "Made with" line on `/showcase` can be checked. Each row names the file the
tool produced, the licence it ships under, and the weight as measured on this commit. If a tool is not in
this table, it did not touch the page.

## 1. Which tool produced which artifact

| Card | Kind | File(s) | Tool · version | Licence | What it did |
|---|---|---|---|---|---|
| Timeline Lab | live | `public/showcase/motion/timeline-lab.html` + `vendor/timeline.js` | Anime.js 4.3.0 | MIT | `createTimeline` drives four easings; scrubber calls `seek()` |
| Morph | live | `public/showcase/motion/morph.html` + `vendor/morph.js` | Flubber 0.4.2 | MIT | `interpolate()` between three original paths; drawn with canvas `Path2D` |
| Physics Drop | live | `public/showcase/motion/physics-drop.html` + `vendor/physics.js` | Three.js 0.182.0 · cannon-es 0.20.0 | MIT · MIT | Three renders; cannon-es steps a 12-body world; orbit by pointer or arrow keys |
| Shader Loop | live | `public/showcase/motion/shader-loop.html` + `vendor/shader.js` | none (raw WebGL, hand-written GLSL) | — | twigl-style editable fragment shader; twigl itself is not used |
| Launch film | film | `public/showcase/motion/film/launch.{mp4,webm,jpg}` | Remotion 4.0.380 → FFmpeg | Remotion License · LGPL-2.1 (tool only) | `scripts/showcase-motion/film/src/Film.jsx` rendered to a mezzanine MP4, then `encode.sh` |
| Vertical cut | film | `public/showcase/motion/film/vertical.{mp4,webm,jpg}` | Remotion 4.0.380 → FFmpeg | as above | Same composition, `vertical: true` prop, 1080×1920 |
| Motion Studies | live | `public/showcase/design-craft/project-d-motion.html` (moved into this category) | none (CSS + vanilla JS) | — | unchanged file, new home |

Source for the bundles: `scripts/showcase-motion/src/*.js`, built by `scripts/showcase-motion/build.mjs`
(esbuild 0.25.12, tree-shaken, minified, IIFE). Source for the films: `scripts/showcase-motion/film/`.
Both toolchains have their own `package.json`; **the portfolio app gained no dependency**
(`package.json` at the root is unchanged).

## 2. Ruling on the sixteen tools, as shipped

| Tool | Brief's verdict | What happened | On the page as |
|---|---|---|---|
| Remotion | PRODUCE | Rendered both films | "Made with" on both film cards |
| Storyboarder | PROCESS | **Not used.** The films were composed directly in React; there was no separate animatic step | not named (would be a false receipt) |
| Anime.js | EMBED | Timeline Lab | card |
| Flubber | EMBED | Morph | card |
| Pixelorama | PRODUCE | **Not used.** No sprite art in the films | not named |
| Three.js | EMBED | Physics Drop | card |
| PlayCanvas | EMBED (one of) | Skipped per §3 of the brief: Three.js carries 3D | not named |
| cannon-es | EMBED | Physics Drop | card |
| Sverchok | PROCESS | **Not used.** No Blender geometry in the films | not named |
| Effekseer | PRODUCE or SKIP | Skipped; no effect needed one | not named |
| twigl | EMBED | **Not vendored.** Shader Loop is a hand-written WebGL editor in the twigl *style*; twigl's code is not in the repo, so the card does not claim it | card says "Raw WebGL, hand-written GLSL. No library." |
| Bark | PRODUCE | **Not used.** Bark's model weights are several GB and could not run in the build environment; the vertical cut ships **silent**, and the card says so. If a Bark bed is generated later, add it in `encode.sh` and update the card and this table | not named |
| Pedalboard | PROCESS | **Not used** (nothing to process without a Bark bed) | not named |
| OBS Studio | SKIP | Skipped, as ruled | not named |
| Shotcut | SKIP | Skipped, as ruled. FFmpeg did the delivery encode | not named |
| FFmpeg | PROCESS (backbone) | Delivery encode for both films: H.264 (`-crf 24 -preset slow -movflags +faststart`), VP9 (`-crf 36`), poster frames. Output only; no FFmpeg code or binary ships | "Made with" on both film cards |

The four GPL tools never entered the repo. The FFmpeg used was the build machine's binary
(`/usr/local/bin/ffmpeg`); its licence governs the tool, not the files it produced.

**Remotion License note.** Remotion is free for individuals and companies with ≤3 people. This site is
Franklin's own; fine. Before any client deliverable is rendered with Remotion, check the company-size
condition at <https://remotion.dev/license>.

## 3. Measured weights (this commit)

| Artifact | HTML | JS raw | JS gzip | Brief's budget | Status |
|---|---|---|---|---|---|
| Timeline Lab | 2.3 KB | 31.3 KB | 12.9 KB | ≤ 120 KB | ✓ |
| Morph | 1.9 KB | 56.2 KB | 19.7 KB | ≤ 120 KB | ✓ |
| Physics Drop | 1.9 KB | **591.1 KB** | **153.3 KB** | ≤ 400 KB | ✓ on the wire (Vercel serves gzip/brotli); ✗ raw. Three's `WebGLRenderer` alone is most of it. Flagged, not hidden. |
| Shader Loop | 3.0 KB | 2.2 KB | 1.2 KB | ≤ 120 KB | ✓ |

| Film | Codec | Size | Duration | Poster | Audio | Budget | Status |
|---|---|---|---|---|---|---|---|
| launch.mp4 | H.264 1920×1080, faststart | 636 KB | 24.0 s | launch.jpg 41 KB | none | ≤ 2.5 MB, ≤ 30 s | ✓ |
| launch.webm | VP9 | 780 KB | 24.0 s | — | none | — | tried first by `<source>` order |
| vertical.mp4 | H.264 1080×1920, faststart | 584 KB | 15.0 s | vertical.jpg 40 KB | none | ≤ 1.8 MB, ≤ 15 s | ✓ |
| vertical.webm | VP9 | 654 KB | 15.0 s | — | none | — | |

Total new payload when everything is scrolled (worst case, all four bundles + both mp4s + posters,
uncompressed): **≈ 1.96 MB**; with gzip on the bundles ≈ 1.5 MB. Brief's ceiling: 8 MB.

## 4. Page behaviour

- Every iframe is created only when its card comes within 240 px of the viewport (`IntersectionObserver`),
  behind a skeleton in the card's own ratio. `loading="lazy"`, `sandbox="allow-scripts allow-same-origin"`,
  descriptive `title`.
- Films: `preload="none"`, `muted`, `loop`, `playsInline`, poster `<img>` always present (no layout shift),
  explicit play/pause button, **never autoplay**. The vertical cut is silent; there is no audio to gate.
- `prefers-reduced-motion: reduce`: Timeline Lab and Morph open paused at a fixed instant (scrubber still
  works); Physics Drop steps the world to rest off-screen and draws one settled frame (orbit still works
  on input); Shader Loop freezes `time` and re-renders only on Apply.
- Keyboard: every control is a `<button>`, `<input type=range>` or `<textarea>`; Physics Drop's stage is
  `tabindex=0` with arrow-key orbit and Space/Enter to drop.
- Phones (390 px): live frames are square (`aspect-square sm:aspect-[16/9]`) so there is room to operate the
  artifact; receipts fold to one line with a `+`; the lead panel's receipt folds too. Measured at 390 px:
  grid cards 498 px tall on a 356 px frame (1.40×), lead panels 512 px (1.44×). No horizontal scroll.
- Case studies (kept from v2) are served as collapsed rows — tag, duration, title — opening into
  situation / decision / shipped / receipt. The three "habits" fold into one row beneath them.
- Engineering keeps its inline React panels (fleet board via `/api/fleet-public`, Model Armor demo); the
  registry entries exist so the page stays data-driven, and `INLINE` in `page.tsx` maps those two slugs to
  the components instead of an iframe.

## 5. IP gate

Run on this commit over every new or changed file (text files only):

```
grep -rnoIP 'simplifyingbusinesses|prospyr|all lines business|\b[0-9]{1,3}(\.[0-9]{1,3}){3}\b|\$[0-9][0-9,]*(\.[0-9]{2})?(?![0-9A-Za-z_"])|per hour|cabrera|boddoc|alcc|curaos|codename' \
  app/showcase/page.tsx lib/showcases.ts public/showcase/motion scripts/showcase-motion/src \
  scripts/showcase-motion/film/src scripts/showcase-motion/build.mjs scripts/showcase-motion/film/encode.sh docs/preview/*.html
```

Result: no client names, hostnames, IPs, pricing or codenames. The only matches are `$0`/`$1`/`$5`/`$9`
— shell positional parameters in `encode.sh` and regex back-references inside the minified vendor
bundles — not currency.

## 6. Acceptance, as checked on this commit

- [x] `/showcase` 200; every artifact, film, poster and vendor URL 200 (checked against `next start`)
- [x] Each artifact runs with no console errors, with and without `prefers-reduced-motion` (Playwright, Chromium + SwiftShader)
- [x] 390 px: no horizontal scroll; grid cards 1.40× their frame, lead panels 1.44× (see §4)
- [x] Lighthouse 12 mobile on `/showcase` (local `next start`, Chromium): **performance 99**, accessibility 96, best-practices 96 · FCP 1.8 s · LCP 1.8 s · TBT 60 ms · CLS 0
- [x] Every "Made with" name maps to a row in §1
- [x] IP grep in §5
- [x] Films ≤ 2.5 MB / ≤ 1.8 MB, posters present, no audio
- [x] `npm run build` clean; route table lists `/showcase`, `/api/fleet` and `/api/fleet-public`

## 7. Known gaps, deliberately left visible

1. **Physics Drop is 591 KB raw.** Under budget as served (153 KB gzip) but over the brief's raw figure.
   Options if it matters: drop shadows and `MeshStandardMaterial` for `MeshLambertMaterial` (saves little),
   or replace Three with a hand-rolled renderer (saves ~500 KB, costs a day).
2. **No audio bed.** Bark was not run; the vertical cut is silent and says so. Revisit on a machine with
   the Bark weights, then Pedalboard for the reverb/compression pass, and update the card + §1.
3. **Storyboarder, Pixelorama, Sverchok were not used** and are therefore not named. The brief allowed
   naming them as process steps; naming a step that did not happen is the kind of claim the page refuses.
4. `/api/fleet-public` returns 503 without the Vercel env key; the fleet board shows its "endpoint down"
   state and the role list only. Unchanged from v2.
