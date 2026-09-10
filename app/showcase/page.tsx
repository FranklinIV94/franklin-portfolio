'use client';

import { motion } from 'framer-motion';
import { showcaseCategories } from '@/lib/showcases';

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
            Craft &amp; Capability<span className="text-accent">.</span>
          </h1>
          <p className="text-muted mt-4 max-w-2xl">
            Live, interactive work across design, engineering, and product. Each showcase is a
            working artifact — click, hover, and play with it.
          </p>
        </motion.div>

        {/* Category sections */}
        {showcaseCategories.map((cat, ci) => (
          <section key={cat.id} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.05 }}
              className="mb-6"
            >
              <h2 className="font-display font-bold text-2xl text-white">{cat.label}</h2>
              <p className="text-muted mt-1 text-sm max-w-2xl">{cat.blurb}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cat.items.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-2xl border border-border bg-surface ${s.ratio || 'aspect-[4/3]'}`}>
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
          </section>
        ))}

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
            Every showcase here is built to ship — real components, real motion, real design
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
