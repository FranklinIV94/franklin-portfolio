// Graph mail for site notifications. Deliberately not the invoice Resend key: that credential is
// scoped to Prospyr 305 invoices and client notifications only, and a contact form is neither.

type Mail = { subject: string; html: string; replyTo?: string };

const TENANT = process.env.GRAPH_TENANT_ID || '';
const CLIENT = process.env.GRAPH_CLIENT_ID || '';
const SECRET = process.env.GRAPH_CLIENT_SECRET || '';
const FROM = process.env.CONTACT_FROM || 'franklin@simplifyingbusinesses.com';
const TO = process.env.CONTACT_NOTIFY_TO || 'franklin@prospyr305.com';

async function token(): Promise<string | null> {
  if (!TENANT || !CLIENT || !SECRET) return null;
  const res = await fetch(`https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT,
      client_secret: SECRET,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });
  if (!res.ok) return null;
  const j = await res.json();
  return j.access_token ?? null;
}

/** Fire-and-forget: never let a notification failure break the lead capture. */
export async function notifyOwner({ subject, html, replyTo }: Mail): Promise<boolean> {
  try {
    const t = await token();
    if (!t) {
      console.warn('notifyOwner: Graph credentials missing — notification skipped');
      return false;
    }
    const message: Record<string, unknown> = {
      message: {
        subject,
        body: { contentType: 'HTML', content: html },
        toRecipients: [{ emailAddress: { address: TO } }],
      },
      saveToSentItems: true,
    };
    if (replyTo) message.message = { ...(message.message as object), replyTo: [{ emailAddress: { address: replyTo } }] };

    const res = await fetch(`https://graph.microsoft.com/v1.0/users/${FROM}/sendMail`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    if (!res.ok) console.warn('notifyOwner: Graph rejected', res.status, (await res.text()).slice(0, 200));
    return res.ok;
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
      Reply directly to this message to answer ${esc(lead.name) || 'the sender'} — their address is set as Reply-To.
    </p>
  </div>`;
}
