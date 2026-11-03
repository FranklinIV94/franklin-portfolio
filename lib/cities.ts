// Single source of truth for the geo city set.
//
// This used to live inside app/geo/[city]/page.tsx AND be hardcoded again in
// app/sitemap.ts, which is how a page can exist without ever being in the sitemap.
// Page and sitemap both import from here now.

export const cities: Record<string, {
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
  'jacksonville': {
    name: 'Jacksonville', state: 'FL', slug: 'jacksonville',
    population: '1.7M metro',
    industries: ['Logistics & Port', 'Insurance', 'Healthcare', 'Construction', 'Professional Services'],
    neighborhoods: ['Riverside', 'San Marco', 'Mandarin', 'Jacksonville Beach', 'Ponte Vedra', 'Orange Park', 'Fernandina Beach', 'St. Augustine'],
    description: 'Jacksonville is the largest city by land area in the continental United States, and its business base reflects the port: logistics, distribution, insurance and the trades that serve them, spread from the Beaches out to Orange Park. We work that whole corridor, and Savannah is two hours up I-95 — close enough that a Jacksonville client with Georgia operations runs one back office, not two. Our AI-Integrated Operations carry the invoicing, payroll, bookkeeping and reporting load so a Jacksonville owner manages the work instead of the paperwork.',
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
  'fort-myers': {
    name: 'Fort Myers', state: 'FL', slug: 'fort-myers',
    population: '500K metro (Cape Coral–Fort Myers)',
    industries: ['Healthcare', 'Construction', 'Real Estate', 'Professional Services', 'Hospitality'],
    neighborhoods: ['McGregor Boulevard', 'Downtown Fort Myers', 'Whiskey Creek', 'San Carlos Park', 'Estero', 'South Fort Myers'],
    description: 'Fort Myers is the economic engine of Southwest Florida, with healthcare systems, construction firms, real estate agencies, and hospitality businesses driving growth. Our AI-Integrated Operations handle payroll, bookkeeping, tax preparation, and client communications so Fort Myers business owners can focus on growth in one of Florida\'s fastest-growing markets.',
  },
  'las-vegas': {
    name: 'Las Vegas', state: 'NV', slug: 'las-vegas',
    population: '2.3M metro',
    industries: ['Hospitality', 'Construction', 'Real Estate', 'Professional Services', 'Healthcare'],
    neighborhoods: ['Summerlin', 'Henderson', 'Spring Valley', 'Enterprise', 'Paradise', 'Centennial Hills'],
    description: 'Las Vegas runs on hospitality, construction, and real estate — industries with complex payroll, seasonal cash flow, and high compliance demands. Our AI-Integrated Operations handle payroll, bookkeeping, tax preparation, and client communications so Las Vegas business owners can focus on growth in one of the country\'s most dynamic markets.',
  },
  'sarasota': {
    name: 'Sarasota', state: 'FL', slug: 'sarasota',
    population: '850K metro',
    industries: ['Healthcare', 'Real Estate', 'Professional Services', 'Construction', 'Hospitality'],
    neighborhoods: ['Downtown Sarasota', 'Siesta Key', 'Lakewood Ranch', 'Longboat Key', 'Gulf Gate', 'Venice', 'Bradenton'],
    description: 'Sarasota runs on professional practices, managed property and a client base that does not tolerate a missed call or an unanswered email. The firms here are smaller than their reputations, which means the owner is usually the back office as well as the front. Our AI-Integrated Operations take the recurring load - bookkeeping, payroll, client follow-up and reporting - so a Sarasota practice can carry more clients without adding a layer of admin.',
  },
  'chicago': {
    name: 'Chicago', state: 'IL', slug: 'chicago',
    population: '9.5M metro',
    industries: ['Professional Services', 'Finance', 'Manufacturing', 'Construction', 'Technology'],
    neighborhoods: ['The Loop', 'River North', 'West Loop', 'Lincoln Park', 'Wicker Park', 'Hyde Park', 'Evanston', 'Naperville'],
    description: 'Chicago compresses a working year into two seasons, and the mid-market firms that dominate Cook County feel it in cash flow first: a slow winter, then a spring where the backlog lands at once. Add the freight and intermodal volume moving through the region and the pattern repeats - a queue that lives in somebody\'s head. We build the queue as a system, so a short season becomes a scheduling problem rather than an argument, and the books close on time either way.',
  },

};

export const CITY_SLUGS = Object.keys(cities);

export const CITY_COUNT = CITY_SLUGS.length;

export const STATE_COUNT = new Set(Object.values(cities).map((c) => c.state)).size;

export type CityEntry = (typeof cities)[string];
