-- CRITICAL SECURITY FIX: Remove dangerous all_access policies
-- These policies allow privilege escalation and unrestricted data access

-- 1. Fix user_roles table - Remove all_access policy (CRITICAL: Privilege escalation vulnerability)
DROP POLICY IF EXISTS "all_access" ON public.user_roles;
DROP POLICY IF EXISTS "Allow insertion of user roles during signup" ON public.user_roles;

-- Keep only secure policies for user_roles
-- Policy "Users can view own roles" already exists and is safe
-- Policy "Admins can manage all roles" already exists and is safe

-- 2. Fix contact_submissions table - Remove all_access policy
DROP POLICY IF EXISTS "all_access" ON public.contact_submissions;

-- Ensure only admins can read contact submissions
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;
CREATE POLICY "Only admins can view contact submissions"
  ON public.contact_submissions FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Keep INSERT policy for public contact form submissions (already exists)

-- 3. Fix profiles table - Remove all_access policy
DROP POLICY IF EXISTS "all_access" ON public.profiles;

-- Ensure profiles have proper scoped access
-- "Public profiles are viewable by everyone" for SELECT - should be safe if it's read-only
-- "Users can update own profile" for UPDATE - should already exist

-- 4. Add missing RLS policies for work_packages table
-- Currently has RLS enabled but no policies, making it completely inaccessible

CREATE POLICY "Anyone can view active work packages"
  ON public.work_packages FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Admins can manage work packages"
  ON public.work_packages FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));