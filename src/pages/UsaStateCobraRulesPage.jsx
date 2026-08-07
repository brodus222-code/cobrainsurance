import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AlertTriangle, Phone } from 'lucide-react';
import { stateRules } from '@/data/stateRules';
import StateCard from '@/components/staterules/StateCard';
import FederalVsStateExplainer from '@/components/staterules/FederalVsStateExplainer';
import ComparisonTable from '@/components/staterules/ComparisonTable';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/state-laws`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'State COBRA Rules & Mini-COBRA Laws — All 50 States Guide',
  url: canonicalUrl,
  description:
    'State-by-state guide to COBRA continuation coverage rules, mini-COBRA laws, and extended coverage requirements. Covers all 22 states where HealthLink Insurance Agency LLC is licensed.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const FILTERS = [
  { key: 'all', label: 'All States' },
  { key: 'mini', label: 'Mini-COBRA' },
  { key: 'federal-only', label: 'Federal Only' },
];

const QUICK_LINKS = [
  { label: 'COBRA Knowledge Base', href: '/knowledge-base' },
  { label: 'Start COBRA Enrollment', href: '/start-cobra' },
  { label: 'Alternatives to COBRA', href: '/alternatives' },
  { label: 'Manage Your COBRA Plan', href: '/manage-cobra' },
  { label: 'Get Help from an Advisor', href: '/get-help' },
];

export default function UsaStateCobraRulesPage() {
  const [filter, setFilter] = useState('all');

  const filtered = stateRules.filter((r) => {
    if (filter === 'mini') return r.miniCobra;
    if (filter === 'federal-only') return !r.miniCobra;
    return true;
  });

  const miniCount = stateRules.filter((r) => r.miniCobra).length;
  const federalOnlyCount = stateRules.filter((r) => !r.miniCobra).length;

  return (
    <>
      <Helmet>
        <title>State COBRA & Mini-COBRA Laws by State — Small Employer Coverage Rules</title>
        <meta
          name="description"
          content="State-by-state COBRA continuation rules — which states have mini-COBRA for small employers, coverage durations, premium caps, and qualifying events. Covers all 22 states where HealthLink is licensed."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="State COBRA & Mini-COBRA Laws by State — Small Employer Coverage Rules" />
        <meta property="og:description" content="State-by-state COBRA continuation rules — which states have mini-COBRA for small employers, coverage durations, premium caps, and qualifying events." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="State COBRA & Mini-COBRA Laws by State — Small Employer Coverage Rules" />
        <meta name="twitter:description" content="State-by-state COBRA continuation rules — which states have mini-COBRA for small employers, coverage durations, premium caps, and qualifying events." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5" style={{ background: '#e01f1f' }}>
              State-by-State Guide
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              State COBRA Rules &amp; Mini-COBRA Laws
            </h1>
            <p className="text-base lg:text-lg max-w-2xl mx-auto mb-8" style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}>
              Federal COBRA only covers employers with 20 or more employees. Most states have
              their own &quot;mini-COBRA&quot; laws that extend continuation rights to smaller employers.
              Here&apos;s what you need to know in each state where we&apos;re licensed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: '22', label: "States we're licensed in" },
                { value: `${miniCount}`, label: 'States with mini-COBRA' },
                { value: `${federalOnlyCount}`, label: 'Federal COBRA only' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl px-5 py-3 text-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FederalVsStateExplainer />
        <ComparisonTable />

        {/* State cards */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>Rules by State</h2>
                <p className="text-sm mt-1" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
                  Click any state to expand its rules. Showing {filtered.length} of {stateRules.length} states.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {FILTERS.map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setFilter(btn.key)}
                    className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                    style={{
                      background: filter === btn.key ? '#3c4c63' : '#fbfbfb',
                      color: filter === btn.key ? '#ffffff' : '#3c4c63',
                      border: filter === btn.key ? 'none' : '2px solid #3c4c63',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {filtered.map((rule) => (
                <StateCard key={rule.abbr} rule={rule} />
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="w-full py-10" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl px-6 py-5 flex items-start gap-4" style={{ background: '#fff4e5', border: '1px solid #f5c97a' }}>
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#b45309' }} />
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: '#7c3a00', fontFamily: 'var(--font-heading)' }}>Important Disclaimer</p>
                <p className="text-sm leading-relaxed" style={{ color: '#7c3a00', fontFamily: 'var(--font-sans)' }}>
                  State continuation laws are complex and change frequently. The information on
                  this page is provided for general educational purposes only and does not
                  constitute legal or insurance advice. Rules vary based on your specific plan
                  type, employer, and qualifying event. Always verify your rights with your plan
                  administrator, your state&apos;s Department of Insurance, or a licensed insurance
                  advisor. HealthLink Insurance Agency LLC is licensed in 22 states and can help
                  you understand your options — call{' '}
                  <a href="tel:8445691234" className="font-semibold underline" style={{ color: '#7c3a00' }}>844-569-1234</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Not Sure Which Rules Apply to You?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}>
              Our licensed advisors can review your specific situation — employer size, state,
              plan type — and tell you exactly what continuation rights you have and whether
              COBRA or an alternative makes more sense.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8445691234" className="flex items-center gap-2 px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90" style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>
                <Phone className="w-4 h-4" />
                Call 844-569-1234
              </a>
              <Link to="/get-help" className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600" style={{ fontFamily: 'var(--font-sans)' }}>
                Contact an Advisor Online →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="w-full py-10" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-75" style={{ background: '#3c4c63', color: '#ffffff', fontFamily: 'var(--font-sans)' }}>
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