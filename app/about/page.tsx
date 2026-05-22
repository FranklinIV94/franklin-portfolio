'use client';

import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
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
                <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-8">
                  Franklin J Bryant IV<span className="text-accent">.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-5 text-muted leading-relaxed"
              >
                <p>
                  I run a team of AI agents — Prospyr, Northstar, Southstar, and Zo — that handle
                  everything from research and coding to client communications, security monitoring,
                  and overnight intelligence briefings.
                </p>
                <p>
                  The core of how I work: I design outcomes and direct AI execution rather than
                  writing code line-by-line. This isn&apos;t about replacing developers — it&apos;s about
                  amplifying what one person with the right architectural thinking can deliver.
                </p>
                <p>
                  My firm, <span className="text-white">All Lines Business Solutions (ALBS)</span>, applies
                  this same methodology to consulting and accounting engagements. AI-accelerated
                  development isn&apos;t just our service — it&apos;s how we run the business.
                </p>
                <p>
                  Before AI tooling matured, the gap between having a great idea and having a working
                  product was enormous. That gap has effectively collapsed. I help businesses
                  understand and capture that leverage — and I write about what I learn along the way.
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
                    title: 'Prospyr + Northstar + Southstar + Zo',
                    desc: 'Four AI agents running 24/7. Prospyr handles communications and cloud ops; Northstar handles research, development, and heavy computation; Southstar handles overnight research and competitive intelligence; Zo manages client-facing interactions and onboarding.',
                  },
                  {
                    title: 'Autonomous Agents',
                    desc: 'AI agents that run in the background, monitor systems, execute tasks, and escalate when human input is needed.',
                  },
                  {
                    title: 'Structured Memory',
                    desc: 'Persistent context across sessions — decisions, preferences, project history — so nothing is lost between conversations.',
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
                    'PostgreSQL', 'Stripe', 'Ethers.js', 'Vercel', 'Cloudflare',
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
