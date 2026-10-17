import { postEnhancements } from '@/lib/post-enhancements';
import { Tldr } from '@/components/Tldr';
import { Citations } from '@/components/Citations';

/**
 * Post-level insertion points.
 *
 * Each post renders exactly two of these — one at the top, one at the foot — and
 * the content comes from lib/post-enhancements.ts. That keeps the per-post diff to
 * two lines instead of bespoke markup, and keeps the source lists in one auditable
 * file.
 *
 *   <PostTldr slug="my-post-slug" />     -> right after </header>
 *   <PostSources slug="my-post-slug" />  -> just before </article>
 *
 * Both render nothing when the slug isn't registered, so a new post published
 * before its enhancement entry exists still builds and ships.
 */
export function PostTldr({ slug }: { slug: string }) {
  const entry = postEnhancements[slug];
  if (!entry?.tldr) return null;
  return (
    <Tldr
      lines={entry.tldr.lines}
      keyTerm={entry.tldr.keyTerm}
      inOtherWords={entry.tldr.inOtherWords}
      // Only offer the jump link when a Sources block will actually render —
      // an anchor to nothing is worse than no anchor.
      sourcesHref={entry.citations?.length ? '#sources' : ''}
    />
  );
}

export function PostSources({ slug }: { slug: string }) {
  const entry = postEnhancements[slug];
  if (!entry?.citations?.length) return null;
  return <Citations items={entry.citations} />;
}
