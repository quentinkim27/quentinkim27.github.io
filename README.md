# Personal Site

Static academic personal site for Chengkun Jin. The project is designed for direct hosting on GitHub Pages, Netlify, Vercel static hosting, or any ordinary web server without a build step.

## Features

- Pure static HTML, CSS, and JavaScript.
- Centralized content configuration in `src/js/config.js`.
- Bilingual rendering support for English and Chinese.
- Reusable rendering logic for homepage sections, publications, about, and contact.
- Reserved placeholder sections for future projects and standalone pages.

## Project Structure

```text
personal site/
├─ about.html
├─ contact.html
├─ index.html
├─ news.html
├─ projects.html
├─ publications.html
├─ experience.html
├─ README.md
├─ docs/
│  └─ PROJECT_STRUCTURE.md
├─ assets/
│  ├─ avatar.png
│  └─ CV.docx
└─ src/
   ├─ css/
   │  └─ style.css
   └─ js/
      ├─ config.js
      └─ script.js
```

## Content Editing

Most routine updates should happen in `src/js/config.js`.

- Site metadata: `USER_CONFIG.site`
- Profile text and typing effect: `USER_CONFIG.profile`
- Navigation: `USER_CONFIG.nav`
- Homepage news: `USER_CONFIG.news`
- Selected publications: `USER_CONFIG.featuredPublications`
- Reserved project cards: `USER_CONFIG.ongoingProjects`
- Research area cards: `USER_CONFIG.researchAreas`
- Publications timeline: `USER_CONFIG.publications`
- About page sections: `USER_CONFIG.education`, `USER_CONFIG.skills`

## Reserved Sections

The project intentionally keeps several placeholders so the site can expand without structural rewrites.

- `ongoingProjects` on the homepage is currently a reserved card area.
- `projects.html` and `experience.html` are available as standalone pages for future content.
- `news.html` remains available as a spare static page shell if a dedicated updates page is needed later.

## Local Preview

Because this is a static site, you can preview it with any static server.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. In repository settings, enable GitHub Pages.
3. Choose the branch and root directory that contains these files.
4. If the site is served from a subpath, keep asset paths relative as they are now.

## Notes

- The site does not require bundling or package installation.
- Styling lives in `src/css/style.css`.
- Rendering logic lives in `src/js/script.js`.
- Content should stay in `src/js/config.js` so presentation and data remain separate.
