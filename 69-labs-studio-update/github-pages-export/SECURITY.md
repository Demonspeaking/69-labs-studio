# Security

This repository contains a static public portfolio. It intentionally has no
authentication, database, payment flow, form handler, or API credentials.

No website is unhackable. The practical goal is to minimize the attack surface,
keep dependencies patched, protect the GitHub account, and avoid publishing
secrets.

## Repository rules

- Never commit passwords, API keys, private tokens, environment files, personal
  documents, or recovery codes.
- Keep two-factor authentication or a passkey enabled on the GitHub account.
- Review Dependabot pull requests and the GitHub Actions log before merging.
- Keep the deployment workflow's permissions limited to repository read access,
  Pages deployment, and the required identity token.
- Verify ownership of the custom domain in GitHub to reduce domain-takeover risk.
- Keep **Enforce HTTPS** enabled in GitHub Pages.

Public reporting guidance is available at
`https://69labstudio.online/security.html` and
`https://69labstudio.online/.well-known/security.txt`.
