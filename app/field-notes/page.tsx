import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Field Notes — Franklin J Bryant IV',
  description:
    'Living documents: the AI usage policy, the security gate, and the operating standards we actually run on. Unlike the essays, these change as practice changes.',
  keywords: [
    'AI usage policy',
    'AI governance policy',
    'pre-launch security checklist',
    'responsible AI use',
    'AI data handling',
    'agent governance',
    'Franklin J Bryant IV',
  ],
  alternates: { canonical: '/field-notes' },
  openGraph: {
    title: 'Field Notes — Franklin J Bryant IV',
    description:
      'Living documents: the AI usage policy, the security gate, and the operating standards we actually run on.',
    type: 'website',
    url: 'https://franklin.simplifyingbusinesses.com/field-notes',
  },
};

const notes = [
  {
    slug: 'ai-usage-policy',
    title: 'How We Use AI',
    summary:
      'Where AI sits in the work, where a human signs off, and what a client can tell us to keep entirely manual. Written as operating policy, not marketing.',
    updated: 'October 17, 2026',
    tag: 'Policy',
  },
  {
    slug: 'pre-launch-security-checklist',
    title: 'The Pre-Launch Security Checklist',
    summary:
      'The eleven checks every system has to pass before it touches a real user or a real record. This is the gate, not an aspiration.',
    updated: 'October 17, 2026',
    tag: 'Security',
  },
];

export default function FieldNotesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <span className="font-mono text-xs text-accent mb-3 block">Field Notes</span>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Field Notes<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Living documents. Unlike the essays, these change as practice changes.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {notes.map(note => (
          <Link
            key={note.slug}
            href={`/field-notes/${note.slug}`}
            className="group block bg-surface border border-border rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                {note.tag}
              </span>
              <span className="text-xs text-gray-400">Updated {note.updated}</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300 mb-2">
              {note.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{note.summary}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-200">
              Read the note
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-16 text-sm text-gray-400 border-t border-border pt-8">
        When a note and an essay disagree, the note is newer — the note is what we run on today.
        Questions about either: <a href="mailto:franklin@prospyr305.com">franklin@prospyr305.com</a>.
      </p>
    </main>
  );
}
