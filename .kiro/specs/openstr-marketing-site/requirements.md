# Requirements Document

## Introduction

OpenSTR is an open-source, self-hosted short-term and long-term rental property management platform. This document defines the requirements for a premium, image-first marketing site that communicates the value of OpenSTR to property operators, developers, and contributors. The site must feel like a high-end coastal real estate or Airbnb property brand, not a generic SaaS landing page. It is built with Gatsby + TypeScript + Tailwind CSS, fully static, with no CMS or server runtime.

## Glossary

- **OpenSTR**: The open-source rental property management platform being marketed
- **Site**: The Gatsby-based static marketing website
- **Operator**: A property owner or manager who uses OpenSTR to manage short-term or long-term rentals
- **Contributor**: A developer or community member who contributes to the OpenSTR open-source project
- **Hero**: The full-width, image-first section at the top of the homepage
- **Section**: A distinct content block within a page
- **CTA**: Call-to-action button or link
- **STR**: Short-term rental
- **LTR**: Long-term rental
- **Gatsby**: The static site generator used to build the Site
- **Tailwind**: The utility-first CSS framework used for styling
- **Firebase**: The hosting platform used to deploy the Site
- **Layout**: The shared wrapper component providing consistent header, footer, and page structure
- **Container**: A shared component that constrains content width and applies consistent horizontal padding

---

## Requirements

### Requirement 1: Project Scaffold

**User Story:** As a developer, I want a clean Gatsby + TypeScript + Tailwind project scaffold, so that I can build and maintain the marketing site with a consistent structure.

#### Acceptance Criteria

1. THE Site SHALL be built using Gatsby with TypeScript support enabled.
2. THE Site SHALL integrate Tailwind CSS for all styling.
3. THE Site SHALL include a shared Layout component that wraps all pages with a consistent header and footer.
4. THE Site SHALL include a shared Section component for consistent vertical spacing between content blocks.
5. THE Site SHALL include a shared Container component for consistent horizontal content width constraints.
6. THE Site SHALL include a shared Button component supporting primary and secondary variants.
7. THE Site SHALL expose the following URL routes: `/`, `/about`, `/why-openstr`, `/contribute`, `/faq`.
8. THE Site SHALL contain no unnecessary dependencies beyond Gatsby, TypeScript, Tailwind, and their required plugins.

---

### Requirement 2: Image Asset Integration

**User Story:** As a developer, I want all source images organized and accessible, so that they can be used throughout the site with proper responsive handling.

#### Acceptance Criteria

1. THE Site SHALL store all source images (`cleaningafter.png`, `Cleaningb4.png`, `Daytime.png`, `happyguests.png`, `Insidepool.png`, `Outside.png`, `sunrise.png`) in a dedicated image directory.
2. THE Site SHALL use Gatsby image processing (gatsby-plugin-image or equivalent) to serve responsive, optimized images.
3. WHEN an image is rendered, THE Site SHALL include descriptive alt text for each image.
4. THE Site SHALL provide a centralized image mapping or import structure so images are referenced consistently across components.

---

### Requirement 3: Homepage Hero Section

**User Story:** As a property operator visiting the site, I want to see a premium full-bleed hero image with a clear headline and CTAs, so that I immediately understand what OpenSTR is and feel compelled to explore further.

#### Acceptance Criteria

1. THE Hero SHALL display a full-width, full-viewport-height background image using `Outside.png` or `sunrise.png`.
2. THE Hero SHALL overlay the headline: "Manage your rental property on software you control".
3. THE Hero SHALL include a primary CTA linking to the OpenSTR GitHub repository labeled "View on GitHub".
4. THE Hero SHALL include a secondary CTA linking to the `/why-openstr` page labeled "Explore OpenSTR".
5. WHEN viewed on a mobile device, THE Hero SHALL remain fully responsive with readable text and accessible CTA buttons.
6. THE Hero SHALL apply a text overlay treatment (e.g., dark gradient or semi-transparent layer) so that headline text is legible over the background image.

---

### Requirement 4: Problem and Solution Sections

**User Story:** As a property operator, I want to read a clear narrative about the problems OpenSTR solves, so that I understand why it exists and how it helps me.

#### Acceptance Criteria

