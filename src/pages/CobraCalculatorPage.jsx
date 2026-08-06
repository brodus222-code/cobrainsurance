import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { Phone, Shield, Clock, Info } from 'lucide-react';
import CobraCalculator from '@/components/calculator/CobraCalculator';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/cobra-calculator`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is COBRA premium calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under federal COBRA, you can be charged up to 102% of the full group plan premium — the 100% plan cost plus a 2% administrative fee. When you were employed, your employer typically paid a large share; on COBRA you pay the entire amount yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my COBRA cost more than my paycheck deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your paycheck deduction only reflected your share of the premium. Your employer was paying the rest. On COBRA you pay 100% of the plan cost plus the 2% admin fee, which is why the monthly amount is much higher.',
      },
    },
  ],
};

export default function CobraCalculatorPage() {
  return (
    <>
      <Helmet>
        <title>COBRA Cost Calculator — Estimate Your Monthly Premium | CobraInsurance.Health</title>
        <meta
          name="description"
          content="Free COBRA insurance cost calculator. Estimate your monthly COBRA continuation premium based on your current contribution and employer share. See the 2% administrative fee breakdown."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="COBRA Cost Calculator — CobraInsurance.Health" />
        <meta
          property="og:description"
          content="Estimate your monthly COBRA continuation premium and see exactly how the 102% rule affects your cost."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="w-full py-14 lg:py-20"
        style={{ background: 'linear-gradient(135deg, #3c4c63 0%, #2a3749 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            Free COBRA Cost Estimator
          </p>
          <h1
            className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            COBRA Premium Calculator
          </h1>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
          >
            See how much COBRA continuation coverage will cost you each month. Enter what
            you pay now and we'll estimate your full premium — including the 2% administrative fee.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CobraCalculator />

          {/* How it works */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'COBRA = 102%',
                body: 'Federal law lets plans charge up to 102% of the full group premium — the plan cost plus a 2% admin fee.',
              },
              {
                icon: Clock,
                title: 'Lasts 18–36 months',
                body: 'Most qualifying events give you 18 months of continuation, extended to 36 in certain situations like disability.',
              },
              {
                icon: Info,
                title: 'You pay the full share',
                body: 'Your employer no longer contributes, so you cover 100% of the premium — that\u2019s why COBRA feels expensive.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{ background: '#ffffff', border: '1px solid #eeeeee' }}
              >
                <item.icon className="w-7 h-7 mb-3" style={{ color: '#e01f1f' }} />
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-xs mt-6 text-center"
            style={{ color: '#9ca3af', fontFamily: 'var(--font-sans)' }}
          >
            This calculator provides an estimate for planning purposes only. Your actual COBRA
            premium is set by your plan administrator and may differ. The 2% administrative fee
            applies to federal COBRA; state mini-COBRA caps vary.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-14" style={{ background: '#3c4c63' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl lg:text-3xl font-bold mb-3 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            COBRA costing more than expected?
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
          >
            ACA Marketplace plans and short-term coverage are often far cheaper than COBRA.
            Compare your options with a licensed advisor — free, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-lg font-bold text-sm text-white uppercase tracking-wide transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Compare Alternatives
            </Link>
            <a
              href="tel:8772627241"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white uppercase tracking-wide transition-colors hover:bg-white/10"
              style={{ border: '2px solid #ffffff', fontFamily: 'var(--font-sans)' }}
            >
              <Phone className="w-4 h-4" />
              877-262-7241
            </a>
          </div>
        </div>
      </section>
    </>
  );
}