import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Calendar, Phone } from 'lucide-react';

const STORAGE_KEY = 'cobra_exit_intent_shown';

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let timer = null;

    function handleMouseLeave(e) {
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
        trigger();
      }
    }

    function trigger() {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, '1');
      setOpen(true);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    }

    // Desktop: exit intent
    document.addEventListener('mouseleave', handleMouseLeave);
    // Mobile/touch fallback: show after 25s
    timer = setTimeout(trigger, 25000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-lg overflow-hidden"
        style={{ background: '#ffffff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full transition-colors hover:bg-black/10"
        >
          <X className="w-5 h-5" style={{ color: '#666666' }} />
        </button>

        {/* Header */}
        <div className="px-6 pt-8 pb-6 text-center" style={{ background: '#FFF5F5' }}>
          <h2
            className="text-2xl font-bold mb-3"
            style={{ color: '#e01f1f', fontFamily: 'var(--font-heading)' }}
          >
            Wait! Don't leave just yet.
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}
          >
            Health insurance decisions are complicated. You don't have to make them alone.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-7 text-center">
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: '#000000', fontFamily: 'var(--font-heading)' }}
          >
            Get a Free COBRA Consultation
          </h3>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: '#4A4A4A', fontFamily: 'var(--font-sans)' }}
          >
            Speak with a licensed advisor to compare COBRA against alternatives and find the best
            coverage for your needs and budget. Free service, no obligation.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              to="/get-help"
              onClick={() => setTimeout(close, 0)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              <Calendar className="w-4 h-4" />
              Schedule a Free Call
            </Link>
            <a
              href="tel:8445691234"
              onClick={() => setTimeout(close, 0)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg font-bold text-sm transition-colors hover:bg-gray-50"
              style={{
                background: '#ffffff',
                border: '1px solid #dddddd',
                color: '#000000',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <Phone className="w-4 h-4" />
              Call Now: 844-569-1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}