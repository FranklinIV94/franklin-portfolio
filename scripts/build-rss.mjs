#!/usr/bin/env node
/**
 * Build rss.xml from the HTML this build actually produced.
 *
 * WHY NOT A ROUTE HANDLER: the post bodies are JSX inside app/blog/<slug>/page.tsx —
 * there is no markdown or CMS behind them, so the only copy of the prose is the
 * rendered markup. Emitting content:encoded therefore needs the rendered HTML, and
 * Next 14 refuses to let an app-router route import react-dom/server. Reading the
 * build output is the honest route: the feed contains exactly the bytes a reader
 * would get at the post URL.
 *
 * Runs as `postbuild`, after `next build` has written .next/server/app/blog/*.html.
 * Writes public/rss.xml, which Vercel collects with the rest of the output.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = "https://franklin.simplifyingbusinesses.com";
const OUT = path.join(ROOT, "public", "rss.xml");
const POSTS_DIR = path.join(ROOT, ".next", "server", "app", "blog");

// ── metadata: parsed from lib/blog.ts so the feed and the site share one source.
// Split on object boundaries first, then pull each field independently. A single
// ordered regex over the whole file silently matched 11 of 23 entries, because not
// every entry lists its fields in the same order — and it still wrote a feed.
const blogSrc = readFileSync(path.join(ROOT, "lib", "blog.ts"), "utf8");
const posts = [];
{
  const chunks = blogSrc.split(/\{\s*\n?\s*slug:/).slice(1);
  for (const chunk of chunks) {
    const slug = chunk.match(/^\s*['"]([^'"]+)['"]/)?.[1];
    const title = chunk.match(/title:\s*\n?\s*['"]((?:[^'\\]|\\.)*)['"]/)?.[1];
    const dateISO = chunk.match(/dateISO:\s*['"]([^'"]+)['"]/)?.[1];
    const tag = chunk.match(/tag:\s*['"]([^'"]+)['"]/)?.[1];
    const excerpt = chunk.match(/excerpt:\s*\n?\s*['"]((?:[^'\\]|\\.)*)['"]/s)?.[1];
    if (slug && title && dateISO) {
      posts.push({
        slug,
        title: unesc(title),
        dateISO,
        tag: tag || "Essay",
        excerpt: unesc(excerpt || ""),
      });
    }
  }
}

function unesc(s) {
  return s.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function cdata(html) {
  // "]]>" is illegal inside CDATA; the only correct escape is to split it.
  return `<![CDATA[${html.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}
function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&apos;/g, "'")
    .replace(/\s+/g, " ").trim();
}

function articleHtml(html) {
  const m = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  let body = m ? m[1] : "";
  if (!body) return "";

  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");

  // The author's own standfirst lives in the page header. Capture it before the
  // header comes off — it is the best description on the page, written by hand,
  // and the TL;DR block below it is not.
  const headerMatch = body.match(/^\s*<header[\s\S]*?<\/header>/i);
  const standfirst = headerMatch
    ? (() => {
        const ps = [...headerMatch[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
          .map((m) => stripTags(m[1]))
          .filter((t) => t.length > 60);
        return ps[0] || "";
      })()
    : "";

  body = body
    // The page header holds a "Blog · <date>" pill and a kicker paragraph written
    // for the page layout. In a reader that reads as chrome, and the date is
    // already in pubDate, so the header comes off the top of the item body.
    .replace(/^\s*<header[\s\S]*?<\/header>/i, "")
    .replace(/\s(?:href|src)="\/(?!\/)/g, (mm) => mm.replace('="/', `="${BASE}/`))
    .trim();

  return { body, standfirst };
}

/**
 * Description = as much of the opening prose as fits, not one sentence.
 *
 * A single first paragraph averaged 188 characters on this blog — barely better
 * than the hand-written excerpts it replaces. Accumulating paragraphs until the
 * text is worth reading gives a reader something to decide on, and because it is
 * taken from the body it cannot drift short as posts get longer.
 */
