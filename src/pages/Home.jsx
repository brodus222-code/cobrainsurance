import { Helmet } from '@/lib/helmet';
import HeroSection from '@/components/home/HeroSection';
import ExpertsSection from '@/components/home/ExpertsSection';
import BentoGrid from '@/components/home/BentoGrid';
import CTABand from '@/components/home/CTABand';

const site = 'https://cobrainsurance.health';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'CobraInsurance.Health',
      url: `${site}/`,
    },
    {
      '@type': 'InsuranceAgency',
      '@id': `${site}/#organization`,
      name: 'HealthLink Insurance Agency LLC',
      url: `${site}/`,
      telephone: '844-569-1234',
      email: 'support@cobrainsurance.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2501 Chatham Rd Suite R',
        addressLocality: 'Springfield',
        addressRegion: 'IL',
        postalCode: '62704',
        addressCountry: 'US',
      },
      areaServed: 'US',
      description:
        'HealthLink Insurance Agency LLC helps workers between jobs understand COBRA continuation coverage and compare affordable health insurance alternatives. Licensed in 22 states.',
    },
    {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      name: 'CobraInsurance.Health — COBRA Insurance & Affordable Alternatives',
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      datePublished: '2026-06-20',
      dateModified: '2026-06-20',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>COBRA Insurance Help & Affordable Alternatives — CobraInsurance.Health</title>
        <meta
          name="description"
          content="Lost your job-based health coverage? Understand your COBRA continuation rights, compare ACA marketplace alternatives, and get free guidance from licensed advisors. HealthLink Insurance Agency LLC — licensed in 22 states."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="COBRA Insurance Help & Affordable Alternatives — CobraInsurance.Health" />
        <meta
          property="og:description"
          content="Lost your job-based health coverage? Understand your COBRA continuation rights, compare ACA marketplace alternatives, and get free guidance from licensed advisors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COBRA Insurance Help & Affordable Alternatives — CobraInsurance.Health" />
        <meta name="twitter:description" content="Lost your job-based health coverage? Understand your COBRA continuation rights, compare ACA marketplace alternatives, and get free guidance from licensed advisors." />
        <meta name="twitter:image" content={`${site}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        <h1 className="sr-only">Your Right To Continue Coverage (COBRA) — CobraInsurance.Health</h1>
        <HeroSection />
        <ExpertsSection />
        <BentoGrid />
        <CTABand />
      </main>
    </>
  );
}