import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/6a68570ee6720473b2a5fb34/fb11dc10a_gettyimages-621905776-2048x2048.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#2d3a55', minHeight: '560px' }}
    >
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* dark blue overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(45, 58, 85, 0.86)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Alert badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6"
            style={{ background: '#ff4d5a' }}
          >
            ● View Your COBRA Options
          </span>

          {/* Headline */}
          <h1
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Right To Continue Coverage (COBRA)
          </h1>

          {/* Subheadline */}
          <p
            className="text-base lg:text-lg mb-8 leading-relaxed max-w-2xl"
            style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
          >
            COBRA is a federal law that allows you to keep your most recent employer-sponsored
            health coverage if it would otherwise end because of job loss or another qualifying
            life event. Continue your employer plan for up to 18 or 36 months depending on the
            qualifying event.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              to="/knowledge-base"
              className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: '#ff4d5a', fontFamily: 'var(--font-sans)' }}
            >
              COBRA Application Instructions &gt;
            </Link>
            <Link
              to="/alternatives"
              className="px-6 py-3 rounded font-bold text-sm transition-colors hover:bg-white hover:text-gray-900"
              style={{
                border: '2px solid #ffffff',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Find Affordable Health Coverage &gt;
            </Link>
          </div>

          {/* Secondary nav links */}
          <div className="flex flex-col gap-2 mb-10">
            <Link
              to="/check-options"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
            >
              Prefer to start online without a call?{' '}
              <span className="font-semibold underline">Check your options here &gt;</span>
            </Link>
            <Link
              to="/quiz"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
            >
              Not sure which plan is right for you?{' '}
              <span className="font-semibold underline">Take our quick quiz &gt;</span>
            </Link>
          </div>

          {/* Trust strip — two columns divided by white line */}
          <div
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-6 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.4)' }}
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.5)',
                }}
                aria-hidden="true"
              >
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <p
                className="text-xs leading-snug"
                style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
              >
                <span className="font-semibold text-white block">
                  Federally-facilitated Marketplace Certified
                </span>
                Experts Helping Workers Between Jobs
              </p>
            </div>

            <div className="flex items-center gap-3 flex-1">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.5)',
                }}
                aria-hidden="true"
              >
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <p
                className="text-xs leading-snug"
                style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
              >
                <span className="font-semibold text-white block">
                  Fully Licensed &amp; Approved Advisors
                </span>
                Licensed &amp; Approved by Department of Insurance across 22 states &amp; DC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Talk to an Advisor button */}
      <Link
        to="/get-help"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white shadow-lg transition-opacity hover:opacity-90"
        style={{ background: '#ff4d5a', fontFamily: 'var(--font-sans)' }}
      >
        <MessageCircle className="w-4 h-4" />
        Talk to an Advisor
      </Link>
    </section>
  );
}