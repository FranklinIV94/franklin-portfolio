export const metadata = {
  title: 'From Loops to Graphs: What We Learned This Week — Franklin J Bryant IV',
  description: 'One week of AI infrastructure research — seven threads pulled together. Loop engineering, credit ledgers, CDP, Kimi K3, GPU benchmarks, security breaches, and selling to the frontier.',
  keywords: ['agent architecture', 'AI infrastructure', 'loop engineering', 'graph engineering', 'CDP', 'Kimi K3', 'GPU benchmarks', 'Prospyr 305', 'research'],
  openGraph: {
    title: 'From Loops to Graphs: What We Learned This Week',
    description: 'One week of AI infrastructure research — seven threads pulled together.',
    images: ['/blog/loops-to-graphs-hero.jpg'],
  },
};

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'From Loops to Graphs: What We Learned This Week',
    description: 'One week of AI infrastructure research — seven threads pulled together. Loop engineering, credit ledgers, CDP, Kimi K3, GPU benchmarks, security breaches, and selling to the frontier.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      url: 'https://franklin.simplifyingbusinesses.com',
      sameAs: [
        'https://github.com/FranklinIV94',
        'https://www.linkedin.com/in/franklin-bryant-36115363/',
        'https://x.com/theycallmeking_',
        'https://www.crunchbase.com/organization/all-lines-business-solutions',
      ],
    },
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage: 'https://franklin.simplifyingbusinesses.com/blog/loops-to-graphs-week-in-review-july-18',
    keywords: ['agent architecture', 'AI infrastructure', 'loop engineering', 'graph engineering', 'CDP', 'Kimi K3', 'GPU benchmarks', 'Prospyr 305', 'research'],
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Blog · July 18, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          From Loops to Graphs:<br /><span className="text-gray-300">What We Learned This Week</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          One week of research, seven threads pulled, a few patterns we&apos;re already building on.
          Here&apos;s what stuck.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>Prospyr 305</span>
        </div>
      </header>

      {/* Hero image */}
      <figure className="mb-16 mt-10 overflow-hidden rounded-2xl border border-border">
        <img
          src="/blog/loops-to-graphs-hero.jpg"
          alt="Abstract visualization: isolated feedback loops on the left transforming into an interconnected network graph of loop-nodes on the right, with glowing green connections"
          className="w-full"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          From isolated loops to a grounded graph of loops &mdash; the shift that defines this week&apos;s research.
        </figcaption>
      </figure>

      {/* Intro */}
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg text-gray-200 leading-relaxed">
          Every week we track AI infrastructure, agent architecture, and security developments that
          affect how we build. This is the digest for July 14&ndash;18, compiled from our research channel.
        </p>
      </div>

      {/* Section 1: Loops to Graphs */}
      <section className="mt-16">
        <h2 className="font-display font-bold text-3xl text-white mb-4">The Big Shift: Loop Engineering to Graph Engineering</h2>
        <figure className="my-8 overflow-hidden rounded-2xl border border-border">
          <img
            src="/blog/loops-to-graphs-network.jpg"
            alt="Abstract network of interconnected loop-nodes with green glowing connections and ground anchors"
            className="w-full"
          />
          <figcaption className="mt-2 text-xs text-gray-500 text-center">
            A graph of loops: each node is an improvement cycle, anchored to measurements it can&apos;t tune.
          </figcaption>
        </figure>
        <p className="text-gray-300 leading-relaxed">
          Carlos Perez (IntuitMachine) articulated something every team building AI agents is starting
          to feel. The single improvement loop &mdash; measure a metric, adjust, repeat &mdash; is the atom
          of getting better. But single loops fail in four predictable ways.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          A metric optimized hard enough stops measuring what it used to (Goodhart&apos;s Law). A loop
          can&apos;t question whether its own target is correct. Independent loops fight each other. And
          measurement decays while the dashboard stays green.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          The emerging answer isn&apos;t a better loop. It&apos;s a <strong className="text-white">graph of loops</strong> &mdash;
          networks of improvement cycles that watch, feed, constrain, and correct each other.
          Champion-challenger loops. Drift monitors. Audit cycles on held-out data the training loop
          can&apos;t see.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          But here&apos;s the deeper insight: even graphs of loops fail if they&apos;re ungrounded. If every
          loop watches another loop and none touches reality, you get elaborate mutual confirmation.
          The graph needs <strong className="text-white">anchors</strong> &mdash; measurements that can&apos;t
          be argued with, frozen rules the optimizer can&apos;t tune, and human judgment about what
          &ldquo;better&rdquo; means at the root.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">What we&apos;re doing with this</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            Our cron jobs are loops. Email digests, monitors, competitor scans. The next step is
            pairing each with a counter-metric and adding audit cycles that check whether the
            numbers still touch reality.
          </p>
        </div>
      </section>

      {/* Section 2: Credit Ledger */}
      <section className="mt-20">
        <h2 className="font-display font-bold text-3xl text-white mb-4">The Credit Ledger Problem</h2>
        <p className="text-gray-300 leading-relaxed">
          Ayush from Autumn wrote the definitive guide on billing infrastructure for AI applications.
          If you&apos;ve ever wondered how Cursor, Lovable, or OpenAI handle quota-based pricing, it comes
          down to two pieces: a fast counter (Redis) for &ldquo;can this user spend right now?&rdquo; and
          a durable ledger (Postgres) for &ldquo;what happened and why?&rdquo;
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          The hard part isn&apos;t the math. It&apos;s handling parallel agents that all read the same
          balance before any deduction settles. Five sub-agents each costing 500 credits against a
          600-credit balance means massive overspend if billing is async. The solution is
          <strong className="text-white"> lock-and-release</strong>: estimate cost upfront, deduct
          synchronously, refund if the request fails.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">Why this matters for us</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            If we build credit-based pricing for Prospyr 305 services, the lock-and-release pattern is
            non-negotiable. Our cron jobs already spin up parallel sub-agents that could overspend if
            billing weren&apos;t synchronous.
          </p>
        </div>
      </section>

      {/* Section 3: CDP */}
      <section className="mt-20">
        <h2 className="font-display font-bold text-3xl text-white mb-4">CDP: How Agents Actually Control Browsers</h2>
        <p className="text-gray-300 leading-relaxed">
          Kyle Jeong from Browserbase wrote a deep guide on Chrome DevTools Protocol &mdash; the wire
          protocol between DevTools and Chromium that every browser agent sits on top of.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          The wire format is simple: JSON commands over WebSocket with IDs for matching responses.
          Events flow back when browser state changes. The hard part isn&apos;t sending messages.
          It&apos;s tracking the lifecycle churn &mdash; targets appearing and disappearing, execution
          contexts destroyed on navigation, cross-origin iframes split into separate processes by
          Site Isolation.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          That&apos;s why Puppeteer and Playwright exist. They handle the lifecycle so you don&apos;t.
          Building on raw CDP means becoming a lifecycle manager.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">Our connection</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            Browser-harness wraps CDP with self-healing helpers so agents control Chrome without
            managing session lifecycle. This article validated the approach &mdash; don&apos;t build on
            raw CDP, but understand it to make the right architecture decisions.
          </p>
        </div>
      </section>

      {/* Section 4: Kimi K3 */}
      <section className="mt-20">
        <h2 className="font-display font-bold text-3xl text-white mb-4">Kimi K3: Frontier Model, Hallucination Problem</h2>
        <p className="text-gray-300 leading-relaxed">
          Moonshot AI shipped a 2.8 trillion parameter open-weight model with a 1M token context window.
          It mostly beats Claude Opus 4.8 and GPT-5.5 on benchmarks. Open weights arrive July 27.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          But the honest analysis reveals a tradeoff the launch hype buried. K3&apos;s raw accuracy
          improved from 33% to 46% over the previous version. Its hallucination rate climbed from 39%
          to 51% at the same time. It gets more answers right <em>and</em> fabricates more. You
          don&apos;t want this model unsupervised on factual tasks.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          On price, K3 is $3/$15 per million tokens. DeepSeek V4 Pro is $0.44/$0.87 &mdash; roughly 7x
          cheaper. GLM-5.2 (our current model) is $1.40/$4.40 &mdash; a third to half the price of K3.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">Our take</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            We&apos;re on GLM-5.2 for good reason. K3 is impressive but not a clear upgrade for our use
            cases. The hallucination rate makes it risky for unsupervised work.
          </p>
        </div>
      </section>

      {/* Section 5: GPU Benchmarks */}
      <section className="mt-20">
        <h2 className="font-display font-bold text-3xl text-white mb-4">GPU Buying: Bandwidth Over VRAM</h2>
        <p className="text-gray-300 leading-relaxed">
          A detailed GPU benchmark for local LLM inference surfaced a principle worth remembering:
          <strong className="text-white"> VRAM tells you what fits. Bandwidth tells you what works.</strong>
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Every token requires reading the entire model from VRAM. Memory bandwidth is the actual
          bottleneck for autoregressive generation. A 13B model at Q4 needs ~18GB read per token. A
          card with 3.7x more bandwidth generates tokens 3.7x faster, same model, same VRAM capacity.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          The &ldquo;AI-ready&rdquo; mini PCs with 96GB unified memory are traps. DDR5 bandwidth is
          ~256 GB/s. A used RTX 3090 at $800 has 936 GB/s &mdash; 3.4x faster for a quarter the price.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">Value pick</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            Used RTX 3090 ($600&ndash;1,050). 24GB GDDR6X at 936 GB/s. Best overall value for local
            inference.
          </p>
        </div>
      </section>

      {/* Section 6: Security */}
      <section className="mt-20">
        <h2 className="font-display font-bold text-3xl text-white mb-4">Security: Hugging Face Breach and Suno Leak</h2>
        <p className="text-gray-300 leading-relaxed">
          Two security stories this week, both relevant to AI infrastructure.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Hugging Face got hit by an end-to-end autonomous AI attack. An agent system exploited two
          code-execution flaws in HF&apos;s dataset processing pipeline, escalated to node-level access,
          harvested cloud credentials, and moved laterally across internal clusters over a weekend.
          The dataset loader vulnerability means a malicious dataset on HF can execute code on your
          machine when you load it. Dataset loaders are an attack surface, not a data ingestion path.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Suno got hit differently &mdash; a repo leak exposed their entire training pipeline. 6.18M
          songs indexed from Genius, 2.7M matched to YouTube, automated audio downloads at scale,
          7.8TB training dataset built from copyrighted material. It&apos;s code-level evidence of
          industrial-scale copyright harvesting, the exact pattern the RIAA lawsuits alleged.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">What we&apos;re taking from this</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            Treat Hugging Face pulls as untrusted code execution. Sanitize anything that touches a
            template engine. And assume your repos could become public &mdash; don&apos;t put anything
            in version control that you can&apos;t defend.
          </p>
        </div>
      </section>

      {/* Section 7: Selling to the Frontier */}
      <section className="mt-20">
        <h2 className="font-display font-bold text-3xl text-white mb-4">Selling to the Frontier</h2>
        <p className="text-gray-300 leading-relaxed">
          Rishabh Kaul identified a pattern across the fastest-growing AI infrastructure companies.
          They&apos;re not selling to &ldquo;enterprise&rdquo; generically. They&apos;re selling to the
          companies furthest ahead &mdash; Anthropic, OpenAI, Lovable, Harvey &mdash; the AI-native
          companies on valuation treadmills hitting technical bottlenecks nobody else has experienced
          yet.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          These customers hit problems 6-12 months before the rest of the market. They&apos;ve already
          tried solving it internally and failed. They compare your price not to another vendor but to
          engineering time, compute costs, and delayed product launches. Paying $2-3M/year is cheap
          against a $20M inference bill.
        </p>
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h4 className="font-bold text-accent">The parallel for us</h4>
          <p className="mt-2 leading-relaxed text-gray-300">
            The accounting firms most ahead on technology adoption are hitting integration
            bottlenecks the rest of the market will hit in 12-18 months. If we solve those problems
            for the early adopters, the case studies create the market with everyone else. Information
            advantage comes before technology advantage.
          </p>
        </div>
      </section>

      {/* Closing */}
      <div className="mt-16 border-t border-border pt-8">
        <p className="text-gray-400 text-sm">
          This is a weekly research digest from Prospyr 305. We track AI infrastructure, agent
          architecture, and security developments that affect how we build. Notes are compiled from
          our research channel and published every Friday.
        </p>
      </div>
    </article>
  );
}