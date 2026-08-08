import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { CheckCircle2 } from 'lucide-react';

export default function ExpertsSection() {
  return (
    <section className="w-full py-16 lg:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left — wider text column */}
          <div className="md:col-span-7">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              CobraInsurance.Health
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              We're The COBRA Experts
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
            >
              Helping individuals understand coverage choices between jobs, including COBRA
              continuation and affordable options like ACA, short-term, and other private plans.
              Save money by comparing all of your options.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 mb-7">
              {[
                'Independent advisors — we work for you, not the insurance companies',
                'Licensed to operate in 22 states and DC',
                'Specialists in COBRA administration and health insurance alternatives',
                'Free, no-obligation consultations at no cost to you',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/alternatives"
              className="inline-flex items-center px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Find affordable health coverage →
            </Link>
          </div>

          {/* Right — advisor card */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[200px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[400px]"
              style={{ border: '3px solid #e01f1f' }}
            >
              <div className="w-full" style={{ aspectRatio: '4 / 5' }}>
                <Image
                  src="https://media.base44.com/images/public/6a68570ee6720473b2a5fb34/c5fa395a0_mirrored-4oVTOA-jPY1.jpg"
                  alt="Licensed COBRA advisor at HealthLink Insurance Agency"
                  className="w-full h-full"
                  fittingType="fill"
                />
              </div>
              <div className="px-4 py-3 text-center" style={{ background: '#2d3441' }}>
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