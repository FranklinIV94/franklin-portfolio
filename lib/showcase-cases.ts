// lib/showcase-cases.ts — the showcase case studies as DATA.
//
// Franklin approved these five as written (2026-10-18). Adding the next engagement means
// appending one object here; the page renders whatever is in the array and never needs a layout
// change.
//
// Editorial rules that make a receipt a receipt (do not relax them to fill six lines):
//   * Six COUNTABLE facts per case. If a fact cannot be counted, it is not a receipt line.
//   * No fees, no client identifiers, no hostnames, no agent codenames, no incident dates.
//   * `decision` states what was decided and why it beat the obvious alternative — that is the
//     part a PM or designer is actually judged on, and the part the old page was missing.
//   * `gates` names the human brakes, because "agents do the hours" only lands if you say where
//     a person sits.

export interface ShowcaseCase {
  tag: string;
  duration: string;
  title: string;
  sub: string;
  situation: string;
  decision: string;
  shipped: string;
  receipt: string;
  /** exactly six countable facts — label / value */
  lines: Array<[string, string]>;
  gates: string;
  built: string;
  /** true when the receipt line is a warning rather than a clean pass */
  warn?: number[];
}

export const showcaseCases: ShowcaseCase[] = [
  {
    tag: 'Healthcare · product',
    duration: '10 days',
    title: 'The chart the physician would actually open',
    sub: 'A family-medicine practice with a working admin portal nobody used.',
    situation:
      'Data model sound, screens generic. The physician had a paper-chart reference he liked and a portal he never opened.',
    decision:
      'Visual first, now. Build to his reference pixel-for-pixel so he could see his own chart, and write the acceptance flow before touching code: open visit → vitals → diagnosis → signed note, under three minutes, zero console errors.',
    shipped:
      'Paper-chart UI with body map, vitals trend tiles, controlled observation codes, consent capture, draft/sign notes, session refresh, a one-screen daily flow from the schedule.',
    receipt:
      'Verified live from the owner’s seat after each deploy. The acceptance flow surfaced a platform bug: every update call had been failing silently since launch, hidden behind a generic error. Fixed and proved across all eight write paths.',
    lines: [
      ['deploys verified live', '11'],
      ['data calls on chart load', '13/13 · 200'],
      ['acceptance flow', '< 3 min · 0 errors'],
      ['write paths proven', '8 tables'],
      ['bugs found in acceptance', '1 platform-wide'],
      ['real patient data copied', '0'],
    ],
    warn: [4],
    gates: 'review · PHI · deploy',
    built:
      'Stack: Next.js, Postgres, role-scoped data API. Roles: engineering agent built; ops agent reviewed from the owner’s browser; founder approved each increment. Rule that mattered: a reference build (HTML) was handed over instead of a Figma file, so the port was component-for-component.',
  },
  {
    tag: 'Healthcare billing · platform',
    duration: 'In build',
    title: 'Off a desktop database, with acceptance defined on day one',
    sub: 'A medical-management firm billing six carriers from a shared drive.',
    situation:
      'Monthly clerk reports and per-carrier rollups produced from a legacy desktop file on a flat network share. No role separation, no backup that ran itself, PHI throughout.',
    decision:
      'Define “platform acceptance” in writing before the build, so the balance payment can never become a dispute: the four clerk reports reproduce the current month within rounding, six carrier rollups match, three named users log in with the agreed roles, a restore from the app’s own backup succeeds.',
    shipped:
      'Data model from the captured schema, the four reports and six rollups as the first deliverables, role model, nightly versioned backup as a feature, synthetic data in the legacy shape so the build never waited on the client.',
    receipt:
      'The access-control gap was named to the client as capabilities the new platform enforces, not as an audit of their IT vendor. Deposit booked as deferred revenue until acceptance, because that is what it is.',
    lines: [
      ['acceptance criteria signed', '4 · written first'],
      ['carrier rollups in scope', '6'],
      ['roles', '4'],
      ['client contact needed, wk 1', '0 days'],
      ['compliance gap found', '1 · handled'],
      ['build blocked on client data', '0 days'],
    ],
    warn: [4],
    gates: 'BAA · money · PHI',
    built:
      'Stack: local relational store chosen and the reason written down; app-owned backups; RBAC with audit log. Roles: engineering agent builds from synthetic data; CEO agent drafts client comms; founder sends everything. Finance call: card deposit fee measured, ACH offered for the balance.',
  },
  {
    tag: 'Own product · operations',
    duration: '2 sessions',
    title: 'The audit we ran on our own hub',
    sub: 'An internal operations portal built by agents, reviewed the way a client’s would be.',
    situation:
      'Thirty-one pages, a knowledge base, invoicing, an approvals queue. Everybody assumed it worked.',
    decision:
      'Click every page from the owner’s session with the network open, then rank what changes what the numbers mean above what merely looks wrong.',
    shipped:
      'A 46-finding review in fix-first order (three pages computing three different A/R totals from one database; a three-day-old irreversible approval nobody saw; a dead endpoint retried every five seconds), then a second pass that caught the invoice form crashing on keystroke.',
    receipt:
      'Every finding carries the request, status code or console line that proves it, and an acceptance test the builder can run. The doc is the work order.',
    lines: [
      ['pages opened', '31'],
      ['findings, pass 1', '46'],
      ['"fix first" tier', '8'],
      ['crash reproduced, pass 2', '1 · with stack'],
      ['records created or changed', '0'],
      ['findings without evidence', '0'],
    ],
    warn: [2, 3],
    gates: 'evidence per finding',
    built:
      'Method: browser automation from the owner’s authenticated session; network and console captured per action; nothing submitted. Output: prioritised handoff with acceptance tests, written for the engineering agent that owns the repo.',
  },
  {
    tag: 'Brand · film',
    duration: '1 evening',
    title: 'A 30-second brand film, locked at the sixth animatic',
    sub: 'Six businesses, one night, the owner walks back in at 6:02 AM.',
    situation:
      'A services brand with range that reads as a list. Four director’s notes: high end, cinematic cuts, suspense, a soft narrator.',
    decision:
      'Show range, never list it. Six rooms, six kinds of work, one clock running to dawn. Designed for silence first, because most feed views are muted; the voice is the reward for sound on.',
    shipped:
      'Storyboard with shot timing to the tenth of a second, generated footage from locked frames, three voice reads, logo reveal as its own piece, 16:9 and 9:16 masters, brand kit and channel art the same evening.',
    receipt:
      'Footage rules written before generation: no faces as subject, no readable UI, no client marks, no robots. Locked at v6 after a numbered review score, not a feeling.',
    lines: [
      ['runtime', '30.0 s'],
      ['shots', '20'],
      ['animatics to lock', '6'],
      ['owner score at lock', '8 / 10'],
      ['faces as subject', '0 · by rule'],
      ['aspect masters delivered', '2'],
    ],
    gates: 'delivered · film · kit · channel',
    built:
      'Pipeline: frames → generated footage (three takes per shot) → voice → assembly to voice timestamps → one caption layer across three aspect ratios. Rule that mattered: the brand name is said once, late, after two seconds of silence.',
  },
  {
    tag: 'Governance · content',
    duration: '1 day',
    title: 'We found our own leak, then wrote the rule that stops the next one',
    sub: 'A paid course library authored from internal operating notes.',
    situation:
      'A routine scan of sellable study sheets found internals that should never leave the building: addresses, hostnames, agent-to-host mappings, a client domain, fees.',
    decision:
      'Redact line-for-line the same day, then publish a standard, not a memo: a never-ship list with the safe substitute for each class, a mechanical scan anyone can run, a four-step gate with a second reviewer, and named owners.',
    shipped:
      '22 lessons, 90 lines redacted with quiz structure intact; the scan script; the pre-publish gate every agent now runs before anything goes public — including this page.',
    receipt:
      'The standard is why no client, host or fee appears above. A PASS line with a scan hash is required before publish; a push without one is a policy violation, not a shortcut.',
    lines: [
      ['lessons redacted', '22'],
      ['lines', '90'],
      ['never-ship classes defined', '12'],
      ['reviewers per publish', '2 · author ≠ reviewer'],
      ['this page, scan hits', '0'],
      ['gate', 'PASS + hash'],
    ],
    gates: 'IP gate · pass + hash',
    built:
      'Tooling: a regex sweep over markdown, JSON blocks, HTML comments and code fences; a block-structure-preserving redaction script. Ownership: standard owned by the CEO agent, waivers only by the founder.',
  },
];

