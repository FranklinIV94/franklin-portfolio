'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/geo', label: 'Services Near You' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const firmLinks = [
  { href: 'https://prospyr305.com', label: 'Prospyr 305' },
  { href: 'https://prospyr305.com/capabilities', label: 'Capabilities' },
  { href: 'https://prospyr305.com/possibilities', label: 'Possibilities' },
  { href: 'https://prospyr305.com/security-audit/', label: 'SENTINEL Audit' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="font-display font-medium text-xl tracking-[-0.01em]">
          Franklin <em className="italic text-accent">Bryant</em>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted hover:text-white transition-colors duration-200 font-body"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://prospyr305.com"
            className="text-sm text-accent hover:text-white transition-colors duration-200 font-body flex items-center gap-1.5"
          >
            Prospyr 305
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <a
            href="https://dist-intake-src.vercel.app/"
            className="text-sm bg-accent text-canvas font-semibold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Book 15 minutes
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-surface border-b border-border`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-border">
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2 block">Prospyr 305 — Agentic Engineering</span>
            <div className="flex flex-col gap-3">
              {firmLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  {label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ))}
            </div>
          </div>
          <a
            href="https://dist-intake-src.vercel.app/"
            className="text-sm bg-accent text-canvas font-semibold px-4 py-2 rounded-lg text-center mt-2"
          >
            Book 15 minutes
          </a>
        </div>
      </div>
    </nav>
  );
}
