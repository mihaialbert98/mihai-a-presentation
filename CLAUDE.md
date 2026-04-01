# CLAUDE.md — Mihai Albert Portfolio Website

## Project Overview

Personal portfolio website for **Albert Mihai Ioan**, a Senior Frontend Developer with 7+ years of experience specializing in React, TypeScript, and Next.js. This is a single-page portfolio site with a futuristic glassmorphism design, built with the latest Next.js best practices.

**Owner details:**
- Name: Albert Mihai Ioan
- Email: mihai.albert.Ioan@gmail.com
- Phone: +40770936013
- LinkedIn: https://www.linkedin.com/in/mihai-albert-732799162/

**Tech stack:**
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Scroll animations: react-intersection-observer
- Hero background: tsparticles (optional) or custom CSS aurora effect

---

## Design Vision: Futuristic Glassmorphism

### Core Aesthetic
- **Background**: Deep navy-to-near-black gradient (`#020817` → `#0a0f1e`), full-page, non-scrolling
- **Glass panels**: `backdrop-filter: blur(16px)`, semi-transparent white (`rgba(255,255,255,0.05)`) with a subtle border (`rgba(255,255,255,0.1)`)
- **Accent colors**: Electric blue (`#3b82f6`), violet (`#8b5cf6`), teal (`#06b6d4`) — used for glows, gradients, and highlights
- **Typography**: `next/font` with Inter or Geist — clean, modern, readable
- **Depth**: Multiple layered elements with varying opacity and blur to create a floating 3D feel
- **Animations**: Framer Motion fade-ins on scroll, parallax hero, hover glow effects on cards

### Glassmorphism Utility Classes (define in `tailwind.config.ts`)
```ts
// Example custom utilities to define:
// glass-card: backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl
// glass-panel: backdrop-blur-xl bg-white/[0.03] border border-white/[0.08]
// glow-blue: box-shadow 0 0 24px rgba(59,130,246,0.4)
// glow-violet: box-shadow 0 0 24px rgba(139,92,246,0.4)
```

### Animation Rules
- All entrance animations: fade-up with `opacity: 0 → 1`, `y: 20 → 0`, duration 0.6s
- Stagger children by 0.1s where applicable
- **Always respect `prefers-reduced-motion`** — wrap motion components with `useReducedMotion()` and disable animations when true
- Hover effects: subtle scale (`1.02`) + glow intensification on cards
- Hero: typewriter effect on job title using Framer Motion or a lightweight custom hook

---

## Website Sections

### 1. Hero
- Full-screen (`min-h-screen`) with aurora/particle background
- Centered layout: name in large display font, animated typewriter cycling through titles (e.g. "Senior Frontend Developer", "React & Next.js Specialist", "UI/UX Enthusiast")
- Two CTAs: `View My Work` (scrolls to Projects) and `Contact Me` (scrolls to Contact)
- Subtle scroll indicator at bottom

### 2. About Me
- Glassmorphism card layout
- Short professional bio (2–3 sentences focusing on 7+ years of experience, specialization in React/Next.js, passion for performance and beautiful UIs)
- Tech stack section: badge/chip grid with key technologies:
  - React, Next.js, TypeScript, JavaScript
  - Tailwind CSS, CSS Modules, Styled Components
  - D3.js, Leaflet, Framer Motion
  - Node.js, REST APIs, GraphQL
  - Git, Storybook, Playwright, Jest
  - Adobe Analytics, MongoDB

### 3. Projects Showcase
Three project cards in a responsive grid (1 col mobile → 3 col desktop), each with:
- Screenshot image (`next/image`, fill or fixed aspect ratio)
- Project name + short description
- Tech tags (badges)
- "View Live" button linking to the live URL (opens in new tab)

**Projects data** (source of truth: `lib/data.ts`):

