import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Launch Security Checklist | Franklin J Bryant IV',
  description:
    'The eleven checks every AI-built system has to pass before it touches a real user or a real record. The gate we actually run, written out in full.',
  keywords: [
    'pre-launch security checklist',
    'AI app security',
    'OWASP checklist',
    'row level security',
    'secrets management',
    'rate limiting',
    'AI security audit',
    'vibe coding security',
  ],
  alternates: { canonical: '/field-notes/pre-launch-security-checklist' },
  openGraph: {
    title: 'The Pre-Launch Security Checklist',
    description:
      'The eleven checks every AI-built system has to pass before it touches a real user or a real record.',
    type: 'article',
    url: 'https://franklin.simplifyingbusinesses.com/field-notes/pre-launch-security-checklist',
  },
};

const checks = [
  {
    n: 1,
    title: 'Protect yourself, not just the app',
    body: 'An accurate privacy notice that says what you collect, where it lives, and who receives it. Written by someone who knows the answer, not copied from a template.',
  },
  {
    n: 2,
    title: 'Review database grants and row-level security together',
    body: 'Row-level security enabled with no policies is worse than none at all — it looks safe and reads like an open door. Test with an anonymous session and two separate real users.',
  },
  {
    n: 3,
    title: 'Test the failure path, not just the happy path',
    body: 'Wrong passwords, unknown-email resets, reused verification links, duplicate signups, expired tokens. Most incidents live in the branches nobody demoed.',
  },
  {
    n: 4,
    title: 'Map trust boundaries before fixing anything',
    body: 'Public routes, sensitive data, privileged components, irreversible actions — mapped first. Fixes applied before the map exists are guesses with good intentions.',
  },
  {
    n: 5,
    title: 'Review against OWASP with evidence, not vibes',
    body: 'Every finding needs the exact file and line, the exploit path, the preconditions, the impact, and a test that proves or rejects it. A finding nobody can reproduce is not a finding.',
  },
  {
    n: 6,
    title: 'Client-side validation is UX, not security',
    body: 'Every untrusted request is validated again on the server, and authorization is checked as its own step. Hiding a button has never been an access control.',
  },
  {
    n: 7,
    title: 'Hunt for data leaks in the places nobody looks',
    body: 'Client bundles, API responses, logs, source maps, build artifacts. A key that ships to the browser is a public key, whatever the code comment says.',
  },
  {
    n: 8,
    title: 'Publishable keys in the browser, secret keys on the server',
    body: 'If a secret has ever touched a public repository, it is rotated immediately — not deleted in a later commit, rotated. Assume it was read.',
  },
  {
    n: 9,
    title: 'Treat an unfamiliar repository as hostile',
    body: 'Before anything gets shell, network, or credential access: read the instructions, hooks, tool configuration, environment files, and package scripts. Published incidents of agents stepping outside their sandbox are the reason this check exists.',
  },
  {
    n: 10,
    title: 'Rate limits, concurrency limits, and cost budgets',
    body: 'On authentication, forms, state-changing routes, and anything that calls a paid API. The bill is an attack surface too — an unbounded agent loop is a denial of service with your card on file.',
  },
  {
    n: 11,
    title: 'Patch known vulnerabilities, then prove the fix',
    body: 'Update the framework, reproduce every finding, review every fix, test again, and scan again. A fix nobody re-tested is a change, not a repair.',
  },
];

export default function PreLaunchChecklist() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Pre-Launch Security Checklist',
    description:
      'The eleven checks every AI-built system has to pass before it touches a real user or a real record.',
    author: {
      '@type': 'Person',
      name: 'Franklin J Bryant IV',
      url: 'https://franklin.simplifyingbusinesses.com',
    },
    datePublished: '2026-10-17',
    dateModified: '2026-10-17',
    publisher: {
      '@type': 'Organization',
      name: 'Franklin J Bryant IV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://franklin.simplifyingbusinesses.com/logo.png',
      },
    },
    mainEntityOfPage:
      'https://franklin.simplifyingbusinesses.com/field-notes/pre-launch-security-checklist',
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Field Notes · Security · Updated October 17, 2026
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          The Pre-Launch Security Checklist<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Eleven checks every system passes before it touches a real user or a real record. This is the
          gate, not an aspiration — and it is public so clients can hold us to it.
        </p>
      </header>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          AI made building software fast. It did not make shipping it safe. The failure mode is
          consistent: an application works beautifully on the happy path, and the doors nobody
          demonstrated are standing open. Every item below exists because skipping it has cost
          somebody real money or real data.
        </p>

        <p>
          Run in order. Item four matters most, because fixing before mapping produces confident,
          incorrect work.
        </p>

        <ol className="space-y-5 pt-2">
          {checks.map(c => (
            <li key={c.n} className="flex gap-4 rounded-xl border border-border bg-white/5 p-5">
              <span className="font-mono text-sm text-accent pt-0.5 shrink-0">
                {String(c.n).padStart(2, '0')}
              </span>
              <span>
                <strong className="block text-white font-semibold mb-1">{c.title}</strong>
                <span className="text-sm text-gray-400 leading-relaxed">{c.body}</span>
              </span>
            </li>
          ))}
        </ol>

        <h2 className="font-display font-bold text-2xl text-white pt-10">
          How we use it
        </h2>

        <p>
          Nothing ships to a real user with a check unverified. Each item produces evidence — a
          request, a policy review, a test, a scan — and any item that cannot be evidenced is treated
          as a launch blocker rather than a note for later. &quot;We&apos;ll fix it after launch&quot;
          is how the incident gets scheduled.
        </p>

        <p>
          If you are buying an AI-built application from anyone, these eleven questions are a fair
          thing to ask. The answers should arrive as evidence, not adjectives.
        </p>

        <p className="pt-4 text-sm text-gray-500 italic">
          Living document. Revised as the tooling and the threat surface change; the date at the top
          moves with it.
        </p>
      </div>
    </article>
  );
}
