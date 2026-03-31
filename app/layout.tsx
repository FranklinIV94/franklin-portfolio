import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Franklin J Bryant IV — AI Business Solutions Architect',
  description: 'I build autonomous AI systems that operate, transact, and scale. Founder of All Lines Business Solutions.',
  openGraph: {
    title: 'Franklin J Bryant IV — AI Business Solutions Architect',
    description: 'I build autonomous AI systems that operate, transact, and scale.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-canvas text-white antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
