import { MetadataRoute } from 'next';

const BASE_URL = 'https://franklin.simplifyingbusinesses.com';

const cities = [
  'miami', 'tampa', 'cape-coral', 'punta-gorda', 'west-palm-beach',
  'fort-lauderdale', 'atlanta', 'dallas', 'manhattan', 'los-angeles',
  'san-diego', 'las-vegas', 'fort-myers',
];

const blogPosts = [
  'research-intelligence-pipeline',
  'pulled-punch',
  'crypto-compliance-after-nexfundai',
  'agentic-engineer',
  'context-beats-compute',
  'system-of-action',
  'build-the-system',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/geo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE_URL}/geo/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}