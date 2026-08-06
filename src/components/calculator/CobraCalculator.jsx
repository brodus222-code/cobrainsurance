import { useState } from 'react';
import { Calculator, AlertTriangle } from 'lucide-react';

const fmt = (n) =>
  n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

export default function CobraCalculator() {
  const [employeeShare, setEmployeeShare] = useState('');
  const [employerPct, setEmployerPct] = useState(75);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  function handleCalculate(e) {
    e.preventDefault();
    setError('');
    const share = parseFloat(employeeShare);
    if (!share || share <= 0) {
      setError('Please enter the amount you currently pay each month.');
      setResult(null);
      return;
    }
    const empPct = Math.min(99, Math.max(0, Number(employerPct) || 0));
    const totalPremium = share / (1 - empPct / 100);
    const adminFee = totalPremium * 0.02;
    const cobraMonthly = totalPremium + adminFee;
    const cobraAnnual = cobraMonthly * 12;
    const increase = cobraMonthly - share;
    setResult({ totalPremium, adminFee, cobraMonthly, cobraAnnual, increase, share });
  }

  function reset() {
    setEmployeeShare('');
    setEmployerPct(75);
    setResult(null);
    setError('');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input form */}
      <div
        className="rounded-2xl p-6 sm:p-8 shadow-sm"
        style={{ background: '#ffffff', border: '1px solid #eeeeee' }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5" style={{ color: '#e01f1f' }} />
          <h3
            className="text-lg font-bold"
            style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
          >
            Your Coverage Details
          </h3>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label
              htmlFor="employee-share"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
            >
              What you pay per month now (your share)
            </label>
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold"
                style={{ color: '#6b7280' }}
              >
                $
              </span>
              <input
                id="employee-share"
                type="number"
                inputMode="decimal"
                min="0"
                step="1"
                placeholder="250"
                value={employeeShare}
                onChange={(e) => setEmployeeShare(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2"
                style={{
                  border: '1px solid #d1d5db',
                  fontFamily: 'var(--font-sans)',
                  color: '#1f2937',
                }}
              />
            </div>
            <p
              className="text-xs mt-1.5"
              style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
            >
              The amount deducted from your paycheck for health coverage.
            </p>
          </div>

          <div>
            <label
              htmlFor="employer-pct"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
            >
              Employer contribution: <span style={{ color: '#e01f1f' }}>{employerPct}%</span>
            </label>
            <input
              id="employer-pct"
              type="range"
              min="0"
              max="95"
              step="5"
              value={employerPct}
              onChange={(e) => setEmployerPct(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#e01f1f' }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs" style={{ color: '#9ca3af' }}>0%</span>
              <span className="text-xs" style={{ color: '#9ca3af' }}>95%</span>
            </div>
            <p
              className="text-xs mt-1.5"
              style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}
            >
              Most employers cover 70–80% of the premium. Estimate if unsure.
            </p>
          </div>

          {error && (
            <p
              className="text-sm flex items-center gap-1.5"
              style={{ color: '#dc2626', fontFamily: 'var(--font-sans)' }}
            >
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              {error}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-5 py-3 rounded-lg font-bold text-sm text-white uppercase tracking-wide transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Calculate COBRA Cost
            </button>
            <button
              type="button"
              onClick={reset}
              className="px-5 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors"
              style={{
                border: '1px solid #d1d5db',
                color: '#3c4c63',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      <div
        className="rounded-2xl p-6 sm:p-8 shadow-lg"
        style={{ background: '#3c4c63' }}
      >
        {result ? (
          <div className="text-white">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
            >
              Estimated COBRA Premium
            </p>
            <p
              className="text-4xl sm:text-5xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {fmt(result.cobraMonthly)}
              <span className="text-lg font-normal" style={{ color: '#a0b4c8' }}>/mo</span>
            </p>
            <p className="text-sm mb-6" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
              Approximately {fmt(result.cobraAnnual)} per year
            </p>

            <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <Row label="Total plan premium" value={fmt(result.totalPremium)} />
              <Row label="COBRA admin fee (2%)" value={fmt(result.adminFee)} />
              <Row label="You paid as employee" value={fmt(result.share)} />
              <div
                className="flex items-center justify-between pt-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="text-sm font-semibold" style={{ color: '#a0b4c8' }}>
                  Monthly increase
                </span>
                <span className="text-sm font-bold" style={{ color: '#ffffff' }}>
                  +{fmt(result.increase)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <Calculator className="w-12 h-12 mb-4" style={{ color: '#a0b4c8' }} />
            <p className="text-base font-semibold mb-1" style={{ color: '#ffffff' }}>
              Your estimate appears here
            </p>
            <p className="text-sm" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
              Enter your details and tap calculate to see your monthly COBRA cost.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
        {label}
      </span>
      <span className="text-sm font-semibold" style={{ color: '#ffffff' }}>
        {value}
      </span>
    </div>
  );
}