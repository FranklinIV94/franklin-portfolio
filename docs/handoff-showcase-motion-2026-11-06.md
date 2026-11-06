# Handoff — Showcase tab: add Motion & Film

**For:** Claudette
**From:** Prospyr Prime
**Date:** 6 November 2026
**Status:** design brief — do not implement until Franklin rules on direction (§6)
**Repo:** `FranklinIV94/franklin-portfolio`, branch `handoff/showcase-motion`
**Source that triggered it:** `x.com/renproton/status/2118392436863201677` — a 16-tool "motion studio" stack. Franklin: *"I want all of these considered for my showcase tab … redesign the page with these included."*

---

## 0. What Franklin actually asked for

He forwarded a tool list and said *considered*. That word is the assignment. He does not want sixteen
new sections, and he does not want a page that name-drops a stack it never ran. He wants the showcase
tab to prove the capability those tools represent — **code-driven motion and film** — the same way the
Engineering section proves the fleet is real by showing it live.

So this brief does two things: it rules on all sixteen tools (embed / produce / process-only / skip), and
it specifies the redesign that comes out of those rulings.

The bar he set for this page, verbatim: **"convey our design style and isn't just a bunch of word vomit
on a page."** Every card on `/showcase` is an artifact a visitor can poke at, not a claim.

---

## 1. Current state (read this before touching anything)

`/showcase` is data-driven. One registry, no page logic per item:

| File | Role |
|---|---|
| `lib/showcases.ts` | **Single source of truth.** `showcaseCategories[] → items[]` with `slug, title, tag, desc, file, ratio?` |
| `app/showcase/page.tsx` | Maps categories → `<section>`, items → card with an `<iframe>` on an `aspect-[4/3]` frame |
| `public/showcase/<category>/<slug>.html` | Self-contained artifact: inline CSS + JS, no build step, no live-project deps |
| `app/api/fleet/route.ts` | Server-side proxy: the pattern for any artifact that needs live data (key stays in Vercel env) |

Today: **2 categories, 8 items.**

- **Design Craft** (4): blurred-mesh weather card, shapes→gradient process, mesh component system, motion studies
- **Engineering** (2 public of 2): Agent Fleet Live (15s refresh, real data), Model Armor injection sandbox

**There is no motion or film section.** The nearest thing is `project-d-motion` ("Motion Studies") inside
Design Craft — CSS transitions and mesh drift, which is interaction polish, not film.

---

## 2. Ruling on all sixteen tools

This is the part Franklin asked for: **every tool considered, none smuggled in.** The column that matters
is *how it can appear on a static Next.js page*, because an iframe on a portfolio cannot run a desktop app,
a Blender addon, or a Python render farm.

| # | Tool | What it does | Verdict | How it appears | Licence gate |
|---|---|---|---|---|---|
| 1 | **Remotion** | Video from React components | **PRODUCE** | Rendered MP4/WebM + poster, embedded as a film card | **Remotion License** — free for individuals and companies ≤3 people; paid company licence above that. Fine for this site; check before any client deliverable |
| 2 | **Storyboarder** | Shot planning, animatics | **PROCESS** | Named in "how it was made" on the film card | MIT (desktop, never shipped) |
| 3 | **Anime.js** | Timeline animation, easing | **EMBED** | Live artifact — timeline + easing lab | MIT |
| 4 | **Flubber** | Shape morphing | **EMBED** | Live artifact — morph between two real logo/glyph shapes | MIT |
| 5 | **Pixelorama** | Pixel art + sprite animation | **PRODUCE** | Sprite sheet → CSS/canvas animation, or baked into a film clip | MIT |
| 6 | **Three.js** | 3D scenes, lighting, camera | **EMBED** | Live artifact — shader-lit 3D object, orbit on drag | MIT |
| 7 | **PlayCanvas** | Real-time 3D worlds | **EMBED (one of)** | Live artifact — only if it earns its weight; see §3 note | MIT engine; the cloud editor is commercial |
| 8 | **cannon-es** | 3D physics, collisions | **EMBED** | Combined with Three.js in the same artifact — a physics drop test | MIT |
| 9 | **Sverchok** | Procedural geometry in Blender | **PROCESS** | Named on the film card; output is geometry baked into the render | GPL-3.0 — production tool only, never a dependency |
| 10 | **Effekseer** | Particle effects | **PRODUCE or SKIP** | Ships a WebGL runtime, but the authoring app is desktop. Use only if a real effect is needed; otherwise a Three.js particle shader already in the scene | MIT |
| 11 | **twigl** | Live shader coding, GIF loops | **EMBED** | Live artifact — a fragment-shader loop, real GLSL, editable | MIT (confirm at pinned version) |
| 12 | **Bark** | Voice/audio generation | **PRODUCE** | Audio bed on one film clip — **never autoplays** | MIT code; check model weights' terms before commercial use |
| 13 | **Pedalboard** | Audio effects chain | **PROCESS** | Named on the film card (reverb/compression pass) | **GPL-3.0** — production tool only. Never link into a deliverable |
| 14 | **OBS Studio** | Screen capture | **SKIP on this page** | It captures; it does not produce a showcase artifact | GPL-2.0 |
| 15 | **Shotcut** | Timeline editing | **SKIP on this page** | Same — an NLE, not a runtime. FFmpeg does the delivery encode | GPL-3.0 |
| 16 | **FFmpeg** | Encode, compress, deliver | **PROCESS (backbone)** | Every film card is FFmpeg-encoded: H.264/VP9, faststart, target ≤2.5MB | LGPL-2.1 by default; becomes GPL if built `--enable-gpl`. Ship the output, never the binary |

