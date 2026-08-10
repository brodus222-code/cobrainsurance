import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

// Convert an ISO timestamp to minutes-since-midnight in Central Time
function toCTMinutes(isoString) {
  const date = new Date(isoString);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);
  const h = parseInt(parts.find((p) => p.type === 'hour').value, 10) % 24;
  const m = parseInt(parts.find((p) => p.type === 'minute').value, 10);
  return h * 60 + m;
}

function slotToMinutes(slot) {
  const [h, m] = slot.split(':').map(Number);
  return h * 60 + m;
}

export default async function (req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const date = body?.date;

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return Response.json({ error: 'Valid date (YYYY-MM-DD) is required.' }, { status: 400 });
    }

    let accessToken;
    try {
      const conn = await base44.asServiceRole.connectors.getConnection('googlecalendar');
      accessToken = conn.accessToken;
    } catch (e) {
      // Connector not authorized — fail open (all slots available)
      return Response.json({ busySlots: [] });
    }

    const res = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timeMin: `${date}T00:00:00Z`,
        timeMax: `${date}T23:59:59Z`,
        timeZone: 'America/Chicago',
        items: [{ id: 'primary' }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Google Calendar freeBusy error:', text);
      // Fail open
      return Response.json({ busySlots: [] });
    }

    const data = await res.json();
    const busyRanges = data?.calendars?.primary?.busy || [];

    const busySlots = [];
    for (const slot of TIME_SLOTS) {
      const slotStart = slotToMinutes(slot);
      const slotEnd = slotStart + 30;
      for (const range of busyRanges) {
        const busyStart = toCTMinutes(range.start);
        let busyEnd = toCTMinutes(range.end);
        // Handle overnight ranges
        if (busyEnd < busyStart) busyEnd = 24 * 60;
        if (slotStart < busyEnd && slotEnd > busyStart) {
          busySlots.push(slot);
          break;
        }
      }
    }

    return Response.json({ busySlots });
  } catch (error) {
    console.error('checkCalendarAvailability error:', error);
    // Fail open
    return Response.json({ busySlots: [] });
  }
}