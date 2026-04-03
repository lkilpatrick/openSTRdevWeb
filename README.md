# OpenSTR Marketing Site

The marketing site for [OpenSTR](https://github.com/lkilpatrick/openstr) — open-source, self-hosted cleaning management for short-term rental hosts.

**Live site: [openstr.dev](https://openstr.dev)**

---

## About

This repo contains the marketing site only. For the actual OpenSTR platform (API, admin panel, mobile app), see the [main repository](https://github.com/lkilpatrick/openstr).

The site is built with Gatsby, TypeScript, and Tailwind CSS. Fully static, no CMS, no server runtime. Deployed to Firebase Hosting via GitHub Actions on every push to `main`.

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
npm install
npm run develop
```

Site runs at `http://localhost:8000`.

```bash
npm run build    # Production build → public/
npm run serve    # Preview production build locally
npm run clean    # Clear Gatsby cache
```

---

## Deployment

Pushes to `main` automatically build and deploy to Firebase Hosting via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy manually:

```bash
npm run build
firebase deploy --only hosting --project openstrdev
```

Requires the Firebase CLI and a valid `FIREBASE_TOKEN`.

---

## Project Structure

```
src/
  components/   # Shared UI (Layout, Header, Footer, Hero, etc.)
  images/       # Optimized images via gatsby-plugin-image
  pages/        # One file per route (/, /about, /why-openstr, /contribute, /faq)
  styles/       # Global CSS — Tailwind base + Google Fonts
source/         # Original source images (not served directly)
```

---

## Contributing

Content changes: edit the relevant file in `src/pages/` or `src/components/`.

Open an issue or pull request on this repo, or on the [main OpenSTR repository](https://github.com/lkilpatrick/openstr).
