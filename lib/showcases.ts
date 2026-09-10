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
  desc: string;
  file: string; // path to the artifact under /public
  ratio?: string; // tailwind aspect class for the embed frame
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
      'Live, interactive experiments in visual craft — blurred mesh gradients, component systems, and motion. Working artifacts, not static mockups.',
    items: [
      {
        slug: 'project-a-weather-card',
        title: 'Blur Mesh — Weather Card',
        tag: 'Visual Craft',
        desc: 'Overlapping solid blobs blurred into a soft mesh wash, with clean UI on top. The technique behind premium mobile cards.',
        file: '/showcase/design-craft/project-a-weather-card.html',
        ratio: 'aspect-[4/3]',
      },
      {
        slug: 'project-b-posters',
        title: 'Shapes → Gradient → Design',
        tag: 'Design Process',
        desc: 'Three themes (blue subscribe, orange onboarding, purple product) showing the raw construction, the blurred gradient, and the finished screen.',
        file: '/showcase/design-craft/project-b-posters.html',
        ratio: 'aspect-[4/3]',
      },
      {
        slug: 'project-c-component-system',
        title: 'Mesh Component System',
        tag: 'Design System',
        desc: 'Color tokens, a Mesh/Background component with four themes, and reusable Button/Input/Chip/Weather components. Swap a theme, restyle the mesh — no rebuilding.',
        file: '/showcase/design-craft/project-c-component-system.html',
        ratio: 'aspect-[4/3]',
      },
      {
        slug: 'project-d-motion',
        title: 'Motion Studies',
        tag: 'Interaction',
        desc: 'Mesh drift, intensity ease-in, and chip-fill + press feedback. One idea per animation, respecting reduced-motion preferences.',
        file: '/showcase/design-craft/project-d-motion.html',
        ratio: 'aspect-[4/3]',
      },
    ],
  },
  // ── Add new categories here, e.g.:
  // {
  //   id: 'client-work',
  //   label: 'Client Work',
  //   blurb: 'Delivered builds for real businesses.',
  //   items: [ { slug: '...', title: '...', tag: '...', desc: '...', file: '/showcase/client-work/....html' } ],
  // },
  {
    id: 'engineering',
    label: 'Engineering',
    blurb:
      'Proof of how systems actually run — live, read-only views of the agent fleet and the infrastructure behind it.',
    items: [
      {
        slug: 'agent-fleet',
        title: 'Agent Fleet — Live',
        tag: 'Live System',
        desc: 'A read-only view of the agent fleet running right now — who is online, what each is working on, and live activity. Real data, refreshing every 15 seconds.',
        file: '/showcase/engineering/agent-fleet.html',
        ratio: 'aspect-[4/3]',
      },
      {
        slug: 'model-armor',
        title: 'Model Armor — Injection Blocked',
        tag: 'Security',
        desc: 'An interactive sandbox: try a prompt-injection attack and watch it get blocked at the deterministic gate — before it ever reaches the model. Every attempt audited.',
        file: '/showcase/engineering/model-armor.html',
        ratio: 'aspect-[4/3]',
      },
    ],
  },
];
