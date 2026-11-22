# Nexora Media — Vercel deployment and final verification

**Live Vercel project address:** [https://nexoramediaofficial.vercel.app/](https://nexoramediaofficial.vercel.app/) — Vercel domain verified and owner confirmed the site opens on 22 November 2026. Project `nexora-media-website` deploys from GitHub `main`. The site URL is valid, but the Vercel Hobby commercial-use restriction and legacy Supabase permission review remain unresolved.

## 1. Current scope

The site is a static Vite/React application. Build with Node 22.12+ using `npm ci && npm run build`. Output directory: `dist/`. No runtime Supabase, Meta Pixel or paid Vercel features are required for the public landing page.

`vercel.json` explicitly sets Vite, build/output commands and safe baseline HTTP security headers. The SPA uses in-page anchor navigation; no custom rewrite, function, or API route is required.

## 2. Vercel access and project setup

- Sign in to the **authorized Vercel team/account**. Do not paste API tokens, recovery codes or secrets into chat, issues or commits.
- Enable account **two-factor authentication (2FA)** before public launch. The account was checked on 22 November 2026 and showed TOTP **Active / Enrolled**. Reverify after changes to account security.
- Nexora Vercel project exists: `nexora-media-website` (`prj_oJ6DQmiQ32r2RAMMaA5fGTA3S84X`). Do not create duplicates or replace unrelated sites.
- The existing project imports GitHub `aftab515/nexora-media-website`, framework Vite, Node 22.x, root `./`, output `dist` and production branch `main`.
- Enable Git integration for preview deployments on pull requests, including `improvements/website-audit`, and inspect the preview before merging.
- The hostname [https://nexoramediaofficial.vercel.app/](https://nexoramediaofficial.vercel.app/) is verified as attached to this Vercel project and the owner reports successful browsing. Confirm public access, commercial hosting eligibility, and contact workflow before declaring final launch complete.

An authenticated Vercel dashboard tab is not the same as an **installed ChatGPT Vercel connection**. Deployment from ChatGPT requires a connected app with deployment permissions, or an explicitly authorized Work/browser session.

## Commercial hosting review

This Vercel workspace was verified on the Hobby plan on 22 November 2026. The Nexora business site is commercial, so its hosting eligibility requires an appropriate plan or alternative provider. No subscription upgrade has been made. The owner's successful access to the URL does not settle plan compliance.

## 3. Pre-production security blocker

The checked-in migration `supabase/migrations/20261122090000_disable_public_audit_lead_submission.sql` revokes the legacy public `audit_leads` insertion permission. **Its presence in Git is not evidence of execution.** Verify the intended Supabase project, applied migration and effective table grants/policies. The website no longer calls Supabase, but a legacy database endpoint may remain accessible independently. Never place Supabase credentials in Vercel's public Vite environment variables or frontend code.

## 4. Nexora branding and Bolt removal verification

- The website renders `src/components/Logo.tsx`, a custom Nexora mark, and `public/favicon.svg` (a custom N mark).
- The unused `.bolt/` metadata was removed from the repository and is excluded by `.gitignore`; it was never required by the Vite app. The build-time branding guard checks deployed files for unwanted Bolt attribution.
- `tests/branding.test.mjs` rejects known Bolt builder branding strings in the **built output**; `tests/browser-smoke.mjs` checks the visible page after rendering.
- After real Vercel deployment, verify the **deployed URL** in a normal browser: no bottom-corner Bolt badge, no Bolt logo in favicon, no Bolt attribution, no unexpected external scripts or redirects.
- If a badge is inserted by a third-party host, eliminate it at the authorized platform/project setting; do not hide a badge with a fragile CSS-only workaround.

## 5. Production acceptance checks

1. GitHub Actions is green for the exact deployment commit.
2. All six distinct WebP portfolio images load, with no repeated collage and no missing-file fallback.
3. Check 360px, 768px and desktop widths, navigation, keyboard interactions, copy/contrast, image legibility and reduced-motion support.
4. Confirm WhatsApp inquiries target the approved number and that `@nexoramedia792` opens the correct Instagram account.
5. Verify current published packages, pricing and locations with the owner (automated tests cannot validate business terms).
6. Verify HTTPS, security headers, favicon, site title, OG preview and robots directives on the **actual domain**. Configure canonical URL and sitemap only after domain confirmation.
7. Inspect Vercel project/environment configuration for secrets or unexpected analytics/scripts; do not expose credentials in screenshots or logs.
8. Confirm the Supabase legacy policy status, privacy notice and any data retention actions.
9. Merge the verified, owner-approved website source into `main`; then use the separately authorized Vercel project to deploy. Check the live production build and contact workflow end to end. Record the verified deployment URL, date and commit in the repository.

## 6. Change log expectations

Every launch/deploy change belongs in GitHub with a clear commit and comment. A `main` push runs the same website checks and, after verification passes, creates a versioned **source-code pre-release** and build archive (public if the repository is public) (see `docs/RELEASE_NOTES_v0.1.0.md`). GitHub Releases are **not** Vercel deployments. Document the exact verified URL only after one exists; mark incomplete stages as pending.
