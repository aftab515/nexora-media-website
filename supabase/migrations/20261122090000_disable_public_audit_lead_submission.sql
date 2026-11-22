-- Nexora Media no longer sends growth planner responses to Supabase.
-- Remove the legacy unauthenticated insert capability to prevent unwanted
-- direct API submissions if this migration is applied to the existing project.
-- This repository change does NOT update a live Supabase database by itself.
-- Existing records remain untouched and require a separate retention review.

REVOKE INSERT ON TABLE public.audit_leads FROM anon, authenticated;

DROP POLICY IF EXISTS "anon_can_submit_audit_leads" ON public.audit_leads;
