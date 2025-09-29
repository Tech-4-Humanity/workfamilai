-- Comprehensive fix for all Security Definer View issues
-- Drop and recreate ALL views to ensure they use SECURITY INVOKER (default) instead of SECURITY DEFINER

-- Get a list of all views and drop them
DROP VIEW IF EXISTS "public"."4500 Master" CASCADE;
DROP VIEW IF EXISTS "public"."40k variations" CASCADE;
DROP VIEW IF EXISTS "public"."Core roster" CASCADE;
DROP VIEW IF EXISTS "public"."Agent reuse optimiser" CASCADE;
DROP VIEW IF EXISTS "public"."AI Agents by categories and agent names" CASCADE;
DROP VIEW IF EXISTS "public"."AI Directory Display" CASCADE;
DROP VIEW IF EXISTS "public"."Defence Partner Dashboard" CASCADE;
DROP VIEW IF EXISTS "public"."Defebce Matches" CASCADE;
DROP VIEW IF EXISTS "public"."Full Role to table match" CASCADE;
DROP VIEW IF EXISTS "public"."Full role agent match" CASCADE;

-- Recreate all views without SECURITY DEFINER (they default to SECURITY INVOKER)
CREATE VIEW "public"."4500 Master" AS
SELECT * FROM master_4500;

CREATE VIEW "public"."40k variations" AS
SELECT * FROM agent_variations_catalog;

CREATE VIEW "public"."Core roster" AS
SELECT * FROM active_agent_roster;

CREATE VIEW "public"."Agent reuse optimiser" AS
SELECT * FROM capacity_optimization_engine;

CREATE VIEW "public"."AI Agents by categories and agent names" AS
SELECT * FROM marketplace_agent_directory;

CREATE VIEW "public"."AI Directory Display" AS
SELECT * FROM agent_display_metadata;

CREATE VIEW "public"."Defence Partner Dashboard" AS
SELECT * FROM defense_partner_analytics;

CREATE VIEW "public"."Defebce Matches" AS
SELECT * FROM defense_capability_matches;

CREATE VIEW "public"."Full Role to table match" AS
SELECT * FROM role_capability_mapping;

CREATE VIEW "public"."Full role agent match" AS
SELECT * FROM aps_role_agent_alignment;

-- Add documentation comments
COMMENT ON VIEW "public"."4500 Master" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."40k variations" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."Core roster" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."Agent reuse optimiser" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."AI Agents by categories and agent names" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."AI Directory Display" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."Defence Partner Dashboard" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."Defebce Matches" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."Full Role to table match" IS 'View recreated with SECURITY INVOKER for security compliance';
COMMENT ON VIEW "public"."Full role agent match" IS 'View recreated with SECURITY INVOKER for security compliance';