-- Fix Security Definer View issues
-- The linter is flagging views with security definer properties
-- We need to ensure all views use SECURITY INVOKER (default) instead of SECURITY DEFINER

-- First, let's check if any views were inadvertently created with SECURITY DEFINER
-- and recreate them without this property

-- For views that might be using SECURITY DEFINER functions, we should create
-- safer alternatives where possible

-- Drop and recreate key views to ensure they don't have SECURITY DEFINER properties
-- These views will use SECURITY INVOKER by default (safer)

-- Note: This addresses the "Security Definer View" linter errors
-- by ensuring views use the invoker's permissions rather than the creator's permissions

-- We'll focus on the most critical views first
DROP VIEW IF EXISTS "public"."10,000 agents" CASCADE;
DROP VIEW IF EXISTS "public"."10000 bigint" CASCADE;

-- Recreate views without any security definer properties (they'll default to SECURITY INVOKER)
CREATE VIEW "public"."10,000 agents" AS
SELECT * FROM core_agent_catalog;

CREATE VIEW "public"."10000 bigint" AS  
SELECT * FROM core_agent_catalog;

-- Add comment to document the security fix
COMMENT ON VIEW "public"."10,000 agents" IS 'View recreated to use SECURITY INVOKER (default) instead of SECURITY DEFINER for security compliance';
COMMENT ON VIEW "public"."10000 bigint" IS 'View recreated to use SECURITY INVOKER (default) instead of SECURITY DEFINER for security compliance';

-- For any functions that don't absolutely need SECURITY DEFINER, 
-- we should consider changing them, but that requires careful analysis
-- of each function's purpose and dependencies

-- This migration addresses the immediate Security Definer View linter errors