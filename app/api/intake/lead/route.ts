import { NextRequest, NextResponse } from 'next/server';

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

    // Forward to ALBS portal API
    const res = await fetch(PORTAL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, phone, company }),
    });

    const data = await res.json();

    if (res.ok && data.token) {
      // Redirect to portal scheduling page
      return NextResponse.json({
        redirect: `https://onboarding.simplifyingbusinesses.com/onboard/${data.token}`,
      });
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('Intake error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}