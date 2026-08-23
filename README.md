# Balasooriya Pvt Hospital — Website

The public-facing website for Balasooriya Hospital (Pvt) Ltd, Puttalam.

**Live:** <https://web-balasooriyahospital.github.io/hospital-website/>

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — emergency bar, hero, quick links, department/doctor/news teasers |
| `about.html` | History, vision, mission, values, certifications, awards |
| `services.html` | Services offered |
| `doctors.html` | All 28 specialists, grouped by field |
| `doctor.html` | Individual doctor profile (`?id=` — rendered from `js/data.js`) |
| `departments.html` | Departments, clinics, diagnostics, and other services |
| `department.html` | Individual department profile (`?id=`) with its doctors |
| `booking.html` | Appointment request form |
| `insurance.html` | Insurance and billing information |
| `news.html` | News, events, and award history |
| `careers.html` | Current vacancies and how to apply |
| `contact.html` | Contact form plus all hospital phone lines |

## Tech Stack

HTML5 / CSS3 / vanilla JS — no build step and no framework. The files in the
repository are the files that ship.

`js/data.js` holds the 28 specialists and 20 departments as records. The
listing pages and the detail pages both read from it, so they cannot drift
apart, and adding a doctor does not mean writing a new HTML file.

## Current State

Real hospital content throughout — address, phone lines, the specialist
directory, departments, vacancies, certifications and awards are all sourced
from balasooriyahospital.lk rather than placeholders.

**Known gaps**, all waiting on the hospital rather than on development:

- Doctor and facility photos are still initial-based placeholders.
- The accepted-insurance-provider list is not published anywhere, so
  `insurance.html` still carries placeholder providers.
- Floor and room numbers for individual departments are not available.
- Whether News & Events needs a lightweight CMS or manual edits is undecided.

**Both forms are front-end only.** There is no backend, so neither the contact
form nor the booking form transmits anything. Each says so plainly on submit
and gives the reception number instead of showing a false confirmation.

## Documentation

| Document | Contents |
|---|---|
| [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md) | Status of all three systems and where it differs from the plan |
| [`docs/DEV_SETUP.md`](docs/DEV_SETUP.md) | Running the site locally, linting, deployment |
| [`docs/SITEMAP.md`](docs/SITEMAP.md) | Full sitemap and per-page content plan |
| [`docs/WIREFRAMES.md`](docs/WIREFRAMES.md) | Layout wireframes for every page template |
| [`docs/VISUAL_DESIGN.md`](docs/VISUAL_DESIGN.md) | Design system — colour, type, spacing, components |
| [`docs/DESIGN_SIGNOFF.md`](docs/DESIGN_SIGNOFF.md) | Design sign-off and handoff package |
| [`docs/IT_SUPPORT_LOG.md`](docs/IT_SUPPORT_LOG.md) | Weekly IT support slots and ticket history |
| `docs/WEEK*_PLAN.md` | Per-week goals checklists |
| `planning/` | Groundwork research and weekly manager summaries |

## Related Systems

- [patient-management-system](https://github.com/Web-Balasooriyahospital/patient-management-system)
  — registration, live queue, staff/RBAC, appointments, visit records
- [hospital-inventory-system](https://github.com/Web-Balasooriyahospital/hospital-inventory-system)
  — stock tracking, expiry alerts, requisitions, usage reporting

## Next Steps

- Replace placeholder photos once the hospital provides them.
- Connect the contact and booking forms to a backend or email service.
- Build out the remaining department profile entries as details are confirmed.
