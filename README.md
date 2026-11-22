# Nexora Media — agency website

Public-facing marketing website for **Nexora Media**, a digital and social media marketing practice based in Faisalabad, Pakistan. Built with React, TypeScript, Tailwind CSS and Vite.

## Features

- Responsive agency information, services, pricing, FAQ and WhatsApp inquiry links.
- Six **fictional / illustrative concept campaigns** (food, dental, skin clinic, family healthcare, skincare). These are not client case studies.
- Questionnaire-based local growth planner. It **does not** inspect a visitor's actual social-media page, submit leads to Supabase or guarantee sales.
- Nexora-owned wordmark and favicon. **No Bolt badge, logo or attribution is intentionally shipped.**
- Privacy notice and basic SEO metadata.

## Local development

Requires Node 22.12+.

```sh
npm ci
npm run dev
```

## Quality checks

```sh
npm run typecheck
npm run lint
node --experimental-strip-types --test tests/growth-planner.test.mjs
npm run build
node --test tests/branding.test.mjs
```

GitHub Actions additionally runs browser smoke tests at mobile, tablet and desktop sizes, verifies that all six images load and publishes build/screenshot artifacts. Do not assume a GitHub Actions artifact is a public deployment.

## Vercel deployment

The repository includes `vercel.json` for the Vite build and security headers. Deployment requires an **authorized Vercel account and a verified project connected to this repository**. **No Vercel project URL or custom domain is assumed.** See [deployment and security checklist](docs/DEPLOYMENT.md) for staging, production and remaining access requirements.

## Sensitive integration note

An earlier Supabase table policy may still allow unauthenticated inserts at the **database** level. Frontend access was removed, and the corrective migration is checked in but **has not been confirmed applied to the live database**. See `docs/LAUNCH.md` and `supabase/migrations/20261122090000_disable_public_audit_lead_submission.sql`.

## Repository workflow

Changes are reviewed in pull requests. The six sample images live under `public/portfolio/`. Do not merge or claim a production launch until the production deployment has been verified from the real URL, including mobile responsiveness, branding and inquiry delivery.
