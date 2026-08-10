import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Loader2,
  Phone,
} from 'lucide-react';
import { base44 } from '@/api/base44Client';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

function formatTime(time) {
  const [h, m] = time.split(':');
  const hour = parseInt(h, 10);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${m} ${period}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

export default function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [stage, setStage] = useState('select');
  const [busySlots, setBusySlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!selectedDate) {
      setBusySlots([]);
      return;
    }
    setLoadingSlots(true);
    base44.functions
      .invoke('checkCalendarAvailability', { date: selectedDate })
      .then((res) => setBusySlots(res.data.busySlots || []))
      .catch(() => setBusySlots([]))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  function handleTimeSelect(time) {
    setSelectedTime(time);
    setStage('form');
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  }

  async function handleConfirm(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSubmitting(true);
    setError('');
    try {
      const [firstName, ...lastNameParts] = form.name.trim().split(/\s+/);
      const lastName = lastNameParts.join(' ');
      await base44.functions.invoke('sendQuoteNotification', {
        firstName,
        lastName,
        email: form.email,
        phone: form.phone,
        product: 'schedule',
        notes: `Scheduled call: ${formatDate(selectedDate)} at ${formatTime(selectedTime)}${form.message ? `\n\nTopic: ${form.message}` : ''}`,
      });
      setSubmitting(false);
      setStage('success');
    } catch (err) {
      setSubmitting(false);
      const msg =
        err?.response?.data?.error ||
        err?.message ||
        'Something went wrong. Please call us at 844-569-1234.';
      setError(msg);
    }
  }

  function resetBooking() {
    setStage('select');
    setSelectedTime('');
    setForm({ name: '', email: '', phone: '', message: '' });
    setError('');
  }

  return (
    <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: '#fee2e2', color: '#b91c1c' }}
          >
            Schedule a Call
          </span>
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: '#111827', fontFamily: 'var(--font-heading)' }}
          >
            Book a Time That Works for You
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto"
            style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
          >
            Pick a date and an open 30-minute slot below. Your appointment is added straight to our
            calendar and you'll get a confirmation email right away.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 lg:p-8"
          style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
        >
          {stage === 'success' ? (
            <div className="flex flex-col items-center text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ background: '#f0fdf4' }}
              >
                <CheckCircle2 className="w-9 h-9" style={{ color: '#16a34a' }} />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: '#111827', fontFamily: 'var(--font-heading)' }}
              >
                You're booked!
              </h3>
              <p
                className="text-base mb-2"
                style={{ color: '#4a4a4a', fontFamily: 'var(--font-sans)' }}
              >
                Your advisor call is scheduled for{' '}
                <strong style={{ color: '#111827' }}>
                  {formatDate(selectedDate)} at {formatTime(selectedTime)}
                </strong>
              </p>
              <p
                className="text-sm mb-8 max-w-md leading-relaxed"
                style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
              >
                A confirmation email is on its way. A licensed advisor will call you at the number
                you provided at the scheduled time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8445691234"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  <Phone className="w-4 h-4" />
                  Call 844-569-1234
                </a>
                <button
                  onClick={resetBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-colors hover:bg-gray-50"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #dcdcdc',
                    color: '#2d3441',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Book another call
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2.5 mb-2">
                <CalendarDays className="w-5 h-5" style={{ color: '#e01f1f' }} />
                <h3
                  className="text-lg font-bold"
                  style={{ color: '#111827', fontFamily: 'var(--font-heading)' }}
                >
                  Pick a date
                </h3>
              </div>
              <p
                className="text-sm mb-6"
                style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
              >
                Times shown reflect our live advisor availability. A licensed advisor will call you
                at the number you provide.
              </p>

              {/* Date picker */}
              <div className="mb-6">
                <label
                  className="block text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                >
                  Pick a date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedTime('');
                    setStage('select');
                  }}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{
                    background: '#fbfbfb',
                    border: '1px solid #dddddd',
                    color: '#333333',
                    fontFamily: 'var(--font-sans)',
                  }}
                />
              </div>

              {/* Time slots */}
              {selectedDate && stage === 'select' && (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4" style={{ color: '#e01f1f' }} />
                    <span
                      className="text-xs font-bold uppercase tracking-wide"
                      style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                    >
                      Available times
                    </span>
                  </div>
                  {loadingSlots ? (
                    <div className="flex items-center gap-2 py-6">
                      <Loader2 className="w-4 h-4 animate-spin" style={{ color: '#e01f1f' }} />
                      <span
                        className="text-sm"
                        style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                      >
                        Checking availability…
                      </span>
                    </div>
                  ) : busySlots.length === TIME_SLOTS.length ? (
                    <p
                      className="text-sm py-4"
                      style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                    >
                      All slots are booked on this day. Please pick another date.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {TIME_SLOTS.map((time) => {
                        const isBusy = busySlots.includes(time);
                        return (
                          <button
                            key={time}
                            disabled={isBusy}
                            onClick={() => handleTimeSelect(time)}
                            className="py-2.5 rounded-lg text-sm font-semibold transition-colors"
                            style={{
                              background: isBusy ? '#f5f5f5' : '#ffffff',
                              border: isBusy
                                ? '1px solid #e5e5e5'
                                : '1px solid #dcdcdc',
                              color: isBusy ? '#bbbbbb' : '#2d3441',
                              cursor: isBusy ? 'not-allowed' : 'pointer',
                              fontFamily: 'var(--font-sans)',
                            }}
                          >
                            {formatTime(time)}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              {/* Form capture */}
              {stage === 'form' && (
                <form onSubmit={handleConfirm} className="mt-2">
                  <div className="text-sm mb-5">
                    <span style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>
                      Selected:{' '}
                    </span>
                    <span
                      style={{ color: '#e01f1f', fontWeight: 'bold', fontFamily: 'var(--font-sans)' }}
                    >
                      {formatTime(selectedTime)}
                    </span>
                    <span style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>
                      {' '}
                      on {selectedDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        Full name <span style={{ color: '#e01f1f' }}>*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{
                          background: '#fbfbfb',
                          border: '1px solid #dddddd',
                          color: '#333333',
                          fontFamily: 'var(--font-sans)',
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        Email <span style={{ color: '#e01f1f' }}>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{
                          background: '#fbfbfb',
                          border: '1px solid #dddddd',
                          color: '#333333',
                          fontFamily: 'var(--font-sans)',
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        Phone number <span style={{ color: '#e01f1f' }}>*</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{
                          background: '#fbfbfb',
                          border: '1px solid #dddddd',
                          color: '#333333',
                          fontFamily: 'var(--font-sans)',
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        What would you like to discuss? (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about your situation…"
                        className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{
                          background: '#fbfbfb',
                          border: '1px solid #dddddd',
                          color: '#333333',
                          fontFamily: 'var(--font-sans)',
                        }}
                      />
                    </div>
                  </div>

                  {error && (
                    <div
                      className="mt-4 rounded-lg p-3 text-sm"
                      style={{
                        background: '#fef2f2',
                        border: '1px solid #fecaca',
                        color: '#991b1b',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-6 py-3.5 rounded-lg font-bold text-sm text-white transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ background: '#dc2626', fontFamily: 'var(--font-sans)' }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Confirming…
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStage('select');
                      setSelectedTime('');
                    }}
                    className="w-full mt-3 text-sm font-semibold transition-opacity hover:opacity-75 flex items-center justify-center gap-1"
                    style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Pick a different time
                  </button>
                </form>
              )}

              {!selectedDate && stage === 'select' && (
                <p
                  className="text-sm text-center py-8"
                  style={{ color: '#aaaaaa', fontFamily: 'var(--font-sans)' }}
                >
                  Select a date to see available times.
                </p>
              )}
            </>
          )}
        </div>

        <p
          className="text-xs text-center mt-6 leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
        >
          Times shown reflect our live advisor availability. A licensed advisor will call you at the
          number you provide.
        </p>
      </div>
    </section>
  );
}