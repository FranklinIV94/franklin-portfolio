// Site notifications over Resend (Franklin, 2026-10-22): "Not graph, resend".
//
// Sending identity is notifications@prospyr305.com on the verified prospyr305.com domain, separate
// from invoices@ so the two streams are distinguishable in the Resend log.
//
// ⚠️ The only working key on the box is INVOICE_RESEND_API_KEY, which Franklin scoped to invoices and
// client notifications. Using it here means site enquiries share a sending reputation with invoices:
// if a burst of form spam bounces, invoice deliverability pays for it. A dedicated key (Resend → API
// keys → "site-notifications", sending access only) removes that coupling — set RESEND_API_KEY to it
// and nothing else has to change.

const KEY = process.env.RESEND_API_KEY || '';
const FROM = process.env.CONTACT_FROM || 'notifications@prospyr305.com';
const TO = process.env.CONTACT_NOTIFY_TO || 'franklin@prospyr305.com';

type Mail = { subject: string; html: string; replyTo?: string };

/** Fire-and-forget: a notification failure must never break lead capture. */
export async function notifyOwner({ subject, html, replyTo }: Mail): Promise<boolean> {
  if (!KEY) {
    console.warn('notifyOwner: RESEND_API_KEY missing — notification skipped');
    return false;
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      // Cloudflare in front of api.resend.com rejects default runtime user-agents (403 / code 1010).
      headers: {
        Authorization: `Bearer ${KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Prospyr305-Site/1.0',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        from: `Prospyr 305 Site <${FROM}>`,
        to: [TO],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    const body = await res.text();
    if (!res.ok) {
      console.warn('notifyOwner: Resend rejected', res.status, body.slice(0, 200));
      return false;
    }
    try {
      const j = JSON.parse(body);
      console.log('notifyOwner: sent', j.id ?? '');
    } catch {
      /* non-JSON success is still success */
    }
    return true;
  } catch (e) {
    console.warn('notifyOwner: failed', e instanceof Error ? e.message : e);
    return false;
  }
}

export function leadEmailHtml(lead: Record<string, unknown>, extra: { ok: boolean; leadId?: string; source: string }) {
  const esc = (v: unknown) =>
    String(v ?? '—').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
  const row = (k: string, v: unknown) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.06em;vertical-align:top">${k}</td>
     <td style="padding:6px 0;color:#0f172a;font-size:14px">${esc(v)}</td></tr>`;
  const status = extra.ok
    ? `<span style="color:#15803d;font-weight:700">Recorded in the CRM</span>`
    : `<span style="color:#b91c1c;font-weight:700">CRM write FAILED — follow up manually</span>`;

  return `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:600px">
    <div style="border-left:4px solid #38bdf8;padding-left:14px;margin-bottom:18px">
      <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#0ea5e9">Prospyr 305 · site enquiry</div>
      <div style="font-size:20px;font-weight:700;color:#0f172a;margin-top:4px">${esc(lead.name) || 'Unnamed'}</div>
      <div style="font-size:13px;color:#475569">${status}${extra.leadId ? ` · lead ${esc(extra.leadId)}` : ''}</div>
    </div>
    <table style="border-collapse:collapse;width:100%">
      ${row('Email', lead.email)}
      ${row('Phone', lead.phone)}
      ${row('Company', lead.company)}
      ${row('Interest', lead.service)}
      ${row('Message', lead.message)}
      ${row('Source', extra.source)}
      ${row('Received', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }) + ' ET')}
    </table>
    <p style="font-size:12px;color:#64748b;margin-top:18px">
      Reply directly to answer ${esc(lead.name) || 'the sender'} — their address is set as Reply-To.
    </p>
  </div>`;
}
