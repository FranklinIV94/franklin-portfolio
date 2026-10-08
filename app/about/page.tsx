'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Franklin J Bryant IV',
    alternateName: 'Franklin Jordan Bryant IV',
    url: 'https://franklin.simplifyingbusinesses.com',
    jobTitle: 'COO, All Lines Business Solutions · Founder, Prospyr 305',
    description: 'COO of ALL LINES BUSINESS SOLUTIONS and a leading voice in practical AI implementation for small business. Creator of the AIIO Assessment framework and SENTINEL security audit.',
    sameAs: [
      'https://github.com/FranklinIV94',
      'https://www.linkedin.com/in/franklin-bryant-36115363/',
      'https://x.com/theycallmeking_',
      'https://www.crunchbase.com/organization/all-lines-business-solutions',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'All Lines Business Solutions',
      alternateName: 'ALBS',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: Bio */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-xs text-accent mb-3 block">About</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-8">
                  Franklin J Bryant IV<span className="text-accent">.</span>
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                  COO of ALL LINES BUSINESS SOLUTIONS. Founder of Prospyr 305. Creator of the AIIO Assessment framework and SENTINEL security audit. Based in Florida, serving clients across five states.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-5 text-muted leading-relaxed"
              >
                <p>
                  I&apos;m Franklin Jordan Bryant IV, COO of ALL LINES BUSINESS SOLUTIONS and founder of Prospyr 305.
                  With a background spanning business operations, insurance, and data security, I&apos;ve helped
                  dozens of Florida companies modernize their workflows and cut operational costs through
                  AI-accelerated systems. My approach is hands-on, jargon-free, and focused on one thing:
                  making sure the technology actually pays for itself.
                </p>
                <p>
                  The core of how I work: I design outcomes and direct AI execution rather than
                  writing code line-by-line. This isn&apos;t about replacing developers — it&apos;s about
                  amplifying what one person with the right architectural thinking can deliver.
                  Sixteen projects in production. Fourteen AI agents running 24/7. Industries spanning
                  healthcare, HR, retail, construction, insurance, and accounting.
                </p>
                <p>
                  I created the <span className="text-white">AIIO Assessment</span> framework, a structured
                  evaluation that identifies automation opportunities and quantifies ROI before a single
                  dollar is spent. I also developed <span className="text-white">SENTINEL</span>, a comprehensive
                  AI security audit designed to protect businesses from the emerging threats that come with
                  adopting AI tools. I authored the <span className="text-white">Agent Code of Conduct</span> —
                  an open-source governance framework for AI agent infrastructure, now in production across
                  fourteen agents. I write about AI governance, agent architecture, and the business of
                  building systems that run themselves.
                </p>
                <p>
                  My firm, <span className="text-white">All Lines Business Solutions (ALBS)</span>, handles
                  back-office services: accounting, payroll, tax preparation, and compliance.
                  <span className="text-white"> Prospyr 305</span> builds agentic engineering systems: AI agent
                  workforces, competitive audit tools, and custom workflows for established firms.
                  AI-accelerated development isn&apos;t just our service. It&apos;s how we run the business.
                  We serve clients across Florida, Georgia, Texas, New York, and California.
                </p>
                <p>
                  Before AI tooling matured, the gap between having a great idea and having a working
                  product was enormous. That gap has effectively collapsed. I help businesses
                  understand and capture that leverage. And I write about what I learn along the way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-canvas font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
                >
                  Work with me →
                </Link>
              </motion.div>
            </div>

            {/* Right: Capabilities */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <span className="font-mono text-xs text-accent mb-3 block">How I Work</span>
                <h2 className="font-display font-bold text-2xl mb-6">AI-Powered Delivery</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {[
                  {
                    title: 'Eaststar + Northstar + Southstar + Prospyr Prime',
                    desc: 'Four AI agents running 24/7. Eaststar handles office operations, outreach, and pipeline on a Hetzner cloud server. Northstar handles research, development, and heavy computation locally. Southstar handles engineering and security from the Punta Gorda office. Prospyr Prime is the CEO agent on a dedicated Hetzner box.',
                  },
                  {
                    title: 'AIIO Assessment',
                    desc: 'Structured evaluation that identifies automation opportunities and quantifies ROI before a single dollar is spent. The first step in every Prospyr 305 engagement.',
                  },
                  {
                    title: 'SENTINEL Security Audit',
                    desc: 'Comprehensive AI security audit that protects businesses from emerging threats that come with adopting AI tools. 1,282 security tests across 102 rules.',
                  },
                  {
                    title: 'Agent-Ready Commerce',
                    desc: 'We send AI agents to your website as mystery shoppers, test if your business is ready for the AI economy, and deliver a competitive audit with gap analysis.',
                  },
                  {
                    title: 'Structured Memory',
                    desc: 'Persistent context across sessions. Decisions, preferences, project history, client notes. Nothing is lost between conversations.',
                  },
                  {
                    title: 'AI-First Development',
                    desc: 'Architecture first, then directed AI execution. The speed difference between AI-assisted and traditional development is an order of magnitude.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-surface border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <span className="font-mono text-xs text-accent mb-3 block">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js', 'TypeScript', 'Python', 'Node.js', 'Prisma',
                    'PostgreSQL', 'Stripe', 'Ethers.js', 'AWS', 'Azure', 'Vercel', 'Railway', 'Cloudflare',
                    'AI Agents', 'OpenAI', 'Anthropic', 'Blockchain', 'Solidity',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted bg-canvas border border-border px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
