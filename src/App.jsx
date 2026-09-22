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
import CobraPortalPage from '@/pages/CobraPortalPage';
import SchedulePage from '@/pages/SchedulePage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import CobraEligibilityPage from '@/pages/CobraEligibilityPage';
import CobraVsAcaPage from '@/pages/CobraVsAcaPage';
import CobraCostsPage from '@/pages/CobraCostsPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLeadsGate from '@/components/leads/AdminLeadsGate';
import LeadsPage from '@/pages/LeadsPage';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login?returnTo=%2Fadmin%2Fleads" replace />} />}>
        <Route element={<AdminLeadsGate />}>
          <Route path="/admin/leads" element={<LeadsPage />} />
        </Route>
      </Route>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge-base" element={<KbPage />} />
        <Route path="/alternatives" element={<WhenCobraPage />} />
        <Route path="/get-help" element={<CustomerServicePage />} />
        <Route path="/start-cobra" element={<StartCobraPage />} />
        <Route path="/manage-cobra" element={<ManageCobraPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/do-not-call" element={<StopInsurancePhoneCallsPage />} />
        <Route path="/unemployment" element={<UnemploymentInsurancePage />} />
        <Route path="/state-laws" element={<UsaStateCobraRulesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/check-options" element={<QuotePage />} />
        <Route path="/calculator" element={<CobraCalculatorPage />} />
        <Route path="/quiz" element={<CoverageQuizPage />} />
        <Route path="/the-cobra-trap" element={<CobraTrapPage />} />
        <Route path="/cobra-portal" element={<CobraPortalPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/cobra-eligibility" element={<CobraEligibilityPage />} />
        <Route path="/cobra-vs-aca" element={<CobraVsAcaPage />} />
        <Route path="/cobra-costs" element={<CobraCostsPage />} />
        <Route path="/contact" element={<ContactPage />} />
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