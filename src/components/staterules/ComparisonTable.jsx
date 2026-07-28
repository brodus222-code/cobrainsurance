import usa_state_cobra_rules from '@/content/pages/usa_state_cobra_rules.json';

export default function ComparisonTable() {
  return (
    <section className="w-full py-12" style={{ background: '#fbfbfb' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
          Federal COBRA vs. State Continuation — Side by Side
        </h2>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #eeeeee' }}>
          <div
            className="grid grid-cols-3 px-5 py-3 text-xs font-bold uppercase tracking-wide"
            style={{ background: '#3c4c63', color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            <span>Feature</span>
            <span>Federal COBRA</span>
            <span>State Continuation</span>
          </div>
          {usa_state_cobra_rules.comparisonRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-5 py-4 border-b text-sm gap-2"
              style={{ borderColor: '#eeeeee', background: i % 2 === 0 ? '#fbfbfb' : '#f7f7f7' }}
            >
              <span className="font-semibold" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>{row.feature}</span>
              <span style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>{row.federal}</span>
              <span style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>{row.state}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}