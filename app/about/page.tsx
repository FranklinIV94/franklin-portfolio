import type { Metadata } from 'next';
import Link from 'next/link';

// /about v2 — ported from the 2026-10-18 reference build.
//
// §0 of the handoff, and the reason this rewrite could not wait: the previous version of this page
// carried the "AI-Powered Delivery" card, which named four fleet agents, the host each one ran on,
// "locally" (i.e. home hardware) and a physical office city — four classes of the never-ship list in
// one paragraph, on the second-most-visited page of the site. It also said "fourteen AI agents"
// beside a public fleet board showing five. Public copy now names ROLES, never agents or hosts:
// where the fleet runs is a security posture, not a disclosure.
//
// Editorial rules for this page (from the handoff, keep them):
//   * No numbers. Proof lives on /showcase, and it is linked. Counts on a bio page are claims
//     without receipts, and they drift (this page had two that contradicted each other).
//   * No client names, no client counts, no fees, no hosts, no codenames.
//   * First person, plain. No hype vocabulary, no exclamation marks.

export const metadata: Metadata = {
  title: 'About — Franklin J Bryant IV',
  description:
    'Claims adjuster, then the books, then the fleet. COO of a back-office firm and founder of Prospyr 305. I design the outcome and the acceptance test; agents do the hours; a person holds the gates.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    siteName: 'Franklin J Bryant IV',
    url: 'https://franklin.simplifyingbusinesses.com/about',
    title: 'About — Franklin J Bryant IV',
    description:
      'Claims adjuster, then the books, then the fleet. COO of a back-office firm and founder of Prospyr 305.',
    images: [
      {
        url: 'https://franklin.simplifyingbusinesses.com/about-portrait.jpg',
        width: 400,
        height: 400,
        alt: 'Franklin J Bryant IV',
      },
    ],
  },
};

const BEATS = [
  {
    n: '01',
    tag: 'Claims',
    title: 'Find out what happened. Write it so it survives a dispute.',
    body: 'Insurance claims teach a discipline nothing else does: the file is the truth, the number has to hold up to someone paid to disagree with it, and “probably” is not a finding. I still work from the file.',
    carry: 'evidence before opinion; every finding with its source.',
  },
  {
    n: '02',
    tag: 'The books',
    title: 'Run the back office owners do at night.',
    body: 'At All Lines Business Solutions I am the COO of a firm that does accounting, payroll, tax and compliance for small businesses. You learn exactly where the hours go, and that most of them go to re-typing the same fact into three systems.',
    carry: 'the acceptance test is the client’s own month, reproduced to the dollar.',
  },
  {
    n: '03',
    tag: 'The fleet',
    title: 'Fix it in our own shop first, then sell what worked.',
    body: 'Prospyr 305 is what came out of automating our own operations. I design the outcome and the acceptance test; a fleet of role-named agents does the building, deploying and auditing around the clock; a person holds the gates. Every action leaves a receipt.',
    carry: 'nothing ships that I could not show a client on their own screen.',
  },
];

