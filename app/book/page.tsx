'use client';

// /book — Franklin's own booking page (2026-10-18).
//
// WHY THIS EXISTS: every "Book 15 minutes" CTA on the site pointed at a *.vercel.app preview
// URL. A preview host is not a branded destination — it reads as unfinished, it breaks the
// moment the preview is pruned, and it gives away that the funnel is a side project. This is
// the branded door: same intake contract as /contact, framed as the 15-minute offer the
// showcase promises, on franklin.simplifyingbusinesses.com.
//
// The intake contract is NOT new: POST /api/intake/lead with camelCase firstName / lastName /
// email (+ optional phone, company) returns { redirect } or { error }. The form field names are
// non-standard on purpose (browser autofill cannot pre-populate a client's details into someone
// else's enquiry) and are mapped in handleSubmit — do not "fix" the field names.

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BookPage() {
  const [submitting, setSubmitting] = useState(false);
  const [fields, setFields] = useState({
    fname: '',
    lname: '',
    eaddr: '',
    phoneline: '',
    orgname: '',
  });
  const [what, setWhat] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/intake/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.fname,
          lastName: fields.lname,
          email: fields.eaddr,
          phone: fields.phoneline,
          company: fields.orgname,
        }),
      });
      const data = await res.json();
      if (res.ok && data.redirect) {
        window.location.href = data.redirect;
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
      }
    } catch {
      alert('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const input =
    'w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted/60 focus:outline-none focus:border-accent/60 transition-colors';

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-14 items-start">
        {/* Left: the offer */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Fifteen minutes</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.04] mt-4">
            Bring the thing that isn&apos;t finished<span className="text-accent">.</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mt-6 max-w-lg">
            You describe the work that keeps not getting done. You leave with the acceptance test we
            would write for it — the sentence that decides when it is finished. No deck, no discovery
            call, no follow-up sequence.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              ['You talk, I take notes in your words', 'The test is written in the language of the person who has to live with the result.'],
              ['You leave with the test, whether or not we work together', 'It is yours. Run it against anyone, including your current team.'],
              ['If it is a fit, the next step is scoped, not sold', 'A written scope with the acceptance criteria above it, priced per milestone.'],
            ].map(([title, body]) => (
              <li key={title} className="flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-white font-medium">{title}</p>
                  <p className="text-muted text-sm leading-relaxed mt-1">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-border pt-6">
            <p className="text-sm text-muted">
              Not ready to talk?{' '}
              <Link href="/contact" className="text-accent hover:underline">
                The free assessment
              </Link>{' '}
              — twelve dimensions, five minutes, a scored report you keep.
            </p>
          </div>
        </motion.div>

        {/* Right: the form */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface/70 p-7 lg:sticky lg:top-28"
        >
          <h2 className="font-display font-bold text-2xl mb-1">Request the time</h2>
          <p className="text-muted text-sm mb-6">
            Five fields. You pick a slot on the next screen.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input className={input} name="fname" placeholder="First name" value={fields.fname} onChange={handleChange} required autoComplete="off" />
              <input className={input} name="lname" placeholder="Last name" value={fields.lname} onChange={handleChange} required autoComplete="off" />
            </div>
            <input className={input} name="eaddr" type="email" placeholder="Email" value={fields.eaddr} onChange={handleChange} required autoComplete="off" />
            <input className={input} name="phoneline" type="tel" placeholder="Phone (optional)" value={fields.phoneline} onChange={handleChange} autoComplete="off" />
            <input className={input} name="orgname" placeholder="Company (optional)" value={fields.orgname} onChange={handleChange} autoComplete="off" />
            <input
              className={input}
              name="what"
              placeholder="What isn't finished? (optional, one line)"
              value={what}
              onChange={(e) => setWhat(e.target.value)}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-canvas font-semibold rounded-xl py-3.5 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? 'Sending…' : 'Book 15 minutes'}
            </button>

            <p className="text-[11px] leading-relaxed text-muted/80">
              Your details go to my intake system and nowhere else. No newsletter, no sequence. If we
              are not a fit, I will say so on the call.
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
