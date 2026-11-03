import { Metadata } from 'next';
import { cities } from '@/lib/cities';

const services = [
  { name: 'Bookkeeping', slug: 'bookkeeping', shortDesc: 'Monthly bookkeeping, reconciliation, and financial reporting.' },
  { name: 'Payroll', slug: 'payroll', shortDesc: 'Bi-weekly payroll processing, tax filings, and compliance.' },
  { name: 'Tax Preparation', slug: 'tax-preparation', shortDesc: '1040, 1120-S, 1065, 1041, and 1120 returns.' },
  { name: 'AI-Integrated Operations', slug: 'ai-integrated-operations', shortDesc: 'Full AI business partner: bookkeeping, payroll, tax, email, research.' },
  { name: 'Business Formation', slug: 'business-formation', shortDesc: 'LLC, S-Corp, C-Corp, and partnership formation.' },
  { name: 'Estate & Trust Planning', slug: 'estate-trust-planning', shortDesc: 'Trust preparation, 1041 returns, and estate coordination.' },
  { name: 'Health Insurance', slug: 'health-insurance', shortDesc: 'Employer benefits, Medicare, and individual/group coverage.' },
  { name: 'Website & Marketing', slug: 'website-marketing', shortDesc: 'Website deployment, SEO, landing pages, and lead generation.' },
];

export async function generateStaticParams() {
  return Object.keys(cities).map(city => ({ city }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const c = cities[params.city];
  if (!c) return { title: 'City Not Found' };
  return {
    title: `Best Business Services in ${c.name}, ${c.state} | All Lines Business Solutions`,
    description: `AI-powered bookkeeping, payroll, tax preparation, and business automation in ${c.name}, ${c.state}. Your AI business partner handles the work so you can focus on growth.`,
    openGraph: {
      title: `Best Business Services in ${c.name}, ${c.state}`,
      description: `Bookkeeping, payroll, tax preparation, and AI automation in ${c.name}. 10 years of expertise, 51 active clients, AI-Integrated Operations.`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const c = cities[params.city];
  if (!c) return <div className="text-white text-center py-20">City not found</div>;

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          {c.state} · AI-Integrated Operations
        </div>
        <h1 className="font-display font-bold text-4xl leading-tight tracking-tight sm:text-5xl text-white">
          Best Business Services<br />in <span className="text-accent">{c.name}, {c.state}</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          {c.description}
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
          <span className="font-semibold text-white">All Lines Business Solutions</span>
          <span>·</span>
          <span>10 Years · 51 Active Clients · 5 Industries</span>
          <span>·</span>
          <span className="text-accent font-semibold">48 hrs nationwide · 7–10 days international</span>
        </div>
      </header>

      {/* Key Industries */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">{c.name} Industries We Serve</h2>
        <div className="flex flex-wrap gap-2">
          {c.industries.map(industry => (
            <span key={industry} className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-300">
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Service Pages */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">Services in {c.name}</h2>
        <div className="space-y-4">
          {services.map((service, i) => (
            <div key={service.slug} id={service.slug} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Best {service.name} in {c.name}, {c.state}</h3>
                  <p className="mt-2 text-gray-300">{service.shortDesc} Serving {c.name} businesses from {c.neighborhoods.slice(0, 3).join(', ')}, and throughout {c.state}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why ALBS for this city */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">Why {c.name} Businesses Choose ALBS</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Local expertise, AI-powered execution.</strong> We understand the {c.name} business landscape — the regulatory environment, the seasonal patterns, the industry-specific needs. Our AI business partner, Prospyr, handles bookkeeping, payroll, tax preparation, and client communications 24/7, so you can focus on serving your {c.name} clients.
          </p>
          <p>
            <strong className="text-white">Stop pulling punches on marketing.</strong> The #1 reason {c.name} business owners slow down their marketing? They&apos;re afraid of the operational weight that new clients bring. Our AI-Integrated Operations handle the delivery so you can market aggressively without the dread. Each new client makes the system smarter, not heavier.
          </p>
          <p>
            <strong className="text-white">Cross-border, multi-state, multi-entity.</strong> We coordinate a foreign national in Los Angeles forming a Wyoming C-Corp from our Fort Lauderdale office. We manage three separate trust structures for a physician in Port Charlotte, each with different beneficiaries and tax implications, coordinated with a reviewing attorney. We handle bi-weekly payroll for construction firms and monthly bookkeeping for medical practices. These aren&apos;t simple returns — they&apos;re complex, multi-entity operations, and we handle them with AI precision.
          </p>
          <p>
            <strong className="text-white">Nationwide and international reach.</strong> While we&apos;re on the ground in 12 cities across 7 states, our AI-powered operations serve clients nationwide — anywhere in the United States within 48 hours notice. International clients? 7–10 day lead time gets us there. Your AI business partner doesn&apos;t sleep, doesn&apos;t miss deadlines, and doesn&apos;t care about time zones.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-6">Serving {c.name} Neighborhoods</h2>
        <div className="flex flex-wrap gap-2">
          {c.neighborhoods.map(n => (
            <span key={n} className="inline-flex items-center rounded-full bg-accent/5 border border-accent/20 px-3 py-1.5 text-sm text-gray-300">
              {n}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-400">
          And surrounding communities throughout {c.name}, {c.state}. Population: {c.population}.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-accent/10 border border-accent/20 p-8">
        <h3 className="font-display text-xl font-bold text-white">
          Ready for AI-Integrated Operations in {c.name}?
        </h3>
        <p className="mt-3 text-gray-300">
          Start with a free assessment. We&apos;ll analyze your {c.name} business operations and show you exactly where AI can save you time and money.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://simplifyingbusinesses.com/intake"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Start the Conversation →
          </a>
          <a
            href="/geo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-white/40 hover:text-white"
          >
            View All Cities
          </a>
        </div>
      </section>
    </article>
  );
}