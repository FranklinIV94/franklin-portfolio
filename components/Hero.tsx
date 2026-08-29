'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getLatestBlogPost } from '@/lib/blog';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const latestPost = getLatestBlogPost();

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6"
        >
          AI Business
          <br />
          <span className="text-muted">Solutions</span>
          <br />
          <span className="text-accent">Architect.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10"
        >
          I architect systems where AI executes.
          Directing AI-powered development to deliver results that used to
          require entire teams — and writing about what I learn along the way.
        </motion.p>

        {/* CTAs — ONE primary + quiet email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendar.simplifyingbusinesses.com"
              className="inline-flex items-center gap-2 bg-accent text-canvas font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors duration-200"
            >
              Book 15 minutes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href={`/blog/${latestPost.slug}`}
              className="inline-flex items-center gap-2 border border-border text-white font-semibold px-6 py-3 rounded-xl hover:border-accent/40 transition-colors duration-200"
            >
              {latestPost.title} →
            </a>
          </div>
          <p className="text-xs text-muted">
            Booking runs on software I built. It&apos;ll be on my calendar before you close the tab.
          </p>
          <a href="mailto:franklin@prospyr305.com" className="text-xs text-muted hover:text-accent transition-colors">
            Prefer email? franklin@prospyr305.com
          </a>
        </motion.div>

        {/* Proof strip — into the fold */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 border-t border-border pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/work/agent-code-of-conduct" className="group">
              <div className="font-display font-bold text-2xl text-white group-hover:text-accent transition-colors">14</div>
              <div className="text-xs text-muted">agents running 24/7</div>
            </a>
            <a href="/work?status=Production" className="group">
              <div className="font-display font-bold text-2xl text-white group-hover:text-accent transition-colors">19</div>
              <div className="text-xs text-muted">systems in production</div>
            </a>
            <div>
              <div className="font-display font-bold text-2xl text-white">26</div>
              <div className="text-xs text-muted">industries served</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-white">1</div>
              <div className="text-xs text-muted">architect, built &amp; operated</div>
            </div>
          </div>
          <div className="mt-4 font-mono text-xs text-muted">
            Consensus 2026 · XPRIZE · UiPath &amp; Slack agent programs
          </div>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {['Next.js', 'TypeScript', 'AI Agents', 'Blockchain', 'Node.js', 'Python'].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-muted bg-surface border border-border px-3 py-1.5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted font-mono">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}