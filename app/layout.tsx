import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://franklin.simplifyingbusinesses.com'),
  title: 'Franklin J Bryant IV — AI Business Solutions Architect',
  description: 'I build autonomous AI systems that operate, transact, and scale. Founder of All Lines Business Solutions.',
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
    url: 'https://franklin.simplifyingbusinesses.com',
    jobTitle: 'AI Business Solutions Architect',
    description: 'I build autonomous AI systems that operate, transact, and scale. Founder of All Lines Business Solutions.',
    sameAs: [
      'https://github.com/FranklinIV94',
      'https://www.linkedin.com/in/franklin-bryant-36115363/',
      'https://x.com/theycallmeking_',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'All Lines Business Solutions',
      alternateName: 'ALBS',
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
