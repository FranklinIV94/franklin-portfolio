import { PostTldr, PostSources } from '@/components/PostEnhancements';

const SLUG = 'what-changed-between-tax-season-and-november';
const HERO = `https://franklin.simplifyingbusinesses.com/blog/${SLUG}-hero.jpg`;

export const metadata = {
  title: 'What changed between tax season and November | Franklin J Bryant IV',
  description:
    'A year of finding out what agents are actually for: tax season as the first production use, the February question that changed the plan, the shift from building workflows to defending them, and where the work goes next.',
  keywords: [
    'Franklin J Bryant IV',
    'Franklin Bryant',
    'agentic systems',
    'AI agents in business',
    'AI automation accounting firm',
    'workflow automation',
    'AI year in review',
    'production first AI',
    'agent security',
    'AI governance',
    'small firm automation',
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    type: 'article',
    siteName: 'Franklin J Bryant IV',
    title: 'What changed between tax season and November',
    description:
      'In January the goal was surviving a filing deadline. Eleven months later it is a fleet of agents under a published code of conduct. What changed, in the order it actually happened.',
    url: `https://franklin.simplifyingbusinesses.com/blog/${SLUG}`,
    images: [
      {
        url: HERO,
        width: 1600,
        height: 900,
        alt: 'Six cream calendar pages strung along a bright orange thread against a deep navy background, with the left third of the frame left empty.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theycallmeking_',
    title: 'What changed between tax season and November',
    description:
      'The first thing I gave an agent was not a strategy. It was a queue. One year later, what actually spread, what the security work forced, and what carries into next year.',
    images: [HERO],
  },
};

export default function WhatChangedBetweenTaxSeasonAndNovember() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'What changed between tax season and November',
    description:
      'A year of finding out what agents are actually for: tax season as the first production use, the February question that changed the plan, the shift from building workflows to defending them, and where the work goes next.',
    image: HERO,
    inLanguage: 'en',
    articleSection: 'Year in review',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      url: 'https://franklin.simplifyingbusinesses.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Prospyr 305',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage: `https://franklin.simplifyingbusinesses.com/blog/${SLUG}`,
    keywords: [
      'agentic systems',
      'AI agents in business',
      'workflow automation',
      'production first AI',
      'agent security',
      'AI governance',
    ],
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Year in review · November 24, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          What changed between tax season and November
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl italic">
          A year of finding out what agents are actually for. It started as a deadline, not a
          strategy, and everything since has been an attempt to answer one question it raised in
          February.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>Principal Architect, Agentic Systems, Prospyr 305</span>
        </div>
      </header>

      <PostTldr slug={SLUG} />

      <figure className="mb-16 mt-10 overflow-hidden rounded-2xl border border-border">
        <img
          src={`/blog/${SLUG}-hero.jpg`}
          alt="Six cream calendar pages strung along a bright orange thread against a deep navy background, with the left third of the frame left empty."
          className="w-full"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          Twelve months, one thread. The months that mattered were the ones that repeated.
        </figcaption>
      </figure>

      <div className="space-y-6 text-lg leading-relaxed text-gray-300">
        <p>In January my main focus was tax season.</p>

        <p>
          Not strategy, not a market. A deadline, a queue of returns, and the part of the work that
          only exists because nobody has removed it yet.
        </p>

        <p>
          That is where I first put an agent on real production work — not a demo, not a pilot. If it
          survived a filing deadline, it could survive anything else I gave it.
        </p>

        <p>It did. And then it kept going, which is the part I did not expect.</p>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            Who this is for
          </h2>
          <p>
            Anyone who has an agent subscription and no system around it. The tool is the easy part.
            What follows is one year of putting it inside real operations — in the order it happened,
            not the order a pitch deck would tell it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            A deadline, not a strategy
          </h2>
          <p>
            There is a specific kind of work in every firm that nobody defends and everybody does. It
            is not difficult. It is not valuable. It exists because two systems that should talk to
            each other do not, and a person bridges the gap by hand.
          </p>
          <p>
            In an accounting practice in January, that work is everywhere, and the deadline does not
            move.
          </p>
          <p>
            So the first thing I gave an agent was not a strategy. It was a queue: read the document,
            pull the facts, put them where the next step could find them, leave a record of what it
            did. Nothing about that is impressive. It is the only reason the rest happened, because it
            was the first time the output survived a deadline instead of a demo.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            What spread, and in what order
          </h2>
          <p>
            The thing that read a document could organise a workflow. The thing that organised a
            workflow could reorganise how a firm onboards a client.
          </p>
          <p>
            I did not plan that sequence. It forced itself, and it forced itself in one direction:
            from the part of the work that touches a document, to the part that touches a process, to
            the part that touches a person. Once an agent is holding the facts, the question of who
            else needs those facts stops being rhetorical.
          </p>
          <p>
            By February I was looking at my own firm and thinking the sentence that changed the year:
            if this works here, it works anywhere.
          </p>
          <p>
            I still think that. What changed is my estimate of how much work sits between “works
            here” and “works there.”
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            The question changed in February
          </h2>
          <p>
            Somewhere in that stretch the question stopped being <em>can this help me get through a
            season</em> and became <em>what does a firm look like when the work that only existed
            because nobody removed it is gone.</em>
          </p>
          <p>
            That is a different question, and it is a much less comfortable one. The first has an
            answer you can buy. The second one requires deciding what the firm is actually for once
            the manual overhead is no longer the excuse. Most firms have never had to answer it,
            because the overhead was always there doing the work of a strategy.
          </p>
          <p>I have been answering it since, one workflow at a time.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            The part nobody shows you
          </h2>
          <p>The work between the idea and the business is not interesting, and it is most of it.</p>
          <p>
            Building an offer, building software, taking meetings, working out what to call the thing
            and who it is for — none of that is a story anyone wants to read, and all of it decides
            whether the interesting part ever reaches a client. There is a version of this year that
            ends with a good demo and no business. The difference was not a better model. It was
            narrowing: one workflow, not a transformation programme.
          </p>
          <p>
            The moment the offer got small enough to be true, it started working.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            Then defence, and not by preference
          </h2>
          <p>
            The shift to security did not happen because security became interesting. It happened
            because client data started moving through systems I had built.
          </p>
          <p>
            The moment that happens, you own questions you did not use to answer: what did the system
            do on this matter, who saw it, what left the building, and what happens when it is wrong.
            A workflow that saves six hours a week and cannot answer those questions is not a saving.
            It is a liability with a dashboard.
          </p>
          <p>
            So the work split in two. Build the system. Then prove it — what it can reach, what it
            refuses, what evidence it leaves behind. That second half is where most agent projects
            quietly fail, because it is the half nobody demos.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            Where we actually are
          </h2>
          <p>At the end of November the position is this.</p>
          <p>
            We run a fleet of agents against real operating work, under a published code of conduct
            rather than an internal vibe. The security side has named tiers and a written scope
            instead of “we’ll take a look.” Client data boundaries are something we can demonstrate
            rather than assert.
          </p>
          <p>
            None of that is what I would have predicted in February. All of it came from the same
            instinct the filing season taught: if it cannot survive production, it is not finished.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">
            What carries into next year
          </h2>
          <p>What comes next is not a new direction. It is the same one, aimed wider.</p>
          <p>
            The work that fixed a filing season fixes a claims file, a payroll run, an intake desk, a
            dispatch board. Different vocabulary, same shape: a fact gets captured once, the systems
            downstream read it, and a person stays one step away for the case the rules did not
            anticipate. Next year is that pattern moving through more verticals — not as a pitch, but
            inside the workflows people already use.
          </p>
          <p>
            Three things travel with it. We build the software and we stay accountable for it. We
            teach, because an optimization nobody understands is a dependency, not a result. And we
            make the savings visible in the only place that counts: the client’s own numbers.
          </p>
          <p>
            The discipline behind that is less glamorous. Every year leaves a pile of things that
            looked like breakthroughs and were not. Ours gets an autopsy, not a eulogy — why it
            failed, whether the reason was the idea or the timing, and a written verdict on whether it
            earns next year. Some do. Most do not, and the ones that do not stay dead.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4 mt-10">The standard</h2>
          <p>
            One workflow, live in thirty days, saving at least ten hours a week, or it is not billed.
            It is a deliberately narrow promise, and it is the only kind worth making. A
            transformation programme cannot fail in a way anyone can see. One workflow can.
          </p>
          <p>
            What I want at the end of next year is not a longer list. It is clients who can point at a
            number that moved and tell you why.
          </p>
        </section>

        <p className="text-base text-gray-400 pt-6 border-t border-border">
          Franklin J Bryant IV is Principal Architect, Agentic Systems at Prospyr 305, where he
          designs and builds the workflows, platforms and agents that firms run their operations on.
        </p>
      </div>

      <PostSources slug={SLUG} />
    </article>
  );
}
