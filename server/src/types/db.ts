export type EmailSummary = {
  company: string;
  date: string;
  employeeID: string;
  department: string;
  sent: number;
  received: number;
  internalSent: number;
  externalSent: number;
  avgResponseTime: number;
  afterHoursSent: number;
  avgRecipients: number;
  avgThreadLength: number;
};

export type SlackSummary = {
  date: string;
  employeeID: string;
  department: string;
  sent: number;
  received: number;
  avgResponseTime: number;
  avgAfterHours: number;

  tone?: string;
  toxic?: number;
  friendly?: number;
  supportive?: number;
  funny?: number;
  inspiring?: number;
  bossy?: number;
};

export type Company = {
  name: string;
  slug: string;
  salaryRange: [number, number];
  description: string;
};
