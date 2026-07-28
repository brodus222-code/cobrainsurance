export function FieldLabel({ children }) {
  return (
    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>
      {children}
    </label>
  );
}

export function TextInput({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3 text-sm outline-none"
      style={{ background: '#ffffff', border: '1.5px solid #d1d5db', color: '#1f2937', fontFamily: 'var(--font-sans)' }}
      onFocus={(e) => { e.currentTarget.style.borderColor = '#e01f1f'; }}
      onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; }}
    />
  );
}

export function DropdownSelect({ value, onChange, options, placeholder }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl px-4 py-3 text-sm outline-none appearance-none"
      style={{ background: '#ffffff', border: '1.5px solid #d1d5db', color: value ? '#1f2937' : '#9ca3af', fontFamily: 'var(--font-sans)' }}
      onFocus={(e) => { e.currentTarget.style.borderColor = '#e01f1f'; }}
      onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; }}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}