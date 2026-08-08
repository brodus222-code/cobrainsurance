import { Link } from 'react-router-dom';
import { Helmet } from '@/lib/helmet';
import { Phone, ShieldCheck, CheckCircle2, Clock, Users, Briefcase } from 'lucide-react';

const site = 'https://cobrainsurance.health';

const eligibilityJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${site}/cobra-eligibility#article`,
  headline: 'COBRA Eligibility: Who Qualifies and When You Can Continue Coverage',
  description: 'A clear guide to COBRA eligibility requirements, qualifying events, covered beneficiaries, and employer rules — so you know exactly when you can keep your employer health plan.',
  url: `${site}/cobra-eligibility`,
  author: { '@type': 'Organization', name: 'CobraInsurance.Health' },
  publisher: { '@id': `${site}/#organization` },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${site}/cobra-eligibility` },
  about: ['COBRA', 'health insurance continuation', 'qualifying events'],
};

export default function CobraEligibilityPage() {
  return (
    <>
      <Helmet>
        <title>COBRA Eligibility: Who Qualifies and When You Can Continue Coverage</title>
        <meta
          name="description"
          content="A clear guide to COBRA eligibility requirements, qualifying events, covered beneficiaries, and employer rules — so you know exactly when you can keep your employer health plan."
        />
        <link rel="canonical" href={`${site}/cobra-eligibility`} />
        <meta property="og:title" content="COBRA Eligibility: Who Qualifies and When You Can Continue Coverage" />
        <meta
          property="og:description"
          content="A clear guide to COBRA eligibility requirements, qualifying events, covered beneficiaries, and employer rules."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${site}/cobra-eligibility`} />
        <script type="application/ld+json">{JSON.stringify(eligibilityJsonLd)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#2d3441' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              COBRA Eligibility Guide
            </span>
            <h1
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              COBRA Eligibility: Who Qualifies and When You Can Continue Coverage
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Understanding whether you qualify for COBRA continuation coverage is the first step
              in protecting your health insurance after a job change or life event. This guide
              breaks down the eligibility rules in plain language.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="w-full py-12 lg:py-16" style={{ background: '#ffffff' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none">
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                COBRA (the Consolidated Omnibus Budget Reconciliation Act) is a federal law that
                gives you the right to temporarily continue your employer-sponsored health
                insurance after a qualifying event that would otherwise cause you to lose
                coverage. Not everyone is eligible, and the rules depend on your employer, your
                employment status, and the type of event that triggered the loss of coverage.
              </p>

              <h2
                className="text-2xl font-bold mt-8 mb-3"
                style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
              >
                Employer Requirements
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                COBRA applies to private-sector employers with 20 or more full-time-equivalent
                employees on more than half of their business days during the preceding calendar
                year. State and local government employers are also subject to COBRA, but
                federal government plans and church plans are governed by parallel rules under
                different statutes. If your employer has fewer than 20 employees, you may still
                have continuation rights under your state's mini-COBRA law.
              </p>

              <h2
                className="text-2xl font-bold mt-8 mb-3"
                style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
              >
                Qualifying Events
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                A qualifying event is the specific circumstance that triggers the loss of
                coverage and creates COBRA eligibility. The most common qualifying events include:
              </p>
              <ul
                className="flex flex-col gap-2 mb-5 ml-5 list-disc"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                <li className="text-base leading-relaxed">
                  Voluntary or involuntary termination of employment (for reasons other than gross misconduct)
                </li>
                <li className="text-base leading-relaxed">
                  Reduction in work hours that causes you to lose health coverage
                </li>
                <li className="text-base leading-relaxed">
                  Divorce or legal separation from the covered employee
                </li>
                <li className="text-base leading-relaxed">
                  Death of the covered employee
                </li>
                <li className="text-base leading-relaxed">
                  A child losing dependent status by reaching the plan's maximum age
                </li>
                <li className="text-base leading-relaxed">
                  The covered employee becoming entitled to Medicare
                </li>
              </ul>

              <h2
                className="text-2xl font-bold mt-8 mb-3"
                style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
              >
                Who Can Be a Beneficiary?
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                COBRA beneficiaries include the covered employee, the employee's spouse, and
                dependent children who were covered under the plan on the day before the
                qualifying event. Each qualified beneficiary has an independent right to elect
                COBRA, meaning a spouse or dependent can choose coverage even if the employee
                does not.
              </p>

              <h2
                className="text-2xl font-bold mt-8 mb-3"
                style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
              >
                How Long Does Coverage Last?
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                Standard COBRA continuation lasts up to 18 months for termination or reduction of
                hours. In certain situations — such as a second qualifying event or a disability
                extension — coverage can be extended to 36 months. You have 60 days from the date
                you receive your COBRA election notice to decide whether to enroll.
              </p>

              <h2
                className="text-2xl font-bold mt-8 mb-3"
                style={{ color: '#2d3441', fontFamily: 'var(--font-heading)' }}
              >
                Need Help Determining Your Eligibility?
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
              >
                Our licensed advisors can help you understand whether you qualify for COBRA and
                compare it with alternative coverage options that may be more affordable. There is
                no cost and no obligation to speak with us.
              </p>
            </div>

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

        {/* Quick facts band */}
        <section className="w-full py-12" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, label: '20+ Employees', text: 'Employer size threshold for COBRA' },
                { icon: Clock, label: '18–36 Months', text: 'Maximum continuation period' },
                { icon: Users, label: '60 Days', text: 'Election window to decide' },
                { icon: CheckCircle2, label: 'All Beneficiaries', text: 'Spouse & dependents included' },
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