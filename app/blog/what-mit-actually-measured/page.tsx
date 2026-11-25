import { PostTldr, PostSources } from '@/components/PostEnhancements';

const SLUG = 'what-mit-actually-measured';
const HERO = `https://franklin.simplifyingbusinesses.com/blog/${SLUG}-hero.jpg`;

export const metadata = {
  title: 'The 95% Statistic Is Misquoted | Franklin J Bryant IV',
  description:
    'The number everyone quotes about AI failing is not what the research found. MIT Project NANDA measured organisations getting zero return, from 52 interviews and 153 leaders, and named the cause in the same report. The misquote sells software. The finding sells the opposite.',
  keywords: [
    'Franklin J Bryant IV',
    'Franklin Bryant',
    'MIT GenAI Divide',
    '95% of AI pilots fail',
    'AI pilot failure rate',
    'AI project failure statistics',
    'Gartner agentic AI cancellation',
    'AI adoption research',
    'AI ROI',
    'business process mapping',
    'AI automation failure',
    'context before automation',
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    type: 'article',
    siteName: 'Franklin J Bryant IV',
    title: 'The 95% statistic is misquoted',
    description:
      'MIT never said 95% of AI pilots fail. It said 95% of organisations are getting zero return, from a sample of 52 interviews and 153 leaders, and it named the cause in the same paragraph. Both halves matter, and only one of them is being repeated.',
    url: `https://franklin.simplifyingbusinesses.com/blog/${SLUG}`,
    images: [
      {
        url: HERO,
        width: 1600,
        height: 900,
        alt: 'A dark field of small grey data points with a single bright green point standing apart from the rest, and a thin green line running from it back into the grey mass.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theycallmeking_',
    title: 'The 95% statistic is misquoted',
    description:
      'The report says 95% of organisations get zero return, from 52 interviews and 153 leaders, and that failures came from brittle workflows rather than model quality. Everybody repeats the number. Nobody repeats the cause.',
    images: [HERO],
  },
};

export default function WhatMitActuallyMeasured() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The 95% statistic is misquoted',
    description:
      'MIT Project NANDA measured that 95% of organisations are getting zero return from generative AI, across a sample of 300+ disclosed initiatives, 52 interviews and 153 senior leaders. The same report attributes the divide to approach and brittle workflows rather than model quality. An essay on why the misquote sells software and the real finding sells the work before it.',
    image: HERO,
    inLanguage: 'en',
    articleSection: 'AI Strategy',
    datePublished: '2026-11-25',
    dateModified: '2026-11-25',
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
      'MIT GenAI Divide',
      'AI pilot failure rate',
      'Gartner agentic AI',
      'AI ROI',
      'process mapping before automation',
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
          Essay · November 25, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The 95% statistic is misquoted<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl italic">
          A vendor sent me a guide this week that opened with it. The number is real, it came from a real
          report, and it does not say what the guide says it says. The difference is not pedantry. It is
          the difference between selling a tool and selling the work that has to happen before the tool.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span className="font-semibold text-white">Franklin J Bryant IV</span>
          <span>·</span>
          <span>COO, All Lines Business Solutions</span>
        </div>
        <p className="mt-4 text-sm text-gray-500 max-w-2xl">
          Every factual claim is sourced at the foot of the page, and the primary documents are worth
          reading yourself. The judgments are arguments.
        </p>
      </header>

      <PostTldr slug={SLUG} />

      <figure className="mb-16 mt-10 overflow-hidden rounded-2xl border border-border">
        <img
          src={`/blog/${SLUG}-hero.jpg`}
          alt="A dark field of small grey data points with a single bright green point standing apart from the rest, and a thin green line running from it back into the grey mass."
          className="w-full"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          One point out of a hundred, and a line back to the rest. Most retellings keep the point and
          drop the line.
        </figcaption>
      </figure>

      <div className="space-y-6 text-lg leading-relaxed text-gray-300">
        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            The sentence everyone uses
          </h2>
          <p>
            &ldquo;95% of AI pilots fail.&rdquo; If you have read anything about business AI in the last
            eighteen months you have seen it, usually attributed to MIT, usually in the second paragraph
            of something trying to sell you a platform. I have used numbers like that myself in
            conversation, before I went and read the thing.
          </p>
          <p>
            The report is <em>The GenAI Divide: State of AI in Business 2025</em>, from MIT Project
            NANDA, published July 2025, marked as preliminary findings. Here is the executive summary in
            its own words:
          </p>
          <blockquote className="border-l-2 border-accent/60 pl-5 my-6 text-gray-200">
            <p>
              &ldquo;Despite $30 to $40 billion in enterprise investment into GenAI, this report
              uncovers a surprising result in that 95% of organizations are getting zero return. Just 5%
              of integrated AI pilots are extracting millions in value, while the vast majority remain
              stuck with no measurable P&amp;L impact.&rdquo;
            </p>
          </blockquote>
          <p>
            That is a different sentence. It is about <em>organisations getting zero return</em>, not
            about 95% of pilots failing. Those sound similar and are not: one is a statement about
            outcomes across a population of firms, the other is a failure rate for a specific activity,
            and they support different arguments.
          </p>
          <p>
            The method behind it matters too, because it is on page two and almost nobody carries it
            forward: a systematic review of more than 300 publicly disclosed AI initiatives, structured
            interviews with 52 organisations, and survey responses from 153 senior leaders collected at
            four industry conferences between January and June 2025. That is a serious piece of work. It
            is also 52 interviews, not a census, and the authors label it preliminary.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            The two sentences nobody repeats
          </h2>
          <p>
            Two paragraphs later, the same report says the thing that actually matters, and it is not
            the number:
          </p>
          <blockquote className="border-l-2 border-accent/60 pl-5 my-6 text-gray-200">
            <p className="mb-3">
              &ldquo;This divide does not seem to be driven by model quality or regulation, but seems to
              be determined by approach.&rdquo;
            </p>
            <p>
              &ldquo;Most fail due to brittle workflows, lack of contextual learning, and misalignment
              with day-to-day operations.&rdquo;
            </p>
          </blockquote>
          <p>
            Read those twice. The failure is not the model. It is the workflow the model was pointed at,
            and the absence of context about how the work actually gets done. That is an unglamorous
            finding, which is why it does not travel. &ldquo;95% fail&rdquo; is a headline.
            &ldquo;Brittle workflows and missing context&rdquo; is an indictment of the buyer&rsquo;s
            housekeeping, and you cannot put it on a slide and then ask for a signature.
          </p>
          <p>
            So the market repeats the part that creates urgency and drops the part that prescribes the
            fix. Which leaves a business owner holding a scary number and a vendor telling them the
            answer is a subscription.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            The second number, which holds up
          </h2>
          <p>
            The other statistic in every deck is Gartner&rsquo;s: over 40% of agentic AI projects will be
            cancelled by the end of 2027. That one checks out against the source. Gartner published it on
            25 June 2025, and the reasons it gives are escalating costs, unclear business value and
            inadequate risk controls.
          </p>
          <p>
            Not one of those three reasons is &ldquo;the model was not good enough.&rdquo; Costs escalate
            when scope was never defined. Value is unclear when nobody measured the before. Risk controls
            are inadequate when nobody mapped what the automation touches. Two independent houses, two
            different methods, the same diagnosis, and it is never the model.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            Why this is a business problem, not a research problem
          </h2>
          <p>
            I run automation work for small and mid-sized firms. Not enterprises with a data office. The
            pattern is identical at both scales and it is easier to see in a twelve-person business,
            because there is nowhere for the missing context to hide.
          </p>
          <p>
            A firm asks for a workflow to be automated. We ask how the workflow runs. What comes back is
            usually one person&rsquo;s account of it, given from memory, in the order they believe it
            happens. Then we sit with them while they do it, and it does not happen in that order. There
            are three exceptions nobody mentioned, a spreadsheet that gets checked against a system that
            is supposed to be the source of truth, and a phone call that resolves a conflict the software
            creates every Tuesday.
          </p>
          <p>
            Automate the described version and you have built something that works until it meets the
            first Tuesday. Automate the observed version and it works. The gap between those two versions
            is the entire project, and no model, at any price, closes it for you.
          </p>
          <p>
            This is why I will not quote a build before mapping one. It is not a sales device. It is the
            only way the number I quote afterwards means anything, because without the map there is no
            baseline, and without a baseline &ldquo;it is working&rdquo; is an opinion.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            What to do with a misquoted number
          </h2>
          <p>
            Two things, and neither of them is to stop using the research. The research is good.
          </p>
          <p>
            <span className="font-semibold text-white">Quote it correctly.</span> &ldquo;MIT found 95% of
            organisations getting zero return, from 52 interviews and 153 leaders&rdquo; is a stronger
            sentence than the misquote, because it survives the first person who checks. If your argument
            depends on a number nobody can verify, you have built your credibility on the same brittle
            foundation the report is describing.
          </p>
          <p>
            <span className="font-semibold text-white">Then quote the cause.</span> The report is not a
            warning about AI. It is a warning about pointing AI at work nobody has described. That
            finding is worse news for the firms selling software and better news for the business owners
            who were about to buy it, because it tells them the missing step is one they can take before
            they spend anything.
          </p>
          <p>
            The guide that started this was seven pages, professionally designed, and opened with the
            wrong version of the statistic. I do not think the author lied. I think they read the
            headline version, the way most of us do, and it fit the argument they wanted to make. That is
            how a misquote spreads: not through dishonesty, through convenience, one deck at a time.
          </p>
          <p>
            Go read page two of the report. It is the part worth stealing, and unlike the number, it is
            also the part that is true.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            Where I sit on this, plainly
          </h2>
          <p>
            I sell the unglamorous step. A map of how the work actually happens, what it costs in hours
            and errors, and which single step is worth fixing first. If that sounds like a slower way to
            start, it is, and it is also the only way I have found to finish. The alternative has a name
            in the research now, and the name is not flattering.
          </p>
          <p>
            If you take one thing from this: before you buy an agent, ask the person selling it to draw
            your workflow. Not the version in your head. The version where the phone call happens on
            Tuesday. If they cannot, the brittle workflow in the MIT report is the one you are about to
            pay for.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-white/[0.02] p-8">
        <p className="text-sm text-gray-400 mb-4">
          I wrote a free self-check that scores where a firm actually sits on this, from unmapped to
          automated and audited. Eight statements, no email required.
        </p>
        <a
          href="https://prospyr305.com/free/context-maturity-check/"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-canvas transition hover:opacity-90"
        >
          Take the context maturity check
        </a>
      </div>

      <PostSources slug={SLUG} />
    </article>
  );
}
