/**
 * GET /api/github
 *
 * Fetches Franklin's public GitHub repositories, sorted by most recently updated.
 * Cached for 5 minutes to avoid rate limits.
 */

export const revalidate = 300; // 5 minutes

const GITHUB_USER = 'FranklinIV94';

interface GithubRepo {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string;
  primaryLanguage: { name: string } | null;
  pushedAt: string;
  stargazerCount: number;
  updatedAt: string;
}

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=9&type=public`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'franklin-portfolio',
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch repos' }), {
        status: res.status,
      });
    }

    const repos: GithubRepo[] = await res.json();

    // Filter out forks, sort by pushedAt, take top 9
    const filtered = repos
      .filter((r) => !r.name.startsWith('.'))
      .sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime())
      .slice(0, 9)
      .map(({ name, description, url, homepageUrl, primaryLanguage, pushedAt, stargazerCount }) => ({
        name,
        description: description || '',
        url: `https://github.com/${GITHUB_USER}/${name}`,
        homepageUrl,
        primaryLanguage: primaryLanguage?.name || null,
        pushedAt,
        stargazerCount,
      }));

    return new Response(JSON.stringify(filtered), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
    });
  }
}
