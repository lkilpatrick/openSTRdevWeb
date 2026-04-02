You are building a premium, image-first marketing site for an open-source project called OpenSTR.

Critical priorities:
- The site must feel like a high-end coastal real estate / Airbnb property brand
- NOT a generic SaaS landing page
- Images drive the experience first, content second
- The product is secondary to the lifestyle and operations story

Technical constraints:
- Gatsby + Tailwind
- Fully static
- No CMS
- No server runtime
- Clean, maintainable code

Design constraints:
- Use large full-bleed imagery
- Strong whitespace
- Elegant typography
- Minimal UI chrome
- No startup gradients or generic icons

Messaging constraints:
- Focus on ownership, control, and customization
- Short-term AND long-term rentals
- Open source, self-hosted
- Built for real operators

Do not:
- Overuse dashboards or fake UI
- Use generic SaaS phrasing

## Global Implementation Rules (apply to all issues)

- Keep the site static and lightweight
- Do not add CMS, auth, database, or server runtime features
- Prefer readable Gatsby + Tailwind code
- Keep the design premium, image-first, and real-estate inspired
- OpenSTR should feel like a property operations brand first and a software project second
- Avoid generic SaaS visuals and language
- No em dashes in copy

---

## Issue 1: Scaffold Gatsby Marketing Site

### Description
Set up the Gatsby project foundation.

### Tasks
- Gatsby + TypeScript setup
- Tailwind CSS integration
- Create layout system
- Create shared components:
  - Layout
  - Section
  - Container
  - Button
- Create pages:
  - /
  - /about
  - /why-openstr
  - /contribute
  - /faq

### Acceptance Criteria
- Site runs locally
- Clean folder structure
- No unnecessary dependencies

---

## Issue 2: Add Image Assets

### Description
Organize and integrate all provided images.

### Assets
- cleaningafter.png
- Cleaningb4.png
- Daytime.png
- happyguests.png
- Insidepool.png
- Outside.png
- sunrise.png

### Tasks
- Create image directory
- Add responsive image handling
- Create mapping file for usage

### Acceptance Criteria
- Images render correctly
- Clean import structure
- Proper alt text

---

## Issue 3: Homepage Hero Section

### Description
Build a premium real-estate style hero.

### Requirements
- Full-width image (Outside or sunrise)
- Overlay text
- Headline:
  "Manage your rental property on software you control"

### CTA
- View on GitHub
- Explore OpenSTR

### Acceptance Criteria
- Mobile responsive
- Text readable over image
- Premium feel

---

## Issue 4: Problem + Solution Sections

### Description
Explain user pain and introduce OpenSTR.

### Problem Points
- fragmented tools
- manual coordination
- inflexible systems
- vendor lock-in

### Solution
- self-hosted
- open source
- customizable
- works for STR + long-term

### Acceptance Criteria
- Clear narrative flow
- Strong readability

---

## Issue 5: Value Proposition Cards

### Cards
- Hosted by you
- Free and open source
- Custom workflows
- Built for operators
- Short + long-term rentals
- Contributor-friendly

### Acceptance Criteria
- Clean grid layout
- Mobile responsive
- Elegant styling

---

## Issue 6: Property Showcase Section

### Description
Highlight luxury and lifestyle.

### Images
- Insidepool.png
- Daytime.png
- Outside.png
- sunrise.png

### Acceptance Criteria
- Image-first layout
- Premium editorial style

---

## Issue 7: Cleaning Workflow Section

### Description
Visual before → after story.

### Images
- Cleaningb4.png
- cleaningafter.png

### Structure
- Before
- Process
- Ready

### Acceptance Criteria
- Clear visual story
- Supports operations narrative

---

## Issue 8: Guest Outcome Section

### Description
Show final experience.

### Image
- happyguests.png

### Message
"When the operations are right, the experience feels effortless."

### Acceptance Criteria
- Emotional but clean
- Tied to product value

---

## Issue 9: Why OpenSTR Section

### Description
Make the ownership argument.

### Points
- control your system
- no lock-in
- flexible workflows
- open source

### Acceptance Criteria
- Strong typography
- Clear positioning

---

## Issue 10: Contributor CTA Section

### Description
Encourage contributions.

### Include
- report issues
- suggest workflows
- contribute code
- improve docs

### Acceptance Criteria
- GitHub-first
- No fake metrics

---

## Issue 11: About Page

### Description
Explain project clearly.

### Include
- what OpenSTR is
- who it is for
- why it exists

---

## Issue 12: Why OpenSTR Page

### Description
Deep dive on philosophy.

### Focus
- ownership
- flexibility
- self-hosting

---

## Issue 13: Contribute Page

### Description
Guide contributors.

### Sections
- who should contribute
- how to help
- workflows
- code

---

## Issue 14: FAQ Page

### Questions
- What is OpenSTR?
- Is it only for Airbnb?
- Long-term support?
- Is it free?
- Can I self-host?

---

## Issue 15: Header + Footer

### Header
- logo
- nav
- GitHub link

### Footer
- links
- project description

---

## Issue 16: Design Polish Pass

### Tasks
- spacing
- typography
- image cropping
- mobile refinement

---

## Issue 17: SEO + Metadata

### Tasks
- meta tags
- Open Graph
- alt text
- semantic HTML

---

## Issue 18: Firebase Hosting Setup

### Tasks
- firebase.json
- build scripts
- deploy instructions

---

## Issue 19: README

### Include
- project overview
- dev setup
- deploy steps
- contribution guide

---

## Issue 20: Launch QA

### Checklist
- links work
- images load
- mobile works
- no placeholder content
- GitHub CTAs correct