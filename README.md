# Nexora Media — agency website

**About:** Nexora Media is a Faisalabad-based digital and social media marketing practice creating brand content, Reels and Meta advertising campaigns. This repository contains its React + TypeScript + Tailwind CSS + Vite website.

**Repository description (for the GitHub About sidebar):** Nexora Media's responsive marketing agency website, portfolio concepts, service packages, WhatsApp inquiries and growth planner.

> **Website:** Production URL not yet verified. A source-code release and a successful build do **not** mean the site has been deployed.

## Features

- Responsive agency information, services, pricing, FAQ and WhatsApp inquiry links.
- Six **fictional / illustrative concept campaigns** (food, dental, skin clinic, family healthcare, skincare). These are not client case studies.
- Questionnaire-based local growth planner. It **does not** inspect a visitor's actual social-media page, submit leads to Supabase or guarantee sales.
- Nexora-owned wordmark and favicon. **No Bolt badge, logo or attribution is intentionally shipped.**
- Privacy notice and basic SEO metadata.

## Repository sections

- **About:** [Suggested GitHub About description, topics and homepage policy](docs/REPOSITORY_PROFILE.md).
- **Releases:** [v0.1.0 source-preview notes](docs/RELEASE_NOTES_v0.1.0.md) and [change history](CHANGELOG.md). After a merge to `main`, CI will verify the exact code and, if successful, create one private **pre-release** with the verified static build. That is not a Vercel launch.
- **Packages:** [Commercial marketing service packages](docs/SERVICE_PACKAGES.md) are described separately from GitHub's software package registry. This repository is a **private website application**, not a reusable npm library or container. `GitHub Packages` is intentionally empty.
- **Deployment:** [Vercel and production checks](docs/DEPLOYMENT.md). No canonical site URL has been confirmed.

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

Changes are reviewed in pull requests. The six sample images live under `public/portfolio/`. Merging reviewed website source into `main` is separate from production deployment. The deployment URL, mobile behavior, branding, SSL and inquiry delivery must be verified on the real hosted URL before claiming a public launch.