1. THE Site SHALL include a Problem section listing the following pain points: fragmented tools, manual coordination, inflexible systems, and vendor lock-in.
2. THE Site SHALL include a Solution section describing OpenSTR as: self-hosted, open source, customizable, and supporting both STR and LTR.
3. THE Problem section and Solution section SHALL appear sequentially on the homepage to form a clear narrative flow.
4. WHEN viewed on any screen size, THE Problem and Solution sections SHALL remain readable with strong typographic hierarchy.

---

### Requirement 5: Value Proposition Cards

**User Story:** As a property operator, I want to see a concise grid of value propositions, so that I can quickly understand the key benefits of OpenSTR.

#### Acceptance Criteria

1. THE Site SHALL display the following six value proposition cards: "Hosted by you", "Free and open source", "Custom workflows", "Built for operators", "Short + long-term rentals", "Contributor-friendly".
2. THE Value Proposition section SHALL use a responsive grid layout that adapts from one column on mobile to two or three columns on larger screens.
3. THE Value Proposition cards SHALL use elegant, minimal styling consistent with the premium brand aesthetic.

---

### Requirement 6: Property Showcase Section

**User Story:** As a property operator, I want to see a visually rich showcase of property imagery, so that the site communicates the lifestyle and quality associated with using OpenSTR.

#### Acceptance Criteria

1. THE Property Showcase section SHALL display the following images: `Insidepool.png`, `Daytime.png`, `Outside.png`, `sunrise.png`.
2. THE Property Showcase section SHALL use an image-first, editorial-style layout (e.g., full-bleed, mosaic, or large-format grid).
3. WHEN viewed on mobile, THE Property Showcase section SHALL remain visually coherent and not break the layout.

---

### Requirement 7: Cleaning Workflow Section

**User Story:** As a property operator, I want to see a visual before-and-after story of the cleaning workflow, so that I understand how OpenSTR supports property operations.

#### Acceptance Criteria

1. THE Cleaning Workflow section SHALL display `Cleaningb4.png` as the "Before" state and `cleaningafter.png` as the "After" state.
2. THE Cleaning Workflow section SHALL present a three-stage narrative: Before, Process, Ready.
3. THE Cleaning Workflow section SHALL support the operations narrative by visually demonstrating the transition from an unprepared to a guest-ready property.

---

### Requirement 8: Guest Outcome Section

**User Story:** As a property operator, I want to see the guest experience outcome highlighted, so that I understand the end result of using OpenSTR effectively.

#### Acceptance Criteria

1. THE Guest Outcome section SHALL display `happyguests.png` as the primary image.
2. THE Guest Outcome section SHALL include the message: "When the operations are right, the experience feels effortless."
3. THE Guest Outcome section SHALL feel emotionally resonant while remaining visually clean and tied to the product value narrative.

---

### Requirement 9: Why OpenSTR Section (Homepage)

**User Story:** As a property operator, I want to read a compelling ownership argument on the homepage, so that I understand why self-hosting and open source matter for my business.

#### Acceptance Criteria

1. THE Why OpenSTR section SHALL present the following ownership arguments: control your system, no lock-in, flexible workflows, open source.
2. THE Why OpenSTR section SHALL use strong typographic treatment to emphasize the ownership and control narrative.
3. THE Why OpenSTR section SHALL include a CTA linking to the `/why-openstr` page for deeper reading.

---

### Requirement 10: Contributor CTA Section

**User Story:** As a developer or contributor, I want to see a clear invitation to participate in the OpenSTR project, so that I know how to get involved.

#### Acceptance Criteria

1. THE Contributor CTA section SHALL include the following contribution pathways: report issues, suggest workflows, contribute code, improve docs.
2. THE Contributor CTA section SHALL link each pathway to the appropriate GitHub resource (issues, discussions, pull requests, docs).
3. THE Contributor CTA section SHALL not display fake metrics or fabricated contributor counts.

---

### Requirement 11: About Page

**User Story:** As a visitor, I want to read a clear explanation of what OpenSTR is, who it is for, and why it exists, so that I can decide if it is relevant to me.

#### Acceptance Criteria

1. THE About page SHALL explain what OpenSTR is as a platform.
2. THE About page SHALL describe the target audience: property operators managing STR and LTR properties.
3. THE About page SHALL explain why OpenSTR exists, focusing on the need for operator-controlled, open-source tooling.

---

### Requirement 12: Why OpenSTR Page

**User Story:** As a property operator, I want a dedicated page that makes the philosophical case for self-hosting and open source, so that I can understand the long-term value of choosing OpenSTR.

#### Acceptance Criteria

