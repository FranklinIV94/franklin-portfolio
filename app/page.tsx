'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { GithubShowcase } from '@/components/GithubShowcase';
import { projects } from '@/lib/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
  const secondary = projects.filter((p) => !p.featured).sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Work Section */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-24">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="font-mono text-xs text-accent mb-3 block">Selected Work</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl">
                Things I&apos;ve
                <br />
                <span className="text-muted">built.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
            >
              View all projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Featured projects */}
          <div className="space-y-6 mb-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} featured />
            ))}
          </div>

          {/* Secondary projects */}
          {secondary.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondary.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}

          {/* Mobile view all */}
          <Link
            href="/work"
            className="md:hidden flex items-center justify-center gap-2 text-sm text-muted hover:text-accent transition-colors mt-8 py-4 border border-border rounded-xl"
          >
            View all projects →
          </Link>
        </section>

        {/* GitHub Showcase */}
        <GithubShowcase />

        {/* About strip */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-xs text-accent mb-3 block">About</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
                  I architect systems and direct AI execution.
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Rather than writing code line-by-line, I design the outcome, define the architecture,
                  and direct AI agents to build it. The same methodology I use for my own business
                  is what I bring to every client engagement.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  More about me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2+', label: 'AI instances running' },
                  { value: '3+', label: 'Projects live in production' },
                  { value: '24/7', label: 'Autonomous operation' },
                  { value: '1→∞', label: 'Leverage through AI' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-surface border border-border rounded-xl p-5">
                    <div className="font-display font-bold text-3xl text-accent mb-1">{value}</div>
                    <div className="text-xs text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Have a project in mind?
              </h2>
              <p className="text-muted text-lg mb-10 max-w-md mx-auto">
                I take on a limited number of projects at a time to ensure focused, high-quality delivery.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-canvas font-bold px-8 py-4 rounded-xl text-lg hover:bg-accent/90 transition-colors"
              >
                Start a conversation →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Franklin J Bryant IV. Built with AI, deployed on Vercel.
            </p>
            <div className="flex gap-6">
              {[
                { label: 'GitHub', href: 'https://github.com/FranklinIV94' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-muted hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
