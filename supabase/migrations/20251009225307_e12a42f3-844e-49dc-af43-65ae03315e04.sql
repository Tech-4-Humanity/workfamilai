-- Create enum for quote request status
CREATE TYPE quote_request_status AS ENUM ('new', 'in_review', 'quoted', 'won', 'lost', 'cancelled');

-- Create work_package_quote_requests table
CREATE TABLE public.work_package_quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  work_package_id TEXT NOT NULL,
  work_package_name TEXT NOT NULL,
  
  -- Contact Info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT NOT NULL,
  
  -- Organization Profile
  company_size TEXT,
  industry TEXT,
  primary_location TEXT,
  has_multiple_locations BOOLEAN DEFAULT false,
  org_maturity_level TEXT,
  
  -- Work Package Context
  pricing_tier_interest TEXT,
  preferred_timeline TEXT,
  budget_range TEXT,
  
  -- Situation Assessment
  challenge_description TEXT,
  current_state_description TEXT,
  success_criteria TEXT,
  compliance_requirements TEXT,
  
  -- Technical Context
  existing_systems TEXT[],
  cloud_environment TEXT,
  data_classification TEXT,
  integration_requirements TEXT,
  auth_method TEXT,
  
  -- Team & Stakeholders
  number_of_users INTEGER,
  departments_involved TEXT[],
  decision_makers TEXT,
  internal_champion TEXT,
  implementation_team_size INTEGER,
  
  -- Success Metrics
  primary_kpis TEXT[],
  expected_roi_timeline TEXT,
  known_constraints TEXT,
  previous_experience BOOLEAN,
  previous_experience_details TEXT,
  
  -- Additional
  referral_source TEXT,
  preferred_contact_method TEXT,
  best_time_to_contact TEXT,
  additional_info TEXT,
  
  -- System fields
  status quote_request_status DEFAULT 'new',
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  admin_notes TEXT,
  estimated_quote_value NUMERIC,
  quoted_at TIMESTAMPTZ,
  follow_up_date TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE public.work_package_quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit quote requests
CREATE POLICY "Anyone can submit quote requests"
  ON public.work_package_quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only admins can view all quote requests
CREATE POLICY "Admins can view all quote requests"
  ON public.work_package_quote_requests FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update quote requests
CREATE POLICY "Admins can update quote requests"
  ON public.work_package_quote_requests FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Create indexes
CREATE INDEX idx_quote_requests_work_package ON public.work_package_quote_requests(work_package_id);
CREATE INDEX idx_quote_requests_status ON public.work_package_quote_requests(status);
CREATE INDEX idx_quote_requests_created ON public.work_package_quote_requests(created_at DESC);
CREATE INDEX idx_quote_requests_email ON public.work_package_quote_requests(email);

-- Create trigger for updated_at
CREATE TRIGGER update_work_package_quote_requests_timestamp
  BEFORE UPDATE ON public.work_package_quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_timestamp();