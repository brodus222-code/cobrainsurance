import { Helmet } from '@/lib/helmet';
import { Phone, Clock, CalendarDays, ExternalLink } from 'lucide-react';

// Replace with your Google Calendar Appointment Schedule link
const GOOGLE_CALENDAR_LINK = 'https://calendar.google.com/calendar/appointments';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/schedule`;

export default function SchedulePage() {
  return (
    <>
      <Helmet>
        <title>Schedule a Call with a Licensed COBRA Advisor</title>
        <meta
          name="description"
          content="Book a free consultation with a licensed health insurance advisor. Pick a time that works for you — get help with COBRA, ACA marketplace, and coverage alternatives."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Schedule a Call with a Licensed COBRA Advisor" />
        <meta
          property="og:description"
          content="Book a free consultation with a licensed health insurance advisor. Pick a time that works for you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-5">
              <CalendarDays className="w-5 h-5 text-white" />
              <span
                className="text-xs font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Free Consultation
              </span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Schedule a Call with a Licensed Advisor
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Pick a time that works for you. Our licensed advisors provide free, unbiased help
              with COBRA, ACA marketplace plans, and coverage alternatives — no obligation.
            </p>
          </div>
        </section>

        {/* Info bar */}
        <section className="w-full py-6" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#e01f1f' }} />
                <span className="text-sm" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                  Mon–Fri: 8:00 AM – 6:00 PM CT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#e01f1f' }} />
                <span className="text-sm" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                  Saturday: 9:00 AM – 1:00 PM CT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#e01f1f' }} />
                <a href="tel:8445691234" className="text-sm font-semibold" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>
                  844-569-1234
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar embed */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid #eeeeee', background: '#ffffff' }}
            >
              <div className="px-6 py-5 border-b" style={{ borderColor: '#eeeeee' }}>
                <h2
                  className="text-xl font-bold mb-1"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Pick Your Time
                </h2>
                <p className="text-sm" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
                  Choose a date and time below and we'll confirm your appointment by email.
                </p>
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: '#efefef' }}
                  >
                    <CalendarDays className="w-8 h-8" style={{ color: '#e01f1f' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                  >
                    Book on Google Calendar
                  </h3>
                  <p
                    className="text-sm mb-6 max-w-md leading-relaxed"
                    style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                  >
                    Choose a date and time that works for you directly on Google Calendar.
                    You'll receive an instant confirmation with a calendar invite.
                  </p>
                  <a
                    href={GOOGLE_CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                  >
                    <CalendarDays className="w-4 h-4" />
                    Open Google Calendar
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p
                  className="text-xs mt-4 text-center leading-relaxed"
                  style={{ color: '#999999', fontFamily: 'var(--font-sans)' }}
                >
                  Prefer to talk now? Call{' '}
                  <a href="tel:8445691234" className="font-semibold" style={{ color: '#e01f1f' }}>
                    844-569-1234
                  </a>{' '}
                  and we'll help you right away.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}