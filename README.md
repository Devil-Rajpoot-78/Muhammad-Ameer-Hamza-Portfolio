# Muhammad Ameer Hamza — Portfolio

A personal portfolio positioning Muhammad Ameer Hamza at the
intersection of 3D, software, engineering, robotics and AI. The site
itself is meant to be a working demonstration of technical ability —
not a template with a name swapped in.

Live: https://devil-rajpoot-78.github.io/Muhammad-Ameer-Hamza-Portfolio/

## Features

- Interactive, procedural 3D hero (Three.js / React Three Fiber) that
  responds to cursor position, with a CSS-only fallback when WebGL is
  unavailable
- Dedicated `/3d` model viewer supporting GLB/GLTF with orbit controls,
  wireframe toggle, and fullscreen
- `/playground` — three live, real-time experiments (instanced particle
  field, procedural mechanical linkage, interactive CSS typography)
- Centralized, typed project database with honest status labeling
  (personal / academic / ongoing / prototype / experiment / concept —
  no fabricated clients or achievements)
- Working project filtering + instant search
- Command palette (`Ctrl/Cmd + K`)
- Contact flow that opens Gmail, Outlook, the default mail client, or
  WhatsApp with a prefilled message — no fake backend email sending
- Adaptive 3D quality based on a coarse device-tier heuristic
- `prefers-reduced-motion` support throughout
- Accessible forms, skip link, focus-visible states, semantic HTML
- SEO: per-page titles/descriptions, Open Graph tags, JSON-LD Person
  schema, sitemap.xml, robots.txt

## Design philosophy

Premium, technical, minimal — closer to an engineering workshop /
digital laboratory than a generic "creative portfolio" template.
Effects are only used where they support usability or storytelling;
see `prompts/` for the art-direction language behind future visual
assets.

## Technology stack

- React 18 + TypeScript + Vite
- React Router
- Three.js + @react-three/fiber + @react-three/drei
- Framer Motion (available for future motion work)
- No backend — the contact flow is entirely client-side

## Project structure

```
src/
  components/   Reusable UI (Nav, Footer, CommandPalette, ProjectCard, ...)
  pages/        Route-level pages
  three/        3D scenes, viewer, playground experiments
  hooks/        useReducedMotion, useWebGLSupport, useDeviceTier, useSEO, ...
  data/         Typed content: profile, projects, skills, experience, nav
  utils/        contact.ts — Gmail/Outlook/mailto/WhatsApp link builders
  types/        Shared TypeScript types
  styles/       Design tokens + global styles
public/
  models/ images/ videos/ icons/
prompts/
  graphic/ images/ video/ looping/ 3d/   Reusable AI-generation prompts
docs/
.github/workflows/deploy.yml             GitHub Pages deploy workflow
```

## Development

```bash
npm install
npm run dev       # local dev server
npm run build      # type-check + production build
npm run preview    # preview the production build
```

## Deployment

Deploys automatically to **GitHub Pages** on every push to `main` via
`.github/workflows/deploy.yml` (Vite build → `actions/deploy-pages`).
`vite.config.ts` sets `base: '/Muhammad-Ameer-Hamza-Portfolio/'` to
match the repo-scoped Pages URL.

**One manual step required:** in the repository's Settings → Pages,
set the source to **GitHub Actions** (this cannot be configured via
the API/commit and must be done once in the repo settings UI).

## Environment variables

This site requires no secrets to build or run. See `.env.example`.

## Content & asset honesty policy

Every project in `src/data/projects.ts` carries an honest `status` and
`origin` field. Nothing claims a client, employer, award, or
commercial contract that doesn't exist. See `ASSETS.md` for the full
asset attribution ledger and `prompts/` for the prompt library used to
generate future visual assets responsibly.

## License

Original code, design and content: proprietary, all rights reserved —
see `LICENSE`. Third-party open-source dependencies remain under their
own licenses.

## Known limitations (as of this build)

- Only real, verified project details are included; the project count
  is intentionally lower than a padded "20 projects" target rather
  than include fabricated work — extend `src/data/projects.ts` as more
  real project media becomes available.
- No real project photography/renders/video/3D models are bundled yet
  — see `ASSETS.md` for what to add and where.
- GitHub Pages source must be manually switched to "GitHub Actions" in
  repo settings before the deploy workflow can publish successfully.
