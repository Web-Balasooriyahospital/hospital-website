# Week 7 Summary — Homepage Build

## Goals Checklist (from project worksheet)
- [x] Website: homepage build progressed/completed
- [x] Groundwork: Patient System task advanced
- [x] Weekly summary sent to manager
- [x] Next week planned

## What was done

**Website — Homepage Build.** The home page was still the placeholder from
the first week: a hero and three generic cards. It now works as an actual
front door to the hospital:

- **Emergency bar above the header** carrying the ETU line
  (032-226-5200) and ambulance (032-226-6266) as tap-to-dial links. This is
  the change that matters most — anyone landing on a hospital home page in
  an emergency is on a phone, and those numbers were previously buried three
  clicks away on the contact page.
- **Quick links** to Departments, Doctors, Services, Insurance, and Find Us.
- **Department and specialist teasers** feeding into the full listings.
- **Key facts and awards** — established 2009, open 24/7, 28 consultants,
  ISO 9001 / 14001 / OHSAS 18001, and the CNCI, National Business Excellence
  and Wayamba Health Excellence awards.
- **Visit-us block** with the real address, hotlines, and email.

Mobile was handled at the same time: the emergency bar reflows, hero buttons
go full width, and quick links and facts drop to two columns.

**Patient System groundwork — AI provider agreements.** Research completed
for the future symptom-checker chatbot, with one correction worth
management's attention.

## Point that needs a decision

The worksheet asks for providers offering a **BAA**. A BAA is a **HIPAA**
instrument, and **HIPAA is United States law — it does not apply to a
hospital operating solely in Sri Lanka.** The agreement actually required is
a **Data Processing Agreement** satisfying Sri Lanka's PDPA No. 9 of 2022.

This is not a technicality. Procuring against the wrong instrument risks
signing an agreement that does not give the hospital what PDPA requires —
sub-processor disclosure, breach-notification deadlines, and lawful basis
for cross-border transfer. The research recommends keeping "offers a BAA" as
a *filter* (a vendor willing to sign one has the right controls) while making
a PDPA-aligned DPA the contractual requirement. **Please confirm with legal.**

Two other things came out of the research that will shape cost and vendor
choice more than model quality:

1. **Sinhala and Tamil coverage** must be tested with real clinical staff,
   not taken from vendor claims. A provider materially worse in those
   languages is a patient-safety problem.
2. **Emergency escalation must be hard-coded**, not left to model judgement.
   Chest pain, breathing difficulty, stroke symptoms, paediatric emergencies
   and pregnancy complications should route straight to the ETU number.

As a reminder, chatbot development remains blocked until clinical staff
approve the triage logic and disclaimers and legal signs off. Nothing has
been built.

## Weekly summary for manager
Website: The home page is rebuilt against the signed-off design and now
surfaces emergency contact, departments, specialists, and location instead
of placeholder text. Emergency and ambulance numbers are tap-to-dial from
the top of the page.

Patient System groundwork: AI provider research is complete, and it
identified that the project plan names the wrong legal instrument (BAA
rather than a PDPA Data Processing Agreement). Recommend confirming the
approach with legal before any procurement effort continues — and confirming
the chatbot is still in scope at all, given the website is now targeting a
Q1 2027 launch.

Still outstanding from the hospital: accepted insurance providers, real
doctor and facility photos, and a decision on whether News & Events needs a
lightweight CMS. Also still open: switching the repository's Pages source to
"GitHub Actions" so the automated deploy runs.

## Next week plan (Week 8)
- Website: Homepage Finalization — polish, cross-browser and cross-device
  QA, and replace remaining placeholder imagery if photos arrive.
- Groundwork: Inventory System — database schema (stock items, suppliers,
  departments), building on the feature list drafted in Week 5.
