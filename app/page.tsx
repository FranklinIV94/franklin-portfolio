'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { GithubShowcase } from '@/components/GithubShowcase';
import { projects, type Category } from '@/lib/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories: (Category | 'All')[] = ['All', 'Production', 'Hackathon', 'Internal'];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured).sort((a, b) => a.order - b.order);
  const secondary = filtered.filter((p) => !p.featured).sort((a, b) => a.order - b.order);

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
            className="flex items-end justify-between mb-8"
          >
            <div>
              <span className="font-mono text-xs text-accent mb-3 block">Selected Work</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl">
                Things I{"'"}ve
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

          {/* Filter tabs */}
          <div className="flex items-center gap-3 mb-8">
            {categories.map((filter) => {
              const count = filter === 'All'
                ? projects.length
                : projects.filter((p) => p.category === filter).length;
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

          {/* Featured projects — compact two-column grid */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {featured.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} featured />
              ))}
            </div>
          )}

          {/* Secondary projects — three-column grid */}
          {secondary.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  { value: '3', label: 'AI agents running' },
                  { value: '10+', label: 'Projects live in production' },
                  { value: '24/7', label: 'Autonomous operations' },
                  { value: '6', label: 'Industries served' },
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

        {/* Active Engagements */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="font-mono text-xs text-accent mb-3 block">Active Engagements</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl">
                What I{"'"}m
                <br />
                <span className="text-muted">building now.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Consensus 2026 Hackathon',
                  description: 'Two live projects competing across three tracks at Consensus Miami. AgentPay Solana: mobile-first AI agent payment governance on Solana Seeker (8 on-chain instructions, DeepSeek AI, x402 bridge). Agent Studio: AWS Bedrock + Coinbase Smart Wallet AI pipeline on Base (62 CloudFormation resources, 11 API endpoints).',
                  slug: 'agentpay-solana',
                  timeline: 'May 2026',
                  role: 'Sole Architect & Developer',
                  where: 'Miami, FL',
                },
                {
                  name: 'Bolaveau Group / S57',
                  description: 'COO & organizational build-out for a $140M interior design + construction company. Full org structure, financial model, and AI-augmented operations platform with 3D kitchen/bathroom editor.',
                  slug: null,
                  timeline: 'Ongoing',
                  role: 'COO & Architect',
                  where: 'South Florida',
                },
                {
                  name: 'ALBS Client Portal',
                  description: 'End-to-end client lifecycle automation — intake forms create CRM leads in under 5 seconds, dual Outlook calendar sync, onboarding wizard, and Stripe billing. 48 services across 13 categories.',
                  slug: 'albs-portal',
                  timeline: 'March-Present',
                  role: 'Sole Architect & Developer',
                  where: 'onboarding.simplifyingbusinesses.com',
                },
              ].map((engagement, i) => (
                <Link
                  key={engagement.name}
                  href={engagement.slug ? `/work/${engagement.slug}` : '#'}
                  className={engagement.slug ? 'block' : 'block cursor-default'}
                >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-surface border border-border rounded-xl p-6 h-full transition-colors duration-300 ${engagement.slug ? 'hover:border-accent/40' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-xs text-accent">Active</span>
                    <span className="font-mono text-[10px] text-muted ml-auto">{engagement.timeline}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{engagement.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{engagement.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-muted">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      {engagement.role}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {engagement.where}
                    </span>
                    {engagement.slug && (
                      <span className="flex items-center gap-1 text-accent">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        View project
                      </span>
                    )}
                  </div>
                </motion.div>
                </Link>
              ))}
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
                Let{"'"}s build something that runs itself.
              </h2>
              <p className="text-muted text-lg mb-10 max-w-md mx-auto">
                I architect AI-accelerated systems that scale. Fewer meetings, more execution. If that sounds like your next project, let{"'"}s talk.
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