'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({ project, index, featured = false, className = '' }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${className}`}
    >
      <Link href={`/work/${project.slug}`} className="block h-full">
        <div
          onPointerMove={(e) => {
            const el = e.currentTarget;
            const r = el.getBoundingClientRect();
            el.style.setProperty('--mx', `${e.clientX - r.left}px`);
            el.style.setProperty('--my', `${e.clientY - r.top}px`);
          }}
          className={`project-card h-full flex flex-col border border-border rounded-[20px] overflow-hidden ${
            featured ? 'p-7 md:p-9' : 'p-6'
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3
                  className={`font-display font-medium tracking-[-0.01em] text-white group-hover:text-accent transition-colors duration-300 ${
                    featured ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}
                >
                  {project.title}
                </h3>
                {project.tier === 'flagship' && (
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent border border-accent/30 px-3 py-1 rounded-full bg-canvas/50 backdrop-blur">
                    Flagship
                  </span>
                )}
              </div>
              <p className={`text-muted leading-relaxed ${featured ? 'text-base max-w-2xl' : 'text-sm'}`}>
                {project.tagline}
              </p>
            </div>

            {/* Arrow */}
            <div className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent group-hover:text-accent-ink group-hover:border-accent group-hover:rotate-45">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className={`text-slate-400 leading-relaxed mb-6 ${featured ? 'text-base' : 'text-sm'}`}>
            {project.description}
          </p>

          <div className="mt-auto">
            {/* Tags — max 4 visible */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10.5px] text-muted border border-border px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="font-mono text-[10px] text-muted">+{project.tags.length - 4}</span>
              )}
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-[10px] text-muted flex-wrap">
              <span>{project.timeline}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{project.role}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-accent/70">{project.category}</span>
            </div>

            {/* Bottom links */}
            {(project.liveUrl || project.repoUrl) && (
              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                {project.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </span>
                )}
                {project.repoUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
