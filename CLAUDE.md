# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Norms

Read `norm/00-manifest.md` (and the files it lists) before starting work, and reply with its handshake sentence. Norms apply to newly added code only; do not refactor existing code to match them. After changes, update `README.md`, `ChangeLog.md` and this file as described in `norm/05-update-document.md` (check `git status` and `git diff` first).

## Overview

Personal portfolio SPA (React 18 + TypeScript + Vite 4, MUI 5, Redux Toolkit, react-i18next). No test framework is configured.

## Commands

- `npm run dev` — Vite dev server; note it passes `--base=/portfolio/`, so the app is served under `/portfolio/`.
- `npm run build` — `tsc && vite build --base=/portfolio/` (GitHub Pages build).
- `npm run build-local` — same but with base `/` (used by the Docker image).
- `npm run lint` / `npm run lint-fix` — ESLint on `src` (zero warnings allowed; `unused-imports` plugin is enabled).
- `develop.bat` — builds and runs the Docker image on http://localhost:5183 (`develop.bat stop`, `develop.bat logs`). It serves a production build via nginx, so changes need a rebuild.

## Architecture

- Entry: `src/main.tsx` → `App.tsx` (MUI `ThemeProvider` switched by the Redux `darkMode` flag, top nav, `WelcomeAnime`, `Loading`, `RouterProvider`, footer).
- Routing (`src/Router.tsx`) uses `createHashRouter`, so URLs are `#/home`, `#/about`, `#/projects`; no server-side rewrite is needed. `/` redirects to `/home`.
- State (`src/service/store.ts`): two slices, `darkMode` (boolean, default dark; this drives the theme) and `theme`. Themes live in `src/theme.ts`.
- i18n: `src/i18n.ts` loads translations at runtime over HTTP from `public/locales/{en,zh-TW}/translation.json` (relative path `./locales/...`). Fallback language is `en`. Add every UI string to both files.
- `src/service/CONST.ts`: `BASE` (from Vite base URL) and `DEV` (`VITE_DEV_MODE`). When `VITE_DEV_MODE=true` (set in `.env`, currently commented out) the `Loading` overlay is skipped.
- Project cards on the Projects page come from `src/assets/projects.json`.
- Layout spacing uses MUI `sx` breakpoint objects (`{ xs, md }`) rather than `@media` blocks; keep theme colors/fonts in `src/theme.ts`.
- Static assets (fonts, `canvas.js` background animation, locales) are in `public/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deployWeb.yml`, which runs `.github/deploy.sh`: `lint-fix`, `build`, then force-pushes `dist` to the `release` branch of `linyejoe2/Portfolio` over SSH. The base path `/portfolio/` is hardcoded in the `build` script for this reason.
