'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  // Use non-standard names so browser autofill can't pre-populate
  const [fields, setFields] = useState({
    fname: '',
    lname: '',
    eaddr: '',
    phoneline: '',
    orgname: '',
  });

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-accent mb-3 block">Start here</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-4">
              Book a consultation<span className="text-accent">.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Tell us a bit about yourself and we&apos;ll get you set up with access to schedule
              a time that works.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-muted mb-2">First Name *</label>
                  <input
                    type="text"
                    name="fname"
                    autoComplete="off"
                    required
                    value={fields.fname}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lname"
                    autoComplete="off"
                    required
                    value={fields.lname}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-muted mb-2">Email Address *</label>
                <input
                  type="email"
                  name="eaddr"
                  autoComplete="off"
                  required
                  value={fields.eaddr}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="jane@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs text-muted mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneline"
                  autoComplete="off"
                  value={fields.phoneline}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>

              {/* Business */}
              <div>
                <label className="block text-xs text-muted mb-2">Business Name</label>
                <input
                  type="text"
                  name="orgname"
                  autoComplete="off"
                  value={fields.orgname}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold px-6 py-4 rounded-xl transition-all mt-4"
              >
                {submitting ? 'Setting up your portal...' : 'Continue →'}
              </button>
            </form>

            <p className="text-xs text-muted text-center mt-6">
              After submitting, you&apos;ll be redirected to schedule your consultation.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
