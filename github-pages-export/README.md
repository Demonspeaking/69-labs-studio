# Vineet Yadav — 69 Labs Studio

Static React/Vite source for Vineet Yadav's personal portfolio, education, project archive, and public profiles.

## Existing GitHub repository structure

The repository is intentionally arranged as:

```text
69-labs-studio/
├── .github/workflows/main.yml
└── github-pages-export/
```

The workflow installs and builds the site from `github-pages-export`, then deploys the generated `dist` directory to GitHub Pages.

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

1. Confirm `https://69labstudio.online/` opens successfully.
2. Add a **Domain property** for `69labstudio.online` in Google Search Console.
3. Copy Google's TXT verification record into the domain's DNS settings.
4. Submit `https://69labstudio.online/sitemap.xml` in Search Console.
5. Inspect `https://69labstudio.online/` and request indexing.

## Connect the custom domain

The build includes `public/CNAME` for `69labstudio.online`. In the GitHub repository, open **Settings → Pages**, enter `69labstudio.online` under **Custom domain**, save it, and enable **Enforce HTTPS** after the certificate is ready.

At the DNS provider, remove conflicting records and add the GitHub Pages records shown in GitHub's current custom-domain instructions. Verify the domain in the GitHub account before connecting it to reduce takeover risk.

If the domain changes, update the canonical and structured-data URLs in `index.html`, plus `public/CNAME`, `public/robots.txt`, `public/sitemap.xml`, and `public/.well-known/security.txt`.

Copyright © 2026 Vineet Yadav. All rights reserved.
