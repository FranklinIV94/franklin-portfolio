import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://franklin.simplifyingbusinesses.com'),
  title: 'Franklin J Bryant IV — AI Business Solutions Architect',
  description: 'I build autonomous AI systems that operate, transact, and scale. Founder of All Lines Business Solutions.',
  keywords: ['Franklin J Bryant IV', 'Franklin Bryant', 'Franklin Jordan Bryant', 'AI business solutions', 'agentic engineering', 'autonomous systems', 'ALBS', 'Prospyr 305', 'AI automation', 'business automation'],
  // Self-referencing canonical for EVERY route. './' resolves against metadataBase + the
  // current path, so each page declares itself canonical. Individual pages that set
  // `alternates.canonical` explicitly (e.g. blog posts, /ai-governance) override this.
  // Replaced a hardcoded <link rel="canonical"> that pointed every page at the site root
  // and de-duplicated all blog posts out of the index (fixed 2026-09-26).
  alternates: { canonical: './' },
  openGraph: {
    title: 'Franklin J Bryant IV — AI Business Solutions Architect',
    description: 'I build autonomous AI systems that operate, transact, and scale.',
    type: 'website',
    siteName: 'Franklin J Bryant IV',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theycallmeking_',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Franklin J Bryant IV',
    alternateName: 'Franklin Jordan Bryant IV',
    additionalName: ['Franklin Bryant', 'Franklin Bryant IV', 'Franklin Jordan Bryant', 'Franklin Bryant AI'],
    url: 'https://franklin.simplifyingbusinesses.com',
    jobTitle: 'AI Business Solutions Architect',
    description: 'I build autonomous AI systems that operate, transact, and scale. Founder of All Lines Business Solutions.',
    knowsAbout: [
      'AI implementation',
      'business automation',
      'agentic engineering',
      'AI security audits',
      'tax preparation',
      'business operations',
      'data security',
      'AI-accelerated development',
      'insurance',
    ],
    sameAs: [
      'https://github.com/FranklinIV94',
      'https://www.linkedin.com/in/franklin-bryant-36115363/',
      'https://x.com/theycallmeking_',
      'https://www.crunchbase.com/person/franklin-bryant-fb1a',
      'https://www.crunchbase.com/organization/all-lines-business-solutions',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Florida Atlantic University',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'All Lines Business Solutions',
        alternateName: 'ALBS',
        url: 'https://simplifyingbusinesses.com',
      },
      {
        '@type': 'Organization',
        name: 'Prospyr 305',
        alternateName: 'P305',
        url: 'https://prospyr305.com',
      },
    ],
    founder: [
      {
        '@type': 'Organization',
        name: 'All Lines Business Solutions',
        alternateName: 'ALBS',
        url: 'https://simplifyingbusinesses.com',
      },
      {
        '@type': 'Organization',
        name: 'Prospyr 305',
        alternateName: 'P305',
        url: 'https://prospyr305.com',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          NOTE (2026-09-26): a hardcoded <link rel="canonical" href="<site root>"> used to live
          here. It emitted a homepage canonical on EVERY page, so every blog post declared the
          homepage as its canonical and de-duplicated itself out of the index. Per-page canonicals
          are now declared in each page's `metadata.alternates.canonical` (Next.js Metadata API).
          The homepage declares its own canonical via app/page.tsx. Do NOT re-add a global
          canonical here — it silently overrides every child route.
        */}
        <script async src="https://news.google.com/swg/js/v1/publisher.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="bg-canvas text-white antialiased font-body">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        {children}
        <div google-add-preferred-source-btn data-theme="dark" />
        <Footer />
      </body>
    </html>
  );
}
