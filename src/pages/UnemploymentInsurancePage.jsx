import unemployment_insurance from '@/content/pages/unemployment_insurance.json';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Phone,
  XCircle,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/unemployment`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faqpage`,
      name: 'Unemployment Insurance & Health Coverage — FAQs',
      url: canonicalUrl,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does unemployment insurance cover health insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Unemployment insurance replaces a portion of your lost wages but does not include health insurance. Your options include COBRA continuation, ACA marketplace plans, Medicaid, or short-term health insurance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to get health insurance after losing my job?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You have 60 days from the date you lose your job-based coverage to elect COBRA. Losing job-based coverage also opens a 60-day Special Enrollment Period for ACA marketplace plans.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I can\'t afford COBRA while on unemployment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ACA marketplace plans may be significantly cheaper with income-based subsidies. If your income drops low enough, you may qualify for Medicaid. Short-term health plans are another option. A licensed advisor can help you compare real costs.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto`,
      name: 'What to Do About Health Insurance When You Lose Your Job',
      description: 'Step-by-step guide to protecting your health coverage after job loss — filing for unemployment, understanding your coverage gap, and choosing between COBRA and ACA alternatives.',
      url: canonicalUrl,
      isPartOf: { '@id': `${site}/#website` },
    },
  ],
};

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y" style={{ borderColor: '#eeeeee' }}>
      {unemployment_insurance.faqs.map((item, i) => (
        <div key={item.id}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 transition-opacity hover:opacity-80"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span
              className="font-semibold text-base"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              {item.question}
            </span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#e01f1f' }} />
            ) : (
              <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#3c4c63' }} />
            )}
          </button>
          {openIndex === i && (
            <div className="pb-5">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function UnemploymentInsurancePage() {
  return (
    <>
      <Helmet>
        <title>Unemployment Insurance & Health Coverage — What Happens to Your Insurance | CobraInsurance.Health</title>
        <meta
          name="description"
          content="Lost your job? Unemployment benefits don't cover health insurance. Learn your options — COBRA continuation, ACA marketplace plans with subsidies, and Medicaid — and how to avoid a coverage gap."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Unemployment Insurance & Health Coverage — What Happens to Your Insurance" />
        <meta
          property="og:description"
          content="Lost your job? Unemployment benefits don't cover health insurance. Learn your options — COBRA, ACA marketplace plans with subsidies, and Medicaid — and how to avoid a coverage gap."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unemployment Insurance & Health Coverage — What Happens to Your Insurance" />
        <meta name="twitter:description" content="Lost your job? Unemployment benefits don't cover health insurance. Learn your options — COBRA, ACA marketplace plans with subsidies, and Medicaid." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              {unemployment_insurance.hero.eyebrow}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {unemployment_insurance.hero.title}
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto mb-8"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              {unemployment_insurance.hero.subtitle}
            </p>
            {/* Critical alert */}
            <div
              className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-left"
              style={{ background: 'rgba(224,31,31,0.18)', border: '1px solid rgba(224,31,31,0.4)' }}
            >
              <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: '#ff8080' }} />
              <p className="text-sm font-semibold" style={{ color: '#ffcccc', fontFamily: 'var(--font-sans)' }}>
                Unemployment benefits do <strong className="text-white">not</strong> include health insurance. You must act within{' '}
                <strong className="text-white">60 days</strong> to avoid a permanent coverage gap.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="w-full py-8" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {unemployment_insurance.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-xl px-4 py-4 text-center"
                  style={{ background: '#fbfbfb' }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What UI covers (and doesn't) ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              What Unemployment Insurance Covers — and What It Doesn't
            </h2>
            <p
              className="text-sm mb-8 leading-relaxed"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Unemployment insurance (UI) is a joint federal-state program that temporarily replaces
              a portion of your wages while you look for work. It is administered by your state's
              workforce agency and funded by employer payroll taxes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What UI covers */}
              <div className="rounded-2xl p-6" style={{ background: '#efefef' }}>
                <h3
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  <CheckCircle className="w-5 h-5" style={{ color: '#16a34a' }} />
                  What UI Provides
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Partial wage replacement (typically 40–60% of prior wages)',
                    'Weekly or bi-weekly benefit payments',
                    'Up to 26 weeks in most states (extended in recessions)',
                    'Job search assistance and retraining resources',
                    'Access to workforce development programs',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                      <span
                        className="text-sm"
                        style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What UI doesn't cover */}
              <div className="rounded-2xl p-6" style={{ background: '#fff4f4' }}>
                <h3
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  <XCircle className="w-5 h-5" style={{ color: '#e01f1f' }} />
                  What UI Does NOT Cover
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Health insurance or medical coverage of any kind',
                    'Dental or vision insurance',
                    'Life insurance continuation',
                    'Retirement plan contributions',
                    'Your full pre-layoff salary',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
                      <span
                        className="text-sm"
                        style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Callout */}
            <div
              className="mt-6 flex items-start gap-3 rounded-xl px-5 py-4"
              style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}
            >
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
              <p className="text-sm leading-relaxed" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                <strong>Important:</strong> Your employer-sponsored health insurance ends when your employment ends — typically on your last day of work or the last day of the month. Unemployment benefits begin after a waiting period. This creates a window where you may have no coverage at all unless you act quickly.
              </p>
            </div>
          </div>
        </section>

        {/* ── Step-by-step guide ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Your Action Plan After Job Loss
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Take these steps in the first days and weeks after losing your job to protect your income and your health coverage.
            </p>

            <div className="flex flex-col gap-10">
              {unemployment_insurance.steps.map((step, i) => (
                <div key={step.id} className="flex gap-6">
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{ background: i === 0 ? '#e01f1f' : '#3c4c63', fontFamily: 'var(--font-sans)' }}
                    >
                      {step.number}
                    </div>
                    {i < unemployment_insurance.steps.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2" style={{ background: '#dddddd', minHeight: '32px' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-2 flex-1">
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                    >
                      {step.body}
                    </p>

                    {/* Tip */}
                    {step.tip && (
                      <div
                        className="flex items-start gap-3 rounded-lg px-4 py-3 mb-4"
                        style={{ background: '#e8f4e8', border: '1px solid #b6ddb6' }}
                      >
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                        <p className="text-sm" style={{ color: '#1a5c1a', fontFamily: 'var(--font-sans)' }}>
                          {step.tip}
                        </p>
                      </div>
                    )}

                    {/* Detail bullets */}
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
                          <span className="text-sm" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coverage options comparison ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Your Health Coverage Options After Job Loss
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              You have more options than just COBRA. Compare them before you decide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(() => {
                const optionHrefs = {
                  co1: '/knowledge-base',
                  co2: '/alternatives',
                  co3: '/get-help',
                };
                return unemployment_insurance.coverageOptions.map((option) => (
                  <div
                    key={option.id}
                    className="rounded-2xl p-6 flex flex-col"
                    style={{ background: '#efefef' }}
                  >
                    {/* Badge */}
                    <span
                      className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                      style={{ background: option.badgeColor }}
                    >
                      {option.badge}
                    </span>

                    <h3
                      className="text-lg font-bold mb-4"
                      style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                    >
                      {option.title}
                    </h3>

                    {/* Pros */}
                    <div className="mb-3">
                      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#16a34a', fontFamily: 'var(--font-sans)' }}>
                        Advantages
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {option.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                            <span className="text-xs leading-relaxed" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>
                              {pro}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>
                        Drawbacks
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {option.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <XCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
                            <span className="text-xs leading-relaxed" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>
                              {con}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={optionHrefs[option.id] || '/'}
                      className="mt-auto block text-center px-4 py-2.5 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                      style={{ background: '#3c4c63', fontFamily: 'var(--font-sans)' }}
                    >
                      {option.cta} →
                    </Link>
                  </div>
                ));
              })()}
            </div>

            {/* Advisor nudge */}
            <div
              className="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ background: '#3c4c63' }}
            >
              <div>
                <p
                  className="font-bold text-white text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Not sure which option is right for you?
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  A licensed advisor can compare your actual costs — COBRA vs. ACA vs. Medicaid — in minutes.
                </p>
              </div>
              <Link
                to="/get-help"
                className="flex-shrink-0 px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Talk to an Advisor →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Still have questions? Call us at{' '}
              <a
                href="tel:8772627241"
                className="font-semibold"
                style={{ color: '#e01f1f' }}
              >
                877-262-7241
              </a>
              .
            </p>
            <div className="rounded-2xl px-6" style={{ background: '#fbfbfb' }}>
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Don't Let a Coverage Gap Catch You Off Guard
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              Our licensed advisors help workers between jobs compare COBRA, ACA plans, and other
              options — at no cost to you. Licensed in 22 states.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8772627241"
                className="flex items-center gap-2 px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-4 h-4" />
                Call 877-262-7241
              </a>
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Compare Coverage Options →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="w-full py-10" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
            >
              Related Resources
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'COBRA Knowledge Base', href: '/knowledge-base' },
                { label: 'Alternatives to COBRA', href: '/alternatives' },
                { label: 'How to Enroll in COBRA', href: '/start-cobra' },
                { label: 'Manage Your COBRA Plan', href: '/manage-cobra' },
                { label: 'State COBRA Rules', href: '/state-laws' },
                { label: 'Get Help from an Advisor', href: '/get-help' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-75"
                  style={{ background: '#3c4c63', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}