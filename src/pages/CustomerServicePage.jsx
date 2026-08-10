import customer_service from '@/content/pages/customer_service.json';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { useState, Fragment } from 'react';
import {
  Phone,
  Mail,
  CalendarDays,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/get-help`;

// Icon map for contact reasons — static, not from content layer
const reasonIcons = {
  r1: FileText,
  r2: Settings,
  r3: HelpCircle,
  r4: MessageSquare,
};

// Static href map for contact reason links
const reasonHrefs = {
  r2: '/manage-cobra',
  r4: '/alternatives',
};

// Static href map for quick links
const quickLinkHrefs = {
  ql1: '/knowledge-base',
  ql2: '/alternatives',
  ql3: '/start-cobra',
  ql4: '/manage-cobra',
  ql5: '/do-not-call',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${canonicalUrl}#webpage`,
  name: 'Customer Service — CobraInsurance.Health',
  url: canonicalUrl,
  description:
    'Contact HealthLink Insurance Agency LLC for COBRA enrollment help, coverage verification, billing questions, and employer administration support.',
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

// Renders FAQ accordion with content values inlined — no prop-drilling
function InlineFaqList() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="divide-y" style={{ borderColor: '#eeeeee' }}>
      {customer_service.faqs.map((faq, i) => (
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

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: '#efefef' }}>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: '#e01f1f' }}
        >
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
        >
          Message Received
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
        >
          Thank you, {form.name}. A licensed advisor will follow up at{' '}
          <strong>{form.email}</strong> within one business day. For urgent matters, call us
          directly at{' '}
          <a href="tel:8445691234" className="font-semibold" style={{ color: '#e01f1f' }}>
            844-569-1234
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
            Full Name <span style={{ color: '#e01f1f' }}>*</span>
          </label>
          <input
            id="name" name="name" type="text" required value={form.name} onChange={handleChange}
            placeholder="Jane Doe"
            className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
            style={{ background: '#fbfbfb', border: '1px solid #dddddd', color: '#333333', fontFamily: 'var(--font-sans)' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
            Email Address <span style={{ color: '#e01f1f' }}>*</span>
          </label>
          <input
            id="email" name="email" type="email" required value={form.email} onChange={handleChange}
            placeholder="jane@example.com"
            className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
            style={{ background: '#fbfbfb', border: '1px solid #dddddd', color: '#333333', fontFamily: 'var(--font-sans)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
            Phone Number
          </label>
          <input
            id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="(555) 000-0000"
            className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
            style={{ background: '#fbfbfb', border: '1px solid #dddddd', color: '#333333', fontFamily: 'var(--font-sans)' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="topic" className="text-xs font-bold uppercase tracking-wide" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
            Topic <span style={{ color: '#e01f1f' }}>*</span>
          </label>
          <select
            id="topic" name="topic" required value={form.topic} onChange={handleChange}
            className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
            style={{ background: '#fbfbfb', border: '1px solid #dddddd', color: form.topic ? '#333333' : '#999999', fontFamily: 'var(--font-sans)' }}
          >
            <option value="" disabled>Select a topic…</option>
            <option value="enrollment">COBRA Enrollment Help</option>
            <option value="verify">Verify Coverage Status</option>
            <option value="payment">Premium Payment Question</option>
            <option value="alternatives">Compare Alternatives to COBRA</option>
            <option value="employer">Employer / HR Administration</option>
            <option value="cancel">Cancel COBRA Coverage</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
          Message <span style={{ color: '#e01f1f' }}>*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
          placeholder="Describe your question or situation…"
          className="rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 resize-none"
          style={{ background: '#fbfbfb', border: '1px solid #dddddd', color: '#333333', fontFamily: 'var(--font-sans)' }}
        />
      </div>

      <p className="text-xs" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
        {customer_service.formDisclaimer}
      </p>

      <button
        type="submit"
        className="w-full py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
        style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
      >
        Send Message →
      </button>
    </form>
  );
}

export default function CustomerServicePage() {
  return (
    <>
      <Helmet>
        <title>COBRA Help & Support — Talk to a Licensed Advisor | CobraInsurance.Health</title>
        <meta
          name="description"
          content="Get expert COBRA help from a licensed advisor. Call 844-569-1234 for enrollment questions, coverage verification, billing issues, and employer administration. HealthLink Insurance Agency LLC — licensed in 22 states."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="COBRA Help & Support — Talk to a Licensed Advisor" />
        <meta property="og:description" content="Get expert COBRA help from a licensed advisor. Call 844-569-1234 for enrollment questions, coverage verification, billing issues, and employer administration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COBRA Help & Support — Talk to a Licensed Advisor" />
        <meta name="twitter:description" content="Get expert COBRA help from a licensed advisor. Call 844-569-1234 for enrollment questions, coverage verification, billing issues, and employer administration." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs mb-5" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-1.5">›</span>
              <span>Get Help</span>
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              {customer_service.hero.eyebrow}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {customer_service.hero.title}
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              {customer_service.hero.subtitle}
            </p>
          </div>
        </section>

        {/* ── Contact channels ── */}
        <section className="w-full py-10" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Phone */}
              <a
                href="tel:8445691234"
                className="group rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#fbfbfb', borderTop: '3px solid #e01f1f' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#e01f1f' }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base mb-0.5" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>Call Us</p>
                  <p className="text-lg font-bold" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>{customer_service.phone}</p>
                  <p className="text-xs mt-1" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>Mon–Fri 8am–6pm CT</p>
                </div>
              </a>

              {/* Request a Call */}
              <a
                href="#send-message"
                className="group rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#fbfbfb', borderTop: '3px solid #e01f1f' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#e01f1f' }}>
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base mb-0.5" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>Request a Call</p>
                  <p className="text-sm font-semibold" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>Fill out our form</p>
                  <p className="text-xs mt-1" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>We'll call you back shortly</p>
                </div>
              </a>

              {/* Schedule */}
              <Link
                to="/schedule"
                className="group rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#fbfbfb', borderTop: '3px solid #e01f1f' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#3c4c63' }}>
                  <CalendarDays className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base mb-0.5" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>Schedule a Call</p>
                  <p className="text-sm font-semibold" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>Pick a Time</p>
                  <p className="text-xs mt-1" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>Choose when we speak</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Hours banner ── */}
        <section className="w-full py-5" style={{ background: '#3c4c63' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              {customer_service.hours.map((h, i) => (
                <Fragment key={h.id}>
                  {i > 0 && <div className="hidden sm:block w-px h-4" style={{ background: '#4e6080' }} />}
                  <div className="flex items-center gap-2">
                    {i === 0 && <Clock className="w-4 h-4" style={{ color: '#a0b4c8' }} />}
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-sans)' }}>
                      {h.label}:{' '}
                    </span>
                    <span className="text-sm" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>{h.time}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Schedule a call ── */}
        <ScheduleSection />

        {/* ── What can we help with + Contact form ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left — reasons */}
              <div>
                <h2 className="text-3xl font-bold mb-3" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                  How Can We Help?
                </h2>
                <p className="text-sm mb-8" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
                  Our licensed advisors handle all of the following — and more.
                </p>
                <div className="flex flex-col gap-4">
                  {customer_service.contactReasons.map((reason) => {
                    const Icon = reasonIcons[reason.id] || HelpCircle;
                    const href = reasonHrefs[reason.id];
                    return (
                      <div
                        key={reason.id}
                        className="flex items-start gap-4 rounded-xl p-4"
                        style={{ background: '#efefef' }}
                      >
                        <div className="p-2 rounded-lg flex-shrink-0" style={{ background: '#3c4c63' }}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm mb-0.5" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                            {reason.title}
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                            {reason.desc}
                          </p>
                          {href && (
                            <Link
                              to={href}
                              className="inline-flex items-center gap-1 text-xs font-semibold mt-1.5 transition-opacity hover:opacity-75"
                              style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                            >
                              Learn more →
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* License info */}
                <div className="mt-8 rounded-xl p-5" style={{ background: '#efefef', border: '1px solid #eeeeee' }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                    Licensing &amp; Credentials
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
                    {customer_service.licensingNote}
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <div id="send-message">
                <h2 className="text-3xl font-bold mb-3" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                  Send Us a Message
                </h2>
                <p className="text-sm mb-8" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
                  Prefer not to call? Fill out the form and a licensed advisor will follow up within one business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Support FAQ ── */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              Common Support Questions
            </h2>
            <p className="text-sm mb-8" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
              Can't find your answer? Call{' '}
              <a href="tel:8445691234" className="font-semibold" style={{ color: '#e01f1f' }}>844-569-1234</a>{' '}
              and we'll help right away.
            </p>
            <div className="rounded-2xl px-6" style={{ background: '#fbfbfb' }}>
              <InlineFaqList />
            </div>
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="w-full py-10" style={{ background: '#fbfbfb' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
              Quick Links
            </p>
            <div className="flex flex-wrap gap-3">
              {customer_service.quickLinks.map((link) => (
                <Link
                  key={link.id}
                  to={quickLinkHrefs[link.id] || '/'}
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