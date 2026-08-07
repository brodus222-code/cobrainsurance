import about_us from '@/content/pages/about_us.json';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Award,
  Users,
  BookOpen,
  CheckCircle,
  Heart,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/about`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'About HealthLink Insurance Agency LLC — Licensed COBRA Advisors',
  url: canonicalUrl,
  description:
    'HealthLink Insurance Agency LLC is a licensed insurance agency specializing in COBRA continuation coverage and health insurance alternatives. Licensed in 22 states.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const valuesMeta = [
  { icon: ShieldCheck },
  { icon: BookOpen },
  { icon: Users },
  { icon: Heart },
];

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About HealthLink Insurance Agency LLC — Licensed COBRA Advisors in 22 States</title>
        <meta
          name="description"
          content="HealthLink Insurance Agency LLC — certified COBRA advisors licensed in 22 states. We help workers between jobs understand their continuation coverage rights and find affordable health insurance alternatives."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="About HealthLink Insurance Agency LLC — Licensed COBRA Advisors in 22 States" />
        <meta
          property="og:description"
          content="Certified COBRA advisors licensed in 22 states. We help workers between jobs understand their continuation coverage rights and find affordable health insurance alternatives."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About HealthLink Insurance Agency LLC — Licensed COBRA Advisors in 22 States" />
        <meta name="twitter:description" content="Certified COBRA advisors licensed in 22 states. We help workers between jobs understand their continuation coverage rights and find affordable health insurance alternatives." />
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
              About Us
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              HealthLink Insurance Agency LLC
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto mb-10"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              We're a licensed insurance agency that specializes in one thing: helping people
              navigate health coverage after a job loss or qualifying life event. No runaround,
              no jargon — just clear answers from advisors who know COBRA inside and out.
            </p>
            {/* Trust strip */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: ShieldCheck, label: 'Licensed in 22 States' },
                { icon: Award, label: 'Certified COBRA Advisors' },
                { icon: Users, label: 'No-Obligation Consultations' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#1fe0e0' }} />
                  <span
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  Our Mission
                </p>
                <h2
                  className="text-3xl font-bold mb-5 leading-tight"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Nobody should lose health coverage because the paperwork was confusing.
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                >
                  COBRA notices are dense, deadlines are unforgiving, and the cost of a mistake
                  can be a lapse in coverage at the worst possible time. HealthLink Insurance
                  Agency LLC was built to fix that.
                </p>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                >
                  We work with individuals and families who've just lost employer-sponsored
                  coverage — whether through a layoff, a reduction in hours, a divorce, or
                  another qualifying event. We help them understand their rights, compare their
                  options honestly, and get enrolled in the coverage that actually fits their
                  situation and budget.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                >
                  Sometimes that's COBRA. Sometimes it's an ACA marketplace plan with a subsidy
                  that costs a fraction of the price. We tell you which is which — and we never
                  push you toward the option that pays us more.
                </p>
              </div>

              {/* Stats card */}
              <div
                className="rounded-2xl p-8"
                style={{ background: '#3c4c63' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                >
                  By the Numbers
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '22', label: 'States licensed' },
                    { value: '60', label: 'Days to elect COBRA' },
                    { value: '100%', label: 'COBRA-focused' },
                    { value: '$0', label: 'Cost to consult' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="text-4xl font-bold text-white mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we do ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              What We Do
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              From the day you lose coverage to the day you find something better.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {about_us.whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6"
                  style={{ background: '#fbfbfb', border: '2px solid #eeeeee' }}
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.desc}
                  </p>
                  <Link
                    to={item.href}
                    className="text-sm font-bold transition-opacity hover:opacity-75"
                    style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              How We Work
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              The principles that guide every conversation with every client.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {about_us.values.map((v, _airoIdx) => {
                const Icon = valuesMeta[_airoIdx].icon;
                return (
                  <div key={v.title} className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl flex-shrink-0"
                      style={{ background: '#3c4c63' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Credentials list */}
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  Credentials &amp; Compliance
                </p>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Licensed, certified, and accountable.
                </h2>
                <ul className="flex flex-col gap-3">
                  {about_us.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}
                      >
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Licensed states */}
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  Licensed States
                </p>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  We're licensed in 22 states.
                </h2>
                <div className="flex flex-wrap gap-2">
                  {about_us.licensedStates.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: '#3c4c63', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                  Not in one of these states?{' '}
                  <Link
                    to="/get-help"
                    className="font-semibold underline"
                    style={{ color: '#3c4c63' }}
                  >
                    Contact us
                  </Link>{' '}
                  — we may be able to refer you to a licensed advisor in your state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact info ── */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              Get in Touch
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
            >
              We're available Monday–Friday 8am–6pm CT and Saturday 9am–1pm CT.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '877-262-7241',
                  href: 'tel:8772627241',
                  sub: 'Mon–Fri 8am–6pm CT · Sat 9am–1pm CT',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'support@cobrainsurance.com',
                  href: 'mailto:support@cobrainsurance.com',
                  sub: 'We respond within one business day',
                },
                {
                  icon: MapPin,
                  label: 'Mailing Address',
                  value: 'HealthLink Insurance Agency LLC',
                  href: null,
                  sub: 'Licensed insurance agency · Not a walk-in office',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl p-6"
                    style={{ background: '#efefef', border: '2px solid #eeeeee' }}
                  >
                    <div
                      className="p-2.5 rounded-xl inline-flex mb-4"
                      style={{ background: '#3c4c63' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-bold text-base block mb-1 transition-opacity hover:opacity-75"
                        style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-bold text-base mb-1"
                        style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                      >
                        {item.value}
                      </p>
                    )}
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                    >
                      {item.sub}
                    </p>
                  </div>
                );
              })}
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
              Ready to talk through your options?
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              There's no obligation and no cost. Call us or send a message and a licensed
              advisor will walk you through exactly what you're entitled to.
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
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Send Us a Message →
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
              Explore Our Resources
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'COBRA Knowledge Base', href: '/knowledge-base' },
                { label: 'Start COBRA Enrollment', href: '/start-cobra' },
                { label: 'Alternatives to COBRA', href: '/alternatives' },
                { label: 'Manage Your COBRA Plan', href: '/manage-cobra' },
                { label: 'State COBRA Rules', href: '/state-laws' },
                { label: 'Get Help', href: '/get-help' },
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