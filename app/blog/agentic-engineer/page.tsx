export const metadata = {
  title: "I'm Not an AI Engineer. I'm an Agentic Engineer. — Franklin J Bryant IV",
  description: 'The biggest opportunity in AI isn\'t building models — it\'s building businesses where AI is the execution layer. Why agentic engineering is a fundamentally different skill set than what most people are learning.',
  keywords: ['agentic engineering', 'AI architecture', 'autonomous systems', 'AI agents', 'business automation', 'Prospyr 305'],
  openGraph: {
    title: "I'm Not an AI Engineer. I'm an Agentic Engineer.",
    description: 'Why the future of business isn\'t about using AI — it\'s about building systems where AI executes.',
    images: ['/blog/agentic-engineer-hero.jpg'],
  },
};

export default function AgenticEngineer() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "I'm Not an AI Engineer. I'm an Agentic Engineer.",
    description: 'The biggest opportunity in AI isn\'t building models — it\'s building businesses where AI is the execution layer.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      url: 'https://franklin.simplifyingbusinesses.com',
    },
    datePublished: '2026-05-17',
    dateModified: '2026-05-17',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage: 'https://franklin.simplifyingbusinesses.com/blog/agentic-engineer',
    keywords: ['agentic engineering', 'AI architecture', 'autonomous systems', 'AI agents', 'business automation', 'Prospyr 305'],
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
          Blog · May 17, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          I&apos;m Not an AI Engineer.<br />
          <span className="text-accent">I&apos;m an Agentic Engineer.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Why the future of business isn&apos;t about using AI — it&apos;s about building systems where AI executes.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>COO, All Lines Business Solutions</span>
        </div>
      </header>

      {/* Hero image */}
      <figure className="mb-16 overflow-hidden rounded-2xl">
        <img
          src="/blog/agentic-engineer-hero.jpg"
          alt="Agentic engineering command center — autonomous systems orchestrating business operations"
          className="w-full"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          The agentic engineer doesn&apos;t write every line of code — they architect systems where AI executes reliably
        </figcaption>
      </figure>

      {/* Intro */}
      <div className="space-y-6 text-gray-300 text-base leading-relaxed font-body">
        <p className="text-lg text-gray-200 leading-relaxed">
          Everyone&apos;s sharing roadmaps to become an &quot;AI engineer.&quot;
        </p>

        <p>
          Learn Python. Take Karpathy&apos;s course. Build a RAG app. Deploy on Hugging Face. Done — you&apos;re an AI engineer.
        </p>

        <p>
          But here&apos;s what nobody&apos;s explaining: <strong className="text-white">the biggest opportunity in AI right now isn&apos;t in building models. It isn&apos;t in fine-tuning. It isn&apos;t in building chatbot wrappers.</strong>
        </p>

        <p className="text-lg text-accent font-semibold">
          It&apos;s in building businesses where AI is the execution layer.
        </p>

        <p>
          I didn&apos;t learn transformers so I could build a transformer. I learned enough to understand what the model can do, what it can&apos;t do, and how to build systems around it that turn capability into output. Consistently. Reliably. In production. For real clients with real money on the line.
        </p>

        <p>
          That&apos;s agentic engineering. And it&apos;s a fundamentally different skill set than what most people are learning.
        </p>

        {/* The Difference */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Difference</h2>

        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/agentic-vs-ai-engineer.jpg" alt="AI Engineer vs Agentic Engineer architecture comparison" className="w-full rounded-xl" />
          <figcaption className="mt-3 text-center text-sm text-gray-400">
            AI engineering optimizes models. Agentic engineering optimizes business outcomes.
          </figcaption>
        </figure>

        {/* Comparison table */}
        <div className="my-8 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Dimension</th>
                <th className="px-4 py-3 text-center text-gray-400 font-mono text-xs">AI Engineer</th>
                <th className="px-4 py-3 text-center text-accent font-mono text-xs">Agentic Engineer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { dim: 'Core Question', ai: 'How do I make this model perform better?', agent: 'How do I make this model produce consistent, trustworthy output inside a business process?' },
                { dim: 'Environment', ai: 'Notebooks, Kaggle, benchmarks', agent: 'Production systems with paying clients, compliance, and security constraints' },
                { dim: 'Failure Mode', ai: 'Lower accuracy score', agent: 'Malpractice, federal violations, lost client trust' },
                { dim: 'Memory', ai: 'Context window within a session', agent: 'Durable external memory that persists across days and weeks' },
                { dim: 'Definition of Done', ai: 'Benchmark metric improves', agent: 'Observable behavior meets spec, nothing breaks, proof is external' },
                { dim: 'Scope', ai: 'Model performance', agent: 'End-to-end business system' },
                { dim: 'Risk Tolerance', ai: 'Hallucination is an inconvenience', agent: 'Hallucination is a liability' },
              ].map(row => (
                <tr key={row.dim} className="hover:bg-surface/50">
                  <td className="px-4 py-3 text-white font-medium">{row.dim}</td>
                  <td className="px-4 py-3 text-gray-400">{row.ai}</td>
                  <td className="px-4 py-3 text-accent">{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          An AI engineer asks: <em>&quot;How do I make this model perform better on this benchmark?&quot;</em>
        </p>

        <p>
          An agentic engineer asks: <em>&quot;How do I make this model produce consistent, trustworthy output inside a business process where mistakes cost real money and real trust?&quot;</em>
        </p>

        <p>
          The first question lives in notebooks and Kaggle. The second lives in production systems with paying clients, compliance requirements, and security constraints.
        </p>

        <p>
          When a trust document has the wrong beneficiary name, that&apos;s not a hallucination — that&apos;s a malpractice issue. When a client&apos;s financial data leaks, that&apos;s not a model safety problem — that&apos;s a federal violation.
        </p>

        <p className="text-accent font-semibold">
          The stakes are different. So the engineering has to be different.
        </p>

        {/* What We Built */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">What We Actually Built</h2>

        <p>
          People ask what our &quot;AI strategy&quot; is. The question misses the point. We don&apos;t have an AI strategy. We have a <strong className="text-white">business strategy that happens to be executable because of AI</strong>.
        </p>

        {/* Production systems grid */}
        <div className="my-8 grid gap-4 sm:grid-cols-2">
          {[
            { icon: '📋', title: 'Client Onboarding Portal', desc: 'Intake forms, auto-lead creation, OSINT enrichment (Apollo, Sherlock, GhostTrack), routing. Built in a week. Live and collecting leads.', tag: 'Production' },
            { icon: '📑', title: 'Estate Planning System', desc: 'Three trusts for a physician client. Tracks 5 blocking items before execution. Coordinates with reviewing attorney. Plain-language client briefings.', tag: 'Production' },
            { icon: '🏗️', title: 'Construction Compliance System', desc: 'Maps every Florida permit, inspection, and structural test. Defines who holds what document, when, and what happens when they don\'t.', tag: 'Production' },
            { icon: '🌙', title: 'Overnight Agents', desc: 'Research competitors, monitor market shifts, maintain a knowledge vault, deliver morning briefings. Not reminders — autonomous workers producing real intel.', tag: 'Production' },
          ].map(system => (
            <div key={system.title} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{system.icon}</span>
                <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
                  {system.tag}
                </span>
              </div>
              <h4 className="font-bold text-white">{system.title}</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{system.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm italic">
          None of these are demos. They&apos;re all in production. They all have real users. They all generate revenue.
        </p>

        {/* The Architecture */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Architecture Nobody Talks About</h2>

        <p>
          The roadmap articles skip the hard parts. Here&apos;s what actually makes agentic systems work:
        </p>

        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/agentic-engineer-architecture.jpg" alt="Four pillars of agentic engineering: Durable Memory, Definition of Done, Security-First, Four Laws" className="w-full rounded-xl" />
          <figcaption className="mt-3 text-center text-sm text-gray-400">
            The four architectural pillars that make agentic systems work in production
          </figcaption>
        </figure>

        {/* Pillar 1 */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">01</span> Durable External Memory
        </h3>

        <p>
          The model can&apos;t remember anything. Not between conversations. Not between sessions. Not between days.
        </p>

        <p>
          The &quot;agentic&quot; part isn&apos;t the model — it&apos;s the system you build around the model that gives it continuity. We use curated memory files: long-term memory, daily logs, task state, and a knowledge vault. Every time the agent starts, it reads these files and reconstructs context from scratch.
        </p>

        <div className="my-6 bg-accent/5 border border-accent/20 rounded-xl p-6">
          <p className="text-sm text-gray-300 mb-3">
            Research published <em>this week</em> confirms it: long conversation histories actively degrade agent performance. The models get pulled toward past interactions instead of future goals. Curated external state outperforms raw context dumps. Every time.
          </p>
          <p className="text-accent font-semibold text-sm">
            The source of truth stays outside the conversation.
          </p>
        </div>

        {/* Pillar 2 */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">02</span> Definition of Done
        </h3>

        <p>
          Most people give agents vibes: <em>&quot;improve the dashboard,&quot;</em> <em>&quot;make onboarding smoother.&quot;</em> Agents interpret vibes by optimizing for whatever is easiest to prove. They&apos;ll make things look cleaner, add tests that pass, reduce steps — none of which means the product got better.
        </p>

        <p>
          The fix isn&apos;t a smarter model. It&apos;s a stronger contract. Every task our agents get has five components:
        </p>

        <div className="my-8 grid gap-3">
          {[
            { num: '1', label: 'Observable behavior', desc: 'What the user can see and verify' },
            { num: '2', label: 'Negative cases', desc: 'What must NOT happen under any circumstance' },
            { num: '3', label: 'Scope boundaries', desc: 'Which files and systems can be touched' },
            { num: '4', label: 'Validation evidence', desc: 'Tests, lint, screenshots, file paths — proof outside the chat' },
            { num: '5', label: 'Stop conditions', desc: 'When to stop and report blockers' },
          ].map(item => (
            <div key={item.num} className="flex items-start gap-3 bg-surface border border-border rounded-lg p-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {item.num}
              </span>
              <div>
                <span className="font-semibold text-white">{item.label}</span>
                <span className="text-gray-400 ml-2 text-sm">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pillar 3 */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">03</span> Security-First by Default
        </h3>

        <p>
          When you&apos;re handling client tax returns, trust documents, and financial data, you can&apos;t afford to be careless with access. We enforce strict access controls. Authorized numbers only. No response to unknown senders. Period.
        </p>

        <p>
          The security posture isn&apos;t an afterthought — it&apos;s the foundation. If the model can&apos;t be trusted with the data, the system can&apos;t be trusted with the client.
        </p>

        {/* Pillar 4 */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">04</span> The Four Laws
        </h3>

        <p>
          We operate by four non-negotiable principles:
        </p>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          {[
            { num: '1', law: 'ACT, DON\'T NARRATE', desc: 'If you can do it now, do it. Don\'t describe plans.' },
            { num: '2', law: 'PROVE COMPLETION', desc: 'Never say "done" without evidence. Show file paths, outputs, receipts.' },
            { num: '3', law: 'WRITE IMMEDIATELY', desc: 'Write facts to disk before doing anything else. Memory is files, not mental notes.' },
            { num: '4', law: 'BE PROACTIVE', desc: 'Stay three steps ahead. Do useful work without being asked.' },
          ].map(item => (
            <div key={item.num} className="rounded-xl border border-accent/30 bg-accent/5 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-black text-accent/30">{item.num}</span>
                <span className="font-bold text-accent text-sm">{item.law}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 italic">
          These aren&apos;t aspirations. They&apos;re operational rules enforced every session. And they came from failure — each law was written because something broke and we needed a principle that would have prevented it.
        </p>

        {/* What Roadmaps Get Wrong */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">What the Roadmaps Get Wrong</h2>

        <p>
          The &quot;Zero to AI Engineer&quot; roadmaps are not wrong. They&apos;re incomplete. They teach you the building blocks — Python, transformers, embeddings, RAG, agents, deployment.
        </p>

        <p>
          What they skip is the part where you take those building blocks and build something that works for a business.
        </p>

        <div className="my-8 grid gap-3">
          {[
            { gap: 'How to handle a model hallucination when a client is watching' },
            { gap: 'How to maintain agent state across days and weeks' },
            { gap: 'How to build systems that work when you\'re not in the room' },
            { gap: 'How to secure client data in an AI-native workflow' },
            { gap: 'How to define "done" precisely enough that a machine can execute it' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-3">
              <span className="text-red-400 text-sm">✗</span>
              <span className="text-gray-300 text-sm">{item.gap}</span>
            </div>
          ))}
        </div>

        <p>
          That&apos;s the gap. And that&apos;s the gap we fill.
        </p>

        {/* The Opportunity */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Opportunity</h2>

        <div className="my-8 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Player</th>
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Move</th>
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { player: 'OpenAI', move: '$4B DeployCo — FDEs embedded in enterprise', target: 'Fortune 500' },
                { player: 'Anthropic', move: 'Claude Platform on AWS — managed agents', target: 'Enterprise AWS' },
                { player: 'Google', move: '50+ MCP servers — managed endpoints', target: 'Enterprise GCP' },
                { player: 'ALBS', move: 'AI-accelerated development for SMB/mid-market', target: 'The gap they\'re missing' },
              ].map(row => (
                <tr key={row.player} className={row.player === 'ALBS' ? 'bg-accent/5' : ''}>
                  <td className="px-4 py-3 text-white font-medium">{row.player}</td>
                  <td className="px-4 py-3 text-gray-300">{row.move}</td>
                  <td className={`px-4 py-3 ${row.player === 'ALBS' ? 'text-accent font-semibold' : 'text-gray-400'}`}>
                    {row.target}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The infrastructure giants are racing to build deployment layers. Their target: enterprise. Their blind spot: <strong className="text-white">SMB and mid-market</strong>.
        </p>

        <p>
          That&apos;s where we operate. That&apos;s where the gap is. And that&apos;s where agentic engineering — not just AI engineering — creates real value.
        </p>

        <p>
          The market doesn&apos;t need more people who can fine-tune a model. It needs people who can take a model, wrap it in the right architecture, point it at a real business problem, and trust it to execute while they sleep.
        </p>

        <div className="my-8 bg-accent/5 border border-accent/20 rounded-xl p-6">
          <p className="text-lg font-semibold text-white mb-4">That&apos;s what we do. And we&apos;re just getting started.</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Durable memory over raw context</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Definition of done over vibes</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Security-first over move-fast-and-break</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Prove completion over trust-me-bro</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Business outcomes over benchmark scores</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm text-gray-400 mb-3 font-mono">References</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="https://x.com/dair_ai/status/2056018543850754283" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                DAIR.AI — Top AI Papers of the Week (May 11-17, 2026)
              </a>
              <span className="text-gray-500"> — Memory Curse, δ-mem, Is Grep All You Need?</span>
            </li>
            <li>
              <a href="https://x.com/nurijanian/status/2055927283991654775" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                George @nurijanian — /goal for Product Managers
              </a>
              <span className="text-gray-500"> — Agent loops, definition of done, and the Ralph Wiggum pattern</span>
            </li>
            <li>
              <a href="https://x.com/Shruti_0810/status/2055676059480395990" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Shruti — Zero to AI Engineer Roadmap
              </a>
              <span className="text-gray-500"> — The roadmap that sparked this response</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-display font-bold text-2xl mb-3 text-white">Building with AI? Let&apos;s talk.</h3>
        <p className="text-gray-400 mb-6">I architect AI-accelerated systems that research, execute, and scale — with security-first methodology and production-tested architecture.</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-canvas font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </article>
  );
}