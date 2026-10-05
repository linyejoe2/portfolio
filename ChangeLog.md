# Changelog

All notable changes to this project are documented here, following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.1] - 2026-10-05 - Responsive layout cleanup

Author: Randy Lin

### Changed
- Home: replaced hard-coded paddings and media queries with MUI breakpoint values, removed the empty spacer row, and made the avatar a round, size-capped image.
- Projects: padding and grid gap now shrink on small screens; cards use auto height on phones.
- Footer top margin reduced from 100px to 64px. The theme is unchanged.

## [1.0.0] - 2026-10-05 - First Changelog

Author: Randy Lin

### Added
- Docker support: multi-stage `Dockerfile`, `nginx.conf`, `docker-compose.yml` and `.dockerignore`, serving the site on port 5183.
- `develop.bat` to build and run the project with Docker (`stop` and `logs` arguments).
- `CLAUDE.md` with repository guidance for Claude Code.
- Baseline features: Home, About and Projects pages, dark/light theme, English and zh-TW translations, GitHub Pages deployment.
