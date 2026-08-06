import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'COBRA Continuation', href: '/kb' },
    { label: 'Alternatives to COBRA', href: '/when-cobra' },
    { label: 'COBRA Calculator', href: '/cobra-calculator' },
    { label: 'Coverage Quiz', href: '/coverage-quiz' },
    { label: 'The COBRA Trap', href: '/cobra-trap' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Get Help', href: '/customer-service' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: '#fbfbfb', borderBottom: '1px solid #eeeeee' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary"
                style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/when-cobra"
              className="ml-2 px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
            >
              Find Affordable Coverage
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" style={{ color: '#3c4c63' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#3c4c63' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ background: '#fbfbfb', borderColor: '#eeeeee' }}>
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold uppercase tracking-wide py-2"
                style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/when-cobra"
              className="px-5 py-3 rounded text-sm font-bold uppercase tracking-wide text-white text-center"
              style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              onClick={() => setMobileOpen(false)}
            >
              Find Affordable Coverage
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}