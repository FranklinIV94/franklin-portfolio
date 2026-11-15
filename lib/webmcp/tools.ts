/**
 * WebMCP tools for franklin.simplifyingbusinesses.com.
 *
 * A browser agent (Chrome 149+ / Edge 150+, via the WebMCP origin trial) can call these
 * instead of crawling the portfolio and guessing. Every tool is READ-ONLY — there is no form
 * submission, no booking, no state change — and every answer is capped, because an unbounded
 * tool result costs the agent the same context the page did.
 *
 * Why this file has no DOM in it: `lib/webmcp-tools.ts` is imported by the browser *and*
 * compiled standalone by `scripts/verify-webmcp.cjs`, so the answers can be exercised without
 * a browser. `components/WebMcpTools.tsx` is the only DOM-aware part.
 *
 * Rules that are not negotiable (see docs: the reference implementation in prospyr305-com):
 *  - the description says WHEN to use the tool, not what it is
 *  - never return a silent short list: always the real total + hasMore/nextOffset
 *  - errors are sentences an agent can act on, never exceptions
 *  - nothing here may invent a title, a date, a claim or a contact detail: projects come from
 *    `lib/projects.ts`, posts from `lib/blog.ts`, answers from `lib/webmcp/about-copy.ts` (a
 *    verbatim mirror of the published /about copy, checked against the built HTML by
 *    `scripts/verify-webmcp.cjs`), and contact details from `lib/site.ts`, whose strings are
 *    the ones published on /contact and in the site footer
 */
import { projects, type Project } from '../projects';
import { blogPosts, type BlogPost } from '../blog';
import { BEATS, METHOD, AUDIENCE } from './about-copy';
import { SITE, CONTACT, PATHS } from '../site';

export const MAX_CHARS = 2000;
const DEFAULT_PAGE = 8;

export type ToolResult = {
  text: string;
  /** present on list-style answers so an agent never mistakes a page for the whole set */
  total?: number;
  hasMore?: boolean;
  nextOffset?: number;
  trimmed?: boolean;
};

/* ── helpers ───────────────────────────────────────────────────────────── */

function clip(s: string, n: number): string {
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length <= n ? t : t.slice(0, n - 1).trimEnd() + '…';
}

const url = (path: string) => `${SITE.url}${path}`;

/**
 * Packs as many rows as fit under the character cap and reports the real count.
 *
 * The count matters more than the cap: if the caller asked for 20 rows and only 8 fit,
 * `nextOffset` must advance by 8 — not 20 — or the agent silently skips everything in
 * between and reports a partial list as the complete one.
 */
function packRows(
  header: string,
  rows: string[],
  footer: (kept: number) => string,
): { text: string; kept: number } {
  const reserve = 220; // room for the footer, which names the real total
  const kept: string[] = [];
  let used = header.length + 2;
  for (const row of rows) {
    if (used + row.length + 2 > MAX_CHARS - reserve) break;
    kept.push(row);
    used += row.length + 2;
  }
  // Never return zero rows for a non-empty page: one over-long row is still an answer.
  if (kept.length === 0 && rows.length > 0) kept.push(clip(rows[0], MAX_CHARS - reserve - header.length - 40));
  const body = kept.length ? '\n' + kept.join('\n') : '';
  const text = header + body + '\n' + footer(kept.length);
  // The budget above already accounts for the footer, so this only fires on a pathological
  // row; newlines are preserved in the normal path because the line structure is the answer.
  return { text: text.length > MAX_CHARS ? clip(text, MAX_CHARS) : text, kept: kept.length };
}

const STOP = new Set([
  'the', 'and', 'for', 'you', 'your', 'our', 'with', 'that', 'this', 'what', 'how', 'does',
  'did', 'are', 'can', 'will', 'much', 'cost', 'costs', 'into', 'from', 'have', 'has', 'was',
  'were', 'who', 'why', 'when', 'where', 'which', 'about', 'any', 'all', 'his', 'her', 'him',
  'they', 'them', 'their', 'she',
]);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP.has(t));
}

function score(haystack: string, needles: string[]): number {
  const h = ' ' + tokens(haystack).join(' ') + ' ';
  let n = 0;
  for (const t of needles) if (h.includes(' ' + t)) n++;
  return n;
}

/* ── tools ─────────────────────────────────────────────────────────────── */

const WORK_SORTED: Project[] = [...projects].sort(
  (a, b) => a.order - b.order || a.title.localeCompare(b.title),
);

