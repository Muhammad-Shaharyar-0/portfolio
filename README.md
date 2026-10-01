# Portfolio

Live site: https://muhammad-shaharyar-0.github.io/portfolio/

React (Create React App), deployed to GitHub Pages.

## Editing content
Everything on the page (bio, projects, skills, certificates, links) lives in `src/portfolio.js`.
Project videos can be a file in `public/videos` or a YouTube link.

## Analytics (GoatCounter, free, no cookies)
1. Create a free site at https://www.goatcounter.com and pick a code, e.g. `shaharyar`.
2. Put that code in `analytics.goatcounterCode` in `src/portfolio.js`, then deploy.
3. Open `https://<code>.goatcounter.com` to see visits, referrers, and events:
   `view/<section>` (section scrolled into view), `video/<project>` (demo played),
   `link/...` (clicks on résumé, LinkedIn, GitHub, email, store and source links),
   `skill/...`, `filter/...`, `cert/...`, `nav/...`.

## Commands
- `npm start` runs the site locally
- `npm run deploy` builds and publishes to GitHub Pages
