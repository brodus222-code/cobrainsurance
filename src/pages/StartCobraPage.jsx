import start_cobra from '@/content/pages/start_cobra.json';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import {
  ClipboardList,
  Mail,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Phone,
  Clock,
  FileText,
  ChevronRight,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/start-cobra`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `${canonicalUrl}#howto`,
  name: 'How to Enroll in COBRA Continuation Coverage',
  description:
    'Step-by-step guide to electing COBRA health insurance after losing employer-sponsored coverage. Covers the election notice, 60-day window, first premium payment, and what to expect.',
  url: canonicalUrl,
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Receive Your COBRA Election Notice',
      text: 'After your qualifying event, your employer notifies the plan administrator, who must send you a COBRA election notice within 14 days. The notice explains your coverage options, premium costs, and deadlines.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Review Your Options',
      text: 'Before electing COBRA, compare it against ACA marketplace plans and other alternatives. You have 60 days to decide — use that time wisely.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Complete and Return the Election Form',
      text: 'Fill out the election form included with your notice and return it to the plan administrator by the deadline. Keep a copy and send it via certified mail if mailing.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Pay Your First Premium',
      text: 'After electing COBRA, you have 45 days to pay your first premium. Coverage is retroactive to the date it ended, so any claims during the gap are covered once you pay.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Set Up Ongoing Payments',
      text: 'Set up automatic payments or calendar reminders to avoid missing the 30-day grace period. Missing a payment can terminate your COBRA coverage permanently.',
    },
  ],
  isPartOf: { '@id': `${site}/#website` },
};

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Receive Your Election Notice',
    body: 'After your qualifying event (job loss, reduced hours, etc.), your employer must notify the plan administrator within 30 days. The administrator then has 14 days to mail you a COBRA election notice.',
    callout: null,
    warning: null,
    details: [
      'The notice lists all plans available for continuation',
      'It includes the full monthly premium amount (employer + employee share + 2% admin fee)',
      'It specifies your election deadline — typically 60 days from the later of coverage loss or notice receipt',
    ],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Review Your Options Before Deciding',
    body: 'You are not required to elect COBRA immediately — you have 60 days. Use this window to compare COBRA against ACA marketplace plans, short-term coverage, and other alternatives. For many people, an ACA plan with subsidies is significantly cheaper.',
    callout: 'Losing job-based coverage is a qualifying life event that opens a 60-day Special Enrollment Period for ACA marketplace plans.',
    warning: null,
    details: [
      'ACA plans may be cheaper — especially if your income qualifies for a subsidy',
      'Short-term plans can start as soon as tomorrow',
      'You can elect COBRA retroactively if you need coverage for a past claim',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Complete and Return the Election Form',
    body: 'Your election notice includes an election form. Fill it out completely, indicating which coverage you want to continue (medical, dental, vision, or a combination), and return it to the plan administrator by the deadline.',
    callout: null,
    warning: 'Send your election form via certified mail and keep a copy. If the administrator claims they never received it, you\'ll need proof of mailing.',
    details: [
      'You can elect coverage for yourself only, or include eligible dependents',
      'Each qualified beneficiary can elect independently',
      'Return the form to the address on your election notice — not to your former employer',
    ],
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Pay Your First Premium',
    body: 'After electing COBRA, you have 45 days to submit your first premium payment. This payment covers all months back to the date your coverage ended — so any medical claims during the gap are covered once payment is received.',
    callout: null,
    warning: 'Your first payment may be larger than expected — it covers multiple months retroactively. Budget for this before electing.',
    details: [
      '45 days to pay after election (not 45 days from the qualifying event)',
      'Payment is retroactive to the date coverage ended',
      'Providers may ask for proof of payment before processing retroactive claims',
    ],
  },
  {
    number: '05',
    icon: Clock,
    title: 'Set Up Ongoing Monthly Payments',
    body: 'After the first payment, premiums are due monthly. COBRA has a 30-day grace period — if payment is not received within 30 days of the due date, your coverage can be terminated permanently with no option to reinstate.',
    callout: null,
    warning: 'Set up automatic payments or put a calendar reminder 10 days before each due date. There is no reinstatement after termination for non-payment.',
    details: [
      '30-day grace period on each monthly payment',
      'Termination for non-payment is permanent — you cannot re-elect',
      'Contact your plan administrator immediately if you anticipate a late payment',
    ],
  },
];

