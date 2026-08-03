import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Franklin J Bryant IV',
  description: 'On AI, business, and building systems that run themselves. Agentic engineering, compliance, research pipelines, and the future of autonomous business operations.',
  keywords: ['Franklin J Bryant IV', 'Franklin Bryant', 'AI business', 'agentic engineering', 'autonomous systems', 'ALBS', 'Prospyr 305'],
  openGraph: {
    title: 'Blog — Franklin J Bryant IV',
    description: 'On AI, business, and building systems that run themselves.',
  },
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <span className="font-mono text-xs text-accent mb-3 block">Blog</span>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Thoughts<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          On AI, business, and building systems that run themselves.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {blogPosts.map((post) => (
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
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-200">
              Read article
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}