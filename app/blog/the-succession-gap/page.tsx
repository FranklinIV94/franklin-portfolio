import { PostTldr, PostSources } from '@/components/PostEnhancements';

const SLUG = 'the-succession-gap';
const HERO = `https://franklin.simplifyingbusinesses.com/blog/${SLUG}-hero.jpg`;

export const metadata = {
  title: 'The Succession Gap | Franklin J Bryant IV',
  description:
    "NVIDIA's board removed its chief executive in a morning, handed the job to the CFO who kept her old one, and appointed the first Chair in company history — no cause, no successor. An opinion column on what that release admits, what the China chip rumour gets wrong, and five things a normal business should check about its own vendors.",
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
    'DeepSeek V4 trained on Nvidia',
    'NVFP4 quantization',
    'Nvidia chip export controls China',
    'MiniMax M2.7 Nvidia',
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    type: 'article',
    siteName: 'Franklin J Bryant IV',
    title: 'The Succession Gap',
    description:
      'A company lost its chief executive before the market opened, promoted the CFO into the job while she keeps it, and appointed the first board chair in its history. The interesting part is what the release does not say — and what the chip rumour gets backwards.',
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
      'No cause given. No successor named. The CFO now holds two jobs and the board has a chair for the first time in 33 years. That is a governance story — and the chip rumour going around gets the verb wrong.',
    images: [HERO],
  },
};

