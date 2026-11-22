# Nexora Media launch checklist

## Implemented
- Responsive landing page, service and pricing catalog, three explicitly labeled design concepts, FAQ, growth planner and WhatsApp inquiries.
- No fabricated case-study metrics. Real case studies should only be added with permission and evidence.
- Planner calculates rule-based advice locally. Automatic public Supabase lead insertion is disabled; users explicitly choose whether to send a WhatsApp message.
- Existing prices and WhatsApp destination preserved. No Meta pixel, billing, or ad changes.
- Privacy notice and basic search metadata.

## Verification
Use Node 22.12+ and run `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build`, and `node --experimental-strip-types --test tests/growth-planner.test.mjs`.
Browser smoke checks: install Playwright with `npm install --no-save --package-lock=false playwright@1.51.1`, run `npx playwright install chromium`, start `npm run preview -- --host 127.0.0.1`, then `node tests/browser-smoke.mjs`.
Screenshots and checks do not substitute for a human review on real devices.

## Before deployment
- Check the actual public domain and hosting destination; do not invent canonical URLs.
- Verify official social URLs, contact number, pricing scope and brand assets with the owner.
- Add permission-cleared client examples and actual measured results if available.
- Review the privacy notice against actual hosting, analytics, data handling and retention practices.
- Confirm the lead workflow in WhatsApp Business: use existing labels, follow-up reminders, and manual qualification. Do not store sensitive health information.
- Review any legacy Supabase public insert policies and existing records separately; removing the frontend call does not revoke database access.
- Merge the reviewed branch only after verification. Publish the built `dist/` directory using the authorized hosting provider.
- After deployment, verify HTTPS, mobile rendering, navigation and live inquiry delivery. Configure domain-specific sitemap and social preview image only when the domain is confirmed.
