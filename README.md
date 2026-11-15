# Akshara Pharmaa Website

Modern Angular 21 website for Akshara Pharmaa — nitrosamine impurity reference standards, drug impurity standards, and contact enquiries.

## Pages

- **Home** — brand hero, expertise, solutions, documentation
- **About Us** — company profile, certifications, quality systems
- **Products** — searchable nitrosamine & reference standards catalog
- **Consumables** — filtration, HPLC/GC lab supplies
- **Contact Us** — enquiry form and office details

## Develop

```bash
npm start
```

Open `http://localhost:4200/`.

## Build

```bash
npm run build
```

Output: `dist/akshara-pharma/browser/`

## Deploy to aksharapharmaa.in (recommended)

Use **Netlify** or **Vercel** so the GitHub repo can stay **private** (no GitHub Pro needed).

### Option A — Netlify (recommended)

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up / log in
2. **Add new site → Import an existing project → GitHub**
3. Authorize Netlify and select the **AksharaPharma** repo (private is fine)
4. Confirm settings (already in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist/akshara-pharma/browser`
5. Deploy
6. **Domain management → Add custom domain** → `aksharapharmaa.in`
7. Netlify shows DNS records — add them in **GoDaddy → DNS**:
   - Usually a **CNAME** for `www` → `something.netlify.app`
   - And **A/ALIAS/ANAME** or Netlify DNS guidance for the root `@`
8. Wait for SSL (HTTPS) to become active

### Option B — Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign up / log in
2. **Add New Project → Import** the GitHub repo
3. Framework: Other (or leave auto); settings are in `vercel.json`
4. Deploy
5. **Settings → Domains** → add `aksharapharmaa.in`
6. Add the DNS records Vercel shows in **GoDaddy DNS**
7. Wait for HTTPS

### GoDaddy tip

Use the DNS records **Netlify/Vercel gives you**, not GitHub Pages A records.  
Remove old GitHub Pages A/CNAME records if you switch hosts.

## Optional: GitHub Pages preview

Still available at `https://4anish5joshi.github.io/AksharaPharma/` if the Actions workflow is enabled.

```bash
npm run build:gh-pages
```

## Stack

- Angular 21 (standalone components, lazy routes)
- SCSS design system
- Responsive layout for desktop and mobile
