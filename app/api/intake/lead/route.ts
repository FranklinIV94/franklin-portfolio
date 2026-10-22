import { NextRequest, NextResponse } from 'next/server';
import { leadEmailHtml, notifyOwner } from '@/lib/notify';

const PORTAL_API = 'https://onboarding.simplifyingbusinesses.com/api/v1/intake';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'firstName, lastName, and email are required' },
        { status: 400 }
      );
    }

    const lead = {
      name: `${firstName ?? ''} ${lastName ?? ''}`.trim(),
      email,
      phone,
      company,
      service: body.service ?? body.interest ?? body.topic ?? null,
      message: body.message ?? body.notes ?? body.details ?? null,
    };

    // Forward to ALBS portal API
    let res: Response | null = null;
    let data: Record<string, unknown> = {};
    try {
      res = await fetch(PORTAL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, company }),
      });
      data = await res.json();
    } catch (e) {
      data = { error: e instanceof Error ? e.message : 'portal unreachable' };
    }

    // The portal returns either a booking token or a plain success payload depending on the
    // service mix. Treating a created lead as a failure produced a false 'CRM write FAILED' alert,
    // which is worse than no alert: it trains you to ignore the one that matters.
    const ok = !!res?.ok && (!!data.token || data.success === true || !!data.leadId);
    const leadId = typeof data.leadId === 'string' ? data.leadId : undefined;

    // Notify regardless of outcome. A lead that failed to record is exactly the one worth an email:
    // silently losing an enquiry is worse than a noisy inbox.
    await notifyOwner({
      subject: ok
        ? `Site enquiry — ${lead.name || 'unknown'}${lead.company ? ` (${lead.company})` : ''}`
        : `Site enquiry NEEDS ATTENTION — ${lead.name || 'unknown'} (CRM write failed)`,
      html: leadEmailHtml(lead, { ok, leadId, source: req.headers.get('referer') || 'contact form' }),
      replyTo: typeof email === 'string' ? email : undefined,
    });

    if (ok) {
      // Redirect to calendar hub booking page
      return NextResponse.json({
        redirect: `https://calendar.simplifyingbusinesses.com/book?token=${data.token}`,
      });
    }

    return NextResponse.json(data, { status: res?.status ?? 502 });
  } catch (error) {
    console.error('Intake error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
