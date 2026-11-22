# GitHub repository profile metadata

GitHub's **About** sidebar requires an authenticated repository-administration action, separate from editing repository files. These are the verified fields to use. This document does **not** itself change GitHub's About sidebar: the GitHub repository administration setting must also be updated.

**Repository name:** `nexora-media-website`

**Description:** Nexora Media's responsive digital marketing agency website — React, TypeScript, Tailwind CSS, Vite, portfolio concepts, services, pricing and WhatsApp inquiries.

**Website / homepage (verified Vercel address):** https://nexoramediaofficial.vercel.app/ — Vercel confirmed this domain belongs to the Nexora project and the owner confirmed the page loads on 22 November 2026. **GitHub About sidebar must be edited separately to replace the previous address.**

**Suggested topics:** `nexora-media`, `marketing-agency`, `vite`, `react`, `typescript`, `tailwindcss`, `digital-marketing`, `portfolio`, `vercel`, `faisalabad`

**Security / visibility:** As checked on 22 November 2026, this GitHub repository is **public**, including code and commit history. Confirm this is intentional; do not change visibility without owner approval. The website URL remains https://nexoramediaofficial.vercel.app/.

## What the GitHub sidebar sections mean

- **About:** A concise repository description, homepage URL and GitHub topics. README content alone does not update this sidebar.
- **Releases:** Git-tagged distributable versions. v0.1.0 is a **source/build pre-release** and is accessible when this repository is public. It is distinct from the deployed website.
- **Packages:** GitHub's software package registry (such as npm or GHCR). This static Vite website has no reusable package to publish, so this section should remain empty unless an actual package is developed. The agency's commercial packages are recorded in [SERVICE_PACKAGES.md](SERVICE_PACKAGES.md).
- **Deployments:** Vercel is separate. No custom domain or production deployment is implied by a GitHub release.

## Manual / connected-app follow-ups

Update the GitHub About sidebar's Website field to **https://nexoramediaofficial.vercel.app/**, replacing the older `nexora-media-website-lyart.vercel.app` address. Set the description and topics above if desired. Do not change repository visibility or invent testimonials and software packages.

## Main-branch protection (requires repository administration)

The available GitHub app can edit source code and pull requests but not repository branch-protection settings. The owner must open **Settings → Rules → Rulesets → New branch ruleset** and configure:

1. Ruleset name: `Protect main`; enforcement: **Active**; target: `main` (default branch).
2. Prevent deletion of the target branch and block force pushes.
3. Require a pull request before merging; keep required approvals at **0** unless another authorized reviewer is available (the repository currently has a solo maintainer).
4. Require the `verify` check from `.github/workflows/website-checks.yml` to pass. Do not require the `source_release` job because it only runs after merging on a push to `main`.
5. Save; verify the `main` branch now reports protected or has an active applicable ruleset, and that ordinary PRs can still merge.

Repository visibility and branch protection are separate settings. Branch protection does not keep a public repository's code private.
