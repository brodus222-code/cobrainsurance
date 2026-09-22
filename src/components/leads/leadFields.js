export const leadStatuses = { new: 'New', contacted: 'Contacted', follow_up: 'Follow-up', closed: 'Closed' };
export const leadFields = [
  ['firstName', 'First name'], ['lastName', 'Last name'], ['email', 'Email'], ['phone', 'Phone'],
  ['source', 'Source'], ['productLabel', 'Coverage interest'], ['state', 'State'], ['zipCode', 'ZIP code'],
  ['applicantAge', 'Age'], ['householdSize', 'Household size'], ['incomeLabel', 'Income range'],
  ['timeLabel', 'Best time to call'], ['scheduledDate', 'Appointment date'], ['scheduledTime', 'Appointment time'],
  ['notes', 'Submitted notes'], ['created_date', 'Received'],
];
export const leadExportFields = [...leadFields, ['status', 'Status'], ['followUpDate', 'Follow-up date'], ['followUpNotes', 'Follow-up notes']];