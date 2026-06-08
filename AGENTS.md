# Sóbichos — single-page marketing landing in React + Tailwind
This project is a SSR React Router 7 landing page built from the in-repo starter under template/. Imagery and copy come from extracted mockup assets and crawled site pages; see plan.md § Assets and § Copy and content data. The project root ships with design.md, theme.md, plan.md, AGENTS.md, the original mockup image, and docs/ references — consult these instead of re-fetching upstream.

## Project structure
- app/ — application code (components, sections, routes, styles).
- app/routes.ts — explicit route registry (framework mode).
- app/routes/ — route modules; home.tsx renders the landing composition.
- app/root.tsx — document shell (html/head/body) and shared layout.
- app/app.css — Tailwind v4 tokens in @theme and global styles.
- public/ — static assets served at site root (/images, /images/icons).
Project-specific additions are listed in plan.md § Folder layout — do not duplicate them here.

## Setup commands
- npm install — install deps.
- npm run dev — start the dev server.
- npm run build — create the SSR build in ./build/.
- npm run start — serve the production build.
- npm run typecheck — generate route types and run TypeScript.
There is no npm run lint and no test runner in this template. If you need either, propose adding it in a separate PR — do not bolt it onto an unrelated change.

## Code style
- Function components only, TypeScript strict.
- Filenames: kebab-case.tsx for components/sections; kebab-case.ts for data/lib.
- Import order: React → external packages → ~/ alias imports → relative.
- Always use the ~/* alias (maps to app/*) instead of ../../.
- Tailwind class ordering: layout → spacing → typography → color → state. Prefer tokenized classes (text-primary) over raw hex.

## Styling and design tokens
Tokens live in app/app.css inside @theme blocks. Update colors, fonts, radii, shadows centrally there — never inline raw hex, font names, or radii in JSX. The current token set is defined in plan.md § Design tokens and derived from theme.md at the project root; when design changes, update theme extraction upstream and adjust tokens — do not guess.

## Routes
app/routes.ts is the explicit registry. To add a route you must add an entry there and create a file under app/routes/. There is no filename-based routing. See plan.md § Build steps for what the current routes render.

## Assets
Public assets live under public/images/ and public/images/icons/. Canonical paths are listed in plan.md § Assets. Reference them as /images/<file> in JSX. Never reference upstream URLs — binaries are already on disk.

## Testing
No test framework is configured in this template. Acceptance criteria are: npm run typecheck clean and the manual checklist in plan.md § Verification.

## Accessibility
Alt text is required for meaningful images; decorative icons must be aria-hidden. Maintain heading order (one h1). Provide :focus-visible outlines. Meet contrast minima (4.5:1 body, 3:1 large headings). See plan.md § Accessibility.

## Pull request guidelines
- Title: feat(<area>): … / fix(<area>): … / chore(<area>): …
- Body must include: what changed, before/after screenshots for visual diffs, a11y check note, and output of npm run typecheck.

## Things not to do
- Don't run npm create vite@latest, npx create-react-app, or any other scaffolder. The project starts from a copy of template/.
- Don't create tailwind.config.ts, tailwind.config.js, or postcss.config.js. Tailwind v4 with the Vite plugin reads tokens from @theme.
- Don't put files under src/. This template uses app/.
- Don't add index.html. React Router framework mode owns the document via app/root.tsx.
- Don't switch the stack to Next.js, Remix-classic, or plain Vite. The stack is fixed.
- Don't propose a linter/formatter setup inside the build plan; mention it only as an optional separate follow-up.
- Don't introduce a UI library (shadcn, MUI, Chakra, etc.) unless the design demands it AND the plan flags it explicitly under § Stack as a deviation.
- Don't introduce a UI library without updating plan.md § Stack first. Don't hardcode copy that has a home in app/data/ (see plan.md § Copy and content data). Don't commit secrets or .env files.

## When you're stuck
Re-read plan.md § Build steps for the area you’re touching. Ask the human before adding dependencies or changing design tokens. Keep changes scoped; prefer updating data in app/data/* and tokens in app/app.css over sprinkling constants through JSX.