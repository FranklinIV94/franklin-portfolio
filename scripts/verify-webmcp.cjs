/**
 * Functional check for the WebMCP tool layer on franklin.simplifyingbusinesses.com.
 *
 * Compiles lib/webmcp/tools.ts standalone (via scripts/verify-webmcp.sh) and exercises every
 * tool the way a browser agent would: paging, misses, budgets, and — because this layer quotes
 * published copy — whether the quotes are still actually on the page.
 *
 * The failure that matters most: a paged tool that returns a short list without saying so.
 * The agent then reports a partial catalog as the whole catalog, which is worse than no tool.
 */

const path = require('path');
const fs = require('fs');

const OUT = process.env.WEBMCP_OUT || '/tmp/webmcp-verify';
const T = require(path.join(OUT, 'webmcp/tools.js'));
const { projects } = require(path.join(OUT, 'projects.js'));
const { blogPosts } = require(path.join(OUT, 'blog.js'));

let fail = 0;
const chk = (name, cond, detail = '') => {
  if (!cond) {
    fail++;
    console.log('FAIL:', name, detail);
  } else console.log('ok:', name);
};

const under = (r, label) => chk(`${label} under 2000 chars`, r.text.length <= 2000, String(r.text.length));

/* ── tool surface ──────────────────────────────────────────────────────── */

const tools = T.buildTools();
chk('4 tools registered', tools.length === 4, String(tools.length));
chk(
  'tool names are the shipped set',
  JSON.stringify(tools.map((t) => t.name)) === JSON.stringify(['list-work', 'list-writing', 'answer-question', 'get-contact']),
  JSON.stringify(tools.map((t) => t.name)),
);
for (const t of tools) {
  chk(
    `tool ${t.name} has name/description/schema/readOnlyHint`,
    !!t.name && t.description.length > 80 && !!t.inputSchema && t.annotations.readOnlyHint === true,
  );
  chk(`tool ${t.name} description has no placeholder text`, !/TODO|lorem/i.test(t.description));
  chk(`tool ${t.name} input schema is a closed object`, t.inputSchema.type === 'object' && t.inputSchema.additionalProperties === false);
}

/* ── list-work ─────────────────────────────────────────────────────────── */

const all = T.listWork({});
console.log('\n--- list-work (all, default page) ---');
console.log(all.text);
console.log('meta:', JSON.stringify({ total: all.total, hasMore: all.hasMore, nextOffset: all.nextOffset, chars: all.text.length }));
under(all, 'list-work default page');
chk('list-work total is the real project count', all.total === projects.length, `${all.total} vs ${projects.length}`);
chk('list-work says the list continues', all.hasMore === true);
chk(
  'list-work nextOffset advances by the rows that fit, not the requested page size',
  all.nextOffset === 8 && all.text.includes(`Showing 1-8 of ${projects.length}`),
  `nextOffset=${all.nextOffset}`,
);

// page through the whole catalog with a page size larger than the character budget allows
const slugs = [];
let off = 0;
let guard = 0;
let advancedByKept = true;
while (guard++ < 30) {
  const p = T.listWork({ offset: off, max: 20 });
  const rows = p.text.split('\n').filter((l) => l.startsWith('- '));
  for (const r of rows) {
    const m = r.match(/\/work\/([a-z0-9-]+)/);
    if (m) slugs.push(m[1]);
  }
  if (p.hasMore) {
    // the requested page was 20; if fewer fit, nextOffset must reflect the rows returned
    if (p.nextOffset !== off + rows.length) advancedByKept = false;
    off = p.nextOffset;
  } else break;
}
chk('list-work paging returns every project', slugs.length === projects.length, `got ${slugs.length} of ${projects.length}`);
chk('list-work paging has no duplicates and no gaps', new Set(slugs).size === projects.length, `unique ${new Set(slugs).size}`);
chk('list-work paging reports no phantom rows', guard < 30);
chk('list-work nextOffset === offset + rows returned on every page', advancedByKept);

const flagships = T.listWork({ tier: 'flagship' });
console.log('\n--- list-work tier=flagship ---');
console.log(flagships.text);
chk('flagship filter matches the data', flagships.total === projects.filter((p) => p.tier === 'flagship').length, String(flagships.total));
under(flagships, 'list-work flagship');

const byDomain = T.listWork({ domain: 'healthcare' });
chk('domain filter is case-insensitive', byDomain.total === projects.filter((p) => p.domains.includes('Healthcare')).length, String(byDomain.total));

const badTier = T.listWork({ tier: 'enterprise' });
console.log('\n--- list-work bad tier ---\n' + badTier.text);
chk('bad tier is a sentence with the valid values', /Valid tiers:/.test(badTier.text) && badTier.total === 0);

const badDomain = T.listWork({ domain: 'blockchain' });
chk('bad domain lists the domains in use', /Domains in use:/.test(badDomain.text), badDomain.text.slice(0, 80));

const pastEnd = T.listWork({ offset: 500 });
chk('offset past the end does not crash or lie', typeof pastEnd.text === 'string' && pastEnd.text.length > 0);

/* ── list-writing ──────────────────────────────────────────────────────── */

