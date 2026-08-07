import { X, Phone, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvisorModal({ productName, open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="advisor-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: '#fbfbfb' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4" style={{ background: '#3c4c63' }}>
          <span
            className="text-xs font-bold uppercase tracking-wider text-white"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {productName}
          </span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <h2
            id="advisor-modal-title"
            className="text-xl font-bold mb-3 leading-snug"
            style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
          >
            Speak with a Licensed Advisor
          </h2>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
          >
            When comparing COBRA with alternatives like{' '}
            <span className="font-semibold">{productName}</span>, it's critical to speak
            with a licensed advisor.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
          >
            Our Licensed Advisors provide free, unbiased assistance to help you compare
            plan options, understand eligibility, and choose coverage that fits your needs
            and budget.
          </p>

          <div
            className="rounded-xl px-4 py-3 mb-6 flex items-center gap-2"
            style={{ background: '#efefef' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-wide"
              style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Free Service.
            </span>
            <span
              className="text-xs"
              style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
            >
              We are compensated by the insurance carriers.
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:8445691234"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              <Phone className="w-4 h-4" />
              Call 844-569-1234
            </a>
            <Link
              to="/schedule"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border-2 transition-colors hover:text-white"
              style={{
                borderColor: '#3c4c63',
                color: '#3c4c63',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3c4c63';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#3c4c63';
              }}
            >
              <CalendarDays className="w-4 h-4" />
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}