**The four GPL tools (Pedalboard, Sverchok, Shotcut, OBS) are safe to *use* — using a tool does not
license its output — but none of their code may end up inside an artifact we ship.** Keep them in the
production pipeline, out of the repo.

**Skip list is deliberate and should be stated on the page, not hidden:** OBS and Shotcut are capture and
edit, not showcase surfaces. Naming them in a "how it was made" line is honest; embedding them is
impossible and pretending otherwise is the exact word-vomit Franklin rejects.

---

## 3. What ships — new category: **Motion & Film**

Two sub-sections inside one category (or two categories if the layout needs it — §6 direction B):

### A. Live artifacts (4) — interactive, in-browser, self-contained

| Card | Proves | Stack | Weight budget |
|---|---|---|---|
| **Timeline Lab** | Timing and easing are designed, not defaulted | Anime.js | ≤ 120 KB |
| **Morph** | Shape-to-shape continuity — logo → mark → logo | Flubber + canvas | ≤ 120 KB |
| **Physics Drop** | Real simulation, real collisions, not a keyframe fake | Three.js + cannon-es | ≤ 400 KB |
| **Shader Loop** | Code as the material — GLSL, live, no video file | twigl-style WebGL | ≤ 120 KB |

Each one: one idea, a visible control, and it must survive `prefers-reduced-motion`. No autoplaying
audio, ever. No mouse-only interaction — every control reachable by keyboard.

**PlayCanvas ruling:** skip the fifth 3D embed. Three.js already carries 3D in this section, and two 3D
engines on one page is a technology demo, not a portfolio. If PlayCanvas ever ships an artifact that does
something Three.js cannot, it earns a card then.

### B. Produced films (2) — real renders, not mockups

| Card | Proves | Stack | Spec |
|---|---|---|---|
| **Launch film** | The whole pipeline runs end to end: storyboard → render → encode | Remotion + FFmpeg (+ Pixelorama art) | 16:9, ≤30s, ≤2.5MB, poster frame, muted loop |
| **Vertical cut** | Same source, recomposed for 9:16 — the format clients actually need | Remotion + FFmpeg + Bark audio | 9:16, ≤15s, ≤1.8MB, poster, **audio off by default with an explicit play control** |

Both films need a **poster JPG** (no layout shift) and must be lazy: `preload="none"`, `playsInline`,
`muted`, `loop`, and the ratio frame reserved in CSS so nothing jumps.

### C. Retire or move the overlap

`design-craft/project-d-motion` ("Motion Studies") becomes the interaction baseline inside **Motion &
Film**, not a separate idea in Design Craft. One motion section, one place to look.

---

## 4. Embed and card spec

- **Ratios:** `aspect-[16/9]` for films and 3D, `aspect-[9/16]` for the vertical cut (max-width ~360px,
  centered), `aspect-[4/3]` for the existing design-craft cards. `ratio` is already a field — use it.
- **Iframes:** `loading="lazy"`, `title` attribute that describes the artifact (accessibility), sandboxed
  if the artifact does not need same-origin fetch.
- **Budget:** page HTML+CSS unchanged; artifacts lazy so the page's LCP is the heading, not a 400KB
  three.js scene. Total showcase payload when everything is scrolled: **≤ 8 MB**.
- **Motion:** every artifact honours `prefers-reduced-motion: reduce` — freeze, don't just slow down.
- **No new npm dependencies in the portfolio app.** Three.js, Anime.js, Flubber and cannon-es load inside
  the artifact iframe from a pinned CDN URL with `integrity` hashes, or are vendored into
  `public/showcase/motion/vendor/`. The portfolio app itself stays dependency-light.
- **Card copy:** title, tag, one sentence of what it proves, and a **"Made with"** line naming only the
  tools that actually touched it. If a card says Remotion, a Remotion render exists.

---

## 5. Page-level redesign (this is the "redesign the page" part)

1. **Category navigation** — sticky chips at the top (`Design Craft · Motion & Film · Engineering`),
   anchor-jumping, with the active one tracking scroll. The page is about to be three screens long on a
   phone; without this it is a scroll.
2. **A lead artifact** — one full-width card per category, above the grid: the most convincing thing in
   that category (Motion & Film leads with the launch film, Engineering keeps Agent Fleet).
