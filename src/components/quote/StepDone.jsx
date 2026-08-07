import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import quote from '@/content/pages/quote.json';

const PRODUCT_LABELS = {
  cobra: 'COBRA Continuation Coverage',
  aca: 'ACA Marketplace Plan',
  stm: 'Short-Term Health Insurance',
  'hospital-indemnity': 'Hospital Indemnity',
  accident: 'Accident-Only Plan',
  teladoc: 'Teladoc / Virtual Care',
};

export default function StepDone({ data }) {
  const summaryRows = [
    ['Coverage', PRODUCT_LABELS[data.product] || data.product],
    ['State', data.state],
    ['Zip Code', data.zipCode],
    ['Age', data.applicantAge],
    ['Household Size', data.householdSize],
    ['Income Range', data.annualIncome],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Best Time', data.bestTime],
  ].filter(([, v]) => v);

  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#f0fdf4' }}>
        <CheckCircle className="w-9 h-9" style={{ color: '#16a34a' }} />
      </div>
      <h2 className="text-2xl font-bold mb-3" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
        <span>{quote.done.heading.replace('!', '')}, </span>
        <span>{data.firstName || 'there'}!</span>
      </h2>
      <p className="text-sm leading-relaxed mb-6 max-w-sm mx-auto" style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}>
        {quote.done.body}
      </p>
      <div className="rounded-xl px-5 py-4 mb-6 text-left" style={{ background: '#efefef' }}>
        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
          {quote.done.summaryLabel}
        </p>
        {summaryRows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 py-1 border-b last:border-0" style={{ borderColor: '#e5e7eb' }}>
            <span className="text-xs" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>{label}</span>
            <span className="text-xs font-semibold text-right" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>{value}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <a
          href="tel:8445691234"
          className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
          style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
        >
          <Phone className="w-4 h-4" />
          <span>{quote.done.callCta}</span>
        </a>
        <Link
          to="/alternatives"
          className="text-sm font-semibold transition-opacity hover:opacity-75"
          style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
        >
          {quote.done.backLink}
        </Link>
      </div>
    </div>
  );
}