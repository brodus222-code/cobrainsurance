import manage_cobra from '@/content/pages/manage_cobra.json';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  CreditCard,
  UserCog,
  XCircle,
  FileSearch,
  AlertTriangle,
  ChevronRight,
  Phone,
  Mail,
  RefreshCw,
  CalendarClock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/manage-cobra`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'Manage Your COBRA Coverage — Payments, Updates & Cancellation',
  url: canonicalUrl,
  description:
    'Learn how to manage your active COBRA coverage — make premium payments, update personal information, add or remove dependents, verify coverage status, and cancel when ready.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

// ── Task cards ───────────────────────────────────────────────────────────────
const tasksMeta = [
  { icon: CreditCard },
  { icon: CalendarClock },
  { icon: UserCog },
  { icon: RefreshCw },
  { icon: FileSearch },
  { icon: XCircle },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: '#eeeeee' }}>
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 transition-opacity hover:opacity-80"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-semibold text-base"
          style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
        >
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#e01f1f' }} />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#3c4c63' }} />
        )}
      </button>
      {open && (
        <p
          className="pb-5 text-sm leading-relaxed"
          style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ManageCobraPage() {
  return (
    <>
      <Helmet>
        <title>Manage Your COBRA Coverage — Payments, Dependents & Cancellation</title>
        <meta
          name="description"
          content="Manage active COBRA coverage — make premium payments, set up autopay, add or remove dependents, verify coverage status, and cancel when you find better coverage. Licensed advisor support."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Manage Your COBRA Coverage — Payments, Dependents & Cancellation" />
        <meta
          property="og:description"
          content="Manage active COBRA coverage — make premium payments, set up autopay, add or remove dependents, verify coverage status, and cancel when you find better coverage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manage Your COBRA Coverage — Payments, Dependents & Cancellation" />
        <meta name="twitter:description" content="Manage active COBRA coverage — make premium payments, set up autopay, add or remove dependents, verify coverage status, and cancel when you find better coverage." />
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
              Active Coverage
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Manage Your COBRA Coverage
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto mb-8"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Everything you need to keep your COBRA coverage active — payments, account updates,
              dependent changes, coverage verification, and cancellation.
            </p>
            {/* Grace period alert */}
            <div
              className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-left"
              style={{ background: 'rgba(224,31,31,0.18)', border: '1px solid rgba(224,31,31,0.4)' }}
            >
              <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: '#ff8080' }} />
              <p className="text-sm font-semibold" style={{ color: '#ffcccc', fontFamily: 'var(--font-sans)' }}>
                Payments are due monthly with a <strong className="text-white">30-day grace period</strong>. Missing it permanently terminates your coverage.
              </p>
            </div>
          </div>
        </section>

        {/* ── Quick-jump nav ── */}
        <section className="w-full py-8" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'Make Payment', anchor: '#payment' },
                { label: 'Autopay', anchor: '#autopay' },
                { label: 'Update Info', anchor: '#update-info' },
                { label: 'Dependents', anchor: '#dependents' },
                { label: 'Verify Coverage', anchor: '#verify' },
                { label: 'Cancel COBRA', anchor: '#cancel' },
              ].map((item) => (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  className="block rounded-xl px-3 py-3 text-center text-xs font-semibold transition-opacity hover:opacity-80"
                  style={{ background: '#3c4c63', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Task cards ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              {manage_cobra.tasks.map((task, i) => {
                const Icon = tasksMeta[i].icon;
                const anchors = ['payment', 'autopay', 'update-info', 'dependents', 'verify', 'cancel'];
                return (
                  <div
                    key={i}
                    id={anchors[i]}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      border: task.accent ? '2px solid #e01f1f' : '2px solid #eeeeee',
                      background: '#fbfbfb',
                    }}
                  >
                    <div className="p-6 lg:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="p-3 rounded-xl flex-shrink-0"
                          style={{ background: task.accent ? '#e01f1f' : '#3c4c63' }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2
                            className="text-xl font-bold mb-1"
                            style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                          >
                            {task.title}
                          </h2>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                          >
                            {task.desc}
                          </p>
                        </div>
                      </div>

                      {/* Steps */}
                      <div className="ml-0 sm:ml-16">
                        <p
                          className="text-xs font-bold uppercase tracking-wide mb-3"
                          style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                        >
                          How to do it
                        </p>
                        <ul className="flex flex-col gap-2.5 mb-4">
                          {task.steps.map((step, si) => (
                            <li key={si} className="flex items-start gap-3">
                              <span
                                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                                style={{ background: task.accent ? '#e01f1f' : '#3c4c63', fontFamily: 'var(--font-sans)' }}
                              >
                                {si + 1}
                              </span>
                              <span
                                className="text-sm leading-relaxed"
                                style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                              >
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Warning */}
                        {task.warning && (
                          <div
                            className="flex items-start gap-3 rounded-lg px-4 py-3"
                            style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}
                          >
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
                            <p className="text-sm" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                              {task.warning}
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

        {/* ── Grace period explainer ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Understanding the 30-Day Grace Period
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                >
                  COBRA premiums are due on the first of each month. Federal law provides a
                  30-day grace period — but missing that deadline is not a warning, it's a
                  permanent termination. There is no reinstatement process once coverage ends
                  for non-payment.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                >
                  Claims incurred during the grace period are covered as long as payment is
                  received before the grace period expires. Once terminated, all coverage
                  ends retroactively to the last paid date.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #eeeeee' }}>
                <div className="px-5 py-3" style={{ background: '#3c4c63' }}>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-sans)' }}>
                    Grace Period Quick Reference
                  </p>
                </div>
                <div style={{ background: '#fbfbfb' }}>
                  {manage_cobra.gracePeriodFacts.map((fact, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-start gap-4 px-5 py-3.5 border-b"
                      style={{ borderColor: '#eeeeee' }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        {fact.label}
                      </span>
                      <span
                        className="text-sm font-semibold text-right"
                        style={{
                          color: fact.label.includes('miss') || fact.label.includes('reinstate') ? '#e01f1f' : '#3c4c63',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Coverage ending soon? ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              style={{ background: '#3c4c63' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5" style={{ color: '#a0b4c8' }} />
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                  >
                    Coverage Ending Soon?
                  </p>
                </div>
                <h2
                  className="text-2xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  COBRA doesn't last forever — plan your next step now.
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  COBRA coverage ends after 18–36 months. When it does, losing COBRA is a
                  qualifying event that opens a Special Enrollment Period for ACA marketplace
                  plans. Don't wait until the last day — start comparing options 60–90 days
                  before your end date.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/alternatives"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  <ChevronRight className="w-4 h-4" />
                  Compare Coverage Alternatives
                </Link>
                <Link
                  to="/get-help"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Talk to a Licensed Advisor
                </Link>
              </div>
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
              Common Questions About Managing COBRA
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Still have questions? Call{' '}
              <a href="tel:8772627241" className="font-semibold" style={{ color: '#e01f1f' }}>
                877-262-7241
              </a>{' '}
              and we'll help right away.
            </p>
            <div className="rounded-2xl px-6" style={{ background: '#fbfbfb' }}>
              {manage_cobra.faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
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
              Need Help Managing Your COBRA?
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              Our licensed advisors can help you navigate payments, coverage questions, and your
              options when COBRA ends — at no cost to you.
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
                to="/get-help"
                className="flex items-center gap-2 px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Mail className="w-4 h-4" />
                Contact an Advisor Online
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
                { label: 'Start COBRA Enrollment', href: '/start-cobra' },
                { label: 'Alternatives to COBRA', href: '/alternatives' },
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