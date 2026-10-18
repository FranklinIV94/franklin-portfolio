import { NextRequest, NextResponse } from 'next/server';

// /api/fleet — INTERNAL fleet proxy. Locked down 2026-10-18.
//
// HISTORY (why this file opens with a denial):
// This route was public and unauthenticated and returned the raw internal scheduler — every
// fleet codename, the host each runs on, cron-job identifiers, checkReason task text, approval
// titles and timestamps — to anyone who loaded /showcase. A public marketing page was serving
// the internal operating picture. That is never-ship material.
//
// CONTAINMENT:
//   1. Default posture is DENY. If FLEET_PROXY_TOKEN is unset, every request gets 401 —
//      fail closed, not fail open. An unconfigured deploy must not be a public one.
//   2. Callers must present `Authorization: Bearer <FLEET_PROXY_TOKEN>`.
//   3. Public surfaces use /api/fleet-public, which returns counts and role states only.
// Use this route for internal dashboards only, and never link it from a page a prospect sees.

const PORTAL = 'https://onboarding.simplifyingbusinesses.com';

function authorised(request: NextRequest): boolean {
  const expected = process.env.FLEET_PROXY_TOKEN;
  if (!expected) return false; // fail closed when unconfigured
  const header = request.headers.get('authorization') || '';
  const presented = header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : '';
  if (!presented || presented.length !== expected.length) return false;
  // constant-time-ish compare; avoids early-exit on the first differing char
  let diff = 0;
  for (let i = 0; i < presented.length; i++) diff |= presented.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export async function GET(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const key = process.env.PORTAL_API_KEY;
  if (!key) {
    return NextResponse.json({ error: 'PORTAL_API_KEY not configured' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const kind = searchParams.get('kind') || 'fleet';

  try {
    if (kind === 'actions') {
      const res = await fetch(`${PORTAL}/api/admin/actions?limit=25`, {
        headers: { 'x-api-key': key },
        next: { revalidate: 15 },
      });
      const data = await res.json();
      return NextResponse.json({ actions: data.actions || [] });
    }

    const [schedRes, actRes] = await Promise.all([
      fetch(`${PORTAL}/api/admin/agent-schedule?limit=100&isActive=true`, {
        headers: { 'x-api-key': key },
        next: { revalidate: 15 },
      }),
      fetch(`${PORTAL}/api/admin/actions?limit=25`, {
        headers: { 'x-api-key': key },
        next: { revalidate: 15 },
      }),
    ]);
    const sched = await schedRes.json();
    const acts = await actRes.json();

    return NextResponse.json({
      schedules: sched.schedules || [],
      actions: acts.actions || [],
      fetchedAt: new Date().toISOString(),
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 502 });
  }
}
