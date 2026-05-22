'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, type Category } from '@/lib/projects';
import { motion } from 'framer-motion';

const categories: (Category | 'All')[] = ['All', 'Production', 'Hackathon', 'Internal'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured).sort((a, b) => a.order - b.order);
  const secondary = filtered.filter((p) => !p.featured).sort((a, b) => a.order - b.order);

  return (
    <>
      
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-accent mb-3 block">All Projects</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Work<span className="text-accent">.</span>
            </h1>
            <p className="text-muted mt-4 max-w-xl">
              Autonomous AI systems, blockchain integrations, and business automation — built to run in production, not just on a screen.
            </p>
          </motion.div>

          {/* Filter tabs + count */}
          <div className="flex items-center gap-3 mb-10">
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

          {/* Featured projects — compact two-column grid */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
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
              No projects in this category yet.
            </div>
          )}
        </div>
      </main>
    </>
  );
}