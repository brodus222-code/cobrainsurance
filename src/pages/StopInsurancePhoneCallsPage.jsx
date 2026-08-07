import stop_insurance_phone_calls from '@/content/pages/stop_insurance_phone_calls.json';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  PhoneOff,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  Ban,
  Clock,
  Mail,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/do-not-call`;

// Icon map for steps — static, not from content layer
const stepIcons = {
  st1: ShieldCheck,
  st2: PhoneOff,
  st3: FileText,
  st4: Ban,
  st5: Clock,
};

// Static href map for related links
const relatedLinkHrefs = {
  rl1: '/knowledge-base',
  rl2: '/start-cobra',
  rl3: '/alternatives',
  rl4: '/state-laws',
  rl5: '/get-help',
};

// Static href map for reporting agencies
const agencyHrefs = {
  ra1: 'https://www.donotcall.gov',
  ra2: 'https://consumercomplaints.fcc.gov',
  ra3: 'https://www.naag.org/find-my-ag/',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faqpage`,
      name: 'How to Stop Insurance Phone Calls — COBRA & Health Insurance Solicitations',
      url: canonicalUrl,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the Do Not Call Registry stop insurance calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The National Do Not Call Registry stops most telemarketing calls, but there are exceptions. Insurance companies you have an existing relationship with, political organizations, charities, and survey callers are exempt. Registering still reduces most unsolicited sales calls within 31 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I stop calls from my current insurance company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Contact your insurance company directly and ask to be placed on their internal do-not-call list. Under the Telephone Consumer Protection Act (TCPA), they must honor your request. Get confirmation in writing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are COBRA-related calls legal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Calls from your plan administrator or licensed insurance advisors about your active COBRA coverage are generally permitted. Unsolicited sales calls from companies you have no relationship with must comply with Do Not Call rules and TCPA requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I keep getting illegal robocalls about health insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'File a complaint with the FTC at donotcall.gov, the FCC at fcc.gov/consumers/guides/filing-informal-complaint, and your state Attorney General. Document the date, time, caller ID, and what was said. Repeated illegal robocalls may entitle you to damages under the TCPA.',
          },
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      name: 'How to Stop Insurance Phone Calls — COBRA & Health Insurance Solicitations',
      url: canonicalUrl,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
    },
  ],
};

// Callout styles — static UI config, not content
const calloutStyles = {
  info: {
    bg: '#e8f0f8', border: '#b8cfe8',
    icon: <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#3c4c63' }} />,
    label: 'Note', labelColor: '#3c4c63', textColor: '#2a3a4d',
  },
  tip: {
    bg: '#edfaf3', border: '#86d9aa',
    icon: <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#1a7a45' }} />,
    label: 'Tip', labelColor: '#1a7a45', textColor: '#14532d',
  },
  warning: {
    bg: '#fff4e5', border: '#f5c97a',
    icon: <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />,
    label: 'Watch out', labelColor: '#b45309', textColor: '#7c3a00',
  },
};

