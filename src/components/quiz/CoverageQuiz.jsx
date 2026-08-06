import { useState } from 'react';
import { CheckCircle, ChevronLeft, ArrowRight } from 'lucide-react';
import quoteData from '@/content/pages/quote.json';

const US_STATES = quoteData.US_STATES;

const QUESTIONS = [
  {
    id: 'state',
    prompt: 'What state do you live in?',
    helper: 'Coverage options and pricing vary by state.',
    type: 'select',
    options: US_STATES.map((s) => ({ id: s, label: s })),
  },
  {
    id: 'goal',
    prompt: 'What is your primary goal for health coverage right now?',
    helper: 'This tells us what matters most to you.',
    options: [
      { id: 'keep', label: 'Keep my exact same doctors and current coverage' },
      { id: 'low', label: 'Find the lowest possible monthly premium' },
      { id: 'comprehensive', label: 'Get comprehensive coverage with financial help' },
    ],
  },
  {
    id: 'health',
    prompt:
      'Do you have any ongoing medical treatments, expensive prescriptions, or pre-existing conditions?',
    helper: 'Short-term plans typically do not cover pre-existing conditions.',
    options: [
      { id: 'yes', label: 'Yes, I need coverage that covers existing conditions' },
      { id: 'no', label: 'No, I am generally healthy' },
    ],
  },
  {
    id: 'duration',
    prompt: 'How long do you expect to need this coverage?',
    helper: 'Short-term plans are ideal for bridging a few months.',
    options: [
      { id: 'short', label: 'Just a few months (bridge until my next job)' },
      { id: 'long', label: 'Unsure, possibly for the rest of the year or longer' },
    ],
  },
  {
    id: 'income',
    prompt: 'What is your estimated household income for this year?',
    helper: 'This helps estimate subsidy eligibility for ACA plans.',
    options: [
      { id: 'low', label: 'Under $60,000 (individual) or $120,000 (family)' },
      { id: 'high', label: 'Over that amount' },
    ],
  },
];

const RECS = {
  STM: {
    label: 'Short-Term Health Insurance',
    heading: 'Your Top Match: Short-Term Health Insurance',
    body: 'Based on your answers, a Short-Term Health Insurance plan might be the perfect fit. It offers the lowest premiums for temporary coverage while you bridge the gap between jobs.',
  },
  ACA: {
    label: 'ACA Marketplace Plan',
    heading: 'Your Top Match: ACA Marketplace Plan',
    body: 'Based on your answers, an Affordable Care Act (ACA) Marketplace plan is likely your best option. It provides comprehensive coverage for pre-existing conditions and you may qualify for subsidies to lower your premium.',
  },
  COBRA: {
    label: 'COBRA Continuation',
    heading: 'Your Top Match: COBRA Continuation Coverage',
    body: 'Based on your answers, COBRA continuation coverage may be your best option — it lets you keep your exact current doctors, plan, and benefits exactly as they are today.',
  },
};

