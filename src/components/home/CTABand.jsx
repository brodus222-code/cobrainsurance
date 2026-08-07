import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function CTABand() {
  return (
    <section className="w-full py-14 lg:py-20" style={{ background: '#e01f1f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — large heading */}
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Is COBRA Too Expensive?
            </h2>
          </div>

          {/* Right — body + CTA */}
          <div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              Short-term health insurance is a popular option available in most states to cover
              gaps between major medical plans. It's affordable and can start tomorrow.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90"
                style={{
                  background: '#ffffff',
                  color: '#e01f1f',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Get A Quote Now
              </Link>
              <a
                href="tel:8772627241"
                className="flex items-center gap-2 font-bold text-white text-lg transition-opacity hover:opacity-80"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-5 h-5" />
                Call Us at 877-262-7241
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}