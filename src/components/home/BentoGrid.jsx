import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, Settings, Star, Phone } from 'lucide-react';

const cards = [
  {
    title: 'COBRA Continuation',
    description: 'FAQs, eligibility requirements, premium costs, and coverage timelines explained.',
    href: '/kb',
    icon: BookOpen,
    featured: false,
    span: 'col-span-1',
  },
  {
    title: 'Get Started with COBRA',
    description: 'Apply for COBRA, calculate your premium, and set up your account.',
    href: '/start-cobra',
    icon: PlayCircle,
    featured: false,
    span: 'col-span-1',
  },
  {
    title: 'Alternatives to COBRA ⭐',
    description:
      'Compare short-term health plans, ACA marketplace coverage, accident-only, hospital indemnity, and Teladoc virtual care — often at a fraction of COBRA cost.',
    href: '/when-cobra',
    icon: Star,
    featured: true,
    span: 'col-span-1 lg:col-span-2',
  },
  {
    title: 'Manage Your COBRA Plan',
    description: 'Log in, pay your premium, cancel coverage, or update your personal information.',
    href: '/manage-cobra',
    icon: Settings,
    featured: false,
    span: 'col-span-1',
  },
  {
    title: 'Get Help ☎️',
    description: 'Customer service, verify your coverage status, and employer administration guide.',
    href: '/customer-service',
    icon: Phone,
    featured: false,
    span: 'col-span-1',
  },
];

export default function BentoGrid() {
  return (
    <section className="w-full py-16 lg:py-20" style={{ background: '#efefef' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-bold text-center mb-3"
          style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
        >
          Compare Insurance Options
        </h2>
        <p
          className="text-center text-sm mb-10"
          style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
        >
          Everything you need to understand COBRA and find the right coverage for your situation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                to={card.href}
                className={`group relative rounded-2xl p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-xl ${card.span}`}
                style={{
                  background: card.featured ? '#e01f1f' : '#3c4c63',
                  minHeight: card.featured ? '200px' : '180px',
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3
                      className="text-lg font-bold text-white leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: card.featured ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.75)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
                <div className="mt-4">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-opacity group-hover:opacity-75"
                    style={{ color: card.featured ? '#fff' : '#a0b4c8', fontFamily: 'var(--font-sans)' }}
                  >
                    Learn More →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}