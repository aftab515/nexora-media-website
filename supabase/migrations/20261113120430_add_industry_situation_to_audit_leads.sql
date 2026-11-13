/*
# Add industry and situation columns to audit_leads

1. Plain-English summary
- The "Free 5-Min Page Audit" form was upgraded into an AI Brand Audit & Strategy
  Generator. It now collects two extra answers from visitors: their business
  industry/niche and their current social media situation. These columns store the
  new answers so no lead information is lost.

2. Modified Tables
- `audit_leads`
  - `industry` (text, nullable) — visitor's business industry / niche selection
  - `situation` (text, nullable) — visitor's current social media situation selection

3. Security
- No policy changes: the existing INSERT-only policy still governs submissions.
- Extend the column-level INSERT grant to include the two new columns so the
  public form can still save leads.

4. Important notes
- Columns are added with IF NOT EXISTS and are nullable so existing rows remain valid.
*/

ALTER TABLE audit_leads ADD COLUMN IF NOT EXISTS industry text;
ALTER TABLE audit_leads ADD COLUMN IF NOT EXISTS situation text;

GRANT INSERT (industry, situation) ON audit_leads TO anon, authenticated;