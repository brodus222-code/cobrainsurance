import { useState } from 'react';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import {
  Search,
  CreditCard,
  UserCog,
  XCircle,
  ArrowRight,
  Phone,
  FileSearch,
  AlertTriangle,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/cobra-portal`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'Manage Your COBRA Coverage — Payments, Updates & Cancellation Portal',
  url: canonicalUrl,
  description:
    'Access your COBRA account to pay premiums, update personal information, or cancel coverage. Find your third-party COBRA administrator by employer name.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const actions = [
  {
    icon: CreditCard,
    title: 'Pay Premium',
    desc: 'Make a one-time payment or set up automatic recurring payments to ensure your coverage never lapses.',
    cta: 'Make Payment',
    href: '/manage-cobra#payment',
  },
  {
    icon: UserCog,
    title: 'Update Info',
    desc: 'Change your mailing address, update contact information, or modify your dependent details.',
    cta: 'Update Profile',
    href: '/manage-cobra#update-info',
  },
  {
    icon: XCircle,
    title: 'Cancel Coverage',
    desc: 'Found a new job or better alternative? Submit a request to terminate your COBRA coverage.',
    cta: 'Cancel COBRA',
    href: '/when-cobra',
  },
];

export default function CobraPortalPage() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) setSearched(true);
  }

  return (
    <>
      <Helmet>
        <title>Manage Your COBRA Coverage — Payments, Updates & Cancellation</title>
        <meta
          name="description"
          content="Access your COBRA account to pay premiums, update personal information, or review coverage. Find your COBRA administrator by employer name."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Manage Your COBRA Coverage — CobraInsurance.Health" />
        <meta
          property="og:description"
          content="Pay premiums, update your info, or cancel COBRA. Find your third-party administrator by employer name."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
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
              COBRA Account Portal
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Manage Your COBRA Coverage
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Access your account to pay premiums, update your personal information, or review
              your current coverage details.
            </p>
          </div>
        </section>

        {/* Find Your COBRA Administrator */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-6 sm:p-8 shadow-sm"
              style={{ background: '#ffffff', border: '1px solid #eeeeee' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FileSearch className="w-5 h-5" style={{ color: '#e01f1f' }} />
                <h2
                  className="text-xl font-bold"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Find Your COBRA Administrator
                </h2>
              </div>
              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
              >
                COBRA is managed by third-party administrators chosen by your former employer.
                Enter your employer's name to find your portal link.
              </p>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSearched(false);
                  }}
                  placeholder="Enter former employer name..."
                  className="flex-1 px-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2"
                  style={{
                    border: '1px solid #d1d5db',
                    fontFamily: 'var(--font-sans)',
                    color: '#1f2937',
                  }}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white uppercase tracking-wide transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </form>

              {searched && (
                <div
                  className="mt-5 flex items-start gap-3 rounded-lg px-4 py-3"
                  style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}
                >
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
                  <p className="text-sm" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                    Can't find your employer? Check your initial COBRA election notice packet for
                    your specific administrator's website and login credentials.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Common Actions */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Common Actions
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              The most frequent tasks for managing active COBRA coverage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <div
                    key={action.title}
                    className="rounded-2xl p-6 flex flex-col"
                    style={{ background: '#fbfbfb', border: '1px solid #eeeeee' }}
                  >
                    <div
                      className="p-2.5 rounded-xl w-fit mb-4"
                      style={{ background: '#3c4c63' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                    >
                      {action.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                    >
                      {action.desc}
                    </p>
                    <Link
                      to={action.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90 w-fit"
                      style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                    >
                      {action.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Premium too high CTA */}
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
                  Thinking About Switching?
                </p>
                <h2
                  className="text-2xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Is your COBRA premium too high?
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  You don't have to stick with COBRA. You can switch to an affordable short-term
                  health plan or ACA marketplace plan at any time.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/when-cobra"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  Compare Alternative Plans
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:8772627241"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Phone className="w-4 h-4" />
                  Call 877-262-7241
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
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
                { label: 'Detailed Manage Guide', href: '/manage-cobra' },
                { label: 'Start COBRA Enrollment', href: '/start-cobra' },
                { label: 'Alternatives to COBRA', href: '/when-cobra' },
                { label: 'COBRA Knowledge Base', href: '/kb' },
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