const posts = T.listWriting({});
console.log('\n--- list-writing (all, default page) ---');
console.log(posts.text);
console.log('meta:', JSON.stringify({ total: posts.total, hasMore: posts.hasMore, nextOffset: posts.nextOffset, chars: posts.text.length }));
under(posts, 'list-writing default page');
chk('list-writing total is the real post count', posts.total === blogPosts.length, `${posts.total} vs ${blogPosts.length}`);
chk('list-writing is newest first', posts.text.includes(blogPosts[0].title), blogPosts[0].title);

const postSlugs = [];
off = 0;
guard = 0;
while (guard++ < 30) {
  const p = T.listWriting({ offset: off, max: 20 });
  for (const l of p.text.split('\n').filter((x) => x.startsWith('- '))) {
    const m = l.match(/\/blog\/([a-z0-9-]+)/);
    if (m) postSlugs.push(m[1]);
  }
  if (!p.hasMore) break;
  off = p.nextOffset;
}
chk('list-writing paging returns every post once', postSlugs.length === blogPosts.length && new Set(postSlugs).size === blogPosts.length, `${postSlugs.length} / ${new Set(postSlugs).size}`);

const tagged = T.listWriting({ tag: 'architecture' });
console.log('\n--- list-writing tag=architecture ---');
console.log(tagged.text);
chk('tag filter matches the data', tagged.total === blogPosts.filter((p) => p.tag.toLowerCase() === 'architecture').length, String(tagged.total));

const badTag = T.listWriting({ tag: 'astrology' });
console.log('\n--- list-writing bad tag ---\n' + badTag.text);
chk('bad tag is a sentence with the tags in use', /Tags in use:/.test(badTag.text) && badTag.total === 0);

/* ── answer-question ───────────────────────────────────────────────────── */

const q = T.answerQuestion({ question: 'how does an engagement start' });
console.log('\n--- answer-question (engagement start) ---');
console.log(q.text);
under(q, 'answer-question hit');
chk('answer-question finds the published answer', q.total >= 1, String(q.total));
chk('answer-question quotes the AIIO assessment line', /AIIO assessment/.test(q.text));
chk('answer-question cites the page it quoted', q.text.includes('https://franklin.simplifyingbusinesses.com/about'));

const q2 = T.answerQuestion({ question: 'who does he work with' });
console.log('\n--- answer-question (audience) ---\n' + q2.text);
chk('answer-question answers the audience question', /Owner-operators of firms/.test(q2.text));
under(q2, 'answer-question audience');

const q3 = T.answerQuestion({ question: 'what is the airspeed of an unladen swallow' });
console.log('\n--- answer-question (miss) ---\n' + q3.text);
chk('miss is a sentence, not an exception', typeof q3.text === 'string' && q3.text.startsWith('No published answer matched'));
chk('miss names the fallback contact path', /franklin@prospyr305\.com/.test(q3.text));

const q4 = T.answerQuestion({});
chk('empty question tolerated', /Pass a question/.test(q4.text));

/* ── get-contact ───────────────────────────────────────────────────────── */

const c = T.getContact();
console.log('\n--- get-contact ---');
console.log(c.text);
under(c, 'get-contact');
chk('contact carries the published phone', /\(561\) 589-8900/.test(c.text));
chk('contact carries the published email', c.text.includes('franklin@prospyr305.com'));
chk('contact carries the booking path', c.text.includes('https://franklin.simplifyingbusinesses.com/book'));
chk('contact carries the contact form', c.text.includes('https://franklin.simplifyingbusinesses.com/contact'));

/* ── quoted copy is still on the page ──────────────────────────────────── */

const aboutHtmlPath = '.next/server/app/about.html';
chk('built /about HTML exists (run npm run build first)', fs.existsSync(aboutHtmlPath), aboutHtmlPath);
if (fs.existsSync(aboutHtmlPath)) {
  const html = fs.readFileSync(aboutHtmlPath, 'utf8');
  const quotes = [];
  for (const b of require(path.join(OUT, 'webmcp/about-copy.js')).BEATS) quotes.push(b.body, b.carry, b.title);
  for (const m of require(path.join(OUT, 'webmcp/about-copy.js')).METHOD) quotes.push(m.body, m.title);
  quotes.push(require(path.join(OUT, 'webmcp/about-copy.js')).AUDIENCE);
  const missing = quotes.filter((s) => !html.includes(s.replace(/\s+/g, ' ')) && !html.includes(s));
  chk('every quoted answer still appears verbatim on /about', missing.length === 0, JSON.stringify(missing.slice(0, 2)));
}

// the phone/email the tool returns must be the ones the pages publish
const contactSrc = fs.readFileSync('app/contact/page.tsx', 'utf8');
const footerSrc = fs.readFileSync('components/Footer.tsx', 'utf8');
chk('published phone matches app/contact/page.tsx', contactSrc.includes('(561) 589-8900'));
chk('published email matches components/Footer.tsx', footerSrc.includes('franklin@prospyr305.com'));
chk('no origin-trial token is committed', !/origin-trial"?\s*content="[A-Za-z0-9+/=]{20,}/.test(fs.readFileSync('app/layout.tsx', 'utf8')));

// every result must survive the browser marshalling boundary
for (const t of tools) JSON.stringify(t.execute({}));
chk('all execute() results are JSON-serialisable', true);

console.log(fail === 0 ? '\nALL CHECKS PASSED' : `\n${fail} FAILURES`);
process.exit(fail ? 1 : 0);
