import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, PhoneCall, CalendarDays, FileText, X } from 'lucide-react';

const OPTIONS = [
  {
    icon: Phone,
    label: 'Call Now',
    sub: '844-569-1234',
    href: 'tel:8445691234',
  },
  {
    icon: PhoneCall,
    label: 'Request Call Back',
    sub: "We'll call you shortly",
    to: '/get-help',
  },
  {
    icon: CalendarDays,
    label: 'Schedule a Call',
    sub: 'Pick a time that works',
    to: '/schedule',
  },
  {
    icon: FileText,
    label: 'Check Options Online',
    sub: 'No call required',
    to: '/check-options',
  },
];

export default function AdvisorBubble() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-full right-0 mb-3 w-72 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in"
            style={{ background: '#ffffff', border: '1px solid #e5e5e5' }}
          >
            {OPTIONS.map((opt, i) => {
              const Icon = opt.icon;
              const inner = (
                <div
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-gray-50"
                  style={{ borderTop: i > 0 ? '1px solid #f3f3f3' : 'none' }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" style={{ color: '#e01f1f' }} strokeWidth={1.75} />
                  <div>
                    <p
                      className="text-sm font-bold leading-tight"
                      style={{ color: '#2d2d2d', fontFamily: 'var(--font-sans)' }}
                    >
                      {opt.label}
                    </p>
                    <p
                      className="text-xs leading-tight mt-0.5"
                      style={{ color: '#a0a0a0', fontFamily: 'var(--font-sans)' }}
                    >
                      {opt.sub}
                    </p>
                  </div>
                </div>
              );
              return opt.href ? (
                <a key={i} href={opt.href} onClick={() => setOpen(false)}>
                  {inner}
                </a>
              ) : (
                <Link key={i} to={opt.to} onClick={() => setOpen(false)}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-3.5 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
        style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
        aria-label="Talk to an Advisor"
      >
        {open ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.75} />
        )}
        <span className="text-sm font-bold uppercase tracking-wide text-white hidden sm:inline">
          Talk to an Advisor
        </span>
      </button>
    </div>
  );
}