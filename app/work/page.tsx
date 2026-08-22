'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, type Category } from '@/lib/projects';
import { motion } from 'framer-motion';

const categories: (Category | 'All')[] = ['All', 'Production', 'Hackathon', 'Internal'];

// Derive a stable, deduped tag list from the project data (no content removed — just a way to narrow).
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort((a, b) =>
  a.localeCompare(b)
);

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) =>
        [p.title, p.tagline, p.description, ...p.tags]
          .join(' ')
          .toLowerCase()
          .includes(q)
      );
    }
    if (activeTags.length) {
      list = list.filter((p) => activeTags.every((t) => p.tags.includes(t)));
    }
    return list;
  }, [activeFilter, query, activeTags]);

  const featured = filtered.filter((p) => p.featured).sort((a, b) => a.order - b.order);
  const secondary = filtered.filter((p) => !p.featured).sort((a, b) => a.order - b.order);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <>
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="font-mono text-xs text-accent mb-3 block">All Projects</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Work<span className="text-accent">.</span>
            </h1>
            <p className="text-muted mt-4 max-w-xl">
              Autonomous AI systems, blockchain integrations, and business automation — built to run in production, not just on a screen.
            </p>
          </motion.div>

          {/* Category filters + search */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((filter) => {
                const count = filter === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === filter).length;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                      activeFilter === filter
                        ? 'bg-accent text-canvas border-accent'
                        : 'border-border text-muted hover:border-accent/40 hover:text-white'
                    }`}
                  >
                    {filter}<span className="ml-1.5 opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>
            <div className="relative md:ml-auto md:w-64">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full bg-surface border border-border rounded-lg pl-9 pr-3 py-1.5 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </div>

          {/* Tag filter chips */}
          <div className="flex flex-wrap gap-1.5 mb-6 max-h-16 overflow-y-auto pr-1">
            {allTags.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`font-mono text-[10px] px-2 py-1 rounded-md border transition-all duration-150 ${
                    active
                      ? 'bg-accent/15 text-accent border-accent/50'
                      : 'border-border text-muted hover:border-accent/30 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <div className="mb-6 font-mono text-xs text-muted">
            {filtered.length} project{filtered.length === 1 ? '' : 's'}
            {activeTags.length > 0 && <> · filtered by {activeTags.join(', ')}</>}
            {query.trim() && <> · matching "{query.trim()}"</>}
          </div>

          {/* Featured projects — denser three-column grid */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {featured.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} featured />
              ))}
            </div>
          )}

          {/* Secondary projects — tighter three-column grid */}
          {secondary.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {secondary.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted">
              No projects match. Try clearing the search or a tag filter.
            </div>
          )}
        </div>
      </main>
    </>
  );
}