1. THE Why OpenSTR page SHALL cover the following topics: ownership, flexibility, and self-hosting.
2. THE Why OpenSTR page SHALL present a deeper narrative than the homepage section, with expanded copy and supporting structure.

---

### Requirement 13: Contribute Page

**User Story:** As a developer, I want a dedicated contribution guide, so that I know exactly how to help improve OpenSTR.

#### Acceptance Criteria

1. THE Contribute page SHALL describe who should contribute to OpenSTR.
2. THE Contribute page SHALL explain how to help across the following areas: workflows, code, and documentation.
3. THE Contribute page SHALL link to the OpenSTR GitHub repository for each contribution pathway.

---

### Requirement 14: FAQ Page

**User Story:** As a visitor, I want answers to common questions about OpenSTR, so that I can quickly resolve doubts before deciding to use or contribute to the project.

#### Acceptance Criteria

1. THE FAQ page SHALL include answers to the following questions: "What is OpenSTR?", "Is it only for Airbnb?", "Does it support long-term rentals?", "Is it free?", "Can I self-host it?".
2. WHEN a visitor reads the FAQ, THE FAQ page SHALL provide clear, direct answers without marketing filler.

---

### Requirement 15: Header and Footer

**User Story:** As a visitor, I want consistent navigation and footer across all pages, so that I can move through the site and find key links easily.

#### Acceptance Criteria

1. THE Header SHALL display the OpenSTR logo or wordmark.
2. THE Header SHALL include navigation links to: Home (`/`), About (`/about`), Why OpenSTR (`/why-openstr`), Contribute (`/contribute`), FAQ (`/faq`).
3. THE Header SHALL include a prominent link to the OpenSTR GitHub repository.
4. THE Footer SHALL include navigation links and a brief project description.
5. WHEN viewed on mobile, THE Header SHALL collapse navigation into a mobile-friendly menu.

---

### Requirement 16: Design Polish

**User Story:** As a visitor, I want the site to feel premium and cohesive, so that OpenSTR is perceived as a serious, high-quality project.

#### Acceptance Criteria

1. THE Site SHALL apply consistent spacing using Tailwind spacing utilities across all sections.
2. THE Site SHALL use a consistent typographic scale with elegant font choices appropriate for a premium real estate brand.
3. WHEN images are displayed, THE Site SHALL crop and position them to maximize visual impact without distortion.
4. WHEN viewed on mobile, THE Site SHALL present a refined, fully functional layout with no broken elements.

---

### Requirement 17: SEO and Metadata

**User Story:** As a project maintainer, I want the site to be discoverable and shareable, so that OpenSTR reaches more operators and contributors.

#### Acceptance Criteria

1. THE Site SHALL include a `<title>` and `<meta name="description">` tag on every page.
2. THE Site SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:image`) on every page.
3. WHEN an image is rendered in content, THE Site SHALL include descriptive alt text.
4. THE Site SHALL use semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`) throughout.

---

### Requirement 18: Firebase Hosting Configuration

**User Story:** As a developer, I want Firebase hosting configured, so that I can deploy the static site with a single command.

#### Acceptance Criteria

1. THE Site SHALL include a `firebase.json` configuration file pointing to the Gatsby build output directory.
2. THE Site SHALL include a `.firebaserc` file with the project configuration.
3. THE Site SHALL include build and deploy script documentation so any developer can deploy the site.

---

### Requirement 19: README

**User Story:** As a developer, I want a clear README, so that I can set up, develop, and deploy the site without additional guidance.

#### Acceptance Criteria

1. THE README SHALL include a project overview describing the purpose of the marketing site.
2. THE README SHALL include local development setup instructions.
3. THE README SHALL include deployment steps for Firebase hosting.
4. THE README SHALL include a contribution guide section.

---

### Requirement 20: Launch QA

**User Story:** As a project maintainer, I want a QA checklist verified before launch, so that the site goes live without broken links, missing images, or placeholder content.

#### Acceptance Criteria

1. THE Site SHALL have all internal navigation links verified as functional before launch.
2. THE Site SHALL have all images confirmed as loading correctly on all pages.
3. WHEN viewed on a mobile device, THE Site SHALL present no broken layouts or overflowing content.
4. THE Site SHALL contain no placeholder text (e.g., "Lorem ipsum") or unresolved TODO content at launch.
5. THE Site SHALL have all GitHub CTA links verified as pointing to the correct OpenSTR repository URLs.
