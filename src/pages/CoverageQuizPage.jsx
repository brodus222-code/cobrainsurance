import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { Phone, Clock, ShieldCheck } from 'lucide-react';
import CoverageQuiz from '@/components/quiz/CoverageQuiz';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/quiz`;

export default function CoverageQuizPage() {
  return (
    <>
      <Helmet>
        <title>Health Coverage Quiz — Find Your Best Plan | CobraInsurance.Health</title>
        <meta
          name="description"
          content="Answer 5 quick questions about your goals, health, and budget. Our quiz recommends whether COBRA, an ACA Marketplace plan, or short-term insurance fits you best."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Health Coverage Quiz — CobraInsurance.Health" />
        <meta
          property="og:description"
          content="Get a personalized coverage recommendation in under a minute — COBRA, ACA, or short-term insurance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section
        className="w-full py-14 lg:py-20"
        style={{ background: 'linear-gradient(135deg, #3c4c63 0%, #2a3749 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            5-Minute Coverage Quiz
          </p>
          <h1
            className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Which Health Plan Fits You Best?
          </h1>
          <p
            className="text-base lg:text-lg"
            style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
          >
            Answer a few quick questions and we'll recommend whether COBRA, an ACA Marketplace
            plan, or short-term insurance makes the most sense for your situation.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="w-full py-12 lg:py-16" style={{ background: '#fbfbfb' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoverageQuiz />
        </div>
      </section>

      {/* Trust strip */}
      <section className="w-full py-10" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: Clock, title: 'Takes 2 minutes', body: 'Five simple questions, no account needed.' },
            { icon: ShieldCheck, title: 'Licensed in 22 states', body: 'Real advisors, real plans, no obligation.' },
            { icon: Phone, title: 'Talk to a human', body: 'Prefer to talk? Call 877-262-7241.' },
          ].map((item) => (
            <div key={item.title}>
              <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: '#e01f1f' }} />
              <p
                className="text-sm font-bold mb-1"
                style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
              >
                {item.title}
              </p>
              <p className="text-xs" style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}