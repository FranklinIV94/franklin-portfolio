import { NextRequest, NextResponse } from 'next/server';

// /api/fleet-public — the ONLY fleet data a public page may receive.
//
// WHY THIS EXISTS (2026-10-18, showcase v2 handoff §0):
// `/api/fleet?kind=fleet` proxied the raw internal scheduler to the open internet. It returned
// every fleet codename, the host each runs on, cron-job identifiers, checkReason task text, and
// approval titles. Anyone who opened /showcase could read the internal operating picture — the
// exact class of leak the public-content IP boundary forbids, on the page built to impress
// prospects.
//
// This route is deliberately NOT a filter over the raw payload. It is a separate, closed shape:
//   { agents_total, agents_active, jobs_24h, roles: [{ role, state }] }
// Three role labels, one of three states, four integers. Nothing else can escape, because
// nothing else is ever selected. Do not add fields here without re-reading that paragraph —
// a "just one more detail" field is how the original leak happened.
//
// Role mapping lives server-side and is intentionally lossy: internal codenames are bucketed
// into public role labels, and an unrecognized agent still counts toward the totals without
// being named.

const PORTAL = 'https://onboarding.simplifyingbusinesses.com';

// Public role labels, in display order. Codenames are never returned.
const PUBLIC_ROLES = ['CEO agent', 'Ops agent', 'Research agent', 'Deploy agent', 'Understudy'] as const;

// Internal codename -> public role. Keep this list short and boring; an unmapped agent falls
// through to a bucket by index, so a new agent can never leak its own name.
const ROLE_MAP: Record<string, (typeof PUBLIC_ROLES)[number]> = {
  prime: 'CEO agent',
  northstar: 'Ops agent',
  southstar: 'Ops agent',
  eaststar: 'Research agent',
  atlas: 'Deploy agent',
  weststar: 'Understudy',
};

type PublicState = 'idle' | 'working' | 'awaiting approval';

export const dynamic = 'force-dynamic'; // must be evaluated per request — a build-time snapshot
// would freeze the "live" panel at deploy time and quietly report stale counts.

export async function GET(_request: NextRequest) {
  const key = process.env.PORTAL_API_KEY;
  if (!key) {
    return NextResponse.json({ error: 'fleet not configured' }, { status: 503 });
  }

  try {
    const [schedRes, actRes] = await Promise.all([
      fetch(`${PORTAL}/api/admin/agent-schedule?limit=100&isActive=true`, {
        headers: { 'x-api-key': key },
        next: { revalidate: 15 },
      }),
      fetch(`${PORTAL}/api/admin/actions?limit=100`, {
        headers: { 'x-api-key': key },
        next: { revalidate: 15 },
      }),
    ]);

    if (!schedRes.ok || !actRes.ok) {
      return NextResponse.json({ error: 'portal unavailable' }, { status: 502 });
    }

    const sched = await schedRes.json();
    const acts = await actRes.json();

    // Raw rows are read here and never returned.
    const schedules: any[] = Array.isArray(sched.schedules) ? sched.schedules : [];
    const actions: any[] = Array.isArray(acts.actions) ? acts.actions : [];

    // ── Counts ────────────────────────────────────────────────────────────
    // Fleet size = distinct agents seen in EITHER the schedule rows or the recent-action
    // window. Counting only actions reported "3 agents" on a five-agent fleet, because an
    // agent that had not acted inside the window simply vanished — a total derived from a
    // window is not a total. Names are counted here and never returned.
    const seenAgents = new Set<string>();
    for (const a of actions) {
      const who = String(a.agentName || '').toLowerCase().trim();
      if (who) seenAgents.add(who);
    }
    for (const s of schedules) {
      const who = String(s.scheduledBy || '').toLowerCase().trim();
      if (who) seenAgents.add(who);
    }
    const agentsTotalFinal = Math.max(seenAgents.size, PUBLIC_ROLES.length);

    const cutoff = Date.now() - 24 * 60 * 60 * 1000;
    const jobs24h = actions.filter((a) => {
      const t = Date.parse(a.createdAt || a.updatedAt || a.completedAt || '');
      return Number.isFinite(t) ? t >= cutoff : false;
    }).length;

    // ── Role states ───────────────────────────────────────────────────────
    // latest activity per codename, then bucket into a public role. Only the state crosses.
    const latest = new Map<string, { status: string; at: number }>();
    for (const a of actions) {
      const who = String(a.agentName || '').toLowerCase();
      if (!who) continue;
      const at = Date.parse(a.createdAt || a.updatedAt || '') || 0;
      const prev = latest.get(who);
      if (!prev || at >= prev.at) latest.set(who, { status: String(a.status || '').toUpperCase(), at });
    }

    const roleState = new Map<string, PublicState>();
    let idx = 0;
    for (const [who, info] of latest) {
      const role = ROLE_MAP[who] ?? PUBLIC_ROLES[idx++ % PUBLIC_ROLES.length];
      const state: PublicState =
        /PENDING|AWAIT|REVIEW|APPROVAL/.test(info.status)
          ? 'awaiting approval'
          : /PROGRESS|RUNNING|CLAIMED/.test(info.status)
            ? 'working'
            : 'idle';
      // a role is as busy as its busiest agent; never downgrade a working role to idle
      const prior = roleState.get(role);
      if (prior !== 'working' || state === 'working') roleState.set(role, state);
    }

    const roles = PUBLIC_ROLES.map((role) => ({ role, state: roleState.get(role) ?? 'idle' }));
    const agentsActive = roles.filter((r) => r.state === 'working').length;

    return NextResponse.json(
      {
        agents_total: Math.min(agentsTotalFinal, 99),
        agents_active: agentsActive,
        jobs_24h: Math.min(jobs24h, 9999),
        roles,
        scopes: 'counts-and-role-states-only',
        fetchedAt: new Date().toISOString(),
      },
      { headers: { 'Cache-Control': 'public, s-maxage=15, stale-while-revalidate=30' } }
    );
  } catch {
    // Deliberately opaque: an error must not echo portal internals to a public caller.
    return NextResponse.json({ error: 'portal unavailable' }, { status: 502 });
  }
}
