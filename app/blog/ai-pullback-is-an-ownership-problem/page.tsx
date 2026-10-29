import { PostTldr, PostSources } from '@/components/PostEnhancements';

const SLUG = 'ai-pullback-is-an-ownership-problem';
const HERO = `https://franklin.simplifyingbusinesses.com/blog/${SLUG}-hero.jpg`;
const DIAGRAM = `https://franklin.simplifyingbusinesses.com/blog/${SLUG}-four-things.jpg`;

export const metadata = {
  title: 'The AI Pullback Is Not an AI Problem | Franklin J Bryant IV',
  description:
    'Companies are not winding back AI. They are winding back projects nobody owned. The four failures behind almost every pullback story, and the four lines worth writing down before you buy anything else.',
  keywords: [
    'Franklin J Bryant IV',
    'Franklin Bryant',
    'AI adoption failure',
    'AI project failure',
    'AI pullback',
    'AI strategy',
    'AI governance',
    'AI cost control',
    'workflow automation',
    'Prospyr 305',
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    type: 'article',
    siteName: 'Franklin J Bryant IV',
    title: 'The AI Pullback Is Not an AI Problem',
    description:
      'Almost no pullback story describes a model that was too weak. They describe a project that was bought instead of installed.',
    url: `https://franklin.simplifyingbusinesses.com/blog/${SLUG}`,
    images: [
      {
        url: HERO,
        width: 1600,
        height: 900,
        alt: 'A dark server room at night with one rack lit green from the inside and a single network cable lying unplugged on the concrete floor in the foreground.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theycallmeking_',
    title: 'The AI Pullback Is Not an AI Problem',
    description:
      'AI did not fail. It got bought instead of installed. Those are different problems, and only one of them is expensive.',
    images: [HERO],
  },
};

export default function AiPullback() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The AI Pullback Is Not an AI Problem',
    description:
      'Companies are not winding back AI. They are winding back projects nobody owned: the partner left, nobody was trained, the cost was unbounded, and there was no way to judge the output.',
    image: HERO,
    inLanguage: 'en',
    articleSection: 'AI Strategy',
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
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
    keywords: ['AI adoption', 'AI strategy', 'AI governance', 'AI cost control', 'workflow automation'],
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Blog · October 29, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The AI pullback is not an AI problem<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl italic">
          Almost none of the pullback stories describe a model that was too weak. They describe a
          project that was bought instead of installed.
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
          alt="A dark server room at night with one rack lit green from the inside and a single network cable lying unplugged on the concrete floor in the foreground."
          className="w-full"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          The thing is installed. The connection to whoever was supposed to run it is lying on the
          floor.
        </figcaption>
      </figure>

      <div className="space-y-6 text-lg leading-relaxed text-gray-300">
        <p>
          Every few months the story changes shape. Two years ago AI was going to replace your staff.
          Now the story going around is that companies are pulling back, drowning in errors,
          low-quality output, privacy risk and costs nobody forecast.
        </p>
        <p>Both stories come from the same place. Neither one is about the model.</p>
        <p>
          Read the pullback coverage properly and something stands out. Almost none of it describes a
          model that was too weak. It describes a project that was bought instead of installed. A
          partner who left after go-live. A tool nobody was trained on. A bill nobody capped. An output
          nobody could grade, so the only test was whether it felt right.
        </p>
        <p>
          Those are four symptoms of one missing thing. <strong className="text-white">Nobody defined
          the job.</strong>
        </p>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
            You bought a project, not a result
          </h2>
          <p>
            The pattern doesn&apos;t change. A vendor sells a build. The build ships. The invoice
            clears. Then the person who understood why it was built moves to the next engagement, and
            the thing sits there doing something adjacent to what you needed.
          </p>
          <p>
            I&apos;ve seen this from the other side. When we audit a codebase, the architecture is
            rarely the problem. The problem is that nobody can tell me what the system was supposed to
            decide. So every screen ends up defending against a state the database should never have
            allowed.
          </p>
          <p>
            A project has a delivery date. A result has an owner and a number. If your AI initiative
            has a delivery date and no number,{' '}
            <strong className="text-white">you bought a project.</strong>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
            Nobody trained the person who has to use it
          </h2>
          <p>
            Every tool has a person on the other end who has to change what they do on a Tuesday. If
            that person wasn&apos;t in the build, they&apos;ll use the tool the way they used the old
            process, and the tool will look broken.
          </p>
          <p>
            That isn&apos;t an AI literacy problem in the abstract. It&apos;s specific. Who checks the
            output. What they do when it looks wrong. Where they escalate. If those three answers
            aren&apos;t written down, the tool is one bad week away from being quietly ignored.
          </p>
          <p>The ones that survive are boring. Somebody wrote the exception path down before launch.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
            The cost was never bounded
          </h2>
          <p>
            Token spend is the first line item in the history of software that scales with usage and
            has no natural ceiling. Companies sign a contract with a monthly platform fee, then
            discover the real bill is the per-call cost multiplied by however many people found the
            button.
          </p>
          <p>
            I&apos;m not going to pretend we predicted every bill either. What we do now is put a
            boundary on it before anyone logs in. What this is allowed to cost per month. What happens
            when it hits that. Which jobs are worth paying for and which aren&apos;t.{' '}
            <strong className="text-white">
              A tool without a ceiling gets switched off the first time finance looks.
            </strong>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
            Nobody could grade the output
          </h2>
          <p>
            AI quality collapsed in a lot of organisations because nobody defined good. Not in a
            slide. In a test.
          </p>
          <p>
            We build evaluation sets for the same reason an accountant reconciles a bank account. You
            need twenty real examples with the right answer written down. Otherwise you&apos;ve got no
            way to know whether the model improved or just changed. And without that, every complaint
            turns into a debate, and the loudest person wins.
          </p>
          <p>
            It&apos;s the cheapest thing on this list and the one most often skipped.{' '}
            <strong className="text-white">Twenty examples cost less than one bad month.</strong>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
            What the pullback actually tells you
          </h2>
          <p>It tells you buying was easy and installing was hard.</p>
          <p>
            Nobody&apos;s winding back because a model got worse. They&apos;re winding back because
            those four things were never done. The organisation looked at a tool with no owner, no
            training, no ceiling and no test, and correctly decided it was a liability.
          </p>
          <p>
            I&apos;ve told clients not to automate a step. Sometimes the process is the product.
            Sometimes the volume is too low to justify it. Sometimes the mistake would be too
            expensive to catch. That conversation is worth more than a build, and it&apos;s the one
            most vendors won&apos;t have, because it doesn&apos;t invoice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
            The shorter version
          </h2>
          <p>Before you buy anything else, write down four things.</p>
          <p>
            The one step that&apos;s broken, in a sentence an owner would recognise. The person who
            owns it after go-live. The number it has to move. The ceiling on what it&apos;s allowed to
            cost.
          </p>

          <figure className="my-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={`/blog/${SLUG}-four-things.jpg`}
              alt="A dark diagram with four labelled cards: the broken step, the owner after go-live, the number it has to move, and the ceiling on cost."
              className="w-full"
            />
            <figcaption className="mt-2 text-xs text-gray-500 text-center">
              Four lines on one page. Most AI initiatives die because none of them exist.
            </figcaption>
          </figure>

          <p>
            <strong className="text-white">
              If you can&apos;t fill those four in, you don&apos;t have an AI problem. You have a
              definition problem
            </strong>
            , and no vendor on earth can install their way out of it.
          </p>
          <p>
            AI didn&apos;t fail. It got bought instead of installed. Those are different problems, and
            only one of them is expensive.
          </p>
        </section>
      </div>

      <PostSources slug={SLUG} />
    </article>
  );
}
