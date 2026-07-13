'use client';

import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { GithubShowcase } from '@/components/GithubShowcase';
import { projects } from '@/lib/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';

const marqueeItems = [
  `${projects.length} projects shipped`,
  '7 AI agents in production',
  'All Lines Business Solutions',
  'Miami · Remote',
  'Agent governance',
  'HIPAA-ready architecture',
  'HR automation',
  'AI-accelerated delivery',
];

/* Bento span pattern: flagship 7-col × 2-row, two 5-col, then 4-col rows */
function bentoSpan(i: number): { className: string; featured: boolean } {
  if (i === 0) return { className: 'md:col-span-7 md:row-span-2', featured: true };
  if (i === 1 || i === 2) return { className: 'md:col-span-5', featured: false };
  return { className: 'md:col-span-4', featured: false };
}

export default function Home() {
  const topProjects = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order).slice(0, 4);

  return (
    <>
      <main>
        <Hero />

        {/* Marquee strip */}
        <div className="marquee-wrap border-t border-b border-border py-[22px] overflow-hidden bg-canvas-2 relative">
          <div className="marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Work Section — bento grid */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-28 md:py-36">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-end justify-between gap-8 mb-14"
          >
            <div>
              <span className="kicker mb-5">Selected Work</span>
              <h2 className="font-display font-normal tracking-[-0.02em] text-[clamp(38px,4.8vw,60px)] leading-[1.06]">
                Built to run
                <br />
                <em className="italic text-muted font-[340]">without me.</em>
              </h2>
            </div>
          </motion.div>

          {/* Bento grid — top 4 featured projects only */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[18px] md:auto-rows-auto">
            {topProjects.map((project, i) => {
              const span = bentoSpan(i);
              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i}
                  featured={span.featured}
                  className={span.className}
                />
              );
            })}
          </div>

          {/* View all link — prominent */}
          <div className="flex justify-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-all pb-1.5 border-b border-border hover:border-accent group"
            >
              View all {projects.length} projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* GitHub Showcase */}
        <GithubShowcase />

        {/* Method — light section */}
        <section className="light-section" id="method">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-28 md:py-36 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <span className="kicker kicker-light mb-5">The Method</span>
              <h2 className="font-display font-normal tracking-[-0.02em] text-[clamp(38px,4.8vw,60px)] leading-[1.06] text-light-ink">
                Fewer meetings.
                <br />
                <em className="italic text-light-muted font-[340]">More execution.</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
              {[
                {
                  num: '01 — Architect',
                  title: 'Design the outcome',
                  body: 'Every engagement starts with the end state — the system that should exist, the workflows it replaces, and the architecture that makes it inevitable.',
                },
                {
                  num: '02 — Direct',
                  title: 'Direct AI execution',
                  body: 'AI agents build under governance — clear roles, chain of command, and enforcement discipline. Delegation is not absolution.',
                },
                {
                  num: '03 — Deliver',
                  title: 'Ship & operate',
                  body: 'Deployed to AWS, Vercel, and Railway with audit trails, compliance gates, and automation that keeps running after handoff.',
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="method-card p-8 md:p-9"
                >
                  <span className="font-display italic text-[15px] text-[#61771c] block mb-5">{step.num}</span>
                  <h3 className="font-display font-medium text-[23px] tracking-[-0.01em] mb-3 text-light-ink">{step.title}</h3>
                  <p className="text-[14.5px] text-light-muted leading-[1.7]">{step.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-[18px] mt-20 pt-14 border-t border-light-ink/10"
            >
              {[
                { value: '7', sup: 'agents', label: 'AI agents running autonomous operations' },
                { value: '15+', sup: '', label: 'Projects live in production' },
                { value: '24/7', sup: '', label: 'Autonomous operations, monitored & governed' },
                { value: '7', sup: 'industries', label: 'Healthcare, HR, retail, construction & more' },
              ].map(({ value, sup, label }) => (
                <div key={label}>
                  <div className="font-display font-normal text-[clamp(40px,4.4vw,58px)] tracking-[-0.02em] leading-none text-light-ink">
                    {value}
                    {sup && <sup className="text-[0.45em] text-[#61771c] italic ml-1">{sup}</sup>}
                  </div>
                  <div className="text-[13px] text-light-muted mt-2.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About / philosophy quote */}
        <section className="relative overflow-hidden py-32 md:py-40 text-center">
          <div className="hero-mesh opacity-70" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto px-6 relative"
          >
            <span className="kicker mb-5 justify-center">About</span>
            <blockquote className="font-display font-[350] italic text-[clamp(30px,4.4vw,52px)] leading-[1.25] tracking-[-0.015em] max-w-[900px] mx-auto">
              &ldquo;Rather than writing code line-by-line, I design the outcome, define the
              architecture, and <span className="text-accent not-italic">direct AI agents to build it.</span>&rdquo;
            </blockquote>
            <cite className="block mt-10 not-italic font-mono text-xs tracking-[0.14em] uppercase text-muted">
              Franklin J Bryant IV — All Lines Business Solutions
            </cite>
            <div className="mt-10">
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
          </motion.div>
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
              <span className="kicker mb-5">Active Engagements</span>
              <h2 className="font-display font-normal tracking-[-0.02em] text-[clamp(38px,4.8vw,60px)] leading-[1.06]">
                What I{"'"}m
                <br />
                <em className="italic text-muted font-[340]">building now.</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Agent Code of Conduct',
                  description: 'Open-source governance framework for AI agent infrastructure — roles, hierarchy, ethics, enforcement, defense-in-depth security, command responsibility, and scaling provisions. Production-tested across 7 agents.',
                  slug: 'agent-code-of-conduct',
                  timeline: 'May 2026 — Shipped',
                  role: 'Architect & Author',
                  where: 'Open Source',
                },
              {
                  name: 'Showroom Automation',
                  description: 'Premium e-commerce and product showcase platform — "Artisanal Speakeasy" aesthetic (pitch black + gold), Supabase backend, multi-state sales tax architecture, CRM automation. Deployed for a Brooklyn home goods retailer. Active retainer.',
                  slug: 'showroom-automation-1',
                  timeline: 'May 2026 — Active',
                  role: 'Sole Architect & Developer',
                  where: 'Retail / E-commerce',
                },
              {
                  name: 'Medical Practice Platform',
                  description: 'HIPAA-ready patient portal with 4-role RBAC, AWS migration architecture (90% cost reduction), compliance decision framework. Built for a Florida medical practice. Resellable to any healthcare provider.',
                  slug: 'medical-practice-1',
                  timeline: 'May 2026 — Pre-production',
                  role: 'Sole Architect & Developer',
                  where: 'Healthcare',
                },
              {
                  name: 'Construction Automation Platform',
                  description: 'Full org build-out and operations platform for a $140M interior design + construction company. 3D kitchen/bathroom editor, financial model, Florida construction compliance, AI-augmented project management.',
                  slug: 'construction-automation-1',
                  timeline: 'Ongoing',
                  role: 'COO & Architect',
                  where: 'South Florida',
                },
              {
                  name: 'Client Onboarding Portal',
                  description: 'End-to-end client lifecycle automation — intake forms create CRM leads in under 5 seconds, OSINT enrichment pipeline (Apollo, Sherlock, GhostTrack), dual Outlook calendar sync, onboarding wizard, and Stripe billing. 151 leads, 17 active clients managed.',
                  slug: 'albs-portal',
                  timeline: 'March–Present',
                  role: 'Sole Architect & Developer',
                  where: 'onboarding.simplifyingbusinesses.com',
                },
              {
                  name: 'PEO Automation Platform',
                  description: 'White-label HR workflow automation for Professional Employer Organizations. Employee onboarding, 9+ form types, multi-state W-4 support, admin workspace with team management and audit logging. Deployed on AWS (S3 + CloudFront + Lambda).',
                  slug: 'peo-automation-1',
                  timeline: 'April–May 2026 — Production',
                  role: 'Sole Architect & Developer',
                  where: 'www.mypeocoforms.com',
                },
                {
                  name: 'Workers\' Comp Automation',
                  description: 'AI-powered wage statement automation with human-in-the-loop verification. 5-stage pipeline: Intake → AI Extraction → Normalization → HITL Review → State-Compliant PDF. 50-state DWC form mappings.',
                  slug: 'workers-comp-automation-1',
                  timeline: 'May 2026',
                  role: 'Sole Architect & Developer',
                  where: 'Insurance / Workers\' Comp',
                },
                {
                  name: 'Training Platform',
                  description: 'Modern LMS with immersive lesson player (text, quiz, video, callout blocks), course builder, progress tracking, and Supabase backend. Deployed for professional services training.',
                  slug: 'training-platform-1',
                  timeline: 'May 2026 — Production',
                  role: 'Sole Architect & Developer',
                  where: 'albs-learning-center.vercel.app',
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
                  className={`project-card border border-border rounded-[20px] p-6 h-full ${engagement.slug ? '' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-xs text-accent">Active</span>
                    <span className="font-mono text-[10px] text-muted ml-auto">{engagement.timeline}</span>
                  </div>
                  <h3 className="font-display font-medium text-xl mb-2">{engagement.name}</h3>
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

        {/* CTA card */}
        <section className="pt-4 pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="cta-card text-center px-8 py-20 md:px-20 md:py-28"
            >
              <h2 className="font-display font-[380] tracking-[-0.02em] text-[clamp(40px,5.6vw,72px)] leading-[1.05] mb-6">
                Let{"'"}s build something
                <br />
                <em className="italic text-accent">that runs itself.</em>
              </h2>
              <p className="text-muted text-[17px] mb-12 max-w-md mx-auto">
                I architect AI-accelerated systems that scale. Fewer meetings, more execution.
                If that sounds like your next project, let{"'"}s talk.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-accent text-accent-ink font-semibold text-[15px] px-[30px] py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(200,255,87,0.45)]"
              >
                Start a conversation
                <svg className="w-[15px] h-[15px] transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <div className="mt-10 font-mono text-[11.5px] tracking-[0.1em] uppercase text-muted flex items-center justify-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(200,255,87,0.8)]" />
                Currently accepting new engagements
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Franklin J Bryant IV. Built with AI, deployed on AWS, Azure, Vercel & Railway.
            </p>
            <div className="flex gap-6">
              {[
                { label: 'GitHub', href: 'https://github.com/FranklinIV94' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/franklin-bryant-36115363/' },
                { label: 'Twitter', href: 'https://x.com/theycallmeking_' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-muted hover:text-accent transition-colors"
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
