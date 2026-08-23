# IT Support Log

Alongside the development work, this role covers a weekly IT support slot for
the hospital: triaging the ticket queue, handling ad-hoc faults reported by
staff, and running routine maintenance checks.

Faults are handled when they come in — a counter that cannot serve patients
will not wait for a scheduled window.

Tickets are numbered in the order they are formally raised, and each one is
also sent to admin by email as the written record.

This log contains only faults that were actually reported and worked on. It
is not a record of routine maintenance passes.

## Routine maintenance checklist

Run at each weekly slot:

- Triage anything open in the ticket queue by urgency
- Resolve routine access, password, and hardware requests
- Check backups completed and are restorable
- Check Windows and antivirus updates on shared workstations
- Check free disk space on the reception, pharmacy, and lab machines
- Note recurring faults so they can be fixed properly rather than repeatedly

## Ticket #001 — Pharmacy Counter 2 POS not printing receipts

| | |
|---|---|
| **Date** | 07/08/2026 |
| **Reported by** | Hospital Supervisor |
| **Location** | Pharmacy Counter 2 |
| **Time reported** | 10:32 AM |
| **Time resolved** | 10:56 AM |
| **Time to resolve** | 24 minutes |
| **Priority** | High — patients waiting at the counter |
| **Status** | Resolved |

### Issue reported

The POS at the pharmacy counter was not printing receipts. Sales were saving
correctly and invoice numbers were generating, so the POS software and its
database connection were both working — the failure was isolated to printer
output. Patients were waiting at the counter, so this was treated as high
priority rather than held for the weekly slot.

### Troubleshooting performed

Handled remotely over Quick Assist while the supervisor was at the counter.

1. Confirmed the sale itself completed and an invoice number was issued —
   this ruled out the POS application and the database, isolating the fault
   to print output.
2. Checked the printer state: green light on, paper loaded, roll already
   changed by staff.
3. Found the paper roll loaded upside down. Thermal paper only prints on one
   side, so a reversed roll feeds blank. Reseated it — receipts then printed,
   but cut off halfway.
4. Connected via Quick Assist and found the printer set to A4 instead of
   80mm. Someone had changed it in Control Panel. Corrected it; the test
   print then came out full length.
5. Staff also reported the reprint button doing nothing. It was calling an
   old endpoint after the previous week's update. Patched it and restarted
   the service.
6. Had counter staff run a live sale to confirm both a full receipt and the
   reprint before closing the ticket.

### Root cause

Three separate faults stacked on one counter: a reversed paper roll, a
printer paper-size setting changed from Control Panel, and a reprint button
left pointing at an old endpoint by the previous update.

### Follow-up

- Staff to be told not to change printer settings from Control Panel. Those
  permissions should be locked down so it cannot happen again.
- Staff also to be told that when a receipt fails the invoice is still saved
  — they should reprint rather than re-entering the sale, which risks
  double-charging a patient.
- Printer test print added to the weekly maintenance checklist so a
  misconfigured counter is caught at the slot rather than by a patient
  waiting.

## Ticket #002 — LAB computer turning off by itself

| | |
|---|---|
| **Date** | 23/08/2026 |
| **Reported by** | Hospital Supervisor |
| **Location** | LAB |
| **Time reported** | 8:44 AM |
| **Time resolved** | 9:58 AM |
| **Time to resolve** | 1 hour 14 minutes |
| **Priority** | Medium |
| **Status** | Resolved |

### Issue reported

The lab computer was shutting down on its own — sometimes after a few
minutes of use, sometimes after a few hours. There was no fixed pattern and
no warning, which pointed away from a software fault and towards a thermal or
power problem.

### Follow-up

Worth checking the other machines of the same age for dust build-up before
they fail the same way.
