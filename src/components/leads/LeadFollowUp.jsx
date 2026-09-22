import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { leadStatuses } from '@/components/leads/leadFields';

export default function LeadFollowUp({ lead }) {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ status: lead.status, followUpDate: lead.followUpDate || '', followUpNotes: lead.followUpNotes || '' });
  const save = useMutation({
    mutationFn: () => base44.entities.Lead.update(lead.id, form),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-leads'] }),
  });
  function change(e) { save.reset(); setForm({ ...form, [e.target.name]: e.target.value }); }
  const control = 'mt-2 w-full rounded-lg border border-input bg-background px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
  return (
    <form onSubmit={(e) => { e.preventDefault(); save.mutate(); }} className="border-t pt-5 space-y-4">
      <h3 className="font-heading font-semibold">Follow-up tracking</h3>
      <fieldset disabled={save.isPending} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor={`status-${lead.id}`} className="text-sm font-semibold">Status
            <select id={`status-${lead.id}`} name="status" value={form.status} onChange={change} className={control}>
              {Object.entries(leadStatuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <label htmlFor={`date-${lead.id}`} className="text-sm font-semibold">Next follow-up
            <input id={`date-${lead.id}`} name="followUpDate" type="date" value={form.followUpDate} onChange={change} className={control} />
          </label>
        </div>
        <label htmlFor={`notes-${lead.id}`} className="block text-sm font-semibold">Private follow-up notes
          <textarea id={`notes-${lead.id}`} name="followUpNotes" rows={4} maxLength={10000} value={form.followUpNotes} onChange={change} className={control} />
        </label>
        <button type="submit" className="rounded-lg bg-primary text-primary-foreground px-5 py-3 font-semibold disabled:opacity-50">{save.isPending ? 'Saving…' : 'Save follow-up'}</button>
      </fieldset>
      {save.isError && <p role="alert" className="text-destructive">Could not save your changes. Please try again.</p>}
      {save.isSuccess && <p role="status" className="text-muted-foreground">Follow-up saved.</p>}
    </form>
  );
}