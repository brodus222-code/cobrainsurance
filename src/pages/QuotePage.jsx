import { useState } from 'react';
import { Helmet } from '@/lib/helmet';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import quote from '@/content/pages/quote.json';
import QuoteProgressBar from '@/components/QuoteProgressBar';
import { StepProduct, StepLocation, StepHousehold, StepContact } from '@/components/quote/QuoteSteps';
import StepDone from '@/components/quote/StepDone';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/quote`;

const STEPS = ['product', 'location', 'household', 'contact', 'done'];

const EMPTY = {
  product: '', state: '', zipCode: '', applicantAge: '', householdSize: '',
  annualIncome: '', firstName: '', lastName: '', email: '', phone: '',
  bestTime: '', notes: '',
};

function canAdvance(step, data) {
  if (step === 'product') return !!data.product;
  if (step === 'location') return !!data.state && !!data.zipCode;
  if (step === 'household') return !!data.applicantAge && !!data.householdSize && !!data.annualIncome;
  if (step === 'contact') return !!data.firstName && !!data.email && !!data.phone;
  return true;
}

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') ?? '';

  const [step, setStep] = useState(initialProduct ? 'location' : 'product');
  const [data, setData] = useState({ ...EMPTY, product: initialProduct });

  function set(key, value) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function advance() {
    const idx = STEPS.indexOf(step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1]);
  }

  function back() {
    const idx = STEPS.indexOf(step);
    if (idx > 0) setStep(STEPS[idx - 1]);
  }

  const isLast = step === 'contact';
  const isDone = step === 'done';

  return (
    <>
      <Helmet>
        <title>Get a Free Health Coverage Quote — CobraInsurance.Health</title>
        <meta name="description" content="Free quote — COBRA or ACA Marketplace. Licensed advisor compares your options." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Get a Free Coverage Quote — CobraInsurance.Health" />
        <meta property="og:description" content="Free quote — COBRA or ACA Marketplace. Licensed advisor compares your options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Free Coverage Quote — CobraInsurance.Health" />
        <meta name="twitter:description" content="Free quote — COBRA or ACA Marketplace. Licensed advisor compares your options." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <main>
        <h1 className="sr-only">Get a Free Health Coverage Quote</h1>

        <section className="w-full min-h-screen py-14 lg:py-20" style={{ background: '#efefef' }}>
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            {!isDone && (
              <Link
                to="/when-cobra#alternatives"
                className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-opacity hover:opacity-75"
                style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Alternatives
              </Link>
            )}

            <div className="rounded-2xl shadow-sm overflow-hidden" style={{ background: '#fbfbfb' }}>
              <div className="px-6 pt-6 pb-0">
                {!isDone && <QuoteProgressBar current={step} />}
              </div>

              <div className="px-6 pb-6">
                {step === 'product' && <StepProduct data={data} set={set} />}
                {step === 'location' && <StepLocation data={data} set={set} />}
                {step === 'household' && <StepHousehold data={data} set={set} />}
                {step === 'contact' && <StepContact data={data} set={set} />}
                {step === 'done' && <StepDone data={data} />}

                {!isDone && (
                  <div className="flex justify-between items-center mt-8 gap-3">
                    {step !== 'product' ? (
                      <button
                        onClick={back}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-75"
                        style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)', background: '#efefef' }}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    <button
                      onClick={advance}
                      disabled={!canAdvance(step, data)}
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity disabled:opacity-40"
                      style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                    >
                      {isLast ? 'Submit Request' : 'Continue'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {!isDone && (
              <p className="text-xs text-center mt-5 leading-relaxed" style={{ color: '#9ca3af', fontFamily: 'var(--font-sans)' }}>
                {quote.trustNote}
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}