function workRow(p: Project): string {
  return `- ${p.title} — ${clip(p.tagline, 120)} [${p.category}${p.tier === 'flagship' ? ', flagship' : ''}; ${p.timeline}] ${url(`/work/${p.slug}`)}`;
}

export function listWork(
  input: { tier?: string; category?: string; domain?: string; offset?: number; max?: number } = {},
): ToolResult {
  const offset = Number.isFinite(input.offset) ? Math.max(0, Number(input.offset)) : 0;
  const max = Number.isFinite(input.max) ? Math.min(20, Math.max(1, Number(input.max))) : DEFAULT_PAGE;
  const tier = (input.tier ?? '').trim().toLowerCase();
  const category = (input.category ?? '').trim().toLowerCase();
  const domain = (input.domain ?? '').trim().toLowerCase();

  let set = WORK_SORTED;
  if (tier) {
    set = set.filter((p) => p.tier === tier);
    if (set.length === 0) {
      const tiers = Array.from(new Set(projects.map((p) => p.tier)));
      return {
        text: `No project is filed as tier '${input.tier}'. Valid tiers: ${tiers.join(', ')} (omit the argument for all ${projects.length}).`,
        total: 0,
      };
    }
  }
  if (category) {
    set = set.filter((p) => p.category.toLowerCase() === category.replace(/s$/, ''));
    if (set.length === 0) {
      const cats = Array.from(new Set(projects.map((p) => p.category)));
      return {
        text: `No project is filed as category '${input.category}'. Valid categories: ${cats.join(', ')}.`,
        total: 0,
      };
    }
  }
  if (domain) {
    set = set.filter((p) => p.domains.some((d) => d.toLowerCase().includes(domain)));
    if (set.length === 0) {
      const domains = Array.from(new Set(projects.flatMap((p) => p.domains))).sort();
      return {
        text: `No project is filed under '${input.domain}'. Domains in use: ${domains.join(', ')}.`,
        total: 0,
      };
    }
  }

  const window = set.slice(offset, offset + max);
  const filters = [tier, category, domain].filter(Boolean).join(', ');
  const header =
    `${set.length} published project${set.length === 1 ? '' : 's'}${filters ? ` (${filters})` : ''}` +
    `${offset > 0 ? `, from #${offset + 1}` : ''}. Format: title — what it does [category; when] url.`;
  const packed = packRows(header, window.map(workRow), (kept) => {
    const end = offset + kept;
    return end < set.length
      ? `Showing ${offset + 1}-${end} of ${set.length}. Next page: offset=${end}.`
      : `Showing ${offset + 1}-${end} of ${set.length}. That is the complete list.`;
  });
  const nextOffset = offset + packed.kept;
  return {
    text: packed.text,
    total: set.length,
    hasMore: nextOffset < set.length,
    nextOffset: nextOffset < set.length ? nextOffset : undefined,
  };
}

