import { Helmet } from '@/lib/helmet';
import { Outlet } from 'react-router-dom';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

export default function RootLayout() {
  return (
    <Website>
      <Helmet>
        <title>CobraInsurance.Health — COBRA Insurance & Affordable Alternatives</title>
        <meta name="description" content="Understand your COBRA continuation rights and compare affordable health insurance alternatives. HealthLink Insurance Agency LLC — licensed in 22 states." />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </Website>
  );
}