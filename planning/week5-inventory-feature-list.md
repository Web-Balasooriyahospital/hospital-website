# Inventory System Groundwork — Feature List Draft

Week 5 parallel groundwork task: *"draft feature list (stock tracking,
expiry alerts, reorder thresholds)."* Builds directly on the Week 2
pharmacy/supply staff interview (`week2-inventory-groundwork.md`) and feeds
the Week 8 database schema sketch and the Week 15 expiry/reorder logic spec.

## Feature List

### 1. Stock Tracking
- Single shared stock view across departments (replacing the current
  per-department spreadsheets identified in the Week 2 interview).
- Per-item fields: name, category, unit, current quantity, location/
  department, supplier, expiry date.
- Manual stock adjustment (receiving new stock, dispensing, waste/loss),
  each adjustment tied to a user and timestamp — an audit log, not just a
  running total (same principle as the Patient System's Week 4 compliance
  research: every stock change needs to be attributable).

### 2. Expiry Alerts
- Configurable warning thresholds (e.g. 30 / 14 / 7 days before expiry),
  per the Week 2 interview's request for advance warning instead of the
  current monthly manual review.
- Alerts surfaced to the relevant department, not just a central admin
  view — the Week 2 interview flagged that expired stock is occasionally
  dispensed before the current review catches it.

### 3. Reorder Thresholds
- Per-item reorder threshold, settable by pharmacy lead or procurement
  (ownership question raised in the Week 2 interview, still open).
- Automatic low-stock flag when quantity crosses the threshold — replacing
  the current reactive "notice it's low during a shelf check" process.
- Reorder flag should route to a requisition (see Feature 4), not just
  notify — closing the loop the Week 2 interview identified as manual and
  slow.

### 4. Requisition & Procurement Link
- Digital requisition request tied to a specific stock item and quantity.
- Approval routing (threshold-based, per the Week 2 interview's open
  question on approval hierarchy).
- Feeds procurement directly — the Week 2 interview flagged double
  data-entry into the finance system as a real pain point; this should be
  designed to avoid that, not recreate it digitally.

### 5. Department Usage Reporting
- Per-department usage over time, to support budget planning — ties
  directly into the Week 17 department-usage-logging spec.

## Priority for Week 8 Schema Work
1. Stock item / supplier / department core schema (blocks everything else)
2. Stock movement / audit log (blocks expiry + reorder features)
3. Reorder threshold + requisition linkage
4. Department usage reporting (lowest priority — reporting layer on top of
   the above, not a blocker for the core system)

## Open Questions (carried from Week 2, still unresolved)
- Who owns reorder-threshold values per item — pharmacy lead or
  procurement?
- Requisition approval hierarchy above a cost threshold — still needs
  confirmation.
- Does the existing finance system expose an API/export procurement can
  integrate with, or does Phase A need a manual bridge?
