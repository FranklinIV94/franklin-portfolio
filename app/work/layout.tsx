import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Franklin J Bryant IV Portfolio',
  description: 'Production-grade AI systems, governance frameworks, and business automation platforms. Agent Code of Conduct, PEO Automation, Medical Practice Portal, and more.',
  openGraph: {
    title: 'Work — Franklin J Bryant IV',
    description: 'Production-grade AI systems, governance frameworks, and business automation platforms.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}