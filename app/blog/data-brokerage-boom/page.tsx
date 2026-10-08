type Block =
  | { t: "p"; text: string }
  | { t: "quote"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "figure"; src: string; caption: string; alt: string };

type Section = { h: string; items: Block[] };

const SECTIONS: Section[] = [
  {
    h: "",
    items: [
      { t: "p", text: "Someone on X claimed they entered the data brokerage space two weeks ago and are already at $4M MRR. The number is almost certainly a flex. The direction is almost certainly right." },
      { t: "p", text: "AI labs have scraped the open web. They've trained on every Wikipedia article, every public GitHub repo, every Reddit thread, every news site that didn't robot.txt them out. What's left is proprietary data: the stuff inside company databases, industry-specific datasets, financial records, medical histories, legal case files, internal documentation. The data the AI can't get by crawling." },
      { t: "p", text: "That data is now the most valuable commodity in technology. And the brokers who connect data sellers to AI lab buyers are making margins that make SaaS look like a lemonade stand." },
      { t: "p", text: "Here's where this is heading, and why it matters for every business owner who isn't thinking about it yet." },
    ],
  },
  {
    h: "The Software Is Free. The Data Isn't.",
    items: [
      { t: "p", text: "Eric S. Raymond said it last week: \"Closed source is dead, dead, dead.\" Someone decompiled Photoshop, fed the spec to an LLM, and generated a clean-room Rust reimplementation. 702K views in a few hours. The pipeline is decompile, spec extraction, LLM reimplementation. If you can do it with Photoshop, you can do it with any software." },
      { t: "p", text: "The implication is straightforward. The software itself is becoming commoditized. The code, the features, the UI \u2014 all reproducible. What can't be reproduced is the data inside the software. QuickBooks without 20 years of transaction patterns is just a calculator. A CRM without the relationship history is just a spreadsheet. The EHR without the patient outcomes is just a form builder." },
      { t: "quote", text: "Software is becoming the wrapper. Data is becoming the product." },
      { t: "p", text: "This is why data brokerage is booming. The AI labs don't need more software. They can write that themselves. They need the data that makes software valuable. And they're willing to pay extraordinary sums to get it." },
      { t: "figure", src: "/blog/data-brokerage-inventory.webp", caption: "The inventory comes first. Everything downstream compounds.", alt: "Abstract illustration of data inventory and structured data layers" },
    ],
  },
  {
    h: "The Broker Tax",
    items: [
      { t: "p", text: "The problem is that connecting data sellers to data buyers is harder than it sounds. A hospital system has decades of patient data. An AI lab wants to train a medical model. Between them sits a chasm of legal, technical, and operational complexity:" },
      { t: "ul", items: ["HIPAA compliance, de-identification, and consent verification", "Data format normalization across hundreds of EHR systems", "Contract negotiation, pricing, and delivery infrastructure", "Quality assurance \u2014 is the data actually what the seller claims?"] },
      { t: "p", text: "Human brokers fill that gap today, and they're charging $50K+ per referral. That's the tax. It's the same tax that every middleman charges when the market is new and the buyers don't know how to find the sellers directly." },
      { t: "p", text: "Ryan Lock at Polyshares published the most detailed operational breakdown I've seen this week. His firm pays brokers 6% on top of the acquisition price, with standard deal terms that look like this: 2-year exclusivity, 30-day acceptance window, 60-day payout net terms, and de-identification handled by third-party firms so the buyer never touches raw files. The riskiest moment for a seller is the gap between extraction and de-identification \u2014 the period where raw data exists outside their control. Good brokers manage that risk. Bad brokers don't know it exists." },
      { t: "p", text: "It won't last at this margin. End-to-end procurement agents are already being built to automate the entire pipeline \u2014 sourcing, vetting, contracting, delivery. The broker tax collapses the same way every middleman tax collapses when the process gets codified. The question isn't if. It's how fast." },
    ],
  },
  {
    h: "The Shakeout Is Already Starting",
    items: [
      { t: "figure", src: "/blog/data-brokerage-shakeout.webp", caption: "", alt: "Abstract illustration of market shakeout and consolidation" },
      { t: "p", text: "Mike Lisovetsky put it cleanly this week: \"Data brokering will be like any other industry where there's fast money. The grifters will be quickly expelled because it's really obvious if you have no idea what you're doing. The engagement bait on X will fade. The people who do well by labs and sellers will make a fortune.\"" },
      { t: "p", text: "He's right. The market has built-in grifter detection because the deliverable is concrete. A data inventory either exists or it doesn't. Deal terms either make sense or they don't. A lab either wants the dataset or it doesn't. You can't fake your way through a due diligence call when the buyer starts asking how data flows through the seller's business for different functions, how well it's recorded, and how many years of full-context data exist." },
      { t: "p", text: "Lock says his firm talks to 20+ sellers per day. The most common friction point preventing deals from progressing isn't price. It's that the seller can't clearly define what their data shape looks like. They don't have a data inventory. They don't know how many years of exportable data they have per software system. They don't know the total volume in terabytes or messages or records." },
      { t: "p", text: "The broker who walks in with a seller's data inventory already prepared, with proper expectations on valuation, moves deals faster. That broker gets repeat business. The broker who shuffles introductions for a cut gets squeezed out within a quarter." },
    ],
  },
  {
    h: "The Real Question: Who Owns the Output?",
    items: [
      { t: "p", text: "Here's where most people stop thinking about data brokerage, and where the conversation actually starts." },
      { t: "p", text: "When an AI lab trains on your data, the resulting model contains patterns extracted from your business. Your tax strategies become the model's tax strategies. Your patient outcomes become the model's clinical reasoning. Your customer behavior becomes the model's sales intuition." },
      { t: "quote", text: "You sold the input. They own the output. And the output is worth infinitely more than the input." },
      { t: "p", text: "Today, a hospital might license its data for $500K. The AI lab trains a medical reasoning model on that data and sells access to it for $50/month per physician, across every hospital in the country. The hospital got paid once. The lab gets paid forever." },
      { t: "p", text: "This is the extractive pattern that nobody is talking about. Data brokerage today looks like a fair trade: you have data, they have money, everyone wins. But the trade is fundamentally asymmetric because the buyer is building a compounding asset on top of your data, and you're getting a one-time payment for a non-renewable resource." },
    ],
  },
  {
    h: "Three Scenarios",
    items: [
      { t: "p", text: "Where does this go from here? I see three plausible paths." },
      { t: "p", text: "Scenario 1: The Gold Rush Burns Out. AI labs discover that most proprietary data is messier, less useful, and harder to clean than they expected. The models don't improve enough to justify the brokerage costs. Data prices collapse. The brokers who got in early made their money. Everyone else is left holding contracts for data nobody wants to buy. This is the scenario the AI hype cycle predicts, and it's the one I think is least likely." },
      { t: "p", text: "Scenario 2: The Platform Capture. A handful of large AI labs become the only buyers. They set the prices, dictate the terms, and gradually squeeze the brokers out. Data sellers have one customer, and that customer knows it. This looks like the Apple App Store model: a single dominant marketplace where the platform takes 30% and the sellers compete on price for the remainder. It's stable, profitable for the platform, and extractive for everyone else." },
      { t: "p", text: "Scenario 3: The Cooperative Flip. Data sellers figure out that one-time licensing is a bad deal. Instead of selling raw data to labs, they form cooperatives or use data trust structures that retain ownership and charge ongoing royalties based on model performance. The hospital doesn't sell its data once. It contributes to a medical data trust that licenses access to multiple labs, and the royalty flows back to the hospital every quarter. The broker doesn't connect buyer to seller. The broker manages the trust, verifies the quality, and ensures compliance. This is the scenario where the most people win, and it's the one that requires the most work to build." },
    ],
  },
  {
    h: "Where We Land",
    items: [
      { t: "p", text: "We run a financial services firm. We process tax returns, bookkeeping data, payroll records, and financial strategies for over 100 clients. That data is exactly what AI labs want for training finance-specific models. We could license it tomorrow. We won't." },
      { t: "p", text: "Not because the money isn't tempting. Because our clients didn't give us their data so we could sell it to a third party. They gave us their data so we could do their taxes. The trust relationship is the foundation of the business. Selling the data breaks the trust. And the trust is worth more than any one-time payment." },
      { t: "p", text: "But we're also not naive. The data brokerage market is forming right now, and the patterns it establishes over the next 12 to 24 months will determine who profits from the AI transition for the next decade. Every business owner should be asking three questions:" },
      { t: "p", text: "1. What data do I have that an AI lab would want? You probably have more than you think. Industry-specific workflows, customer behavior patterns, transaction histories, operational data. If you've been in business for 5+ years and you use any software system, you have proprietary data. Start by building a data inventory: list each software system, years of available exports, and total data volume. That inventory is your leverage. Without it, you're just another seller who can't define what they're selling." },
      { t: "p", text: "2. What are the terms under which I'd share it? Anonymization? Aggregation? Ongoing royalty vs. one-time sale? Exclusive vs. non-exclusive? These are business decisions, not technical ones. Make them before someone offers you money, not after. Pay attention to exclusivity terms (market standard is 2 years), acceptance windows (30 days), and de-identification requirements. The period between extraction and de-identification is the highest risk window for a seller. If the buyer can't articulate their de-ID process, walk away." },
      { t: "p", text: "3. What happens to my competitive advantage if I share? If an AI lab trains on your data and then sells the resulting model to your competitor, did you just arm the competition? Maybe. Maybe not. But you should know the answer before you sign." },
      { t: "quote", text: "The data brokerage boom is real. The money is real. The shakeout is coming. The asymmetry is also real. The businesses that win won't be the ones that sold their data first. They'll be the ones that understood what they were selling before they sold it." },
    ],
  },
];

