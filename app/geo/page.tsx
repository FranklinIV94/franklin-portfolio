import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Integrated Business Services | All Lines Business Solutions',
  description: 'Find AI-powered bookkeeping, payroll, tax preparation, and business automation services near you. All Lines Business Solutions delivers AI-Integrated Operations for small and medium businesses.',
  openGraph: {
    title: 'AI-Integrated Business Services Near You',
    description: 'Bookkeeping, payroll, tax preparation, and AI automation — powered by Prospyr AI.',
  },
};

const cities = [
  { name: 'Miami', state: 'FL', slug: 'miami' },
  { name: 'Tampa', state: 'FL', slug: 'tampa' },
  { name: 'Cape Coral', state: 'FL', slug: 'cape-coral' },
  { name: 'Punta Gorda', state: 'FL', slug: 'punta-gorda' },
  { name: 'West Palm Beach', state: 'FL', slug: 'west-palm-beach' },
  { name: 'Fort Lauderdale', state: 'FL', slug: 'fort-lauderdale' },
  { name: 'Atlanta', state: 'GA', slug: 'atlanta' },
  { name: 'Dallas', state: 'TX', slug: 'dallas' },
  { name: 'Manhattan', state: 'NY', slug: 'manhattan' },
  { name: 'Los Angeles', state: 'CA', slug: 'los-angeles' },
  { name: 'San Diego', state: 'CA', slug: 'san-diego' },
  { name: 'Las Vegas', state: 'NV', slug: 'las-vegas' },
];

const services = [
  { name: 'Bookkeeping', slug: 'bookkeeping', desc: 'Monthly bookkeeping, reconciliation, and financial reporting — handled by your AI business partner.' },
  { name: 'Payroll', slug: 'payroll', desc: 'Bi-weekly payroll processing, tax filings, and compliance — from 1 employee to 100+.' },
  { name: 'Tax Preparation', slug: 'tax-preparation', desc: '1040, 1120-S, 1065, 1041, and 1120 returns — individual, business, and trust.' },
  { name: 'AI-Integrated Operations', slug: 'ai-integrated-operations', desc: 'Full AI business partner: bookkeeping, payroll, tax, email, research, and client communications.' },
  { name: 'Business Formation', slug: 'business-formation', desc: 'LLC, S-Corp, C-Corp, and partnership formation — entity selection, EIN, and operating agreements.' },
  { name: 'Estate & Trust Planning', slug: 'estate-trust-planning', desc: 'Trust preparation, 1041 fiduciary returns, and estate coordination with reviewing attorneys.' },
  { name: 'Health Insurance', slug: 'health-insurance', desc: 'Employer benefits consultation, Medicare enrollment, and individual/group health insurance.' },
  { name: 'Website & Marketing', slug: 'website-marketing', desc: 'Website deployment, SEO optimization, landing pages, and lead generation — AI-powered.' },
];

export default function GeoIndexPage() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          AI-Integrated Operations · Nationwide & International
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          Business Services Near You
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl">
          All Lines Business Solutions delivers AI-Integrated Operations — bookkeeping, payroll, 
          tax preparation, and business automation — nationwide and internationally. 
          <strong className="text-white">Anywhere in the United States within 48 hours. Anywhere international with 7–10 day lead time.</strong>
        </p>
      </header>

      {/* How AIIO Works */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">How AI-Integrated Operations Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-white text-lg">Assessment</h3>
            <p className="mt-2 text-gray-400 text-sm">We analyze your operations, identify automation opportunities, and build a custom roadmap for your business.</p>
          </div>
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-bold text-white text-lg">Implementation</h3>
            <p className="mt-2 text-gray-400 text-sm">Your AI business partner — Prospyr — is configured for your business. Payroll, bookkeeping, tax, email, research — all set up and running.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold text-white text-lg">Growth</h3>
            <p className="mt-2 text-gray-400 text-sm">Each new client makes the system smarter, not heavier. You market aggressively because you&apos;re not afraid of getting clients.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(service => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-accent/40 transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-accent transition-colors">{service.name}</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">12 Cities. 7 States. Nationwide Reach. Global Capability.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map(city => (
            <a
              key={city.slug}
              href={`/geo/${city.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-accent/40 transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-accent transition-colors">{city.name}</h3>
              <p className="mt-1 text-gray-400 text-sm">{city.state}</p>
            </a>
          ))}
          <div className="rounded-xl border border-dashed border-accent/30 bg-accent/5 p-5 flex flex-col items-center justify-center text-center">
            <span className="text-2xl mb-2">🌍</span>
            <h3 className="font-bold text-accent">+ Anywhere</h3>
            <p className="mt-1 text-gray-400 text-xs">48 hrs nationwide · 7–10 days international</p>
          </div>
        </div>
      </section>

      {/* Why ALBS */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">Why All Lines Business Solutions</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">10 years of expertise.</strong> We&apos;ve been helping small and medium businesses 
            with bookkeeping, payroll, tax preparation, and business automation for a decade. Now we&apos;ve added AI-Integrated 
            Operations — so every client gets the benefit of both human expertise and 24/7 AI execution.
          </p>
          <p>
            <strong className="text-white">51 active clients across 5 industries.</strong> Healthcare practices, construction 
            firms, professional services, real estate, and hospitality. We handle bi-weekly payroll, monthly bookkeeping, 
            corporate and individual tax returns, estate planning coordination, and AI-powered business operations.
          </p>
          <p>
            <strong className="text-white">Cross-border, multi-state, multi-entity expertise.</strong> A foreign national living in Los Angeles 
            needed to form a C-Corp in Wyoming while managing an existing international business — all coordinated from our 
            Fort Lauderdale office. A physician in Port Charlotte needed three separate trust structures, each with different 
            beneficiaries and tax implications, coordinated with a reviewing attorney. These aren't simple returns. They're 
            complex, multi-entity operations — and we handle them with AI precision.
          </p>
          <p>
            <strong className="text-white">We service the whole world.</strong> On the ground in 12 cities across 7 states, with nationwide reach — anywhere in the United States within 48 hours notice. International? 7–10 day lead time gets us there. Your AI business partner doesn't sleep, doesn't miss deadlines, and doesn't care about time zones.
          </p>
          <p>
            <strong className="text-white">Your AI business partner handles the work. You direct the growth.</strong> Prospyr 
            runs payroll, reconciles books, prepares tax returns, manages client communications, and researches opportunities — 
            so you can focus on selling instead of dreading delivery.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-accent/10 border border-accent/20 p-8">
        <h3 className="font-display text-xl font-bold text-white">
          Ready for AI-Integrated Operations?
        </h3>
        <p className="mt-3 text-gray-300">
          Start with a free assessment. We&apos;ll analyze your operations and show you exactly where AI can save you time and money.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://simplifyingbusinesses.com/intake"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Start the Conversation →
          </a>
          <a
            href="https://franklin.simplifyingbusinesses.com/blog"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-white/40 hover:text-white"
          >
            Read Our Blog
          </a>
        </div>
      </section>
    </article>
  );
}