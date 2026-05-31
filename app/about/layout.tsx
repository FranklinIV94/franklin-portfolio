import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Franklin J Bryant IV — AI Business Solutions Architect',
  description: 'AI Business Solutions Architect building autonomous systems that operate, transact, and scale. Founder of All Lines Business Solutions. COO, AI infrastructure leader, and agentic engineering advocate.',
  openGraph: {
    title: 'About Franklin J Bryant IV',
    description: 'AI Business Solutions Architect building autonomous systems that operate, transact, and scale.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}