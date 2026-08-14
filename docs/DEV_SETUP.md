# Development Setup

How to run, check, and deploy the Balasooriya Pvt Hospital website.

The site is plain HTML/CSS/JS with no build step — the files you edit are the
files that ship. Everything below is optional tooling to make working on it
easier and to catch mistakes before they reach the live site.

## Running the site locally

You need a local web server. Opening `index.html` directly with `file://`
mostly works, but the intro video and `sessionStorage` behave differently, so
use a server when testing those.

**With Node (preferred):**

```bash
npm run dev
```

Serves on <http://localhost:8000>.

**With Python (no Node install needed):**

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Checking your work before committing

```bash
npm run lint
```

Runs both checks:

- `npm run lint:html` — validates markup on every page
- `npm run lint:css` — checks `css/style.css` for errors and style issues

Both use `npx --yes`, so there is no install step; the tools are fetched on
first run and cached after that.

### Manual checks that linting won't catch

- **Mobile layout.** Resize to 375px wide (or use device emulation). The nav
  should collapse behind the ☰ button and the header should stay around 60px
  tall.
- **Intro video.** Opens full-screen on the home page, then fades out to
  reveal the site. It only shows once per browser session — clear
  `sessionStorage` (or open a new private window) to see it again.
- **Every page's nav.** All nine pages share the same header markup; if you
  change it, change it everywhere.

## Project layout

```
├── *.html              9 pages, each with the same header/footer markup
├── css/style.css       all styling; design tokens live in :root at the top
├── js/main.js          contact form, intro video, mobile nav
├── images/             logo and photos
├── videos/intro.mp4    the full-screen intro clip
├── docs/               design system, wireframes, sitemap, plans
└── planning/           groundwork research and weekly summaries
```

## Deployment

The site deploys to GitHub Pages from `master` automatically — see
`.github/workflows/deploy.yml`. Pushing to `master` publishes to:

<https://web-balasooriyahospital.github.io/hospital-website/>

There is no separate staging environment yet. Until there is, use a local
server for review and only push changes you are happy to have live.

## Conventions

- `.editorconfig` sets 2-space indentation, UTF-8, and LF line endings.
- Colors, spacing, and type sizes are CSS custom properties defined in
  `:root` — use the tokens rather than hardcoding values. See
  `docs/VISUAL_DESIGN.md`.
- Media queries live at the end of `style.css` so they override the base
  rules. Adding one higher up in the file will silently not apply.
