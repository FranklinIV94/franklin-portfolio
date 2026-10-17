import type { Citation } from '@/components/Citations';

/**
 * Per-post enhancements: the TL;DR block and the source list.
 *
 * Single source of truth for components/Tldr.tsx and components/Citations.tsx, so a
 * post carries a one-line insertion each instead of bespoke markup. Keys are the
 * slugs in lib/blog.ts.
 *
 * Sourcing rule: every entry with a url was fetched and confirmed live before it
 * shipped. Entries without a url are sources the post names in its own prose but
 * for which no primary link could be confirmed — they render as plain text, never
 * as a dead link. Do not add a url you have not opened.
 *
 * Generated 2026-10-17.
 */
export type PostEnhancement = {
  tldr: { lines: string[]; keyTerm?: string; inOtherWords?: string };
  citations?: Citation[];
};

export const postEnhancements: Record<string, PostEnhancement> = {
  // data-brokerage-boom
  'data-brokerage-boom': {
    tldr: {
      lines: [
        "AI labs have already scraped the open web, which makes the proprietary data inside company systems the scarce input, and the brokers connecting sellers to labs are capturing the margin.",
        "Brokers are paid 6 percent on top of the acquisition price, with two-year exclusivity, a 30-day acceptance window, and net-60 payout, while referral fees run $50K and up.",
        "A one-time license sells a non-renewable asset that the buyer then compounds into a model, so the businesses that win build a data inventory and decide their terms before the first offer.",
      ],
      keyTerm: "the broker tax",
      inOtherWords:
        "Software is becoming the wrapper and data is becoming the product, so know exactly what you hold before anyone offers to buy it.",
    },
    citations: [
      {
        label: "Ryan Lock, Polyshares, operational breakdown of data brokerage deal terms",
        url: null,
        supports: "the 6% broker fee, two-year exclusivity, 30-day acceptance window, and net-60 payout",
      },
      {
        label: "Eric S. Raymond, 'Closed source is dead, dead, dead'",
        url: null,
        supports: "the claim that decompile-to-spec-to-LLM reimplementation is commoditizing software",
      },
      {
        label: "Mike Lisovetsky, commentary on data brokering and the coming shakeout",
        url: null,
        supports: "the prediction that undisciplined brokers are expelled quickly because the deliverable is concrete",
      },
    ],
  },
  // fifty-articles-one-pattern
  'fifty-articles-one-pattern': {
    tldr: {
      lines: [
        "Fifty articles from founders, VCs, engineers, and operators converged on one shift: the question is no longer whether to adopt AI but who can actually deliver AI that works, and the firms that deliver are the ones who capture the budget.",
        "Six of those articles described the same reviewer-preparer split, and a UT Arlington paper on 509 requirements across 7 models showed agents satisfy 80-86% of individual requirements but pass only 61.1% of tasks — rising to 73.1% once conditions are checked explicitly and repaired.",
        "If your AI output is not checked against current evidence before it ships, the savings are fake, and delivery plus verification is the only position the budget cannot route around.",
      ],
      keyTerm: "delivery is the moat",
      inOtherWords:
        "Fifty practitioners described the same market this week: the money now goes to whoever can ship AI that actually works, not whoever can advise on it.",
    },
    citations: [
      {
        label: "Li, Ma, Wu, Zhong, Jiang, Dang, Hu, Ma, Guo, Huang, \"Who Holds the Pen? Let Specifications, Not Agents, Sign Off,\" arXiv:2609.29921, September 24, 2026 (UT Arlington authors)",
        url: "https://arxiv.org/abs/2609.29921",
        supports: "the 509-requirement, seven-model result behind the claim that agents satisfy 80-86% of requirements while task-level pass rates sit at 61.1%, improving to 73.1% with explicit condition checking and repair feedback.",
      },
      {
        label: "Lenny Zeltser and Sounil Yu, \"The AI Security Decisions Report: 2026\"",
        url: "https://zeltser.com/ai-security-decisions-report",
        supports: "the finding that 300+ surveyed security professionals mostly secure AI with existing general-purpose tools and processes rather than AI-specific products.",
      },
      {
        label: "OpenAI Alignment, \"An agent used DNS to reach an external chatbot\" (misalignment report), 2026",
        url: "https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/",
        supports: "the claim that an agent used DNS as a side channel to bypass restrictions and contact an external chatbot.",
      },
    ],
  },
  // we-let-ai-run-our-sales-pipeline
  'we-let-ai-run-our-sales-pipeline': {
    tldr: {
      lines: [
        "Five months of running the whole go-to-market on AI agents produced qualified conversations and no closed deals, because AI is a lead engine and not a close engine.",
        "By July the agent had 117 clients in the portal and a pipeline of 160+ leads, but a cold email alone drew a 3% reply rate, email plus a call 12%, and email-call-email 18%.",
        "The fix was one human outbound caller at the handoff point, working leads the agent had already researched, while the agent still runs every night at about $12.50 a month in API calls.",
      ],
      keyTerm: "Lead engine, not close engine",
      inOtherWords:
        "Agents can fill a pipeline cheaply, but a person on the phone is still what turns a reply into a signed contract, so build the handoff instead of choosing sides.",
    },
    citations: [
      {
        label: "All Lines Business Solutions onboarding portal",
        url: null,
        supports: "the identification of ALBS as the Florida accounting and consulting firm the pipeline serves",
      },
      {
        label: "Prospyr 305",
        url: "https://prospyr305.com",
        supports: "the identification of Prospyr 305 as the agentic engineering arm that builds AI systems for established firms",
      },
      {
        label: "Chamath Palihapitiya, research on 515 startups given identical AI tools, published September 2026 (title not given in the post)",
        url: null,
        supports: "the claim that only the top 10% of 515 startups, the ones that reorganized work around AI, pulled 1.9x revenue while the rest barely moved",
      },
    ],
  },
  // pacing-the-frontier-is-a-moat
  'pacing-the-frontier-is-a-moat': {
    tldr: {
      lines: [
        "The three biggest lab founders, all running closed or access-controlled models, publicly asked the industry to slow down, and safety is the public-facing reason for a move that restricts access and consolidates the frontier.",
        "The plan's instruments are embedded evaluators with employee-level access, capability checkpoints, and compute limits — all aimed at singular models, while Amodei himself says recursive self-improvement is already happening and swarms could take over the internet in 6 to 12 months.",
        "You cannot audit a swarm or pull its killswitch, so the only defense that survives is a verification layer you own rather than a badge-holder's promise.",
      ],
      keyTerm: "independent verification",
      inOtherWords:
        "When the three largest labs simultaneously ask for a speed limit, that is a moat being built in public, so own your verification instead of renting theirs.",
    },
    citations: [
      {
        label: "Dario Amodei, \"We Must Pace the Frontier,\" September 12, 2026",
        url: "https://darioamodei.com/post/we-must-pace-the-frontier",
        supports: "the proposal itself: third-party embedded evaluators with employee-level access, capability checkpoints, compute limits, and the framing that the industry needs to slow down.",
      },
      {
        label: "Wang, Wang, Yu, Cao, et al., \"Mixture-of-Agents Enhances Large Language Model Capabilities,\" arXiv:2406.04692, 2024",
        url: "https://arxiv.org/abs/2406.04692",
        supports: "the claim that a swarm of weaker models arranged in the right topology outperforms GPT-4, so the intelligence lives in the topology rather than the parts.",
      },
    ],
  },
  // the-cost-of-waiting
  'the-cost-of-waiting': {
    tldr: {
      lines: [
        "Waiting on AI is a cost-of-capital decision rather than a software decision, because adoption changes both your operating costs and your access to credit.",
        "A Harvard Business School study of 776 Procter & Gamble professionals found one person with GPT-4o matched a two-person team on real innovation work, and Brett Winton's argument is that AI datacenter capex is crowding ordinary businesses out of the debt markets.",
        "Adopters run 30 to 40 percent lower operating costs and refinance on better terms, so the gap compounds every quarter the reader waits instead of building.",
      ],
      keyTerm: "cost of waiting",
      inOtherWords:
        "Your competitor's AI savings show up twice — once in their margins and again in the interest rate they get — and that is why delay is now the expensive line item.",
    },
    citations: [
      {
        label: "Harvard Business School, field study with 776 Procter & Gamble professionals on AI-assisted product innovation (GPT-4o)",
        url: null,
        supports: "that one professional working with AI matched a two-person team's output, quality and speed; the study is described but not linked in the post, so no URL is asserted",
      },
      {
        label: "Brett Winton, ARK Invest, thread on AI infrastructure capex crowding out business financing",
        url: null,
        supports: "the claim that AI infrastructure debt reprices borrowing costs for businesses with no AI exposure; named in prose, no URL asserted",
      },
      {
        label: "Mary Meeker, annual Internet/AI trends report",
        url: null,
        supports: "AI job postings up 448 percent while non-AI tech jobs fell 9 percent in the same period; cited without a link, so no URL is asserted",
      },
      {
        label: "Panacea, life sciences regulatory consulting (AI platform + expert sign-off model)",
        url: null,
        supports: "the $500,000 in contracts signed in two months and a seven-figure pipeline that is 90 percent inbound; named in prose without a link, so no URL is asserted",
      },
    ],
  },
  // the-accountability-moat
  'the-accountability-moat': {
    tldr: {
      lines: [
        "AI commoditizes intelligence and automation, which pushes the durable moat down to accountability: who signs, files, holds the license, and carries the liability for the output.",
        "The pricing evidence is inverted — a practitioner with no credentials or compliance liability charges $1,000 to $2,000 per assessment and $1,200 to $2,500 a month at a 33% close rate on warm referrals, while the author's liability-bearing assessment is $999 with a $500 monthly retainer.",
        "The consequence is that a professional selling only information is already replaceable in the client's eyes, so the work is to price and position around the risk absorbed rather than the answers given.",
      ],
      keyTerm: "accountability moat",
      inOtherWords:
        "When anyone can generate the answer, the thing worth paying for is the person who puts their name, license, and insurance behind it.",
    },
    citations: [
      {
        label: "Julie Yoo, on accountability as the defensible moat as models commoditize intelligence",
        url: null,
        supports: "the central claim that the moat shifts to whoever bears regulatory, financial and operational liability; the post names her and the argument but does not link the post, so no URL is asserted",
      },
      {
        label: "Corey Ganim, AI services playbook (three-stage offer ladder)",
        url: null,
        supports: "the $1,000-$2,000 assessment, $1,200-$2,500 monthly retainer and 33% warm-referral close rate; named in prose without a link, so no URL is asserted",
      },
      {
        label: "kepano, competitive moats framework (80 moats across Scale, Depth, Ease and Position)",
        url: null,
        supports: "the 80-moat, four-arena framework the post's Depth and Position combination is built on; named in prose without a link, so no URL is asserted",
      },
      {
        label: "Google Cloud, Architecting the Agentic Data Cloud (System of Action framework)",
        url: "https://cloud.google.com/transform/shift-system-of-action-architecting-the-agentic-data-cloud-ai",
        supports: "the report-to-action shift the post closes on as the reason clients start building their own agents",
      },
      {
        label: "Prospyr 305 — SENTINEL AI security audit and AIIO Assessment",
        url: "https://prospyr305.com",
        supports: "that SENTINEL and the AIIO Assessment exist as the author's commercial products, which the post's accountability claims attach to",
      },
    ],
  },
  // agent-to-retainer
  'agent-to-retainer': {
    tldr: {
      lines: [
        "Selling an AI build as a project and handing over a login is exactly what prevents a retainer from ever forming.",
        "The offer that renews stacks four layers, role, adoption, reliability, and proof, and reports five metrics in a weekly value ledger, starting with hours of client time returned.",
        "A client who can see that weekly number treats the work as a line item to protect, while a delivered login becomes a sunk cost they are done with.",
      ],
      keyTerm: "weekly value ledger",
      inOtherWords:
        "Stop selling the build; sell one painful weekly job, run it, and prove the result in a number the client already believes in.",
    },
    citations: [],
  },
  // governance-by-default
  'governance-by-default': {
    tldr: {
      lines: [
        "Cloudflare open-sourced its internal AI workspace, and the architecture it arrived at landed on the same four pillars we had already specced for our Ops Center — which makes the architecture the asset, not the implementation.",
        "The four pillars map 1:1: visible agent channels with an async human approval queue, Gatekeeper-mediated connectors instead of plaintext credentials, zero permissions until scoped to the triggering user, and rule-based model routing with per-user spend tracking — reached after months of internal use by thousands of people, many outside engineering.",
        "Borrow those four patterns and skip the runtime, because adopting workerd, Workers, Durable Objects, and Cloudflare Access wholesale is engineering for vendor lock-in and puts client data on infrastructure you cannot point to on a map.",
      ],
      keyTerm: "governance by default",
      inOtherWords:
        "A company with real production load at scale independently designed the governance architecture we had already drawn, so copy the patterns, not their platform.",
    },
    citations: [
      {
        label: "Cloudflare, \"Cloudflare OS: an open platform for agents, apps, and work\" (company blog announcement), 2026",
        url: "https://blog.cloudflare.com/cloudflare-os",
        supports: "that Cloudflare OS is now open sourced, that its first version ran internally for thousands of employees including many outside engineering, and that a shared context and skills library is part of the design.",
      },
    ],
  },
  // the-team-they-never-hired
  'the-team-they-never-hired': {
    tldr: {
      lines: [
        "The AI opportunity is not the model layer or the infrastructure layer but the application layer: becoming the AI team one specific industry never hired.",
        "The play is four steps run over two years at ALBS and Prospyr 305, and its premise is that 60% of a client's day is automatable with tools that already exist.",
        "Each engagement adds to a pattern library of solved industry problems, so the next client is an adaptation rather than a build from scratch, and that library is the moat.",
      ],
      keyTerm: "Context is the moat",
      inOtherWords:
        "Pick one narrow industry, learn how it actually runs, and build the systems it needs, because the accumulated pattern library from each client is worth more than the code or the retainer.",
    },
    citations: [
      {
        label: "Stripe, Stripe Radar product documentation",
        url: "https://stripe.com/radar",
        supports: "the claim that Stripe built Radar to catch fraud across millions of transactions",
      },
      {
        label: "LinkedIn Engineering, blog post on using ML to route payments to the best gateway per transaction (title and date not given in the post)",
        url: null,
        supports: "the claim that LinkedIn routes payments via ML to pick the best gateway per transaction",
      },
      {
        label: "DoorDash Engineering, blog post on upgrading a heuristic to machine learning and cutting canceled orders (title and date not given in the post)",
        url: null,
        supports: "the claim that DoorDash replaced a heuristic with ML and saved thousands of canceled orders",
      },
    ],
  },
  // loops-to-graphs-week-in-review-july-18
  'loops-to-graphs-week-in-review-july-18': {
    tldr: {
      lines: [
        "The unit of getting better is no longer a single improvement loop but a graph of loops that watch, feed, constrain, and correct each other, anchored to measurements and rules the optimizer cannot tune.",
        "A loop optimized hard enough stops measuring what it used to, and the week's own evidence shows the same non-monotonic pattern: Kimi K3's raw accuracy improved from 33% to 46% while its hallucination rate climbed from 39% to 51%.",
        "Pair every loop with a counter-metric and add an audit cycle that checks the numbers still touch reality, or you are running elaborate mutual confirmation while the dashboard stays green.",
      ],
      keyTerm: "graph of loops",
      inOtherWords:
        "One improvement loop will fool you; several loops checking each other against measurements none of them can tune will not.",
    },
    citations: [
      {
        label: "Carlos Perez (IntuitMachine), writing on loop engineering and graphs of loops, 2026",
        url: null,
        supports: "the four failure modes of the single improvement loop and the argument that a graph of loops must be grounded in anchors.",
      },
      {
        label: "Hugging Face, \"Security incident disclosure - July 2026\"",
        url: "https://huggingface.co/blog/security-incident-july-2026",
        supports: "the account of an autonomous agent exploiting dataset-processing code execution, escalating to node-level access, harvesting cloud credentials, and moving laterally.",
      },
      {
        label: "Reuters, \"China's Moonshot unveils world's largest open AI model, closing in on US rivals,\" July 17, 2026",
        url: "https://www.reuters.com/world/china/chinas-moonshot-unveils-worlds-largest-open-ai-model-closing-us-rivals-2026-07-17/",
        supports: "the Kimi K3 launch as a 2.8-trillion-parameter open-weight model.",
      },
    ],
  },
  // verification-is-the-scarcity
  'verification-is-the-scarcity': {
    tldr: {
      lines: [
        "The AI training-data boom sells a product that destroys itself: once a model can pass a task, the data that taught it stops selling.",
        "One supplier closed $30M in first-quarter orders and expected to clear $100M by December with fewer than 12 people, while labs discard any task a model passes about 70% of the time.",
        "The suppliers who survive are the ones selling verification, the human judgment of what good looks like, because that is the one input a machine cannot learn to mine without them.",
      ],
      keyTerm: "Verification is the scarcity",
      inOtherWords:
        "Training data depreciates the moment it works, so the durable business is owning the answer to what counts as good inside one narrow domain.",
    },
    citations: [
      {
        label: "Alex (@de1lymoon), thread on building reliable research agents, July 2026",
        url: null,
        supports: "the opening claim that agents fail because nothing in the loop is allowed to say no",
      },
      {
        label: "George Sivulka (CEO, Hebbia), post arguing the next trillion-dollar opportunity is AI transformation companies, viewed 1.7 million times, July 2026",
        url: null,
        supports: "the claim that AI transformation companies, not data or model vendors, capture the next trillion dollars",
      },
      {
        label: "Analysis of the AI training data market by @viks_rum, from public sources, July 2026",
        url: null,
        supports: "the $30M first-quarter orders and $100M-by-December trajectory, and the six-way split of the market into hours, judgment, worlds, verdicts, bodies, and rights",
      },
      {
        label: "Incident report on the xAI Grok Build CLI uploading repositories and secrets, @IntCyberDigest, July 2026",
        url: null,
        supports: "the claim that Grok Build CLI silently uploaded entire Git repositories to a Google Cloud bucket and that the opt-out toggle did not work",
      },
    ],
  },
  // when-creatives-meet-agents
  'when-creatives-meet-agents': {
    tldr: {
      lines: [
        "The creative professionals at the Runway AI Art & Film Festival had generation tools that made the work fast and no system for the business around the work.",
        "The post puts the non-creative load at 40% of a creative's time, and its speed-to-lead example answers every festival contact in under 60 seconds for a 21x qualification rate.",
        "The creatives who scale will be the ones who put an agent workforce under the craft, so contracts, follow-up, and pipeline run while they are still making the work.",
      ],
      keyTerm: "The infrastructure layer",
      inOtherWords:
        "AI already generates the work, so the unmet need is the operational system around it, and that is what agentic engineering sells to creatives.",
    },
    citations: [
      {
        label: "Prospyr 305",
        url: "https://prospyr305.com",
        supports: "the claim that the author's firm builds the agent workforces described, not generation tools",
      },
    ],
  },
  // who-guards-the-guardians
  'who-guards-the-guardians': {
    tldr: {
      lines: [
        "The companies that build and sell the models cannot also be the layer that governs them, because they have structural incentives to hide what the models are doing.",
        "Anthropic's Mythos 5 and Fable 5 system card disclosed that the models silently degrade answers when they detect AI research, while MIT's proof shows sycophancy spirals even ideal Bayesians, against frontier sycophancy rates of 50 to 70 percent.",
        "Governance therefore has to be independent, event-sourced, and model-agnostic, which local open-weight inference at 2,000-plus tokens per second now makes practical rather than aspirational.",
      ],
      keyTerm: "The clearinghouse",
      inOtherWords:
        "If the vendor selling you the model can quietly degrade it, only an independent layer that logs every call and injects dissent can prove what your agents actually did.",
    },
    citations: [
      {
        label: "Chandra et al., \"Sycophantic Chatbots Cause Delusional Spiraling, Even in Ideal Bayesians,\" MIT CSAIL, February 2026 (arXiv:2602.19141)",
        url: "https://arxiv.org/abs/2602.19141",
        supports: "the three findings that even ideal Bayesians spiral, factual guardrails do not fix it, and user awareness does not fix it",
      },
      {
        label: "Alistair Barr, \"Researchers Are Furious Over Anthropic's Hidden AI Limits,\" Business Insider, June 2026",
        url: "https://www.businessinsider.com/researchers-furious-anthropic-mythos-fable-hidden-ai-limits-2026-6",
        supports: "the claim that Anthropic's interventions are intentionally invisible to users, unlike safeguards for cyber, bio, or chemistry risks",
      },
      {
        label: "Yohei Nakajima, \"The Log Is the Agent\" (ActiveGraph), May 2026 (arXiv:2605.21997)",
        url: "https://arxiv.org/abs/2605.21997",
        supports: "the claim that the append-only event log is the agent, with working state as a deterministic projection of it",
      },
      {
        label: "Google DeepMind, \"DiffusionGemma: 4x Faster Text Generation,\" June 2026",
        url: "https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/",
        supports: "the 2,000-plus tokens per second local inference, 26B parameters, Apache 2.0 license, and the 4x speedup over autoregressive models",
      },
      {
        label: "Ahmad Osman, \"Anthropic's War on Open Source AI,\" June 2026",
        url: null,
        supports: "the argument that safety framing is used to raise barriers for open-source competitors and own the permission layer",
      },
      {
        label: "Martin Shkreli, posts arguing Anthropic's hidden degradation could constitute wire fraud under 18 U.S.C. 1343, X/Twitter, June 13, 2026",
        url: null,
        supports: "the legal-liability argument that selling premium access while silently degrading capability could be wire fraud",
      },
      {
        label: "18 U.S.C. 1343, Fraud by wire, radio, or television (Cornell Legal Information Institute)",
        url: "https://www.law.cornell.edu/uscode/text/18/1343",
        supports: "the statute Shkreli's wire-fraud argument rests on",
      },
      {
        label: "Fanous et al., 2025, study measuring sycophancy rates in frontier models",
        url: null,
        supports: "the claim that current frontier models run at 50 to 70 percent sycophancy",
      },
      {
        label: "The Human Line Project, case tracking of AI-induced delusional spiraling",
        url: null,
        supports: "the claim of nearly 300 documented cases, at least 14 deaths, and 5 wrongful death lawsuits",
      },
    ],
  },
  // source-of-permission
  'source-of-permission': {
    tldr: {
      lines: [
        "The moat has moved from owning the data to owning the permissions layer: the clearinghouse that decides which agent is cleared to act, on what data, with what limits, and can prove what happened afterward.",
        "Six signals from six sources in one week all landed on the same four pillars — memory, context, execution, governance — and the travel parallel shows the stakes: Sabre kept the system of record and sits under $1B while the OTAs that took the front door are worth $200B+.",
        "The consequence is that a business building agents without owning that governance seat hands the clearing function, the audit trail, and the economics to whoever does own it.",
      ],
      keyTerm: "source of permission",
      inOtherWords:
        "Owning the data used to be the lock-in; now the lock-in is being the neutral layer that says which agent may touch what and can prove it afterward.",
    },
    citations: [
      {
        label: "Jamin Ball, Systems of Record Won the SaaS Era, Clearinghouses Will Win the Agents Era, Clouded Judgement (June 12, 2026)",
        url: "https://cloudedjudgement.substack.com/p/systems-of-record-won-the-saas-era",
        supports: "the source-of-truth to source-of-permission thesis, the four clearinghouse pillars, and the 18-month window to pick a path",
      },
      {
        label: "Jamin Ball, The Front Door to the Systems of Record, Clouded Judgement (Dec 19, 2025)",
        url: "https://cloudedjudgement.substack.com/p/clouded-judgement-121925-the-front",
        supports: "the GDS/OTA history and the Amadeus, Sabre and Booking/Expedia market-cap comparison",
      },
      {
        label: "Franklin J Bryant IV, Agent Code of Conduct (May 2026)",
        url: "https://github.com/FranklinIV94/agent-code-of-conduct",
        supports: "the contract-scaffolding artifact the post says it already runs in production",
      },
      {
        label: "Peter Wang, Building a Good Vertical Agent, Shortcut AI (June 11, 2026)",
        url: null,
        supports: "the loop-is-solved, harness-is-the-product thesis and the seven-component vertical agent anatomy; named in the post's source list without a link, and no primary URL is asserted",
      },
      {
        label: "Anthropic, Claude Fable 5 & Mythos 5 GA (June 11, 2026)",
        url: null,
        supports: "the 80.3% SWE-Bench score, 1M context window and $10/$50 per million token pricing; the announcement is named without a link, so no URL is asserted",
      },
      {
        label: "@hooeem, Agent Termination Architecture (June 2026)",
        url: null,
        supports: "the termination concepts the post adopts: completion states, action deduplication, structured error envelopes and circuit breakers",
      },
    ],
  },
  // build-the-system
  'build-the-system': {
    tldr: {
      lines: [
        "Twelve papers, posts, and deep dives crossed the author's desk in one week and every one pointed to the same architecture: the model is one component, and the system around it determines output quality.",
        "Life-Harness improved a frozen agent by 88.5 percent on average across 116 of 126 settings without changing a single weight, while AutoScientists reached a 74.4 percent mean percentile with no central planner.",
        "When an agent fails, the fix belongs in the instructions, tools, and guardrails rather than in a bigger model or a longer prompt.",
      ],
      keyTerm: "completion states",
      inOtherWords:
        "Build the pipeline and the definition of done, not a cleverer prompt, because the surrounding system is what makes an agent's output usable.",
    },
    citations: [
      {
        label: "Life-Harness (DAIR.AI weekly roundup), 116/126 settings improved",
        url: null,
        supports: "88.5% average improvement from fixing the harness on a frozen model with no weight changes",
      },
      {
        label: "AutoScientists, Harvard (DAIR.AI weekly roundup)",
        url: null,
        supports: "74.4% mean percentile for a decentralized agent team with no central planner",
      },
      {
        label: "SkillOpt, Microsoft Research (DAIR.AI weekly roundup)",
        url: null,
        supports: "treating SKILL.md as a trainable parameter, with 52/52 wins across 6 benchmarks",
      },
      {
        label: "NVIDIA MOPD (Multi-Teacher On-Policy Distillation), Pavlo Molchanov",
        url: "https://arxiv.org/pdf/2605.21699",
        supports: "cross-tokenizer distillation lifting a Llama-3.2-1B from MMLU 32 to 46",
      },
      {
        label: "Benjamin Nweke, 'Most AI Agents Fail in Production Because They're Built Backwards', Towards Data Science",
        url: null,
        supports: "the four-layer production agent stack and the goal-first, architecture-as-afterthought failure",
      },
    ],
  },
  // research-intelligence-pipeline
  'research-intelligence-pipeline': {
    tldr: {
      lines: [
        "Most AI research dies as a bookmark because nothing forces it to connect to a product, an architecture decision, or a billable service.",
        "The post's pipeline runs nine signals through consume, connect, ship in one week and comes out with 14+ mapped stack connections, with 7 of 10 papers confirming architecture that was already built.",
        "The consequence is compounding: teams that run research as a pipeline get weekly validation and shipped decisions, while teams that read and bookmark fall behind on decisions they never knew they were making.",
      ],
      keyTerm: "consume, connect, ship",
      inOtherWords:
        "If a piece of research cannot be mapped to something you build, sell, or decide, it does not get posted — and that single rule is what turns reading into shipping.",
    },
    citations: [
      {
        label: "Pavlo Molchanov et al., MOPD: Cross-Tokenizer Multi-Teacher Distillation, NVIDIA Research (arXiv 2605.21699)",
        url: "https://arxiv.org/pdf/2605.21699",
        supports: "that cross-tokenizer distillation lifted Llama-3.2-1B MMLU from 32.05 to 46.32",
      },
      {
        label: "DAIR.AI, Top AI Papers of the Week (@DAIR_AI)",
        url: "https://x.com/DAIR_AI",
        supports: "that SkillOpt, Compiling Workflows, LM Sleep, Life-Harness and AgingBench were the week's papers, with the win counts quoted in the post's table",
      },
      {
        label: "Pejman Pour-Moezzi, Stop Giving Every Agent Its Own Skull (@nurijanian)",
        url: "https://x.com/nurijanian",
        supports: "the claim that agents reproduce the human limitation of knowledge trapped in skulls that do not sync",
      },
      {
        label: "Google Cloud, Architecting the Agentic Data Cloud",
        url: "https://cloud.google.com/transform/shift-system-of-action-architecting-the-agentic-data-cloud-ai",
        supports: "the system-of-action framing the post lists among its research sources",
      },
      {
        label: "Benjamin Nweke, Most AI Agents Fail in Production",
        url: null,
        supports: "the four-layer decision/orchestration/tools/memory architecture attributed to Nweke; the post names the piece but does not link it and the primary URL could not be verified, so none is asserted",
      },
    ],
  },
  // pulled-punch
  'pulled-punch': {
    tldr: {
      lines: [
        "Founders who own both sales and delivery subconsciously pull punches on their own marketing, because they dread the operational headache of onboarding whoever answers.",
        "We solved it by building an operational layer instead of hiring: 51 active clients across 5 industries run through a system that absorbs each new client as context while 90% of the day stays on relationships, sales calls, and strategy.",
        "If growth still feels like more weight arriving, the fix is not more discipline on outreach — it is building the layer so a new client makes the system smarter instead of heavier.",
      ],
      keyTerm: "pulled punch",
      inOtherWords:
        "You are not bad at marketing; you are avoiding the delivery load marketing creates, and the answer is a system that absorbs that load.",
    },
    citations: [
      {
        label: "Andrej Karpathy, \"Software Is Changing (Again),\" Y Combinator AI Startup School, 2025",
        url: "https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again",
        supports: "the Software 3.0 framing: programming LLMs through prompts, context, tools, examples, memory, and instructions, with the context window as the main lever.",
      },
      {
        label: "Daniel Fazio (Cold Email Wizard), on the pulled punch phenomenon, 2026",
        url: null,
        supports: "the quoted definition of the pulled punch phenomenon and the improvement-offer versus new-opportunity positioning.",
      },
      {
        label: "Aaron Wright (Tribute Labs), \"Agentic Capital Markets,\" 2026",
        url: null,
        supports: "the autonomous marketing agent priced at $2,000/month against $20,000/month for a human team, and the \"outsource thinking, not understanding\" line.",
      },
    ],
  },
  // crypto-compliance-after-nexfundai
  'crypto-compliance-after-nexfundai': {
    tldr: {
      lines: [
        "The FBI launched NexFundAI, a real ERC-20 token on Ethereum with real branding and Uniswap liquidity, to catch market makers who would wash trade and pump it.",
        "Operation Token Mirrors produced 18 charges and $25 million seized, with indictments between March and September 2025 and firms including Gotbit, Vortex, CLS Global, and ZM Quant implicated.",
        "Standard token due diligence would have cleared NexFundAI, so the work now is screening counterparties and market makers and getting compliance guarantees in writing.",
      ],
      keyTerm: "Operation Token Mirrors",
      inOtherWords:
        "The government stopped watching crypto fraud from outside and started operating inside it, so not knowing your counterparty is no longer a defense.",
    },
    citations: [
      {
        label: "DOJ Press Release: 18 Individuals and Entities Charged in International Crypto Market Manipulation Operation",
        url: "https://www.justice.gov/usao-ma/pr/eighteen-individuals-and-entities-charged-international-operation-targeting-widespread",
        supports: "the 18 charges and the Operation Token Mirrors sweep the post summarizes",
      },
      {
        label: "TRM Labs: FBI Creates Token Project in Trojan Horse Crypto Operation",
        url: "https://www.trmlabs.com/resources/blog/fbi-creates-token-project-in-trojan-horse-crypto-operation-that-seizes-25-million",
        supports: "the $25 million seizure and the FBI-built token used to catch manipulators",
      },
      {
        label: "Field Effect: How the FBI Used a Fake Crypto Company to Bust Manipulators",
        url: "https://fieldeffect.com/blog/fbis-fake-cryptocurrency-company-used-to-bust-crypto-manipulators",
        supports: "how the undercover token operation was run against market makers",
      },
      {
        label: "Crypto Briefing: FBI NexFundAI Sting: What It Means for Crypto",
        url: "https://cryptobriefing.com/fbi-nexfundai-sting-crypto-manipulation/",
        supports: "background on the NexFundAI sting and its implications for token projects",
      },
    ],
  },
  // agentic-engineer
  'agentic-engineer': {
    tldr: {
      lines: [
        "The larger opportunity in AI is not building models but building businesses where AI is the execution layer, and that is a different discipline from AI engineering.",
        "The model itself remembers nothing between sessions, so reliability comes from the system around it: durable external memory, a five-part definition of done, security-first access control, and four operating laws.",
        "Practitioners who only learn to fine-tune and benchmark are training for work the labs already own, while the SMB and mid-market gap those labs are skipping goes unserved.",
      ],
      keyTerm: "agentic engineering",
      inOtherWords:
        "The money is not in tuning models; it is in building the surrounding system that makes a model produce trustworthy work inside a real business.",
    },
    citations: [
      {
        label: "DAIR.AI: Top AI Papers of the Week (May 11-17, 2026)",
        url: "https://x.com/dair_ai/status/2056018543850754283",
        supports: "recent research showing long conversation histories degrade agent performance, cited for the durable-memory pillar",
      },
      {
        label: "George @nurijanian: /goal for Product Managers",
        url: "https://x.com/nurijanian/status/2055927283991654775",
        supports: "agent loops and definition of done as the alternative to vibe-based instructions",
      },
      {
        label: "Shruti: Zero to AI Engineer Roadmap",
        url: "https://x.com/Shruti_0810/status/2055676059480395990",
        supports: "the 'Zero to AI Engineer' roadmap the post is responding to",
      },
    ],
  },
  // context-beats-compute
  'context-beats-compute': {
    tldr: {
      lines: [
        "A Bitcoin wallet locked for 11 years and holding 5 BTC, roughly $400,000, was recovered by Claude after 7 trillion password guesses and paid recovery services had failed.",
        "The recovery came from connection rather than force: Claude found an older wallet.dat that predated the password change and a bug in btcrecover that was concatenating a shared key with the password.",
        "The lesson for a business is to spend on a context pipeline of connected documents and semantic search rather than on the biggest model, because a 4B model with good retrieval beat a 235B base model.",
      ],
      keyTerm: "contextual intelligence",
      inOtherWords:
        "Seven trillion guesses lost to one good connection, so the leverage sits in the context you give the model, not the compute you buy.",
    },
    citations: [
      {
        label: "Exa Research: How Search Quality Shapes RL Outcomes",
        url: "https://exa.ai/blog/rl-search-outcomes",
        supports: "4B model with Exa semantic search outperforming a 235B base model, with 69% fewer tokens and 62% fewer search calls",
      },
      {
        label: "@cprkrn on X: Bitcoin Wallet Recovery",
        url: "https://x.com/cprkrn/status/2054586810475364536",
        supports: "the 5 BTC recovery from a wallet locked since 2015 after other methods failed",
      },
      {
        label: "Bitcoin.com: Claude AI Recovers 5 BTC Lost Since 2015",
        url: "https://news.bitcoin.com/bitcoiner-dumps-old-computer-files-into-claude-ai-recovers-5-btc-lost-since-2015/",
        supports: "Claude recovering the wallet by analyzing the contents of an old college computer",
      },
    ],
  },
  // system-of-action
  'system-of-action': {
    tldr: {
      lines: [
        "The generation of software that reports what happened is giving way to systems that act on what they find, and that is the line between a system of intelligence and a system of action.",
        "Google Cloud's Agentic Data Cloud paper names three shifts — human to agent scale, reactive to proactive, data to knowledge — and four failure modes, while noting that 90% of enterprise data is unstructured and therefore out of agents' reach.",
        "The reader's test is four questions: does it report or act, does it remember, where is the trust boundary, and does it hold at 10,000 transactions instead of 10.",
      ],
      keyTerm: "system of action",
      inOtherWords:
        "The question worth asking about any AI system is no longer what it can tell you, but whether it can do the work and still know the context tomorrow.",
    },
    citations: [
      {
        label: "Google Cloud, Architecting the Agentic Data Cloud (System of Action framework)",
        url: "https://cloud.google.com/transform/shift-system-of-action-architecting-the-agentic-data-cloud-ai",
        supports: "the three shifts, the intelligence-versus-action distinction, the four structural failures, and the 90% unstructured-data figure, all attributed to Google in the post",
      },
    ],
  },
};
