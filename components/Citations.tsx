/**
 * Citations — the credibility footer of a post.
 *
 * Rendered from lib/post-enhancements.ts. Every entry is a primary source that
 * was verified live before it shipped; entries without a URL render as a plain
 * label rather than a link (we never invent a link to make a list look fuller).
 *
 * `Cite` is the inline marker for prose use:
 *   <Cite n={3} />  ->  superscript link that jumps to source 3
 */
export type Citation = {
  label: string;
  url?: string | null;
  supports?: string;
};

export function Cite({ n }: { n: number }) {
  return (
    <sup className="ml-0.5 font-mono text-[10px] leading-none">
      <a href={`#source-${n}`} id={`ref-${n}`} className="text-accent">
        [{n}]
      </a>
    </sup>
  );
}

export function Citations({ items }: { items: Citation[] }) {
  if (!items?.length) return null;

  return (
    <section
      id="sources"
      aria-label="Sources"
      className="mt-16 scroll-mt-24 border-t border-border pt-8"
    >
      <h2 className="kicker font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        Sources
      </h2>

      <ol className="mt-6 space-y-3">
        {items.map((c, i) => (
          <li key={i} id={`source-${i + 1}`} className="flex gap-4 scroll-mt-24">
            <span className="font-mono text-[11px] text-accent pt-1 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-sm leading-relaxed text-gray-400">
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 underline decoration-border underline-offset-2 hover:text-accent"
                >
                  {c.label}
                </a>
              ) : (
                <span className="text-gray-200">{c.label}</span>
              )}
              {c.supports ? (
                <span className="mt-1 block text-xs text-muted">{c.supports}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-xs text-muted">
        Every source above was checked at the primary document, not a second-hand summary.
      </p>
    </section>
  );
}
