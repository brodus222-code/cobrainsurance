import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Helmet } from '@/lib/helmet';
import LeadCard from '@/components/leads/LeadCard';
import LeadExport from '@/components/leads/LeadExport';
import { leadStatuses } from '@/components/leads/leadFields';

export default function LeadsPage() {
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(0);
  const cache = useQueryClient();
  const { data: leads = [], isPending, isError, refetch, isFetching } = useQuery({
    queryKey: ['admin-leads', status, page],
    queryFn: () => base44.entities.Lead.filter(status ? { status } : {}, '-created_date', 25, page * 25),
  });
  useEffect(() => base44.entities.Lead.subscribe(() => cache.invalidateQueries({ queryKey: ['admin-leads'] })), [cache]);
  return <main className="min-h-screen bg-background text-foreground px-4 py-8 sm:px-8">
    <Helmet><title>Leads — CobraInsurance.Health</title><meta name="robots" content="noindex,nofollow" /></Helmet>
    <div className="max-w-4xl mx-auto space-y-6">
      <nav className="flex justify-between gap-4 text-sm"><Link to="/" className="underline py-3">Back to website</Link><button className="underline py-3" onClick={() => base44.auth.logout('/')}>Sign out</button></nav>
      <header><p className="text-xs uppercase tracking-widest text-muted-foreground">Administrator workspace</p><h1 className="font-heading text-3xl font-bold mt-2">Leads</h1><p className="text-muted-foreground mt-3">New quote requests and scheduled calls, saved in one private place.</p></header>
      <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl border bg-muted p-4">
        <label htmlFor="lead-filter" className="text-sm font-semibold">Status
          <select id="lead-filter" value={status} onChange={(e) => { setStatus(e.target.value); setPage(0); }} className="block mt-2 rounded-lg border bg-background px-3 py-3 focus-visible:ring-2 focus-visible:ring-ring">
            <option value="">All statuses</option>{Object.entries(leadStatuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <button disabled={isFetching} onClick={() => refetch()} className="underline py-3 disabled:opacity-50">{isFetching ? 'Refreshing…' : 'Refresh'}</button>
        <LeadExport status={status} />
      </div>
      {isPending ? <p role="status" className="py-12 text-center">Loading leads…</p> : isError ? <p role="alert">Unable to load leads. Please use Refresh to try again.</p> : leads.length === 0 ? <div className="rounded-xl border bg-muted p-8 text-center"><h2 className="text-xl font-heading">No leads {status || page ? 'on this page' : 'yet'}</h2><p className="text-muted-foreground mt-3">New quote and scheduling submissions will appear here. Previous email-only submissions are not included.</p></div> : <div className="space-y-4">{leads.map((lead) => <LeadCard key={lead.id} lead={lead} />)}</div>}
      <div className="flex items-center justify-between gap-3 text-sm">
        <button disabled={page === 0 || isFetching} onClick={() => setPage(page - 1)} className="rounded-lg border px-4 py-3 disabled:opacity-40">Previous</button>
        <span>Page {page + 1}</span>
        <button disabled={leads.length < 25 || isFetching || isError} onClick={() => setPage(page + 1)} className="rounded-lg border px-4 py-3 disabled:opacity-40">Next</button>
      </div>
      <p className="text-xs text-muted-foreground">CSV exports include all leads matching the selected status, not just this page.</p>
    </div>
  </main>;
}