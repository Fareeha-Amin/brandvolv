export interface CaseStudy {
  id: string;
  clientName: string;
  industry: 'Real Estate' | 'B2B & Services' | 'Coaching & Education' | 'E-Commerce' | 'Healthcare';
  region: string;
  adSpend: string;
  resultsHeadline: string;
  primaryMetric: string;
  metricLabel: string;
  secondaryMetric?: string;
  secondaryLabel?: string;
  platform: string;
  campaignPeriod: string;
  businessType: string;
  overview: string;
  keyChanges: string[];
  featured?: boolean;
}

export interface SystemStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProblemPoint {
  number: string;
  title: string;
  description: string;
  agencySolution: string;
}

export interface ProcessPhase {
  phase: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  billingPeriod: string;
  price: string;
  originalPrice?: string;
  monthlyEquivalent?: string;
  savings?: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
}
