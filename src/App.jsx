import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import KbPage from '@/pages/KbPage';
import WhenCobraPage from '@/pages/WhenCobraPage';
import CustomerServicePage from '@/pages/CustomerServicePage';
import StartCobraPage from '@/pages/StartCobraPage';
import ManageCobraPage from '@/pages/ManageCobraPage';
import AboutUsPage from '@/pages/AboutUsPage';
import StopInsurancePhoneCallsPage from '@/pages/StopInsurancePhoneCallsPage';
import UnemploymentInsurancePage from '@/pages/UnemploymentInsurancePage';
import UsaStateCobraRulesPage from '@/pages/UsaStateCobraRulesPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import QuotePage from '@/pages/QuotePage';
import CobraCalculatorPage from '@/pages/CobraCalculatorPage';
import CoverageQuizPage from '@/pages/CoverageQuizPage';
import CobraTrapPage from '@/pages/CobraTrapPage';
import NotFoundPage from '@/pages/NotFoundPage';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kb" element={<KbPage />} />
        <Route path="/when-cobra" element={<WhenCobraPage />} />
        <Route path="/customer-service" element={<CustomerServicePage />} />
        <Route path="/start-cobra" element={<StartCobraPage />} />
        <Route path="/manage-cobra" element={<ManageCobraPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/kb/stop-insurance-phone-calls" element={<StopInsurancePhoneCallsPage />} />
        <Route path="/unemployment-insurance" element={<UnemploymentInsurancePage />} />
        <Route path="/usa-state-cobra-rules" element={<UsaStateCobraRulesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/cobra-calculator" element={<CobraCalculatorPage />} />
        <Route path="/coverage-quiz" element={<CoverageQuizPage />} />
        <Route path="/cobra-trap" element={<CobraTrapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App