# Implementation Plan: OpenSTR Marketing Site

## Overview

Build a fully static, image-first Gatsby + TypeScript + Tailwind marketing site for OpenSTR. Tasks follow the issues.md plan and are ordered to build incrementally — scaffold first, shared components second, homepage sections third, inner pages fourth, then polish and deployment config.

## Tasks

- [x] 1. Scaffold Gatsby + TypeScript + Tailwind project
  - Initialize Gatsby project with TypeScript support (`gatsby-config.ts`, `tsconfig.json`)
  - Install and configure Tailwind CSS with `tailwind.config.js` and global base styles in `src/styles/global.css`
  - Install `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`
  - Create `src/pages/index.tsx`, `src/pages/about.tsx`, `src/pages/why-openstr.tsx`, `src/pages/contribute.tsx`, `src/pages/faq.tsx` as empty stubs
  - _Requirements: 1.1, 1.2, 1.7, 1.8_

- [x] 2. Add image assets and centralized image mapping
  - Copy all source images into `src/images/`
  - Create `src/images/index.ts` exporting all seven images with named exports (`imgOutside`, `imgSunrise`, `imgDaytime`, `imgInsidepool`, `imgHappyguests`, `imgCleaningBefore`, `imgCleaningAfter`)
  - _Requirements: 2.1, 2.4_

- [ ] 3. Build shared components
  - [x] 3.1 Implement `Seo` component using Gatsby Head API
    - Renders `<title>`, `<meta name="description">`, and Open Graph tags (`og:title`, `og:description`, `og:image`)
    - _Requirements: 17.1, 17.2_

  - [ ]* 3.2 Write property test for Seo component
    - **Property 11: Every page always produces complete SEO metadata**
    - **Validates: Requirements 17.1, 17.2**

  - [x] 3.3 Implement `Layout` component
    - Wraps children with `<Header>`, `<main>`, and `<Footer>`; passes SEO props to `Seo`
    - Interface: `LayoutProps { children, title, description?, ogImage? }`
    - _Requirements: 1.3_

  - [ ]* 3.4 Write property test for Layout component
    - **Property 1: Layout wraps any children with header + footer**
    - **Validates: Requirements 1.3**

  - [x] 3.5 Implement `Section` and `Container` components
    - `Section`: consistent vertical padding, accepts `className`, `id`
    - `Container`: max-width constraint with horizontal padding, accepts `narrow` flag
    - _Requirements: 1.4, 1.5_

  - [x] 3.6 Implement `Button` component
    - Renders as `<a>` when `href` provided, `<button>` otherwise
    - Supports `variant: 'primary' | 'secondary'` and `external` flag
    - _Requirements: 1.6_

  - [ ]* 3.7 Write property test for Button component
    - **Property 2: Button primary/secondary variants always differ in class output**
    - **Validates: Requirements 1.6**

- [ ] 4. Implement Header and Footer
  - [x] 4.1 Implement `Header` component
    - Renders OpenSTR wordmark, nav links (Home, About, Why OpenSTR, Contribute, FAQ, GitHub), and mobile hamburger menu with `useState` toggle
    - _Requirements: 15.1, 15.2, 15.3, 15.5_

  - [ ]* 4.2 Write property test for Header component
    - **Property 9: Header always contains all nav links**
    - **Validates: Requirements 15.2, 15.3**

  - [ ]* 4.3 Write property test for mobile menu toggle
    - **Property 10: Mobile menu toggle always changes nav visibility**
    - **Validates: Requirements 15.5**

  - [x] 4.4 Implement `Footer` component
    - Renders nav links and brief project description
    - _Requirements: 15.4_

- [x] 5. Checkpoint — wire Layout into all pages
  - Update all five page stubs to use `Layout` with correct `title` and `description` props
  - Ensure `gatsby build` completes without TypeScript or plugin errors
  - _Requirements: 1.7, 17.1_

- [x] 6. Implement homepage Hero section
  - Build `Hero` component with full-viewport-height background image (`Outside.png` via `StaticImage`), dark gradient overlay, headline text, and two CTA `Button` components (primary: "View on GitHub", secondary: "Explore OpenSTR")
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 6.1 Write unit test for Hero component
    - Assert headline text renders, both CTA links are present with correct hrefs
    - _Requirements: 3.2, 3.3, 3.4_

- [x] 7. Implement Problem and Solution sections
  - Build `ProblemSolution` component with two sequential sub-sections: Problem (fragmented tools, manual coordination, inflexible systems, vendor lock-in) and Solution (self-hosted, open source, customizable, STR + LTR)
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 8. Implement Value Proposition Cards section
  - Build `ValueProps` component rendering six cards from the `VALUE_PROPS` data array in a responsive Tailwind grid (1 col mobile → 2 col tablet → 3 col desktop)
  - _Requirements: 5.1, 5.2, 5.3_

  - [ ]* 8.1 Write property test for ValueProps component
    - **Property 4: ValueProps always renders all 6 card titles**
    - **Validates: Requirements 5.1**

- [x] 9. Implement Property Showcase section
  - Build `PropertyShowcase` component with editorial-style image grid using `StaticImage` for `Insidepool.png`, `Daytime.png`, `Outside.png`, `sunrise.png`; each image must have descriptive alt text
  - _Requirements: 6.1, 6.2, 6.3, 2.3_

  - [ ]* 9.1 Write property test for PropertyShowcase component
    - **Property 5: PropertyShowcase always references all 4 images**
    - **Validates: Requirements 6.1**

  - [ ]* 9.2 Write property test for image alt text
    - **Property 3: Any image component produces non-empty alt text**
    - **Validates: Requirements 2.3, 17.3**

