/*
# Create audit_leads table

1. Plain-English summary
- Visitors use the "Free 5-Min Page Audit" form to request a free audit. When they
  submit, the site saves the request here as a lead backup before opening WhatsApp,
  so no lead is ever lost even if the WhatsApp message is never sent.

2. New Tables
- `audit_leads`
  - `id` (uuid, primary key, auto-generated)
  - `brand_name` (text, not null) — the visitor's business/brand name
  - `page_link` (text, not null) — Instagram or Facebook page link
  - `primary_goal` (text, not null) — selected goal from the dropdown
  - `created_at` (timestamp with time zone, defaults to now)

3. Security
- Enable Row Level Security on `audit_leads`.
- Grant INSERT to `anon` and `authenticated` (the public site submits leads with no sign-in).
- Grant SELECT and DELETE to `service_role` only (agency team reads/cleans leads server-side).
- INSERT-only policy for anon/authenticated: visitors can submit leads but cannot read
  other visitors' submissions or tamper with existing rows.

4. Important notes
- No sign-in system in this app, so policies target `anon, authenticated`.
- SELECT is intentionally NOT granted to anon/authenticated: submitted leads are private
  contact data and must not be publicly readable through the Data API.
*/

CREATE TABLE IF NOT EXISTS audit_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_name text NOT NULL,
  page_link text NOT NULL,
  primary_goal text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE audit_leads ENABLE ROW LEVEL SECURITY;

GRANT INSERT (brand_name, page_link, primary_goal) ON audit_leads TO anon, authenticated;
GRANT SELECT, DELETE ON audit_leads TO service_role;

DROP POLICY IF EXISTS "anon_can_submit_audit_leads" ON audit_leads;
CREATE POLICY "anon_can_submit_audit_leads"
ON audit_leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);