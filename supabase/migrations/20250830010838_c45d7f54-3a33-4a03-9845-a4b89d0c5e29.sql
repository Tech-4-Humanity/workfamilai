
-- Make sure RLS is on (idempotent)
ALTER TABLE public.family_agents ENABLE ROW LEVEL SECURITY;

-- Allow reads from the web app (anon + authenticated)
DROP POLICY IF EXISTS "Allow family agent reads" ON public.family_agents;

CREATE POLICY "Allow family agent reads"
ON public.family_agents
FOR SELECT
TO public
USING (true);
