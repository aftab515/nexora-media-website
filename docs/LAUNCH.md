# Nexora Media launch checklist

## Implemented
- Responsive landing page, agency introduction, service and pricing catalog, six explicitly labeled design concepts, FAQ, contact section, growth planner and WhatsApp inquiries.
- No fabricated case-study metrics. Real case studies should only be added with permission and evidence.
- Planner calculates rule-based advice locally. Automatic public Supabase lead insertion is disabled; users explicitly choose whether to send a WhatsApp message.
- Existing prices and WhatsApp destination preserved. No Meta pixel, billing, or ad changes.
- Privacy notice and basic search metadata.

## Verification
Use Node 22.12+ and run `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build`, and `node --experimental-strip-types --test tests/growth-planner.test.mjs`.
Browser smoke checks: install Playwright with `npm install --no-save --package-lock=false playwright@1.56.1`, run `npx playwright install --with-deps chromium`, start `npm run preview -- --host 127.0.0.1`, then `node tests/browser-smoke.mjs`.
Screenshots and checks do not substitute for a human review on real devices.

## Security status and database migration
- Dependency remediation on the development branch removed the unused Supabase browser client and upgraded vulnerable npm packages. GitHub Actions reported zero known npm audit vulnerabilities on 22 November 2026. Recheck at every release.
- The legacy Supabase migrations grant anonymous INSERT access to `audit_leads`. A new migration, `20261122090000_disable_public_audit_lead_submission.sql`, revokes this permission. **It has not been applied to a live database**; verify the Supabase project and execute it using the authorized deployment process before assuming the endpoint is closed.
- No existing database rows are deleted by the migration. Review data retention and remove obsolete records only after owner approval.
- The public growth planner does not require Supabase credentials, API keys, or a live database.

## Portfolio image installation
- The gallery expects six optimized WebP assets in `public/portfolio/`: `pizza-restaurant.webp`, `burger-restaurant.webp`, `healthcare-clinic.webp`, `dental-clinic.webp`, `family-hospital.webp`, `international-skincare.webp`.
- Source images were approved in the Glowing Star conversation and prepared as `nexora-website-portfolio-distinct-assets.zip` (the archive contains the correct `public/portfolio/` folder layout). **These binary images must be uploaded to the repository before deployment**; the GitHub text-file connector cannot write binary assets. Until then the gallery displays an explicit image-pending fallback.
- The multi-industry collage was deliberately excluded from the gallery because it repeats food and healthcare subjects already shown as standalone campaigns. Do not upload it as a separate portfolio item.
- Salon and retail categories should be expanded only with distinct standalone artwork; the collage is not a substitute.
- Every concept is a fictional brand or illustrative campaign. Do not represent any as commissioned work or claim actual customer relationships without evidence.
- Confirm the creative is suitable for the intended market and check small typography for legibility before public release.

## Before deployment
- Check the actual public domain and hosting destination; do not invent canonical URLs.
- Verify official social URLs, contact number, pricing scope and brand assets with the owner.
- Add permission-cleared client examples and actual measured results if available.
- Review the privacy notice against actual hosting, analytics, data handling and retention practices.
- Confirm the lead workflow in WhatsApp Business: use existing labels, follow-up reminders, and manual qualification. Do not store sensitive health information.
- Review any legacy Supabase public insert policies and existing records separately; removing the frontend call does not revoke database access.
- Merge the reviewed branch only after verification. Publish the built `dist/` directory using the authorized hosting provider.
- After deployment, verify HTTPS, mobile rendering, navigation and live inquiry delivery. Configure domain-specific sitemap and social preview image only when the domain is confirmed.
