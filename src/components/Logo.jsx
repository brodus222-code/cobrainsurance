export default function Logo({ variant = 'dark', className = '' }) {
  const mainColor = variant === 'light' ? '#ffffff' : '#3c4c63';
  const dotColor = variant === 'light' ? '#a0b4c8' : '#e01f1f';
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <span
        className="inline-flex items-center justify-center rounded-md"
        style={{ background: '#e01f1f', width: '2rem', height: '2rem' }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
      <span style={{ color: mainColor, fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
        CobraInsurance<span style={{ color: dotColor }}>.Health</span>
      </span>
    </span>
  );
}