```ts
{
  title: "Little Club Friends",
  description: "Children's outdoor adventure school at Poiana Brașov offering skiing, snowboarding, biking, and hiking lessons for kids aged 4–14. Multi-language (i18n), booking CTAs, polaroid gallery.",
  image: "/images/little-club-friends.png",  // copied from proj_resources/
  url: "https://little-club-friends.vercel.app/en",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"]
},
{
  title: "King's Court Pub",
  description: "Website for a medieval-themed pub in Brașov featuring event listings, weekly specials, operational info, and a Clerk-authenticated reservations area.",
  image: "/images/kings-court.png",
  url: "https://kings-court-zeta.vercel.app/",
  tags: ["Next.js", "TypeScript", "Clerk", "Glassmorphism"]
},
{
  title: "Aventură și Călătorii",
  description: "Tourism company website offering bus excursions, school trips, and coach rentals from Brașov. Features service showcase, testimonials, credentials, and a contact/booking form.",
  image: "/images/aventura-si-calatorii.png",
  url: "https://aventura-si-calatorii.vercel.app/",
  tags: ["Next.js", "React", "CSS Modules", "SSR"]
}
```

### 4. Experience / CV Timeline
Vertical timeline with alternating left/right layout on desktop, single column on mobile.

**Work experience:**
| Period | Company | Role |
|---|---|---|
| Feb 2024 – Present | Cellebrite | Frontend Developer |
| Aug 2022 – Feb 2024 | Fortech | Software Developer (Frontend Focus) |
| Oct 2017 – Aug 2022 | BitSoftware | Software Developer (Frontend Focus) |

**Key achievements to highlight (bullet points per role):**
- Cellebrite: complex SVG visualizations with D3.js, GPS tracking maps with Leaflet, Excel-like grid systems, Kanban boards
- Fortech: multi-country registration platform with EU VAT validation, Adobe Analytics integration, React Best Practices Guide authored
- BitSoftware: Storybook component library, performance optimization, UI/UX collaboration

**Education:**
| Period | Institution | Degree |
|---|---|---|
| 2020–2022 | Transilvania University of Brașov | Master's — Internet Technologies |
| 2017–2020 | Transilvania University of Brașov | Bachelor's — Mathematics & Computer Science |

**Certifications:** ReactJS, Python 3, English Language, MongoDB

