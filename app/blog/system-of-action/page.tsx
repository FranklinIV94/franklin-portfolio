export const metadata = {
  title: 'System of Action vs. System of Intelligence — Franklin J Bryant IV',
  description: 'Google Cloud\'s "Agentic Data Cloud" validates a shift we\'ve been building toward for months — and it changes how every business should think about their technology stack.',
  openGraph: {
    title: 'System of Action vs. System of Intelligence',
    description: 'What Google just validated about the architecture we\'re already building.',
    images: ['/blog/intelligence-vs-action.jpg'],
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 font-sans text-gray-900 antialiased">
      {/* Hero */}
      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Blog · May 10, 2026
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          System of Action vs. System of Intelligence
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Google Cloud just announced the &ldquo;Agentic Data Cloud.&rdquo; It validates an architecture
          shift we&apos;ve been building toward for months — and changes how every business
          should think about their technology stack.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-gray-700">Franklin J Bryant IV</span>
          <span>·</span>
          <span>COO, All Lines Business Solutions</span>
        </div>
      </header>

      {/* Featured image */}
      <figure className="mb-16 overflow-hidden rounded-2xl">
        <img
          src="/blog/intelligence-vs-action.jpg"
          alt="System of Intelligence → System of Action"
          className="w-full"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          The shift from passive intelligence to proactive action
        </figcaption>
      </figure>

      {/* Intro */}
      <div className="prose-custom">
        <p className="lead">
          Google Cloud just published{' '}
          <a href="https://cloud.google.com/transform/shift-system-of-action-architecting-the-agentic-data-cloud-ai" target="_blank" rel="noopener">
            Architecting the Agentic Data Cloud
          </a>, and buried in the marketing is a genuinely useful framework. They identify three shifts happening right now that every business needs to understand — not because they&apos;re theoretical, but because they describe the architecture we&apos;ve been living in production for months.
        </p>
      </div>

      {/* Three Shifts */}
      <section className="mt-16">
        <h2>The Three Shifts Google Identified</h2>
        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/three-shifts.jpg" alt="Three shifts in AI architecture" className="w-full" />
        </figure>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {[
            { num: '01', title: 'Human Scale → Agent Scale', desc: 'Your data platform now needs to support always-on, high-velocity, autonomous operations. Agents monitor and operate your business 24/7 at digital speed. The practitioner becomes an orchestrator, not an operator.' },
            { num: '02', title: 'Reactive → Proactive', desc: 'Previous architectures told you what happened yesterday. Agents execute in the moment and shape the future. "The goal is no longer just to know. The goal is to act."' },
            { num: '03', title: 'Data → Knowledge', desc: 'Raw data isn\'t enough. Agents need a knowledge flywheel — understanding relationships, semantics, and usage patterns. Without context, they hallucinate on bad data.' },
          ].map(shift => (
            <div key={shift.num} className="rounded-xl border border-gray-200 p-6">
              <div className="text-3xl font-black text-green-500/20">{shift.num}</div>
              <h4 className="mt-2 font-bold text-gray-900">{shift.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{shift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intelligence vs Action */}
      <section className="mt-20">
        <h2>System of Intelligence vs. System of Action</h2>
        <p>
          Google draws a sharp line between two architectures — and this distinction is the most useful
          thing in the entire paper:
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-bold text-gray-500">System of Intelligence</h3>
            <p className="mt-1 text-sm text-gray-400">The Last Generation</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Reports the news. Waits for a human to ask a question.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Sits as a prediction in a forecasting model, waiting to be acted on.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Reactive by design. Dashboards and alerts.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-700">System of Action</h3>
            <p className="mt-1 text-sm text-green-500">The Agentic Era</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Proactive. Operates on your behalf.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Merges analytical insights with transactional power in one seamless loop.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Your data doesn&apos;t just tell you there is a problem — it actually fixes it.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Four Failures */}
      <section className="mt-20">
        <h2>Why Most Architectures Break at Agent Scale</h2>
        <p>
          Google identifies four structural failures that kill agentic systems. These are worth
          checking your own stack against — because at agent scale, they&apos;re fatal.
        </p>
        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/four-failures.jpg" alt="Four structural failures" className="w-full" />
        </figure>
        <div className="mt-8 space-y-4">
          {[
            { title: 'Fragmented Stack', desc: 'When your data platform is glued together from disjointed parts, agents can\'t form a complete picture. Every seam is a failure point under agentic load.' },
            { title: 'Walled Gardens', desc: 'Vendors demand you move everything into their ecosystem. When you do, your security perimeter dissolves. Access controls, identity management, and lineage get left behind.' },
            { title: 'Trust Gap', desc: 'A catalog that says where things are isn\'t enough. Agents need rich context — what data means, relationships between data, how it\'s used. Without this, agents produce invalid outcomes.' },
            { title: 'Cost Spiral', desc: 'At agent scale, AI should be your greatest asset, not an unpredictable financial liability. Fragmented stacks explode costs under agentic workloads.' },
          ].map(failure => (
            <div key={failure.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-bold text-red-500">!</div>
              <div>
                <h4 className="font-bold text-gray-900">{failure.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{failure.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prospyr Architecture */}
      <section className="mt-20">
        <h2>What We&apos;re Building at Prospyr</h2>
        <p>
          Here&apos;s the thing: the big cloud providers describe this as <em>new</em>. But if you&apos;ve been
          paying attention to the actual builders — the people deploying multi-agent systems in
          production — this framework describes what we&apos;ve been doing for months. Google&apos;s paper validates
          the architecture we built from first principles.
        </p>
        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/prospyr-architecture.jpg" alt="Prospyr multi-agent architecture" className="w-full" />
        </figure>

        <div className="mt-8 space-y-6">
          {[
            {
              title: 'Multi-Agent by Design',
              desc: 'Prospyr Prime, Northstar, Southstar, and Zo aren\'t a single chatbot with tools — they\'re specialized agents with distinct roles, persistent memory, and coordinated execution. Each agent owns a domain. They delegate across extended workflows. This is System of Action architecture: agents don\'t surface information, they execute.',
            },
            {
              title: 'Memory as Architecture',
              desc: 'Every agent decision, client interaction, and project update flows through a persistent memory system. Daily logs feed into long-term memory. Long-term memory shapes future decisions. This is the knowledge flywheel Google describes — implemented with structured markdown and Obsidian, not a proprietary data lake you can\'t escape.',
            },
            {
              title: 'Trust Through Human-in-the-Loop',
              desc: 'Every system we build includes verification gates. The DWC Wage Automation tool requires human review before generating state-compliant legal forms. The ALCC lead pipeline sends real-time notifications but lets humans triage and qualify. Agents propose, humans verify. Trust is architecture, not a compromise.',
            },
            {
              title: 'Dark Data Activation',
              desc: 'Google notes that 90% of enterprise data is unstructured — locked in contracts, emails, PDFs, and images. Our pipeline combines Browser Use (for web-based data sources), LangExtract (for document intelligence), and multi-agent orchestration to activate dark data at scale. This is how we turn unstructured chaos into agent-accessible knowledge.',
            },
          ].map(point => (
            <div key={point.title} className="rounded-xl border border-green-100 bg-gradient-to-br from-green-50/50 to-white p-6">
              <h4 className="font-bold text-green-700">{point.title}</h4>
              <p className="mt-2 leading-relaxed text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What This Means */}
      <section className="mt-20 rounded-2xl bg-gray-900 p-8 text-white sm:p-12">
        <h2 className="text-white">What This Means for Business Owners</h2>
        <p className="text-gray-400">
          If you&apos;re evaluating AI for your business in 2026, the System of Intelligence vs. System of
          Action framework gives you a clear lens:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { q: 'Does it report, or does it act?', a: 'If it only tells you what happened, it\'s a System of Intelligence. Useful, but last-gen.' },
            { q: 'Does it have persistent memory?', a: 'If it starts from scratch every session, it\'s not agentic. Memory turns a chatbot into an operator.' },
            { q: 'Where is the trust boundary?', a: 'Autonomous action requires verification. Good systems design this in from the start.' },
            { q: 'What happens at scale?', a: 'A system that works for 10 transactions might collapse at 10,000. Agent-scale architecture is a different discipline.' },
          ].map(item => (
            <div key={item.q} className="rounded-xl bg-white/5 p-5">
              <h4 className="font-semibold text-green-400">{item.q}</h4>
              <p className="mt-2 text-sm text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 border-t border-gray-200 pt-16 text-center">
        <p className="text-lg text-gray-500">
          The businesses that win the next five years won&apos;t be the ones with the best dashboards.
        </p>
        <p className="mt-2 text-2xl font-black text-gray-900">
          They&apos;ll be the ones that architect systems that act.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition-all hover:bg-green-600"
          >
            Learn More About Prospyr
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
        <p>Franklin J Bryant IV is the COO of All Lines Business Solutions and architect of Prospyr, a multi-agent business operations platform.</p>
        <p className="mt-1">
          <a href="/" className="text-green-600 hover:underline">franklin.simplifyingbusinesses.com</a>
        </p>
      </footer>

      <style>{`
        article { font-family: 'Inter', system-ui, -apple-system, sans-serif; line-height: 1.75; }
        article h2 { font-size: 1.875rem; font-weight: 900; letter-spacing: -0.02em; margin-top: 0; }
        article h3 { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em; }
        article p { margin-top: 1rem; color: #4b5563; font-size: 1.05rem; }
        article p.lead { font-size: 1.2rem; color: #374151; line-height: 1.8; }
        article a { color: #059669; text-decoration: underline; text-underline-offset: 2px; }
        article a:hover { color: #047857; }
        article figure { margin-left: auto; margin-right: auto; }
        article img { display: block; width: 100%; height: auto; border-radius: 0.75rem; }
      `}</style>
    </article>
  );
}
