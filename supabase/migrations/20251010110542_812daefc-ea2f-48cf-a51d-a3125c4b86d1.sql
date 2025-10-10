-- Phase 2: Critical Database Security Fixes
-- Fix over-permissive RLS policies on subscriber tables

-- 1. Fix email_subscribers table (CRITICAL - currently allows public delete/update)
DROP POLICY IF EXISTS "all_access" ON public.email_subscribers;

CREATE POLICY "Admin full access to email subscribers"
  ON public.email_subscribers
  FOR ALL
  TO authenticated
  USING (public.has_role('admin'))
  WITH CHECK (public.has_role('admin'));

CREATE POLICY "Public can subscribe to email list"
  ON public.email_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 2. Fix newsletter_subscriptions table (CRITICAL - broken admin policy, public write access)
DROP POLICY IF EXISTS "all_access" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Admins can view newsletter subscriptions" ON public.newsletter_subscriptions;

CREATE POLICY "Admin full access to newsletter subscriptions"
  ON public.newsletter_subscriptions
  FOR ALL
  TO authenticated
  USING (public.has_role('admin'))
  WITH CHECK (public.has_role('admin'));

CREATE POLICY "Public can subscribe to newsletter"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 3. Fix subscribers table (CRITICAL - allows public full access)
DROP POLICY IF EXISTS "all_access" ON public.subscribers;

CREATE POLICY "Admin full access to subscribers"
  ON public.subscribers
  FOR ALL
  TO authenticated
  USING (public.has_role('admin'))
  WITH CHECK (public.has_role('admin'));

-- 4. Clean up contact_submissions redundant policy (allows unintended public read)
DROP POLICY IF EXISTS "System can view contact submissions" ON public.contact_submissions;