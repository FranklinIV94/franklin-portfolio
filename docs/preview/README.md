# Showcase direction previews — 6 Nov 2026

Three structural directions for `/showcase` with Motion & Film added, per `docs/handoff-showcase-motion-2026-11-06.md` §6.
Static HTML, self-contained, open directly in a browser. Franklin rules; the chosen direction is then implemented in `app/showcase/page.tsx`.

| File | Direction | Argument |
|---|---|---|
| `a.html` | **Gallery** | Museum wall. Big lead artifact, quiet 2-up grid, captions, no chrome. |
| `b.html` | **Console** | Instrument. Left category rail, artifacts as panels, mono meta, live status. Closest to the Engineering language. |
| `c.html` | **Reel** | Film-festival. Full-bleed 16:9 hero film, horizontal filmstrips, minimal text. |

Frames hold lightweight canvas sketches standing in for artifacts that are not built yet; they are not the production artifacts and all freeze under `prefers-reduced-motion`. Content (cards, "Made with" lines, specs) is from the brief. Weights on Design Craft cards are current file sizes; Motion & Film weights are the brief's budgets.
