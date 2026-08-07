import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Do Not Call List', href: '/do-not-call' },
    { label: 'Start COBRA', href: '/start-cobra' },
    { label: 'Manage Your COBRA', href: '/manage-cobra' },
    { label: 'COBRA Account Portal', href: '/cobra-portal' },
    { label: 'State Continuation Laws', href: '/state-laws' },
    { label: 'About Us', href: '/about' },
    { label: 'COBRA Blog', href: '/blog' },
    { label: 'Where to File Unemployment', href: '/unemployment' },
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
              <img
                src="https://media.base44.com/images/public/6a68570ee6720473b2a5fb34/9c8064391_cobra_logo_white_transparent_v2.png"
                alt="CobraInsurance.Health"
                className="h-12 w-auto"
              />
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
            >
              Experts helping workers between jobs find affordable health coverage.
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
                href="tel:8445691234"
                className="flex items-center gap-2 text-xs transition-opacity hover:opacity-75"
                style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                844-569-1234
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p
            className="text-xs leading-relaxed mb-4"
            style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            HealthLink Insurance Agency LLC is an independent, privately owned licensed insurance
            agency. We are not a government agency, and this is not a government website. We are
            not your employer's COBRA plan administrator — COBRA elections, premium payments, and
            cancellations are handled through your employer or its designated plan administrator,
            and we can help you understand that process at no charge.
          </p>
          <p
            className="text-xs leading-relaxed mb-4"
            style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            COBRA continuation coverage is a federal program regulated by the U.S. Department of
            Labor. For official information, visit{' '}
            <a
              href="https://www.dol.gov/general/topic/health-plans/cobra"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              dol.gov/cobra
            </a>
            . For the official Health Insurance Marketplace®, visit{' '}
            <a
              href="https://www.healthcare.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              HealthCare.gov
            </a>
            .
          </p>
          <p
            className="text-xs leading-relaxed mb-6"
            style={{ color: '#a0b4c8', fontFamily: 'var(--font-sans)' }}
          >
            Our services are free to consumers. We are compensated by insurance companies when you
            enroll in a plan through us. This compensation does not affect the premium you pay.
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-3 pt-4 border-t" style={{ borderColor: '#4e6080' }}>
            <p
              className="text-xs leading-relaxed"
              style={{ color: '#6b8099', fontFamily: 'var(--font-sans)' }}
            >
              ©2026 HealthLink Insurance Agency LLC ·{' '}
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              {' · '}
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              {' · '}
              <Link to="/do-not-call" className="hover:text-white transition-colors">Do Not Call Policy</Link>
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: '#6b8099', fontFamily: 'var(--font-sans)' }}
            >
              Licensed insurance agency · IL License #3003596873 · CA License #6019438 · NPN #21554495 ·{' '}
              <Link to="/about" className="underline hover:text-white transition-colors">See all state licenses →</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}