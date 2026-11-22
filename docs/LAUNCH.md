# Nexora Media launch checklist

## Implemented
- Responsive landing page, agency introduction, service and pricing catalog, six explicitly labeled design concepts, FAQ, contact section, growth planner and WhatsApp inquiries.
- No fabricated case-study metrics. Real case studies should only be added with permission and evidence.
- Planner calculates rule-based advice locally. Automatic public Supabase lead insertion is disabled; users explicitly choose whether to send a WhatsApp message.
- Existing prices and WhatsApp destination preserved. No Meta pixel, billing, or ad changes.
- Privacy notice and basic search metadata.

## Verification
Use Node 22.12+ and run `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build`, and `node --experimental-strip-types --test tests/growth-planner.test.mjs`.
Browser smoke checks: install Playwright with `npm install --no-save --package-lock=false playwright@1.56.1`, run `npx playwright install --with-deps chromium`, start `npm run preview -- --host 127.0.0.1`, then `node tests/browser-smoke.mjs`. Smoke checks now assert that six distinct WebP images actually render at mobile, tablet, and desktop widths; screenshots are saved in `test-artifacts/portfolio-{width}.png`.
Screenshots and checks do not substitute for a human review on real devices.

## Security status and database migration
- Dependency remediation on the development branch removed the unused Supabase browser client and upgraded vulnerable npm packages. GitHub Actions reported zero known npm audit vulnerabilities on 22 November 2026. Recheck at every release.
- The legacy Supabase migrations grant anonymous INSERT access to `audit_leads`. A new migration, `20261122090000_disable_public_audit_lead_submission.sql`, revokes this permission. **It has not been applied to a live database**; verify the Supabase project and execute it using the authorized deployment process before assuming the endpoint is closed.
- No existing database rows are deleted by the migration. Review data retention and remove obsolete records only after owner approval.
- The public growth planner does not require Supabase credentials, API keys, or a live database.

## Portfolio image installation
- The gallery expects six optimized WebP assets in `public/portfolio/`: `pizza-restaurant.webp`, `burger-restaurant.webp`, `healthcare-clinic.webp`, `dental-clinic.webp`, `family-hospital.webp`, `international-skincare.webp`.
- All six approved WebP images are installed on the development branch at `public/portfolio/` (GitHub commit `5ea5ce6823170ed0c421f79a2dcea0b65c782309`). The portfolio uses unique assets and does not include the repetitive collage. The image-loading fallback remains only for unexpected load failures.
- The multi-industry collage was deliberately excluded from the gallery because it repeats food and healthcare subjects already shown as standalone campaigns. Do not upload it as a separate portfolio item.
- Salon and retail categories should be expanded only with distinct standalone artwork; the collage is not a substitute.
- Every concept is a fictional brand or illustrative campaign. Do not represent any as commissioned work or claim actual customer relationships without evidence.
- Confirm the creative is suitable for the intended market and check small typography for legibility before public release.

## Branding and Vercel deployment preparation
- Added `vercel.json` for a Vite static build and baseline browser security headers. This is configuration, **not** a confirmed Vercel deployment.
- `public/favicon.svg` and `src/components/Logo.tsx` render Nexora artwork. The unused `.bolt/` development metadata has been removed from the repository and is now ignored by Git. A build-time branding test and browser test reject Bolt attribution or external builder links; verify again on the final hosted URL.
- The full deployment and account setup procedure is documented in `docs/DEPLOYMENT.md`. An authenticated Vercel browser session does not establish an installed ChatGPT Vercel deployment connection.

## Remaining preview and hosting requirements
- GitHub Actions builds and browser-screenshots are development verification, not a public preview deployment. Check the available hosting provider before offering a preview URL; no staging URL has yet been verified.
- The owner explicitly authorized merging the verified source branch into `main`. This is a repository-code merge only, not consent to modify live database policies or claim a verified Vercel deployment.

## GitHub repository overview
- The repository README links its About metadata guidance, source pre-release notes, marketing service package catalog and deployment checklist. The GitHub About sidebar itself is a separate repository-administration setting; README text does not update it.
- GitHub Packages is intentionally not used for this private static website; the company's commercial service plans are documented in `docs/SERVICE_PACKAGES.md`.
- The `v0.1.0` GitHub source pre-release is gated on successful `main` verification and must not be represented as a public website launch.

## Before deployment
- Check the actual public domain and hosting destination; do not invent canonical URLs.
- Verify official social URLs, contact number, pricing scope and brand assets with the owner.
- Add permission-cleared client examples and actual measured results if available.
- Review the privacy notice against actual hosting, analytics, data handling and retention practices.
- Confirm the lead workflow in WhatsApp Business: use existing labels, follow-up reminders, and manual qualification. Do not store sensitive health information.
- Review any legacy Supabase public insert policies and existing records separately; removing the frontend call does not revoke database access.
- After repository merge, let GitHub Actions re-run website checks on `main` and publish only a private source-code pre-release. Deploy the built `dist/` directory separately using the authorized Vercel project, then verify the actual hosted URL.
- After deployment, verify HTTPS, mobile rendering, navigation and live inquiry delivery. Configure domain-specific sitemap and social preview image only when the domain is confirmed.
