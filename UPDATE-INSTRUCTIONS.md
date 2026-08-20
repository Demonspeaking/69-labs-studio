# Update 69 Labs Studio

This package matches the current GitHub repository layout. It contains the updated website in `github-pages-export` and the deployment workflow in `.github/workflows/main.yml`.

## 1. Upload the update

1. Extract the ZIP on the computer.
2. Open the extracted `69-labs-studio-update` folder.
3. Open `https://github.com/Demonspeaking/69-labs-studio` and select the `main` branch.
4. Choose **Add file → Upload files**.
5. Drag both folders—`.github` and `github-pages-export`—plus this instruction file into GitHub.
6. Confirm that GitHub shows the existing files as changed/replaced.
7. Use the commit message `Update portfolio, SEO and security`, then commit directly to `main`.
8. Open **Actions** and wait for **Deploy 69 Labs Studio to GitHub Pages** to finish with a green checkmark.

Do not upload the ZIP itself. Do not delete the existing repository.

## 2. Connect 69labstudio.online

In the repository, open **Settings → Pages**. Under **Custom domain**, enter:

```text
69labstudio.online
```

At the DNS provider, remove conflicting records for `@` and `www`, then add:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | demonspeaking.github.io |

DNS changes can take time. When GitHub issues the certificate, enable **Enforce HTTPS** in **Settings → Pages**.

For additional takeover protection, verify `69labstudio.online` under the GitHub account's **Settings → Pages → Add a domain**.

## 3. Register with Google Search Console

1. Open Google Search Console.
2. Add a **Domain** property: `69labstudio.online`.
3. Google will provide a TXT verification record. Add that TXT record at the DNS provider.
4. After verification, open **Sitemaps** and submit:

```text
https://69labstudio.online/sitemap.xml
```

5. Open **URL inspection**, inspect `https://69labstudio.online/`, and select **Request indexing**.

The site already includes its sitemap, robots rules, canonical URLs, social-preview metadata, structured profile data, privacy page, security policy, and search-friendly identity connections. Search visibility and third-party trust scores will still take time; no file can create instant domain reputation.
