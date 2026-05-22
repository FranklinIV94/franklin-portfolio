export const metadata = {
  title: '7 Trillion Passwords Couldn\'t Crack This Bitcoin Wallet. AI Did It in Minutes. — Franklin J Bryant IV',
  description: 'How contextual intelligence beat brute force — and what it means for business. A Bitcoin recovery story and new research prove: better retrieval > more compute.',
  openGraph: {
    title: '7 Trillion Passwords Couldn\'t Crack This Bitcoin Wallet. AI Did It in Minutes.',
    description: 'How contextual intelligence beat brute force — and what it means for business.',
    images: ['/blog/context-vs-compute-hero.jpg'],
  },
};

export default function ContextBeatsCompute() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      {/* Hero */}
      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Blog · May 14, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          7 Trillion Passwords Couldn&apos;t Crack This Bitcoin Wallet.<br />
          <span className="text-accent">AI Did It in Minutes.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          How contextual intelligence beat brute force — and what it means for business.
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
          src="/blog/context-vs-compute-hero.jpg"
          alt="Brute Force vs Contextual Intelligence — the pattern that changes everything"
          className="w-full"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          Brute force vs. contextual intelligence: two approaches, vastly different outcomes
        </figcaption>
      </figure>

      {/* The Story */}
      <div className="space-y-6 text-gray-300 text-base leading-relaxed font-body">
        <p className="text-lg text-gray-200 leading-relaxed">
          Last week, a developer known as @cprkrn on X recovered 5 Bitcoin from a wallet that had been locked for 11 years. That&apos;s roughly <strong className="text-white">$400,000</strong> sitting behind a password he&apos;d forgotten since college.
        </p>

        <p>
          He&apos;d tried everything. Professional recovery services. Brute-force tools like Hashcat and btcrecover. An estimated <strong className="text-white">7 trillion password combinations</strong>. None of it worked.
        </p>

        {/* What he tried */}
        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Professional Recovery', detail: 'Paid services, ~$250 spent', result: 'Failed' },
            { label: 'Hashcat / btcrecover', detail: 'Billions of brute-force attempts', result: 'Failed' },
            { label: '7 Trillion Combinations', detail: 'Estimated total password guesses', result: 'Failed' },
          ].map(item => (
            <div key={item.label} className="rounded-xl border border-border bg-surface p-5 text-center">
              <h4 className="font-bold text-white text-sm">{item.label}</h4>
              <p className="mt-1 text-xs text-gray-400">{item.detail}</p>
              <div className="mt-3 inline-flex items-center justify-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                ✗ {item.result}
              </div>
            </div>
          ))}
        </div>

        <p>
          Then he uploaded his entire old college computer — files, documents, notes, everything — into <strong className="text-accent">Claude</strong>. And Claude cracked it.
        </p>

        <p>
          Not by trying more passwords. By doing what no brute-force tool can: <strong className="text-accent">connecting context across disparate files</strong> to find an older wallet file and a bug in the recovery software itself.
        </p>

        {/* How Claude solved it */}
        <div className="my-8 rounded-xl border-2 border-accent/30 bg-accent/5 p-6">
          <h4 className="font-bold text-accent mb-3">How Claude cracked it:</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">1</span>
              <span>Analyzed the full contents of an old college computer — files, documents, notes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">2</span>
              <span>Identified an older <code className="text-accent bg-accent/10 px-1 rounded">wallet.dat</code> file that predated the password change</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">3</span>
              <span>Found a bug in <code className="text-accent bg-accent/10 px-1 rounded">btcrecover</code> that was incorrectly concatenating a shared key with the password</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">4</span>
              <span>Combined the mnemonic phrase with the older wallet file to recover access</span>
            </li>
          </ul>
        </div>

        {/* The Pattern */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Pattern: Better Retrieval Beats More Compute</h2>

        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/context-vs-compute-data.jpg" alt="Exa research data: 4B model with semantic search outperforms 235B model with keyword search" className="w-full rounded-xl" />
          <figcaption className="mt-3 text-center text-sm text-gray-400">
            Exa&apos;s research shows smaller models with better search consistently outperform larger models with worse search
          </figcaption>
        </figure>

        <p>
          This story isn&apos;t just a cool crypto recovery. It&apos;s a demonstration of something the AI research community is quantifying right now.
        </p>

        <p>
          On the same day, <a href="https://exa.ai/blog/rl-search-outcomes" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Exa.ai published research</a> comparing their semantic search engine against standard SERP (Google proxy) as the backend for RL-trained agents. The results were definitive.
        </p>

        {/* Results table */}
        <div className="my-8 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="px-4 py-3 text-left text-gray-400 font-mono text-xs">Benchmark</th>
                <th className="px-4 py-3 text-center text-accent font-mono text-xs">4B + Exa</th>
                <th className="px-4 py-3 text-center text-gray-400 font-mono text-xs">4B + SERP</th>
                <th className="px-4 py-3 text-center text-gray-400 font-mono text-xs">235B Base</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { benchmark: 'SimpleQA', exa: '0.767', serp: '0.692', base: '0.730' },
                { benchmark: '2WikiMultihopQA', exa: '0.839', serp: '0.798', base: '0.774' },
                { benchmark: 'HotpotQA', exa: '0.694', serp: '0.684', base: '0.632' },
                { benchmark: 'FRAMES', exa: '0.566', serp: '0.521', base: '0.604' },
                { benchmark: 'MuSiQue', exa: '0.311', serp: '0.307', base: '0.273' },
              ].map(row => (
                <tr key={row.benchmark} className="hover:bg-surface/50">
                  <td className="px-4 py-3 text-white font-medium">{row.benchmark}</td>
                  <td className="px-4 py-3 text-center text-accent font-semibold">{row.exa}</td>
                  <td className="px-4 py-3 text-center text-gray-400">{row.serp}</td>
                  <td className="px-4 py-3 text-center text-gray-500">{row.base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Three patterns stand out from the data:
        </p>

        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {[
            { num: '01', title: 'Higher Performance', desc: 'Exa-trained agents outperform SERP-trained agents on pass@k across all values of k. Every benchmark, every sampling budget.' },
            { num: '02', title: 'More Compute Efficient', desc: 'Training with Exa required 69% fewer tokens to match SERP performance. 62% fewer search calls. 58% fewer turns.' },
            { num: '03', title: 'Smaller Model Wins', desc: 'A 4B model with Exa often exceeds a 235B base model. Better search compensates for 60× fewer parameters.' },
          ].map(shift => (
            <div key={shift.num} className="rounded-xl border border-border bg-surface p-6">
              <div className="text-3xl font-black text-accent/20">{shift.num}</div>
              <h4 className="mt-2 font-bold text-white">{shift.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{shift.desc}</p>
            </div>
          ))}
        </div>

        <p>
          The pattern is the same in both the Bitcoin story and the Exa research: <strong className="text-white">contextual intelligence destroys brute force</strong>. More passwords, more parameters, more compute — none of it matters if you&apos;re looking in the wrong places. What matters is finding the <em>right</em> information and connecting it correctly.
        </p>

        {/* Cross-backend transfer */}
        <div className="my-8 bg-surface border border-border rounded-xl p-6">
          <h4 className="font-bold text-white mb-3">Cross-Backend Transfer</h4>
          <p className="text-sm text-gray-300 mb-3">
            Exa&apos;s research also tested what happens when you swap search backends at inference time:
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Agents trained on Exa perform better <strong className="text-white">regardless</strong> of which search engine they use at inference</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Using Exa at inference improves performance for <strong className="text-white">both</strong> trained agents — even the SERP-trained one</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Exa returns relevant answers <strong className="text-white">10.7% more often</strong> per search call — denser reward signal compounds over training</li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">
            This means models trained on better search don&apos;t just perform better — they learn <em>better search strategies</em> that transfer to any backend.
          </p>
        </div>

        {/* Why This Matters */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">Why This Matters for Business</h2>

        <figure className="my-10 overflow-hidden rounded-xl">
          <img src="/blog/context-vs-compute-pipeline.jpg" alt="Context Pipeline: from scattered data to organized knowledge to AI action" className="w-full rounded-xl" />
          <figcaption className="mt-3 text-center text-sm text-gray-400">
            The context pipeline — transforming scattered data into organized, agent-accessible knowledge
          </figcaption>
        </figure>

        <p>
          Most businesses approach AI like a brute-force password cracker: throw more data at it, try more prompts, run more iterations. It&apos;s the equivalent of trying 7 trillion combinations and hoping one works.
        </p>

        <p>
          The smarter approach — the one that actually delivers results — is giving AI the right context at the right time. Full business context. Connected data. Semantic understanding of what matters and what doesn&apos;t.
        </p>

        {/* Comparison */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-gray-400">Brute Force Approach</h3>
            <p className="mt-1 text-sm text-gray-500">What Most Businesses Do</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Throw more data at the problem
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Try more prompts, run more iterations
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Buy bigger models, spend more on compute
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-400">✗</span>
                Reactive — wait for AI to hallucinate, then correct
              </li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-6">
            <h3 className="text-lg font-bold text-accent">Context-First Approach</h3>
            <p className="mt-1 text-sm text-accent/60">What Actually Works</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">✓</span>
                Curate and connect the right data
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">✓</span>
                Build semantic search into the pipeline
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">✓</span>
                Smaller model + better context = better results
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">✓</span>
                Proactive — AI finds the right answer, not more answers
              </li>
            </ul>
          </div>
        </div>

        <p>
          That&apos;s how @cprkrn recovered $400K. That&apos;s how Exa&apos;s 4B model beat a 235B model. And that&apos;s how businesses should be thinking about AI implementation: not &quot;how much compute can I throw at this,&quot; but &quot;<strong className="text-accent">how good is the context I&apos;m giving my AI?</strong>&quot;
        </p>

        {/* The Takeaway */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">The Takeaway</h2>

        <div className="my-8 bg-accent/5 border border-accent/20 rounded-xl p-6">
          <p className="text-lg font-semibold text-white mb-4">The moat isn&apos;t the model. It&apos;s the retrieval.</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Better search → better agents → better outcomes</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> Contextual reasoning &gt; computational brute force</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> A small model with great context beats a large model with poor context</li>
            <li className="flex items-start gap-2"><span className="text-accent">→</span> 7 trillion guesses got nothing on one good connection</li>
          </ul>
        </div>

        <p>
          For businesses investing in AI, this means your priority shouldn&apos;t be buying the biggest model. It should be building the best context pipeline — connecting your data, your documents, your institutional knowledge into something your AI can actually reason over.
        </p>

        <p>
          The @cprkrn story proves it at the individual level: one person, one AI, one breakthrough — not from more compute, but from better context. The Exa research proves it at scale: across every benchmark tested, better retrieval beats bigger models.
        </p>

        <p className="text-lg text-gray-200 leading-relaxed">
          Because 7 trillion guesses got nothing on <strong className="text-accent">one good connection</strong>.
        </p>

        {/* Sources */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm text-gray-400 mb-3 font-mono">Sources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="https://exa.ai/blog/rl-search-outcomes" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Exa Research: How Search Quality Shapes RL Outcomes
              </a>
            </li>
            <li>
              <a href="https://x.com/cprkrn/status/2054586810475364536" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                @cprkrn on X: Bitcoin Wallet Recovery
              </a>
            </li>
            <li>
              <a href="https://news.bitcoin.com/bitcoiner-dumps-old-computer-files-into-claude-ai-recovers-5-btc-lost-since-2015/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Bitcoin.com: Claude AI Recovers 5 BTC Lost Since 2015
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-display font-bold text-2xl mb-3 text-white">Want AI that actually works?</h3>
        <p className="text-gray-400 mb-6">I build AI-accelerated systems that research, execute, and scale — with security-first methodology.</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-canvas font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
        >
          Let&apos;s talk →
        </a>
      </div>
    </article>
  );
}