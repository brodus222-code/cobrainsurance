import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/contact`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'Contact CobraInsurance.Health',
  url: canonicalUrl,
  description:
    'Contact CobraInsurance.Health to speak with a licensed COBRA advisor. Call 844-569-1234, email support@cobrainsurance.com, or request a free coverage consultation.',
  isPartOf: { '@id': `${site}/#website` },
};

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us — CobraInsurance.Health | Licensed COBRA Advisors</title>
        <meta
          name="description"
          content="Contact CobraInsurance.Health to speak with a licensed COBRA advisor. Call 844-569-1234, email support@cobrainsurance.com, or request a free consultation."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Contact Us — CobraInsurance.Health" />
        <meta
          property="og:description"
          content="Speak with a licensed COBRA advisor. Call 844-569-1234 or email support@cobrainsurance.com."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us — CobraInsurance.Health" />
        <meta
          name="twitter:description"
          content="Speak with a licensed COBRA advisor. Call 844-569-1234 or email support@cobrainsurance.com."
        />
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
              Contact Us
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get in Touch with a Licensed COBRA Advisor
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Questions about COBRA, ACA marketplace plans, or your coverage options after a job
              loss? Our licensed advisors are here to help — at no cost to you.
            </p>
          </div>
        </section>

        {/* ── Contact methods ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {/* Phone */}
              <div
                className="rounded-2xl p-6"
                style={{ background: '#efefef', border: '2px solid #eeeeee' }}
              >
                <div
                  className="p-2.5 rounded-xl inline-flex mb-4"
                  style={{ background: '#3c4c63' }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                >
                  Call Us
                </p>
                <a
                  href="tel:8445691234"
                  className="font-bold text-lg block mb-1 transition-opacity hover:opacity-75"
                  style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                >
                  844-569-1234
                </a>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                >
                  Mon–Fri 8am–6pm CT · Sat 9am–1pm CT
                </p>
              </div>

              {/* Email */}
              <div
                className="rounded-2xl p-6"
                style={{ background: '#efefef', border: '2px solid #eeeeee' }}
              >
                <div
                  className="p-2.5 rounded-xl inline-flex mb-4"
                  style={{ background: '#3c4c63' }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                >
                  Email Us
                </p>
                <a
                  href="mailto:support@cobrainsurance.com"
                  className="font-bold text-base block mb-1 break-all transition-opacity hover:opacity-75"
                  style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
                >
                  support@cobrainsurance.com
                </a>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                >
                  We respond within one business day
                </p>
              </div>

              {/* Address */}
              <div
                className="rounded-2xl p-6"
                style={{ background: '#efefef', border: '2px solid #eeeeee' }}
              >
                <div
                  className="p-2.5 rounded-xl inline-flex mb-4"
                  style={{ background: '#3c4c63' }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
                >
                  Mailing Address
                </p>
                <p
                  className="font-bold text-base mb-1"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  HealthLink Insurance Agency LLC
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
                >
                  2501 Chatham Rd Suite R, Springfield, IL 62704
                </p>
              </div>
            </div>

            {/* Hours + CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div
                className="rounded-2xl p-8"
                style={{ background: '#3c4c63' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-white" />
                  <h2
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Advisor Hours
                  </h2>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                    <span className="text-sm text-white" style={{ fontFamily: 'var(--font-sans)' }}>Monday – Friday</span>
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-sans)' }}>8am – 6pm CT</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                    <span className="text-sm text-white" style={{ fontFamily: 'var(--font-sans)' }}>Saturday</span>
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-sans)' }}>9am – 1pm CT</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-white" style={{ fontFamily: 'var(--font-sans)' }}>Sunday</span>
                    <span className="text-sm font-semibold" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>Closed</span>
                  </li>
                </ul>
              </div>

              <div
                className="rounded-2xl p-8 flex flex-col justify-center"
                style={{ background: '#efefef', border: '2px solid #eeeeee' }}
              >
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                >
                  Prefer we contact you?
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                >
                  Request a free, no-obligation consultation. A licensed advisor will review your
                  situation and reach out to walk you through your coverage options.
                </p>
                <Link
                  to="/check-options"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90 w-fit"
                  style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                >
                  Request a Free Consultation
                  <ChevronRight className="w-4 h-4" />
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
              Ready to talk through your options?
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
            >
              There's no obligation and no cost. Call us and a licensed advisor will walk you
              through exactly what you're entitled to.
            </p>
            <a
              href="tel:8445691234"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              <Phone className="w-4 h-4" />
              Call 844-569-1234
            </a>
          </div>
        </section>
      </main>
    </>
  );
}