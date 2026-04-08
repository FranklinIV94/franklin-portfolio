export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  tags: string[];
  role: string;
  timeline: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'mypeo-forms',
    title: 'MyPEO Forms',
    tagline: 'White-Label HR Form Automation for PEOs',
    description: 'A white-label form automation platform for Professional Employer Organizations — replacing fragmented JotForm workflows with a unified React-based system, Supabase backend, client portal, and real-time admin dashboard for employee onboarding and HR form management.',
    challenge: 'PEOs managing HR paperwork across multiple client companies face constant, fragmented onboarding workflows. MyPEO was sending employees through disconnected JotForm links with no centralized tracking, no unified status view, and manual follow-ups on every form.',
    approach: 'Built a full-stack platform with tokenized form links per employee, a multi-step onboarding wizard (Personal → SSN → W-4 → State W-4 → Direct Deposit → E-Signature), Supabase backend, and a real-time admin dashboard with Send Request, Track Forms, Client Management, and Team Management tabs.',
    solution: 'Admins generate unique form links per employee, send via email, and track submission status in real time. Employees complete forms on any device — desktop, tablet, or iPad. Federal and state W-4 PDFs are pre-filled with employee data and merged into a downloadable package. SSN is never passed in URLs.',
    results: [
      'Live at www.mypeocoforms.com — full employee onboarding flow',
      'Federal W-4 + 40+ state W-4 PDFs with AcroForm pre-fill via pdf-lib',
      'Real-time admin dashboard with notification bell and badge counts',
      'Tokenized iPad workflow for in-office tablet use',
      'Stripe-powered billing with monthly/yearly options',
      'Team invite system with bcrypt password hashing and role-based access',
      'SSN never in URLs — all PII handled server-side via Supabase',
    ],
    tags: ['React', 'Supabase', 'Vercel', 'pdf-lib', 'Stripe', 'Resend', 'HR Tech', 'PEO', 'TypeScript'],
    role: 'Sole Architect & Developer',
    timeline: 'April 2026',
    liveUrl: 'https://www.mypeocoforms.com',
    repoUrl: 'https://github.com/FranklinIV94/mypeo-forms',
    featured: true,
    order: 0,
  },
  {
    slug: 'all-lines-auto-crm',
    title: 'All Lines Auto CRM',
    tagline: 'Auto Body, Repair & Dealership Management',
    description: 'A custom CRM and inventory management system for auto body, repair shops, and auto dealerships — managing vehicle records, work orders, parts inventory, and customer communications in one platform.',
    challenge: 'Auto body, repair, and dealership operations required tracking vehicles through the repair lifecycle, managing parts inventory, handling work orders, and maintaining client communications — with no unified system to manage it all.',
    approach: 'Built a Next.js CRM with vehicle profiles, work order management, parts inventory tracking, and customer communication logs — integrated with shop workflows for seamless operations.',
    solution: 'Staff manage all vehicle and customer interactions from a unified dashboard — work orders, parts availability, repair status, and communication history in one place.',
    results: [
      'Vehicle management with full repair lifecycle tracking',
      'Work order management and parts inventory',
      'Customer communication history',
      'Private deployment for shop operations',
    ],
    tags: ['Next.js', 'CRM', 'Auto', 'PostgreSQL', 'TypeScript'],
    role: 'Sole Architect & Developer',
    timeline: 'April 2026',
    featured: true,
    order: 1,
  },
  {
    slug: 'prospyr-inc',
    title: 'Prospyr Inc',
    tagline: 'AI-Powered Business Operations Platform',
    description: 'A multi-agent AI system for All Lines Business Solutions — combining orchestration, persistent memory, and client-facing portals to run the business autonomously.',
    challenge: 'Business operations at ALBS required coordinating multiple AI agents, multiple communication channels, and multiple clients — without a unified system to manage it all.',
    approach: 'Built a multi-agent platform with specialized agents (Prospyr Prime, Northstar, Southstar, Zo) connected via OpenClaw, with persistent memory via Obsidian, client portals via Next.js/Supabase, and real-time dashboards via SSE.',
    solution: 'Agents handle client onboarding, security monitoring, email, and business operations 24/7. The Prospyr Control Center dashboard provides a unified command interface. Clients self-serve via the ALBS onboarding portal.',
    results: [
      'Multi-agent team running 24/7 across Oracle VPS, Northstar hardware, and Office Paled server',
      'ALBS client portal live at onboarding.simplifyingbusinesses.com',
      'Prospyr dashboard deployed at prospyr-dashboard.vercel.app',
      'Persistent memory system with Obsidian vault integration',
    ],
    tags: ['AI Agents', 'Multi-Agent', 'Next.js', 'TypeScript', 'Obsidian', 'Vercel', 'Supabase'],
    role: 'Sole Architect & Developer',
    timeline: 'March 2026',
    repoUrl: 'https://github.com/FranklinIV94/prospyr-inc',
    featured: true,
    order: 2,
  },
  {
    slug: 'ap-agent',
    title: 'AP Agent',
    tagline: 'Autonomous Accounts Payable on Kite Chain',
    description: 'An AI agent that executes business vendor payments autonomously — natural language instruction to on-chain settlement with zero human signatures mid-task.',
    challenge: 'Business accounts payable is a $1.2T market dominated by manual, error-prone workflows. Every business pays vendors, yet AI-native AP automation barely exists.',
    approach: 'Built a full-stack Next.js application with a natural language instruction parser, Kite AA SDK integration, and EIP-3009 gasless stablecoin transfers. The agent handles vendor discovery, Session creation via Agent Passport, payment signing, and on-chain settlement.',
    solution: 'User submits: "Subscribe to email verification API for $29/mo." The agent parses the instruction, creates a scoped budget session, signs an EIP-3009 gasless transfer, and settles the transaction on Kite Chain — with full on-chain attestation via Kite Scan.',
    results: [
      'Full E2E autonomous execution — zero human signatures',
      'EIP-3009 gasless transfers — no gas tokens required',
      'On-chain settlement with public audit trail',
      'Live demo deployed to Vercel',
    ],
    tags: ['AI Agents', 'Kite AI', 'Blockchain', 'Next.js', 'TypeScript', 'EIP-3009'],
    role: 'Sole Architect & Developer',
    timeline: 'March 2026',
    liveUrl: 'https://hackathon-kite.vercel.app',
    repoUrl: 'https://github.com/FranklinIV94/hackathon-2026',
    featured: true,
    order: 3,
  },
  {
    slug: 'albs-portal',
    title: 'ALBS Client Portal',
    tagline: 'AI-Driven Business Solutions Onboarding',
    description: 'A full-stack client onboarding platform for All Lines Business Solutions — multi-step wizard, Stripe billing, progress tracking, and AI-powered chat.',
    challenge: 'Client onboarding at ALBS was fragmented across email, calls, and spreadsheets. No unified view of where each client stood in the onboarding pipeline.',
    approach: 'Built a Next.js portal with a dynamic multi-step onboarding flow, Stripe subscription integration (monthly/yearly), real-time progress tracking, and a chat system that emails messages to the support team.',
    solution: 'Clients receive a unique token link, complete intake via a guided stepper, select billing cadence, sign a dynamic service agreement, and pay via Stripe. Admins get a full dashboard with lead management, progress tracking, and conversation history.',
    results: [
      'Live at onboarding.simplifyingbusinesses.com',
      'Stripe subscription + webhook handling for recurring billing',
      'Progress tracker with milestone visualization',
      'Client portal with zero server-side data storage for privacy',
    ],
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'TypeScript', 'Resend'],
    role: 'Sole Architect & Developer',
    timeline: 'March 2026',
    liveUrl: 'https://onboarding.simplifyingbusinesses.com',
    featured: true,
    order: 4,
  },
  {
    slug: 'prospyr-dashboard',
    title: 'Prospyr Control Center',
    tagline: 'Multi-Agent Orchestration Dashboard',
    description: 'A web dashboard for managing and commanding autonomous AI agents (Prospyr, Northstar, Southstar) via SSE — built for Franklin\'s AI business operations infrastructure.',
    challenge: 'Managing multiple AI instances across different hosts (Oracle VPS, Northstar local, Office Paled server) required a unified control interface with real-time status and command delivery.',
    approach: 'Next.js + SSE architecture. Agents connect to the dashboard via Server-Sent Events, registering their capabilities and status. The dashboard pushes commands to specific agents and receives typed responses in real time.',
    solution: 'A live agent grid shows online/offline/working status per agent. A command center allows sending tasks with automatic routing to the right agent based on capabilities. Activity log captures every run with timestamps.',
    results: [
      'Live agent grid with real-time SSE status updates',
      'Task dispatch with agent capability routing',
      'Activity log with per-run details',
      'Deployed to Vercel, agents connect from anywhere',
    ],
    tags: ['Next.js', 'SSE', 'TypeScript', 'AI Agents', 'Vercel'],
    role: 'Sole Architect & Developer',
    timeline: 'March 2026',
    repoUrl: 'https://github.com/FranklinIV94/prospyr-dashboard',
    featured: true,
    order: 5,
  },
  {
    slug: 'hackathon-2026',
    title: 'Encode Hackathon 2026',
    tagline: 'GenLayer × Base + InvoiceFi BNB Chain',
    description: 'Dual-track hackathon submission for Encode Club 2026 — Track 1: GenLayer intelligent contract with Web3.js frontend on Base. Track 2: InvoiceFi on BNB Chain with on-chain invoice financing.',
    challenge: 'Two separate tracks requiring different blockchain ecosystems and smart contract models. GenLayer offers LLM-backed intelligent contracts while BNB Chain provides established DeFi primitives.',
    approach: 'Track 1: Built an Intelligent Contract on GenLayer testnet with a React demo UI. Track 2: Developed an invoice financing dApp on BNB Chain with smart contract-based repayment logic.',
    solution: 'Two complete hackathon submissions demonstrating multi-chain capabilities — GenLayer for AI-augmented contracts and BNB Chain for DeFi-powered invoice financing. Both tracks include working code and deployed testnet contracts.',
    results: [
      'Track 1: GenLayer intelligent contract deployed on testnet',
      'Track 2: InvoiceFi smart contract on BNB Chain testnet',
      'React/Web3.js demo UIs for both tracks',
      'Published at github.com/FranklinIV94/hackathon-2026',
    ],
    tags: ['GenLayer', 'BNB Chain', 'Blockchain', 'Solidity', 'Web3.js', 'React', 'Hackathon'],
    role: 'Sole Architect & Developer',
    timeline: 'March 2026',
    repoUrl: 'https://github.com/FranklinIV94/hackathon-2026',
    featured: false,
    order: 6,
  },
];
