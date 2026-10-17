import { blogPosts } from '@/lib/blog';

const BASE_URL = 'https://franklin.simplifyingbusinesses.com';

// Static feed — regenerated at build from the single source of truth in lib/blog.ts,
// same as sitemap.ts. Registering a post there is all it takes to appear here.
export const dynamic = 'force-static';

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const items = blogPosts
    .slice()
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
    .map(post => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      const pubDate = new Date(`${post.dateISO}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${esc(post.tag)}</category>
      <description>${esc(post.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Franklin J Bryant IV — Writing</title>
    <link>${BASE_URL}/blog</link>
    <description>Essays on AI systems, agent governance, and the operating discipline behind them.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} Franklin J Bryant IV. All rights reserved.</copyright>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
