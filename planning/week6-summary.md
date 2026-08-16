# Week 6 Summary — Environment Setup

## Goals Checklist (from project worksheet)
- [x] Website: environment setup progressed/completed
- [x] Groundwork: Patient System task advanced
- [x] Weekly summary sent to manager
- [x] Next week planned

## What was done

**Website — Environment Setup.** The site had been built with no tooling
around it: no `.gitignore`, no editor config, no way to run checks, and
deployment depending on a GitHub setting nobody had written down. This week
added all of that:

- `.gitignore` and `.editorconfig` so the repository stays clean and
  formatting is consistent.
- `package.json` with `npm run dev` and `npm run lint` (HTML + CSS). The
  scripts run through `npx`, so there is no install step.
- `DEV_SETUP.md` covering local setup with either Node or Python, the
  checks to run before committing, the project layout, and the two things
  that have already caused problems once: media queries must sit at the end
  of `style.css` to take effect, and the nine pages share header markup
  that has to be changed together.
- `.github/workflows/deploy.yml` to publish on every push to `master`.

**Patient System groundwork — database schema.** The worksheet task was to
sketch the schema for patients, appointments, visit records, and roles.
Patients, roles, counters, queue tickets, and the audit log already existed
from the June build, so the real gap was appointments and visit records.
Both were designed and built:

- `appointments` — booking with patient, doctor, department, time range,
  and status (scheduled / confirmed / checked-in / completed / cancelled /
  no-show).
- `visit_records` — the clinical record of an attended visit, linked back
  to the appointment and queue ticket it came from, and supporting walk-ins
  that have no appointment.

Two design decisions worth recording:

1. **No unique key on (doctor, start time).** It looks like the obvious way
   to stop double-booking, but cancelled and no-show appointments are kept
   for history, so a unique key would block re-booking a slot that had been
   freed up. Overlap is checked in the booking route inside a transaction
   instead, which can exclude those statuses properly.
2. **Recording a visit closes its appointment in the same transaction**, so
   a completed visit and a still-open appointment cannot disagree. The
   route also rejects an appointment belonging to a different patient, so a
   mistyped id cannot file clinical notes against the wrong person.

## Weekly summary for manager
Website: The build environment is now set up and documented. Anyone picking
the project up can run it locally, check their work, and understand how it
deploys without asking. Deployment is automated through GitHub Actions.

Patient System groundwork: The appointment and visit-record parts of the
schema — the two pieces that were still missing — are designed and built,
with the booking race condition and the wrong-patient risk both handled up
front rather than discovered later.

**One thing needs a decision:** the new deploy workflow requires the
repository's Pages source to be switched to "GitHub Actions" in Settings.
Until that is done the workflow shows a failed run, though the live site is
unaffected and stays up via the existing branch deploy.

## Next week plan (Week 7)
- Website: Homepage Build — rebuild the home page against the signed-off
  wireframe (emergency banner, hero, department quick-links, doctor and
  news teasers).
- Groundwork: Patient System — research AI providers offering
  healthcare-compliant agreements (BAA) for the future symptom-checker
  chatbot. Note the project rule: chatbot development does not begin until
  clinical staff approve the triage logic and disclaimers and legal signs
  off.
