/**
 * TL;DR block — the thesis in three lines, up top.
 *
 * Sits immediately after a post's </header>, before the hero figure. Every post
 * registered in lib/post-enhancements.ts renders one. Keeps the reader who is
 * scrolling past in 15 seconds.
 */
type TldrProps = {
  lines: string[];
  keyTerm?: string;
  inOtherWords?: string;
  sourcesHref?: string;
};

export function Tldr({ lines, keyTerm, inOtherWords, sourcesHref = '#sources' }: TldrProps) {
  if (!lines?.length) return null;

  return (
    <aside
      aria-label="Summary"
      className="my-10 rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-7"
    >
      <p className="kicker font-mono text-[11px] uppercase tracking-[0.2em] text-accent">TL;DR</p>

      <ul className="mt-5 space-y-3">
        {lines.map((line, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-gray-200">
            <span className="font-mono text-[11px] text-accent pt-1 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {inOtherWords ? (
        <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-gray-400 italic">
          <span className="font-mono not-italic text-[11px] uppercase tracking-[0.14em] text-muted mr-2">
            In other words
          </span>
          {inOtherWords}
        </p>
      ) : null}

      {keyTerm ? (
        <p className="mt-4 text-xs text-muted">
          Key term:{' '}
          <strong className="font-semibold text-white">{keyTerm}</strong>
        </p>
      ) : null}

      {sourcesHref ? (
        <p className="mt-5 text-xs">
          <a href={sourcesHref} className="font-mono uppercase tracking-[0.14em] text-accent">
            Sources ↓
          </a>
        </p>
      ) : null}
    </aside>
  );
}
