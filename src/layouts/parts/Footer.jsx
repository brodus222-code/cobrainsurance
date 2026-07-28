import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  const navLinks = [
    { label: 'Do Not Call List', href: '/kb/stop-insurance-phone-calls' },
    { label: 'Start COBRA', href: '/start-cobra' },
    { label: 'Manage Your COBRA', href: '/manage-cobra' },
    { label: 'State Continuation Laws', href: '/usa-state-cobra-rules' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Where to File Unemployment', href: '/unemployment-insurance' },
    { label: 'Sitio web en español', href: '/es' },
  ];

  return (
    <footer style={{ background: '#3c4c63' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
            >
              Helping workers between jobs find affordable health coverage since 1999.
              <br />
              HealthLink Insurance Agency LLC — Licensed in 22 States.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://maps.google.com/?q=2501+Chatham+Rd+Suite+R+Springfield+IL+62704"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs transition-opacity hover:opacity-75"
                style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
              >
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                2501 Chatham Rd Suite R, Springfield, IL 62704
              </a>
              <a
                href="tel:8772627241"
                className="flex items-center gap-2 text-xs transition-opacity hover:opacity-75"
                style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                877-262-7241
              </a>
              <a
                href="mailto:support@cobrainsurance.com"
                className="flex items-center gap-2 text-xs transition-opacity hover:opacity-75"
                style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                support@cobrainsurance.com
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-white mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-opacity hover:opacity-75"
                    style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Official Resources */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-white mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Official COBRA &amp; Coverage Resources
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.dol.gov/general/topic/health-plans/cobra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col transition-opacity hover:opacity-75"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="text-sm" style={{ color: '#a0b4c8' }}>U.S. Department of Labor — COBRA</span>
                  <span className="text-xs" style={{ color: '#6b8099' }}>dol.gov/cobra</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.healthcare.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col transition-opacity hover:opacity-75"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="text-sm" style={{ color: '#a0b4c8' }}>Health Insurance Marketplace®</span>
                  <span className="text-xs" style={{ color: '#6b8099' }}>HealthCare.gov</span>
                </a>
              </li>
              <li>
                <a
                  href="https://content.naic.org/state-insurance-departments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col transition-opacity hover:opacity-75"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="text-sm" style={{ color: '#a0b4c8' }}>Find Your State Insurance Department</span>
                  <span className="text-xs" style={{ color: '#6b8099' }}>naic.org</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.medicaid.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col transition-opacity hover:opacity-75"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="text-sm" style={{ color: '#a0b4c8' }}>Medicaid &amp; CHIP</span>
                  <span className="text-xs" style={{ color: '#6b8099' }}>medicaid.gov</span>
                </a>
              </li>
            </ul>
            <p
              className="text-xs mt-5 leading-relaxed"
              style={{ color: '#4e6080', fontFamily: 'var(--font-sans)' }}
            >
              We're an independent agency — these official resources are provided for your reference.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ background: '#2d3a4d', borderColor: '#4e6080' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <p
              className="text-xs"
              style={{ color: '#6b8099', fontFamily: 'var(--font-sans)' }}
            >
              ©2026 HealthLink Insurance Agency LLC ·{' '}
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              {' · '}
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b8099', fontFamily: 'var(--font-sans)' }}
            >
              Licensed Agent · CA License #0D43589
            </p>
          </div>
          <p
            className="text-xs mt-3 leading-relaxed"
            style={{ color: '#4e6080', fontFamily: 'var(--font-sans)' }}
          >
            The information provided on this website is designed to offer general guidance and is
            not a substitute for professional advice in medical, psychological, tax, legal,
            investment, accounting, or governmental matters.
          </p>
        </div>
      </div>
    </footer>
  );
}