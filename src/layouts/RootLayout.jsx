import { Outlet } from 'react-router-dom';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
import ExitIntentModal from '@/components/ExitIntentModal';
import AdvisorBubble from '@/components/AdvisorBubble';

export default function RootLayout() {
  return (
    <Website>
      <Header />
      <Outlet />
      <Footer />
      <ExitIntentModal />
      <AdvisorBubble />
    </Website>
  );
}