const POSTS_SORTED: BlogPost[] = [...blogPosts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

function postRow(p: BlogPost): string {
  return `- "${p.title}" — ${p.date} · ${p.tag}. ${clip(p.excerpt, 150)} ${url(`/blog/${p.slug}`)}`;
}

export function listWriting(
  input: { tag?: string; offset?: number; max?: number } = {},
): ToolResult {
  const offset = Number.isFinite(input.offset) ? Math.max(0, Number(input.offset)) : 0;
  const max = Number.isFinite(input.max) ? Math.min(20, Math.max(1, Number(input.max))) : DEFAULT_PAGE;
  const tag = (input.tag ?? '').trim();

  let set = POSTS_SORTED;
  if (tag) {
    const t = tag.toLowerCase().replace(/s$/, '');
    set = set.filter((p) => p.tag.toLowerCase().replace(/s$/, '') === t);
    if (set.length === 0) {
      const tags = Array.from(new Set(blogPosts.map((p) => p.tag))).sort();
      return {
        text: `No published essay is tagged '${tag}'. Tags in use: ${tags.join(', ')} (omit the argument for all ${blogPosts.length}).`,
        total: 0,
      };
    }
  }

  const window = set.slice(offset, offset + max);
  const header =
    `${set.length} published essay${set.length === 1 ? '' : 's'}${tag ? ` tagged ${tag}` : ''}` +
    `${offset > 0 ? `, from #${offset + 1}` : ''}, newest first. Format: title — date · tag. excerpt url`;
  const packed = packRows(header, window.map(postRow), (kept) => {
    const end = offset + kept;
    return end < set.length
      ? `Showing ${offset + 1}-${end} of ${set.length}. Next page: offset=${end}.`
      : `Showing ${offset + 1}-${end} of ${set.length}. That is the complete list.`;
  });
  const nextOffset = offset + packed.kept;
  return {
    text: packed.text,
    total: set.length,
    hasMore: nextOffset < set.length,
    nextOffset: nextOffset < set.length ? nextOffset : undefined,
  };
}

/**
 * The answer index. Questions are navigational labels; every answer body is a verbatim
 * quote of a string /about renders (BEATS, METHOD, AUDIENCE in lib/about-content.ts).
 */
type QA = { q: string; a: string; source: string };

const QA_INDEX: QA[] = [
  {
    q: 'How did Franklin get from insurance claims to AI systems?',
    a: `${BEATS[0].title} ${BEATS[0].body} Carried forward: ${BEATS[0].carry}`,
    source: url(PATHS.about),
  },
  {
    q: 'What does he do at All Lines Business Solutions?',
    a: `${BEATS[1].title} ${BEATS[1].body} Carried forward: ${BEATS[1].carry}`,
    source: url(PATHS.about),
  },
  {
    q: 'What is Prospyr 305 and what does the agent fleet do?',
    a: `${BEATS[2].title} ${BEATS[2].body} Carried forward: ${BEATS[2].carry}`,
    source: url(PATHS.about),
  },
  {
    q: 'How does an engagement start? What happens before a project is paid for?',
    a: `${METHOD[0].title}. ${METHOD[0].body}`,
    source: url(PATHS.about),
  },
  {
    q: 'What does done mean? How is the acceptance test set before a build?',
    a: `${METHOD[1].title}. ${METHOD[1].body}`,
    source: url(PATHS.about),
  },
  {
    q: 'How are reviews and verification done? Do you demo on staging?',
    a: `${METHOD[2].title}. ${METHOD[2].body}`,
    source: url(PATHS.about),
  },
  {
    q: 'Who does the building? Are agents or people delivering the work?',
    a: `${METHOD[3].title}. ${METHOD[3].body}`,
    source: url(PATHS.about),
  },
  {
    q: 'How is security handled? What is SENTINEL?',
    a: `${METHOD[4].title}. ${METHOD[4].body}`,
    source: url(PATHS.about),
  },
  {
    q: 'What governance or standards does he follow?',
    a: `${METHOD[5].title}. ${METHOD[5].body}`,
    source: url(PATHS.about),
  },
  {
    q: 'Who does he work with? What kind of clients and where?',
    a: AUDIENCE,
    source: url(PATHS.about),
  },
];

export function answerQuestion(input: { question?: string } = {}): ToolResult {
  const question = (input.question ?? '').trim();
  if (!question) {
    return {
      text:
        `Pass a question, for example {"question":"how does an engagement start"}. ` +
        `${QA_INDEX.length} published answers are indexed, all quoted verbatim from ${url(PATHS.about)}.`,
      total: QA_INDEX.length,
    };
  }
  // A question made entirely of stopwords ("who does he work with") still has to resolve:
  // fall back to the plain words before giving up and returning a miss.
  const plain = question.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2);
  const meaningful = tokens(question);
  const needles = meaningful.length ? meaningful : plain;
  // The question label weighs heavier than the body: "who does he work with" is three
  // words of stoplist, and without the weighting four entries that merely contain "work"
  // outrank the one entry actually about his clients.
  const ranked = QA_INDEX.map((a) => ({ a, s: 3 * score(a.q, needles) + score(a.a, needles) }))
    .filter((r) => r.s >= Math.min(2, Math.max(1, needles.length)))
    .sort((x, y) => y.s - x.s);

  if (ranked.length === 0) {
    const near = QA_INDEX.map((a) => ({ a, s: score(a.q, needles) }))
      .filter((r) => r.s > 0)
      .sort((x, y) => y.s - x.s)
      .slice(0, 3)
      .map((r) => r.a.q);
    return {
      text:
        `No published answer matched '${question}'.` +
        (near.length ? ` Closest published answers: ${near.join('; ')}.` : '') +
        ` ${QA_INDEX.length} answers are published at ${url(PATHS.about)}. For anything not published, email ${CONTACT.email} or book 15 minutes at ${url(CONTACT.booking)}.`,
      total: 0,
    };
  }

  const shown = ranked.slice(0, 3);
  const header = `${shown.length} of ${ranked.length} published answers matched. Quotes are verbatim from ${url(PATHS.about)}.`;
  const packed = packRows(
    header,
    shown.map((r) => `Q: ${r.a.q}\nA: ${clip(r.a.a, 700)}\nSource: ${r.a.source}`),
    (kept) =>
      kept < Math.min(3, ranked.length)
        ? `Only ${kept} of ${shown.length} fit in one answer. Ask a narrower question for the rest.`
        : ranked.length > shown.length
          ? `${ranked.length - shown.length} more published answers matched; ask a narrower question.`
          : '',
  );
  return {
    text: packed.text,
    total: ranked.length,
    hasMore: ranked.length > packed.kept,
    trimmed: shown.some((r) => r.a.a.length > 700),
  };
}

