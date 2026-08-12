# ASSETS.md — Asset & License Ledger

This file tracks every non-original asset used in this portfolio, and
documents the status of original assets. Updated as media is added.

## Original assets (Muhammad Ameer Hamza)

| Asset | Type | Status | Notes |
|---|---|---|---|
| Interactive 3D "Mechanical Core" hero | Procedural 3D (code) | Original | Built with Three.js / React Three Fiber directly in this repo — no external model. |
| Playground experiments (particle field, mechanical linkage, typography) | Procedural 3D/CSS (code) | Original | Fully procedural, generated at runtime — no external assets. |
| Favicon & OG cover image | SVG | Original | Simple procedural SVG created for this repo (`public/icons/favicon.svg`, `public/images/og-cover.svg`). |
| Project photography / renders / video | — | **Not yet added** | Real project media (PREPEAK renders, Glas 1700 TS renders, robot photos/video) should be added under `public/images/` and `public/videos/` and referenced from `src/data/projects.ts` as it becomes available. Do not substitute stock or AI imagery and label it as real project work. |
| 3D models (.glb/.gltf) for `/3d` viewer | 3D model | **Not yet added** | The `/3d` page ships with a working, empty-state viewer. Drop optimized `.glb` files into `public/models/` and pass the path to `<ModelViewer modelUrl="..." />`. |

## Third-party software (see LICENSE)

React, React DOM, React Router, Three.js, @react-three/fiber, @react-three/drei,
Framer Motion, Vite, TypeScript — each under its own open-source license
(see `package.json` and each package's own `LICENSE`). These are not
owned by Muhammad Ameer Hamza; only the original code that uses them is.

## Fonts

Space Grotesk and Inter are referenced as the intended typography
system (see `src/styles/tokens.css`). No font files are bundled in
this repo yet — load them via a licensed source (e.g. Google Fonts,
which distributes both under the SIL Open Font License) before
production use, or self-host with the OFL license file included.

## Policy going forward

- Every future image, video, or 3D asset added to this repo must get
  a row in this table: creator, source, URL, license, and where it's
  used.
- AI-generated assets must be labeled as AI-generated in both this
  file and in the project's `origin` field in `src/data/projects.ts`.
- No asset may be sourced from another person's portfolio, Pinterest,
  Instagram, or similar without verified permissive licensing and
  attribution.
