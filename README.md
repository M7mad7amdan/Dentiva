# Dentiva — Dental Clinic Website

A modern, responsive dental clinic website developed for **Growth Upsell's Web Developer Technical Assessment**.

The website presents **Dr. Bashar Masalameh Dental Center**, introduces its dental services, and provides a direct appointment inquiry experience through WhatsApp.

Built with a focus on clean UI/UX, Arabic typography, accessibility, responsive layouts, maintainable code, and frontend performance.

## Project Overview

- **Project:** Dentiva
- **Client:** Dr. Bashar Masalameh Dental Center
- **Assessment:** Growth Upsell — Web Developer Technical Assessment
- **Website Language:** Arabic (RTL)
- **Application Type:** Single-page marketing website
- **Booking Method:** WhatsApp
- **Backend / Database:** Not required

## Features

- Fully responsive design for desktop, tablet, and mobile
- Right-to-left Arabic interface
- Animated and responsive navigation
- Hero section with direct booking and services links
- Doctor introduction with an interactive image gallery
- Eight dental service cards with WhatsApp inquiries
- Interactive "Why Choose Us" cards with detail dialogs
- Animated testimonial carousel
- Footer with section navigation and social media placeholders
- Accessible interaction patterns and reduced-motion support
- SEO metadata and optimized image delivery

## Website Sections

| Section | Description |
|---|---|
| Hero | Introduction and primary calls to action |
| About | Doctor introduction and interactive image gallery |
| Services | Dental treatments with service-specific WhatsApp inquiries |
| Why Choose Us | Key care principles presented through interactive cards |
| Testimonials | Patient feedback carousel |
| Contact & Booking | Direct WhatsApp inquiry links |
| Footer | Navigation, branding, and social links |

Contact and appointment inquiries are handled through WhatsApp. No contact-form backend, database, or appointment management API has been implemented.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React application framework and production builds |
| React | Component-based user interface |
| JavaScript / JSX | Application development |
| Tailwind CSS v4 | Responsive styling and design system |
| Framer Motion | UI animations, transitions, and gestures |
| Lucide React | Interface icons |
| React Icons | Social media icons |
| Next.js Image | Responsive image optimization |

### Typography and Visual Identity

The application uses locally hosted **Amiri** and **Tajawal** fonts, including WOFF2 files for web delivery.

Brand colors:

| Color | Hex |
|---|---|
| Olive | `#3E4637` |
| Beige | `#E1D7B8` |
| Gold | `#B3A681` |
| Warm Ivory | `#F5F1E7` |

The design combines warm neutral surfaces, refined Arabic typography, and subtle interactive elements.

## Project Structure

```text
dentiva/
├── public/
│   ├── AboutUsImg/
│   ├── WhyChooseUs/
│   ├── fonts/
│   ├── Doctor.jpeg
│   └── Logo.png
├── src/
│   └── app/
│       ├── components/
│       │   ├── NavBar.jsx
│       │   ├── Hero.jsx
│       │   ├── AboutDoctor.jsx
│       │   ├── GalleryAnimation.jsx
│       │   ├── Services.jsx
│       │   ├── WhyChooseUs.jsx
│       │   ├── Testimonials.jsx
│       │   └── Footer.jsx
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── tests/
│   ├── e2e/
│   │   └── site.spec.js
│   ├── load-test.js
│   ├── stress-test.js
│   └── browser-test.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/M7mad7amdan/Dentiva.git
cd Dentiva
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

Build the application:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

### Code Quality

Run ESLint:

```bash
npx eslint src
```

## Testing and Quality Assurance

The project has undergone manual testing, Lighthouse audits, dependency auditing, and load testing.

### Lighthouse

Lighthouse was used to evaluate:

- Performance
- Accessibility
- Best Practices
- SEO

Recorded results included a **Desktop Performance score of 97**, with Best Practices and SEO reaching **100** in the reported audits.

Mobile performance varied between test runs and was investigated through Chrome Performance tools. Native scrolling was selected instead of Lenis following performance comparisons.

Lighthouse scores are environment-dependent and should be re-evaluated on the deployed website.

### Dependency Security

Production dependency audit:

```bash
npm audit --omit=dev
```

**Recorded result:** 0 known vulnerabilities at the time of testing.

### k6 Load Testing

The homepage was tested locally with up to 25 virtual users.

| Metric | Result |
|---|---|
| Maximum virtual users | 25 |
| HTTP requests | 1,084 |
| Failed requests | 0 |
| P95 response time | 31.35 ms |
| Successful checks | 100% |

Run:

```bash
k6 run tests/load-test.js
```

### k6 Stress Testing

A separate local stress test reached 100 virtual users.

| Metric | Result |
|---|---|
| Maximum virtual users | 100 |
| HTTP requests | 6,505 |
| Failed requests | 0 |
| P95 response time | 79.49 ms |
| Successful checks | 100% |

Run:

```bash
k6 run tests/stress-test.js
```

### k6 Browser Testing

The application was tested using a Chromium-based browser scenario.

| Metric | Result |
|---|---|
| Browser iterations | 5 |
| Successful checks | 25 / 25 |
| Browser HTTP request failures | 0 / 95 |
| LCP (P90) | 853.6 ms |
| FCP (P90) | 853.6 ms |
| CLS (P90) | 0 |

Run:

```bash
k6 run tests/browser-test.js
```

**Testing scope:** The k6 tests were executed against a local production server. Their results do not establish the capacity or performance of the final cloud hosting environment.

### Playwright End-to-End Tests

Playwright test cases are included for core website functionality and responsive browser testing.

```bash
npx playwright test
```

The most recently reported Playwright execution returned `No tests found`. Therefore, an automated Playwright pass is **not claimed** here. Test discovery and execution should be verified before final submission.

## SEO and Accessibility

The website implements:

- Arabic language and RTL document direction
- Descriptive page title and metadata
- Open Graph metadata
- Semantic HTML structure
- Accessible labels for interactive elements
- Visible keyboard focus indicators
- Reduced-motion support
- Responsive page layouts

The canonical site URL can be configured through:

```env
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.com
```

The variable is optional for local development and should be set to the final production domain when available.

## Deployment

The application is designed to be deployed on a hosting platform supporting Next.js, such as Vercel.

Basic deployment workflow:

1. Import the GitHub repository into Vercel.
2. Select Next.js as the framework.
3. Configure the production domain and `NEXT_PUBLIC_SITE_URL`.
4. Deploy the application.
5. Verify navigation, image loading, WhatsApp links, and mobile responsiveness on the public URL.

**Live Website:** To be added after deployment.

## External Libraries and Templates

The interface is implemented using React components, Tailwind CSS, Framer Motion, and icon libraries.

No complete prebuilt website template is documented as part of this implementation.

Third-party packages are declared in `package.json`, and dependency versions are recorded in `package-lock.json`.

## Production Notes

Before public launch, the following content must be verified:

- Official clinic WhatsApp number
- Patient testimonial authenticity and publication consent
- Rights to use clinic photographs, logo, and other media assets
- Social media URLs, which are currently placeholders
- Final production domain and SEO configuration

## Assessment Deliverables

This repository provides the application source code, assets, configuration, test scripts, technical stack information, and local setup instructions.

The public deployment URL and final production verification are separate delivery steps.

---

**Developed for Growth Upsell — Web Developer Technical Assessment.**

**Project:** Dentiva — Dr. Bashar Masalameh Dental Center
