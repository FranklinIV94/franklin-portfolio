// ═══════════════════════════════════════════════════════════════
// Showcase registry — the single source of truth for the /showcase page.
//
// HOW TO ADD A NEW SHOWCASE:
//   1. Drop the artifact(s) into public/showcase/<category>/<slug>.html
//   2. Add one entry to the `items` array of the category below.
//   3. (Optional) If it's a brand-new category, add a category object.
//   No page code changes needed — the page renders whatever is here.
//
// HOW TO ADD A NEW CATEGORY:
//   Add an object to the `categories` array with { id, label, blurb, items }.
//   The page auto-renders a section per category.
// ═══════════════════════════════════════════════════════════════

export interface ShowcaseItem {
  slug: string;
  title: string;
  tag: string;
  desc: string; // one sentence: what the artifact proves
  file: string; // path to the artifact under /public (for films: the .mp4; a .webm sibling is tried first)
  ratio?: string; // tailwind aspect class for the embed frame
  kind?: 'live' | 'film'; // default 'live'. A film is never presented as interactive.
  madeWith: string; // the receipt: only tools that touched this artifact (docs/showcase-motion-spec.md maps each)
  meta?: string; // measured, reproducible facts only: ratio, weight, duration
  lead?: boolean; // one per category: rendered full-width above the grid
  poster?: string; // films only
}

export interface ShowcaseCategory {
  id: string;
  label: string; // shown as the section heading
  blurb: string; // one-line description of the category
  items: ShowcaseItem[];
}

