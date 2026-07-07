export interface CampaignMetric {
  name: string;
  spend: number;
  reach?: number;
  impressions?: number;
  conversions?: number;
  clicks?: number;
  cpr?: number;
  cpc?: number;
  cpm?: number;
  ctr?: number;
  insight?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  logoText: string;
  spend: string;
  reach?: string;
  impressions?: string;
  conversions?: string;
  avgCpr?: string;
  avgCpc?: string;
  avgCtr?: string;
  industry: string;
  description: string;
  summary: string;
  campaigns: CampaignMetric[];
  learnings: string[];
}

export interface WebProject {
  id: string;
  name: string;
  type: 'Shopify' | 'WordPress';
  description: string;
  tag: string;
  metric: string;
  features: string[];
  url?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  metric: string;
  metricLabel: string;
  methodology: string[];
  features: string[];
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  logoId: string;
  rating: number;
}
