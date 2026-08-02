export const metadata = {
  title: 'When Creatives Meet Agents — Franklin J Bryant IV',
  description: 'I spent a week at the Runway AI Art & Film Festival and a private event in Beverly Hills with artists, filmmakers, musicians, and producers. Here\'s what the creative world actually needs from agentic engineering — and why the next wave of AI isn\'t about replacing creatives, it\'s about engineering the infrastructure that lets them scale.',
  keywords: ['AI film festival', 'Runway AI', 'agentic engineering', 'creative AI', 'Prospyr 305', 'AI collaboration', 'creative industries', 'agent workforce', 'AI infrastructure', 'Beverly Hills', 'David Rivero'],
  openGraph: {
    title: 'When Creatives Meet Agents',
    description: 'The Runway AI Art & Film Festival showed what AI can create. The next question is: what can AI build around it? Agentic engineering for creative industries.',
    images: ['/blog/when-creatives-meet-agents-hero.jpg'],
  },
};

export default function WhenCreativesMeetAgents() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'When Creatives Meet Agents',
    description: 'I spent a week at the Runway AI Art & Film Festival and a private event in Beverly Hills. Here\'s what the creative world actually needs from agentic engineering.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      alternateName: 'Franklin Jordan Bryant',
      url: 'https://franklin.simplifyingbusinesses.com',
      sameAs: [
        'https://github.com/FranklinIV94',
        'https://www.linkedin.com/in/franklin-bryant-36115363/',
        'https://x.com/theycallmeking_',
        'https://www.crunchbase.com/organization/all-lines-business-solutions',
      ],
    },
    datePublished: '2026-06-23',
    dateModified: '2026-06-23',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      alternateName: 'Franklin Jordan Bryant',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage: 'https://franklin.simplifyingbusinesses.com/blog/when-creatives-meet-agents',
    keywords: ['AI film festival', 'Runway AI', 'agentic engineering', 'creative AI', 'Prospyr 305'],
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
          Blog · June 23, 2026 · From the Runway AI Art &amp; Film Festival
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          When Creatives Meet Agents<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          I spent a week between the Runway AI Art &amp; Film Festival and a private gathering in Beverly Hills with artists, filmmakers, musicians, and producers. The creative world doesn&apos;t need another AI tool. It needs the infrastructure to scale what they already do — and the people who can build it.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>COO, All Lines Business Solutions · Founder, Prospyr 305</span>
        </div>
      </header>

      {/* Hero image */}
      <figure className="mb-16 overflow-hidden rounded-2xl border border-border">
        <img
          src="/blog/when-creatives-meet-agents-hero.jpg"
          alt="Creative professionals gathered at an AI art and film festival, surrounded by holographic AI-generated visual art projections"
          className="w-full"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">The Runway AI Art &amp; Film Festival — where creative talent met AI capability.</figcaption>
      </figure>

      {/* Body */}
      <div className="space-y-6 text-gray-300 text-base leading-relaxed font-body">

        {/* Opening */}
        <p className="text-lg text-gray-200 leading-relaxed">
          Last week I stood in a room full of people who make their living from taste. Filmmakers who&apos;ve spent decades training their eye. Musicians whose entire value is a feeling they can&apos;t put into words. Producers who greenlight million-dollar decisions on instinct. And at the Runway AI Art &amp; Film Festival, they watched AI generate footage that looked like it took a crew of thirty and a week on location.
        </p>

        <p>
          The energy in the room was split clean down the middle. Half were electrified — you could see it in their eyes, the gears turning, the possibilities stacking up. The other half were terrified. Not of the technology. Of what it meant for their livelihood, their craft, the decades they&apos;d invested.
        </p>

        <p>
          Both halves were asking the same question: <em className="text-white">what does this mean for me?</em>
        </p>

        <p>
          A few nights later, at David Rivero&apos;s house in Beverly Hills, I had a version of the same conversation with a different room. Artists, entrepreneurs, dealmakers — people whose entire livelihood depends on relationships, reputation, and being in the right room at the right time. They&apos;d seen the AI films. They&apos;d played with the tools. They kept circling back to one question:
        </p>

        <p className="text-lg text-gray-200 leading-relaxed border-l-2 border-accent pl-6 italic">
          &quot;How do I actually use this? Not to make a demo — to run my business.&quot;
        </p>

        <p>
          That&apos;s the question nobody at the festival answered. The tools generate. The demonstrations impress. But between the demo and the business is a gap that nobody has bridged. And that gap is where I spend my days.
        </p>

        {/* Section 1: The Gap */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          The Gap Nobody&apos;s Talking About
        </h2>

        <figure className="my-8 overflow-hidden rounded-2xl border border-border">
          <img
            src="/blog/when-creatives-meet-agents-gap.jpg"
            alt="Split image: creative work on one side, overwhelming business operations on the other"
            className="w-full"
          />
          <figcaption className="mt-2 text-xs text-gray-500 text-center">The gap: AI handles the creative output. The business operations still fall on the creative.</figcaption>
        </figure>

        <p>
          Here&apos;s what I saw last week. The creative world has access to extraordinary AI generation tools. Runway, Sora, Veo, Midjourney, Suno — the list grows weekly. But between <em className="text-white">generating a thing</em> and <em className="text-white">running a business around that thing</em> is a gap that almost nobody is building for.
        </p>

        <p>
          A filmmaker can generate a short film in an afternoon. But who handles the distribution pipeline? The client communications? The contract review? The invoicing, the scheduling, the follow-up after the premiere? The answer, today, is: the filmmaker does. Manually. At midnight. After the creative work is done.
        </p>

        <p>
          A music producer can generate stems with AI in minutes. But who tracks which samples are cleared, which contracts are signed, which royalties are owed? Who sends the follow-up email to the label executive they met at the event last Tuesday? Who builds the portfolio site, keeps it updated, and makes sure the right people see it at the right time?
        </p>

        <p>
          The tools generate. They don&apos;t <em className="text-white">operate</em>. And the creative professionals I met last week are drowning in the operations — the 40% of their work that isn&apos;t creative at all, but is the difference between a hobby and a business.
        </p>

        {/* Section 2: What Agentic Engineering Actually Does */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          What Agentic Engineering Actually Does for Creatives
        </h2>

        <p>
          Here&apos;s where I come in. My firm, <a href="https://prospyr305.com" className="text-accent hover:underline">Prospyr 305</a>, doesn&apos;t build AI that generates art. We build AI agent workforces that run the business around the art. The distinction is everything.
        </p>

        <p>
          An agent workforce is a team of specialized AI agents, each with a defined role, that work together 24/7. Not a chatbot you talk to. Not a generator you prompt. A system that operates autonomously — with human gates at every decision that matters. The creative stays in control. The agents handle the operational layer underneath.
        </p>

        <figure className="my-8 overflow-hidden rounded-2xl border border-border">
          <img
            src="/blog/when-creatives-meet-agents-infrastructure.jpg"
            alt="Abstract visualization of AI agent infrastructure with glowing connected nodes forming a network"
            className="w-full"
          />
          <figcaption className="mt-2 text-xs text-gray-500 text-center">The infrastructure layer: agents as a connected workforce, not isolated tools.</figcaption>
        </figure>

        <p>Here&apos;s what this looks like in practice for creative professionals:</p>

        <div className="my-8 space-y-4">
          {[
            { title: 'Speed-to-Lead for Creative Agencies', desc: 'A producer meets 50 people at a festival. An agent watches every channel — email, DM, phone — and responds to each one in under 60 seconds with a personalized follow-up referencing the specific conversation. 21x qualification rate. The producer wakes up to booked calls, not a stack of business cards they\'ll never sort through.' },
            { title: 'Contract & Rights Management', desc: 'An agent that reads every contract, flags risky clauses, tracks sample clearances, and maintains a deadline calendar. The filmmaker knows exactly what\'s signed, what\'s pending, and what\'s about to expire — without spending Sunday afternoon in a spreadsheet.' },
            { title: 'Distribution & Client Pipeline', desc: 'An agent that ingests leads from your portfolio site, researches each prospect, drafts a proposal in your voice, sends the first email, and schedules the intro call. The creative professional focuses on the craft. The agent handles the business of the craft.' },
            { title: 'Overnight Intelligence', desc: 'Six agents running while you sleep: research on industry trends, competitive monitoring across other creatives in your space, knowledge curation from the articles and papers you bookmark but never read, pipeline numbers, email triage, and outbound follow-up. You wake up to a briefing, not a to-do list. We run this exact system ourselves — it\'s not theoretical.' },
          ].map(item => (
            <div key={item.title} className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <h4 className="font-bold text-white text-lg">{item.title}</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 3: The Festival Was the Proof */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          The Festival Was the Proof of Concept
        </h2>

        <p>
          The Runway AI Art &amp; Film Festival wasn&apos;t just a showcase. It was a live demonstration of what happens when creative talent meets AI capability. Films generated with AI tools that held emotional weight. Visual art that would have taken months, rendered in days. Music scored by models that understood dramatic arcs — not just tempo and key, but tension and release.
        </p>

        <p>
          But here&apos;s what struck me most: every creator at that festival was also a small business. They had invoices to send. They had clients to manage. They had portfolios to maintain. They had networking follow-ups that were slipping through the cracks because they were too busy creating to follow up.
        </p>

        <p>
          The AI gave them a new creative tool. It didn&apos;t give them a new business infrastructure. And that&apos;s the opportunity I see. Not <em className="text-white">more generation tools</em> — the generation layer is being solved brilliantly by Runway, OpenAI, Google, and a hundred startups. The opportunity is <em className="text-white">the layer underneath</em>: the agent infrastructure that takes what creatives produce and runs the business around it.
        </p>

        {/* Section 4: The Beverly Hills Conversation */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          The Beverly Hills Conversation
        </h2>

        <p>
          At David Rivero&apos;s house, the conversation shifted. These weren&apos;t just creatives — they were operators. Producers with rosters of talent. Entrepreneurs with brands. Deal-makers with pipelines. They didn&apos;t need to be convinced that AI was real. They&apos;d seen the films. They&apos;d played with the tools. They needed to know something more practical: <em className="text-white">how does this become revenue?</em>
        </p>

        <p>
          I told them what I tell every client. AI generation is the surface. Agentic engineering is the infrastructure. The generation layer makes the output faster and cheaper. The infrastructure layer makes the <em className="text-white">business</em> faster and cheaper. And the business layer is where most creative professionals lose 40% of their time — time that could go back into the craft.
        </p>

        <p>
          The response wasn&apos;t skepticism. It was recognition. Every person in that room had felt the gap. They had the creative tools. They had the network. They had the deals. What they didn&apos;t have was a system that operated the business while they focused on the work.
        </p>

        {/* Section 5: The Collaboration Vision */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          What Collaboration Looks Like
        </h2>

        <figure className="my-8 overflow-hidden rounded-2xl border border-border">
          <img
            src="/blog/when-creatives-meet-agents-collaboration.jpg"
            alt="A creative professional in a modern studio surrounded by translucent holographic AI agent workflow panels"
            className="w-full"
          />
          <figcaption className="mt-2 text-xs text-gray-500 text-center">The vision: creative professionals surrounded by an operational system that runs itself.</figcaption>
        </figure>

        <p>
          Here&apos;s what I&apos;m building toward — and what I&apos;m inviting the people I met last week to build with me:
        </p>

        <div className="my-8 space-y-4">
          {[
            { title: 'For Filmmakers & Production Companies', desc: 'An agent workforce that handles lead intake from your portfolio, drafts proposals in your creative voice, manages contract review, tracks distribution deadlines, and sends follow-ups to every executive you met at the festival — all with human approval at every gate.' },
            { title: 'For Music Producers & Labels', desc: 'Agents that manage sample clearance tracking, royalty pipeline monitoring, artist communication, release scheduling, and A&R research — so the producer spends time in the studio, not in the inbox.' },
            { title: 'For Artists & Visual Creatives', desc: 'An agent that maintains your portfolio site, updates it with new work automatically, responds to commission inquiries in under a minute, manages licensing requests, and tracks which galleries and collectors have seen your work.' },
            { title: 'For Producers & Deal-Makers', desc: 'A multi-agent deal room: due diligence agents, financial modeling agents, and relationship-tracking agents working in parallel on every opportunity — each specialized, all coordinated, with you at every decision gate.' },
            { title: 'For the Next Festival', desc: 'Imagine walking into the next AI Art &amp; Film Festival with an agent workforce already running your business. Every contact you make gets a personalized follow-up before you leave the venue. Every lead gets researched and qualified automatically. Every opportunity gets a drafted proposal in your inbox by morning. You spend the festival doing what you do best — being in the room, building relationships, making creative decisions. The agents handle the rest.' },
          ].map(item => (
            <div key={item.title} className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <h4 className="font-bold text-white text-lg">{item.title}</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 6: The Bigger Thesis */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          The Bigger Thesis
        </h2>

        <p>
          The narrative around AI and creatives is stuck in a loop: <em className="text-white">will AI replace artists?</em> That&apos;s the wrong question. It&apos;s the question that gets clicks and starts arguments, but it&apos;s not the question that determines who wins the next decade.
        </p>

        <p>
          AI won&apos;t replace taste. It won&apos;t replace relationships. It won&apos;t replace the instinct that tells a producer which project to greenlight, or a filmmaker which take to keep, or a musician when a track is finished. What it <em className="text-white">will</em> do — and is already doing — is separate the creatives who operate as businesses from the creatives who operate as hobbyists.
        </p>

        <p>
          The ones who build infrastructure around their craft will scale. They&apos;ll respond to opportunities in seconds, not days. They&apos;ll have clean pipelines, tracked contracts, automated follow-up. They&apos;ll spend their creative energy on creative work — because the business runs itself.
        </p>

        <p>
          The ones who don&apos;t will generate beautiful work that nobody sees, because they were too busy sending invoices to handle distribution. Too busy sorting through business cards to follow up on the opportunity that mattered.
        </p>

        <p>
          The generation layer — Runway, Sora, Veo, Midjourney — gives creatives a new paintbrush. The infrastructure layer — agent workforces, MCP servers, autonomous operations — gives creatives a new studio. A new gallery. A new label. A new production company. Not a tool they use when they remember. A team that works while they create.
        </p>

        <p>
          That&apos;s what Prospyr 305 builds. That&apos;s the collaboration I&apos;m offering to the creative professionals I met last week.
        </p>

        {/* Section 7: The Invitation */}
        <h2 className="font-display font-bold text-3xl text-white mt-12 mb-4">
          The Invitation
        </h2>

        <p>
          If I met you at the festival or at the event in Beverly Hills — yes, I remember the conversation. And if you&apos;re reading this because you found my portfolio while researching AI for your creative business — here&apos;s what I&apos;d tell you:
        </p>

        <p>
          Don&apos;t start with the tools. Start with the business. What takes 40% of your time that isn&apos;t the creative work? That&apos;s what we automate first. What follow-up didn&apos;t you send after the last event? That&apos;s what we fix first. What opportunity are you losing because you can&apos;t respond fast enough? That&apos;s where we start.
        </p>

        <p>
          The generation layer is being solved — and solved well — by companies with billion-dollar budgets. The infrastructure layer is where the next wave of creative businesses will be built. And the people who build it first — who wire their creative talent into an operational system that runs 24/7 — will have an unfair advantage that compounds with every project, every contact, every opportunity.
        </p>

        <p>
          I met you last week. I build systems that run businesses. Let&apos;s talk about what that looks like for yours.
        </p>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-3">
            Want to see what agentic engineering can do for your creative business?
          </h3>
          <p className="text-gray-400 mb-6">
            Prospyr 305 designs and deploys AI agent workforces for creative professionals, production companies, and agencies. From speed-to-lead systems to overnight intelligence — we build the infrastructure so you can focus on the craft.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://prospyr305.com"
              className="inline-flex items-center gap-2 bg-accent text-canvas font-bold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
            >
              Explore Prospyr 305 →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-border text-white font-semibold px-6 py-3 rounded-xl hover:border-accent/40 transition-colors"
            >
              Start a conversation
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          Franklin J Bryant IV is the COO of All Lines Business Solutions and founder of Prospyr 305, an agentic design &amp; engineering firm based in West Palm Beach, FL. He builds AI agent workforces that run real business operations — not tools you use, but a team that works.
        </p>

      </div>
    </article>
  );
}