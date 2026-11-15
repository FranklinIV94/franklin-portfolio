/**
 * Verbatim quotes from the published /about page.
 *
 * This is a READ-ONLY mirror, not copywriting: every string below appears character for
 * character in app/about/page.tsx, and `scripts/verify-webmcp.cjs` fails the build gate if
 * that stops being true (it greps the prerendered /about HTML for each quote). The page file
 * itself is untouched — this layer is additive — so the mirror plus the verbatim check is how
 * the `answer-question` tool stays honest instead of paraphrasing.
 */
const BEATS = [
  {
    n: '01',
    tag: 'Claims',
    title: 'Find out what happened. Write it so it survives a dispute.',
    body: 'Insurance claims teach a discipline nothing else does: the file is the truth, the number has to hold up to someone paid to disagree with it, and “probably” is not a finding. I still work from the file.',
    carry: 'evidence before opinion; every finding with its source.',
  },
  {
    n: '02',
    tag: 'The books',
    title: 'Run the back office owners do at night.',
    body: 'At All Lines Business Solutions I am the COO of a firm that does accounting, payroll, tax and compliance for small businesses. You learn exactly where the hours go, and that most of them go to re-typing the same fact into three systems.',
    carry: 'the acceptance test is the client’s own month, reproduced to the dollar.',
  },
  {
    n: '03',
    tag: 'The fleet',
    title: 'Fix it in our own shop first, then sell what worked.',
    body: 'Prospyr 305 is what came out of automating our own operations. I design the outcome and the acceptance test; a fleet of role-named agents does the building, deploying and auditing around the clock; a person holds the gates. Every action leaves a receipt.',
    carry: 'nothing ships that I could not show a client on their own screen.',
  },
];

const METHOD = [
  {
    k: 'Before a dollar',
    title: 'Assess, then build',
    body: 'Every engagement starts with the AIIO assessment: twelve dimensions, about five minutes, a scored report and a roadmap. We agree on what to build from the report, not from a pitch.',
  },
  {
    k: 'Before a line of code',
    title: 'The test is written first',
    body: 'Acceptance criteria in the client’s words, signed before the build. “The four monthly reports reproduce this month within rounding.” Done means that passes.',
  },
  {
    k: 'Verification',
    title: 'Live, from your seat',
    body: 'Reviews happen on the real system, logged in as you, with the network and console open. I don’t report from a standup or a staging screenshot.',
  },
  {
    k: 'Delivery',
    title: 'Agents by role, not by vendor',
    body: 'A chief-executive agent, an operations agent, a research agent, a deploy agent, an understudy. Each has a scope, a memory and a ledger. Where they run is nobody’s business but ours. That is a security posture, not a secret.',
  },
  {
    k: 'Security',
    title: 'Guards you can watch',
    body: 'SENTINEL audits the AI tools a business has already adopted. Inside our own systems, every tool call passes a deterministic gate before it reaches a model; you can try to break it on the Showcase page.',
  },
  {
    k: 'Governance',
    title: 'Standards before content',
    body: 'What may leave the building, who approves what, and when a human must be in the loop are written down and enforced by the agents themselves. The Agent Code of Conduct is the public version.',
  },
];

/** The "Who I work with" paragraph, verbatim from /about. */
const AUDIENCE =
  'Owner-operators of firms with a back office that keeps not getting done: practices, agencies, contractors, PEOs, law and accounting firms. Based in Florida; clients in Florida, Georgia, Texas, New York and California.';

export { BEATS, METHOD, AUDIENCE };
