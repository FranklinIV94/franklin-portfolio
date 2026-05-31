import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://franklin.simplifyingbusinesses.com';
  
  const cities = [
    'miami', 'tampa', 'cape-coral', 'punta-gorda', 'west-palm-beach',
    'fort-lauderdale', 'atlanta', 'dallas', 'manhattan', 'los-angeles',
    'san-diego', 'las-vegas'
  ];

  const blogPosts = [
    'research-intelligence-pipeline',
    'pulled-punch',
    'crypto-compliance-after-nexfundai',
    'agentic-engineer',
    'context-beats-compute',
    'system-of-action',
  ];

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/geo`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const cityPages = cities.map(city => ({
    url: `${baseUrl}/geo/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}