export default function StartCobraPage() {
  return (
    <>
      <Helmet>
        <title>How to Enroll in COBRA — Step-by-Step Election Guide | CobraInsurance.Health</title>
        <meta
          name="description"
          content="Step-by-step COBRA enrollment guide — understand your election notice, meet the 60-day deadline, make your first premium payment, and avoid coverage gaps. Free help from licensed advisors."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="How to Enroll in COBRA — Step-by-Step Election Guide" />
        <meta
          property="og:description"
          content="Step-by-step COBRA enrollment guide — understand your election notice, meet the 60-day deadline, make your first premium payment, and avoid coverage gaps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Enroll in COBRA — Step-by-Step Election Guide" />
        <meta name="twitter:description" content="Step-by-step COBRA enrollment guide — understand your election notice, meet the 60-day deadline, make your first premium payment, and avoid coverage gaps." />
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
              COBRA Enrollment
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How to Start COBRA Coverage
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto mb-8"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              A clear, step-by-step guide to electing COBRA continuation coverage — from receiving
              your election notice to making your first premium payment.
            </p>
            {/* Deadline alert */}
            <div
              className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-left"
              style={{ background: 'rgba(224,31,31,0.18)', border: '1px solid rgba(224,31,31,0.4)' }}
            >
              <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: '#ff8080' }} />
              <p className="text-sm font-semibold" style={{ color: '#ffcccc', fontFamily: 'var(--font-sans)' }}>
                You have <strong className="text-white">60 days</strong> from losing coverage (or receiving your notice) to elect COBRA. Missing this deadline is permanent.
              </p>
            </div>
          </div>
        </section>

        {/* ── Timeline overview ── */}
        <section className="w-full py-8" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: '30 Days', sub: 'Employer notifies plan administrator' },
                { label: '14 Days', sub: 'Administrator sends election notice' },
                { label: '60 Days', sub: 'Your window to elect COBRA' },
                { label: '45 Days', sub: 'To pay first premium after electing' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl px-4 py-4 text-center"
                  style={{ background: '#fbfbfb' }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Step-by-step ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-10"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Step-by-Step Enrollment Guide
            </h2>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-6">
                    {/* Step number + connector */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                        style={{ background: i === 0 ? '#e01f1f' : '#3c4c63', fontFamily: 'var(--font-sans)' }}
                      >
                        {step.number}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 mt-2" style={{ background: '#eeeeee', minHeight: '32px' }} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-2 flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 flex-shrink-0" style={{ color: i === 0 ? '#e01f1f' : '#3c4c63' }} />
                        <h3
                          className="text-xl font-bold"
                          style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                      >
                        {step.body}
                      </p>

                      {/* Callout */}
                      {step.callout && (
                        <div
                          className="flex items-start gap-3 rounded-lg px-4 py-3 mb-4"
                          style={{ background: '#e8f4e8', border: '1px solid #b6ddb6' }}
                        >
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                          <p className="text-sm" style={{ color: '#1a5c1a', fontFamily: 'var(--font-sans)' }}>
                            {step.callout}
                          </p>
                        </div>
                      )}

                      {/* Warning */}
                      {step.warning && (
                        <div
                          className="flex items-start gap-3 rounded-lg px-4 py-3 mb-4"
                          style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}
                        >
                          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
                          <p className="text-sm" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                            {step.warning}
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
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Documents checklist ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Documents You'll Need
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Have these ready before you start the enrollment process.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {start_cobra.documents.map((doc) => (
                <div
                  key={doc.label}
                  className="flex items-start gap-3 rounded-xl px-5 py-4"
                  style={{ background: '#fbfbfb' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#3c4c63' }}
                  >
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm mb-0.5"
                      style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                    >
                      {doc.label}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                    >
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Not sure COBRA is right? ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              style={{ background: '#3c4c63' }}
            >
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  Before You Elect
                </p>
                <h2
                  className="text-2xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Is COBRA the right choice for you?
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  COBRA can be expensive. Before you elect, compare it against ACA marketplace
                  plans — you may qualify for subsidies that make a new plan significantly cheaper
                  than continuing your employer coverage.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/when-cobra"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  Compare Alternatives to COBRA →
                </Link>
                <Link
                  to="/kb"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Read the COBRA Knowledge Base →
                </Link>
              </div>
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
              Need Help With Your COBRA Enrollment?
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              Our licensed advisors can walk you through every step — from reading your election
              notice to making your first payment. No obligation, no cost to you.
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
                to="/customer-service"
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Contact an Advisor Online →
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
                { label: 'COBRA Knowledge Base', href: '/kb' },
                { label: 'Alternatives to COBRA', href: '/when-cobra' },
                { label: 'Manage Your COBRA Plan', href: '/manage-cobra' },
                { label: 'Get Help from an Advisor', href: '/customer-service' },
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