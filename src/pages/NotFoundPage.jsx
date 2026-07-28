import { Link } from 'react-router-dom';
import { Helmet } from '@/lib/helmet';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — CobraInsurance.Health</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#3c4c63' }}>
        <div className="max-w-2xl text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1
                className="text-7xl font-bold text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                404
              </h1>
              <h2
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Page Not Found
              </h2>
              <p
                className="text-base"
                style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
              >
                Sorry, the page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#e01f1f', color: '#ffffff', fontFamily: 'var(--font-sans)' }}
              >
                <HomeIcon className="w-4 h-4" />
                Go Home
              </Link>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}