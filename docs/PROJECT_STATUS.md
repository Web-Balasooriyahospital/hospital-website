# Project Status — All Three Systems

A single view of where the three hospital systems actually stand, and where
that differs from the 78-week plan.

Last reviewed: **23 August 2026** (end of Week 7 of 78).

## Summary

| System | Plan position | Actual position |
|---|---|---|
| Hospital Website | Week 7 of 35 — on track | On track, live |
| Patient Management System | Groundwork until Week 36 | **Working backend already built** |
| Hospital Inventory System | Groundwork until Week 36 | **Working backend already built** |

The website is where the plan expects it. Both backend systems are
substantially ahead of it, and this document exists because that gap was not
recorded anywhere — the weekly plans kept describing them as "groundwork"
long after real code existed.

## 1. Hospital Website — on plan, live

<https://web-balasooriyahospital.github.io/hospital-website>

Weeks 1–7 delivered as scheduled: discovery, sitemap and content, wireframes,
visual design, design sign-off, environment setup, and the homepage build.

12 pages live with real hospital content. Doctor and department profile pages
were built in Week 7, ahead of their Week 9–10 slot, because the data-driven
approach made them cheap once the specialist list existed.

**Genuinely blocked** (waiting on the hospital, not on development):

- Doctor and facility photos — placeholders in use.
- Accepted insurance providers — not published anywhere; `insurance.html`
  still shows placeholder providers.
- Department floor and room numbers.
- Whether News & Events needs a CMS or manual edits.

**Known limitation:** the contact and booking forms are front-end only. There
is no backend, so neither transmits anything. Both say so plainly on submit
and give the reception number rather than showing a false confirmation.

## 2. Patient Management System — ahead of plan

The plan has this as light groundwork (interviews, specs, research) until
Week 36. In practice a working backend was built on 27–28 June 2026, before
the website project even started, and has been extended since.

**Built and committed:**

- 8 tables: users, patients, counters, counter_assignments, queue_tickets,
  audit_log, appointments, visit_records
- Patient registration with auto IDs (`PT-2026-XXXXX`), validation, PDPA
  consent capture
- Live queue with a "Now Serving" counter updating over Socket.IO
- Row-level locking fix for the queue-number conflict when two staff called
  the same ticket at once
- Staff accounts and role-based access control (admin / doctor / nurse /
  receptionist), counter and shift assignment
- Appointment booking with transactional overlap checking
- Visit records with one-record-per-appointment enforcement
- Audit logging on reads as well as writes, for PDPA traceability

**Not done:**

- Only the live queue has a UI. Appointments, visit records and staff admin
  are API-only.
- Never run against a real database — no environment has been provisioned.
- `npm test` is wired up but no test files exist.

**Groundwork tasks the plan scheduled, all completed on time:** Week 1
workflow interviews, Week 3 card technology research, Week 4 data-protection
research, Week 6 schema design, Week 7 AI provider and data-agreement
research.

## 3. Hospital Inventory System — ahead of plan

Same situation. Backend built 8 August 2026 against the Week 5 feature list.

**Built and committed:**

- 6 tables: users, departments, suppliers, stock_items, stock_transactions,
  requisitions
- Stock tracking with every movement recorded atomically against an audit
  trail
- Expiry alerts with a configurable warning window, replacing the manual
  monthly review the pharmacy described
- Per-item reorder thresholds with a low-stock endpoint
- Requisition flow: request → approve/reject → fulfil, where fulfilment
  records the stock receipt in the same transaction so quantity and status
  cannot drift apart
- Department usage reporting for budget planning

**Not done:**

- Minimal frontend only.
- Never run against a real database.
- Requisition approval is not wired to the finance system.
- Expiry alerts are logged server-side but have no notification channel
  (email/SMS/in-app).

## IT support

A weekly IT support slot runs alongside development. It had no written record
until 25 August 2026 — see [`IT_SUPPORT_LOG.md`](IT_SUPPORT_LOG.md).

One ticket has been formally raised: **#001**, pharmacy counter POS not
printing receipts (7 August, resolved in 24 minutes). Writing it up showed it
was the second failure from the same cause — a Windows update resetting
printer configuration — after the reception printer on 27 June. A printer test
print is now part of the weekly checklist.

## What needs a decision

These are not development tasks:

1. **GitHub Pages source** — the deploy workflow needs Settings → Pages →
   Source switched to "GitHub Actions". Until then the workflow run fails,
   though the site stays up via the branch deploy.
2. **Content from the hospital** — photos, the insurance provider list,
   department floor numbers.
3. **The plan itself.** Both backend systems being ~29 weeks ahead of a plan
   that still calls them "groundwork" makes weekly reporting misleading.
   Either the plan should be re-baselined, or the backend work should be
   paused so it matches. That is a management call, not a developer one.
4. **Deferring feature updates on the counter machines**, proposed after
   ticket #001.
