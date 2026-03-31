'use client';

import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { motion } from 'framer-motion';

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-accent mb-3 block">All Projects</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Work<span className="text-accent">.</span>
            </h1>
            <p className="text-muted mt-4 max-w-xl">
              Autonomous AI systems, blockchain integrations, and business automation — built to run in production, not just on a screen.
            </p>
          </motion.div>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['All', 'AI Agents', 'Blockchain', 'Web', 'Hackathon'].map((filter) => (
              <button
                key={filter}
                className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  filter === 'All'
                    ? 'bg-accent text-canvas border-accent'
                    : 'border-border text-muted hover:border-accent/40 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} featured={project.featured} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
