import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';

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

export default function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: '#fee2e2', color: '#e01f1f' }}
          >
            Schedule a Call
          </span>
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
          >
            Book a Time That Works for You
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto"
            style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
          >
            Pick a date and an open 30-minute slot below. Your appointment is added straight to our
            calendar and you'll get a confirmation email right away.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 lg:p-8"
          style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
        >
          <div className="flex items-center gap-2.5 mb-2">
            <CalendarDays className="w-5 h-5" style={{ color: '#e01f1f' }} />
            <h3
              className="text-lg font-bold"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Pick a date
            </h3>
          </div>
          <p
            className="text-sm mb-6"
            style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
          >
            Times shown reflect our live advisor availability. A licensed advisor will call you at
            the number you provide.
          </p>

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

          {selectedDate && (
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className="py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    style={{
                      background: selectedTime === time ? '#e01f1f' : '#ffffff',
                      border:
                        selectedTime === time
                          ? '1px solid #e01f1f'
                          : '1px solid #dcdcdc',
                      color: selectedTime === time ? '#ffffff' : '#2d3441',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {formatTime(time)}
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedTime && (
            <Link
              to="/schedule"
              className="w-full mt-6 py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Book This Time — {formatTime(selectedTime)}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}

          {!selectedDate && (
            <p
              className="text-sm text-center py-6"
              style={{ color: '#aaaaaa', fontFamily: 'var(--font-sans)' }}
            >
              Select a date to see available times.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}