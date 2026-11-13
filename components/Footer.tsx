'use client';

import Link from 'next/link';

/**
 * Site footer — rewritten 2026-11-09.
 *
 * Franklin: "the portfolio ... is the one with no contact path at all." The old footer listed
 * socials and firm links and never once offered a way to reach him.
 *
 * Shape: the close (one sentence, one action), the index (writing / firm / elsewhere), then the
 * signature. The name is set at 110px — a signature, not a billboard (Franklin, 2026-11-09:
 * "my name is way too big").
 *
 * This file is rendered by app/layout.tsx on EVERY page. app/page.tsx used to render a second,
 * different footer inline, so the homepage shipped two <footer> elements. That inline copy is
 * gone; this is the only footer.
 */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        {/* The close */}
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-5">
          Work with me
        </p>
        <h2 className="font-display text-4xl sm:text-[3.4rem] leading-[1.05] tracking-[-0.02em] text-cream mb-4">
          Let&rsquo;s find <em className="italic text-accent">your</em> bottleneck.
        </h2>
        <p className="text-muted text-base sm:text-[16.5px] leading-relaxed max-w-xl mb-9">
          Fifteen minutes on the process that&rsquo;s actually costing you. I&rsquo;ll tell you what
          I&rsquo;d build first, and what I&rsquo;d leave alone.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-20">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-ink text-[14.5px] font-semibold px-6 py-3.5 hover:brightness-95 transition"
          >
            Book a 15-minute call <span aria-hidden="true">&rarr;</span>
          </Link>
          <p className="text-muted text-[14.5px]">
            or email{' '}
            <a
              href="mailto:franklin@prospyr305.com"
              className="text-cream border-b border-border-strong hover:border-cream pb-px"
            >
              franklin@prospyr305.com
            </a>
          </p>
        </div>

        {/* The index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-border pt-9">
          <div className="max-w-[270px]">
            <p className="text-cream text-[13.5px] font-semibold mb-1.5">Franklin J Bryant IV</p>
            <p className="text-muted text-[13px] leading-relaxed">
              Agentic systems architect. I build the thing, then I show you how it works.
            </p>
          </div>

          <div>
            <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-muted mb-3.5">
              Writing
            </span>
            <Link href="/blog" className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/field-notes" className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors">
              Field notes
            </Link>
            <Link href="/work" className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors">
              Work
            </Link>
            <a href="/rss.xml" className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors">
              RSS
            </a>
          </div>

          <div>
            <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-muted mb-3.5">
              Firm
            </span>
            <a
              href="https://prospyr305.com"
              className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors"
            >
              Prospyr 305
            </a>
            <a
              href="https://prospyr305.com/sentinel"
              className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors"
            >
              SENTINEL audit
            </a>
            <a
              href="https://prospyr305.com/possibilities"
              className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors"
            >
              What we can build
            </a>
          </div>

          <div>
            <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-muted mb-3.5">
              Elsewhere
            </span>
            <a
              href="https://github.com/FranklinIV94"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/franklin-bryant-36115363/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/theycallmeking_"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13.5px] text-[#d4d4d8] py-1 hover:text-accent transition-colors"
            >
              X
            </a>
          </div>
        </div>

        {/* The signature — 110px, click returns to top */}
        <a
          href="#top"
          aria-label="Back to top"
          className="block mt-16 font-display font-black text-cream leading-[0.84] tracking-[-0.045em] whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(52px, 7.6vw, 110px)' }}
        >
          FRANKLIN<span className="text-accent" style={{ fontSize: '0.5em' }}>.</span>
        </a>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-7 pt-4 border-t border-border">
          <p className="font-mono text-[10px] tracking-[0.06em] text-muted">
            © {new Date().getFullYear()} Franklin J Bryant IV &nbsp;·&nbsp; Architected and built
            with AI as the pair
          </p>
          <div className="flex items-center gap-5 font-mono text-[10px] tracking-[0.06em] text-muted">
            {/* The portfolio had no /privacy or /terms routes — these point at the
                firm's live policies instead of shipping two 404s site-wide. */}
            <a
              href="https://prospyr305.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://prospyr305.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
