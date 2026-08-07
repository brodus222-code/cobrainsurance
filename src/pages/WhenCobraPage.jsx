import when_cobra from '@/content/pages/when_cobra.json';
import { useState } from 'react';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Clock,
  Shield,
  Heart,
  Stethoscope,
  CheckCircle,
  XCircle,
  Phone,
  ArrowRight,
  CalendarDays,
} from 'lucide-react';
import AdvisorModal from '@/components/AdvisorModal';

// Quote wizard product param map
const QUOTE_PRODUCT_MAP = {
  a1: 'aca',
  a2: 'stm',
  a3: 'hospital-indemnity',
  a4: 'accident',
  a5: 'teladoc',
};

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/alternatives`;

// Icon map keyed by alternative id — static, not from content layer
const altIcons = {
  a1: Shield,
  a2: Clock,
  a3: Heart,
  a4: DollarSign,
  a5: Stethoscope,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'Alternatives to COBRA Health Insurance — Compare Your Options',
  url: canonicalUrl,
  description:
    'Compare COBRA continuation coverage against ACA marketplace plans, short-term health insurance, hospital indemnity, accident-only, and Teladoc virtual care. Find the most affordable option for your situation.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function WhenCobraPage() {
  const [advisorModal, setAdvisorModal] = useState({ open: false, productName: '' });

  function openAdvisor(productName) {
    setAdvisorModal({ open: true, productName });
  }

  function closeAdvisor() {
    setAdvisorModal({ open: false, productName: '' });
  }

  return (
    <>
      <AdvisorModal
        productName={advisorModal.productName}
        open={advisorModal.open}
        onClose={closeAdvisor}
      />
      <Helmet>
        <title>Cheaper Alternatives to COBRA Health Insurance — Compare Plans & Costs</title>
        <meta
          name="description"
          content="COBRA too expensive? Compare ACA marketplace plans with subsidies, short-term health insurance, hospital indemnity, and virtual care. Find affordable coverage after job loss — free advisor help."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Cheaper Alternatives to COBRA Health Insurance — Compare Plans & Costs" />
        <meta
          property="og:description"
          content="COBRA too expensive? Compare ACA marketplace plans with subsidies, short-term health insurance, hospital indemnity, and virtual care. Find affordable coverage after job loss."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheaper Alternatives to COBRA Health Insurance — Compare Plans & Costs" />
        <meta name="twitter:description" content="COBRA too expensive? Compare ACA marketplace plans with subsidies, short-term health insurance, hospital indemnity, and virtual care. Find affordable coverage after job loss." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              {when_cobra.hero.eyebrow}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {when_cobra.hero.title}
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto mb-8"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              {when_cobra.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#alternatives"
                className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Compare All Options →
              </a>
              <a
                href="tel:8772627241"
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-4 h-4" />
                877-262-7241
              </a>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="w-full py-8" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {when_cobra.stats.map((item) => (
                <div key={item.id} className="rounded-xl px-5 py-5" style={{ background: '#fbfbfb' }}>
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.stat}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When COBRA makes sense */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              {when_cobra.whenCobraSection.heading}
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              {when_cobra.whenCobraSection.intro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {when_cobra.whenCobraSection.scenarios.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl p-5"
                  style={{ background: '#efefef' }}
                >
                  <p
                    className="font-bold text-base mb-2"
                    style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternatives Cards */}
        <section id="alternatives" className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3 text-center"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              {when_cobra.alternativesSection.heading}
            </h2>
            <p
              className="text-sm text-center mb-10"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              {when_cobra.alternativesSection.intro}
            </p>

            <div className="flex flex-col gap-6">
              {when_cobra.alternatives.map((alt) => {
                const Icon = altIcons[alt.id] || Shield;
                return (
                  <div
                    key={alt.id}
                    className="rounded-2xl overflow-hidden shadow-sm"
                    style={{
                      background: '#fbfbfb',
                      border: alt.highlight ? '2px solid #e01f1f' : '2px solid transparent',
                    }}
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2.5 rounded-xl"
                            style={{ background: alt.highlight ? '#e01f1f' : '#3c4c63' }}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3
                                className="text-xl font-bold"
                                style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                              >
                                {alt.title}
                              </h3>
                              {alt.badge && (
                                <span
                                  className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
                                  style={{ background: alt.highlight ? '#e01f1f' : '#3c4c63' }}
                                >
                                  {alt.badge}
                                </span>
                              )}
                            </div>
                            <p
                              className="text-sm"
                              style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                            >
                              {alt.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className="text-2xl font-bold"
                            style={{ color: alt.highlight ? '#e01f1f' : '#3c4c63', fontFamily: 'var(--font-heading)' }}
                          >
                            {alt.cost}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                          >
                            {alt.costNote}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="rounded-lg px-4 py-3" style={{ background: '#efefef' }}>
                          <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>Duration</p>
                          <p className="text-sm font-semibold" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>{alt.duration}</p>
                        </div>
                        <div className="rounded-lg px-4 py-3 md:col-span-2" style={{ background: '#efefef' }}>
                          <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>Best For</p>
                          <p className="text-sm font-semibold" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>{alt.bestFor}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#16a34a', fontFamily: 'var(--font-sans)' }}>Pros</p>
                          <ul className="flex flex-col gap-1.5">
                            {alt.pros.map((p) => (
                              <li key={p.id} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                                <span className="text-sm" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{p.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#dc2626', fontFamily: 'var(--font-sans)' }}>Cons</p>
                          <ul className="flex flex-col gap-1.5">
                            {alt.cons.map((c) => (
                              <li key={c.id} className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#dc2626' }} />
                                <span className="text-sm" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{c.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-5 pt-4 border-t flex items-center gap-3 flex-wrap" style={{ borderColor: '#e5e7eb' }}>
                        <Link
                          to={`/check-options?product=${QUOTE_PRODUCT_MAP[alt.id] || ''}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                          style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                        >
                          Get a Free Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => openAdvisor(alt.title)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border-2 transition-colors hover:text-white"
                          style={{
                            borderColor: '#3c4c63',
                            color: '#3c4c63',
                            fontFamily: 'var(--font-sans)',
                            background: 'transparent',
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
                          Speak with an Advisor
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Side-by-Side Comparison
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              How COBRA stacks up against the most common alternatives.
            </p>
            <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid #eeeeee' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: '#3c4c63' }}>
                    <th className="text-left px-5 py-4 text-white font-semibold" style={{ fontFamily: 'var(--font-sans)', minWidth: '200px' }}>Feature</th>
                    {['COBRA', 'ACA Plan', 'Short-Term', 'Indemnity'].map((col) => (
                      <th key={col} className="px-4 py-4 text-white font-semibold text-center" style={{ fontFamily: 'var(--font-sans)' }}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {when_cobra.comparisonRows.map((row, i) => (
                    <tr
                      key={row.id}
                      style={{ background: i % 2 === 0 ? '#fbfbfb' : '#efefef' }}
                    >
                      <td className="px-5 py-3.5 font-medium" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{row.label}</td>
                      <td className="px-4 py-3.5 text-center">{row.cobra ? <CheckCircle className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} /> : <XCircle className="w-5 h-5 mx-auto" style={{ color: '#dc2626' }} />}</td>
                      <td className="px-4 py-3.5 text-center">{row.aca ? <CheckCircle className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} /> : <XCircle className="w-5 h-5 mx-auto" style={{ color: '#dc2626' }} />}</td>
                      <td className="px-4 py-3.5 text-center">{row.shortTerm ? <CheckCircle className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} /> : <XCircle className="w-5 h-5 mx-auto" style={{ color: '#dc2626' }} />}</td>
                      <td className="px-4 py-3.5 text-center">{row.indemnity ? <CheckCircle className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} /> : <XCircle className="w-5 h-5 mx-auto" style={{ color: '#dc2626' }} />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2
                  className="text-4xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {when_cobra.ctaHeading}
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
                >
                  {when_cobra.ctaBody}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:8772627241"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded font-bold text-base transition-opacity hover:opacity-90"
                  style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  <Phone className="w-5 h-5" />
                  Call 877-262-7241
                </a>
                <Link
                  to="/get-help"
                  className="flex items-center justify-center px-6 py-4 rounded font-bold text-base border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Contact an Advisor Online →
                </Link>
                <p
                  className="text-xs text-center"
                  style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-sans)' }}
                >
                  {when_cobra.ctaDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="w-full py-10" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
            >
              Related Resources
            </p>
            <div className="flex flex-wrap gap-3">
              {(() => {
                const linkHrefs = {
                  rl1: '/knowledge-base',
                  rl2: '/start-cobra',
                  rl3: '/manage-cobra',
                  rl4: '/get-help',
                };
                return when_cobra.relatedLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={linkHrefs[link.id] || '/'}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-75"
                    style={{ background: '#3c4c63', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                  >
                    {link.label}
                  </Link>
                ));
              })()}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}