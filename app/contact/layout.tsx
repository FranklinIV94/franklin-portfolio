import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Franklin J Bryant IV — AI Business Solutions',
  description: 'Get in touch about AI-powered business operations, agentic engineering, or project collaboration. Available for projects nationwide.',
  openGraph: {
    title: 'Contact Franklin J Bryant IV',
    description: 'Get in touch about AI-powered business operations, agentic engineering, or project collaboration.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}