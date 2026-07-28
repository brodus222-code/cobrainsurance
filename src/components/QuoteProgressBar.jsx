import { CheckCircle } from 'lucide-react';

const STEP_LABELS = {
  product: 'Coverage Type',
  location: 'Location',
  household: 'Household',
  contact: 'Contact',
};

const STEPS = ['product', 'location', 'household', 'contact', 'done'];

export default function QuoteProgressBar({ current }) {
  const idx = STEPS.indexOf(current);
  const total = STEPS.length - 1;
  const displaySteps = STEPS.slice(0, total);

  return (
    <div className="flex items-center gap-2 mb-8">
      {displaySteps.map((s) => {
        const stepIdx = STEPS.indexOf(s);
        const done = stepIdx < idx;
        const active = stepIdx === idx;
        return (
          <div key={s} className="flex items-center gap-2">
            <div
              className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
              style={{
                background: done ? '#16a34a' : active ? '#e01f1f' : '#d1d5db',
                color: done || active ? '#ffffff' : '#6b7280',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {done ? <CheckCircle className="w-4 h-4" /> : stepIdx + 1}
            </div>
            <span
              className="text-xs hidden sm:inline"
              style={{
                color: active ? '#e01f1f' : done ? '#16a34a' : '#9ca3af',
                fontFamily: 'var(--font-sans)',
                fontWeight: active ? 700 : 400,
              }}
            >
              {STEP_LABELS[s]}
            </span>
            {stepIdx < total - 1 && (
              <div
                className="w-6 h-0.5 mx-1"
                style={{ background: done ? '#16a34a' : '#e5e7eb' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}