3. **Denser grid below the lead** — 2-up desktop, 1-up mobile, consistent ratio frames.
4. **Per-card footer line** — `Made with` + one honest sentence about the pipeline. This is where the
   sixteen tools appear without a single fake claim.
5. **A one-paragraph intro** at the top of the page, in Franklin's voice, that says what the page is:
   working artifacts you can operate, not screenshots.
6. **Empty/loading states** for the lazy iframes — a skeleton in the card's own ratio, so scroll position
   never jumps.
7. **Mobile at 390px is the primary target**, not the afterthought. Test there first.

---

## 6. Direction gate — three materially different directions, Franklin picks

Franklin's standing rule on creative work: **3–5 materially different directions, not recolours**, and the
direction is his call. So:

> Deliver **three static HTML previews** of the page at `/root/franklin-portfolio/docs/preview/<a|b|c>.html`,
> each a different *structural* argument — not the same layout in three palettes:

- **Direction A — "Gallery":** museum wall. Big lead artifact, quiet grid, captions in small caps, no chrome.
- **Direction B — "Console":** the page as an instrument. Category rail on the left, artifacts as panels,
  live data visible, monospace meta. Closest to the Engineering language already in use.
- **Direction C — "Reel":** film-festival. Full-bleed 16:9 hero, horizontal filmstrip of the other
  artifacts, minimal text, everything subordinate to the moving image.

Each preview: real content from this brief, mobile viewport included, no placeholder lorem. Franklin rules,
then you implement that one direction properly.

**Do not implement any direction before he rules.** A page this visible, rebuilt three times, is a week
nobody gets back.

---

## 7. Hard constraints (non-negotiable)

1. **IP gate.** No client names, no `.simplifyingbusinesses.com` or internal hostnames, no IPs, no
   pricing, no agent codenames. Role language only ("the fleet", "an operations agent"). The public-surface
   gate applies to every artifact in this section.
2. **No invented numbers.** Every metric on a card must be one we can reproduce from the artifact itself.
   "60fps" only if it holds on a mid-range phone; a render duration only if the file is in the repo.
3. **No fake interactivity.** A rendered film is never presented as interactive; a shader is never a GIF
   with a play button. If it cannot be poked, say it is a film.
4. **No claim of a tool that did not touch the artifact.** The "Made with" line is a receipt, not mood.
5. **Do not touch** the homepage, `/work`, `/blog`, the footer CTAs, or `app/api/fleet`. This brief is
   `/showcase` + `lib/showcases.ts` + `public/showcase/motion/**` only.
6. **No new dependencies in the app.** Artifacts are self-contained.
7. **Pull before you edit, and commit only your own files.** The working tree carries sibling artifacts —
   never `git add -A`.

---

## 8. Deliverables and acceptance

**Deliver:**

- `lib/showcases.ts` — new `motion-film` category (or two, per §6), 6 items + the moved Motion Studies
- `app/showcase/page.tsx` — category nav, lead card, new grid, per-card "Made with" line, skeletons
- `public/showcase/motion/*.html` — 4 self-contained artifacts
- `public/showcase/motion/film/*.{webm,mp4,jpg}` — 2 films + 2 posters (or their build script under `scripts/` with the encoded output committed if under budget)
- `docs/showcase-motion-spec.md` — one page: which tool produced which artifact, the licence line per tool, and the measured weight of each card
- Three direction previews (§6) **before** the implementation, in a separate commit

**Acceptance:**

- [ ] `/showcase` returns 200; every artifact URL returns 200
- [ ] Each artifact runs with JavaScript enabled, no console errors, and freezes cleanly under `prefers-reduced-motion`
- [ ] 390px viewport: no horizontal scroll, no card taller than 1.4× its ratio frame
- [ ] Lighthouse mobile performance ≥ 90 on `/showcase` (lazy iframes are the whole reason this is possible)
- [ ] Every "Made with" name maps to a real file or a real pipeline step in `docs/showcase-motion-spec.md`
- [ ] Zero client names, hostnames, IPs, pricing, or agent codenames in the new files — grep for them and put the grep in the spec doc
- [ ] Films: ≤2.5MB (16:9) and ≤1.8MB (9:16), poster present, no audio autoplay
- [ ] `npm run build` clean; the route table still lists `/showcase` and `/api/fleet`

---

## 9. What I've already ruled out — don't rebuild it

- **A separate "Motion" page.** The ask is the showcase tab; a second page splits the proof.
- **Embedding OBS / Shotcut / Storyboarder / Sverchok / Pedalboard.** Desktop tools, no runtime. They get a
  credit line, not a card.
- **A tool-logo wall.** Sixteen logos proves you read a tweet. Four artifacts and two films prove you can
  do the work.
- **Autoplaying audio.** Ever.
- **An "AI-generated video" card.** Every film here is code-rendered and hand-cut; the value is that it is
  reproducible, and "AI made a video" undersells it.

---

*Questions go to Franklin through the normal channel. If a tool's licence cannot be confirmed at a pinned
version, it does not go in an artifact — the card ships without it and the spec says why.*
