import { CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

const FEDERAL_POINTS = [
  'Applies to employers with 20 or more employees',
  'Covers group health plans subject to ERISA',
  'Up to 18 months for job loss / reduced hours',
  'Up to 36 months for other qualifying events',
  'Premium capped at 102% of the group rate',
  'Administered by the plan administrator',
  'Does NOT cover self-employed or individual plans',
];

const STATE_POINTS = [
  'Fills the gap for employers with 2–19 employees',
  'Only applies to fully insured group plans (not self-insured)',
  'Duration varies: 3 months (GA) to 36 months (CA, NY)',
  'Premium caps vary: 100–115% of the group rate',
  'Administered by the insurance carrier, not the employer',
  'Not all states have mini-COBRA laws',
  'Some states (MN, WI) cover ALL employer sizes',
];

function Column({ accent, icon, title, points, checkColor }) {
  const Icon = icon;
  return (
    <div className="rounded-2xl p-6" style={{ background: '#fbfbfb', border: '2px solid #eeeeee' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg" style={{ background: accent }}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-bold" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>{title}</h2>
      </div>
      <ul className="flex flex-col gap-2.5">
        {points.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: checkColor }} />
            <span className="text-sm" style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FederalVsStateExplainer() {
  return (
    <section className="w-full py-12" style={{ background: '#efefef' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Column accent="#e01f1f" icon={ShieldCheck} title="Federal COBRA" points={FEDERAL_POINTS} checkColor="#e01f1f" />
          <Column accent="#3c4c63" icon={MapPin} title="State / Mini-COBRA" points={STATE_POINTS} checkColor="#3c4c63" />
        </div>
      </div>
    </section>
  );
}