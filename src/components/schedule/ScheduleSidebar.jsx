import { Clock, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const EXPECTATIONS = [
  'A free, no-obligation consultation with a licensed insurance advisor.',
  'A personalized review of COBRA, ACA Marketplace, and short-term options based on your situation.',
  'Real cost comparisons and help enrolling in the plan that fits your needs and budget.',
];

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM CT' },
  { day: 'Saturday', time: '9:00 AM – 1:00 PM CT' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ScheduleSidebar() {
  return (
    <div className="flex flex-col gap-5">
      {/* What to Expect */}
      <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
        <h3
          className="text-lg font-bold mb-4"
          style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
        >
          What to Expect
        </h3>
        <ul className="flex flex-col gap-3">
          {EXPECTATIONS.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
              <span
                className="text-sm leading-relaxed"
                style={{ color: '#4a4a4a', fontFamily: 'var(--font-sans)' }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Advisor Hours */}
      <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5" style={{ color: '#e01f1f' }} />
          <h3
            className="text-lg font-bold"
            style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
          >
            Advisor Hours
          </h3>
        </div>
        <ul className="flex flex-col gap-3">
          {HOURS.map((h) => (
            <li
              key={h.day}
              className="flex justify-between items-center text-sm pb-3 last:pb-0"
              style={{ borderBottom: h === HOURS[1] ? '1px solid #f3f3f3' : 'none' }}
            >
              <span style={{ color: '#4a4a4a', fontFamily: 'var(--font-sans)' }}>{h.day}</span>
              <span
                className="font-semibold"
                style={{
                  color: h.time === 'Closed' ? '#999999' : '#2d3441',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {h.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prefer to Talk Now */}
      <div className="rounded-2xl p-6" style={{ background: '#2d3441' }}>
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-white" />
          <h3
            className="text-lg font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Prefer to Talk Now?
          </h3>
        </div>
        <p
          className="text-sm mb-5 leading-relaxed"
          style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
        >
          Our licensed advisors are standing by. Call now and skip the scheduling.
        </p>
        <a
          href="tel:8445691234"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 w-full"
          style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
        >
          <Phone className="w-4 h-4" />
          Call 844-569-1234
        </a>
      </div>
    </div>
  );
}