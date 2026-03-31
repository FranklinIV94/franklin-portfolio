'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Repo {
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  primaryLanguage: string | null;
  pushedAt: string;
  stargazerCount: number;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  React: '#61dafb',
  'Next.js': '#ffffff',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function GithubShowcase() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-accent mb-3 block">Open Source</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              GitHub<span className="text-accent">.</span>
            </h2>
          </div>
          <a
            href={`https://github.com/${'FranklinIV94'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group"
          >
            @FranklinIV94
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Auto-pulled from GitHub */}
        <div className="mb-6">
          <span className="font-mono text-xs text-muted bg-surface border border-border px-3 py-1.5 rounded-full">
            ↻ Auto-synced from GitHub — updated every 5 minutes
          </span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-5 animate-pulse">
                <div className="h-4 bg-border rounded w-3/4 mb-3" />
                <div className="h-3 bg-border rounded w-full mb-4" />
                <div className="h-3 bg-border rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Repo grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col bg-surface border border-border rounded-xl p-5 hover:border-accent/30 hover:bg-surface/80 transition-all duration-200"
              >
                {/* Repo name + language */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="font-mono text-sm font-semibold text-white group-hover:text-accent transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>
                  {repo.primaryLanguage && (
                    <span
                      className="shrink-0 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: LANG_COLORS[repo.primaryLanguage] || '#6b6b7a' }}
                      title={repo.primaryLanguage}
                    />
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed flex-1 mb-4 line-clamp-2">
                  {repo.description || 'No description provided.'}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="font-mono">{formatDate(repo.pushedAt)}</span>
                  {repo.stargazerCount > 0 && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {repo.stargazerCount}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Mobile view all */}
        <a
          href={`https://github.com/${'FranklinIV94'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center justify-center gap-2 text-sm text-muted hover:text-accent transition-colors mt-8 py-4 border border-border rounded-xl"
        >
          View all on GitHub →
        </a>
      </div>
    </section>
  );
}
