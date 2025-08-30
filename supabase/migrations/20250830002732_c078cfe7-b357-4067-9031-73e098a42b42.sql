
-- Ensure RLS is enabled (it is already, but this is idempotent)
ALTER TABLE public.family_agents ENABLE ROW LEVEL SECURITY;

-- Admin-only INSERT policy
CREATE POLICY "Admins can insert family agents"
  ON public.family_agents
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role('admin'));

-- Admin-only UPDATE policy
CREATE POLICY "Admins can update family agents"
  ON public.family_agents
  FOR UPDATE
  TO authenticated
  USING (public.has_role('admin'))
  WITH CHECK (public.has_role('admin'));

-- Admin-only DELETE policy
CREATE POLICY "Admins can delete family agents"
  ON public.family_agents
  FOR DELETE
  TO authenticated
  USING (public.has_role('admin'));

-- Insert a single demo row so you can see data immediately
INSERT INTO public.family_agents (
  agent_code,
  persona,
  "function",
  domain,
  sfia_level,
  division_name,
  family_member_id,
  core_skills,
  summary_bio
) VALUES (
  'DEMO-001',
  'Operations Orchestrator',
  'Operations',
  'Innovation & R&D',
  '3',
  'Innovation Labs',
  'davidOkafor',
  'Process optimization, Automation',
  'Demo agent row to verify visibility in public.family_agents'
);
