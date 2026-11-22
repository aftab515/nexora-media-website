# Nexora Media — Vercel deployment and final verification

**Verified code branch:** `improvements/website-audit` (PR #1 into `main`).

## 1. Current scope

The site is a static Vite/React application. Build with Node 22.12+ using `npm ci && npm run build`. Output directory: `dist/`. No runtime Supabase, Meta Pixel or paid Vercel features are required for the public landing page.

`vercel.json` explicitly sets Vite, build/output commands and safe baseline HTTP security headers. The SPA uses in-page anchor navigation; no custom rewrite, function, or API route is required.

## 2. Vercel access and project setup

- Sign in to the **authorized Vercel team/account**. Do not paste API tokens, recovery codes or secrets into chat, issues or commits.
- Enable account **two-factor authentication (2FA)** before public launch. The authenticated Vercel dashboard displayed an 'Enable 2FA' reminder during the 22 November 2026 check; confirm it is actually enabled before considering the account secured.
- Confirm whether a **Nexora Media project** already exists. Avoid creating a duplicate project or replacing another site's deployment.
- If no project exists, import GitHub repository `aftab515/nexora-media-website`, set framework to Vite, root directory `./`, output `dist` and production branch `main`.
- Enable Git integration for preview deployments on pull requests, including `improvements/website-audit`, and inspect the preview before merging.
- Do **not** claim a hosted preview URL, production URL or domain until it is returned by Vercel and can be opened.

An authenticated Vercel dashboard tab is not the same as an **installed ChatGPT Vercel connection**. Deployment from ChatGPT requires a connected app with deployment permissions, or an explicitly authorized Work/browser session.

## 3. Pre-production security blocker

The checked-in migration `supabase/migrations/20261122090000_disable_public_audit_lead_submission.sql` revokes the legacy public `audit_leads` insertion permission. **Its presence in Git is not evidence of execution.** Verify the intended Supabase project, applied migration and effective table grants/policies. The website no longer calls Supabase, but a legacy database endpoint may remain accessible independently. Never place Supabase credentials in Vercel's public Vite environment variables or frontend code.

## 4. Nexora branding and Bolt removal verification

- The website renders `src/components/Logo.tsx`, a custom Nexora mark, and `public/favicon.svg` (a custom N mark).
- `.bolt/` contains source-development metadata only. It is not imported by Vite into `dist/` and does not, on its own, inject a visible badge.
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
9. Merge only after verification, then check live production build and contact workflow end to end. Record deployment URL, date and commit in the PR.

## 6. Change log expectations

Every launch/deploy change belongs in the GitHub PR with a clear commit and comment. Document the exact verified URL; if a step has not been completed, mark it pending rather than implying success.
