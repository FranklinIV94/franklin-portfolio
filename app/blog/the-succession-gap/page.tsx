import { PostTldr, PostSources } from '@/components/PostEnhancements';

const SLUG = 'the-succession-gap';
const HERO = `https://franklin.simplifyingbusinesses.com/blog/${SLUG}-hero.jpg`;

export const metadata = {
  title: 'The Succession Gap | Franklin J Bryant IV',
  description:
    "NVIDIA's board announced a CEO resignation, an interim chief who keeps her old job, and the first Chair in company history — in the same release, without naming a cause or a successor. What that says about single-point dependency, and the five things a normal business should check about its own vendors.",
  keywords: [
    'Franklin J Bryant IV',
    'Franklin Bryant',
    'NVIDIA CEO transition',
    'succession planning',
    'vendor concentration risk',
    'AI vendor dependency',
    'AI governance',
    'single point of failure',
    'Colette Kress interim CEO',
    'Harvey Jones chair',
    'AI infrastructure risk',
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    type: 'article',
    siteName: 'Franklin J Bryant IV',
    title: 'The Succession Gap',
    description:
      'A company lost its chief executive before the market opened, promoted the CFO into the job while she keeps it, and appointed the first board chair in its history. The interesting part is what the release does not say.',
    url: `https://franklin.simplifyingbusinesses.com/blog/${SLUG}`,
    images: [
      {
        url: HERO,
        width: 1600,
        height: 900,
        alt: 'A dark network diagram with a dashed empty ring at its centre, one small green node standing inside the gap and two green paths still carrying load out to the edge nodes.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theycallmeking_',
    title: 'The Succession Gap',
    description:
      'No cause given. No successor named. The CFO now holds two jobs and the board has a chair for the first time in 33 years. That is a governance story, and it has a lesson for every business running on one vendor.',
    images: [HERO],
  },
};

export default function TheSuccessionGap() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Succession Gap',
    description:
      "NVIDIA's November 12 release announced a CEO resignation, an interim chief who keeps her previous job, and the first Chair of the Board in company history, with no cause and no named successor. On single-point dependency and what a normal business should check about its own vendors.",
    image: HERO,
    inLanguage: 'en',
    articleSection: 'AI Strategy',
    datePublished: '2026-11-12',
    dateModified: '2026-11-12',
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
      'succession planning',
      'vendor concentration risk',
      'AI vendor dependency',
      'AI governance',
      'single point of failure',
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
          Blog · November 12, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The succession gap<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl italic">
          A company lost its chief executive in a morning, handed the job to the CFO who kept her old
          one, and appointed the first board chair in its history — all in a single release that names
          no cause and no successor. Read it as a governance document, not a scandal.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>COO, All Lines Business Solutions</span>
        </div>
      </header>

      <PostTldr slug={SLUG} />

      <figure className="mb-16 mt-10 overflow-hidden rounded-2xl border border-border">
        <img
          src={`/blog/${SLUG}-hero.jpg`}
          alt="A dark network diagram with a dashed empty ring at its centre, one small green node standing inside the gap and two green paths still carrying load out to the edge nodes."
          className="w-full"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          The lattice does not collapse when the centre empties. The question is what is still carrying
          load through it.
        </figcaption>
      </figure>

      <div className="space-y-6 text-lg leading-relaxed text-gray-300">
        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            What the release actually says
          </h2>
          <p>
            On November 12, 2026, NVIDIA&apos;s board announced that Jensen Huang had resigned as
            President, Chief Executive Officer and a member of the Board, <em>effective immediately</em>.
          </p>
          <p>
            Colette Kress, the Executive Vice President and Chief Financial Officer, agreed to serve as
            Interim CEO — <em>and to keep the CFO role while doing it</em> — until a permanent successor
            is named. The Board said it is starting a search and will consider internal and external
            candidates.
          </p>
          <p>
            Separately, the Board appointed Harvey C. Jones as <em>its first-ever Chair</em>. Jones has
            been an entrepreneur, technology executive and venture investor for over thirty years,
            including as CEO and Executive Chairman of Synopsys.
          </p>
          <p>
            That is the whole substance of it. Three sentences of fact, a search to be conducted, and two
            quotes about confidence. If you read only the headlines you will think this is a story about
            a man. It is a story about a company that, on the day it needed one, produced an org chart.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            What it does not say
          </h2>
          <p>
            The release gives <strong>no reason</strong> for the resignation. None. Not a family matter,
            not a health matter, not a disagreement — nothing. Press accounts have supplied their own
            explanation, and I am not going to lean on it here, because the governance facts stand up
            without it and the personal ones are unverified by the primary document.
          </p>
          <p>
            More telling is what is absent structurally:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>No named successor.</strong> Not &quot;the board has been planning for this&quot; —
              a search, starting now, internal and external.
            </li>
            <li>
              <strong>The interim keeps both jobs.</strong> Kress is now the chief executive{' '}
              <em>and</em> the chief financial officer. That is two full-time roles, one of which signs
              the financial statements, held by one person during the most scrutinised quarter in the
              company&apos;s history. It is a real expression of confidence in her. It is also what you
              do when the bench is thin.
            </li>
            <li>
              <strong>The first chair in company history.</strong> A board that has never had an
              independent chair has one the same afternoon. That is not a coincidence; it is a control
              being installed because the control that was there — the founder — just left.
            </li>
          </ul>
          <p>
            Thirty-three years of a company being one person&apos;s judgment call, and the plan for the
            day he isn&apos;t there is a press release written in the past tense.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">The market&apos;s vote</h2>
          <p>
            The stock fell as much as 14% before recovering to close down 4.3%, which is the market
            saying something more interesting than &quot;panic.&quot; It is repricing a leadership
            premium into a leadership discount, and doing it in hours.
          </p>
          <p>
            The bigger number is the week: more than $740 billion of market value gone since the prior
            Friday&apos;s close, roughly $2 trillion off the October peak, and a valuation that fell
            below $4 trillion for the first time since 2025. Whatever you believe about AI capex, that is
            the sound of a single point of failure being priced.
          </p>
          <p>
            Note the shape of it. The company&apos;s products did not change on Thursday. The fabs did not
            change. The order book did not change. One name came off a door and a trillion-dollar
            question got asked out loud: how much of this was the institution, and how much was him?
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            &quot;Without interruption&quot; is a claim, not a fact
          </h2>
          <p>
            The chair&apos;s quote is careful and it is worth reading twice: he expects the
            company&apos;s <em>operations, customer commitments and product roadmap</em> to continue
            without interruption.
          </p>
          <p>
            <em>Expects.</em> That is a forecast in the mouth of the person who now has to make it true.
            It is not a warranty, and it is testable — NVIDIA reports third-quarter fiscal 2027 results
            on <strong>November 17</strong>, five days after the announcement, with the call at 2 p.m. PT.
          </p>
          <p>
            Put that date in your calendar whether or not you own the stock. Watch three things: whether
            guidance is reaffirmed in the same language, whether any large customer is disclosed as
            having paused, and whether Kress opens the call as both CEO and CFO. If a company can absorb
            this in five days, &quot;without interruption&quot; becomes a fact. If the call is rearranged,
            it stays a claim — and the whole supply chain that plans around it should notice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            Why a 30-person business should care
          </h2>
          <p>
            Almost nobody reading this owns NVIDIA shares. Almost everybody reading this has, in the last
            eighteen months, wired some part of their business to a single vendor whose stability they
            have never once tested: the model API behind the assistant, the automation platform running
            the follow-up sequences, the one consultant who knows how the integration works.
          </p>
          <p>
            The lesson of Thursday is not &quot;AI is risky.&quot; It is narrower and more useful:
            <strong> a dependency you have never priced is not a strength, it is an unpriced risk</strong>
            — and it gets priced for you, in one morning, at the worst possible moment.
          </p>
          <p>
            Here is what I would check this week in any small business running AI in operations. None of
            it requires a consultant.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <div className="rounded-xl border border-border bg-surface/40 p-5">
              <div className="text-xs font-semibold text-accent tracking-wide uppercase mb-2">
                01 · Name the single points
              </div>
              <p className="text-base text-gray-300">
                List every workflow where one vendor, one account or one person is the only path. Be
                honest: if the answer is &quot;all of them,&quot; write that down.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/40 p-5">
              <div className="text-xs font-semibold text-accent tracking-wide uppercase mb-2">
                02 · Test the export
              </div>
              <p className="text-base text-gray-300">
                Can you get your data out, in a usable format, without asking permission? Do it once.
                The day you need it is not the day to discover the answer.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/40 p-5">
              <div className="text-xs font-semibold text-accent tracking-wide uppercase mb-2">
                03 · Write the fallback, in one page
              </div>
              <p className="text-base text-gray-300">
                What happens Monday if the vendor is gone, the price triples, or the account is locked?
                One page, named owner, no heroics. A plan nobody has read is not a plan.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/40 p-5">
              <div className="text-xs font-semibold text-accent tracking-wide uppercase mb-2">
                04 · Put a ceiling on it
              </div>
              <p className="text-base text-gray-300">
                A number per month, and a named person who can see it. Unbounded usage is how a
                convenience becomes a line item nobody can defend.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/40 p-5 sm:col-span-2">
              <div className="text-xs font-semibold text-accent tracking-wide uppercase mb-2">
                05 · Grade the output
              </div>
              <p className="text-base text-gray-300">
                If you cannot say whether the thing is working, you do not have a system — you have a
                subscription. Two checks a month, written down, beats any dashboard you never open.
              </p>
            </div>
          </div>

          <p>
            Five items, one afternoon. It is the difference between a dependency you chose and one that
            chose you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            The part that should worry you most
          </h2>
          <p>
            Not the resignation. The <em>speed</em>. A $4 trillion company went from &quot;stable&quot;
            to &quot;searching&quot; inside a single news cycle, and the market repriced trillions before
            anyone had read the second paragraph.
          </p>
          <p>
            Your business will not get a news cycle. It will get a Tuesday: the API key stops working, the
            account manager leaves, the platform raises prices 40% with thirty days&apos; notice. The
            businesses that survive that Tuesday are the ones that wrote the one-page fallback while
            nothing was wrong.
          </p>
          <p>
            NVIDIA will probably be fine. It has the balance sheet, the people and a five-day clock to
            prove it. The rest of us should use the week to check whether we would be.
          </p>
        </section>
      </div>

      <PostSources slug={SLUG} />
    </article>
  );
}
