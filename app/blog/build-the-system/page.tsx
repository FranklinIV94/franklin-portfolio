export const metadata = {
  title: "Build the System, Not the Prompt — Franklin J Bryant IV",
  description: "The week AI research converged on one architecture: specialized components, completion states, persistent memory, and guardrails at boundaries. Here's what it means for business.",
  openGraph: {
    title: "Build the System, Not the Prompt",
    description: "The week AI research converged on one architecture. Here's what it means for business.",
    images: ['/blog/build-the-system-hero.jpg'],
  },
};

export default function BuildTheSystem() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      {/* Hero */}
      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Blog · May 31, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          Build the System,<br />
          <span className="text-accent">Not the Prompt.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          The week AI research converged on one architecture — and why we&apos;re already running it.
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
          src="/blog/build-the-system-hero.jpg"
          alt="Interconnected AI agent architecture — specialized components with persistent memory and guardrails"
          className="w-full"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          The pattern is universal: specialized components, multi-pass validation, completion states, persistent memory, guardrails at boundaries.
        </figcaption>
      </figure>

      {/* Intro */}
      <div className="space-y-6 text-gray-300 text-base leading-relaxed font-body">
        <p className="text-lg text-gray-200 leading-relaxed">
          Something unusual happened this week in AI research. Not one breakthrough — a convergence.
        </p>

        <p>
          Twelve papers, posts, and deep dives crossed our research desk. Different authors, different domains, different models. But every single piece pointed to the same architecture:
        </p>

        <ul className="space-y-2 ml-4">
          <li><strong className="text-white">Specialized components</strong> that each do one thing well</li>
          <li><strong className="text-white">Multi-pass validation</strong> — not single-shot generation</li>
          <li><strong className="text-white">Completion-state driven</strong> — define what &quot;done&quot; looks like, iterate until convergence</li>
          <li><strong className="text-white">Persistent memory</strong> — not starting from zero every time</li>
          <li><strong className="text-white">Guardrails at boundaries</strong> — validate hard, fail loud, least privilege</li>
        </ul>

        <p>
          That&apos;s not a trend. That&apos;s a pattern. And the pattern says: <strong className="text-white">the model is one component. The system around it is what determines output quality.</strong>
        </p>

        {/* The Papers */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Papers</h2>

        <p>
          Here&apos;s what the research actually said — and what it means for business.
        </p>

        {/* Table: Papers */}
        <div className="my-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">#</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Source</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Core Finding</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Business Takeaway</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">1</td>
                <td className="px-4 py-3 text-white font-semibold">SkillOpt (Microsoft)</td>
                <td className="px-4 py-3">Treat SKILL.md as a trainable parameter. Optimizer proposes edits validated against benchmarks. 52/52 wins across 6 benchmarks.</td>
                <td className="px-4 py-3">Your agent instructions are <em>code</em>, not documentation. Optimize them like code.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">2</td>
                <td className="px-4 py-3 text-white font-semibold">Compiling Workflows into Weights</td>
                <td className="px-4 py-3">Distill full orchestration into small model weights. Near-frontier quality at ~100x less inference cost.</td>
                <td className="px-4 py-3">Multi-step workflows don&apos;t need frontier models at every step. Compress the orchestration.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">3</td>
                <td className="px-4 py-3 text-white font-semibold">AutoScientists (Harvard)</td>
                <td className="px-4 py-3">Decentralized agent team, no central planner. Self-organize around hypotheses, critique before spending compute. 74.4% mean percentile.</td>
                <td className="px-4 py-3">Orchestration doesn&apos;t require a boss. Peer review among agents works.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">4</td>
                <td className="px-4 py-3 text-white font-semibold">Language Models Need Sleep</td>
                <td className="px-4 py-3">Convert recent context → persistent fast weights, then clear KV cache. Compute moves offline, wake-time stays low.</td>
                <td className="px-4 py-3">Agents need memory consolidation, not bigger context windows.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">5</td>
                <td className="px-4 py-3 text-white font-semibold">Life-Harness (116/126 settings)</td>
                <td className="px-4 py-3">Frozen agent fails? Fix the harness, not the model. 88.5% avg improvement. No weights changed.</td>
                <td className="px-4 py-3">When your agent fails, fix the instructions, the tools, and the guardrails. Don&apos;t buy a bigger model.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">6</td>
                <td className="px-4 py-3 text-white font-semibold">The Efficiency Frontier</td>
                <td className="px-4 py-3">Context strategy as deployment-aware optimization. ~25% token reduction at same quality.</td>
                <td className="px-4 py-3">Smarter context management beats bigger models. Every time.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">7</td>
                <td className="px-4 py-3 text-white font-semibold">CUSP — Forecasting Scientific Progress</td>
                <td className="px-4 py-3">Models recognize plausible directions but <em>cannot forecast outcomes</em>. Systematic overconfidence.</td>
                <td className="px-4 py-3">AI can surface directions. It can&apos;t predict results. Trust it for exploration, not prophecy.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">8</td>
                <td className="px-4 py-3 text-white font-semibold">AgingBench</td>
                <td className="px-4 py-3">Four aging types: compression, interference, revision, maintenance. Summarization drops details, similar memories crowd out targets.</td>
                <td className="px-4 py-3">Agent memory degrades predictably. Design your knowledge system to compensate.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">9</td>
                <td className="px-4 py-3 text-white font-semibold">Harnesses Are Not Uniformly Better</td>
                <td className="px-4 py-3">More elaborate ≠ better. Over-decomposition, over-pruning, hallucinated execution. Partial harnesses beat full structure.</td>
                <td className="px-4 py-3">Enough structure, not total structure. The sweet spot exists.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-accent">10</td>
                <td className="px-4 py-3 text-white font-semibold">Pejman Pour-Moezzi (Magoosh founder)</td>
                <td className="px-4 py-3">&quot;Stop giving every agent its own skull.&quot; Knowledge lives in skulls and skulls don&apos;t sync. The hive mind is the point.</td>
                <td className="px-4 py-3">Shared knowledge graphs beat isolated agent memory. Every time.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* The Hotz-Karpathy Resolution */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Hotz-Karpathy Resolution</h2>

        <p>
          George Hotz published &quot;The Eternal Sloptember&quot; — a blistering critique that AI coding agents produce bloated, brittle, hard-to-audit code. Andrej Karpathy countered that agents boost productivity 10x+ — but admitted the output &quot;gives me a heart attack, it&apos;s really gross.&quot;
        </p>

        <p>
          <strong className="text-white">They&apos;re both right.</strong> And the resolution is architecture.
        </p>

        <p>
          Hotz&apos;s nightmare — one model producing, testing, and reviewing its own output — is exactly what happens without a pipeline. Of course the code is gross. No one is checking the work but the same entity that produced it.
        </p>

        <p>
          The resolution: <strong className="text-accent">separate concerns into a system designed to catch what individual agents get wrong.</strong> A Planner plans. A Coder codes. A Tester tests. A Reviewer reviews. Each agent sees different context, has different incentives, and can&apos;t cover for the others&apos; mistakes. The grossness gets caught because catching grossness is someone&apos;s entire job.
        </p>

        <p>
          You don&apos;t use agents <em>despite</em> Hotz&apos;s concerns. You use a pipeline <em>because</em> of them.
        </p>

        {/* Nweke: Built Backwards */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">Most Agents Are Built Backwards</h2>

        <p>
          Benjamin Nweke&apos;s article — &quot;Most AI Agents Fail in Production Because They&apos;re Built Backwards&quot; — is the most production-grounded architecture piece I read this year. Not theory. Someone who shipped, broke, debugged for two days, and rebuilt.
        </p>

        <p>
          His thesis: <strong className="text-white">Agents don&apos;t fail because the model isn&apos;t good enough. They fail because the system around the model was designed backwards — goal first, architecture as an afterthought.</strong>
        </p>

        <p>
          Four layers of a production agent system:
        </p>

        <div className="my-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Layer</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Job</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Common Failure</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Decision</td>
                <td className="px-4 py-3">Decide what to do next given prepared context</td>
                <td className="px-4 py-3">Model does parsing, memory management, AND retries — too many jobs</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Orchestration</td>
                <td className="px-4 py-3">Conditionals, routing, state machines — just code</td>
                <td className="px-4 py-3">Framework magic. Two-day debugging sessions for a retry bug that should be three lines.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Tools &amp; Execution</td>
                <td className="px-4 py-3">Take well-defined input, produce predictable output</td>
                <td className="px-4 py-3">One tool does five things. Undebuggable.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Memory &amp; State</td>
                <td className="px-4 py-3">What the system knows, and whether it&apos;s current</td>
                <td className="px-4 py-3">Stale state produces hallucinations that aren&apos;t model problems — they&apos;re systems problems</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The production story that stuck with me: the most robust multi-agent system Nweke worked with had <em>almost no AI-specific infrastructure</em>. Message queue, worker processes, shared state with explicit contracts, coordinator making routing decisions. ~1,000 lines of Python. Every part traceable. Problems found in under an hour. No magic.
        </p>

        {/* Completion States */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Completion State Pattern</h2>

        <p>
          Rahul&apos;s &quot;20 Opus 4.8 Workflows That Make Money While You Sleep&quot; — 222K views, 603 bookmarks — is the most practical articulation of this architecture. The core concept: <strong className="text-white">completion states, not prompts.</strong>
        </p>

        <p>
          You don&apos;t say &quot;write a good analysis.&quot; You say: <em>&quot;Don&apos;t stop until every competitor is analyzed, every gap is identified, and every finding has a source.&quot;</em> The agent defines what done looks like and runs until it gets there.
        </p>

        <p>
          This maps directly to what we&apos;re building. Our pipeline — Planner → Coder → Tester → Reviewer with a SHIP verdict — is completion-state-driven work. The Tester doesn&apos;t stop until all tests pass. The Reviewer doesn&apos;t approve until quality gates are met. The pattern extends from code to any business workflow:
        </p>

        <div className="my-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Domain</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Completion State</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Code</td>
                <td className="px-4 py-3">All tests pass, reviewer approves, no security flags</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Research</td>
                <td className="px-4 py-3">Every claim has a source, contradictions identified, gaps flagged</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Lead Generation</td>
                <td className="px-4 py-3">200 businesses contacted, response rates tracked, warm leads qualified</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Competitive Analysis</td>
                <td className="px-4 py-3">Full market map, pricing gaps identified, positioning opportunities surfaced</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">Security Audit</td>
                <td className="px-4 py-3">Every endpoint tested, vulnerabilities ranked by real risk, fixes verified</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Karpathy's 7 Basics */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The 7 Basics Most People Are Missing</h2>

        <p>
          Karpathy&apos;s working system — 258K views — distills to seven infrastructure patterns. Not secret prompts. Infrastructure.
        </p>

        <div className="my-10 space-y-4">
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">01</span>
              <div>
                <p className="text-white font-semibold">Context &gt; Prompts</p>
                <p className="text-gray-400 text-sm mt-1">Write a clear request. Include a concrete example of good output. Paste full errors. No secret instruction teleports your background into the model&apos;s head.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">02</span>
              <div>
                <p className="text-white font-semibold">Your Config File Is Probably Garbage</p>
                <p className="text-gray-400 text-sm mt-1">It must explain who you are, what the project is, what not to touch, naming conventions, and format rules. Most people copied a template or let the AI write it.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">03</span>
              <div>
                <p className="text-white font-semibold">Build a Three-Layer System</p>
                <p className="text-gray-400 text-sm mt-1">Raw notes → processed wiki → compressed config. New info drops in raw, gets processed into wiki, config stays lean. 30 min/day saved, compounding.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">04</span>
              <div>
                <p className="text-white font-semibold">Save Permanently After Every Strong Answer</p>
                <p className="text-gray-400 text-sm mt-1">Your best outputs drown in chat history. Audit for duplicates, conflicts, and outdated info. File it or lose it.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">05</span>
              <div>
                <p className="text-white font-semibold">Add Index + Log for Long Projects</p>
                <p className="text-gray-400 text-sm mt-1">Without a map of everything and a running changelog, you won&apos;t remember day 3 after two weeks.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">06</span>
              <div>
                <p className="text-white font-semibold">Small Steps, Evaluate, Commit</p>
                <p className="text-gray-400 text-sm mt-1">Load full context → 2-3 options for next small step → pick one → evaluate/test/commit → repeat. Never ask for everything in one prompt.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm font-bold">07</span>
              <div>
                <p className="text-white font-semibold">Structure Output as HTML</p>
                <p className="text-gray-400 text-sm mt-1">One sentence for 10x readability: &quot;Structure your final response as a self-contained HTML file.&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* API Design for Agents */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">APIs Built for Humans Break Under Agent Use</h2>

        <p>
          freeCodeCamp&apos;s deep dive on API design for AI agents hits a nerve: <strong className="text-white">APIs built for humans break under agent use.</strong> Not because agents are dumb — because APIs were never designed for a consumer that can&apos;t read Slack threads or infer &quot;this 404 usually means you forgot the workspace ID.&quot;
        </p>

        <p>
          Three principles:
        </p>

        <div className="my-10 space-y-4">
          <div className="bg-surface border border-accent/30 rounded-xl p-5">
            <p className="text-accent font-semibold font-mono text-sm">PRINCIPLE 1</p>
            <p className="text-white font-semibold mt-1">Deterministic Behavior</p>
            <p className="text-gray-400 text-sm mt-2">Same inputs + same state = predictable outcomes. No hidden magic, no silent coercion. Model lifecycle explicitly: draft → submitted → approved. Not an overloaded status field that means different things in different contexts.</p>
          </div>
          <div className="bg-surface border border-accent/30 rounded-xl p-5">
            <p className="text-accent font-semibold font-mono text-sm">PRINCIPLE 2</p>
            <p className="text-white font-semibold mt-1">Strong Schemas</p>
            <p className="text-gray-400 text-sm mt-2">OpenAPI as contract, not souvenir. Every operation explains WHEN to use it. Every property has a realistic example. All responses documented — 4xx and 5xx with stable JSON shapes. Verbose is fine. Vague is death.</p>
          </div>
          <div className="bg-surface border border-accent/30 rounded-xl p-5">
            <p className="text-accent font-semibold font-mono text-sm">PRINCIPLE 3</p>
            <p className="text-white font-semibold mt-1">Guardrails at the Boundary</p>
            <p className="text-gray-400 text-sm mt-2">Least-privilege credentials. No CAPTCHAs mid-run. Validate hard, fail loud: error_code + message + field pointer + doc_url. Separate &quot;read the world&quot; from &quot;change the world.&quot; Rate limits tuned for bursty agent behavior.</p>
          </div>
        </div>

        {/* NVIDIA MOPD */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">Small Models Just Got a Lot More Useful</h2>

        <p>
          NVIDIA&apos;s MOPD paper (Multi-Teacher On-Policy Distillation) cracked cross-tokenizer distillation — you can now distill knowledge from models with entirely different tokenizers into one set of weights. Qwen3-4B + Phi-4-Mini + Llama-3B → Llama-3.2-1B scored MMLU 32→46. That&apos;s a 45% relative improvement on a 1B model.
        </p>

        <p>
          <strong className="text-white">Why this matters for business:</strong> Sub-2B models become genuinely useful for production. You&apos;re no longer locked into one model ecosystem&apos;s training pipeline. Cross-family distillation means custom small models pulling best knowledge from Qwen, Phi, and Llama simultaneously. Lower inference cost, same quality bracket. This is the path to self-hosted, cost-controlled AI that doesn&apos;t sacrifice capability.
        </p>

        {/* Financial Analysis */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">AI-Powered Financial Analysis — The Toolkit</h2>

        <p>
          The financial analysis toolkit breakdown maps directly to competitive intelligence work. Four layers:
        </p>

        <div className="my-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Layer</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Purpose</th>
                <th className="px-4 py-3 font-mono text-xs text-accent border-b border-border">Key Tools</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">L0 — Data House</td>
                <td className="px-4 py-3">Parse SEC filings into clean data</td>
                <td className="px-4 py-3">edgartools (MCP server included), BamSEC</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">L1 — Catch Liars</td>
                <td className="px-4 py-3">Forensic scoring (earnings manipulation, bankruptcy, accruals)</td>
                <td className="px-4 py-3">Beneish M-Score, Altman Z-Score, Piotroski F-Score, FinanceToolkit</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">L2 — Read the Words</td>
                <td className="px-4 py-3">Diff year-over-year Risk Factors / MD&A for what&apos;s new or cut</td>
                <td className="px-4 py-3">edgar-crawler, Hudson Labs, AlphaSense</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 text-white font-semibold">L3 — Orchestration</td>
                <td className="px-4 py-3">Multi-agent investor personas, open-source Bloomberg terminal</td>
                <td className="px-4 py-3">ai-hedge-fund, OpenBB (MCP server included), FinGPT</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* The Bottom Line */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Bottom Line</h2>

        <p>
          Every piece of research this week says the same thing in different words: <strong className="text-accent">build the system, not the prompt.</strong>
        </p>

        <p>
          Memory, structure, specialized components, small steps, persistence. The model is one component. The system around it is what determines output quality.
        </p>

        <p>
          We didn&apos;t read these papers and then build our stack. We built our stack, then read these papers and discovered that the most rigorous minds in the field converged on the same architecture — independently. <strong className="text-white">That&apos;s the strongest validation possible.</strong>
        </p>

        <p>
          The Planner plans. The Coder codes. The Tester tests. The Reviewer reviews. Small, committed, evaluated steps. Persistent memory. Guardrails at boundaries. Completion states that define what &quot;done&quot; looks like.
        </p>

        <p className="text-lg text-accent font-semibold mt-8">
          This isn&apos;t theory. It&apos;s production. And it&apos;s what we do.
        </p>

        {/* Sources */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-display font-bold text-xl text-white mb-4">Sources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• SkillOpt — Microsoft Research, DAIR.AI weekly roundup</li>
            <li>• Compiling Agentic Workflows into Weights — DAIR.AI weekly roundup</li>
            <li>• AutoScientists — Harvard, DAIR.AI weekly roundup</li>
            <li>• Language Models Need Sleep — DAIR.AI weekly roundup</li>
            <li>• Life-Harness — 116/126 settings improved, DAIR.AI weekly roundup</li>
            <li>• &quot;Most AI Agents Fail in Production Because They&apos;re Built Backwards&quot; — Benjamin Nweke, Towards Data Science</li>
            <li>• &quot;Stop Giving Every Agent Its Own Skull&quot; — Pejman Pour-Moezzi (Magoosh founder)</li>
            <li>• &quot;20 Opus 4.8 Workflows That Make Money While You Sleep&quot; — @sairahul1</li>
            <li>• &quot;The Eternal Sloptember&quot; — George Hotz</li>
            <li>• Karpathy&apos;s 7 Basics — @ScottyBeamIO, 258K views</li>
            <li>• &quot;How to Design APIs for AI Agents&quot; — David Aniebo, freeCodeCamp</li>
            <li>• &quot;15 Claude Code Repositories Most Developers Have Never Heard Of&quot; — @thegreatest_sv</li>
            <li>• NVIDIA MOPD — Pavlo Molchanov, arxiv.org/pdf/2605.21699</li>
            <li>• AI-Powered Financial Analysis Toolkit — @gemchange_ltd</li>
            <li>• Google SRE, Google Pay, Google AI Threat Defense — three articles on agentic operations</li>
          </ul>
        </div>
      </div>
    </article>
  );
}