const METHOD = [
  {
    k: 'Before a dollar',
    title: 'Assess, then build',
    body: 'Every engagement starts with the AIIO assessment: twelve dimensions, about five minutes, a scored report and a roadmap. We agree on what to build from the report, not from a pitch.',
  },
  {
    k: 'Before a line of code',
    title: 'The test is written first',
    body: 'Acceptance criteria in the client’s words, signed before the build. “The four monthly reports reproduce this month within rounding.” Done means that passes.',
  },
  {
    k: 'Verification',
    title: 'Live, from your seat',
    body: 'Reviews happen on the real system, logged in as you, with the network and console open. I don’t report from a standup or a staging screenshot.',
  },
  {
    k: 'Delivery',
    title: 'Agents by role, not by vendor',
    body: 'A chief-executive agent, an operations agent, a research agent, a deploy agent, an understudy. Each has a scope, a memory and a ledger. Where they run is nobody’s business but ours — that is a security posture, not a secret.',
  },
  {
    k: 'Security',
    title: 'Guards you can watch',
    body: 'SENTINEL audits the AI tools a business has already adopted. Inside our own systems, every tool call passes a deterministic gate before it reaches a model; you can try to break it on the Showcase page.',
  },
  {
    k: 'Governance',
    title: 'Standards before content',
    body: 'What may leave the building, who approves what, and when a human must be in the loop are written down and enforced by the agents themselves. The Agent Code of Conduct is the public version.',
  },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Franklin J Bryant IV',
    url: 'https://franklin.simplifyingbusinesses.com',
    image: 'https://franklin.simplifyingbusinesses.com/about-portrait.jpg',
    jobTitle: ['Chief Operating Officer', 'Founder'],
    worksFor: [
      { '@type': 'Organization', name: 'All Lines Business Solutions', url: 'https://simplifyingbusinesses.com' },
      { '@type': 'Organization', name: 'Prospyr 305', url: 'https://prospyr305.com' },
    ],
    sameAs: [
      'https://github.com/FranklinIV94',
      'https://www.linkedin.com/in/franklin-bryant-36115363/',
      'https://x.com/theycallmeking_',
    ],
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_216px] gap-12 items-start">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">About</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.03] mt-4">
              Franklin J Bryant IV<span className="text-accent">.</span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-5 max-w-[640px]">
              I run the back office for other people’s companies, and I build the systems that run mine.{' '}
              <b className="text-white font-medium">Claims adjuster first, then the books, then the fleet.</b>{' '}
              The job never changed: find out what actually happened, write it down so it holds, put a number
              on it, and make the work finish.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {['COO · All Lines Business Solutions', 'Founder · Prospyr 305'].map((chip) => (
                <span key={chip} className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted border border-border rounded-full px-3 py-1.5">
                  {chip}
                </span>
              ))}
              <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent border border-accent/35 rounded-full px-3 py-1.5">
                Runs an agent fleet
              </span>
            </div>

            {/* Each tile is a link to the thing itself — a claim with a door on it. */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-7 max-w-[640px]">
              {[
                ['Made', 'AIIO assessment', 'https://prospyr305.com/aiio'],
                ['Made', 'SENTINEL security audit', 'https://prospyr305.com/sentinel'],
                ['Wrote', 'Agent Code of Conduct', 'https://github.com/FranklinIV94/agent-code-of-conduct'],
              ].map(([label, value, href]) => (
                <a
                  key={value}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-border bg-surface px-3.5 py-3 hover:border-accent/50 transition-colors"
                >
                  <span className="block font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">{label}</span>
                  <b className="flex items-center gap-1.5 font-medium text-sm text-white group-hover:text-accent transition-colors">
                    {value}
                    <svg className="w-3 h-3 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </b>
                </a>
              ))}
            </div>
          </div>

          {/* Headshot — served as a static asset with intrinsic size set (no layout shift) */}
          <div className="justify-self-start lg:justify-self-end w-[120px] lg:w-[216px] lg:mt-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-portrait.jpg"
              alt="Franklin J Bryant IV"
              width={400}
              height={400}
              className="w-full h-auto aspect-square object-cover rounded-[14px] border border-border"
            />
            <span className="block mt-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
              Florida · remote across 5 states
            </span>
          </div>
        </div>

        {/* ── Three beats ──────────────────────────────────────── */}
        <section className="mt-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Three beats</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            How an adjuster ends up running agents<span className="text-accent">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
            {BEATS.map((b) => (
              <article key={b.n} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex justify-between font-mono text-xs text-accent mb-3">
                  {b.n} <span className="text-muted uppercase tracking-[0.08em]">{b.tag}</span>
                </div>
                <h3 className="font-display font-bold text-xl leading-snug">{b.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed mt-3">{b.body}</p>
                <div className="mt-4 pt-3 border-t border-dashed border-border text-[13px] text-muted">
                  <b className="text-muted font-medium">Carried forward:</b> {b.carry}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── How I work ───────────────────────────────────────── */}
        <section className="mt-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">How I work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Six things you can count on<span className="text-accent">.</span>
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            These are not values. They are procedures, and each one is visible on the{' '}
            <Link href="/showcase" className="text-accent hover:underline">Showcase</Link> page as a receipt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
            {METHOD.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-surface p-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent mb-2.5">{m.k}</div>
                <h3 className="font-display font-bold text-lg leading-snug">{m.title}</h3>
                <p className="text-muted text-[14.5px] leading-relaxed mt-2">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-[#0d0e13] px-5 py-4 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent whitespace-nowrap">
              A human holds three gates
            </span>
            <ol className="flex flex-wrap gap-2.5 list-none m-0 p-0">
              {[
                ['Irreversible', 'delete, migrate, sign'],
                ['Client-facing', 'anything they see or receive'],
                ['Money', 'anything that spends or bills'],
              ].map(([a, b]) => (
                <li key={a} className="font-mono text-[12.5px] text-muted border border-border rounded-full px-3 py-1.5">
                  <b className="text-white font-medium">{a}</b> · {b}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Who I work with / Writing ────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display font-bold text-xl mb-2.5">Who I work with</h3>
            <p className="text-muted text-[14.5px] leading-relaxed">
              Owner-operators of firms with a back office that keeps not getting done: practices, agencies,
              contractors, PEOs, law and accounting firms. Based in Florida; clients in Florida, Georgia,
              Texas, New York and California.
            </p>
            <ul className="mt-4 grid gap-2 list-none p-0">
              {[
                ['Back-office operations', 'ALBS'],
                ['Agentic systems, audits, products', 'Prospyr 305'],
                ['Fractional CFO and project leadership', 'direct'],
              ].map(([a, b]) => (
                <li key={a} className="flex justify-between gap-3 border-b border-dashed border-border pb-2 text-sm">
                  <span className="text-white">{a}</span>
                  <span className="text-muted font-mono text-[11.5px]">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-mono text-[12.5px] leading-relaxed text-muted">
              <b className="text-white font-medium">Builds in</b> Next.js · TypeScript · Python · Postgres ·
              Stripe · AWS / Azure / Vercel / Cloudflare · Anthropic and OpenAI models
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display font-bold text-xl mb-2.5">Writing</h3>
            <p className="text-muted text-[14.5px] leading-relaxed">
              I write about agent governance, agent architecture, and the business of building systems that
              run themselves — from the operator’s chair, with the receipts.
            </p>
            <ul className="mt-4 grid gap-2 list-none p-0">
              {[
                ['Field notes', 'weekly', '/field-notes'],
                ['Blog', 'long form', '/blog'],
                ['RSS', 'feed', '/rss.xml'],
              ].map(([a, b, href]) => (
                <li key={a} className="flex justify-between gap-3 border-b border-dashed border-border pb-2 text-sm">
                  <Link href={href} className="text-white hover:text-accent transition-colors">{a}</Link>
                  <span className="text-muted font-mono text-[11.5px]">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-mono text-[12.5px] text-muted">
              <b className="text-white font-medium">Elsewhere</b>{' '}
              <a href="https://github.com/FranklinIV94" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a> ·{' '}
              <a href="https://www.linkedin.com/in/franklin-bryant-36115363/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a> ·{' '}
              <a href="https://x.com/theycallmeking_" target="_blank" rel="noopener noreferrer" className="hover:text-accent">X</a>
            </div>
            <div className="mt-3 font-mono text-[12.5px] text-muted">
              <b className="text-white font-medium">Standard</b>{' '}
              <a href="https://github.com/FranklinIV94/agent-code-of-conduct" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Agent Code of Conduct
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="mt-14">
          <div className="rounded-2xl border border-border bg-gradient-to-b from-surface to-canvas p-10 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Next</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
              Fifteen minutes, no deck<span className="text-accent">.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto mt-4">
              Bring the work that keeps not getting done. You leave with the acceptance test we would write for
              it, whether or not we work together.
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center mt-6">
              <Link href="/book" className="inline-flex items-center bg-accent text-canvas font-semibold rounded-full px-6 py-3 hover:opacity-90 transition-opacity">
                Book 15 minutes
              </Link>
              <Link href="/showcase" className="inline-flex items-center border border-border text-white font-semibold rounded-full px-6 py-3 hover:border-accent/50 transition-colors">
                See the receipts →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