// The four craft demos kept from the previous page, renamed and demoted to a strip.
// `file` is the artifact under /public; titles no longer say "Project A/B/C/D".
export const craftStudies: Array<{ title: string; sub: string; file: string; bg: string; blobs: string[] }> = [
  {
    title: 'Blur mesh · weather card',
    sub: 'Solid shapes → blurred wash → clean UI',
    file: '/showcase/design-craft/project-a-weather-card.html',
    bg: '#f6efe6',
    blobs: ['#ff7a1a', '#ffb347'],
  },
  {
    title: 'Shape → gradient → screen',
    sub: 'Three themes, three stages each',
    file: '/showcase/design-craft/project-b-posters.html',
    bg: '#eef3ff',
    blobs: ['#2563eb', '#7dd3fc'],
  },
  {
    title: 'Mesh component system',
    sub: 'Tokens, themed background, four components',
    file: '/showcase/design-craft/project-c-component-system.html',
    bg: '#faf7f2',
    blobs: ['#f97316', '#fdba74', '#1f2937'],
  },
  {
    title: 'Motion studies',
    sub: 'Drift, eased intensity, press feedback',
    file: '/showcase/design-craft/project-d-motion.html',
    bg: '#fff3e8',
    blobs: ['#fb923c', '#fed7aa'],
  },
];