export const showcaseCategories: ShowcaseCategory[] = [
  {
    id: 'design-craft',
    label: 'Design Craft',
    blurb:
      'Live, interactive experiments in visual craft: blurred mesh gradients, component systems, and motion. Working artifacts, not static mockups.',
    items: [
      {
        slug: 'project-a-weather-card',
        title: 'Blur Mesh Weather Card',
        tag: 'Visual Craft',
        desc: 'Overlapping solid blobs blurred into a soft mesh wash, with clean UI on top. The technique behind premium mobile cards.',
        file: '/showcase/design-craft/project-a-weather-card.html',
        ratio: 'aspect-[4/3]',
        madeWith: 'CSS filters + canvas, hand-written. No framework.',
        meta: 'live · 4:3 · 5 KB',
      },
      {
        slug: 'project-b-shape-gradient',
        title: 'Shapes → Gradient → Design',
        tag: 'Design Process',
        desc: 'Three themes (blue subscribe, orange onboarding, purple product) showing the raw construction, the blurred gradient, and the finished screen.',
        file: '/showcase/design-craft/project-b-shape-gradient.html',
        ratio: 'aspect-[4/3]',
        madeWith: 'CSS + vanilla JS, hand-written.',
        meta: 'live · 4:3 · 8 KB',
      },
      {
        slug: 'project-c-component-system',
        title: 'Mesh Component System',
        tag: 'Design System',
        desc: 'Color tokens, a Mesh/Background component with four themes, and reusable Button/Input/Chip/Weather components. Swap a theme, restyle the mesh without rebuilding.',
        file: '/showcase/design-craft/project-c-component-system.html',
        ratio: 'aspect-[4/3]',
        madeWith: 'CSS custom properties + vanilla JS, hand-written. No build step.',
        meta: 'live · 4:3 · 11 KB',
        lead: true,
      },
    ],
  },
  {
    id: 'motion-film',
    label: 'Motion & Film',
    blurb:
      'Code-driven motion and real renders. Four things you can operate, two films that were rendered, cut and encoded by code. Which tool touched what is in docs/showcase-motion-spec.md.',
    items: [
      {
        slug: 'launch-film',
        title: 'Launch film',
        tag: 'Film · 16:9',
        desc: 'The whole pipeline runs end to end: React components → Remotion render → FFmpeg encode. 24 seconds, 0.6 MB. Not interactive; it is a film.',
        file: '/showcase/motion/film/launch.mp4',
        poster: '/showcase/motion/film/launch.jpg',
        ratio: 'aspect-[16/9]',
        kind: 'film',
        madeWith: 'Remotion (render) + FFmpeg (H.264 / VP9 encode, faststart). Source: scripts/showcase-motion/film.',
        meta: 'film · 16:9 · 24 s · 0.61 MB mp4 · muted loop',
        lead: true,
      },
      {
        slug: 'vertical-cut',
        title: 'Vertical cut',
        tag: 'Film · 9:16',
        desc: 'Same source, recomposed for 9:16 — the format clients actually ship. 15 seconds, 0.6 MB. Silent.',
        file: '/showcase/motion/film/vertical.mp4',
        poster: '/showcase/motion/film/vertical.jpg',
        ratio: 'aspect-[9/16]',
        kind: 'film',
        madeWith: 'Remotion + FFmpeg, same composition as the launch film with a vertical layout prop. No audio track.',
        meta: 'film · 9:16 · 15 s · 0.56 MB mp4 · silent',
      },
      {
        slug: 'timeline-lab',
        title: 'Timeline Lab',
        tag: 'Live · timing',
        desc: 'Timing and easing are designed, not defaulted. Four easings run the same move; scrub to compare any instant.',
        file: '/showcase/motion/timeline-lab.html',
        ratio: 'aspect-[16/9]',
        madeWith: 'Anime.js 4.3.0, tree-shaken and vendored (MIT).',
        meta: 'live · 16:9 · 31 KB js (13 KB gzip)',
      },
      {
        slug: 'morph',
        title: 'Morph',
        tag: 'Live · shape',
        desc: 'Shape-to-shape continuity — star → gear → triangle — where every intermediate frame is a real path, not a crossfade.',
        file: '/showcase/motion/morph.html',
        ratio: 'aspect-[16/9]',
        madeWith: 'Flubber 0.4.2 + canvas, vendored (MIT).',
        meta: 'live · 16:9 · 55 KB js (20 KB gzip)',
      },
      {
        slug: 'physics-drop',
        title: 'Physics Drop',
        tag: 'Live · 3D',
        desc: 'Real simulation, real collisions. Twelve boxes settle however the solver says. Drag or arrow-key to orbit; space to drop again.',
        file: '/showcase/motion/physics-drop.html',
        ratio: 'aspect-[16/9]',
        madeWith: 'Three.js 0.182 + cannon-es 0.20, tree-shaken and vendored (MIT).',
        meta: 'live · 16:9 · 577 KB js (151 KB gzip)',
      },
      {
        slug: 'shader-loop',
        title: 'Shader Loop',
        tag: 'Live · GLSL',
        desc: 'Code as the material. The fragment shader in the editor is the picture; edit it and it recompiles. No video file anywhere.',
        file: '/showcase/motion/shader-loop.html',
        ratio: 'aspect-[16/9]',
        madeWith: 'Raw WebGL, hand-written GLSL. No library.',
        meta: 'live · 16:9 · 2 KB js',
      },
      {
        slug: 'project-d-motion',
        title: 'Motion Studies',
        tag: 'Live · interaction',
        desc: 'The interaction baseline: mesh drift, eased intensity, chip-fill and press feedback. One idea per animation.',
        file: '/showcase/design-craft/project-d-motion.html',
        ratio: 'aspect-[4/3]',
        madeWith: 'CSS transitions + vanilla JS, hand-written.',
        meta: 'live · 4:3 · 8 KB',
      },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    blurb:
      'Proof of how systems actually run: live, read-only views of the agent fleet and the infrastructure behind it.',
    items: [
      {
        slug: 'agent-fleet',
        title: 'Agent Fleet Live',
        tag: 'Live System',
        desc: 'A read-only view of the agent fleet running right now: who is online, what each is working on, and live activity. Real data, refreshing every 15 seconds.',
        file: '/showcase/engineering/agent-fleet.html',
        ratio: 'aspect-[16/9]',
        madeWith: 'A server-side proxy; counts, role states and workflow mix only. Names, hosts and job text never leave the building.',
        meta: 'live · real data · 15 s refresh',
        lead: true,
      },
      {
        slug: 'model-armor',
        title: 'Model Armor: Injection Blocked',
        tag: 'Security',
        desc: 'An interactive sandbox: try a prompt-injection attack and watch it get blocked at the deterministic gate, before it ever reaches the model. Every attempt audited.',
        file: '/showcase/engineering/model-armor.html',
        ratio: 'aspect-[16/9]',
        madeWith: 'A deterministic client-side pattern check. Labelled a demo because it is one; nothing you type is stored.',
        meta: 'live · deterministic · 0 network calls',
      },
    ],
  },
];
