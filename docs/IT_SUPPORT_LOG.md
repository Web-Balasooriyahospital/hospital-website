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

1. Confirmed the sale itself completed and an invoice number was issued —
   this ruled out the POS application and the database.
2. Checked the printer was powered on, online, and had paper and cables
   seated.
3. Checked the Windows print queue and found jobs spooled but not printing.
4. Cleared the stuck queue and restarted the print spooler service.
5. Reinstalled the printer driver, which had been reset by a recent Windows
   update.
6. Printed a test receipt, then had counter staff complete a live sale to
   confirm the fix end to end before closing the ticket.

### Root cause

A Windows update reset the printer configuration, leaving the driver in a
broken state. The POS kept accepting sales and queueing print jobs, so the
fault was invisible until someone looked for a physical receipt.

### Follow-up

This is the second printer fault traced to a Windows update resetting printer
settings — the reception Canon G2010 failed the same way on 27 June. Worth
handling properly rather than fixing repeatedly:

- Add a printer test print to the routine maintenance checklist so the fault
  is caught at the weekly slot instead of by a patient waiting at a counter.
- Consider deferring feature updates on the counter machines so printer
  configuration is not reset without warning.