export const metadata = {
  title: 'The Data Brokerage Boom: Who Wins When AI Eats the Software but Not the Data',
  description:
    'AI labs have scraped the open web. What is left is proprietary data - and the brokers connecting sellers to buyers are earning margins that make SaaS look like a rounding error. Where this lands, and the three scenarios that decide it.',
  keywords: [
    'data brokerage', 'selling your data to AI labs', 'proprietary data', 'AI training data',
    'data licensing deals', 'data inventory', 'data brokers', 'AI labs buying data',
    'corpus data', 'RL data', 'exclusive data licensing', 'data royalties',
    'who owns AI output', 'data trust', 'Prospyr 305',
  ],
  alternates: { canonical: '/blog/data-brokerage-boom' },
  openGraph: {
    title: 'The Data Brokerage Boom',
    description:
      'Who wins when AI eats the software but not the data. The broker tax, the coming shakeout, and who owns the output.',
    type: 'article',
    siteName: 'Franklin J Bryant IV',
    url: 'https://franklin.simplifyingbusinesses.com/blog/data-brokerage-boom',
    images: [{
      url: 'https://franklin.simplifyingbusinesses.com/blog/data-brokerage-hero-panning.webp',
      width: 1600,
      height: 904,
      alt: 'AI data brokerage - where the value pools',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theycallmeking_',
    title: 'The Data Brokerage Boom',
    description: 'Who wins when AI eats the software but not the data.',
    images: ['https://franklin.simplifyingbusinesses.com/blog/data-brokerage-hero-panning.webp'],
  },
};

export default function DataBrokerageBoom() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Data Brokerage Boom: Who Wins When AI Eats the Software but Not the Data',
    description:
      'AI labs have scraped the open web. What is left is proprietary data, and the brokers connecting sellers to buyers are earning margins that make SaaS look like a rounding error.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      alternateName: 'Franklin Jordan Bryant',
      url: 'https://franklin.simplifyingbusinesses.com',
      sameAs: [
        'https://github.com/FranklinIV94',
        'https://www.linkedin.com/in/franklin-bryant-iv/',
        'https://x.com/theycallmeking_',
      ],
    },
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    inLanguage: 'en',
    articleSection: 'AI & Data',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      alternateName: 'Franklin Jordan Bryant',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    image: 'https://franklin.simplifyingbusinesses.com/blog/data-brokerage-hero-panning.webp',
    mainEntityOfPage: 'https://franklin.simplifyingbusinesses.com/blog/data-brokerage-boom',
    keywords: [
      'data brokerage', 'AI training data', 'proprietary data', 'data licensing',
      'data inventory', 'data royalties', 'who owns AI output',
    ],
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
          Opinion &middot; October 8, 2026 &middot; AI &amp; Data
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The Data Brokerage Boom<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Who wins when AI eats the software but not the data.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>&middot;</span>
          <span>COO, All Lines Business Solutions &middot; Founder, Prospyr 305</span>
        </div>
      </header>

      {/* Hero image */}
      <figure className="mb-16 overflow-hidden rounded-2xl border border-border">
        <img
          src="/blog/data-brokerage-hero-panning.webp"
          alt="Where the value pools as AI consumes proprietary business data"
          className="w-full"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          The inventory comes first. Everything downstream compounds.
        </figcaption>
      </figure>

      {/* Body */}
      <div className="space-y-6">
        {SECTIONS.map((s, si) => (
          <section key={si}>
            {s.h && (
              <h2 className="mt-12 mb-5 font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">
                {s.h}
              </h2>
            )}
            {s.items.map((b, bi) => {
              if (b.t === 'p') {
                return (
                  <p key={bi} className="text-lg leading-relaxed text-gray-300">
                    {b.text}
                  </p>
                );
              }
              if (b.t === 'quote') {
                return (
                  <blockquote
                    key={bi}
                    className="my-10 border-l-4 border-accent bg-white/[0.03] rounded-r-xl px-6 py-5"
                  >
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-relaxed text-white">
                      {b.text}
                    </p>
                  </blockquote>
                );
              }
              if (b.t === 'ul') {
                return (
                  <ul key={bi} className="my-6 space-y-3">
                    {b.items.map((li, liIdx) => (
                      <li key={liIdx} className="flex gap-3 text-lg leading-relaxed text-gray-300">
                        <span className="mt-[6px] shrink-0 text-accent">&mdash;</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <figure key={bi} className="my-10 overflow-hidden rounded-2xl border border-border">
                  <img src={b.src} alt={b.alt} className="w-full" />
                  {b.caption && (
                    <figcaption className="mt-3 px-4 text-center text-sm text-gray-400">
                      {b.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-2xl border border-border bg-white/[0.02] p-8 sm:p-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">
          Own your output.
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-gray-300">
          Most businesses are sitting on data worth more than the products they sell, and have no
          idea it is for sale. The work starts with a data inventory: what you actually hold, how
          clean it is, who would buy it, and under what terms.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-canvas transition-opacity hover:opacity-90"
          >
            Start a conversation
          </a>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            More writing
          </a>
        </div>
      </div>
    </article>
  );
}
