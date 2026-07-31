# Visual Design & Mockups — Week 4

Per the 78-week worksheet, Week 4's website focus is **Visual Design & Mockups**.
This document formalizes the visual design system already in use across the live
site (built incrementally since Week 1) and extends it as mockup notes for the
two page types not yet built.

## Design System

### Color Palette
| Token | Hex | Used for |
|---|---|---|
| `--color-primary` | `#0b5ea8` | Header, page banners, links, headings, CTA buttons |
| `--color-primary-dark` | `#094a86` | CTA hover state |
| `--color-text` | `#1f2933` | Body text |
| `--color-hero-bg` | `#e8f2fb` | Homepage hero background |
| `--color-card-bg` | `#f8f9fa` | Card background |
| `--color-card-border` | `#e1e4e8` | Card border |
| `--color-input-border` | `#ccd1d5` | Form input borders |
| `--color-footer-bg` | `#1f2933` | Footer background |

These were previously hardcoded throughout `css/style.css`; this week they've
been pulled into CSS custom properties (`:root` block) so the palette is
defined once and consistent everywhere. See the `css/style.css` diff in this
commit.

### Typography
- Font family: Arial / Helvetica, sans-serif (system font, no web font load —
  keeps the site fast on hospital wifi/mobile data).
- Headings: bold, `--color-primary`.
- Body: 1.6 line-height for readability.

### Spacing & Layout
- Content max-width: 1000px, centered.
- Section padding: 3rem 2rem (desktop), tightens on mobile via existing
  media query.
- Card grid: `auto-fit, minmax(220px, 1fr)` — already responsive, no change
  needed.

### Components (already built, catalogued here for reference)
- `.site-header` — sticky top nav, logo + links
- `.hero` — homepage intro band
- `.page-banner` — inner-page title band
- `.card` / `.cards` — grid of content cards, used across Departments,
  Doctors, Services, Insurance, News, Careers
- `.cta` — primary button style
- `form.contact-form` — form field styling

## Mockup Notes — Pages Not Yet Built

### Doctor Profile (individual, built Week 10)
Follows the `.page-banner` + `.section` pattern used everywhere else.
- Page banner: doctor name + specialty
- Card-style bio block: photo placeholder, credentials, department link,
  consultation hours (from the real Specialist directory data gathered in
  Week 2's real-content pass)
- CTA: link back to Departments / Contact for booking

### Department Profile (individual, built Week 9)
- Page banner: department name
- Overview paragraph
- Linked doctors (cards, reusing `.doctor-card` style from Doctors page)
- Linked services (reuses `.card` grid)

No new components are needed for either page — both compose entirely from
the existing card/banner/section system, which keeps the site visually
consistent without a mid-project design detour.

## Stakeholder Sign-Off
Formal design sign-off is Week 5's task (`DESIGN_SIGNOFF.md`) — this document
is the design reference that sign-off will be checked against.
