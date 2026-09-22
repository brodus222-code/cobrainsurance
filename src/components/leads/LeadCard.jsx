import { leadFields, leadStatuses } from '@/components/leads/leadFields';
import LeadFollowUp from '@/components/leads/LeadFollowUp';

export default function LeadCard({ lead }) {
  const received = new Date(lead.created_date).toLocaleString();
  const overdue = lead.followUpDate && lead.followUpDate < new Date().toLocaleDateString('en-CA') && lead.status !== 'closed';
  return (
    <details className="rounded-xl border bg-muted text-foreground p-5">
      <summary className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
        <span className="font-heading font-semibold">{lead.firstName} {lead.lastName}</span>
        <span className="ml-3 inline-block rounded-full bg-card text-card-foreground text-xs px-3 py-1">{leadStatuses[lead.status] || lead.status}</span>
        <span className="block mt-2 text-sm text-muted-foreground">{lead.productLabel || 'Coverage inquiry'} · {received}</span>
        {lead.followUpDate && <span className="block mt-2 text-sm font-semibold">{overdue ? 'Overdue follow-up' : 'Follow-up'}: {lead.followUpDate}</span>}
        <span className="block mt-2 text-sm underline">View details and follow-up</span>
      </summary>
      <div className="mt-5 space-y-6">
        <div className="flex flex-wrap gap-4 break-all">
          <a className="underline text-primary py-2" href={`mailto:${lead.email}`}>{lead.email}</a>
          <a className="underline text-primary py-2" href={`tel:${lead.phone.replace(/[^+\d]/g, '')}`}>{lead.phone}</a>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
          {leadFields.map(([key, label]) => <div key={key} className={key === 'notes' ? 'sm:col-span-2' : ''}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</dt>
            <dd className="mt-1 whitespace-pre-wrap break-words">{key === 'created_date' ? received : lead[key] || 'Not provided'}</dd>
          </div>)}
        </dl>
        <LeadFollowUp lead={lead} />
      </div>
    </details>
  );
}