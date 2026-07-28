import { useState } from 'react';
import { ChevronDown, ChevronUp, Info, CheckCircle, AlertTriangle, Phone } from 'lucide-react';

export default function StateCard({ rule }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #eeeeee', background: '#fbfbfb' }}>
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 transition-colors hover:bg-gray-50"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
            style={{ background: rule.miniCobra ? '#3c4c63' : '#888888', fontFamily: 'var(--font-sans)' }}
          >
            {rule.abbr}
          </div>
          <div className="text-left">
            <p className="font-bold text-base" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
              {rule.state}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span
                className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{
                  background: rule.miniCobra ? '#e8f0f8' : '#f5f5f5',
                  color: rule.miniCobra ? '#3c4c63' : '#888888',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {rule.miniCobra ? 'Mini-COBRA available' : 'Federal COBRA only'}
              </span>
              <span
                className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: '#fef3e2', color: '#b45309', fontFamily: 'var(--font-sans)' }}
              >
                {rule.duration}
              </span>
            </div>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#e01f1f' }} />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#3c4c63' }} />
        )}
      </button>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: '#eeeeee' }}>
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              {rule.smallEmployerThreshold && (
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 flex-shrink-0" style={{ color: '#3c4c63' }} />
                  <span className="text-xs font-semibold" style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}>
                    Applies to: {rule.smallEmployerThreshold}
                  </span>
                </div>
              )}
              <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                Key Rules
              </p>
              <ul className="flex flex-col gap-2">
                {rule.keyRules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#3c4c63' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              {rule.note && (
                <div className="rounded-xl px-4 py-4" style={{ background: '#efefef', border: '1px solid #e0e0e0' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" style={{ color: '#e0801f' }} />
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#e0801f', fontFamily: 'var(--font-sans)' }}>
                      Important Note
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#444444', fontFamily: 'var(--font-sans)' }}>
                    {rule.note}
                  </p>
                </div>
              )}
              <div className="rounded-xl px-4 py-4" style={{ background: '#3c4c63' }}>
                <p className="text-xs font-bold text-white mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Questions about {rule.state} coverage?
                </p>
                <p className="text-xs mb-3" style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}>
                  Our licensed advisors can walk you through your options in {rule.state}.
                </p>
                <a
                  href="tel:8772627241"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-opacity hover:opacity-90"
                  style={{ background: '#e01f1f', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                >
                  <Phone className="w-3 h-3" />
                  Call 877-262-7241
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}