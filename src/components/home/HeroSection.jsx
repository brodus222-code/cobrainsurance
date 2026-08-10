import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const HERO_IMG = 'https://vibe.filesafe.space/1782002280399174400/assets/b02292c8-ee20-4954-9142-054465dd9411.png';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ background: '#1a1a1a', minHeight: '100vh' }}
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
        {/* neutral dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(26, 26, 26, 0.76)' }}
        />
      </div>

      {/* Main content — centered vertically */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            {/* Alert badge */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6"
              style={{ background: '#e01f1f' }}
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
              className="text-base lg:text-lg mb-3 leading-relaxed max-w-2xl"
              style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
            >
              COBRA is a federal law that allows you to keep your most recent employer-sponsored
              health coverage if it would otherwise end because of job loss or another qualifying
              life event.
            </p>
            <p
              className="text-base lg:text-lg mb-8 leading-relaxed max-w-2xl"
              style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
            >
              Continue your employer plan for up to 18 or 36 months depending on the qualifying event.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                to="/knowledge-base"
                className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
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
                Find Affordable Health Coverage
              </Link>
            </div>

            {/* Secondary nav links */}
            <div className="flex flex-col gap-2">
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
          </div>
        </div>
      </div>

      {/* Trust bar — translucent overlay at bottom */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(0, 0, 0, 0.25)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <div className="flex items-center gap-3 flex-1">
              <ShieldCheck className="w-7 h-7 text-white flex-shrink-0" />
              <p
                className="text-xs leading-snug"
                style={{ color: '#e6ecf3', fontFamily: 'var(--font-sans)' }}
              >
                <span className="font-semibold text-white block">
                  Federally-facilitated Marketplace Certified
                </span>
                Experts Helping Workers Between Jobs.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-1">
              <ShieldCheck className="w-7 h-7 text-white flex-shrink-0" />
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

    </section>
  );
}