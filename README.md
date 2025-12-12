# Ningxia Hengkang Website (Next.js + Tailwind + i18n + Git-based CMS)

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000/en or http://localhost:3000/zh

## Content
All content is stored in:
- `content/en/...`
- `content/zh/...`

Content is validated by Zod schemas in `lib/content/schemas.ts`.
If content is invalid, build will fail with a clear error.

## CMS (Decap CMS)
CMS is available at:
- `/admin`

### Important
Decap CMS needs a compatible Git backend:
- Netlify (Git Gateway) is the simplest
- Or configure Decap to use GitHub OAuth backend (see Decap docs)

## Environment
Set the public site URL for sitemap:
- `NEXT_PUBLIC_SITE_URL=https://www.hengkangchina.com`

## Deployment options
### Recommended: Vercel
1) Push to GitHub
2) Import repo in Vercel
3) Add `NEXT_PUBLIC_SITE_URL` environment variable

### GitHub Pages (static export)
This project uses dynamic routes; you would need a static export setup and route generation.
Vercel is recommended for best performance and i18n routing.

## Notes
- The contact form is a UI stub; connect it to email/CRM/API.
- Replace placeholder images/PDFs in `public/uploads`.