### 5. Contact
- Glassmorphism card, centered
- Email button: `mailto:mihai.albert.Ioan@gmail.com`
- LinkedIn button: https://www.linkedin.com/in/mihai-albert-732799162/
- Optional: GitHub link (add when available)
- Optional: simple contact form with name, email, message fields (use a serverless API route at `app/api/contact/route.ts` with Resend or Nodemailer)

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, global styles
│   ├── page.tsx                # Single page — imports all section components
│   ├── globals.css             # Tailwind base + custom CSS variables
│   └── api/
│       └── contact/
│           └── route.ts        # Optional: contact form handler
├── components/
│   ├── ui/                     # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── GlassCard.tsx
│   ├── sections/               # One file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Navbar.tsx          # Sticky nav with section links
│       └── Footer.tsx
├── lib/
│   ├── data.ts                 # All personal data (projects, experience, skills)
│   └── utils.ts                # Helper functions
├── public/
│   └── images/                 # Copy screenshots from proj_resources/ here
│       ├── little-club-friends.png
│       ├── kings-court.png
│       └── aventura-si-calatorii.png
├── .env.example                # Template for environment variables
├── next.config.ts              # Security headers, image domains
├── tailwind.config.ts          # Custom tokens, glassmorphism utilities
└── tsconfig.json               # Strict mode, path aliases (@/*)
```

**Important:** All personal data (bio, job history, project descriptions, contact info) must live in `lib/data.ts`, never hardcoded in components.

---

## Next.js Best Practices (Non-Negotiable)

1. **App Router only** — no Pages Router. All routes under `app/`.
2. **React Server Components by default** — only add `"use client"` when the component needs browser APIs, event handlers, or React state/effects.
3. **`next/image` for all images** — always provide `width`, `height` (or `fill`), and descriptive `alt` text.
4. **`next/font`** — load fonts via `next/font/google`, never via `<link>` tags.
5. **Metadata API** — use `generateMetadata()` or the `metadata` export in `layout.tsx`. Include `title`, `description`, `openGraph`, `twitter` cards, and canonical URL.
6. **OG image** — generate dynamically via `app/opengraph-image.tsx` using `next/og`.
7. **Path aliases** — configured in `tsconfig.json`: `@/components/*`, `@/lib/*`, `@/public/*`.
8. **Environment variables** — secrets in `.env.local`, never committed. `.env.example` with placeholder keys committed.
9. **Security headers** — configured in `next.config.ts`:
   - `Content-Security-Policy`
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy`

---

## Coding Standards

- **TypeScript strict mode** — `"strict": true` in `tsconfig.json`. No `any` types.
- **ESLint** — use `next/core-web-vitals` + `@typescript-eslint/recommended`.
- **Prettier** — consistent formatting, enforced via pre-commit hook or CI.
- **Conventional Commits** — `feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `docs:`, `test:`.
- **No inline styles** — Tailwind utility classes only. Custom CSS only for things Tailwind cannot express (e.g. complex keyframe animations).
- **No magic numbers** — use Tailwind's spacing/color scale or CSS variables.
- **Component naming** — PascalCase for components, camelCase for utilities, kebab-case for files.

---

## Agent Roles & Responsibilities

### Designer Agent
**Purpose:** Owns all visual and UX decisions for the portfolio.

**Responsibilities:**
- Define and maintain the design token system in `tailwind.config.ts` (colors, spacing, shadows, glassmorphism utilities)
- Specify Framer Motion animation parameters (duration, easing, stagger, reduced-motion fallbacks)
- Design each section layout with responsive breakpoints: mobile (375px), tablet (768px), desktop (1440px)
- Review all component PRs for visual consistency — reject if deviating from glassmorphism system
- Ensure typography hierarchy is consistent across sections (display, heading, body, caption sizes)
- Specify hover, focus, and active states for all interactive elements

**Must NOT:**
- Write business logic or data-fetching code
- Modify `lib/data.ts` or API routes

---

### Senior Developer & Architect Agent
**Purpose:** Ensures the codebase is well-structured, performant, and follows Next.js best practices.

**Responsibilities:**
- Bootstrap the project with `create-next-app` (TypeScript, App Router, Tailwind, ESLint)
- Design and enforce the folder structure defined above
- Decide RSC vs. client component boundaries for each component
- Optimize bundle size: avoid importing full libraries when tree-shaking or partial imports suffice
- Configure `next.config.ts` with security headers and `next/image` domains
- Configure `tsconfig.json` with strict mode and path aliases
- Review all PRs: no `any` types, no unnecessary `"use client"`, no performance anti-patterns
- Ensure `npm run build` produces zero warnings or errors
- Implement the contact form API route if required (rate-limited, validated, no secrets exposed)

**Must NOT:**
- Override design decisions without consulting the Designer Agent
- Merge code that fails TypeScript or ESLint checks

---

### QA & Security Agent
**Purpose:** Ensures the site is bug-free, accessible, performant, and secure before release.

**Responsibilities:**
- Run Playwright E2E tests covering all 5 sections and all interactive elements
- Run Jest + React Testing Library unit tests for utility functions and UI primitives
- Run Lighthouse audits and enforce minimum scores:
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95
- Verify WCAG 2.1 AA compliance: color contrast ratios, keyboard navigation, focus management, ARIA labels
- Verify security headers are present in HTTP responses
- Check for exposed secrets or sensitive data in the bundle
- Verify all external links (project URLs, LinkedIn, email) work correctly
- Test `prefers-reduced-motion` behavior — animations must disable or simplify
- Test on real devices / browser stack: Chrome, Firefox, Safari, mobile Safari, Android Chrome

**Blocks release if:**
- Any Lighthouse score below threshold
- Any XSS, CSP violation, or exposed secret
- Keyboard navigation is broken on any interactive element
- Any broken external link
- Build warnings or TypeScript errors

---

## Verification Checklist (Before Each Release)

- [ ] `npm run build` — zero errors and zero warnings
- [ ] `tsc --noEmit` — zero TypeScript errors
- [ ] `npm run lint` — zero ESLint errors
- [ ] All 5 sections visible and correctly styled on 375px, 768px, 1440px viewports
- [ ] Lighthouse: Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95
- [ ] All project cards link to correct URLs and open in a new tab
- [ ] Email and LinkedIn links in Contact section work
- [ ] Hero typewriter animation plays correctly on first load
- [ ] Scroll-triggered animations fire correctly as user scrolls
- [ ] `prefers-reduced-motion` OS setting disables/simplifies animations
- [ ] `next/image` used for all screenshots — no Cumulative Layout Shift (CLS)
- [ ] Security headers present: CSP, X-Frame-Options, X-Content-Type-Options
- [ ] No sensitive data (email server credentials, API keys) in committed files
- [ ] OG image renders correctly when link is shared on social media
- [ ] Page loads under 3 seconds on simulated 3G (Lighthouse throttling)
