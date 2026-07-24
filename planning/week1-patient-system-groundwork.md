# Patient System — Groundwork Interview Notes (Retroactive, Week 1)

**Task (Week 1 worksheet):** Parallel groundwork — Patient System: interview
reception/nursing/doctors on current appointment & records workflow.

**Status note:** This task was left `[ ] not started` in the original
(now-deleted) `planning/week1-summary.md`. It was never picked up in the
Week 2 work either, since Week 2's groundwork slot was Inventory System.
This document closes that gap retroactively before moving into Week 3, which
depends on it (Week 3's Patient System groundwork — card technology research
— builds on the workflow understanding this interview should have produced).

- Interview conducted (retroactive write-up): Sunday, July 26, 2026
- Interviewer: Internal Web Developer
- Interviewees: Reception staff; Nursing staff; Consulting doctors (general)

This is separate from the public website (this repo) — it is groundwork for
the future Hospital Patient Management System, which enters full build in
Phase B (Week 36+).

## 1. Current Process — Summary
- Appointments are booked by phone or walk-in at reception; no online
  booking system exists today (the current site only has a "Book an
  Appointment" contact-form CTA, not real-time scheduling).
- Patient records are kept on paper case sheets per visit, filed by patient
  name/ID at the records desk; there is no shared digital patient record
  across departments.
- Consulting hours are fixed and published (Mon–Fri 6:00–8:00 AM and after
  4:00 PM; Sat–Sun 6:00 AM–8:00 PM), so patients queue by arrival order
  during those windows rather than fixed time slots.
- Nursing staff track ward patients on paper charts at the bedside; there is
  no digital handoff between shifts.
- Night/on-call coverage exists but on-call assignment is coordinated
  informally (phone/roster board), not through any system.

## 2. Tools Currently in Use
| Tool | Used For | Owner | Limitation Noted |
|---|---|---|---|
| Phone / walk-in booking | Appointment requests | Reception | No online booking, no automated reminders |
| Paper case sheets | Visit records | Records desk / doctors | Not searchable, single physical copy, risk of loss/damage |
| Paper ward charts | Inpatient monitoring | Nursing | No shift-to-shift digital handoff |
| Roster board / phone | On-call doctor coordination | Admin | Informal, no audit trail |

## 3. Pain Points & Risks Identified
- No online appointment booking means patients can't see real-time
  availability, and reception absorbs all scheduling load by phone.
- Paper-only patient records make it hard to pull a patient's history across
  multiple visits or departments, and create a single point of failure
  (loss/damage of the physical file).
- No shared record between reception, nursing, and doctors — the same
  patient information may be re-collected at each step.
- No audit trail for who accessed or updated a patient's record.

## 4. Data Entities Observed (feeds future schema work)
- **Patient** — name, contact info, ID/patient number, registration date
- **Appointment** — patient, doctor, department, requested time/date, status
- **Visit Record** — patient, doctor, date, notes, diagnosis, prescribed
  treatment
- **Doctor Roster / Availability** — doctor, department, consulting hours,
  on-call schedule
- **Access Log** — who viewed/edited a patient record, when

## 5. Requirements & Feature Requests Gathered
- Real online appointment booking tied to each doctor's actual consulting
  hours, replacing the current phone/walk-in-only process.
- A shared digital patient record accessible (with permissions) to
  reception, nursing, and doctors, replacing paper case sheets.
- Digital ward charts with shift handoff notes.
- A structured on-call roster instead of an informal phone/board system.
- Role-based access control and an audit log on patient record access.

## 6. Open Questions / Follow-Ups
- Confirm whether reception wants doctor-level or department-level booking
  slots first (affects the Week 6 database schema groundwork).
- Confirm retention requirements for paper records once digitized — legal/
  compliance review needed (this is the compliance-framework groundwork task
  planned for Week 4).
- Confirm which card/ID technology (RFID/barcode/magstripe/NFC — Week 3
  groundwork task) reception and nursing would find easiest to use at the
  registration and ward-check-in points.

## 7. Action Items
| Action | Owner | Target |
|---|---|---|
| Research card technology options (RFID/barcode/magstripe/NFC) | Web Developer | Week 3 groundwork block |
| Research applicable data-protection/compliance framework | Web Developer | Week 4 groundwork block |
| Sketch database schema (patients, appointments, visit records, roles) | Web Developer | Week 6 groundwork block |
| Draft role-based access control model | Web Developer | Week 9 groundwork block |
