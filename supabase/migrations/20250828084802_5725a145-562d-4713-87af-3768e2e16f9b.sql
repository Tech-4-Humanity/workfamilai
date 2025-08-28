-- Create contact_submissions table with proper structure
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  inquiry_type TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_contact_submissions_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_contact_submissions_timestamp();

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for service role only (no public access)
CREATE POLICY "Service role can manage contact submissions"
  ON public.contact_submissions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Add helpful indexes for admin use
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON public.contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON public.contact_submissions(email);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON public.contact_submissions(status);