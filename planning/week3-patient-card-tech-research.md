# Patient System — Card Technology Research

**Task (Week 3 worksheet):** Parallel groundwork — Patient System: research
card technology options (RFID / barcode / magstripe / NFC).

This follows directly from the Week 1 groundwork interview
(`planning/week1-patient-system-groundwork.md`), which identified patient
registration and ward check-in as the two points where a patient ID card
would be used, and flagged card technology choice as an open question for
reception and nursing staff.

## 1. Options Compared

| Technology | Read method | Typical card cost | Reader/scanner cost | Durability | Notes |
|---|---|---|---|---|---|
| **Barcode** (1D/2D) | Optical scan, line of sight | Very low (printed, cents each) | Low (USB scanner ~$20–60) | Low — scratches/fades, sensitive to damage | Easiest and cheapest to pilot; can even be printed on a paper wristband |
| **Magstripe** | Swipe, physical contact | Low | Low–moderate | Moderate — stripe wears out with repeated swipes | Familiar tech (like old bank cards), being phased out generally |
| **RFID** (passive, e.g. 13.56 MHz) | Tap/proximity, no line of sight | Moderate | Moderate ($50–150 per reader) | High — no physical contact wear | Works through a badge holder/pocket; widely used for hospital ID badges |
| **NFC** (subset of RFID, phone-compatible) | Tap, short range (~4cm) | Moderate | Moderate — many modern phones/tablets can read NFC natively | High | Same physical durability as RFID; big advantage is phones/tablets at nursing stations can read cards without dedicated hardware |

## 2. Hospital Fit

- **Registration desk:** any of the four work; barcode is simplest and
  cheapest to pilot immediately.
- **Ward check-in / bedside (nursing):** RFID or NFC are the better fit —
  tap-based, no line-of-sight needed, more durable under daily handling than
  a magstripe or barcode wristband.
- **Future mobile use:** NFC has an edge if nursing ever uses tablets/phones
  at the bedside, since many devices read NFC without extra hardware.
- **Cost sensitivity:** barcode is the cheapest to roll out hospital-wide;
  RFID/NFC cost more per reader but reduce wear-related reissue costs over
  time.

## 3. Recommendation

**Barcode for an initial pilot, RFID/NFC as the target for full rollout.**

- Short term: a printed barcode on the patient card/wristband lets
  registration and ward check-in start digitizing immediately with minimal
  hardware cost, while the rest of the Patient System (schema, RBAC, audit
  log — Weeks 6, 9, 10) is still being built.
- Medium term: move to RFID (or NFC, if nursing ends up using tablets) for
  durability and faster, contactless taps at the ward — this avoids the
  barcode wear/fade problem observed with paper-based tracking generally.
- Magstripe is not recommended — it doesn't offer a real advantage over
  barcode for this use case and the technology is being phased out
  industry-wide.

This recommendation is a starting point for discussion, not a final
decision — it should be confirmed with reception and nursing (who raised
the original question in the Week 1 interview) before Week 18, when the
worksheet has "present card technology recommendation for manager decision."

## 4. Open Questions
- Budget ceiling for reader hardware per ward/desk.
- Whether patient cards are single-visit (disposable) or reissued across
  visits — affects whether barcode's lower durability actually matters.
- Whether nursing wants tablets at the bedside at all (affects NFC's value
  over plain RFID).

## 5. Action Items
| Action | Owner | Target |
|---|---|---|
| Confirm budget ceiling and reissue policy with admin | Web Developer | Before Week 18 |
| Present final card technology recommendation for manager decision | Web Developer | Week 18 groundwork block |
