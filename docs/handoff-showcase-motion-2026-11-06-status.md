# Handoff — Showcase tab: Motion & Film is built (Direction B · Console)

**For:** Prospyr Prime and any agent touching `franklin-portfolio`
**From:** Claudette
**Date:** 6 November 2026
**Status:** built, verified, pushed — **awaiting Franklin's merge of `handoff/showcase-motion` → `main`**
**Repo:** `FranklinIV94/franklin-portfolio` · branch `handoff/showcase-motion` · head `9ffaf85`
**Replaces:** the "do not implement" gate in `docs/handoff-showcase-motion-2026-11-06.md` §6 — Franklin ruled **B · Console** at 11:45 today.

---

## 0. Decisions Franklin made today

1. **Direction B · Console.** Category rail on the left, artifacts as panels, mono meta, a `made with` receipt on every card.
2. **Keep the v2 case-study receipts** on `/showcase`, served so they don't crowd the artifacts → collapsed rows.
3. The GitNexus-tools gap in the environment was accepted; CLI fallback was used (see §4).

## 1. What changed in the repo (two commits, only the brief's files)

| Commit | What |
|---|---|
| `fb68726` | `docs/preview/{a,b,c}.html` — the three direction previews Franklin ruled on. Static, keep for the record. |
| `9ffaf85` | The implementation, below. |

| Path | Change |
|---|---|
| `app/showcase/page.tsx` | Rewritten as the Console. Rail nav with scroll tracking, lead panel per category, 2-up grid, lazy iframes behind ratio skeletons, film frames with explicit play, collapsible receipts, case studies as `<details>` rows, habits folded into one row. Fleet board + Model Armor kept inline (not iframed) with v2's safety behaviour unchanged. |
| `lib/showcases.ts` | Now the page's real source of truth (v2 never imported it — §1 of the original brief was stale). New `motion-film` category: 4 live + 2 films; `project-d-motion` moved in from Design Craft. New fields: `madeWith`, `meta`, `kind`, `lead`, `poster`. |
| `public/showcase/motion/*.html` | Four self-contained artifacts: `timeline-lab`, `morph`, `physics-drop`, `shader-loop`. |
| `public/showcase/motion/vendor/*.js` | Tree-shaken, minified bundles per artifact (Anime.js 4.3.0, Flubber 0.4.2, Three.js 0.182.0 + cannon-es 0.20.0, raw WebGL). **No new dependency in the app's `package.json`.** |
| `public/showcase/motion/film/*` | `launch.{mp4,webm,jpg}` 16:9 24 s 636 KB · `vertical.{mp4,webm,jpg}` 9:16 15 s 584 KB. |
| `scripts/showcase-motion/` | Throwaway toolchains with their own `package.json`: `build.mjs` (esbuild bundles) and `film/` (Remotion source + `encode.sh` FFmpeg delivery pass). `node_modules/` and `film/out/` are gitignored. |
| `docs/showcase-motion-spec.md` | The receipt: tool → artifact map, licence per tool, measured weights, the IP grep and its output, acceptance results. |

**Untouched, by rule:** homepage, `/work`, `/blog`, footer CTAs, `app/api/fleet*`, root `package.json`, `tailwind.config.js`.

## 2. Verification on this commit

- `npm run build` clean; route table lists `/showcase`, `/api/fleet`, `/api/fleet-public`
- Every artifact, film, poster and vendor URL returns 200 against `next start`
- All four artifacts: no console errors, with and without `prefers-reduced-motion`; every control keyboard-reachable; no audio
- 390 px: no horizontal scroll; grid cards 1.40× their frame, lead panels 1.44×
- Lighthouse 12 mobile (local): **performance 99**, accessibility 96, best-practices 96, CLS 0
- IP grep over every new/changed file: no client names, hostnames, IPs, pricing or codenames
- GitNexus `detect-changes`: 4 files, 18 symbols, 0 execution flows affected, risk low

## 3. Known gaps — deliberately visible, not hidden

| # | Gap | Why | Owner / next step |
|---|---|---|---|
| 1 | **Physics Drop is 591 KB raw** (153 KB gzipped) vs the brief's 400 KB | Three's `WebGLRenderer` is most of it | Under budget as Vercel serves it. Only worth more time if Franklin wants the raw figure met → replace Three with a hand-rolled renderer (~1 day). |
| 2 | **Vertical cut is silent** | Bark's weights are multi-GB; couldn't run in the build sandbox | Whoever has a machine with Bark: generate the bed, Pedalboard pass, drop into `encode.sh`, update the card's `madeWith`/`meta` and spec §1–2. Audio stays **off by default with an explicit control**, per the brief. |
| 3 | Storyboarder, Pixelorama, Sverchok not named anywhere | They didn't touch anything; the receipt rule cuts both ways | Only name them if a future render actually uses them. |
| 4 | `/api/fleet-public` 503s in the sandbox | No Vercel env key locally | Not a change. Verify the board is live on the preview deploy. |
| 5 | `/favicon.ico` 404s site-wide | Pre-existing, outside this brief | Separate one-line ticket. |
| 6 | Remotion licence | Free for ≤3-person companies; fine for Franklin's own site | **Check before any client deliverable is rendered with Remotion.** |

## 4. Environment notes for agents

- The repo's `CLAUDE.md` requires GitNexus impact analysis before symbol edits. The MCP tools weren't in this session; the CLI fallback works: `npx -y gitnexus@latest analyze` then `node .gitnexus/run.cjs impact "<symbol>" --direction upstream --repo .` and `node .gitnexus/run.cjs detect-changes --scope all --repo .`. **The analyzer rewrites `CLAUDE.md`, `AGENTS.md` and drops skill folders into `.claude/skills/` — restore those before committing** (`git checkout -- CLAUDE.md AGENTS.md .claude`), they are not part of the work.
- `npm run build` runs `postbuild` → regenerates `public/rss.xml` and `tsconfig.tsbuildinfo`. Don't commit those by accident. Never `git add -A` in this tree.
- Rendering films needs a Chromium; in the sandbox: `--browser-executable $(node -e "console.log(require('playwright').chromium.executablePath())") --gl=swiftshader`. `encode.sh` picks this up automatically.
- Rebuilding artifacts: `cd scripts/showcase-motion && npm ci && node build.mjs` (prints raw + gzip sizes → paste into spec §3).

## 5. Next steps, in order

1. **Franklin** — open the Vercel preview for `handoff/showcase-motion`, click every card on a phone, confirm the fleet board is live, then merge to `main`.
2. **After merge** — re-run Lighthouse on the production URL and paste the figure into `docs/showcase-motion-spec.md` §6 (the 99 was local).
3. **Audio bed** (gap 2) — assign to whoever has Bark locally. Not blocking.
4. **Optional** — `docs/preview/` can be deleted once merged, or kept as the record of the ruling. Franklin's call.
5. **Marketing** — the launch film (`public/showcase/motion/film/launch.mp4`, 24 s, silent) and the vertical cut are usable as-is for a "the showcase tab moves now" post. Same IP gate applies: no client names in any caption.

---

*Everything on the page is reproducible from the repo. If a card names a tool, that tool's output is a file you can open.*
