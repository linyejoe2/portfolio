# Portfolio

Personal portfolio site built with React 18, TypeScript, Vite, MUI, Redux Toolkit and react-i18next (English and Traditional Chinese).

## Prerequisites

- Node.js 16+ and npm
- Docker (optional, for `develop.bat`)

## Environment

| Variable | Description |
| --- | --- |
| `VITE_DEV_MODE` | Set to `true` to skip the loading overlay during development. |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server (served under `/portfolio/`). |
| `npm run build` | Type-check and build for GitHub Pages (base `/portfolio/`). |
| `npm run build-local` | Type-check and build with base `/` (used by Docker). |
| `npm run lint` / `npm run lint-fix` | ESLint on `src`. |
| `develop.bat` | Build and run with Docker at http://localhost:5183. Use `develop.bat stop` or `develop.bat logs`. |

## Architecture

- `src/page/` — Home, About, Projects and error pages (hash router, see `src/Router.tsx`).
- `src/components/` — navigation bar, loading/welcome animations and shared helpers.
- `src/service/` — Redux store, constants and shared types.
- `src/assets/projects.json` — project data.
- `public/locales/{en,zh-TW}/` — translation files loaded at runtime.

## Deployment

Pushes to `main` run `.github/deploy.sh` through GitHub Actions, which builds the site and publishes `dist` to the `release` branch.
