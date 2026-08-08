import { secrets } from 'base44:runtime';

const RESEND_API_URL = 'https://api.resend.com/emails';
const AGENCY_EMAIL = 'john@healthlinkagency.com';
const FROM_EMAIL = 'no-reply@healthlinkagency.com';

const PRODUCT_LABELS = {
  cobra: 'COBRA Continuation Coverage',
  aca: 'ACA Marketplace Plan',
  stm: 'Short-Term Health Insurance',
  'hospital-indemnity': 'Hospital Indemnity',
  accident: 'Accident-Only Plan',
  teladoc: 'Teladoc / Virtual Care',
};

const INCOME_LABELS = {
  'under-25k': 'Under $25,000',
  '25k-50k': '$25,000 – $50,000',
  '50k-75k': '$50,000 – $75,000',
  '75k-100k': '$75,000 – $100,000',
  '100k-150k': '$100,000 – $150,000',
  'over-150k': 'Over $150,000',
  'prefer-not': 'Prefer not to say',
};

const TIME_LABELS = {
  morning: 'Morning (8am – 12pm)',
  afternoon: 'Afternoon (12pm – 5pm)',
  evening: 'Evening (5pm – 7pm)',
  anytime: 'Anytime',
};

// Strict email validation — RFC 5322 simplified
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Field length limits to bound payload size
const LIMITS = {
  firstName: 60,
  lastName: 60,
  email: 254,
  phone: 30,
  state: 50,
  zipCode: 20,
  applicantAge: 3,
  householdSize: 10,
  notes: 2000,
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function clampString(v, max) {
  if (typeof v !== 'string') return '';
  return v.slice(0, max);
}

async function sendEmail(apiKey, payload) {
  const res = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend API error (${res.status}): ${text}`);
  }
  return res.json();
}

export default async function(req: Request): Promise<Response> {
  try {
    const body = await req.json();

    // --- Strict payload validation ---
    if (!body || typeof body !== 'object') {
      return Response.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const firstName = clampString(body.firstName, LIMITS.firstName).trim();
    const lastName = clampString(body.lastName, LIMITS.lastName).trim();
    const email = clampString(body.email, LIMITS.email).trim();
    const phone = clampString(body.phone, LIMITS.phone).trim();

    if (!firstName || !email || !phone) {
      return Response.json({ error: 'Missing required contact fields.' }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Validate enum-like fields against allowlists; reject unknown values
    const product = body.product;
    if (product && !PRODUCT_LABELS[product]) {
      return Response.json({ error: 'Invalid product selection.' }, { status: 400 });
    }

    const annualIncome = body.annualIncome;
    if (annualIncome && !INCOME_LABELS[annualIncome]) {
      return Response.json({ error: 'Invalid income selection.' }, { status: 400 });
    }

    const bestTime = body.bestTime;
    if (bestTime && !TIME_LABELS[bestTime]) {
      return Response.json({ error: 'Invalid time selection.' }, { status: 400 });
    }

    const state = clampString(body.state, LIMITS.state).trim();
    const zipCode = clampString(body.zipCode, LIMITS.zipCode).trim();
    const applicantAge = clampString(body.applicantAge, LIMITS.applicantAge).trim();
    const householdSize = clampString(body.householdSize, LIMITS.householdSize).trim();
    const notes = clampString(body.notes, LIMITS.notes).trim();

    const apiKey = secrets.get('RESEND_API_KEY');
    if (!apiKey) {
      return Response.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    // --- Build email content with all user input HTML-escaped ---
    const fullName = `${firstName} ${lastName}`.trim();
    const productLabel = PRODUCT_LABELS[product] || 'Not specified';
    const incomeLabel = INCOME_LABELS[annualIncome] || 'Not specified';
    const timeLabel = TIME_LABELS[bestTime] || 'Not specified';

    // Escape every user-provided value before insertion into HTML
    const e = {
      fullName: escapeHtml(fullName),
      firstName: escapeHtml(firstName),
      productLabel: escapeHtml(productLabel),
      state: escapeHtml(state || 'Not specified'),
      zipCode: escapeHtml(zipCode || 'Not specified'),
      applicantAge: escapeHtml(applicantAge || 'Not specified'),
      householdSize: escapeHtml(householdSize || 'Not specified'),
      incomeLabel: escapeHtml(incomeLabel),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      timeLabel: escapeHtml(timeLabel),
      notes: escapeHtml(notes),
    };

    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'long',
      timeStyle: 'short',
    });

    // 1. Notification email to the agency
    const agencyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #e01f1f; border-bottom: 2px solid #e01f1f; padding-bottom: 8px;">New Quote Request</h2>
        <p style="font-size: 13px; color: #888;">Received ${escapeHtml(submittedAt)} (ET)</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 160px; color: #555;">Name:</td><td style="padding: 6px 0;">${e.fullName}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Coverage Interest:</td><td style="padding: 6px 0;">${e.productLabel}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">State:</td><td style="padding: 6px 0;">${e.state}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Zip Code:</td><td style="padding: 6px 0;">${e.zipCode}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Age:</td><td style="padding: 6px 0;">${e.applicantAge}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Household Size:</td><td style="padding: 6px 0;">${e.householdSize}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Income Range:</td><td style="padding: 6px 0;">${e.incomeLabel}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${e.email}">${e.email}</a></td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 6px 0;"><a href="tel:${e.phone}">${e.phone}</a></td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold; color: #555;">Best Time to Reach:</td><td style="padding: 6px 0;">${e.timeLabel}</td></tr>
        </table>
        ${notes ? `<h3 style="margin-top: 20px; font-size: 14px; color: #555;">Additional Notes:</h3><p style="font-size: 14px; background: #f5f5f5; padding: 12px; border-radius: 6px;">${e.notes}</p>` : ''}
        <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #aaa;">This request was submitted from cobrainsurance.health/check-options</p>
      </div>
    `;

    // 2. Confirmation email to the submitter
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #2d3441; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">We Received Your Request!</h1>
        </div>
        <div style="background: #ffffff; padding: 28px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px;">Hi ${e.firstName},</p>
          <p style="font-size: 15px; line-height: 1.6; color: #555;">
            Thank you for reaching out to HealthLink Insurance Agency! We've received your request
            for <strong>${e.productLabel}</strong> and a licensed advisor will be in touch with you soon.
          </p>

          <h3 style="color: #2d3441; font-size: 16px; margin-top: 28px;">What Happens Next?</h3>
          <ol style="font-size: 15px; line-height: 1.8; color: #555; padding-left: 20px;">
            <li><strong>A licensed advisor will call you</strong> within 1 business day at ${e.phone}${bestTime ? ` (best time: ${e.timeLabel})` : ''}.</li>
            <li><strong>We'll compare your options</strong> — COBRA, ACA Marketplace, short-term, and other plans — to find the best fit and price.</li>
            <li><strong>You choose what works</strong> — there's no obligation, and our help is completely free.</li>
          </ol>

          <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 14px 18px; margin: 24px 0; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #333;">
              <strong>Need to talk sooner?</strong> Call us directly at
              <a href="tel:8445691234" style="color: #e01f1f; font-weight: bold;">844-569-1234</a>.
            </p>
          </div>

          <p style="font-size: 15px; line-height: 1.6; color: #555;">
            We've saved your details and an advisor will review them before reaching out. If you
            have any questions in the meantime, just reply to this email or give us a call.
          </p>

          <p style="font-size: 15px; margin-top: 28px;">Best regards,<br />
          <strong style="color: #2d3441;">The HealthLink Insurance Agency Team</strong><br />
          <span style="font-size: 13px; color: #888;">Licensed in 22 states &amp; DC · 844-569-1234</span></p>
        </div>
        <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 16px;">
          ©2026 HealthLink Insurance Agency LLC · Springfield, IL
        </p>
      </div>
    `;

    const results = await Promise.allSettled([
      sendEmail(apiKey, {
        from: `CobraInsurance.Health <${FROM_EMAIL}>`,
        to: AGENCY_EMAIL,
        subject: `New Quote Request — ${fullName} (${productLabel})`,
        html: agencyHtml,
      }),
      sendEmail(apiKey, {
        from: `HealthLink Insurance Agency <${FROM_EMAIL}>`,
        to: email,
        subject: `We received your request, ${firstName}! Here's what happens next.`,
        html: customerHtml,
      }),
    ]);

    const errors = results
      .map((r, i) => (r.status === 'rejected' ? `${i === 0 ? 'Agency' : 'Customer'} email: ${r.reason.message}` : null))
      .filter(Boolean);

    if (errors.length) {
      console.error('Email send errors:', errors);
      return Response.json({ error: 'Some emails failed to send.', details: errors }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('sendQuoteNotification error:', error);
    return Response.json({ error: 'An unexpected error occurred while sending notifications.' }, { status: 500 });
  }
}