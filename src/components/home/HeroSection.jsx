import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/6a68570ee6720473b2a5fb34/7a5b75387_gettyimages-1205374923-2048x2048.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#3c4c63', minHeight: '520px' }}
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
        {/* dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(31,38,51,0.92) 0%, rgba(31,38,51,0.75) 50%, rgba(31,38,51,0.55) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Alert badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6"
            style={{ background: '#e01f1f' }}
          >
            ⚠️ View Your Insurance Options
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
            className="text-base lg:text-lg mb-3 leading-relaxed"
            style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
          >
            COBRA is a federal law that allows you to keep your most recent employer-sponsored
            health coverage if it would otherwise end because of job loss or another qualifying
            life event.
          </p>
          <p
            className="text-sm mb-8"
            style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            Continue your employer plan for up to 18 or 36 months depending on the qualifying event.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/kb"
              className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              COBRA Application Instructions →
            </Link>
            <Link
              to="/when-cobra"
              className="px-6 py-3 rounded font-bold text-sm transition-colors hover:bg-white hover:text-gray-900"
              style={{
                border: '2px solid #ffffff',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Find Affordable Health Coverage →
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: '#4e6080' }}>
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: '3.5rem', height: '3.5rem', background: '#ffffff' }}
              aria-hidden="true"
            >
              <ShieldCheck className="w-9 h-9" style={{ color: '#e01f1f' }} />
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
              <span className="font-semibold text-white">Federally-facilitated Marketplace Certified</span>
              <br />
              Experts Helping Workers Between Jobs · Licensed in 22 States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}