// Inline FAQ accordion — content values rendered directly, no prop-drilling
function InlineFaqList() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="divide-y" style={{ borderColor: '#eeeeee' }}>
      {stop_insurance_phone_calls.faqs.map((faq, i) => (
        <div key={faq.id}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 transition-opacity hover:opacity-80"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-base" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              {faq.question}
            </span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#e01f1f' }} />
            ) : (
              <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#3c4c63' }} />
            )}
          </button>
          {openIndex === i && (
            <p className="pb-5 text-sm leading-relaxed" style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function StopInsurancePhoneCallsPage() {
  return (
    <>
      <Helmet>
        <title>How to Stop Unwanted Insurance Phone Calls — Do Not Call & TCPA Guide</title>
        <meta
          name="description"
          content="Stop unwanted health insurance and COBRA phone calls in 5 steps — register with Do Not Call, revoke consent from lead gen sites, use carrier blocking tools, and report TCPA violations for up to $1,500 per call."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="How to Stop Unwanted Insurance Phone Calls — Do Not Call & TCPA Guide" />
        <meta property="og:description" content="Stop unwanted health insurance and COBRA phone calls in 5 steps — register with Do Not Call, revoke consent, use carrier blocking tools, and report TCPA violations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Stop Unwanted Insurance Phone Calls — Do Not Call & TCPA Guide" />
        <meta name="twitter:description" content="Stop unwanted health insurance and COBRA phone calls in 5 steps — register with Do Not Call, revoke consent, use carrier blocking tools, and report TCPA violations." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
              <Link to="/knowledge-base" className="hover:text-white transition-colors">COBRA Knowledge Base</Link>
              <span>/</span>
              <span className="text-white">Stop Insurance Phone Calls</span>
            </div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              {stop_insurance_phone_calls.hero.eyebrow}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {stop_insurance_phone_calls.hero.title}
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mb-8"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              {stop_insurance_phone_calls.hero.subtitle}
            </p>
            {/* Quick stat strip */}
            <div className="flex flex-wrap gap-4">
              {stop_insurance_phone_calls.heroStats.map((stat) => (
                <div key={stat.id} className="rounded-xl px-5 py-3" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why so many calls ── */}
        <section className="w-full py-12" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}
            >
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
              <div>
                <p className="font-bold text-base mb-2" style={{ color: '#7c3a00', fontFamily: 'var(--font-heading)' }}>
                  {stop_insurance_phone_calls.whySoManyCallsHeading}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                  {stop_insurance_phone_calls.whySoManyCallsBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 Steps ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              {stop_insurance_phone_calls.stepsHeading}
            </h2>
            <p className="text-sm mb-10" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
              {stop_insurance_phone_calls.stepsIntro}
            </p>

            <div className="flex flex-col gap-6">
              {stop_insurance_phone_calls.steps.map((s) => {
                const Icon = stepIcons[s.id] || ShieldCheck;
                const calloutStyle = s.calloutType && calloutStyles[s.calloutType] ? calloutStyles[s.calloutType] : null;
                return (
                  <div
                    key={s.id}
                    className="rounded-2xl p-6 lg:p-8"
                    style={{ border: '2px solid #eeeeee', background: '#fbfbfb' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                        >
                          {s.step}
                        </div>
                        <div className="p-2 rounded-lg" style={{ background: '#efefef' }}>
                          <Icon className="w-4 h-4" style={{ color: '#3c4c63' }} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>
                          {s.body}
                        </p>
                        {calloutStyle && s.calloutText && (
                          <div
                            className="flex items-start gap-3 rounded-lg px-4 py-3 mt-4"
                            style={{ background: calloutStyle.bg, border: `1px solid ${calloutStyle.border}` }}
                          >
                            {calloutStyle.icon}
                            <p className="text-sm leading-relaxed" style={{ color: calloutStyle.textColor, fontFamily: 'var(--font-sans)' }}>
                              <strong style={{ color: calloutStyle.labelColor }}>{calloutStyle.label}:</strong>{' '}
                              {s.calloutText}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Who can still call you ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              {stop_insurance_phone_calls.exemptionsHeading}
            </h2>
            <p className="text-sm mb-8" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
              {stop_insurance_phone_calls.exemptionsIntro}
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #eeeeee' }}>
              <div
                className="grid grid-cols-3 px-5 py-3 text-xs font-bold uppercase tracking-wide"
                style={{ background: '#3c4c63', color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
              >
                <span>Who</span>
                <span>Why they can call</span>
                <span>How to stop them</span>
              </div>
              {stop_insurance_phone_calls.exemptions.map((row, i) => (
                <div
                  key={row.id}
                  className="grid grid-cols-3 px-5 py-4 border-b text-sm gap-3"
                  style={{ borderColor: '#eeeeee', background: i % 2 === 0 ? '#fbfbfb' : '#f7f7f7' }}
                >
                  <span className="font-semibold" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>{row.who}</span>
                  <span style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>{row.why}</span>
                  <span style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>{row.howToStop}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reporting resources ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              {stop_insurance_phone_calls.reportingHeading}
            </h2>
            <p className="text-sm mb-8" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
              {stop_insurance_phone_calls.reportingIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stop_insurance_phone_calls.reportingAgencies.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-6"
                  style={{ background: '#efefef', border: '2px solid #eeeeee' }}
                >
                  <div className="p-2.5 rounded-xl inline-flex mb-4" style={{ background: '#3c4c63' }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                    {item.agency}
                  </h3>
                  <a
                    href={agencyHrefs[item.id] || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold mb-3 block transition-opacity hover:opacity-75"
                    style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.url} ↗
                  </a>
                  <p className="text-sm leading-relaxed" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm mb-8" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
              Still have questions? Call us at{' '}
              <a href="tel:8445691234" className="font-semibold" style={{ color: '#e01f1f' }}>844-569-1234</a>.
            </p>
            <div className="rounded-2xl px-6" style={{ background: '#fbfbfb' }}>
              <InlineFaqList />
            </div>
          </div>
        </section>

        {/* ── Advisor note ── */}
        <section className="w-full py-12" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
              style={{ background: '#3c4c63' }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
                  {stop_insurance_phone_calls.advisorNoteEyebrow}
                </p>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stop_insurance_phone_calls.advisorNoteHeading}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
                  {stop_insurance_phone_calls.advisorNoteBody}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:8445691234"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  <Phone className="w-4 h-4" />
                  Call 844-569-1234
                </a>
                <Link
                  to="/get-help"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Contact Us Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {stop_insurance_phone_calls.ctaHeading}
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}>
              {stop_insurance_phone_calls.ctaBody}
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

        {/* ── Quick Links ── */}
        <section className="w-full py-10" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
              Related Resources
            </p>
            <div className="flex flex-wrap gap-3">
              {stop_insurance_phone_calls.relatedLinks.map((link) => (
                <Link
                  key={link.id}
                  to={relatedLinkHrefs[link.id] || '/'}
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