export default function TheSuccessionGap() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Succession Gap',
    description:
      "NVIDIA's November 12 release announced a CEO resignation, an interim chief who keeps her previous job, and the first Chair of the Board in company history, with no cause and no named successor. An opinion column on single-point dependency, the China chip rumour, and what a normal business should check about its own vendors.",
    image: HERO,
    inLanguage: 'en',
    articleSection: 'AI Strategy',
    datePublished: '2026-11-12',
    dateModified: '2026-11-13',
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
      'chip export controls',
      'NVFP4 quantization',
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
          Opinion · November 12, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The succession gap<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl italic">
          A company lost its chief executive in a morning, handed the job to the CFO who kept her old
          one, and appointed the first board chair in its history — all in one release that names no
          cause and no successor. I read it once as a governance document. Then I read it again as a
          warning about my own vendors.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>COO, All Lines Business Solutions</span>
        </div>
        <p className="mt-4 text-sm text-gray-500 max-w-2xl">
          This is an opinion column. Every factual claim is sourced at the foot of the page. The
          judgments are arguments, and you are welcome to disagree with them.
        </p>
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
            What I actually think, before the facts
          </h2>
          <p>
            I have never met Jensen Huang and I have no inside knowledge of NVIDIA. What I do have is
            a working life spent watching businesses discover, usually on a Tuesday, that one person or one
            vendor was the entire plan. So when a four-trillion-dollar company published three
            paragraphs saying its founder was gone as of this morning, no reason given, no successor
            named, I did not read it as a scandal. I read it as an admission.
          </p>
          <p>
            Here is the thing that stuck with me. The release is not badly written. It is{' '}
            <em>well</em> written — every sentence does a job, and the job is to be true without saying
            anything. That is a real skill. It is also exactly what a company sounds like when it has
            spent years rehearsing an emergency it never actually planned for.
          </p>
          <p>
            One more piece of housekeeping, because it matters for the rest of this. I am going to say
            what I think in plain first person, including about the story everyone is whispering about.
            I will mark the line between reporting and opinion, and I will not blur it to make a
            paragraph hit harder. A blog is allowed to have a thesis. It is not allowed to invent a
            fact to carry it.
          </p>
        </section>

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

          <figure className="my-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={`/blog/${SLUG}-release.jpg`}
              alt="Four-step timeline of the NVIDIA release: thirty-three years of one person as the control, a morning resignation effective immediately with no cause given, the CFO installed as interim CEO while keeping the CFO job, and the first Chair of the Board in company history — with a bar across the bottom noting that the release contained no cause, no named successor and no timeline."
              className="w-full"
            />
            <figcaption className="mt-2 text-xs text-gray-500 text-center">
              Three sentences of fact, and one absence that runs across all of them.
            </figcaption>
          </figure>
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
          <p>More telling is what is absent structurally:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>No named successor.</strong> Not &quot;the board has been planning for this&quot; —
              a search, starting now, internal and external.
            </li>
            <li>
              <strong>The interim keeps both jobs.</strong> Kress is now the chief executive <em>and</em>{' '}
              the chief financial officer. That is two full-time roles, one of which signs the financial
              statements, held by one person during the most scrutinised quarter in the company&apos;s
              history. It is a real expression of confidence in her. It is also what you do when the
              bench is thin.
            </li>
            <li>
              <strong>The first chair in company history.</strong> A board that has never had an
              independent chair has one the same afternoon. That is not a coincidence; it is a control
              being installed because the control that was there — the founder — just left.
            </li>
          </ul>
          <p>
            Thirty-three years of a company being one person&apos;s judgment call, and the plan for the
            day he isn&apos;t there is a press release written in the past tense. I keep coming back to
            that sentence because it is the whole article. A succession plan is not a document you write
            when the emergency starts. It is the document that makes the emergency boring.
          </p>

          <p className="text-2xl font-display text-white border-l-4 border-accent pl-6 italic mt-12">
            Thirty-three years of one person&apos;s judgment, and the plan for the day he isn&apos;t
            there is a press release written in the past tense.
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

          <figure className="my-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={`/blog/${SLUG}-repricing.jpg`}
              alt="Chart of the 12 November repricing: the shares fell as much as 14 percent intraday and closed 4.3 percent lower, while the week took more than 740 billion dollars off market value and roughly 2 trillion dollars off the October peak, with market value below 4 trillion dollars for the first time since 2025 — against products, fabs and order book that had not changed."
              className="w-full"
            />
            <figcaption className="mt-2 text-xs text-gray-500 text-center">
              Nothing about the business changed on Thursday. Only the name on the door.
            </figcaption>
          </figure>

          <p>
            Note the shape of it. The company&apos;s products did not change on Thursday. The fabs did not
            change. The order book did not change. One name came off a door and a trillion-dollar
            question got asked out loud: how much of this was the institution, and how much was him?
          </p>
          <p>
            My own answer, for what it is worth: most of it was the institution, and the market knows
            that. What the market could not price was the one thing institutions cannot manufacture on
            demand — certainty about who decides next week. Money does not run from bad news. It runs
            from ambiguity.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            &quot;Without interruption&quot; is a claim, not a fact
          </h2>
          <p>
            The chair&apos;s quote is careful and it is worth reading twice: he expects the company&apos;s{' '}
            <em>operations, customer commitments and product roadmap</em> to continue without
            interruption.
          </p>
          <p>
            <em>Expects.</em> That is a forecast in the mouth of the person who now has to make it true.
            It is not a warranty, and it is testable — NVIDIA reports third-quarter fiscal 2027 results
            on <strong>November 17</strong>, five days after the announcement, with the call at 2 p.m. PT.
          </p>

          <div className="bg-surface border border-border rounded-xl p-6 my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-accent font-semibold">
                    What to watch on 17 November
                  </th>
                  <th className="text-left py-2 text-accent font-semibold">
                    What it would mean
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Guidance reaffirmed in the same language</td>
                  <td className="py-3 text-gray-300">
                    The pipeline outlived the man. &quot;Without interruption&quot; starts becoming a fact.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">
                    A large customer disclosed as paused or re-scoping
                  </td>
                  <td className="py-3 text-gray-300">
                    The dependency is not only internal. Procurement committees hedge faster than boards.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Kress opens the call as both CEO and CFO</td>
                  <td className="py-3 text-gray-300">
                    The interim arrangement is being worn in public rather than papered over. Watch who
                    answers the margin questions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Put that date in your calendar whether or not you own the stock. If a company can absorb this
            in five days, &quot;without interruption&quot; becomes a fact. If the call is rearranged, it
            stays a claim — and the whole supply chain that plans around it should notice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            The China story nobody can leave alone
          </h2>
          <p className="text-sm text-gray-500 italic">
            Opinion, with the reporting cited. This is the section where I stop describing the release
            and start telling you what I make of the noise around it.
          </p>
          <p>
            Since Thursday the theory going around trading chats and group texts is that NVIDIA was
            routing its best silicon into China anyway — that the export controls were a press release
            and the enforcement was theatre — and that this year&apos;s Chinese frontier models are the
            receipt. DeepSeek&apos;s V4 Flash and V4 Pro. MiniMax&apos;s M2.7. Trained in China,
            quantized on NVIDIA hardware, running on NVIDIA parts. Follow the chips and you find the
            smoking gun.
          </p>
          <p>
            I spent a couple of hours on that theory, because it is the kind of theory that either falls
            apart immediately or gets much worse the harder you look. My read is that it is three
            different claims wearing one coat, and only one of them survives contact with evidence.
          </p>

          <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
            1. &quot;NVIDIA engineered a way around the controls.&quot;
          </h3>
          <p>
            Unfounded, as far as I can find, and I looked. There is no document, no filing, and no
            on-the-record allegation that the company designed its own route around export controls. What
            exists is narrower and stranger: in February, a senior administration official told Reuters
            that DeepSeek&apos;s newest model had been trained on Blackwell — the chip the US does not
            ship to China — likely at a data centre in Inner Mongolia, and that DeepSeek would strip the
            technical indicators that would give it away. NVIDIA declined to comment. The Commerce
            Department and DeepSeek did not respond.
          </p>
          <p>
            An official&apos;s claim with no artifact attached is a claim. I am not going to launder it
            into a fact for you, and I am not going to pretend the absence of a denial is a confession.
            That is the difference between a blog with a thesis and a blog with an agenda.
          </p>

          <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
            2. &quot;The chips got there anyway.&quot;
          </h3>
          <p>
            This one is not really a conspiracy, because the diversion is documented and the paperwork is
            public. In March, the co-founder of Super Micro was arrested over a scheme to move
            NVIDIA-equipped servers to China through Taiwan and Southeast Asian intermediaries, using
            falsified documents and dummy equipment to pass audits — a scheme valued at roughly $2.5
            billion. Days later, three people were charged over 750 servers worth about $170 million
            ordered with certifications swearing they were not bound for China. Congress responded by
            advancing a bill that would put tracking directly into the chips.
          </p>
          <p>
            None of that requires NVIDIA to be complicit. It requires NVIDIA to be unable to see its own
            hardware once a distributor has it. Those are different sins, and the second one is the more
            common failure in every supply chain I have ever audited.
          </p>

          <h3 className="font-display font-bold text-xl text-white mt-10 mb-3">
            3. &quot;They were quantized on NVIDIA chips, so NVIDIA is behind the models.&quot;
          </h3>
          <p>
            Here is where the theory eats itself, and it is the part I find genuinely interesting,
            because the evidence is not hidden. It is published, with a licence file, on NVIDIA&apos;s own
            Hugging Face organisation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>nvidia/DeepSeek-V4-Flash-NVFP4</strong> — listed 28 May 2026. A quantized version
              of DeepSeek&apos;s open-weight model: 284B parameters total, 13B active, compressed with
              NVIDIA&apos;s own Model Optimizer, targeted at Blackwell, MIT licence, and under deployment
              geography the card says one word: <em>global</em>.
            </li>
            <li>
              <strong>nvidia/DeepSeek-V4.1-Flash-NVFP4</strong> and{' '}
              <strong>nvidia/MiniMax-M2.7-NVFP4</strong> — the same pattern, same organisation, same
              naming convention.
            </li>
            <li>
              An NVIDIA developer blog post from April 2026 titled, without a shred of irony,{' '}
              <em>MiniMax M2.7 Advances Scalable Agentic Workflows on NVIDIA Platforms</em> — 230B
              parameters, FP8 kernels contributed upstream to vLLM and SGLang, a NIM container, day-zero
              support.
            </li>
          </ul>
          <p>
            So yes: those models run on NVIDIA hardware, and NVIDIA ships the build that makes them run.
            That is not a leak. That is a product line.
          </p>

          <figure className="my-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={`/blog/${SLUG}-chips.jpg`}
              alt="A macro photograph of the edge of a silicon wafer, its blue-green circuitry glowing in near darkness, with a thin line of green light crossing the frame like a border and the far side lit warmer and softer."
              className="w-full"
            />
            <figcaption className="mt-2 text-xs text-gray-500 text-center">
              The front door was open the whole time: NVIDIA publishes the quantized builds of
              DeepSeek&apos;s and MiniMax&apos;s open-weight models under its own name, for global
              deployment.
            </figcaption>
          </figure>

          <p>
            And here is the word carrying all the weight in the rumour: <strong>quantized</strong>.
            Quantization is a compression step performed on weights that already exist, to make a model
            cheaper to serve. A card that says NVFP4 tells you where a model <em>runs best</em>. It tells
            you nothing about what the model was <em>raised on</em>. A model trained on Huawei silicon
            and later compressed for Blackwell looks identical on that page to one trained on a Blackwell
            cluster — and nothing DeepSeek has published settles it either way.
          </p>
          <p>
            So &quot;they were quantized on NVIDIA chips, therefore NVIDIA trained them&quot; is not a
            scandal. It is a category error with a stock chart attached, and it is being repeated by
            people who would never accept the same logic about anything else.
          </p>
          <p>
            Now the opinion, since that is what you came for.
          </p>
          <p>
            <strong>For NVIDIA&apos;s critics, the uncomfortable fact is that no back door was
            needed.</strong> The company spent a decade building the toolchain that every serious model
            gets built and served on — the compilers, the kernels, the container, the optimized build of
            somebody else&apos;s weights with its name on the label. You do not have to smuggle a
            platform. It is already in the building. Open weights plus a permissive licence plus day-zero
            support means the most efficient place to run a Chinese frontier model is, awkwardly, an
            American GPU.
          </p>
          <p>
            <strong>For NVIDIA&apos;s shareholders, the uncomfortable fact is the mirror image:</strong>{' '}
            this is a moat made of habit, not of scarcity. A chip can be tracked, tariffed, licensed and
            legislated. A toolchain cannot — you cannot put a tracker in a CUDA kernel, and every
            enforcement bill I read this year is written as though the object of the fight is a crate. I
            think the fight is over an ecosystem, and ecosystems do not read statutes.
          </p>
          <p>
            That, to me, is the story of the year — and almost nobody covering the resignation is
            covering it. One man&apos;s exit will be resolved in a quarter. The other question, whether
            American policy can govern a technology whose advantage lives in software layers it does not
            control, will outlive every CEO involved.
          </p>
          <p>
            None of which changes your exposure, and this is the part I would say to a client: you cannot
            influence chip policy and you are not going to out-research a trading desk. You can find out
            whether the model your business runs on has a second home. That is a Tuesday problem, not a
            Washington one.
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
            <strong> a dependency you have never priced is not a strength, it is an unpriced risk</strong>{' '}
            — and it gets priced for you, in one morning, at the worst possible moment.
          </p>
          <p>
            Here is what I would check this week in any small business running AI in operations. None of
            it requires a consultant, and all of it fits on one page.
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
            If I sat on that board
          </h2>
          <p>
            One more opinion, and then I will get out of the way. This is what I would be arguing for in
            the room, because the alternative is a company that spends a year describing itself as
            &quot;in transition&quot; and a market that prices every day of it.
          </p>
          <div className="rounded-xl border-l-4 border-accent bg-surface p-6 my-8">
            <p className="text-gray-200 italic leading-relaxed">
              <strong className="text-accent not-italic">Name the permanent CEO inside 90 days, or say
              out loud why the search takes longer.</strong> An interim holding two jobs is a decision
              with an expiry date nobody printed. Unstated timelines are how a temporary arrangement
              becomes the arrangement.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-accent bg-surface p-6 my-8">
            <p className="text-gray-200 italic leading-relaxed">
              <strong className="text-accent not-italic">Split the CFO job from the CEO job this
              quarter.</strong> Not because she cannot do both — she plainly can. Because the person
              whose numbers are being scrutinised should not also be the person signing off on them.
              Concentration risk is not only a customer problem.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-accent bg-surface p-6 my-8">
            <p className="text-gray-200 italic leading-relaxed">
              <strong className="text-accent not-italic">Publish the process, not the person.</strong>{' '}
              Boards treat succession like a state secret and then act surprised when the market assumes
              the worst. Say who is searching, what they are looking for, and when they will report
              back. &quot;A search&quot; is a verb, not a plan.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            The part that should worry you most
          </h2>
          <p>
            Not the resignation. The <em>speed</em>. A $4 trillion company went from
            &quot;stable&quot; to &quot;searching&quot; inside a single news cycle, and the market
            repriced trillions before anyone had read the second paragraph.
          </p>
          <p>
            Your business will not get a news cycle. It will get a Tuesday: the API key stops working, the
            account manager leaves, the platform raises prices 40% with thirty days&apos; notice. The
            businesses that survive that Tuesday are the ones that wrote the one-page fallback while
            nothing was wrong.
          </p>
          <p>
            NVIDIA will probably be fine. It has the balance sheet, the people, and a five-day clock to
            prove it. The rest of us should use the week to check whether we would be — and if the honest
            answer is &quot;no,&quot; that is not a reason to feel bad. It is a reason to spend one
            afternoon.
          </p>

          <p className="text-2xl font-display text-white border-l-4 border-accent pl-6 italic mt-12">
            Money does not run from bad news. It runs from ambiguity — and ambiguity is what a company
            has instead of a plan.
          </p>
        </section>
      </div>

      <PostSources slug={SLUG} />
    </article>
  );
}
