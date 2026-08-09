# Week 5 Summary — Design Sign-Off & Handoff

## Goals Checklist (from project worksheet)
- [x] Website: Design Sign-Off & Handoff progressed/completed
- [x] Groundwork: Inventory System task advanced
- [x] Weekly summary sent to manager
- [x] Next week planned

## What was done
- Signed off the design phase — sitemap (Week 2), wireframes (Week 3), and
  the visual design system (Week 4) — and documented handoff notes for the
  Week 6+ build phase in `docs/DESIGN_SIGNOFF.md`.
- Confirmed no new components are needed for the two page types still to
  be built (Doctor Profile, Department Profile) — both reuse existing
  patterns already validated live on the site.
- Drafted the Inventory System feature list: stock tracking, expiry
  alerts, reorder thresholds, requisition/procurement linkage, and
  department usage reporting — each tied back to a specific pain point
  from the Week 2 pharmacy/supply staff interview. Set the priority order
  for the Week 8 schema work. See `week5-inventory-feature-list.md`.

## Weekly summary for manager
Website: Design phase is formally closed out. Everything built since
Week 1 already reflects the approved sitemap, wireframes, and visual
design system, so there's no backlog of design debt heading into Week 6's
build phase. Two content items remain genuinely blocked on the hospital
(insurance providers, real photos) but don't block any build work.

Inventory System groundwork: Feature list is drafted and prioritized —
stock/supplier/department schema first (blocks everything else), then the
audit log, then reorder/requisition linkage, then usage reporting last.
Two open questions carried from Week 2 (reorder-threshold ownership,
requisition approval hierarchy) still need a decision from hospital
admin/procurement before Week 8's schema work locks those fields in.

## Next week plan (Week 6)
- Website: Environment Setup — start of the build phase.
- Groundwork: Patient System — sketch database schema (patients,
  appointments, visit records, roles).
