import { NextRequest, NextResponse } from 'next/server';

// Server-side proxy to the ALBS portal fleet data.
// The PORTAL_API_KEY stays in Vercel env — never exposed to the browser.
// The showcase artifact fetches this same-origin route.

const PORTAL = 'https://onboarding.simplifyingbusinesses.com';

export async function GET(request: NextRequest) {
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

    // default: fleet = agent schedule + recent actions
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
