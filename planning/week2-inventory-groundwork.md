# Inventory System — Groundwork Interview Notes

**Task (Week 2 worksheet):** Parallel groundwork — Inventory System: interview
pharmacy/supply staff on current stock tracking process.

- Interview conducted: Saturday, July 25, 2026 (4:45 PM – 6:30 PM)
- Write-up & follow-up: Sunday, July 26, 2026 (9:45 AM – 11:15 AM, 12:30 PM – 2:15 PM)
- Interviewer: Internal Web Developer
- Interviewees: Pharmacy Manager; Supply Chain / Procurement Coordinator

This is separate from the public website (this repo) — it is groundwork for the
future Hospital Inventory System, which enters full build in Phase B (Week 36+).
Notes are kept here so they travel with the project history even though the
Inventory System itself is a different build.

## 1. Current Process — Summary
- Stock counts are tracked in shared spreadsheets per department (pharmacy,
  general supply); no single source of truth across departments.
- Reorders are triggered manually when a staff member notices low stock during
  a shelf check, not from a threshold alert.
- Expiry dates are recorded on the spreadsheet but require a manual monthly
  review to catch soon-to-expire stock.
- Purchase requisitions are submitted on paper forms, then re-entered into the
  finance system by procurement — a duplicate data-entry step.
- There is no audit trail showing who adjusted a stock count or when.

## 2. Tools Currently in Use
| Tool | Used For | Owner | Limitation Noted |
|---|---|---|---|
| Shared spreadsheet (per dept.) | Stock counts, expiry dates | Dept. supervisors | No cross-department visibility; version conflicts |
| Paper requisition forms | New stock / reorder requests | Ward & pharmacy staff | Manual re-entry; slow approval turnaround |
| Finance system (existing) | Purchase orders, supplier payment | Procurement / Finance | Not linked to stock levels |

## 3. Pain Points & Risks Identified
- Stockouts of critical medication happen because low stock is caught late
  (reactive, not proactive).
- Expired stock is occasionally dispensed before the monthly review catches it
  — a patient-safety risk.
- No accountability trail for stock adjustments makes shrinkage/loss hard to
  investigate.
- Procurement double-entry wastes staff time and introduces transcription
  errors.

## 4. Data Entities Observed (feeds future schema work)
- **Stock Item** — name, category, unit, current quantity, reorder threshold,
  expiry date
- **Supplier** — name, contact, lead time, linked stock items
- **Department** — name, assigned stock items, usage history
- **Stock Movement / Audit Log** — item, quantity delta, user, timestamp,
  reason
- **Purchase Requisition** — item(s), quantity, requesting department,
  approval status

## 5. Requirements & Feature Requests Gathered
- Automatic low-stock alerts at a configurable reorder threshold, per item.
- Expiry alerts surfaced well before the current monthly manual review (e.g.
  30/14/7-day warnings).
- Single shared view of stock across departments, replacing per-department
  spreadsheets.
- Digital requisition flow that feeds procurement directly — no re-entry into
  the finance system.
- Per-user audit log on every stock adjustment.
- Department-level usage reporting to support budget planning.

## 6. Open Questions / Follow-Ups
- Confirm whether the existing finance system exposes an API/export
  procurement can integrate with, or whether this stays a manual bridge for
  Phase A.
- Confirm approval hierarchy for requisitions above a cost threshold.
- Identify who owns reorder-threshold values per item (pharmacy lead vs.
  procurement).

## 7. Action Items
| Action | Owner | Target |
|---|---|---|
| Draft stock item / supplier / department schema | Web Developer | Week 8 groundwork block |
| Research supplier record requirements with procurement | Web Developer | Week 11 groundwork block |
| Draft expiry-alert & reorder-threshold logic spec | Web Developer | Week 15 groundwork block |
| Draft department usage-logging spec | Web Developer | Week 17 groundwork block |
