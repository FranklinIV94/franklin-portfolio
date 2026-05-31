export const metadata = {
  title: 'The Research Intelligence Pipeline: From Paper to Production in 24 Hours — Franklin J Bryant IV',
  description: 'How we turned a week of AI research papers into production insights, connected every finding to our stack, and built a research pipeline that delivers competitive advantage in real time.',
  keywords: ['AI research', 'intelligence pipeline', 'competitive advantage', 'R&D automation', 'Prospyr 305', 'agentic engineering'],
  openGraph: {
    title: 'The Research Intelligence Pipeline',
    description: 'From paper to production in 24 hours — how we weaponized AI research.',
    images: ['/blog/research-pipeline-hero.jpg'],
  },
};

export default function ResearchIntelligencePipeline() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Research Intelligence Pipeline',
    description: 'From paper to production in 24 hours — how we weaponized AI research into competitive advantage with a consume-connect-ship pipeline.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      url: 'https://franklin.simplifyingbusinesses.com',
    },
    datePublished: '2026-05-31',
    dateModified: '2026-05-31',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage: 'https://franklin.simplifyingbusinesses.com/blog/research-intelligence-pipeline',
    keywords: ['AI research', 'intelligence pipeline', 'competitive advantage', 'R&D automation', 'Prospyr 305', 'agentic engineering'],
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
          Blog · May 31, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The Research Intelligence Pipeline<br />
          <span className="text-accent">From Paper to Production in 24 Hours</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          How we turned a week of AI research papers into production insights, connected every finding
          to our stack, and built a research pipeline that delivers competitive advantage in real time.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>AI Lead, Prospyr 305</span>
        </div>
      </header>

      {/* Hero image */}
      <figure className="mb-16 overflow-hidden rounded-2xl">
        <img
          src="/blog/research-pipeline-hero.jpg"
          alt="Research intelligence pipeline — from raw papers to production-connected insights"
          className="w-full"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          Research doesn&apos;t rot in folders anymore. It flows through a pipeline straight into architecture decisions.
        </figcaption>
      </figure>

      {/* The Problem */}
      <div className="space-y-6 text-gray-300 text-base leading-relaxed font-body">
        <p className="text-lg text-gray-200 leading-relaxed">
          Here&apos;s what happens to most AI research: someone reads a paper, bookmarks it, and it dies in a folder.
        </p>

        <p>
          The insight never connects to the product. The architecture never ships. The competitive signal
          gets filed under &quot;interesting&quot; and forgotten.
        </p>

        <p className="text-accent font-semibold">
          We stopped doing that. Here&apos;s what replaced it.
        </p>

        {/* The Pipeline */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Pipeline</h2>

        <p>
          Every piece of research now follows a three-step process before it leaves the channel:
        </p>

        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {[
            { num: '01', title: 'Consume', desc: 'Read the paper, watch the talk, parse the thread. Extract what matters.' },
            { num: '02', title: 'Connect', desc: 'Map every finding to something in our stack — a service, a tool, an architecture decision, a client deliverable.' },
            { num: '03', title: 'Ship', desc: 'Post to #research with connections and action items. If it doesn\'t connect, it doesn\'t get posted.' },
          ].map(step => (
            <div key={step.num} className="rounded-xl border border-accent/20 bg-accent/5 p-6">
              <div className="text-3xl font-black text-accent/20">{step.num}</div>
              <h4 className="mt-2 font-bold text-white text-lg">{step.title}</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p>
          No more &quot;interesting article&quot; bookmarks. Every signal that enters the pipeline comes out
          the other side connected to a real project, a real service category, or a real action item.
        </p>

        {/* This Week's Research */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">What Flowed Through This Week</h2>

        <p>
          In one week, nine research signals passed through the pipeline. Here&apos;s what went in, what
          came out, and what it means for businesses paying attention.
        </p>

        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/research-pipeline-flow.jpg" alt="Research pipeline flow diagram showing nine signals entering and connected insights leaving" className="w-full rounded-xl" />
          <figcaption className="mt-3 text-center text-sm text-gray-400">
            Nine research signals in, every one mapped to a production connection
          </figcaption>
        </figure>

        {/* Signal 1: Financial Analysis */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">Signal 1</span> AI-Powered Financial Analysis
        </h3>

        <p>
          A new MCP server for SEC filings. FinanceToolkit pulling public market data.
          Beneish, Altman, Piotroski forensic scoring built in. DefiLlama for crypto.
        </p>

        <p>
          <strong className="text-white">The connection:</strong> This maps directly to Prospyr 305
          Service #8 — Competitive Intelligence &amp; Research. We can now offer forensic financial
          analysis as a self-serve tool for clients who need market intelligence without a $50K
          Bloomberg terminal.
        </p>

        <div className="my-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Tool</th>
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Function</th>
                <th className="px-4 py-3 text-left text-accent font-mono text-xs">Service Mapping</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { tool: 'edgar-crawler', func: 'Diff Risk Factors / MD&A year-over-year', mapping: 'Competitive Intelligence' },
                { tool: 'FinanceToolkit', func: 'Public market data & ratios', mapping: 'Competitive Intelligence' },
                { tool: 'Beneish / Piotroski', func: 'Forensic fraud scoring', mapping: 'Hardened Systems & Compliance' },
                { tool: 'DefiLlama / Nansen', func: 'Crypto on-chain analytics', mapping: 'Competitive Intelligence' },
                { tool: 'edgartools MCP', func: 'SEC filing extraction via MCP', mapping: 'MCP & Integration Engineering' },
              ].map(row => (
                <tr key={row.tool} className="hover:bg-surface/50">
                  <td className="px-4 py-3 text-white font-medium">{row.tool}</td>
                  <td className="px-4 py-3 text-gray-400">{row.func}</td>
                  <td className="px-4 py-3 text-accent">{row.mapping}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Signal 2: Cross-Tokenizer Distillation */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">Signal 2</span> Cross-Tokenizer Multi-Teacher Distillation
        </h3>

        <p>
          NVIDIA Research (Pavlo Molchanov) published MOPD: a method to distill knowledge from
          multiple teacher models across different tokenizer families into a single small model.
        </p>

        <div className="my-6 bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
              45% Improvement
            </span>
            <span className="text-sm text-gray-400">MMLU Score</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-canvas rounded-lg p-4">
              <p className="text-sm text-gray-400">Llama-3.2-1B Baseline</p>
              <p className="text-2xl font-bold text-gray-400">32.05</p>
            </div>
            <div className="bg-canvas rounded-lg p-4">
              <p className="text-sm text-gray-400">Llama-3.2-1B + MOPD</p>
              <p className="text-2xl font-bold text-accent">46.32</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Teachers: Qwen3-4B + Phi-4-Mini + Llama-3B → Student: Llama-3.2-1B.
            Cross-family distillation is now possible.
          </p>
        </div>

        <p>
          <strong className="text-white">The connection:</strong> Service #6 — AI Infrastructure
          &amp; Self-Hosted Models. When we deploy private models for clients, MOPD means we can
          distill the best capabilities from multiple model families into a single efficient model
          that runs on client hardware. Lower cost, higher quality, no vendor lock-in.
        </p>

        {/* Signal 3: Shared Memory */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">Signal 3</span> The Shared Memory Problem
        </h3>

        <p>
          Pejman Pour-Moezzi (founder of Magoosh) wrote the piece that resonated most this week:
          <em>&quot;Stop Giving Every Agent Its Own Skull.&quot;</em>
        </p>

        <div className="my-6 bg-accent/5 border border-accent/20 rounded-xl p-6">
          <p className="text-lg text-white italic">
            &quot;Agents copy the biggest human limitation: knowledge in skulls that don&apos;t sync.&quot;
          </p>
          <p className="mt-3 text-sm text-gray-400">
            — Pejman Pour-Moezzi, Stop Giving Every Agent Its Own Skull
          </p>
        </div>

        <p>
          He names OpenClaw specifically as the agent with the richest context. And he&apos;s right —
          our MemPalace knowledge graph, daily memory logs, and tiered memory system are exactly
          what he&apos;s describing as the missing piece.
        </p>

        <p>
          Three projects are attacking this problem right now:
        </p>

        <div className="my-6 grid gap-3">
          {[
            { name: 'GBrain', desc: 'Shared knowledge graph via MCP — any agent can query what any other agent knows' },
            { name: 'CASS', desc: 'Cross-agent session search — agents can find relevant context from past conversations' },
            { name: 'Supermemory', desc: 'Self-hosted agent memory — persistent, queryable, version-controlled context' },
          ].map(item => (
            <div key={item.name} className="flex items-start gap-3 bg-surface border border-border rounded-lg p-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {item.name[0]}
              </span>
              <div>
                <span className="font-semibold text-white">{item.name}</span>
                <span className="text-gray-400 ml-2 text-sm">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <p>
          <strong className="text-white">The connection:</strong> We already run MemPalace in
          production. The research validates our architecture — and the open-source projects
          give us integration points to expand it.
        </p>

        {/* Signal 4: Weekly Papers */}
        <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
          <span className="text-accent mr-2">Signal 4</span> The Papers That Validate Our Architecture
        </h3>

        <p>
          DAIR.AI&apos;s top AI papers of the week read like a checklist of things we already built:
        </p>

        <div className="my-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">#</th>
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Paper</th>
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Key Finding</th>
                <th className="px-4 py-3 text-left text-accent font-mono text-xs">Our Stack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { num: '1', paper: 'SkillOpt', finding: 'SKILL.md as trainable parameter — 52/52 wins', stack: 'OpenClaw skills system' },
                { num: '2', paper: 'Compiling Workflows', finding: '~100x less inference cost by dissolving orchestrator into model', stack: 'Pipeline factorization' },
                { num: '3', paper: 'AutoScientists', finding: 'Decentralized agents, no central planner — +8.33%', stack: 'Multi-agent orchestration' },
                { num: '4', paper: 'LM Sleep', finding: 'Consolidate context → fast weights, clear KV cache', stack: 'Tiered memory system' },
                { num: '5', paper: 'Life-Harness', finding: 'Fix harness not model — 116/126 improved', stack: 'Skills + constitution' },
                { num: '6', paper: 'Efficiency Frontier', finding: '25% token reduction, 50%+ with amortized compression', stack: 'Memory compression' },
                { num: '8', paper: 'AgingBench', finding: '4 agent aging types identified', stack: 'MemPalace addresses 2/4' },
              ].map(row => (
                <tr key={row.num} className="hover:bg-surface/50">
                  <td className="px-4 py-3 text-accent font-mono font-bold">{row.num}</td>
                  <td className="px-4 py-3 text-white font-medium">{row.paper}</td>
                  <td className="px-4 py-3 text-gray-400">{row.finding}</td>
                  <td className="px-4 py-3 text-accent">{row.stack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          This is what the pipeline produces: <strong className="text-white">validation that the
          architecture decisions we made from first principles are now backed by peer-reviewed
          research.</strong> SkillOpt confirms our skills system. LM Sleep confirms our tiered
          memory. Life-Harness confirms our constitution-driven approach. Efficiency Frontier
          confirms our compression strategy.
        </p>

        {/* Signal 5-9: Quick Hits */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Rest of the Pipeline</h2>

        <p>
          Five more signals that flowed through this week — each connected, each actionable:
        </p>

        <div className="my-8 space-y-4">
          {[
            {
              title: 'Google SRE + Agentic AI',
              desc: '5 agent domains, 7 design principles from Google\'s own SRE playbook. Validates our factorization approach. Action: build incident playbook generation agent.',
              tag: 'Architecture',
            },
            {
              title: 'Google Pay MCP Server',
              desc: 'Payments as an MCP tool. Third MCP story in a week. MCP is the new API layer. Action: build MCP servers for our verticals.',
              tag: 'Integration',
            },
            {
              title: 'Benjamin Nweke — Most AI Agents Fail in Production',
              desc: '4-layer architecture (decision/orchestration/tools/memory), bottom-up approach. Describes exactly what we built. Quote: "People building the most reliable systems rarely even use the best models."',
              tag: 'Validation',
            },
            {
              title: 'Hotz vs Karpathy — Agent Quality Split',
              desc: 'Hotz says agents are a costly mistake. Karpathy says 10x productivity but confirms code is "gross." Our pipeline resolves the tension: separated concerns catch what agents get wrong.',
              tag: 'Strategy',
            },
            {
              title: 'Khairallah — AI Second Brain With Claude and Obsidian',
              desc: 'PARA structure, 5 workflows, AI-first note design. 1:1 mapping to our stack. What he describes as aspirational, we run in production.',
              tag: 'Validation',
            },
          ].map(signal => (
            <div key={signal.title} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                  {signal.tag}
                </span>
                <h4 className="font-bold text-white">{signal.title}</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{signal.desc}</p>
            </div>
          ))}
        </div>

        {/* Why This Matters */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">Why This Matters</h2>

        <p>
          Most companies consume research passively. They read, bookmark, and move on. The insight
          dies in a Notion folder or a Slack thread that nobody scrolls back to.
        </p>

        <p>
          The research intelligence pipeline changes the equation:
        </p>

        <div className="my-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-gray-300 mb-4">Passive Research</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                Read, bookmark, forget
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                No connection to production systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                Competitive signal decays in hours
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                Papers validated by nobody who can ship them
              </li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-6">
            <h3 className="text-lg font-bold text-accent mb-4">Research Pipeline</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Consume, connect, ship — in hours
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Every finding maps to a service or architecture decision
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Competitive advantage compounds weekly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Research validates production systems in real time
              </li>
            </ul>
          </div>
        </div>

        <p>
          The difference isn&apos;t reading more papers. It&apos;s building the architecture that turns
          reading into shipping. When SkillOpt confirms your skills system, you don&apos;t just nod —
          you double down. When LM Sleep confirms your memory tiering, you don&apos;t just bookmark —
          you extend it.
        </p>

        <p className="text-accent font-semibold">
          The pipeline turns research into competitive advantage. Every week.
        </p>

        {/* The Architecture */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">How to Build Your Own</h2>

        <p>
          You don&apos;t need our exact stack. You need the discipline:
        </p>

        <div className="my-8 space-y-4">
          {[
            { num: '1', title: 'Never consume without connecting', desc: 'If a paper or tool doesn\'t map to something you build or sell, it doesn\'t get shared. Full stop.' },
            { num: '2', title: 'Post with action items, not summaries', desc: '"Interesting paper on distillation" is a bookmark. "MOPD: maps to Service #6, action = prototype cross-family distillation for client models" is a pipeline output.' },
            { num: '3', title: 'Validate against your architecture', desc: 'Every week, the papers should confirm or challenge decisions you\'ve already made. If they don\'t, your architecture might be drifting.' },
            { num: '4', title: 'Compound the knowledge', desc: 'Week 2\'s research builds on Week 1\'s. Month 2\'s builds on Month 1\'s. The pipeline isn\'t a feed — it\'s a flywheel.' },
          ].map(item => (
            <div key={item.num} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-5">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {item.num}
              </span>
              <div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Numbers */}
        <div className="my-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <p className="text-3xl font-bold text-accent">9</p>
            <p className="text-sm text-gray-400 mt-1">Research signals processed</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <p className="text-3xl font-bold text-accent">14+</p>
            <p className="text-sm text-gray-400 mt-1">Stack connections mapped</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <p className="text-3xl font-bold text-accent">7/10</p>
            <p className="text-sm text-gray-400 mt-1">Papers validate existing architecture</p>
          </div>
        </div>

        {/* The Bigger Picture */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Bigger Picture</h2>

        <p>
          Research is a business function. Not a hobby. Not a Slack channel for interesting links.
          The companies that treat it as a pipeline — consume, connect, ship — will outpace the
          companies that treat it as a reading list.
        </p>

        <p>
          We process nine signals in a week and walk away with validated architecture, new tool
          integrations, and competitive positioning that compounds. Every week. Without manual
          effort — the pipeline is the process.
        </p>

        <div className="my-8 bg-accent/5 border border-accent/20 rounded-xl p-6">
          <p className="text-lg font-semibold text-white mb-4">
            The research pipeline is how you turn the firehose of AI papers into a firehose of competitive advantage.
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Consume with intent, not curiosity</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Connect every finding to production</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Ship validated architecture decisions</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Compound weekly</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm text-gray-400 mb-3 font-mono">Research Sources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="https://arxiv.org/pdf/2605.21699" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                MOPD — Cross-Tokenizer Multi-Teacher Distillation
              </a>
              <span className="text-gray-500"> — NVIDIA Research (Pavlo Molchanov)</span>
            </li>
            <li>
              <a href="https://x.com/DAIR_AI" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                DAIR.AI — Top AI Papers of the Week
              </a>
              <span className="text-gray-500"> — SkillOpt, Compiling Workflows, LM Sleep, Life-Harness, AgingBench</span>
            </li>
            <li>
              <a href="https://x.com/nurijanian" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Pejman Pour-Moezzi — Stop Giving Every Agent Its Own Skull
              </a>
              <span className="text-gray-500"> — GBrain, CASS, Supermemory</span>
            </li>
            <li>
              <a href="https://cloud.google.com/transform/shift-system-of-action-architecting-the-agentic-data-cloud-ai" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Google Cloud — Architecting the Agentic Data Cloud
              </a>
              <span className="text-gray-500"> — System of Action vs. System of Intelligence</span>
            </li>
            <li>
              <span className="text-gray-300">edgartools + FinanceToolkit</span>
              <span className="text-gray-500"> — AI-powered financial analysis MCP server</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-display font-bold text-2xl mb-3 text-white">Building an AI research pipeline?</h3>
        <p className="text-gray-400 mb-6">
          We turn weekly research into validated architecture and shipped features. If you want
          competitive intelligence that compounds, let&apos;s talk.
        </p>
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