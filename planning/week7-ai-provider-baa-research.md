# Patient System Groundwork — AI Providers & Data-Protection Agreements

**Date:** Aug 22, 2026
**Task (from the 78-week worksheet):** research AI providers with
healthcare-compliant agreements (BAA) for the future symptom-checker chatbot.

> **Project rule, restated up front.** Chatbot development does **not**
> begin until hospital clinical staff have approved the triage logic and the
> required medical disclaimers, and legal/compliance has signed off. This
> document is procurement and compliance groundwork only. Nothing here
> should be read as approval to start building.

## 1. What we are actually procuring

A symptom-checker chatbot would send a patient's described symptoms — health
data about an identifiable person — to a third-party AI provider. Under Sri
Lanka's **Personal Data Protection Act No. 9 of 2022**, that makes the
hospital the *controller* and the AI provider a *processor*. The hospital
stays legally responsible for what the processor does with the data.

So the question is not "which model is best" but "which provider will sign
an agreement that lets us use it for health data at all".

## 2. Terminology correction (important)

The worksheet says "BAA". A **Business Associate Agreement** is a **HIPAA**
instrument — HIPAA is United States law and **does not apply to a hospital
operating solely in Sri Lanka**. Asking vendors for a BAA is still useful as
a *signal* (a provider willing to sign one has built the controls health
data needs), but the agreement we actually require is a **Data Processing
Agreement (DPA)** that satisfies PDPA, not a BAA.

Recommendation: treat "BAA availability" as a shortlist filter, and make a
PDPA-compliant DPA the actual contractual requirement.

## 3. What the agreement must cover

Derived from the PDPA work done in Week 4 (see
`patient-management-system/docs/week4-patient-compliance-research.md`):

| Requirement | Why |
|---|---|
| No training on our data | Patient symptoms must not become model training data |
| Zero or short retention | Prompts should not sit on a vendor's servers indefinitely |
| Sub-processor disclosure | We must know everyone in the chain |
| Breach notification with a deadline | PDPA obliges the hospital to report; we cannot if the vendor is silent |
| Data location / transfer terms | Cross-border transfer of health data needs a lawful basis |
| Audit or certification evidence | ISO 27001 / SOC 2 to evidence the vendor's controls |
| Deletion on termination | Data does not outlive the contract |

## 4. Provider evaluation criteria

Rather than name specific vendors and pricing that will be stale by the time
this is approved, the shortlist should be built by asking every candidate
the same questions:

1. Will you sign a DPA that meets Sri Lanka PDPA No. 9 of 2022?
2. Is training on customer data **off by default**, in writing, in the
   contract — not just a dashboard toggle?
3. What is the default retention period for prompts, and can it be set to
   zero?
4. Which sub-processors touch the data, and in which countries is it
   processed?
5. What is your contractual breach-notification window?
6. Can you provide a current ISO 27001 or SOC 2 Type II report?
7. Do you offer a healthcare-specific agreement (including a HIPAA BAA)?
   *Signal question — see §2.*
8. What are the uptime commitments and support terms?

A provider that cannot answer 1–5 in writing is disqualified regardless of
model quality.

## 5. Clinical and safety questions (not procurement, but blocking)

These need clinical sign-off before any build starts, and they affect which
provider is even viable:

- **Triage boundaries.** What must the bot never attempt to assess? Chest
  pain, breathing difficulty, stroke symptoms, paediatric emergencies, and
  pregnancy complications should route straight to the ETU number, not into
  a symptom dialogue.
- **Escalation path.** What exactly does the bot say and do when it detects
  a possible emergency? This must be a hard-coded rule, not left to model
  judgement.
- **Disclaimers.** Exact wording, approved by clinical staff and legal, shown
  before the first message — not buried in a terms page.
- **Language coverage.** Sinhala, Tamil, and English. A provider that is
  materially worse in Sinhala or Tamil is a patient-safety problem, not a
  quality preference. This needs testing with real staff, not vendor claims.
- **Logging.** Conversations are health data. Retention and access rules
  must match the patient-record rules already implemented.

## 6. Recommendation

1. **Do not shortlist on model capability yet.** Send the §4 questionnaire
   to candidate providers first and eliminate on contract terms.
2. **Require a PDPA-aligned DPA**, using BAA availability only as a filter.
3. **Get clinical answers to §5 before any technical decision** — the
   escalation and language requirements may rule providers out on their own.
4. **Budget for translation review** by Sinhala- and Tamil-speaking clinical
   staff. This is the single most likely thing to be underestimated.

## 7. Open questions for management

- Is a chatbot still wanted, given the website redesign is now targeting a
  Q1 2027 launch? Confirm it is in scope before further procurement effort.
- Who owns clinical sign-off for triage logic — an individual consultant or
  a committee?
- Is cross-border processing of patient health data acceptable to the
  hospital, or is in-region processing required? This single answer may
  eliminate most of the market.