export function getContact(): ToolResult {
  const text = [
    `${SITE.name} — AI business solutions architect, agentic engineering. COO of All Lines Business Solutions, founder of Prospyr 305. ${SITE.locale}.`,
    `Phone: ${CONTACT.phone} (call or text).`,
    `Email: ${CONTACT.email}`,
    `Contact form: ${url(CONTACT.form)}`,
    `Book a 15-minute call: ${url(CONTACT.booking)}`,
    `Work: ${url(PATHS.work)}`,
    `Writing: ${url(PATHS.writing)} (RSS: ${url(PATHS.rss)})`,
    `First step for most engagements: ${METHOD[0].title}. ${METHOD[0].body}`,
    `The 15-minute call is no deck: bring the work that keeps not getting done, and leave with the acceptance test we would write for it.`,
  ].join('\n');
  return { text: clip(text, MAX_CHARS) };
}

/* ── registration payload ──────────────────────────────────────────────── */

export type ToolDef = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: true };
  execute: (input: any) => ToolResult;
};

export const READ_ONLY = { readOnlyHint: true } as const;

export function buildTools(): ToolDef[] {
  const domains = Array.from(new Set(projects.flatMap((p) => p.domains))).sort();
  const tags = Array.from(new Set(blogPosts.map((p) => p.tag))).sort();

  return [
    {
      name: 'list-work',
      description:
        'Lists the projects and systems this architect has actually shipped, with what each one does, its category and when it ran. Use when the task needs evidence of what he has built, a comparable past project, or the depth behind a claim on the site. Read-only. Paged: always check hasMore/nextOffset before reporting a list as complete.',
      inputSchema: {
        type: 'object',
        properties: {
          tier: { type: 'string', enum: ['flagship', 'selected', 'archive'], description: 'flagship = the hand-picked case studies. Omit for everything.' },
          category: { type: 'string', enum: ['Production', 'Hackathon', 'Internal'], description: 'Filter by how the project shipped.' },
          domain: { type: 'string', enum: domains, description: 'Filter by industry or technical domain.' },
          offset: { type: 'integer', minimum: 0, description: 'Start position for paging (default 0).' },
          max: { type: 'integer', minimum: 1, maximum: 20, description: 'Page size (default 8, max 20).' },
        },
        additionalProperties: false,
      },
      annotations: READ_ONLY,
      execute: (i) => listWork(i ?? {}),
    },
    {
      name: 'list-writing',
      description:
        'Lists the essays this architect has published, newest first, with date, topic tag and a one-line summary. Use when the task needs his stated position on AI, agent architecture, governance or the business of building systems, or a citation with a date. Read-only. Paged: always check hasMore/nextOffset before reporting a list as complete.',
      inputSchema: {
        type: 'object',
        properties: {
          tag: { type: 'string', enum: tags, description: 'Filter by topic tag. Omit for everything.' },
          offset: { type: 'integer', minimum: 0, description: 'Start position for paging (default 0).' },
          max: { type: 'integer', minimum: 1, maximum: 20, description: 'Page size (default 8, max 20).' },
        },
        additionalProperties: false,
      },
      annotations: READ_ONLY,
      execute: (i) => listWriting(i ?? {}),
    },
    {
      name: 'answer-question',
      description:
        "Answers a question about how this architect works, what he runs, how a project starts and finishes, how security and governance are handled, and who he works with — quoted verbatim from the published /about page rather than paraphrased. Use when the user asks how he operates, what he would do first, or whether he is a fit. Read-only.",
      inputSchema: {
        type: 'object',
        properties: {
          question: { type: 'string', maxLength: 300, description: "The question in the user's own words." },
        },
        required: ['question'],
        additionalProperties: false,
      },
      annotations: READ_ONLY,
      execute: (i) => answerQuestion(i ?? {}),
    },
    {
      name: 'get-contact',
      description:
        'Returns how to reach this architect: phone, email, contact form and the 15-minute booking link, plus the standard first step in an engagement. Use when the user wants to talk to him, asks for availability, or needs the next action. Read-only: it returns details and never submits anything.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: READ_ONLY,
      execute: () => getContact(),
    },
  ];
}
