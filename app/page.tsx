'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { GithubShowcase } from '@/components/GithubShowcase';
import { projects, type Category, type Domain } from '@/lib/projects';
import { blogPosts } from '@/lib/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories: (Category | 'All')[] = ['All', 'Production', 'Hackathon', 'Internal'];
const domains: Domain[] = ['AI Agents', 'Web3 & Payments', 'Business Ops', 'Healthcare', 'Insurance', 'Tax & Finance', 'Construction', 'E-Commerce', 'Governance', 'Security'];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [activeDomain, setActiveDomain] = useState<Domain | 'All'>('All');

  // Flagships — the 3-5 hand-picked, case-study depth
  const flagships = projects.filter((p) => p.tier === 'flagship').sort((a, b) => a.order - b.order);

  // Selected — the strong middle (~12), filtered by status + domain
  const selected = projects
    .filter((p) => p.tier === 'selected')
    .filter((p) => activeFilter === 'All' || p.category === activeFilter)
    .filter((p) => activeDomain === 'All' || p.domains.includes(activeDomain))
    .sort((a, b) => a.order - b.order);

  // Now — the slim status strip (active engagements, one line each)
  const now = projects
    .filter((p) => p.category === 'Production' && p.tier !== 'archive')
    .slice(0, 4);

  // Latest writing — 2-3 most recent essays
  const latestPosts = [...blogPosts].sort((a, b) => (a.dateISO > b.dateISO ? -1 : 1)).slice(0, 3);

  return (
    <>
      <main>
        <Hero />

        {/* Flagships — the work that defines you */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-8"
          >
            <div>
              <span className="font-mono text-xs text-accent mb-3 block">Flagships</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                The work that <span className="text-muted">defines me.</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {flagships.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} featured />
            ))}
          </div>

          {/* Selected work — two-axis filter */}
          <div className="mt-16 mb-8">
            <span className="font-mono text-xs text-accent mb-3 block">Selected Work</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">
              A curated <span className="text-muted">selection.</span>
            </h2>

            {/* Status filter */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {categories.map((filter) => {
                const count = filter === 'All'
                  ? projects.filter((p) => p.tier === 'selected').length
                  : projects.filter((p) => p.tier === 'selected' && p.category === filter).length;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                      activeFilter === filter
                        ? 'bg-accent text-canvas border-accent'
                        : 'border-border text-muted hover:border-accent/40 hover:text-white'
                    }`}
                  >
                    {filter}<span className="ml-1.5 opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Domain filter */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <button
                onClick={() => setActiveDomain('All')}
                className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                  activeDomain === 'All'
                    ? 'bg-accent text-canvas border-accent'
                    : 'border-border text-muted hover:border-accent/40 hover:text-white'
                }`}
              >
                All domains
              </button>
              {domains.map((d) => {
                const count = projects.filter((p) => p.tier === 'selected' && p.domains.includes(d)).length;
                if (count === 0) return null;
                return (
                  <button
                    key={d}
                    onClick={() => setActiveDomain(d)}
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                      activeDomain === d
                        ? 'bg-accent text-canvas border-accent'
                        : 'border-border text-muted hover:border-accent/40 hover:text-white'
                    }`}
                  >
                    {d}<span className="ml-1 opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selected.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>

            <Link
              href="/work"
              className="md:hidden flex items-center justify-center gap-2 text-sm text-muted hover:text-accent transition-colors mt-8 py-4 border border-border rounded-xl"
            >
              View all projects →
            </Link>
          </div>
        </section>

        {/* GitHub Showcase */}
        <GithubShowcase />

        {/* About strip */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-xs text-accent mb-3 block">About</span>
                <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug mb-6">
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
                  { value: '14', label: 'AI agents running' },
                  { value: '16', label: 'Projects in production' },
                  { value: '24/7', label: 'Autonomous operations' },
                  { value: '26', label: 'Industries served' },
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

        {/* Now — slim status strip (replaces the duplicate Active Engagements gallery) */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="font-mono text-xs text-accent mb-3 block">Now</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                What I{'\''}m <span className="text-muted">building now.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-3">
              {now.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group flex items-center justify-between gap-4 bg-surface border border-border rounded-xl px-6 py-4 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-display font-medium text-white group-hover:text-accent transition-colors">
                      {p.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-muted">{p.timeline}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest writing */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="font-mono text-xs text-accent mb-3 block">Writing</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                  Latest <span className="text-muted">essays.</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
              >
                All writing
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="md:hidden flex items-center justify-center gap-2 text-sm text-muted hover:text-accent transition-colors mt-8 py-4 border border-border rounded-xl"
            >
              All writing →
            </Link>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug mb-6">
                  Let{'\''}s build something that runs itself.
                </h2>
                <p className="text-muted text-lg mb-10 max-w-md">
                  I architect AI-accelerated systems that scale. Fewer meetings, more execution. If that sounds like your next project, let{'\''}s talk.
                </p>
                <a
                  href="https://dist-intake-src.vercel.app/"
                  className="inline-flex items-center gap-2 bg-accent text-canvas font-bold px-8 py-4 rounded-xl text-lg hover:bg-accent/90 transition-colors"
                >
                  Book 15 minutes →
                </a>
                <p className="text-xs text-muted mt-3">
                  Booking runs on software I built. It&apos;ll be on my calendar before you close the tab.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-surface border border-border rounded-2xl p-8"
              >
                <span className="font-mono text-xs text-accent mb-3 block">Through my firm</span>
                <h3 className="font-display font-bold text-2xl mb-3">
                  Prospyr 305
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Agentic design &amp; engineering for businesses that want more than a solo architect. Full agent workforces, MCP infrastructure, 24/7 autonomous operations, and adversarial security testing.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://prospyr305.com"
                    className="inline-flex items-center justify-between gap-2 text-sm font-medium text-white hover:text-accent transition-colors group"
                  >
                    <span>Explore Prospyr 305</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  <a
                    href="https://prospyr305.com/security-audit/"
                    className="inline-flex items-center justify-between gap-2 text-sm font-medium text-muted hover:text-accent transition-colors group"
                  >
                    <span>SENTINEL Security Audit</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-accent/10 border border-accent/20 text-accent">NEW</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-sm text-muted mb-2">
                  © {new Date().getFullYear()} Franklin J Bryant IV. Architected and deployed with AI.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3 block">Social</span>
                <div className="flex gap-6">
                  {[
                    { label: 'GitHub', href: 'https://github.com/FranklinIV94' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/franklin-bryant-36115363/' },
                    { label: 'Twitter', href: 'https://x.com/theycallmeking_' },
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

              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3 block">My Firm</span>
                <div className="flex flex-col gap-2">
                  <a href="https://prospyr305.com" className="text-xs text-muted hover:text-accent transition-colors">Prospyr 305 — Agentic Engineering</a>
                  <a href="https://prospyr305.com/security-audit/" className="text-xs text-muted hover:text-accent transition-colors">SENTINEL Security Audit</a>
                  <a href="https://prospyr305.com/possibilities" className="text-xs text-muted hover:text-accent transition-colors">What We Can Build</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