function recommend(answers) {
  const scores = { STM: 0, ACA: 0, COBRA: 0 };

  if (answers.goal === 'keep') scores.COBRA += 3;
  else if (answers.goal === 'low') {
    scores.STM += 3;
    scores.ACA += 1;
  } else if (answers.goal === 'comprehensive') scores.ACA += 3;

  if (answers.health === 'yes') {
    scores.ACA += 3;
    scores.COBRA += 2;
  } else {
    scores.STM += 3;
    scores.ACA += 1;
  }

  if (answers.duration === 'short') {
    scores.STM += 3;
    scores.COBRA += 1;
  } else {
    scores.ACA += 2;
    scores.COBRA += 2;
  }

  if (answers.income === 'low') scores.ACA += 3;
  else {
    scores.STM += 2;
    scores.COBRA += 1;
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { top: sorted[0][0], scores };
}

const CONSENT =
  'By clicking "View My Options", I consent to HealthLink Insurance Agency LLC contacting me about health insurance options at the phone number and email provided above, including by autodialer, prerecorded/artificial voice, AI-assisted calls, and SMS/text messages, even if my number is on a Do Not Call list. Consent is not a condition of purchase. I can revoke this consent at any time. Message and data rates may apply. See our Privacy Policy for details.';

export default function CoverageQuiz() {
  const [step, setStep] = useState(0); // 0..QUESTIONS.length-1, then QUESTIONS.length = result
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  const total = QUESTIONS.length;
  const isResult = step >= total;
  const progress = isResult ? 100 : Math.round((step / total) * 100);
  const current = isResult ? null : QUESTIONS[step];

  function selectAnswer(qid, oid) {
    setAnswers((prev) => ({ ...prev, [qid]: oid }));
    setTimeout(() => setStep((s) => s + 1), 180);
  }

  function goBack() {
    if (isResult) setStep(total - 1);
    else if (step > 0) setStep((s) => s - 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
    setForm({ name: '', phone: '', email: '' });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    setSubmitted(true);
  }

  if (isResult) {
    const { top, scores } = recommend(answers);
    const rec = RECS[top];
    return (
      <div>
        <ProgressBar percent={progress} step={total} total={total} done />
        <div
          className="rounded-2xl p-6 sm:p-8 shadow-lg"
          style={{ background: '#ffffff', border: '1px solid #eeeeee' }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
          >
            {rec.label}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
          >
            {rec.heading}
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}
          >
            {rec.body}
          </p>
          <p
            className="text-sm mb-6"
            style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
          >
            This is an educational starting point, not personalized advice — a licensed advisor
            will confirm what's available and suitable in your state.
          </p>

          {/* Score breakdown */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {Object.entries(scores).map(([k, v]) => (
              <div
                key={k}
                className="rounded-lg p-3 text-center"
                style={{ background: k === top ? '#fef2f2' : '#f9fafb' }}
              >
                <p
                  className="text-xs font-bold uppercase"
                  style={{
                    color: k === top ? '#e01f1f' : '#9ca3af',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {k}
                </p>
                <p
                  className="text-lg font-bold"
                  style={{ color: k === top ? '#e01f1f' : '#6b7280' }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>

          {submitted ? (
            <div
              className="rounded-xl p-6 text-center"
              style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
            >
              <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#16a34a' }} />
              <p
                className="text-base font-bold mb-1"
                style={{ color: '#15803d', fontFamily: 'var(--font-sans)' }}
              >
                Thanks, {form.name.split(' ')[0]}!
              </p>
              <p className="text-sm" style={{ color: '#166534', fontFamily: 'var(--font-sans)' }}>
                A licensed advisor will review your matches and reach out shortly — typically
                within one business day.
              </p>
              <button
                onClick={restart}
                className="mt-4 text-sm font-semibold underline"
                style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Retake the quiz
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
              >
                See real plans and prices for your situation
              </p>
              <LeadInput
                label="Full Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                type="text"
              />
              <LeadInput
                label="Phone Number"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                type="tel"
              />
              <LeadInput
                label="Email Address"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                type="email"
              />
              <button
                type="submit"
                className="w-full px-5 py-3 rounded-lg font-bold text-sm text-white uppercase tracking-wide transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                View My Options
              </button>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
              >
                {CONSENT}
              </p>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <ProgressBar percent={progress} step={step + 1} total={total} />
      {step > 0 && (
        <button
          onClick={goBack}
          className="inline-flex items-center gap-1 text-sm font-semibold mb-4 transition-colors hover:opacity-70"
          style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      )}
      <div
        className="rounded-2xl p-6 sm:p-8 shadow-sm"
        style={{ background: '#ffffff', border: '1px solid #eeeeee' }}
      >
        <h2
          className="text-xl sm:text-2xl font-bold mb-2"
          style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
        >
          {current.prompt}
        </h2>
        {current.helper && (
          <p
            className="text-sm mb-6"
            style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
          >
            {current.helper}
          </p>
        )}

        <div className="grid grid-cols-1 gap-3">
          {current.options.map((opt) => {
            const selected = answers[current.id] === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => selectAnswer(current.id, opt.id)}
                className="flex items-center justify-between w-full text-left px-5 py-4 rounded-lg transition-all"
                style={{
                  border: selected ? '2px solid #e01f1f' : '2px solid #e5e7eb',
                  background: selected ? '#fef2f2' : '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  color: '#1f2937',
                }}
              >
                <span className="text-sm font-medium">{opt.label}</span>
                {selected ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#e01f1f' }} />
                ) : (
                  <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: '#9ca3af' }} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ percent, step, total, done }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
        >
          {done ? 'Complete' : `Question ${step} of ${total}`}
        </span>
        <span
          className="text-xs font-bold"
          style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
        >
          {percent}% Completed
        </span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: '#e5e7eb' }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${percent}%`, background: '#e01f1f' }}
        />
      </div>
    </div>
  );
}

function LeadInput({ label, value, onChange, type }) {
  return (
    <div>
      <label
        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
        style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2"
        style={{ border: '1px solid #d1d5db', fontFamily: 'var(--font-sans)', color: '#1f2937' }}
      />
    </div>
  );
}