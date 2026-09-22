import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function AdminLeadsGate() {
  const { user } = useAuth();
  if (user?.role !== 'admin') return (
    <main className="max-w-xl mx-auto px-6 py-16 text-center">
      <h1 className="text-2xl font-heading mb-4">Administrator access required</h1>
      <p className="text-muted-foreground mb-6">Lead details are private and only available to administrators.</p>
      <Link className="underline text-primary" to="/">Return to the website</Link>
    </main>
  );
  return <Outlet />;
}