function openingProse(html, target = 320, max = 3) {
  // Start after the first heading where one exists: the TL;DR and "In other words"
  // blocks sit above the first <h2>, and quoting them as the description reads like
  // a summary of a summary.
  const h2 = html.search(/<h2[^>]*>/i);
  const scope = h2 > 0 ? html.slice(h2) : html;
  const paras = [...scope.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => stripTags(m[1]))
    .filter((t) => t.length > 80)
    .filter((t) => !/^(TL;?DR|In other words|Key takeaways?|Summary)\b/i.test(t));
  let out = "";
  for (const para of paras.slice(0, max)) {
    out = out ? `${out} ${para}` : para;
    if (out.length >= target) break;
  }
  return out.slice(0, 700);
}

if (!posts.length) {
  console.error("rss: parsed 0 posts from lib/blog.ts — refusing to write an empty feed");
  process.exit(1);
}

// Every post must also be a real route. If the parser lost some, the feed would
// simply be shorter and nobody would notice.
const builtPosts = existsSync(POSTS_DIR)
  ? readdirSync(POSTS_DIR).filter((f) => f.endsWith(".html") && f !== "page.html").length
  : 0;
if (builtPosts && posts.length < builtPosts) {
  console.error(
    `rss: parsed ${posts.length} posts but this build rendered ${builtPosts} — ` +
    `refusing to publish a feed missing ${builtPosts - posts.length} of them`,
  );
  process.exit(1);
}

const htmlFiles = existsSync(POSTS_DIR) ? readdirSync(POSTS_DIR) : [];
const items = [];
const missing = [];

for (const p of posts) {
  const file = path.join(POSTS_DIR, `${p.slug}.html`);
  if (!existsSync(file)) { missing.push(p.slug); continue; }
  const { body, standfirst } = articleHtml(readFileSync(file, "utf8"));
  if (!body) { missing.push(p.slug); continue; }
  const url = `${BASE}/blog/${p.slug}`;
  const pubDate = new Date(`${p.dateISO}T12:00:00Z`).toUTCString();
  let description = standfirst || "";
  if (description.length < 160) {
    const prose = openingProse(body);
    description = description && prose ? `${description} ${prose}` : (description || prose);
  }
  description = (description || p.excerpt).slice(0, 700);
  items.push({ p, url, pubDate, description, body });
}

// A post whose HTML did not render would silently lose its full text. Fail instead:
// a feed that claims full-text and quietly isn't is worse than no change at all.
if (missing.length) {
  console.error(`rss: no rendered HTML for ${missing.length} post(s): ${missing.join(", ")}`);
  console.error(`rss: looked in ${POSTS_DIR} (${htmlFiles.length} files present)`);
  process.exit(1);
}

items.sort((a, b) => (a.p.dateISO < b.p.dateISO ? 1 : -1));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Franklin J Bryant IV · Writing</title>
    <link>${BASE}/blog</link>
    <description>Essays on AI systems, agent governance, and the operating discipline behind them.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} Franklin J Bryant IV. All rights reserved.</copyright>
    <generator>Next.js · generated from the built pages</generator>
    <image>
      <url>${BASE}/about-portrait.jpg</url>
      <title>Franklin J Bryant IV · Writing</title>
      <link>${BASE}/blog</link>
      <width>400</width>
      <height>400</height>
    </image>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <ttl>60</ttl>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map(
    (it) => `    <item>
      <title>${esc(it.p.title)}</title>
      <link>${it.url}</link>
      <guid isPermaLink="true">${it.url}</guid>
      <pubDate>${it.pubDate}</pubDate>
      <category>${esc(it.p.tag)}</category>
      <description>${esc(it.description)}</description>
      <content:encoded>${cdata(it.body)}</content:encoded>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

writeFileSync(OUT, xml, "utf8");

const avg = Math.round(items.reduce((n, i) => n + i.description.length, 0) / items.length);
const shortest = Math.min(...items.map((i) => i.description.length));
console.log(
  `rss: wrote ${path.relative(ROOT, OUT)} — ${items.length} items, ` +
  `content:encoded ${Math.round(xml.length / 1024)}KB, ` +
  `description avg ${avg}c (shortest ${shortest}c)`,
);
