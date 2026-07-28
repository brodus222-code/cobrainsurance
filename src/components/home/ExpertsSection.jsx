import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export default function ExpertsSection() {
  return (
    <section className="w-full py-16 lg:py-20" style={{ background: '#fbfbfb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left — wider text column */}
          <div className="lg:col-span-2">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              HealthLink Insurance Agency LLC
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              We're The COBRA Experts
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              Helping individuals understand coverage choices between jobs, including COBRA
              continuation and affordable options like ACA, short-term, and other private plans.
              Save money by comparing all of your options.
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
            >
              Our licensed advisors are certified specialists in COBRA administration and
              health insurance alternatives. We're independent — we work for you, not the
              insurance companies. Licensed to operate in 22 states.
            </p>
            <Link
              to="/when-cobra"
              className="inline-flex items-center gap-1 font-semibold text-sm transition-opacity hover:opacity-75"
              style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Find affordable health coverage →
            </Link>
          </div>

          {/* Right — advisor card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ border: '3px solid #e01f1f', maxWidth: '220px' }}
            >
              <div
                className="w-full flex items-center justify-center"
                style={{ aspectRatio: '1 / 1', background: 'linear-gradient(135deg, #6b8099, #3c4c63)' }}
                aria-hidden="true"
              >
                <User className="w-20 h-20" style={{ color: '#ffffff' }} />
              </div>
              <div className="px-4 py-3 text-center" style={{ background: '#3c4c63' }}>
                <p
                  className="text-xs font-bold text-white uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Licensed COBRA Advisor
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
                  HealthLink Insurance Agency LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}