# Week 6 Plan — Environment Setup (Wk 6 of 35)

Per the 78-week worksheet, the website focus this week is **Environment
Setup** — the start of the build phase now that design is signed off.

## Goals
- [x] Set up a proper development environment for the site: `.gitignore`,
  `.editorconfig`, and a `package.json` with dev and lint scripts. See
  `DEV_SETUP.md`.
- [x] Document how to run, check, and deploy the site so the setup is not
  only in one person's head. See `DEV_SETUP.md`.
- [x] Automate deployment with GitHub Actions instead of relying on the
  branch-based Pages setting. See `.github/workflows/deploy.yml`.
- [x] Patient System groundwork: database schema for patients,
  appointments, visit records, and roles.

## What the groundwork task actually needed
The schema already had `patients`, `users` (with the four roles), counters,
queue tickets, and the audit log from the June build. The two pieces named
in the worksheet that did **not** exist were **appointments** and **visit
records** — so that is what was designed and built this week, in the
`patient-management-system` repository rather than here.

## Carried over
- [ ] Decision on whether News & Events needs a lightweight CMS vs. manual
  edits — still open, still not blocking anything.
- [ ] Accepted insurance providers and real doctor/facility photos —
  waiting on the hospital, not on development.

## Action needed from the hospital / repo owner
- **GitHub Pages source must be switched** to "GitHub Actions" under
  Settings → Pages for the new deploy workflow to run. Until then the
  workflow run fails while the site itself stays up via the old branch
  deploy. Detail in `DEV_SETUP.md`.

## Next Steps (Week 7)
- Website: Homepage Build.
- Groundwork: Patient System — research AI providers with healthcare-
  compliant agreements (BAA) for the future symptom-checker chatbot.
