import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Franklin J Bryant IV',
  description: 'On AI, business, and building systems that run themselves. Agentic engineering, compliance, research pipelines, and the future of autonomous business operations.',
  openGraph: {
    title: 'Blog — Franklin J Bryant IV',
    description: 'On AI, business, and building systems that run themselves.',
  },
};

const posts = [
  {
    slug: 'governance-by-default',
    title: 'Governance by Default',
    excerpt: 'Cloudflare open-sourced their internal AI workspace. The architecture maps nearly 1:1 onto what we already spec\'d for our Ops Center. Here\'s what the validation means, what we\'re borrowing, and why we\'re not adopting their stack.',
    date: 'August 6, 2026',
    tag: 'Architecture',
  },
  {
    slug: 'when-creatives-meet-agents',
    title: 'When Creatives Meet Agents',
    excerpt: 'I spent a week at the Runway AI Art & Film Festival and a private event in Beverly Hills with artists, filmmakers, and producers. Here\'s what the creative world actually needs from agentic engineering — and why the next wave of AI isn\'t about replacing creatives, it\'s about engineering the infrastructure that lets them scale.',
    date: 'June 23, 2026',
    tag: 'Creative AI',
  },
  {
    slug: 'who-guards-the-guardians',
    title: 'Who Guards the Guardians?',
    excerpt: 'Anthropic secretly degrades your model. MIT proves sycophancy spirals even rational users into delusion. Google open-sources 2,000 tok/sec inference. Nine signals now say: governance must be independent.',
    date: 'June 13, 2026',
    tag: 'Architecture',
  },
  {
    slug: 'source-of-permission',
    title: 'The Source of Permission',
    excerpt: 'The SaaS moat was owning data. The AI moat is owning permissions. Six research signals converged this week on one architecture — clearinghouses, vertical agents, and the death of scaffolding.',
    date: 'June 12, 2026',
    tag: 'Architecture',
  },
  {
    slug: 'build-the-system',
    title: 'Build the System, Not the Prompt',
    excerpt: 'The week AI research converged on one architecture — specialized components, completion states, persistent memory, and guardrails at boundaries. Here\'s what it means for business.',
    date: 'May 31, 2026',
    tag: 'Architecture',
  },
  {
    slug: 'research-intelligence-pipeline',
    title: 'The Research Intelligence Pipeline',
    excerpt: 'From paper to production in 24 hours — how we weaponized AI research into competitive advantage with a consume-connect-ship pipeline.',
    date: 'May 31, 2026',
    tag: 'Research',
  },
  {
    slug: 'pulled-punch',
    title: 'The Pulled Punch Problem',
    excerpt: 'When you do both sales and delivery, you subconsciously slow down marketing because you dread onboarding. Here\'s how AI changes the equation.',
    date: 'May 21, 2026',
    tag: 'AI Strategy',
  },
  {
    slug: 'crypto-compliance-after-nexfundai',
    title: 'Crypto Compliance After NexFundAI',
    excerpt: 'The FBI created a real cryptocurrency token to catch market manipulators. Here\'s what it means for your business.',
    date: 'May 21, 2026',
    tag: 'Compliance',
  },
  {
    slug: 'agentic-engineer',
    title: "I'm Not an AI Engineer. I'm an Agentic Engineer.",
    excerpt: 'Why the future of business isn\'t about using AI — it\'s about building systems where AI executes.',
    date: 'May 17, 2026',
    tag: 'Architecture',
  },
  {
    slug: 'context-beats-compute',
    title: '7 Trillion Passwords Couldn\'t Crack This Bitcoin Wallet. AI Did It in Minutes.',
    excerpt: 'How contextual intelligence beat brute force — and what it means for business.',
    date: 'May 14, 2026',
    tag: 'AI Strategy',
  },
  {
    slug: 'system-of-action',
    title: 'System of Action vs. System of Intelligence',
    excerpt: 'What Google just validated about the architecture we\'re already building.',
    date: 'May 10, 2026',
    tag: 'Architecture',
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <span className="font-mono text-xs text-accent mb-3 block">Blog</span>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Thoughts<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          On AI, business, and building systems that run themselves.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-surface border border-border rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                {post.tag}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-200">
              Read article
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}