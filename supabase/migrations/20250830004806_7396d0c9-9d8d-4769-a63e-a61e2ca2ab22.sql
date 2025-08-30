-- Fix RLS policies for family_agents table to allow integration
-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Admin can insert family agents" ON public.family_agents;
DROP POLICY IF EXISTS "Admin can update family agents" ON public.family_agents;
DROP POLICY IF EXISTS "Admin can delete family agents" ON public.family_agents;

-- Create permissive policies to allow integration
CREATE POLICY "Allow family agent inserts"
ON public.family_agents
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow family agent updates"
ON public.family_agents
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow family agent deletes"
ON public.family_agents
FOR DELETE
TO public
USING (true);