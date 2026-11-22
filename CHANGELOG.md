# Changelog

All substantive changes to the Nexora Media website are tracked in GitHub pull requests and tagged source releases.

## [0.1.0] — 2026-11-22 (pre-release source candidate)

### Added
- Responsive Nexora Media agency site with services, pricing, FAQ, WhatsApp contact links, and a questionnaire-driven preliminary growth planner.
- Six distinct **fictional/illustrative** creative portfolio samples; no repeated collage and no invented client results.
- Accessible category filters, mobile navigation, basic SEO and a website privacy notice.
- Custom Nexora Media SVG logo and favicon; automated checks guard against Bolt/StackBlitz attribution in the built website.
- Vercel Vite project configuration and baseline HTTP security response headers.
- Dependency audits, TypeScript checks, lint, growth planner tests, branding tests, and mobile/tablet/desktop Playwright browser checks.

### Changed
- Removed the unused public-facing Supabase browser integration; inquiries are initiated by users through WhatsApp.
- Updated dependency versions and the project package name from the generic starter.
- Added security and launch documentation; see [deployment checklist](docs/DEPLOYMENT.md).

### Known limitations / pending before production
- This repository release is a **code/build pre-release**, not proof of a live Vercel deployment or a verified domain.
- Legacy Supabase `audit_leads` access may still be open independently of the website. The revocation migration is in Git but has **not been confirmed applied to the actual project**.
- Pricing, verified contact workflow, Vercel account 2FA and final production URL must be checked before public launch.
- `GitHub Packages` is intentionally unused. This is a private static website application, **not a published reusable npm library or container package**.
