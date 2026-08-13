# Vineet Yadav — 69 Labs Studio

Static React/Vite source for Vineet's personal project, achievement, and update archive.

## Publish on GitHub Pages

1. Create a **public** GitHub repository named exactly `69-labs-studio`.
2. Upload everything inside this folder to the repository. Do not upload the enclosing ZIP or parent folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy 69 Labs Studio to GitHub Pages” to finish.
6. Visit `https://demonspeaking.github.io/69-labs-studio/`.

## Update later

Edit the files in `src`, commit the changes, and push to the `main` branch. The GitHub Actions workflow automatically rebuilds and publishes the site.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Search setup after publishing

Add `https://demonspeaking.github.io/69-labs-studio/` to Google Search Console, submit `sitemap.xml`, and request indexing for the homepage.

If the GitHub username, repository name, or domain changes, update the canonical URL and structured data in `index.html`, plus the URLs in `public/robots.txt` and `public/sitemap.xml`.

Copyright © 2026 Vineet Yadav. All rights reserved.
