# Week 4 Summary — Visual Design & Mockups

## Goals Checklist (from project worksheet)
- [x] Website: Visual Design & Mockups progressed/completed
- [x] Groundwork: Patient System task advanced
- [x] Weekly summary sent to manager
- [x] Next week planned

## What was done
- Formalized the site's visual design system into `docs/VISUAL_DESIGN.md` —
  color palette, typography, spacing, and a catalogue of existing
  components (header, hero, page-banner, cards, CTA, forms).
- Refactored `css/style.css` to use CSS custom properties (`:root`
  variables) instead of hardcoded hex values, so the palette is defined
  once and stays consistent as new pages are added.
- Added mockup notes for the two page types not yet built (Doctor Profile,
  Department Profile) — both compose entirely from existing components, so
  no new design patterns are needed for the Week 9–10 builds.
- Completed the Patient System compliance research task: reviewed Sri
  Lanka's Personal Data Protection Act No. 9 of 2022 as it applies to
  patient records, and connected it to controls already built (the Jun 27
  database-lock fix, the Jun 28 role-based access control) — see
  `week4-patient-compliance-research.md`.

## Weekly summary for manager
Website: The visual design system is now documented and encoded in CSS
variables rather than scattered hardcoded colors — this keeps every future
page (starting with Doctor and Department detail pages in Weeks 9–10)
visually consistent without needing a design pass each time. No visual
regressions from the CSS refactor (verified header/CTA colors render
identically).

Patient System groundwork: Completed the data-protection/compliance
research task. Sri Lanka's PDPA (No. 9/2022) applies directly, since
medical records count as sensitive personal data. Five concrete
recommendations were made, most urgently: add explicit consent capture to
patient registration, and confirm the hospital's actual medical-record
retention period with administration (currently unknown — carried to the
Week 19 compliance checklist as an open question).

## Next week plan (Week 5)
- Website: Design Sign-Off & Handoff.
- Groundwork: Inventory System — draft feature list (stock tracking,
  expiry alerts, reorder thresholds).
