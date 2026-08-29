import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Writing — Franklin J Bryant IV',
  description: 'Essays on AI, business, and building systems that run themselves.',
};

export default function WritingPage() {
  // Pin the strongest piece (The Accountability Moat), then the rest newest-first
  const pinned = blogPosts.find((p) => p.slug === 'the-accountability-moat');
  const rest = blogPosts
    .filter((p) => p.slug !== 'the-accountability-moat')
    .sort((a, b) => (a.dateISO > b.dateISO ? -1 : 1));

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <span className="font-mono text-xs text-accent mb-3 block">Writing</span>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Essays<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          On AI, business, and building systems that run themselves.
        </p>
      </div>

      {/* Pinned piece */}
      {pinned && (
        <Link
          href={`/blog/${pinned.slug}`}
          className="group block bg-surface border border-accent/30 rounded-2xl p-8 mb-12 hover:border-accent/60 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
              ★ Pinned
            </span>
            <span className="font-mono text-xs text-accent">{pinned.tag}</span>
            <span className="text-xs text-gray-400">{pinned.date}</span>
          </div>
          <h2 className="font-display font-bold text-2xl mb-3 group-hover:text-accent transition-colors">
            {pinned.title}
          </h2>
          <p className="text-gray-300 leading-relaxed">{pinned.excerpt}</p>
        </Link>
      )}

      {/* Rest */}
      <div className="flex flex-col gap-8">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-surface border border-border rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                {post.tag}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
            <h2 className="font-display font-bold text-xl mb-2 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
