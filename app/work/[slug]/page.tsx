'use client';

import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to work
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tier === 'flagship' && (
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent border border-accent/30 px-3 py-1 rounded-full bg-canvas/50">
                  Flagship
                </span>
              )}
              {project.domains.map((d) => (
                <span key={d} className="font-mono text-xs text-muted bg-surface border border-border px-3 py-1 rounded-lg">
                  {d}
                </span>
              ))}
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted">{project.tagline}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted">
              <div>
                <span className="text-xs text-accent block mb-1">Timeline</span>
                {project.timeline}
              </div>
              <div>
                <span className="text-xs text-accent block mb-1">Role</span>
                {project.role}
              </div>
              {project.liveUrl && (
                <div>
                  <span className="text-xs text-accent block mb-1">Live</span>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Visit →
                  </a>
                </div>
              )}
              {project.repoUrl && (
                <div>
                  <span className="text-xs text-accent block mb-1">Code</span>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    GitHub →
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-t border-border mb-16"
          />

          {/* Case study sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-16"
          >
            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-accent">The Challenge</h2>
              <p className="text-muted leading-relaxed text-lg">{project.challenge}</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-accent">The Approach</h2>
              <p className="text-muted leading-relaxed text-lg">{project.approach}</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-accent">The Solution</h2>
              <p className="text-muted leading-relaxed text-lg">{project.solution}</p>
            </section>

            {project.results.length > 0 && (
              <section>
                <h2 className="font-display font-bold text-2xl mb-6 text-accent">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span className="text-slate-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Stack & role */}
            <section>
              <h2 className="font-display font-bold text-2xl mb-6 text-accent">Stack &amp; Role</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border border-border rounded-xl p-6">
                  <span className="text-xs text-accent block mb-2">Role</span>
                  <p className="text-slate-300">{project.role}</p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6">
                  <span className="text-xs text-accent block mb-2">Timeline</span>
                  <p className="text-slate-300">{project.timeline}</p>
                </div>
              </div>
              <div className="mt-6 bg-surface border border-border rounded-xl p-6">
                <span className="text-xs text-accent block mb-3">Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-muted bg-canvas border border-border px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>

          {/* Related work */}
          {(() => {
            const related = projects
              .filter((p) => p.slug !== project.slug && p.domains.some((d) => project.domains.includes(d)))
              .slice(0, 3);
            if (related.length === 0) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-20"
              >
                <h2 className="font-display font-bold text-2xl mb-6 text-accent">Related Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map((p, i) => (
                    <Link key={p.slug} href={`/work/${p.slug}`} className="group block bg-surface border border-border rounded-xl p-5 hover:border-accent/40 transition-colors">
                      <span className="font-mono text-[10px] text-accent mb-2 block">{p.domains[0]}</span>
                      <h3 className="font-display font-bold text-lg mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                      <p className="text-xs text-muted line-clamp-2">{p.tagline}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })()}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 p-8 bg-surface border border-border rounded-2xl text-center"
          >
            <h2 className="font-display font-bold text-2xl mb-4">Interested in working together?</h2>
            <p className="text-muted mb-6">
              I bring the same depth of thinking to client projects as I do to my own work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-canvas font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
