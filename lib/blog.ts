export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // display date e.g. "July 27, 2026"
  dateISO: string; // ISO date for sorting e.g. "2026-07-27"
  tag: string;
};

// Sorted newest first. Update this when adding new posts.
export const blogPosts: BlogPost[] = [
  {
    slug: 'agent-to-retainer',
    title: 'How to Turn an AI Agent Into a Retainer',
    excerpt: 'Sell the role. Manage adoption. Prove the result. The four-layer offer that turns a one-off AI build into a recurring retainer — and the weekly ledger that keeps it renewed.',
    date: 'August 7, 2026',
    dateISO: '2026-08-07',
    tag: 'AI Strategy',
  },
  {
    slug: 'governance-by-default',
    title: 'Governance Is the Plumbing. Digestion Is the Moat.',
    excerpt: 'Cloudflare OS validates enterprise agent governance. But governance is plumbing, not a moat. The real moat is digestion — making AI disappear into the outcome for businesses that will never touch a model.',
    date: 'August 7, 2026',
    dateISO: '2026-08-07',
    tag: 'Architecture',
  },
  {
    slug: 'the-team-they-never-hired',
    title: 'The Team They Never Hired',
    excerpt: "Every small business needs an AI team. None can afford one. The opportunity isn't building AI — it's becoming the AI team for one industry you understand better than anyone in the room.",
    date: 'July 27, 2026',
    dateISO: '2026-07-27',
    tag: 'AI Strategy',
  },
  {
    slug: 'loops-to-graphs-week-in-review-july-18',
    title: 'From Loops to Graphs: What We Learned This Week',
    excerpt: 'One week of AI infrastructure research — seven threads pulled together. Loop engineering, credit ledgers, CDP, Kimi K3, GPU benchmarks, security breaches, and selling to the frontier.',
    date: 'July 18, 2026',
    dateISO: '2026-07-18',
    tag: 'Research',
  },
  {
    slug: 'verification-is-the-scarcity',
    title: 'Verification Is the Scarcity',
    excerpt: 'AI training data is a $100M gold rush. But the gold learns to mine itself. What survives when every supplier becomes replaceable — and what Prospyr 305 is building on the same principle.',
    date: 'July 18, 2026',
    dateISO: '2026-07-18',
    tag: 'Architecture',
  },
  {
    slug: 'when-creatives-meet-agents',
    title: 'When Creatives Meet Agents',
    excerpt: 'I spent a week at the Runway AI Art & Film Festival and a private event in Beverly Hills with artists, filmmakers, and producers. Here\'s what the creative world actually needs from agentic engineering — and why the next wave of AI isn\'t about replacing creatives, it\'s about engineering the infrastructure that lets them scale.',
    date: 'June 23, 2026',
    dateISO: '2026-06-23',
    tag: 'Creative AI',
  },
  {
    slug: 'who-guards-the-guardians',
    title: 'Who Guards the Guardians?',
    excerpt: 'Anthropic secretly degrades your model. MIT proves sycophancy spirals even rational users into delusion. Google open-sources 2,000 tok/sec inference. Nine signals now say: governance must be independent.',
    date: 'June 13, 2026',
    dateISO: '2026-06-13',
    tag: 'Architecture',
  },
  {
    slug: 'source-of-permission',
    title: 'The Source of Permission',
    excerpt: 'The SaaS moat was owning data. The AI moat is owning permissions. Six research signals converged this week on one architecture — clearinghouses, vertical agents, and the death of scaffolding.',
    date: 'June 12, 2026',
    dateISO: '2026-06-12',
    tag: 'Architecture',
  },
  {
    slug: 'build-the-system',
    title: 'Build the System, Not the Prompt',
    excerpt: 'The week AI research converged on one architecture — specialized components, completion states, persistent memory, and guardrails at boundaries. Here\'s what it means for business.',
    date: 'May 31, 2026',
    dateISO: '2026-05-31',
    tag: 'Architecture',
  },
  {
    slug: 'research-intelligence-pipeline',
    title: 'The Research Intelligence Pipeline',
    excerpt: 'From paper to production in 24 hours — how we weaponized AI research into competitive advantage with a consume-connect-ship pipeline.',
    date: 'May 31, 2026',
    dateISO: '2026-05-31',
    tag: 'Research',
  },
  {
    slug: 'pulled-punch',
    title: 'The Pulled Punch Problem',
    excerpt: 'When you do both sales and delivery, you subconsciously slow down marketing because you dread onboarding. Here\'s how AI changes the equation.',
    date: 'May 21, 2026',
    dateISO: '2026-05-21',
    tag: 'AI Strategy',
  },
  {
    slug: 'crypto-compliance-after-nexfundai',
    title: 'Crypto Compliance After NexFundAI',
    excerpt: 'The FBI created a real cryptocurrency token to catch market manipulators. Here\'s what it means for your business.',
    date: 'May 21, 2026',
    dateISO: '2026-05-21',
    tag: 'Compliance',
  },
  {
    slug: 'agentic-engineer',
    title: "I'm Not an AI Engineer. I'm an Agentic Engineer.",
    excerpt: 'Why the future of business isn\'t about using AI — it\'s about building systems where AI executes.',
    date: 'May 17, 2026',
    dateISO: '2026-05-17',
    tag: 'Architecture',
  },
  {
    slug: 'context-beats-compute',
    title: '7 Trillion Passwords Couldn\'t Crack This Bitcoin Wallet. AI Did It in Minutes.',
    excerpt: 'How contextual intelligence beat brute force — and what it means for business.',
    date: 'May 14, 2026',
    dateISO: '2026-05-14',
    tag: 'AI Strategy',
  },
  {
    slug: 'system-of-action',
    title: 'System of Action vs. System of Intelligence',
    excerpt: 'What Google just validated about the architecture we\'re already building.',
    date: 'May 10, 2026',
    dateISO: '2026-05-10',
    tag: 'Architecture',
  },
];

// Always returns the newest post by dateISO
export function getLatestBlogPost(): BlogPost {
  return blogPosts[0]; // array is already sorted newest first
}