# Project Structure Notes

## Purpose

This document explains how the project is organized and where future content should go.

## Entry Pages

- `index.html`: homepage with hero, news, selected publications, reserved projects, and research areas.
- `about.html`: education and methodology.
- `publications.html`: publication timeline.
- `contact.html`: contact page with links and mail form.
- `projects.html`: reserved standalone projects page.
- `experience.html`: reserved standalone experiences page.
- `news.html`: reserved standalone updates page shell.

## Source Layout

- `src/js/config.js`: content source of truth.
- `src/js/script.js`: UI rendering and interaction logic.
- `src/css/style.css`: complete site styling.

## Content Model

Homepage content is split into four groups:

- `news`: latest updates list.
- `featuredPublications`: publication cards.
- `ongoingProjects`: reserved project cards.
- `researchAreas`: research topic cards.

About page content is split into:

- `education`
- `skills`

## Editing Guidance

- Add or revise text in `config.js` first.
- Only edit `script.js` when the rendering behavior or page logic needs to change.
- Only edit `style.css` when layout, typography, spacing, color, or responsiveness needs to change.

## Reserved Architecture

The project keeps blank standalone pages and placeholder cards intentionally. They exist so future content can be added without changing navigation, URLs, or layout patterns.

## Suggested Next Expansions

- Fill `projects.html` with full project summaries, datasets, and methods.
- Fill `experience.html` with research assistant, teaching assistant, and fieldwork experience.
- Add downloadable publication files or abstract popups if needed.
