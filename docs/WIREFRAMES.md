# Wireframes — Week 3 (Wk 3 of 35)

Per the worksheet, Week 3's website focus is **Wireframes**. This documents the
layout structure for every page template on the site — both the templates
already built (Weeks 1–2, as a reference so future pages stay consistent) and
the two templates still to be built (individual Doctor and Department pages,
planned for Weeks 9–10).

## Shared layout (every page)
```
+--------------------------------------------------------------+
| [Logo]      Home About Services Doctors Departments ... (nav)|
+--------------------------------------------------------------+
|                         <page content>                       |
+--------------------------------------------------------------+
|              (c) 2026 Balasooriya Pvt Hospital                |
+--------------------------------------------------------------+
```
Sticky header, single-column content max-width 1000px, footer pinned at
bottom. Already built in `css/style.css` (`.site-header`, `.section`,
`.site-footer`).

## Home (built — index.html)
```
+--------------------------------------------------------------+
| Header / nav                                                 |
+--------------------------------------------------------------+
| HERO (background photo)                                      |
|   H1 tagline                                                  |
|   subtext                                                      |
|   [ Book an Appointment ]                                      |
+--------------------------------------------------------------+
| "Why Choose Us"                                                |
|   [card] [card] [card]                                         |
+--------------------------------------------------------------+
| Footer                                                          |
+--------------------------------------------------------------+
```

## List templates (built — doctors.html, departments.html, services.html)
```
+--------------------------------------------------------------+
| Header / nav                                                 |
+--------------------------------------------------------------+
| Page banner (H1 title)                                        |
+--------------------------------------------------------------+
| Section heading (e.g. "Consultant Physicians")                |
|   [card] [card] [card] [card]   <- grid, wraps responsively   |
| Section heading                                                |
|   [card] [card] [card]                                         |
+--------------------------------------------------------------+
| Footer                                                          |
+--------------------------------------------------------------+
```
Card = photo/icon + name + one-line specialty/description, optionally a link
to a detail page (doctor/department profile — see below).

## Doctor Profile (not yet built — planned Week 10)
```
+--------------------------------------------------------------+
| Header / nav                                                 |
+--------------------------------------------------------------+
| Page banner: Dr. [Name]                                        |
+--------------------------------------------------------------+
| [ Photo ]   Dr. [Name]                                         |
|             [Specialty]                                        |
|             Department: [linked department]                    |
|             Consulting hours: [days/times]                     |
+--------------------------------------------------------------+
| Bio / qualifications (once provided)                            |
+--------------------------------------------------------------+
| Related department card -> link back to Departments             |
+--------------------------------------------------------------+
| Footer                                                          |
+--------------------------------------------------------------+
```
Linked from each doctor card on `doctors.html` once built. Reuses `.card` +
`.doctor-photo` styling already in `css/style.css`.

## Department Profile (not yet built — planned Week 9)
```
+--------------------------------------------------------------+
| Header / nav                                                 |
+--------------------------------------------------------------+
| Page banner: [Department Name]                                 |
+--------------------------------------------------------------+
| Description of the department / services offered                |
+--------------------------------------------------------------+
| "Doctors in this department"                                    |
|   [doctor card] [doctor card]   <- links to Doctor Profile      |
+--------------------------------------------------------------+
| Location/floor (once provided)                                  |
+--------------------------------------------------------------+
| Footer                                                          |
+--------------------------------------------------------------+
```
Linked from each department card on `departments.html`.

## Contact (built — contact.html)
```
+--------------------------------------------------------------+
| Header / nav                                                 |
+--------------------------------------------------------------+
| Page banner: Contact Us                                        |
+--------------------------------------------------------------+
| "Send Us a Message"          | "Hospital Details"               |
|   Name                        |  Address                        |
|   Email                       |  Hours                          |
|   Message                     |  Phone lines (hotline/ETU/etc.) |
|   [ Send Message ]            |  Email                          |
+--------------------------------------------------------------+
| Footer                                                          |
+--------------------------------------------------------------+
```
Currently stacked single-column on mobile and desktop (`.contact-form` +
`.contact-details`); a future refinement could place these side-by-side on
wide screens — noted for Week 15 (Mid-Project Review & Full-Site QA Pass 1).

## Notes carried into Week 4 (Visual Design & Mockups)
- Doctor and Department detail pages are wireframed but not built — build
  target is Weeks 9–10 per `docs/SITEMAP.md`.
- Contact page's two-column opportunity on desktop is noted, not required
  for MVP.
