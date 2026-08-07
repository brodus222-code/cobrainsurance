import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CTABand() {
  return (
    <section className="w-full py-14 lg:py-20" style={{ background: '#2d3441' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Is COBRA Too Expensive?
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-2xl mx-auto"
          style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
        >
          Short-term health insurance is a popular option available in most states to cover
          gaps between major medical plans. It's affordable and can start tomorrow.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/alternatives"
            className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
          >
            Get A Quote Now
          </Link>
          <a
            href="tel:8445691234"
            className="flex items-center gap-2 font-bold text-white text-lg transition-opacity hover:opacity-80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <Phone className="w-5 h-5" />
            Call Us at 844-569-1234
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <div className="flex items-center gap-3 justify-center">
            <ShieldCheck className="w-7 h-7 text-white flex-shrink-0" />
            <p
              className="text-xs leading-snug text-left"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              <span className="font-semibold text-white block">
                Federally-facilitated Marketplace Certified
              </span>
              Experts Helping Workers Between Jobs.
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <CheckCircle2 className="w-7 h-7 text-white flex-shrink-0" />
            <p
              className="text-xs leading-snug text-left"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              <span className="font-semibold text-white block">
                Fully Licensed &amp; Approved Advisors
              </span>
              Licensed &amp; Approved by Department of Insurance across 22 states &amp; DC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}