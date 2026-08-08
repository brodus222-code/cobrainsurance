import { Link } from 'react-router-dom';
import { Helmet } from '@/lib/helmet';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const site = 'https://cobrainsurance.health';

const comparisonJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${site}/cobra-vs-aca#article`,
  headline: 'COBRA vs ACA Marketplace: Which Health Coverage Is Right for You?',
  description: 'A side-by-side comparison of COBRA continuation coverage and ACA Marketplace plans — costs, eligibility, coverage gaps, and how to choose the best option after a job loss.',
  url: `${site}/cobra-vs-aca`,
  author: { '@type': 'Organization', name: 'HealthLink Insurance Agency' },
  publisher: { '@id': `${site}/#organization` },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${site}/cobra-vs-aca` },
  about: ['COBRA', 'ACA Marketplace', 'health insurance comparison'],
};

export default function CobraVsAcaPage() {
  return (
    <>
      <Helmet>
        <title>COBRA vs ACA Marketplace: Which Health Coverage Is Right for You?</title>
        <meta
          name="description"
          content="A side-by-side comparison of COBRA continuation coverage and ACA Marketplace plans — costs, eligibility, coverage gaps, and how to choose the best option after a job loss."
        />
        <link rel="canonical" href={`${site}/cobra-vs-aca`} />
        <meta property="og:title" content="COBRA vs ACA Marketplace: Which Health Coverage Is Right for You?" />
        <meta
          property="og:description"
          content="A side-by-side comparison of COBRA continuation coverage and ACA Marketplace plans."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${site}/cobra-vs-aca`} />
        <script type="application/ld+json">{JSON.stringify(comparisonJsonLd)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#2d3441' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              Coverage Comparison Guide
            </span>
            <h1
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              COBRA vs ACA Marketplace: Which Health Coverage Is Right for You?
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              After a job loss or qualifying life event, you typically have two main paths for
              health insurance: continue your employer plan through COBRA, or buy a new plan on the
              ACA Marketplace. Understanding the trade-offs can save you thousands of dollars.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="w-full py-12 lg:py-16" style={{ background: '#ffffff' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              When you lose employer-sponsored health insurance, you face an important decision:
              elect COBRA continuation coverage to keep your current plan, or shop for a new plan
              on the Affordable Care Act (ACA) Marketplace. Both options have distinct advantages
              and drawbacks depending on your healthcare needs, budget, and timing. This guide
              compares the two so you can make an informed choice.
            </p>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              What Is COBRA Continuation Coverage?
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              COBRA lets you stay on your former employer's health plan for up to 18 or 36 months
              after a qualifying event. You keep the exact same doctors, networks, and benefits
              you had while employed — but you pay the full premium plus a 2% administrative fee.
              For many people, this means the monthly cost doubles or triples compared to what
              was deducted from their paycheck, because the employer is no longer contributing
              its share.
            </p>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              What Is the ACA Marketplace?
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              The ACA Marketplace (HealthCare.gov or your state exchange) offers individual health
              plans that cover the ten essential health benefits required by law, including
              doctor visits, hospitalization, prescription drugs, and preventive care. You cannot
              be denied or charged more for pre-existing conditions. Most people who lose
              employer coverage qualify for a Special Enrollment Period, and many are eligible
              for premium tax credits that can dramatically reduce monthly costs — sometimes to
              less than $100 per month.
            </p>

            {/* Comparison table */}
            <h2
              className="text-2xl font-bold mt-8 mb-4"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                <thead>
                  <tr style={{ background: '#2d3441' }}>
                    <th className="text-left px-4 py-3 text-white font-bold">Factor</th>
                    <th className="text-left px-4 py-3 text-white font-bold">COBRA</th>
                    <th className="text-left px-4 py-3 text-white font-bold">ACA Marketplace</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Monthly cost', 'Full premium + 2% fee', 'Often lower with subsidies'],
                    ['Network', 'Same as employer plan', 'Varies by plan'],
                    ['Pre-existing conditions', 'Covered', 'Covered by law'],
                    ['Enrollment window', '60 days from notice', 'Special Enrollment Period'],
                    ['Duration', '18–36 months', 'Annual, renewable'],
                    ['Subsidies available', 'No', 'Yes (tax credits)'],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{ background: i % 2 === 0 ? '#f7f7f7' : '#ffffff' }}>
                      <td className="px-4 py-3 font-semibold" style={{ color: '#2d3441' }}>{row[0]}</td>
                      <td className="px-4 py-3" style={{ color: '#333333' }}>{row[1]}</td>
                      <td className="px-4 py-3" style={{ color: '#333333' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              When COBRA Makes Sense
            </h2>
            <ul
              className="flex flex-col gap-2 mb-5 ml-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              {[
                'You are mid-treatment and need to keep your current doctors and specialists',
                'You have high annual healthcare costs and want a lower deductible',
                'You expect new employer coverage within a few months',
                'Your employer plan is richer than available Marketplace options',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 list-none ml-0">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              When the ACA Marketplace Makes Sense
            </h2>
            <ul
              className="flex flex-col gap-2 mb-5 ml-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              {[
                'COBRA premiums are too expensive for your budget',
                'You qualify for premium tax credits based on your income',
                'You do not have strong ties to your current provider network',
                'You want year-round renewable coverage without an expiration date',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 list-none ml-0">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Need Help Comparing Your Options?
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              Our licensed advisors can run the numbers for your specific situation — comparing
              COBRA costs with Marketplace plans and subsidies — at no cost to you. We help you
              find the most affordable coverage that meets your needs.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Compare Your Options Now →
              </Link>
              <a
                href="tel:8445691234"
                className="flex items-center gap-2 px-6 py-3 rounded font-bold text-sm border-2 transition-colors hover:bg-red-50"
                style={{ borderColor: '#e01f1f', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-4 h-4" />
                Call 844-569-1234
              </a>
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className="w-full py-10" style={{ background: '#2d3441' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-white flex-shrink-0" />
              <p className="text-xs leading-snug text-left" style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}>
                <span className="font-semibold text-white block">Federally-facilitated Marketplace Certified</span>
                Experts Helping Workers Between Jobs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-white flex-shrink-0" />
              <p className="text-xs leading-snug text-left" style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}>
                <span className="font-semibold text-white block">Fully Licensed &amp; Approved Advisors</span>
                Licensed in 22 states &amp; DC.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}