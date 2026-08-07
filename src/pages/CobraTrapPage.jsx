import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import {
  Phone,
  AlertTriangle,
  Lock,
  DollarSign,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronRight,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/the-cobra-trap`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'The COBRA Trap — Why Electing COBRA Can Lock You Out of Cheaper Coverage',
  url: canonicalUrl,
  description:
    'The COBRA Trap explained: electing COBRA can lock you out of ACA Marketplace subsidies until open enrollment. Learn how the trap works, what it costs, and how to avoid it.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const trapSteps = [
  {
    number: '01',
    icon: DollarSign,
    title: 'You lose job-based coverage',
    body: 'Your employer stops paying their share of the premium. You receive a COBRA election notice in the mail with a 60-day window to decide.',
    detail: 'The notice shows a monthly premium that looks large — because it now includes the full plan cost plus a 2% admin fee.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'You elect COBRA out of caution',
    body: 'Worried about a coverage gap, many people elect COBRA immediately — assuming they can simply drop it later if they find something cheaper.',
    detail: 'This is the moment the trap springs. Voluntarily dropping COBRA later does not open a Special Enrollment Period for an ACA plan.',
  },
  {
    number: '03',
    icon: Lock,
    title: 'You are locked in',
    body: 'Once elected, COBRA runs for 18 months (or longer). You cannot switch to a subsidized ACA Marketplace plan mid-year — you must wait until the next open enrollment.',
    detail: 'The only escape hatch is exhausting COBRA (waiting the full duration) or experiencing another qualifying life event.',
  },
  {
    number: '04',
    icon: AlertTriangle,
    title: 'Premiums become unaffordable',
    body: 'Months of paying 102% of the group premium strain your budget. Some people miss a payment and lose coverage with no fallback — because they passed up cheaper alternatives.',
    detail: 'Missing a COBRA payment terminates your coverage permanently with no option to reinstate.',
  },
];

const avoidSteps = [
  {
    title: 'Use your 60-day window',
    body: 'You are not required to elect COBRA immediately. Losing job-based coverage gives you a 60-day Special Enrollment Period for ACA Marketplace plans — compare before you commit.',
  },
  {
    title: 'Check ACA subsidy eligibility',
    body: 'If your income qualifies, ACA subsidies can lower your monthly premium dramatically — often well below the COBRA price for equivalent coverage.',
  },
  {
    title: 'Consider short-term coverage to bridge',
    body: 'For a healthy individual bridging a few months between jobs, short-term health insurance can start tomorrow at a fraction of COBRA\u2019s cost.',
  },
  {
    title: 'Talk to a licensed advisor first',
    body: 'A free conversation with a licensed advisor helps you understand which path fits your doctors, prescriptions, and budget — before you lock anything in.',
  },
];

export default function CobraTrapPage() {
  return (
    <>
      <Helmet>
        <title>The COBRA Trap — Why Electing COBRA Can Lock You Out of Cheaper Coverage</title>
        <meta
          name="description"
          content="The COBRA Trap: electing COBRA continuation can lock you out of ACA Marketplace subsidies until the next open enrollment. Learn how it works, the real cost, and how to avoid it."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="The COBRA Trap — CobraInsurance.Health" />
        <meta
          property="og:description"
          content="Electing COBRA can lock you out of cheaper ACA coverage. Learn how the trap works and how to avoid it."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The COBRA Trap — CobraInsurance.Health" />
        <meta name="twitter:description" content="Electing COBRA can lock you out of cheaper ACA coverage. Learn how the trap works and how to avoid it." />
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
              Consumer Warning
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The COBRA Trap
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto mb-8"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Electing COBRA feels like the safe choice — but for many people it quietly locks
              them out of cheaper coverage for months. Here is how the trap works, what it really
              costs, and how to avoid it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8445691234"
                className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90 flex items-center gap-2"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-4 h-4" />
                Talk to an Advisor
              </a>
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Compare Alternatives →
              </Link>
            </div>
          </div>
        </section>

        {/* Warning callout */}
        <section className="w-full py-8" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex items-start gap-4 rounded-2xl px-6 py-5"
              style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}
            >
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
              <div>
                <p
                  className="font-bold text-base mb-1"
                  style={{ color: '#7c3a00', fontFamily: 'var(--font-heading)' }}
                >
                  The trap in one sentence:
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                  Once you elect COBRA, voluntarily dropping it later does <strong>not</strong> give
                  you a Special Enrollment Period to buy an ACA Marketplace plan — so you can be
                  stuck paying COBRA's full premium until the next open enrollment or until
                  your COBRA is exhausted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How the trap happens */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              How the Trap Happens
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Four steps that quietly turn a reasonable decision into an expensive one.
            </p>

            <div className="flex flex-col gap-10">
              {trapSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                        style={{ background: i === 0 ? '#e01f1f' : '#3c4c63', fontFamily: 'var(--font-sans)' }}
                      >
                        {step.number}
                      </div>
                      {i < trapSteps.length - 1 && (
                        <div className="w-0.5 flex-1 mt-2" style={{ background: '#eeeeee', minHeight: '32px' }} />
                      )}
                    </div>
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
                        className="text-sm leading-relaxed mb-3"
                        style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                      >
                        {step.body}
                      </p>
                      <div
                        className="rounded-lg px-4 py-3"
                        style={{ background: '#efefef' }}
                      >
                        <p className="text-sm" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The real cost */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              The Real Cost of Getting Trapped
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              A typical family plan shows how quickly the difference adds up.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-6" style={{ background: '#fbfbfb' }}>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                >
                  COBRA for 18 months
                </p>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                >
                  ~$21,600
                </p>
                <p className="text-sm" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                  Estimated $1,200/month × 18 months at full premium + 2% admin fee.
                </p>
              </div>
              <div className="rounded-xl p-6" style={{ background: '#fbfbfb' }}>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                >
                  Subsidized ACA plan
                </p>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#16a34a', fontFamily: 'var(--font-heading)' }}
                >
                  ~$3,600
                </p>
                <p className="text-sm" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                  Estimated $200/month with subsidies — for comparable comprehensive coverage.
                </p>
              </div>
            </div>
            <p
              className="text-xs mt-4"
              style={{ color: '#9ca3af', fontFamily: 'var(--font-sans)' }}
            >
              Figures are illustrative estimates for a typical family plan; your actual costs depend
              on your plan, state, income, and household size.
            </p>
          </div>
        </section>

        {/* How to avoid */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              How to Avoid the Trap
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              The trap only works if you elect COBRA before comparing. Do this instead.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {avoidSteps.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: '#efefef' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: '#16a34a' }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p
                        className="font-bold text-sm mb-1"
                        style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                      >
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Do / Don't */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl p-5" style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: '#b45309', fontFamily: 'var(--font-sans)' }}>
                  Don't
                </p>
                <ul className="flex flex-col gap-2">
                  {['Elect COBRA on autopilot', 'Assume you can drop it later', 'Ignore ACA subsidies you may qualify for'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#dc2626' }} />
                      <span className="text-sm" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: '#15803d', fontFamily: 'var(--font-sans)' }}>
                  Do
                </p>
                <ul className="flex flex-col gap-2">
                  {['Use your full 60-day window', 'Compare ACA, short-term, and COBRA', 'Confirm with a licensed advisor first'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                      <span className="text-sm" style={{ color: '#166534', fontFamily: 'var(--font-sans)' }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2
                  className="text-3xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Don't get trapped.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}>
                  Before you elect COBRA, talk to a licensed advisor. It is free, there is no
                  obligation, and it could save you thousands over the next 18 months.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:8445691234"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded font-bold text-base transition-opacity hover:opacity-90"
                  style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  <Phone className="w-5 h-5" />
                  Call 844-569-1234
                </a>
                <Link
                  to="/alternatives"
                  className="flex items-center justify-center px-6 py-4 rounded font-bold text-base border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  See Your Alternatives →
                </Link>
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
              {[
                { label: 'Alternatives to COBRA', href: '/alternatives' },
                { label: 'How to Start COBRA', href: '/start-cobra' },
                { label: 'COBRA Knowledge Base', href: '/knowledge-base' },
                { label: 'Coverage Quiz', href: '/quiz' },
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