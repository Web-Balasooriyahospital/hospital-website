# Patient System Groundwork — Data-Protection & Compliance Research

Week 4 parallel groundwork task: *"research applicable data-protection/compliance
framework for patient records."* Builds on the Week 1 stakeholder interview and
feeds the Week 10 audit-logging spec and the Week 19 compliance checklist.

## Applicable Framework

**Personal Data Protection Act, No. 9 of 2022 (Sri Lanka)** — the primary law
governing collection, storage, and processing of personal data in Sri Lanka,
including sensitive personal data (which explicitly includes health/medical
records). Enforced by the Data Protection Authority of Sri Lanka.

Key obligations relevant to the Patient Management System:
- **Lawful basis for processing** — patient consent (or another lawful basis,
  e.g. vital interest / legal obligation for emergency care) must be
  established and recorded at registration.
- **Purpose limitation** — patient data collected for treatment/records
  cannot be repurposed (e.g. for marketing) without separate consent.
- **Data minimization** — only collect fields actually needed for care and
  billing; the current registration form (name, contact, auto-generated
  patient ID) already follows this.
- **Security safeguards** — "appropriate technical and organizational
  measures" against unauthorized access, loss, or disclosure. Directly
  relevant to the concurrent-update bug fixed on Jun 27 (database lock) —
  that fix is also a data-integrity control, not just a UX bug fix.
- **Data subject rights** — patients can request access to, correction of,
  or (in some cases) erasure of their records.
- **Retention limits** — data shouldn't be kept longer than necessary for
  the stated purpose; hospitals typically have separate statutory medical
  record retention periods that take precedence (needs confirmation from
  hospital administration — see Open Questions).
- **Breach notification** — obligation to notify the Data Protection
  Authority (and affected individuals, in higher-risk cases) of a breach.

## Healthcare-Specific Considerations

- Medical records are **sensitive personal data** under the Act, requiring a
  higher standard of care than general personal data.
- **Role-based access control** (built Jun 28 — receptionist / nurse /
  doctor / admin) is a direct, practical control supporting both the
  security-safeguards and purpose-limitation obligations: staff should only
  see the patient data relevant to their role.
- **Audit logging** (Week 10 spec, not yet built) will be needed to
  demonstrate compliance — who accessed or modified a record, and when.

## Recommendations for the Patient Management System

1. Add an explicit consent capture step to patient registration (checkbox +
   timestamp), not just implied consent.
2. Keep the Jun 27 database-lock fix and the Jun 28 RBAC work — both double
   as compliance controls, not just bug fixes/features.
3. Build the Week 10 audit log early enough to cover the system from the
   point it starts holding real patient data, not retroactively.
4. Confirm the hospital's actual medical-record retention period with
   administration — that number, not a generic default, should drive the
   data-retention design.
5. Document a basic breach-response procedure before go-live (who to
   notify internally, and the Data Protection Authority timeline).

## Open Questions (carried to Week 19's compliance checklist)
- Confirmed medical record retention period from hospital administration.
- Who is the designated point of contact for a data breach notification?
- Does the hospital have an existing consent form/process this should
  align with, or is this the first formal consent capture?
