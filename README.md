# OpenSTR Marketing Site

Premium, image-first marketing site for [OpenSTR](https://github.com/openstr/openstr) — an open-source, self-hosted rental property management platform.

Built with Gatsby, TypeScript, and Tailwind CSS. Fully static, no CMS, no server runtime.

---

## Local Development

**Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start development server
npm run develop
```

The site will be available at `http://localhost:8000`.

```bash
# Type check
npm run typecheck

# Build for production
npm run build

# Preview production build locally
npm run serve
```

---

## Project Structure

```
src/
  components/     # Shared UI components (Layout, Header, Footer, Section, Container, Button, etc.)
  images/         # Source images (processed by gatsby-plugin-image)
  pages/          # Gatsby pages — one file per route
  styles/         # Global CSS (Tailwind base import + Google Fonts)
gatsby-config.ts  # Gatsby plugin configuration
tailwind.config.js
tsconfig.json
firebase.json     # Firebase Hosting config
```

---

## Deployment

The site deploys to Firebase Hosting from the `public/` build output.

**Prerequisites:** [Firebase CLI](https://firebase.google.com/docs/cli) installed and authenticated.

```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Authenticate
firebase login

# Build the site
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

Update `.firebaserc` with your Firebase project ID before deploying.

---

## Contributing

Contributions to the marketing site are welcome. The same principles that apply to OpenSTR apply here: clear code, honest copy, and no unnecessary complexity.

- **Content changes:** Edit the relevant page in `src/pages/` or component in `src/components/`
- **Design changes:** Tailwind utility classes throughout — no separate CSS files
- **Images:** Add to `src/images/` and reference via `StaticImage` with a descriptive `alt` attribute

Open an issue or pull request on the [OpenSTR GitHub repository](https://github.com/openstr/openstr).
