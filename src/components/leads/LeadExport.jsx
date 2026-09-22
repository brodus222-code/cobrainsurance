import { useMutation } from '@tanstack/react-query';
import { Download } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { leadExportFields, leadStatuses } from '@/components/leads/leadFields';

function csvCell(value) {
  let text = String(value ?? '');
  if (/^[\s]*[=+@-]/.test(text) || /^[\t\r\n]/.test(text)) text = "'" + text;
  return '"' + text.replace(/"/g, '""') + '"';
}
export default function LeadExport({ status }) {
  const download = useMutation({
    mutationFn: async () => {
      const lines = [leadExportFields.map(([, label]) => csvCell(label)).join(',')];
      for (let offset = 0; ; offset += 100) {
        const batch = await base44.entities.Lead.filter(status ? { status } : {}, '-created_date', 100, offset);
        for (const lead of batch) lines.push(leadExportFields.map(([key]) => csvCell(key === 'status' ? leadStatuses[lead.status] : lead[key])).join(','));
        if (batch.length < 100) break;
      }
      const url = URL.createObjectURL(new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8;' }));
      const a = document.createElement('a'); a.href = url;
      a.download = `leads-${status || 'all'}-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },
  });
  return <div>
    <button onClick={() => download.mutate()} disabled={download.isPending} className="inline-flex items-center gap-2 rounded-lg bg-card text-card-foreground px-4 py-3 disabled:opacity-50">
      <Download className="w-4 h-4" />{download.isPending ? 'Exporting…' : 'Export CSV'}
    </button>
    {download.isError && <p role="alert" className="text-destructive mt-2 text-sm">Export failed. Please try again.</p>}
  </div>;
}