# Changelog

## [1.0.0] - 2026-10-05 First Changelog

### Added
- Docker support: multi-stage `Dockerfile` (Node build, nginx serve), `nginx.conf`, `docker-compose.yml` and `.dockerignore`, serving the site on port 5183.
- `develop.bat` to build and run the project with Docker (`develop.bat stop`, `develop.bat logs`).
- `CLAUDE.md` with repository guidance for Claude Code.

### Existing features
- React + TypeScript + Vite portfolio with Home, About and Projects pages.
- Dark/light theme (MUI + Redux Toolkit).
- English and Traditional Chinese (zh-TW) translations via react-i18next.
- GitHub Pages deployment through GitHub Actions.
