'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const showcases = [
  {
    slug: 'project-a-weather-card',
    title: 'Blur Mesh — Weather Card',
    tag: 'Visual Craft',
    desc: 'Overlapping solid blobs blurred into a soft mesh wash, with clean UI on top. The technique behind premium mobile cards.',
    file: '/showcase/project-a-weather-card.html',
    ratio: 'aspect-[4/3]',
  },
  {
    slug: 'project-b-posters',
    title: 'Shapes → Gradient → Design',
    tag: 'Design Process',
    desc: 'Three themes (blue subscribe, orange onboarding, purple product) showing the raw construction, the blurred gradient, and the finished screen.',
    file: '/showcase/project-b-posters.html',
    ratio: 'aspect-[4/3]',
  },
  {
    slug: 'project-c-component-system',
    title: 'Mesh Component System',
    tag: 'Design System',
    desc: 'Color tokens, a Mesh/Background component with four themes, and reusable Button/Input/Chip/Weather components. Swap a theme, restyle the mesh — no rebuilding.',
    file: '/showcase/project-c-component-system.html',
    ratio: 'aspect-[4/3]',
  },
  {
    slug: 'project-d-motion',
    title: 'Motion Studies',
    tag: 'Interaction',
    desc: 'Mesh drift, intensity ease-in, and chip-fill + press feedback. One idea per animation, respecting reduced-motion preferences.',
    file: '/showcase/project-d-motion.html',
    ratio: 'aspect-[4/3]',
  },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-accent mb-3 block">Showcase</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
            Design Craft<span className="text-accent">.</span>
          </h1>
          <p className="text-muted mt-4 max-w-2xl">
            Live, interactive experiments in visual craft — blurred mesh gradients, component
            systems, and motion. These are working artifacts, not static mockups: click, hover,
            and play with each one.
          </p>
        </motion.div>

        {/* Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcases.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-border bg-surface ${s.ratio}`}>
                <iframe
                  src={s.file}
                  title={s.title}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display font-medium text-white group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-border bg-surface text-center"
        >
          <h2 className="font-display font-bold text-2xl text-white">
            Want this level of craft on your product?
          </h2>
          <p className="text-muted mt-2 max-w-xl mx-auto">
            Every screen here is built to ship — real components, real motion, real design
            systems. Let&apos;s apply it to your next build.
          </p>
          <a
            href="https://dist-intake-src.vercel.app/"
            className="inline-block mt-6 bg-accent text-canvas font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Book 15 minutes
          </a>
        </motion.div>
      </div>
    </main>
  );
}
