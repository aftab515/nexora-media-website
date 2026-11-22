# Nexora Media website v0.1.0 — Source-code preview (pre-release)

This **pre-release** records the approved, tested website source and built assets in the private GitHub repository. It **does not mean that the website is live** on Vercel or on a custom domain.

## Included
- Responsive Vite + React + TypeScript + Tailwind website for Nexora Media in Faisalabad, Pakistan.
- Pages/sections: home, services, six sample campaigns, agency overview, monthly service packages, process, FAQs, growth-planner questionnaire and WhatsApp contact.
- Six individual optimized WebP **fictional concept** campaign images: pizza, burger, dental, family hospital, skin clinic, and international skincare. No repetitive collage or claims of real client engagement.
- Custom Nexora Media wordmark/favicon. No Bolt badge or builder attribution in the verified built output.
- Updated dependencies, Vercel configuration, baseline security headers and documented CI/browser tests.
- Growth recommendations generated locally from user answers, not from actual social-media analytics. No automatic Supabase lead submissions.

## Verification
The release workflow is configured to run **only after** the full `verify` job succeeds on `main`: dependency audit, typecheck, lint, growth planner unit tests, build, branding check, and browser tests at mobile/tablet/desktop sizes. Refer to the linked GitHub Actions run for the actual release commit.

## Important limits
- The legacy Supabase `audit_leads` permission revocation in `supabase/migrations/20261122090000_disable_public_audit_lead_submission.sql` requires independent live database verification and execution. Do not assume it is applied.
- Vercel installation/project setup, a real hosted URL, custom domain, HTTPS and production inquiry delivery require separate validation.
- Service prices and deliverables in `docs/SERVICE_PACKAGES.md` describe the website catalog as checked for this version; they are not a guarantee of commercial terms without owner confirmation.
- The GitHub **Packages** registry is not used for this static website; the build archive is attached to the GitHub source pre-release instead.

## Documentation
- [Repository introduction](../README.md)
- [Service packages](SERVICE_PACKAGES.md)
- [Deployment and security checklist](DEPLOYMENT.md)
- [Change log](../CHANGELOG.md)
