import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://franklin.simplifyingbusinesses.com'),
  title: 'Franklin J Bryant IV — AI Business Solutions Architect',
  description: 'I build autonomous AI systems that operate, transact, and scale. Founder of All Lines Business Solutions.',
  keywords: ['Franklin J Bryant IV', 'Franklin Bryant', 'Franklin Jordan Bryant', 'AI business solutions', 'agentic engineering', 'autonomous systems', 'ALBS', 'Prospyr 305', 'AI automation', 'business automation'],
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
    worksFor: {
      '@type': 'Organization',
      name: 'All Lines Business Solutions',
      alternateName: 'ALBS',
      url: 'https://simplifyingbusinesses.com',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="bg-canvas text-white antialiased font-body">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
