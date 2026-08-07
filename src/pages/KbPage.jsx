import kb from '@/content/pages/kb.json';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/knowledge-base`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#webpage`,
      name: 'COBRA Insurance Knowledge Base — FAQs & Eligibility Guide',
      url: canonicalUrl,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is COBRA insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'COBRA (Consolidated Omnibus Budget Reconciliation Act) is a federal law that allows employees and their dependents to continue their employer-sponsored group health coverage for a limited time after a qualifying event such as job loss, reduction in hours, or other life changes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is eligible for COBRA continuation coverage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You are eligible for COBRA if you were covered under an employer group health plan, your employer has 20 or more employees, and you experienced a qualifying event such as voluntary or involuntary job loss (except for gross misconduct), reduction in work hours, divorce or legal separation, death of the covered employee, or a dependent child aging off the plan.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does COBRA coverage last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'COBRA coverage typically lasts 18 months for job loss or reduction in hours. It can extend to 36 months for other qualifying events such as divorce, death of the covered employee, or a dependent child losing eligibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does COBRA cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Under COBRA, you pay the full premium — both your share and your former employer's share — plus a 2% administrative fee. This can be significantly more expensive than what you paid as an active employee, often ranging from $400 to $700+ per month for an individual.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I enroll in COBRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After a qualifying event, your employer or plan administrator must send you a COBRA election notice within 14 days. You then have 60 days to elect COBRA coverage. Once elected, you have 45 days to pay your first premium retroactively to the date coverage ended.',
          },
        },
      ],
    },
  ],
};

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y" style={{ borderColor: '#eeeeee' }}>
      {kb.faqs.map((item, i) => (
        <div key={item.id}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 transition-colors hover:opacity-80"
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

export default function KbPage() {
  return (
    <>
      <Helmet>
        <title>COBRA Insurance Guide — Eligibility, Costs & Enrollment Deadlines</title>
        <meta
          name="description"
          content="Complete COBRA continuation coverage guide — who qualifies, how much it costs, the 60-day election window, qualifying events, and cheaper alternatives. Free help from licensed advisors."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="COBRA Insurance Guide — Eligibility, Costs & Enrollment Deadlines" />
        <meta
          property="og:description"
          content="Complete COBRA continuation coverage guide — who qualifies, how much it costs, the 60-day election window, qualifying events, and cheaper alternatives."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COBRA Insurance Guide — Eligibility, Costs & Enrollment Deadlines" />
        <meta name="twitter:description" content="Complete COBRA continuation coverage guide — who qualifies, how much it costs, the 60-day election window, qualifying events, and cheaper alternatives." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* Page Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              {kb.hero.eyebrow}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {kb.hero.title}
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              {kb.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Quick Nav Cards */}
        <section className="w-full py-10" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {kb.navCards.map((item) => (
                <a
                  key={item.id}
                  href={item.anchor}
                  className="block rounded-xl px-5 py-4 text-center font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ background: '#3c4c63', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* What is COBRA */}
        <section id="what-is-cobra" className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              What is COBRA?
            </h2>
            <div className="prose max-w-none flex flex-col gap-4">
              {kb.whatIsCobraParagraphs.map((p) => (
                <p
                  key={p.id}
                  className="text-base leading-relaxed"
                  style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
                >
                  {p.text}
                </p>
              ))}
            </div>

            {/* Qualifying Events */}
            <div className="mt-10">
              <h3
                className="text-xl font-bold mb-5"
                style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
              >
                Qualifying Events for COBRA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kb.qualifyingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-3 rounded-lg px-4 py-3"
                    style={{ background: '#efefef' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: '#e01f1f', marginTop: '6px' }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
                    >
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Costs */}
        <section id="eligibility" className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Eligibility &amp; Costs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Eligibility */}
              <div className="rounded-2xl p-6" style={{ background: '#fbfbfb' }}>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Who Is Eligible?
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {kb.eligibleBeneficiaries.map((item) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold text-sm mt-0.5">✓</span>
                      <span
                        className="text-sm"
                        style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Costs */}
              <div className="rounded-2xl p-6" style={{ background: '#fbfbfb' }}>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Typical COBRA Costs
                </h3>
                <div className="flex flex-col gap-3">
                  {kb.costRows.map((row) => (
                    <div
                      key={row.id}
                      className="flex justify-between items-center py-2 border-b"
                      style={{ borderColor: '#eeeeee' }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        {row.label}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                      >
                        {row.range}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="text-xs mt-3"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                >
                  {kb.costNote}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ background: '#3c4c63' }}
            >
              <div>
                <p
                  className="font-bold text-white text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {kb.costCtaHeading}
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  {kb.costCtaBody}
                </p>
              </div>
              <Link
                to="/alternatives"
                className="flex-shrink-0 px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Compare Alternatives →
              </Link>
            </div>
          </div>
        </section>

        {/* Enrollment Timeline */}
        <section id="timeline" className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              COBRA Enrollment Timeline
            </h2>
            <div className="relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
                style={{ background: '#eeeeee' }}
              />
              <div className="flex flex-col gap-6">
                {kb.timelineSteps.map((step, i) => (
                  <div key={step.id} className="flex gap-5 items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
                      style={{ background: i === 0 ? '#e01f1f' : '#3c4c63', fontFamily: 'var(--font-sans)' }}
                    >
                      {step.day}
                    </div>
                    <div className="pt-2">
                      <p
                        className="font-bold text-base mb-1"
                        style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                      >
                        {step.label}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
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
              <a href="tel:8445691234" className="font-semibold" style={{ color: '#e01f1f' }}>
                844-569-1234
              </a>
              .
            </p>
            <div className="rounded-2xl px-6" style={{ background: '#fbfbfb' }}>
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {kb.ctaHeading}
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              {kb.ctaBody}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/start-cobra"
                className="px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Start COBRA Enrollment →
              </Link>
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Compare Alternatives →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}