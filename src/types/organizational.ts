
export interface OrganizationalInvolvement {
  persona: string;
  division: string;
  capability: string;
  seniority: string;
  // Activity involvement levels (0-1 scale)
  cv_ideation: number;
  cv_execution: number;
  cv_management: number;
  rft_ideation: number;
  rft_execution: number;
  rft_management: number;
  sales_ideation: number;
  sales_execution: number;
  sales_management: number;
  survey_design: number;
  survey_analysis: number;
  cloud_migration: number;
  crm_training: number;
  gov_contract: number;
  supply_chain: number;
  // Process phases
  cv_onboarding: number;
  cv_finance: number;
  cv_compliance: number;
  cv_improvement: number;
  cv_closure: number;
  rft_onboarding: number;
  rft_finance: number;
  rft_compliance: number;
  rft_improvement: number;
  rft_closure: number;
  sales_onboarding: number;
  sales_finance: number;
  sales_compliance: number;
  sales_improvement: number;
  sales_closure: number;
  // Committee involvement
  ctte_hr_steering: number;
  ctte_procurement_governance: number;
  ctte_deal_approval: number;
  ctte_finance_ops: number;
  ctte_legal_compliance: number;
  // Resource metrics
  estimated_hours: number;
  fte_percent: number;
  hourly_rate: number;
  cost: number;
  skills_required: string;
  tools_used: string;
  risk_level: 'Low' | 'Medium' | 'High';
  compliance_flag: string;
  predecessor_task: string;
  sla_target: string;
  actual_performance: string;
  meeting_frequency: string;
  chairperson: string;
  last_review_date: string;
  next_review_date: string;
  capability_tags: string;
  use_case_category: string;
  fte_availability: number;
}

export interface VoiceQuery {
  query: string;
  timestamp: Date;
  response: string;
  data_points: number;
}

export interface QueryResult {
  agents: OrganizationalInvolvement[];
  totalCost: number;
  riskLevel: string;
  insights: string[];
}
