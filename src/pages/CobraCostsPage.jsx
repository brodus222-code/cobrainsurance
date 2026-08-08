import { Link } from 'react-router-dom';
import { Helmet } from '@/lib/helmet';
import { Phone, ShieldCheck, DollarSign, Calendar, AlertTriangle, Percent, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const site = 'https://cobrainsurance.health';

const faqs = [
  {
    q: 'Why is COBRA so expensive?',
    a: 'COBRA requires you to pay the full premium your employer previously subsidized — typically 70% to 80% of the cost — plus up to a 2% administrative fee. The plan itself costs the same; you are simply paying the portion your employer used to cover.',
  },
  {
    q: 'Can I lower my COBRA payment?',
    a: 'You cannot negotiate the COBRA premium itself, but you can often find cheaper coverage through the ACA Marketplace with income-based subsidies, short-term health insurance, or Medicaid if you qualify. Comparing options before electing can save hundreds per month.',
  },
  {
    q: 'What happens if I miss a COBRA payment?',
    a: 'Most COBRA plans include a 30-day grace period. If you miss a payment beyond that window, your coverage can be terminated retroactively and generally cannot be reinstated. Pay on time to avoid losing coverage.',
  },
  {
    q: 'How long do I have to pay COBRA premiums?',
    a: 'COBRA continuation coverage typically lasts 18 months, but can extend to 29 or 36 months depending on the qualifying event. You pay monthly and can cancel at any time without penalty.',
  },
  {
    q: 'Is COBRA cheaper than the ACA Marketplace?',
    a: 'It depends on your income. If you qualify for premium tax credits, an ACA Marketplace plan is often much cheaper than COBRA. If your income is too high for subsidies, COBRA may be comparable — especially if you have ongoing medical needs and want to keep your current doctors.',
  },
];

const costsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${site}/cobra-costs#article`,
  headline: 'COBRA Insurance Costs: Understanding Premiums, Fees, and How to Save',
  description: 'A clear breakdown of COBRA premium costs, the 2% administrative fee, grace periods, and practical strategies to lower your health insurance expenses after a job loss.',
  url: `${site}/cobra-costs`,
  author: { '@type': 'Organization', name: 'CobraInsurance.Health' },
  publisher: { '@id': `${site}/#organization` },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${site}/cobra-costs` },
  about: ['COBRA costs', 'health insurance premiums', 'COBRA savings'],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
    { '@type': 'ListItem', position: 2, name: 'COBRA Costs', item: `${site}/cobra-costs` },
  ],
};

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: '#e0e0e0' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span
          className="text-base font-semibold pr-4"
          style={{ color: '#2d3441', fontFamily: 'var(--font-sans)' }}
        >
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#e01f1f' }}
        />
      </button>
      {open && (
        <p
          className="pb-4 text-sm leading-relaxed"
          style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
        >
          {item.a}
        </p>
      )}
    </div>
  );
}

export default function CobraCostsPage() {
  return (
    <>
      <Helmet>
        <title>COBRA Insurance Costs: Understanding Premiums, Fees, and How to Save</title>
        <meta
          name="description"
          content="A clear breakdown of COBRA premium costs, the 2% administrative fee, grace periods, and practical strategies to lower your health insurance expenses after a job loss."
        />
        <link rel="canonical" href={`${site}/cobra-costs`} />
        <meta property="og:title" content="COBRA Insurance Costs: Understanding Premiums, Fees, and How to Save" />
        <meta
          property="og:description"
          content="A clear breakdown of COBRA premium costs, the 2% administrative fee, grace periods, and savings strategies."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${site}/cobra-costs`} />
        <script type="application/ld+json">{JSON.stringify(costsJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#2d3441' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              COBRA Cost Guide
            </span>
            <h1
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              COBRA Insurance Costs: Understanding Premiums, Fees, and How to Save
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              COBRA lets you keep your employer health plan, but the cost can come as a shock.
              This guide explains exactly what you pay, why it's higher than before, and how to
              find more affordable alternatives.
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
              One of the most common surprises people face when electing COBRA is the price. While
              you were employed, your employer likely paid a significant portion of your monthly
              health insurance premium — often 70% to 80% of the total cost. Under COBRA, you
              become responsible for the entire premium, plus a small administrative fee. The
              result is a monthly bill that can be two to three times what you saw deducted from
              your paycheck.
            </p>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              How COBRA Premiums Are Calculated
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              Your COBRA premium is the full cost of the group health plan you had while employed,
              calculated at the same group rate your employer negotiated. The plan administrator
              may charge an additional 2% administrative fee to cover the cost of administering
              COBRA continuation coverage. That means your monthly COBRA premium equals 102% of
              the full group plan premium. For a family plan that previously cost $1,800 per
              month with the employer covering most of it, your COBRA cost could be around $1,836
              per month — entirely on you.
            </p>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              The 2% Administrative Fee Explained
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              Federal law allows COBRA plan administrators to charge up to 2% of the premium as an
              administrative fee for most qualifying events. For disability extensions lasting
              11 to 18 months, the fee can increase to 150% of the premium cost. This fee covers
              the paperwork, notifications, and record-keeping required to maintain your
              continuation coverage.
            </p>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Grace Periods and Payment Rules
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              COBRA payments are typically due on the first of each month, and most plans include
              a 30-day grace period. If you miss a payment beyond the grace period, your coverage
              can be terminated retroactively to the last day of the month for which payment was
              received. It is critical to pay on time — once COBRA coverage is cancelled for
              non-payment, it generally cannot be reinstated.
            </p>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              How to Lower Your Health Insurance Costs
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              If COBRA is too expensive, you have alternatives that may cost significantly less:
            </p>
            <ul
              className="flex flex-col gap-2 mb-5 ml-5 list-disc"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              <li className="text-base leading-relaxed">
                ACA Marketplace plans with premium tax credits based on your income — many people
                pay under $100 per month
              </li>
              <li className="text-base leading-relaxed">
                Short-term health insurance for temporary gaps, available in most states
              </li>
              <li className="text-base leading-relaxed">
                Medicaid or CHIP if your income qualifies
              </li>
              <li className="text-base leading-relaxed">
                A spouse's employer plan through a special enrollment opportunity
              </li>
            </ul>

            <h2
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Get a Free Cost Comparison
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
            >
              Our licensed advisors can compare your COBRA premium with alternative plans and
              subsidies in your area — at no cost to you. We help you find the coverage that fits
              your budget and your needs.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Compare Affordable Alternatives →
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

        {/* FAQ section */}
        <section className="w-full py-12 lg:py-16" style={{ background: '#ffffff' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl lg:text-3xl font-bold mb-3 text-center"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Frequently Asked Questions About COBRA Costs
            </h2>
            <p
              className="text-sm mb-8 text-center max-w-xl mx-auto"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              Straight answers to the most common questions about COBRA premiums and payment.
            </p>
            <div className="border-t" style={{ borderColor: '#e0e0e0' }}>
              {faqs.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="w-full py-12" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl font-bold mb-6 text-center"
              style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
            >
              Explore More COBRA Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/cobra-eligibility', label: 'COBRA Eligibility Guide', desc: 'See if you qualify for continuation coverage.' },
                { to: '/cobra-vs-aca', label: 'COBRA vs. ACA Marketplace', desc: 'Compare costs, coverage, and subsidies.' },
                { to: '/calculator', label: 'COBRA Cost Calculator', desc: 'Estimate your monthly COBRA premium.' },
                { to: '/blog', label: 'COBRA Blog', desc: 'In-depth articles on COBRA and alternatives.' },
                { to: '/knowledge-base', label: 'Knowledge Base', desc: 'Everything you need to know about COBRA.' },
                { to: '/alternatives', label: 'Affordable Alternatives', desc: 'Find cheaper health coverage options.' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block p-5 rounded-lg transition-shadow hover:shadow-md"
                  style={{ background: '#ffffff', border: '1px solid #e0e0e0' }}
                >
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                  >
                    {link.label} →
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick facts band */}
        <section className="w-full py-12" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Percent, label: '102%', text: 'Of full premium (incl. 2% fee)' },
                { icon: DollarSign, label: '$600+/mo', text: 'Typical individual COBRA cost' },
                { icon: Calendar, label: '30 Days', text: 'Grace period for payments' },
                { icon: AlertTriangle, label: 'No Reinstatement', text: 'After non-payment cancellation' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <item.icon className="w-8 h-8" style={{ color: '#e01f1f' }} />
                  </div>
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
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