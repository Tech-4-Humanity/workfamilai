-- Add missing column used by submit-contact-form edge function
ALTER TABLE public.contact_submissions
ADD COLUMN IF NOT EXISTS ip_address text;