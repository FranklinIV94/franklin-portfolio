import { Metadata } from 'next';

const cities: Record<string, {
  name: string; state: string; slug: string;
  population: string; industries: string[];
  neighborhoods: string[]; description: string;
}> = {
  'miami': {
    name: 'Miami', state: 'FL', slug: 'miami',
    population: '2.7M metro',
    industries: ['Healthcare', 'Real Estate', 'Hospitality', 'Professional Services', 'Construction'],
    neighborhoods: ['Brickell', 'Wynwood', 'Coral Gables', 'Doral', 'Coconut Grove', 'Little Havana', 'Aventura', 'Kendall'],
    description: 'Miami\'s small business ecosystem runs on service businesses — medical practices, real estate agencies, construction firms, and professional services that need reliable bookkeeping, payroll, and tax preparation. Our AI business partner handles the operational load so Miami business owners can focus on growth in one of the country\'s most competitive markets.',
  },
  'tampa': {
    name: 'Tampa', state: 'FL', slug: 'tampa',
    population: '3.3M metro',
    industries: ['Healthcare', 'Finance', 'Construction', 'Professional Services', 'Technology'],
    neighborhoods: ['Downtown Tampa', 'SoHo', 'Ybor City', 'Westshore', 'Channelside', 'Hyde Park', 'Seminole Heights'],
    description: 'Tampa Bay is one of the fastest-growing metro areas in the country. Construction firms, medical practices, and professional service businesses are expanding fast — and they need payroll, bookkeeping, and tax preparation that scales with them. Our AI-Integrated Operations handle the operational weight so Tampa business owners can grow without the overhead.',
  },
  'cape-coral': {
    name: 'Cape Coral', state: 'FL', slug: 'cape-coral',
    population: '500K metro (Cape Coral–Fort Myers)',
    industries: ['Construction', 'Real Estate', 'Healthcare', 'Hospitality', 'Professional Services'],
    neighborhoods: ['SW Cape Coral', 'SE Cape Coral', 'Pelican Bay', 'Tarpon Point', 'Rose Garden District'],
    description: 'Cape Coral is one of the fastest-growing cities in Florida, with construction and real estate businesses driving the local economy. These businesses need reliable payroll, bookkeeping, and tax preparation that keeps up with rapid growth. Our AI business partner handles the operational load so Cape Coral business owners can focus on building.',
  },
  'punta-gorda': {
    name: 'Punta Gorda', state: 'FL', slug: 'punta-gorda',
    population: '85K (Charlotte County)',
    industries: ['Healthcare', 'Professional Services', 'Real Estate', 'Hospitality', 'Small Retail'],
    neighborhoods: ['Deep Creek', 'Burnt Store Meadows', 'Punta Gorda Isles', 'History Park', 'Shell Creek'],
    description: 'Punta Gorda and Charlotte County are home to small and medium businesses that serve a growing retiree and seasonal population. Medical practices, professional services, and real estate firms need reliable bookkeeping, payroll, and tax preparation. Our AI business partner handles operations so Punta Gorda business owners can focus on their clients.',
  },
  'west-palm-beach': {
    name: 'West Palm Beach', state: 'FL', slug: 'west-palm-beach',
    population: '1.5M metro (Palm Beach County)',
    industries: ['Healthcare', 'Real Estate', 'Professional Services', 'Finance', 'Hospitality'],
    neighborhoods: ['Downtown WPB', 'CityPlace', 'Northwood', 'El Cid', 'Flamingo Park', 'Palm Beach Island'],
    description: 'West Palm Beach and Palm Beach County are home to a diverse range of service businesses — from medical practices and real estate agencies to financial services and hospitality. Our AI-Integrated Operations handle payroll, bookkeeping, tax preparation, and client communications so West Palm business owners can focus on growth in one of Florida\'s most dynamic markets.',
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale', state: 'FL', slug: 'fort-lauderdale',
    population: '1.8M metro (Broward County)',
    industries: ['Marine', 'Real Estate', 'Healthcare', 'Professional Services', 'Technology'],
    neighborhoods: ['Las Olas', 'Victoria Park', 'Flagler Village', 'Wilton Manors', 'Coral Ridge', 'Harbor Beach'],
    description: 'Fort Lauderdale\'s business community spans marine services, real estate, healthcare, and professional services. These businesses need bookkeeping, payroll, and tax preparation that keeps pace with a growing metro. Our AI business partner handles the operational load so Fort Lauderdale business owners can focus on what they do best.',
  },
  'atlanta': {
    name: 'Atlanta', state: 'GA', slug: 'atlanta',
    population: '6.3M metro',
    industries: ['Healthcare', 'Technology', 'Professional Services', 'Construction', 'Logistics'],
    neighborhoods: ['Midtown', 'Buckhead', 'Decatur', 'Virginia-Highland', 'Inman Park', 'Westside', 'Ponce City'],
    description: 'Atlanta is the business capital of the Southeast. Healthcare systems, technology startups, construction firms, and professional service businesses all compete for talent and clients. Our AI-Integrated Operations handle payroll, bookkeeping, tax preparation, and client communications so Atlanta business owners can scale without adding overhead.',
  },
  'dallas': {
    name: 'Dallas', state: 'TX', slug: 'dallas',
    population: '7.6M metro (DFW)',
    industries: ['Energy', 'Healthcare', 'Professional Services', 'Construction', 'Technology'],
    neighborhoods: ['Uptown', 'Deep Ellum', 'Design District', 'Bishop Arts', 'Knox-Henderson', 'Lower Greenville'],
    description: 'Dallas-Fort Worth is one of the fastest-growing business hubs in the country. Energy companies, healthcare systems, construction firms, and professional services need reliable payroll, bookkeeping, and tax preparation that scales. Our AI business partner handles operations so Dallas business owners can focus on winning in a competitive market.',
  },
  'manhattan': {
    name: 'Manhattan', state: 'NY', slug: 'manhattan',
    population: '1.6M (borough), 8.3M (NYC)',
    industries: ['Finance', 'Professional Services', 'Real Estate', 'Healthcare', 'Technology'],
    neighborhoods: ['Midtown', 'Financial District', 'Chelsea', 'SoHo', 'Upper East Side', 'Upper West Side', 'Tribeca'],
    description: 'Manhattan businesses operate at a pace and scale that demands operational efficiency. Financial services, professional firms, real estate agencies, and healthcare practices need bookkeeping, payroll, and tax preparation that never misses a beat. Our AI-Integrated Operations handle the operational load so Manhattan business owners can focus on closing deals and serving clients.',
  },
  'los-angeles': {
    name: 'Los Angeles', state: 'CA', slug: 'los-angeles',
    population: '13M metro',
    industries: ['Entertainment', 'Healthcare', 'Real Estate', 'Professional Services', 'Hospitality'],
    neighborhoods: ['Santa Monica', 'Beverly Hills', 'West Hollywood', 'Downtown LA', 'Culver City', 'Silver Lake'],
    description: 'Los Angeles is the entertainment capital and one of the most diverse business markets in the country. Healthcare practices, real estate agencies, professional services, and hospitality businesses need reliable payroll, bookkeeping, and tax preparation. Our AI business partner handles the operational load so LA business owners can focus on creative and client work.',
  },
  'san-diego': {
    name: 'San Diego', state: 'CA', slug: 'san-diego',
    population: '3.3M metro',
    industries: ['Healthcare', 'Defense', 'Biotech', 'Professional Services', 'Hospitality'],
    neighborhoods: ['Gaslamp Quarter', 'La Jolla', 'North Park', 'Hillcrest', 'Pacific Beach', 'Mission Valley'],
    description: 'San Diego\'s business community spans healthcare, biotech, defense, and professional services. These businesses need bookkeeping, payroll, and tax preparation that keeps up with a growing regional economy. Our AI-Integrated Operations handle the operational load so San Diego business owners can focus on innovation and growth.',
  },
  'las-vegas': {
    name: 'Las Vegas', state: 'NV', slug: 'las-vegas',
    population: '2.3M metro',
    industries: ['Hospitality', 'Construction', 'Real Estate', 'Professional Services', 'Healthcare'],
    neighborhoods: ['Summerlin', 'Henderson', 'Spring Valley', 'Enterprise', 'Paradise', 'Centennial Hills'],
    description: 'Las Vegas runs on hospitality, construction, and real estate — industries with complex payroll, seasonal cash flow, and high compliance demands. Our AI-Integrated Operations handle payroll, bookkeeping, tax preparation, and client communications so Las Vegas business owners can focus on growth in one of the country\'s most dynamic markets.',
  },
};

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