import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Use AI — Policy | Franklin J Bryant IV',
  description:
    'Our operating policy for AI: where it is used, where a human signs off, how client data is handled, and how to tell us to keep your work entirely manual.',
  keywords: [
    'AI usage policy',
    'responsible AI use',
    'AI client data policy',
    'human in the loop',
    'AI governance',
    'agent governance',
    'AI disclosure',
  ],
  alternates: { canonical: '/field-notes/ai-usage-policy' },
  openGraph: {
    title: 'How We Use AI',
    description:
      'Where AI sits in the work, where a human signs off, and how to keep your work entirely manual.',
    type: 'article',
    url: 'https://franklin.simplifyingbusinesses.com/field-notes/ai-usage-policy',
  },
};

export default function AiUsagePolicy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How We Use AI',
    description:
      'Our operating policy for AI: where it is used, where a human signs off, how client data is handled, and how to tell us to keep your work entirely manual.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      url: 'https://franklin.simplifyingbusinesses.com',
    },
    datePublished: '2026-10-17',
    dateModified: '2026-10-17',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage: 'https://franklin.simplifyingbusinesses.com/field-notes/ai-usage-policy',
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Field Notes · Policy · Updated October 17, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          How We Use AI<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          A living document. Essays are fixed once published; this one changes as our practice does.
          It describes what we actually run, not what sounds good on a capabilities page.
        </p>
      </header>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          We build with AI, and we sell AI systems to other businesses, so the honest version of this
          policy has to answer one question: <strong className="text-white">who is accountable when the machine is wrong?</strong>{' '}
          The answer is a person, by name, every time. Everything below follows from that.
        </p>

        <h2 className="font-display font-bold text-2xl text-white pt-8">The four rules</h2>

        <p>
          <strong className="text-white">1. A named human owns every deliverable.</strong> AI drafts,
          summarizes, extracts, and checks. It does not sign. Nothing reaches a client — a filing, a
          return, an audit finding, a contract — without a person who read it end to end and put their
          name on it. If we cannot point to the human who owns a piece of work, that work does not go out.
        </p>

        <p>
          <strong className="text-white">2. No autonomous client-facing action.</strong> Our systems
          propose; a human approves. Sending, filing, paying, submitting, or committing something on a
          client&apos;s behalf sits behind an approval gate by design, not by configuration. We build
          the gate first and the automation second — that order matters, and it is the opposite of how
          most agent projects get built.
        </p>

        <p>
          <strong className="text-white">3. Your data is not training data.</strong> Client data is
          processed to do the work you hired us for and for nothing else. It does not get used to train
          models, it does not get pasted into consumer AI tools, and it lives in environments we
          control rather than a vendor&apos;s shared playground. Access is scoped to the systems that
          need it, not granted account-wide.
        </p>

        <p>
          <strong className="text-white">4. You can switch it off.</strong> Tell us a piece of work
          should be handled entirely by people and it will be. That applies to a whole engagement, one
          system, or one document. No fee change, no argument, no upsell — it&apos;s your work.
        </p>

        <h2 className="font-display font-bold text-2xl text-white pt-8">Where we do use it</h2>

        <div className="rounded-xl border border-border bg-white/5 p-5">
          <ul className="space-y-2 text-gray-300">
            <li>• Drafting and restructuring writing, proposals, and internal documentation.</li>
            <li>• Research intake — reading, extracting, and summarizing public sources at volume.</li>
            <li>• Code we build and maintain, including the checks that catch our own mistakes.</li>
            <li>• Internal operations: routing, scheduling, reconciliation, and reporting.</li>
            <li>• Review passes that look for what a tired human would miss at 11pm.</li>
          </ul>
        </div>

        <h2 className="font-display font-bold text-2xl text-white pt-8">Where we do not</h2>

        <div className="rounded-xl border border-border bg-white/5 p-5">
          <ul className="space-y-2 text-gray-300">
            <li>• Final judgment on a client&apos;s books, taxes, eligibility, or legal position.</li>
            <li>• Anything submitted to a government agency or a carrier without human review.</li>
            <li>• Client-identifying data inside third-party AI services.</li>
            <li>• Conversations that require advice. The system can brief; a person advises.</li>
          </ul>
        </div>

        <h2 className="font-display font-bold text-2xl text-white pt-8">How we test our own claim</h2>

        <p>
          A policy nobody checks is decoration. Two habits keep this one honest. First, every system we
          ship passes a pre-launch security gate before it touches a real user —{' '}
          <a href="/field-notes/pre-launch-security-checklist" className="text-accent">
            the checklist is public
          </a>
          . Second, when an automation produces something wrong, we treat it as an operating failure of
          ours, not a curiosity about the model. The machine did not sign anything.
        </p>

        <h2 className="font-display font-bold text-2xl text-white pt-8">Hold us to it</h2>

        <p>
          If you work with us and any of the four rules above does not match what you are seeing, tell
          us directly and we will fix it or explain exactly why it happened:{' '}
          <a href="mailto:franklin@prospyr305.com" className="text-accent">
            franklin@prospyr305.com
          </a>
          . A policy you cannot challenge is a brochure.
        </p>

        <p className="pt-4 text-sm text-gray-500 italic">
          This note is a living document and will be revised as our tooling and our standards change.
          When it changes, the date at the top changes with it.
        </p>
      </div>
    </article>
  );
}
