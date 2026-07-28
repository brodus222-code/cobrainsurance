import { Outlet } from 'react-router-dom';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

export default function RootLayout() {
  return (
    <Website>
      <Header />
      <Outlet />
      <Footer />
    </Website>
  );
}