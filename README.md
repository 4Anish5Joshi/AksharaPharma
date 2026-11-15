# Akshara Pharmaa Website

Modern Angular 21 website for Akshara Pharmaa — nitrosamine impurity reference standards, drug impurity standards, and contact enquiries.

## Pages

- **Home** — brand hero, expertise, solutions, documentation
- **About Us** — company profile, certifications, quality systems
- **Products** — searchable nitrosamine & reference standards catalog
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

## GitHub Pages

Live site: https://4anish5joshi.github.io/AksharaPharma/

Push to `main` builds and deploys automatically via GitHub Actions.

In the repo settings → **Pages** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

Local GitHub Pages build:

```bash
npm run build:gh-pages
```

## Stack

- Angular 21 (standalone components, lazy routes)
- SCSS design system
- Responsive layout for desktop and mobile
