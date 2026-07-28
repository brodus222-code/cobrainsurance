import quote from '@/content/pages/quote.json';
import { CheckCircle, MapPin, User, Users, DollarSign, Mail, Phone } from 'lucide-react';
import { FieldLabel, TextInput, DropdownSelect } from './QuoteFieldPrimitives';

export function StepProduct({ data, set }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
        {quote.steps.product.heading}
      </h2>
      <p className="text-sm mb-6" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
        {quote.steps.product.subheading}
      </p>
      <div className="flex flex-col gap-3">
        {quote.productOptions.map((p) => (
          <button
            key={p.id}
            onClick={() => set('product', p.id)}
            className="flex items-start gap-4 rounded-xl p-4 text-left"
            style={{
              background: data.product === p.id ? '#fff5f5' : '#ffffff',
              border: data.product === p.id ? '2px solid #e01f1f' : '2px solid #e5e7eb',
            }}
          >
            <span className="text-2xl mt-0.5">{p.emoji}</span>
            <div className="flex-1">
              <p className="font-bold text-sm" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>{p.label}</p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>{p.desc}</p>
            </div>
            {data.product === p.id && (
              <CheckCircle className="w-5 h-5 ml-auto flex-shrink-0 mt-0.5" style={{ color: '#e01f1f' }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export function StepLocation({ data, set }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
        {quote.steps.location.heading}
      </h2>
      <p className="text-sm mb-6" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
        {quote.steps.location.subheading}
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <FieldLabel><span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> State</span></FieldLabel>
          <DropdownSelect
            value={data.state}
            onChange={(v) => set('state', v)}
            placeholder="Select your state…"
            options={quote.US_STATES.map((s) => ({ value: s, label: s }))}
          />
        </div>
        <div>
          <FieldLabel>Zip Code</FieldLabel>
          <TextInput value={data.zipCode} onChange={(v) => set('zipCode', v)} placeholder="e.g. 62704" />
        </div>
      </div>
    </div>
  );
}

export function StepHousehold({ data, set }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
        {quote.steps.household.heading}
      </h2>
      <p className="text-sm mb-6" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
        {quote.steps.household.subheading}
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <FieldLabel><span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Your Age</span></FieldLabel>
          <TextInput value={data.applicantAge} onChange={(v) => set('applicantAge', v)} placeholder="e.g. 42" type="number" />
        </div>
        <div>
          <FieldLabel><span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Household Size</span></FieldLabel>
          <DropdownSelect
            value={data.householdSize}
            onChange={(v) => set('householdSize', v)}
            placeholder="Select household size…"
            options={[
              { value: '1', label: 'Just me (1)' },
              { value: '2', label: 'Me + 1 (2)' },
              { value: '3', label: 'Me + 2 (3)' },
              { value: '4', label: 'Me + 3 (4)' },
              { value: '5', label: 'Me + 4 (5)' },
              { value: '6+', label: '6 or more' },
            ]}
          />
        </div>
        <div>
          <FieldLabel><span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" /> Estimated Annual Household Income</span></FieldLabel>
          <DropdownSelect
            value={data.annualIncome}
            onChange={(v) => set('annualIncome', v)}
            placeholder="Select income range…"
            options={[
              { value: 'under-25k', label: 'Under $25,000' },
              { value: '25k-50k', label: '$25,000 – $50,000' },
              { value: '50k-75k', label: '$50,000 – $75,000' },
              { value: '75k-100k', label: '$75,000 – $100,000' },
              { value: '100k-150k', label: '$100,000 – $150,000' },
              { value: 'over-150k', label: 'Over $150,000' },
              { value: 'prefer-not', label: 'Prefer not to say' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export function StepContact({ data, set }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
        {quote.steps.contact.heading}
      </h2>
      <p className="text-sm mb-6" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
        {quote.steps.contact.subheading}
      </p>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel>First Name</FieldLabel>
            <TextInput value={data.firstName} onChange={(v) => set('firstName', v)} placeholder="Jane" />
          </div>
          <div>
            <FieldLabel>Last Name</FieldLabel>
            <TextInput value={data.lastName} onChange={(v) => set('lastName', v)} placeholder="Smith" />
          </div>
        </div>
        <div>
          <FieldLabel><span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email Address</span></FieldLabel>
          <TextInput value={data.email} onChange={(v) => set('email', v)} placeholder="jane@example.com" type="email" />
        </div>
        <div>
          <FieldLabel><span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone Number</span></FieldLabel>
          <TextInput value={data.phone} onChange={(v) => set('phone', v)} placeholder="(555) 123-4567" type="tel" />
        </div>
        <div>
          <FieldLabel>Best Time to Reach You</FieldLabel>
          <DropdownSelect
            value={data.bestTime}
            onChange={(v) => set('bestTime', v)}
            placeholder="Select best time…"
            options={[
              { value: 'morning', label: 'Morning (8am – 12pm)' },
              { value: 'afternoon', label: 'Afternoon (12pm – 5pm)' },
              { value: 'evening', label: 'Evening (5pm – 7pm)' },
              { value: 'anytime', label: 'Anytime' },
            ]}
          />
        </div>
        <div>
          <FieldLabel>
            <span>Anything else we should know? </span>
            <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional)</span>
          </FieldLabel>
          <textarea
            value={data.notes}
            onChange={(e) => set('notes', e.target.value)}
            placeholder="e.g. I have an ongoing prescription, or I need coverage by a specific date…"
            rows={3}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
            style={{ background: '#ffffff', border: '1.5px solid #d1d5db', color: '#1f2937', fontFamily: 'var(--font-sans)' }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#e01f1f'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; }}
          />
        </div>
        <p className="text-xs leading-relaxed" style={{ color: '#9ca3af', fontFamily: 'var(--font-sans)' }}>
          {quote.consentText}
        </p>
      </div>
    </div>
  );
}