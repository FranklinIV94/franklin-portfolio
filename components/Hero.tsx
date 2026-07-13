'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 pb-28">
      {/* Gradient mesh + radial-masked grid lines */}
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Oversized serif headline */}
        <h1 className="hero-headline font-display font-[380] text-[clamp(52px,8.4vw,118px)] leading-[1.02] tracking-[-0.025em] mb-11 max-w-[1080px]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
          >
            I architect systems
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          >
            <span className="text-muted">where</span> <em>AI executes.</em>
          </motion.span>
        </h1>

        {/* Sub + CTAs */}
        <div className="flex flex-wrap items-end justify-between gap-12">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="text-[17.5px] text-muted max-w-[460px] leading-[1.7]"
          >
            <strong className="text-white font-medium">AI Business Solutions Architect.</strong>{' '}
            Directing AI-powered development to deliver results that used to require entire
            teams — and writing about what I learn along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="flex flex-wrap gap-3.5"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 bg-accent text-accent-ink font-semibold text-[15px] px-[30px] py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(200,255,87,0.45)]"
            >
              View selected work
              <svg className="w-[15px] h-[15px] transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 border border-border-strong text-white font-semibold text-[15px] px-[30px] py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.055]"
            >
              Work with me
            </a>
            <a
              href="/blog/agentic-engineer"
              className="inline-flex items-center gap-2.5 border border-border text-muted font-medium text-[15px] px-[30px] py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-white/30"
            >
              Latest: Agentic Engineer →
            </a>
          </motion.div>
        </div>

        {/* Meta row: stack + scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-20 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-6">
            {['Next.js', 'TypeScript', 'AI Agents', 'Blockchain', 'Node.js', 'Python'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted hover:text-accent transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="hero-scroll">Scroll</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
