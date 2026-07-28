// State mini-COBRA / continuation rules for the 24 states covered by CobraInsurance.Health.
// Federal COBRA applies to employers with 20+ employees.
// "Mini-COBRA" / state continuation laws cover smaller employers (typically 2–19 employees).

export const stateRules = [
  {
    state: 'Arizona', abbr: 'AZ', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'State continuation applies to fully insured group plans with 2–19 employees',
      'Qualifying events mirror federal COBRA: job loss, reduced hours, divorce, death, dependent aging off',
      'Premium cannot exceed 102% of the group rate',
      'Election notice must be provided within 30 days of qualifying event',
    ],
    note: null,
  },
  {
    state: 'California', abbr: 'CA', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 36 months',
    keyRules: [
      'Cal-COBRA covers employers with 2–19 employees under fully insured group plans',
      'Cal-COBRA can extend federal COBRA — if you exhaust 18 months of federal COBRA, you may convert to Cal-COBRA for up to 36 months total',
      'Premiums may be up to 110% of the group rate (vs. 102% under federal COBRA)',
      'Applies to HMO and PPO plans issued in California',
    ],
    note: 'California offers one of the most generous state continuation programs. The 36-month maximum and federal-to-state bridge make it especially valuable.',
  },
  {
    state: 'Colorado', abbr: 'CO', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Colorado continuation applies to fully insured plans with 2–19 employees',
      'Covers job loss, reduced hours, divorce, legal separation, death, and dependent aging off',
      'Premium capped at 102% of the group rate',
      'Insurer must notify employer within 10 days of learning of a qualifying event',
    ],
    note: null,
  },
  {
    state: 'Connecticut', abbr: 'CT', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 30 months',
    keyRules: [
      'Connecticut continuation covers employers with 2–19 employees',
      '30-month maximum is longer than the federal 18-month standard',
      'Covers medical, dental, and vision if included in the group plan',
      'Premium cannot exceed 102% of the applicable group rate',
    ],
    note: "Connecticut's 30-month duration exceeds federal COBRA for job-loss events.",
  },
  {
    state: 'Florida', abbr: 'FL', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Florida continuation applies to fully insured group health plans with 2–19 employees',
      'Qualifying events include termination, reduced hours, divorce, and dependent aging off',
      'Premium capped at 115% of the group rate — higher than the federal 102% cap',
      'Employer must notify insurer within 30 days of a qualifying event',
    ],
    note: "Florida's 115% premium cap is higher than most states. Compare ACA options carefully.",
  },
  {
    state: 'Georgia', abbr: 'GA', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 3 months (limited)',
    keyRules: [
      "Georgia's state continuation law is limited — it provides only 3 months of continuation",
      'Applies to fully insured group plans with 2–19 employees',
      'Intended as a bridge while the employee seeks other coverage',
      'Premium capped at 100% of the group rate (no admin surcharge)',
    ],
    note: "Georgia's 3-month limit is among the shortest in the country. ACA marketplace plans are often a better option for Georgia residents at small employers.",
  },
  {
    state: 'Illinois', abbr: 'IL', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Illinois continuation covers fully insured group plans with 2–19 employees',
      'Qualifying events mirror federal COBRA standards',
      'Premium capped at 102% of the group rate',
      'Insurer must provide notice of continuation rights within 10 days of learning of the event',
    ],
    note: null,
  },
  {
    state: 'Indiana', abbr: 'IN', miniCobra: false, smallEmployerThreshold: null,
    duration: 'Federal COBRA only (20+ employees)',
    keyRules: [
      'Indiana does not have a state mini-COBRA law',
      'Employees at employers with fewer than 20 employees are not entitled to continuation coverage under state law',
      'Federal COBRA applies to employers with 20 or more employees',
      'ACA marketplace Special Enrollment Period is available upon job loss regardless of employer size',
    ],
    note: 'Indiana residents at small employers should prioritize ACA marketplace enrollment within 60 days of losing coverage.',
  },
  {
    state: 'Iowa', abbr: 'IA', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 9 months',
    keyRules: [
      'Iowa continuation covers fully insured group plans with 2–19 employees',
      '9-month maximum is shorter than federal COBRA',
      'Covers the employee and enrolled dependents',
      'Premium capped at 100% of the group rate',
    ],
    note: "Iowa's 9-month limit means ACA marketplace enrollment should be planned well before continuation expires.",
  },
  {
    state: 'Kansas', abbr: 'KS', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Kansas continuation applies to fully insured group plans with 2–19 employees',
      'Qualifying events include termination, reduced hours, divorce, death, and dependent aging off',
      'Premium capped at 102% of the group rate',
      'Employee must elect within 31 days of receiving notice',
    ],
    note: null,
  },
  {
    state: 'Kentucky', abbr: 'KY', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Kentucky continuation covers fully insured group plans with 2–19 employees',
      'Mirrors federal COBRA qualifying events',
      'Premium capped at 102% of the group rate',
      'Insurer must notify the covered person of continuation rights',
    ],
    note: null,
  },
  {
    state: 'Maryland', abbr: 'MD', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Maryland continuation applies to fully insured group plans with 2–19 employees',
      'Covers medical, dental, and vision if part of the group plan',
      'Premium capped at 102% of the group rate',
      'Employer must notify the insurer within 30 days of a qualifying event',
    ],
    note: null,
  },
  {
    state: 'Michigan', abbr: 'MI', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Michigan continuation covers fully insured group plans with 2–19 employees',
      'Qualifying events mirror federal COBRA standards',
      'Premium capped at 102% of the group rate',
      'Notice must be provided to the covered person within a reasonable time',
    ],
    note: null,
  },
  {
    state: 'Minnesota', abbr: 'MN', miniCobra: true, smallEmployerThreshold: '2+ employees (all sizes)',
    duration: 'Up to 18 months',
    keyRules: [
      "Minnesota's continuation law applies to ALL employer sizes — including those already covered by federal COBRA",
      'Provides a broader safety net than most states',
      'Premium capped at 102% of the group rate',
      'Covers medical, dental, and vision if included in the group plan',
    ],
    note: 'Minnesota is one of the few states where continuation rights apply regardless of employer size.',
  },
  {
    state: 'Missouri', abbr: 'MO', miniCobra: false, smallEmployerThreshold: null,
    duration: 'Federal COBRA only (20+ employees)',
    keyRules: [
      'Missouri does not have a state mini-COBRA law',
      'Employees at employers with fewer than 20 employees have no state continuation rights',
      'Federal COBRA applies to employers with 20 or more employees',
      'ACA marketplace Special Enrollment Period is available upon job loss',
    ],
    note: 'Missouri residents at small employers should enroll in an ACA marketplace plan within 60 days of losing coverage.',
  },
  {
    state: 'New Jersey', abbr: 'NJ', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'New Jersey continuation covers fully insured group plans with 2–19 employees',
      'NJ also has a state individual mandate — residents must maintain coverage year-round',
      'Premium capped at 102% of the group rate',
      'Qualifying events mirror federal COBRA standards',
    ],
    note: 'New Jersey has its own individual health insurance mandate. Gaps in coverage may result in a state tax penalty.',
  },
  {
    state: 'New York', abbr: 'NY', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 36 months',
    keyRules: [
      'New York continuation (NY Continuation) covers employers with 2–19 employees',
      '36-month maximum — one of the longest in the country',
      'Premium capped at 102% of the group rate',
      'Covers medical, dental, and vision if part of the group plan',
      'NY also has a state individual mandate',
    ],
    note: "New York's 36-month continuation is among the most generous in the nation. NY also has its own individual mandate — coverage gaps may trigger a state penalty.",
  },
  {
    state: 'North Carolina', abbr: 'NC', miniCobra: false, smallEmployerThreshold: null,
    duration: 'Federal COBRA only (20+ employees)',
    keyRules: [
      'North Carolina does not have a state mini-COBRA law',
      'Employees at employers with fewer than 20 employees have no state continuation rights',
      'Federal COBRA applies to employers with 20 or more employees',
      'ACA marketplace Special Enrollment Period is available upon job loss',
    ],
    note: 'North Carolina residents at small employers should prioritize ACA marketplace enrollment within 60 days of losing coverage.',
  },
  {
    state: 'Ohio', abbr: 'OH', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Ohio continuation covers fully insured group plans with 2–19 employees',
      'Qualifying events mirror federal COBRA standards',
      'Premium capped at 102% of the group rate',
      'Insurer must notify the covered person of continuation rights within a reasonable time',
    ],
    note: null,
  },
  {
    state: 'Pennsylvania', abbr: 'PA', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 9 months',
    keyRules: [
      'Pennsylvania continuation covers fully insured group plans with 2–19 employees',
      '9-month maximum — shorter than federal COBRA',
      'Premium capped at 105% of the group rate',
      'Covers the employee and enrolled dependents',
    ],
    note: "Pennsylvania's 9-month limit and 105% premium cap mean ACA marketplace plans are often a better long-term option.",
  },
  {
    state: 'Tennessee', abbr: 'TN', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 18 months',
    keyRules: [
      'Tennessee continuation covers fully insured group plans with 2–19 employees',
      'Qualifying events include termination, reduced hours, divorce, death, and dependent aging off',
      'Premium capped at 102% of the group rate',
      'Employer must notify the insurer within 30 days of a qualifying event',
    ],
    note: null,
  },
  {
    state: 'Texas', abbr: 'TX', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 9 months',
    keyRules: [
      'Texas continuation covers fully insured group plans with 2–19 employees',
      "9-month maximum — shorter than federal COBRA's 18 months",
      'Premium capped at 102% of the group rate',
      'Insurer must notify the covered person of continuation rights',
    ],
    note: "Texas's 9-month limit is shorter than federal COBRA. Residents at small employers should plan ACA marketplace enrollment early.",
  },
  {
    state: 'Virginia', abbr: 'VA', miniCobra: true, smallEmployerThreshold: '2–19 employees',
    duration: 'Up to 12 months',
    keyRules: [
      'Virginia continuation covers fully insured group plans with 2–19 employees',
      '12-month maximum — between the federal 18-month standard and shorter state laws',
      'Premium capped at 102% of the group rate',
      'Qualifying events mirror federal COBRA standards',
    ],
    note: null,
  },
  {
    state: 'Wisconsin', abbr: 'WI', miniCobra: true, smallEmployerThreshold: '2+ employees (all sizes)',
    duration: 'Up to 18 months',
    keyRules: [
      'Wisconsin continuation applies to ALL employer sizes — including those already covered by federal COBRA',
      'Covers medical, dental, and vision if included in the group plan',
      'Premium capped at 102% of the group rate',
      'Qualifying events mirror federal COBRA standards',
    ],
    note: 'Wisconsin is one of the few states where continuation rights apply regardless of employer size, providing a broader safety net.',
  },
];