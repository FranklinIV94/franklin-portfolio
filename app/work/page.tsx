'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, type Category, type Domain, type Tier } from '@/lib/projects';
import { motion } from 'framer-motion';

const categories: (Category | 'All')[] = ['All', 'Production', 'Hackathon', 'Internal'];
const domains: Domain[] = ['AI Agents', 'Web3 & Payments', 'Business Ops', 'Healthcare', 'Insurance', 'Tax & Finance', 'Construction', 'E-Commerce', 'Governance', 'Security'];
const tiers: (Tier | 'All')[] = ['All', 'flagship', 'selected', 'archive'];
const sortOptions = ['newest', 'tier', 'domain'] as const;
type SortKey = (typeof sortOptions)[number];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [activeDomain, setActiveDomain] = useState<Domain | 'All'>('All');
  const [activeTier, setActiveTier] = useState<Tier | 'All'>('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('newest');
  const searchRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: "/" focuses search (command-palette feel)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = useMemo(() => {
    let list = projects;
    if (activeFilter !== 'All') list = list.filter((p) => p.category === activeFilter);
    if (activeDomain !== 'All') list = list.filter((p) => p.domains.includes(activeDomain));
    if (activeTier !== 'All') list = list.filter((p) => p.tier === activeTier);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) =>
        [p.title, p.tagline, p.description, ...p.tags, ...p.domains]
          .join(' ')
          .toLowerCase()
          .includes(q)
      );
    }
    // sort
    if (sort === 'tier') {
      const tierOrder = { flagship: 0, selected: 1, archive: 2 };
      list = [...list].sort((a, b) => (tierOrder[a.tier] - tierOrder[b.tier]) || (a.order - b.order));
    } else if (sort === 'domain') {
      list = [...list].sort((a, b) => (a.domains[0] || '').localeCompare(b.domains[0] || ''));
    } else {
      list = [...list].sort((a, b) => a.order - b.order);
    }
    return list;
  }, [activeFilter, activeDomain, activeTier, query, sort]);

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
            <span className="font-mono text-xs text-accent mb-3 block">Archive</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Work<span className="text-accent">.</span>
            </h1>
            <p className="text-muted mt-4 max-w-xl">
              Every project, filterable by status, domain, and tier. Autonomous AI systems, blockchain integrations, and business automation — built to run in production, not just on a screen.
            </p>
          </motion.div>

          {/* Search */}
          <div className="relative mb-6 md:max-w-md">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects… (press /)"
              className="w-full bg-surface border border-border rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          {/* Status filter */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
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

          {/* Domain filter */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <button
              onClick={() => setActiveDomain('All')}
              className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                activeDomain === 'All'
                  ? 'bg-accent text-canvas border-accent'
                  : 'border-border text-muted hover:border-accent/40 hover:text-white'
              }`}
            >
              All domains
            </button>
            {domains.map((d) => {
              const count = projects.filter((p) => p.domains.includes(d)).length;
              if (count === 0) return null;
              return (
                <button
                  key={d}
                  onClick={() => setActiveDomain(d)}
                  className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                    activeDomain === d
                      ? 'bg-accent text-canvas border-accent'
                      : 'border-border text-muted hover:border-accent/40 hover:text-white'
                  }`}
                >
                  {d}<span className="ml-1 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Tier filter + sort */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              {tiers.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTier(t)}
                  className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                    activeTier === t
                      ? 'bg-accent/15 text-accent border-accent/50'
                      : 'border-border text-muted hover:border-accent/30 hover:text-white'
                  }`}
                >
                  {t === 'All' ? 'All tiers' : t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-muted">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="bg-surface border border-border rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-accent/50"
              >
                {sortOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result count */}
          <div className="mb-6 font-mono text-xs text-muted">
            {filtered.length} project{filtered.length === 1 ? '' : 's'}
            {activeFilter !== 'All' && <> · {activeFilter}</>}
            {activeDomain !== 'All' && <> · {activeDomain}</>}
            {activeTier !== 'All' && <> · {activeTier}</>}
            {query.trim() && <> · matching "{query.trim()}"</>}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} featured={project.tier === 'flagship'} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted">
              No projects match. Try clearing the search or a filter.
            </div>
          )}
        </div>
      </main>
    </>
  );
}