- [x] 10. Implement Cleaning Workflow section
  - Build `CleaningWorkflow` component with three-stage narrative (Before / Process / Ready) using `Cleaningb4.png` and `cleaningafter.png` with descriptive alt text
  - _Requirements: 7.1, 7.2, 7.3_

  - [ ]* 10.1 Write unit test for CleaningWorkflow component
    - Assert both images render with non-empty alt text and three stage labels are present
    - _Requirements: 7.1, 7.2_

- [x] 11. Implement Guest Outcome section
  - Build `GuestOutcome` component with `happyguests.png` as primary image and the exact message: "When the operations are right, the experience feels effortless."
  - _Requirements: 8.1, 8.2, 8.3_

  - [ ]* 11.1 Write unit test for GuestOutcome component
    - Assert exact message string is present in rendered output
    - _Requirements: 8.2_

- [x] 12. Implement Why OpenSTR teaser section
  - Build `WhyOpenstrTeaser` component covering all four ownership arguments (control, no lock-in, flexible workflows, open source) with strong typographic treatment and a CTA linking to `/why-openstr`
  - _Requirements: 9.1, 9.2, 9.3_

  - [ ]* 12.1 Write property test for WhyOpenstrTeaser component
    - **Property 6: WhyOpenstrTeaser always covers all 4 ownership arguments**
    - **Validates: Requirements 9.1**

- [x] 13. Implement Contributor CTA section
  - Build `ContributorCta` component with four contribution pathways (report issues, suggest workflows, contribute code, improve docs), each linking to the appropriate GitHub URL; no fake metrics
  - _Requirements: 10.1, 10.2, 10.3_

  - [ ]* 13.1 Write property test for ContributorCta component
    - **Property 7: ContributorCta links always point to GitHub**
    - **Validates: Requirements 10.1, 10.2**

- [x] 14. Assemble homepage
  - Wire all section components into `src/pages/index.tsx` in order: Hero, ProblemSolution, ValueProps, PropertyShowcase, CleaningWorkflow, GuestOutcome, WhyOpenstrTeaser, ContributorCta
  - _Requirements: 3.1–3.6, 4.1–4.4, 5.1–5.3, 6.1–6.3, 7.1–7.3, 8.1–8.3, 9.1–9.3, 10.1–10.3_

- [x] 15. Checkpoint — homepage complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 16. Implement About page
  - Build `src/pages/about.tsx` with sections covering what OpenSTR is, who it is for (STR/LTR operators), and why it exists
  - _Requirements: 11.1, 11.2, 11.3_

- [x] 17. Implement Why OpenSTR page
  - Build `src/pages/why-openstr.tsx` with expanded narrative covering ownership, flexibility, and self-hosting — deeper than the homepage teaser
  - _Requirements: 12.1, 12.2_

- [x] 18. Implement Contribute page
  - Build `src/pages/contribute.tsx` with sections for who should contribute, how to help (workflows, code, docs), and GitHub links for each pathway
  - _Requirements: 13.1, 13.2, 13.3_

  - [ ]* 18.1 Write property test for Contribute page contributor links
    - **Property 7 (Contribute page): All contribution pathway links point to GitHub**
    - **Validates: Requirements 13.3**

- [x] 19. Implement FAQ page
  - Build `src/pages/faq.tsx` with answers to all five required questions: "What is OpenSTR?", "Is it only for Airbnb?", "Does it support long-term rentals?", "Is it free?", "Can I self-host it?"
  - _Requirements: 14.1, 14.2_

  - [ ]* 19.1 Write property test for FAQ page
    - **Property 8: FAQ page always contains all 5 questions**
    - **Validates: Requirements 14.1**

- [x] 20. Checkpoint — all pages complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 21. Design polish pass
  - Apply consistent Tailwind spacing utilities across all sections
  - Finalize typographic scale (Playfair Display headings, Inter body) via `tailwind.config.js` font extension and Google Fonts or self-hosted font import
  - Review image cropping and `objectFit`/`objectPosition` on all `StaticImage` components
  - Verify mobile layout at 375px and 768px breakpoints
  - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [x] 22. SEO and semantic HTML audit
  - Confirm every page exports a `Head` function with title, description, and Open Graph tags
  - Verify semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`) are used throughout
  - Confirm all images have descriptive alt text
  - _Requirements: 17.1, 17.2, 17.3, 17.4_

- [x] 23. Firebase Hosting configuration
  - Create `firebase.json` pointing `public` as the hosting directory with a 404 page configured
  - Create `.firebaserc` with project configuration
  - _Requirements: 18.1, 18.2_

- [x] 24. Write README
  - Create `README.md` with project overview, local dev setup (`npm install` + `gatsby develop`), Firebase deploy steps, and contribution guide section
  - _Requirements: 19.1, 19.2, 19.3, 19.4_

- [x] 25. Final checkpoint — launch QA
  - Verify all internal navigation links resolve correctly
  - Confirm all seven images load on all pages
  - Confirm no placeholder text ("Lorem ipsum", "TODO") remains
  - Verify all GitHub CTA links point to correct OpenSTR repository URLs
  - Run `gatsby build` and confirm all five routes produce HTML in `public/`
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5_

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use `fast-check` with minimum 100 iterations per property
- Each property test is tagged: `// Feature: openstr-marketing-site, Property {N}: {property_text}`
- Unit tests and property tests are complementary — both should be present where marked
- Checkpoints at tasks 5, 15, 20, and 25 ensure incremental validation
