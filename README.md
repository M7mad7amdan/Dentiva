
# Dentiva — Dental Clinic Website

A modern, responsive, Arabic-first dental clinic website developed for **Growth Upsell's Web Developer Technical Assessment**.

Dentiva is a digital presence for **Dr. Bashar Masalameh Dental Center**, designed to introduce the clinic, present its dental services, showcase selected patient results, and make appointment inquiries easier through WhatsApp.

The website focuses on professional UI/UX, clear Arabic typography, responsive interaction, accessibility, frontend performance, and a consistent visual identity.

---

## Project Overview

| Item | Details |
|---|---|
| Project Name | Dentiva |
| Client | Dr. Bashar Masalameh Dental Center |
| Assessment | Growth Upsell — Web Developer Technical Assessment |
| Website Language | Arabic |
| Layout Direction | Right-to-left (RTL) |
| Application Type | Responsive single-page website |
| Framework | Next.js |
| Frontend | React, JavaScript, Tailwind CSS |
| Appointment Method | WhatsApp |
| Backend | Not required |
| Database | Not required |
| Repository | [Dentiva on GitHub](https://github.com/M7mad7amdan/Dentiva) |

### Project Goals

- Establish a professional digital identity for the dental clinic.
- Present the dentist and clinic in a trustworthy and accessible manner.
- Organize dental treatments into clear, easy-to-explore service cards.
- Showcase selected patient results and clinic photographs.
- Simplify appointment inquiries through WhatsApp.
- Deliver a responsive experience across desktop, tablet, and mobile devices.
- Maintain good accessibility, usability, and frontend performance.

---

## Key Features

### Responsive Arabic Interface

- Fully Arabic interface with RTL support.
- Responsive layouts for mobile, tablet, and desktop.
- Mobile-first interactions for content galleries.
- Consistent typography, spacing, colors, and components.
- Clear touch targets and keyboard focus indicators.

### Interactive User Experience

- Animated navigation and section transitions.
- Doctor profile and biography interaction.
- Animated statistics and number counters.
- Interactive expanding gallery on desktop.
- Swipeable galleries and carousels on smaller screens.
- Mobile previous/next navigation buttons.
- Animated patient-result detail dialogs.
- Interactive testimonial carousel.
- Reduced-motion support for accessibility.

### WhatsApp Integration

- Direct WhatsApp contact links.
- Service-specific inquiry messages.
- Interactive slide-to-inquire controls.
- Appointment form with prefilled WhatsApp messages.
- No custom backend or database required for appointment inquiries.

### Performance and Accessibility

- Optimized image rendering through `next/image`.
- Locally hosted Arabic font assets.
- Responsive image sizing.
- Semantic HTML and accessible labels.
- Keyboard-accessible controls.
- Respect for reduced-motion preferences.
- Native browser scrolling without an additional smooth-scrolling library.

---

## Website Sections

The website is organized into the following sections:

### 1. Navigation Bar

The responsive navigation bar provides access to the main website sections.

Features include:

- Clinic branding and logo.
- Section-based navigation.
- Mobile-friendly navigation experience.
- Direct access to appointment inquiries.
- Responsive layout and transitions.

### 2. Hero Section

The homepage hero introduces Dr. Bashar Masalameh Dental Center.

It includes:

- Primary Arabic headline.
- Clinic introduction.
- Primary WhatsApp booking action.
- Secondary services navigation.
- Doctor photograph.
- Interactive doctor biography.
- Responsive two-column layout on larger screens.

The hero uses a refined visual composition with the clinic's olive, gold, beige, and ivory color palette.

### 3. Numbers Section

The statistics section presents a concise overview of the website's available content and features.

Displayed statistics include:

| Statistic | Value |
|---|---|
| Dental Services | 8 |
| Showcased Patient Results | 4 |
| Direct Booking Channel | 1 |
| Supported Device Categories | 3 |

These numbers describe the website's content and functionality, rather than verified clinical performance statistics.

The section uses:

- Animated count-up numbers.
- Responsive Bento-style cards.
- Soft animated gradient backgrounds.
- Subtle entrance animations.

### 4. Why Choose Us

This section communicates the clinic's care philosophy, professional approach, and attention to detail.

The gallery contains four photographic cards featuring:

- Knowledge and continuous development.
- Attention to detail.
- Patient-centered dental care.
- Scientific and professional standards.

#### Desktop Experience

On larger screens, the gallery uses an interactive expanding-card layout.

Users can explore different cards through hover, focus, or selection.

#### Mobile and Tablet Experience

On smaller screens, the gallery switches to a horizontally scrollable layout.

Features include:

- Touch-based horizontal swiping.
- Previous and next navigation buttons.
- Active image indicator.
- Responsive image cards.
- Direct WhatsApp inquiry links.

The desktop gallery does not display unnecessary mobile carousel navigation controls.

### 5. Dental Services

Dentiva presents eight dental services:

1. Dental Cavity Treatment
2. Root Canal Treatment
3. Dental Implants
4. Veneers and Zirconia Crowns
5. Cosmetic Fillings
6. Gum Treatments
7. Clear Aligners and Orthodontics
8. Teeth Whitening

Each service card includes:

- Service number.
- Arabic service title.
- Concise description.
- Interactive WhatsApp inquiry control.
- Alternative direct WhatsApp link.

#### Mobile Experience

On mobile devices:

- Service cards are displayed in a horizontal carousel.
- Users can swipe between services.
- Previous and next buttons allow manual navigation.
- Pagination indicators show the active card.
- A numerical counter displays the current position.

#### Tablet and Desktop Experience

On larger screens, the service cards are displayed in a responsive grid.

Carousel controls are hidden when the grid layout is displayed.

### 6. Patient Results

This section showcases four selected patient-result entries.

Each entry includes:

- Patient-result imagery.
- A descriptive title.
- Supporting text.
- An interactive detail view.

#### Interactive Result Dialog

Selecting a result opens a larger dialog containing the image and additional details.

The dialog provides:

- Smooth layout transitions.
- Enlarged result imagery.
- Close button and backdrop interaction.
- Escape-key support.
- Keyboard focus handling.
- Responsive presentation.

#### Mobile Experience

On mobile screens, patient results appear in a horizontally swipeable carousel.

The section provides:

- Previous and next navigation buttons.
- Pagination indicators.
- Active result counter.
- Touch-based navigation.

On tablet and desktop screens, the results are presented in a grid without mobile navigation buttons.

**Note:** Patient imagery and related publication permissions should be verified before final public release.

### 7. Patient Testimonials

The testimonial section contains an interactive carousel presenting patient feedback.

Features include:

- Animated overlapping testimonial cards.
- Previous and next navigation.
- Active testimonial indicators.
- Touch and drag gestures.
- Star-rating visuals.
- Responsive layouts.

Testimonial authenticity and publication permission must be verified before the website is considered ready for public use.

### 8. Contact and Booking

The booking section provides a simple form for preparing an appointment inquiry.

Available fields:

- Dental service.
- Patient name.
- Phone number.
- Additional notes.

After submission, the website prepares a WhatsApp message containing the entered information.

The message can then be sent directly to the clinic.

#### Booking Workflow

1. The visitor selects a dental service.
2. The visitor enters their contact information.
3. The visitor optionally adds notes.
4. The website generates a WhatsApp inquiry message.
5. The visitor continues to WhatsApp.
6. The clinic coordinates appointment availability.

No appointment is automatically confirmed by the website.

The application does not maintain a custom patient database or booking API.

### 9. Footer

The footer provides supporting navigation and clinic information.

It includes:

- Clinic branding.
- Navigation links.
- Contact options.
- Social media links or placeholders.
- Supporting footer information.

Any placeholder social media links must be replaced with verified clinic accounts before public launch.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Application framework and production builds |
| React | Component-based UI development |
| JavaScript / JSX | Application logic and components |
| Tailwind CSS v4 | Responsive layouts and styling |
| Framer Motion | Animations, layout transitions, and gestures |
| Lucide React | Interface icons |
| React Icons | Additional icon assets |
| Next.js Image | Responsive image rendering and optimization |
| CSS | Custom typography and visual effects |
| Git | Version control |
| GitHub | Source-code hosting |
| Vercel | Deployment platform |

---

## Visual Identity

Dentiva uses a warm, modern visual identity intended to communicate professionalism, comfort, and trust.

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Deep Olive | `#3E4637` | Headings, buttons, primary UI |
| Soft Beige | `#E1D7B8` | Cards and secondary backgrounds |
| Muted Gold | `#B3A681` | Dividers, borders, accents |
| Warm Ivory | `#F5F1E7` | Main page background |

Additional muted green and neutral tones are used throughout the interface.

### Typography

The website uses locally hosted Arabic fonts:

**Amiri**

Used primarily for:

- Section headings.
- Hero headlines.
- Service titles.
- Result titles.
- Selected display text.

**Tajawal**

Used primarily for:

- Paragraphs.
- Form labels.
- Navigation.
- Buttons.
- Supporting interface text.

Typography was refined throughout development to improve hierarchy and readability.

The latest design adjustments include heavier section headings and more prominent card titles.

Actual font-weight availability depends on the font files and CSS font-face definitions included in the project.

---

## Responsive Design

The interface is designed for three main device categories.

| Device | Layout Behavior |
|---|---|
| Mobile | Single-card carousels, swipe gestures, navigation buttons |
| Tablet | Responsive grids and gallery layouts |
| Desktop | Multi-column grids and interactive expanding cards |

### Responsive Navigation Behavior

#### Services

- Mobile: horizontal carousel and navigation controls.
- Tablet/Desktop: responsive card grid without carousel navigation controls.

#### Patient Results

- Mobile: swipeable result cards and navigation controls.
- Tablet/Desktop: grid layout without mobile navigation controls.

#### Why Choose Us

- Mobile: swipeable image gallery with navigation controls.
- Tablet: scrollable gallery.
- Desktop: interactive expanding gallery without mobile navigation controls.

Responsive behavior is implemented using Tailwind CSS breakpoints and component-specific interactions.

---

## Animation and Interaction

Framer Motion is used to enhance the interface without overwhelming the content.

Animations include:

- Fade-in transitions.
- Scroll-triggered entrances.
- Hover interactions.
- Spring-based card transitions.
- Animated counters.
- Shared-layout result dialogs.
- Carousel indicators.
- Slide-to-inquire interactions.

Animations respect reduced-motion preferences where supported.

Native browser scrolling is used for page navigation.

---

## Project Structure

The main application components are organized as follows:

```text
Dentiva/
├── public/
│   ├── PatientResult/
│   │   ├── FirstImg.png
│   │   ├── SecondImg.png
│   │   ├── ThirdImg.png
│   │   └── ForthImg.png
│   ├── WhyChooseUs/
│   │   ├── FirstImg.jpg
│   │   ├── SecondImg.jpg
│   │   ├── ThirdImg.jpg
│   │   └── ForthImg.jpg
│   ├── fonts/
│   ├── Doctor.jpeg
│   └── Logo.png
├── src/
│   └── app/
│       ├── components/
│       │   ├── NavBar.jsx
│       │   ├── Hero.jsx
│       │   ├── DoctorBioCard.jsx
│       │   ├── NumbersSection.jsx
│       │   ├── WhyChooseUsSection.jsx
│       │   ├── WhyChooseUsGallery.jsx
│       │   ├── Services.jsx
│       │   ├── PatientResults.jsx
│       │   ├── Testimonials.jsx
│       │   ├── BookingForm.jsx
│       │   └── Footer.jsx
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── tests/
│   ├── e2e/
│   ├── load-test.js
│   ├── stress-test.js
│   └── browser-test.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

This structure documents the main application components and known asset directories. Additional configuration and generated files may also exist in the repository.

---

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16.
- npm.
- Git.

### Installation

Clone the repository:

```bash
git clone https://github.com/M7mad7amdan/Dentiva.git
```

Navigate to the project:

```bash
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

Open the application:

```text
http://localhost:3000
```

### Production Build

Generate an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Code Quality

Run ESLint:

```bash
npx eslint src
```

---

## WhatsApp Booking Integration

Appointment inquiries are sent through WhatsApp using prefilled message links.

The clinic's configured WhatsApp number is:

```text
+970 59 415 1151
```

The integration uses the following URL format:

```text
https://wa.me/<number>?text=<encoded-message>
```

Service inquiries include the selected dental service.

Booking-form inquiries can include:

- Requested service.
- Patient name.
- Phone number.
- Optional notes.

### Important Limitations

- No custom appointment database is implemented.
- No backend appointment-management service is implemented.
- No automated appointment confirmation is provided.
- Final appointment availability is coordinated by clinic staff.
- Form information is included in the WhatsApp message initiated by the visitor.

The clinic should review the handling of patient information and avoid requesting unnecessary sensitive medical details through the public form.

---

## Testing and Quality Assurance

The project has undergone frontend inspection, performance analysis, local load testing, and dependency auditing.

The following are previously recorded test results and should not be interpreted as new measurements after the latest UI updates.

### Lighthouse

The recorded Lighthouse audits included:

| Category | Recorded Result |
|---|---|
| Desktop Performance | 97 |
| Mobile Performance | Approximately 87–94 across runs |
| Accessibility | Approximately 92 in reported runs |
| Best Practices | 100 |
| SEO | 100 |

Performance can vary depending on device, network, browser, deployment environment, and test configuration.

The deployed version should be audited again after final changes.

### Dependency Security Audit

Production dependencies were checked using:

```bash
npm audit --omit=dev
```

**Previously recorded result:** 0 known vulnerabilities at the time of testing.

This does not guarantee that future audits will produce the same result.

### k6 Load Testing

A previously reported local load test reached 25 virtual users.

| Metric | Recorded Result |
|---|---|
| Maximum Virtual Users | 25 |
| HTTP Requests | 1,084 |
| Failed Requests | 0 |
| P95 Response Time | 31.35 ms |
| Successful Checks | 100% |

Run:

```bash
k6 run tests/load-test.js
```

### k6 Stress Testing

A separate local stress test reached 100 virtual users.

| Metric | Recorded Result |
|---|---|
| Maximum Virtual Users | 100 |
| HTTP Requests | 6,505 |
| Failed Requests | 0 |
| P95 Response Time | 79.49 ms |
| Successful Checks | 100% |

Run:

```bash
k6 run tests/stress-test.js
```

### k6 Browser Testing

A Chromium-based browser scenario was also tested.

| Metric | Recorded Result |
|---|---|
| Browser Iterations | 5 |
| Successful Checks | 25 / 25 |
| Browser HTTP Request Failures | 0 / 95 |
| LCP (P90) | 853.6 ms |
| FCP (P90) | 853.6 ms |
| CLS (P90) | 0 |

Run:

```bash
k6 run tests/browser-test.js
```

**Testing scope:** These k6 measurements were collected from a local environment. They do not establish the load capacity of the production deployment.

### Playwright

The repository includes Playwright-related test configuration and test files.

Run:

```bash
npx playwright test
```

A previously reported execution returned `No tests found`.

For this reason, an automated end-to-end test pass is not claimed until test discovery and successful execution are confirmed.

### Recommended Final Verification

Before submission or launch:

- Run a successful production build.
- Check browser console errors.
- Verify mobile navigation and carousels.
- Test result dialog opening and closing.
- Test WhatsApp service inquiries.
- Test the booking form.
- Verify image availability and responsive layouts.
- Re-run Lighthouse on the deployed website.
- Confirm the production deployment status.

---

## SEO and Accessibility

The application includes:

- Arabic document language.
- RTL layout direction.
- Semantic page sections.
- Descriptive headings.
- Page title and metadata.
- Open Graph metadata.
- Accessible form labels.
- Keyboard-accessible interactive elements.
- Visible focus indicators.
- Reduced-motion handling.
- Responsive image delivery.

The canonical production URL can be configured using:

```env
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.com
```

Replace the example URL with the final deployed domain.

---

## Deployment

Dentiva is configured for deployment through GitHub and Vercel.

### Repository

[GitHub — Dentiva](https://github.com/M7mad7amdan/Dentiva)

### Deployment Workflow

1. Update the source code locally.
2. Verify the production build.
3. Commit changes to Git.
4. Push changes to the GitHub repository.
5. Allow Vercel to build and deploy the new version.
6. Verify the public deployment.

### Git Commands

```bash
git add .
git commit -m "docs: update README for latest Dentiva features"
git pull --rebase origin main
git push origin main
```

### Production Verification

Before sharing the public website, verify:

- Successful Vercel deployment.
- Correct custom domain configuration, if applicable.
- Working internal navigation.
- Correct clinic imagery.
- Responsive carousels.
- Desktop gallery interactions.
- WhatsApp inquiry links.
- Booking-form behavior.
- Accessibility and performance.

**Live Website:** Add the verified production URL here.

---

## External Packages and Assets

The website is implemented using React components, Tailwind CSS, Framer Motion, and icon libraries.

No complete prebuilt website template is documented as part of the implementation.

Dependencies are declared in `package.json` and resolved versions are recorded in `package-lock.json`.

Clinic photographs, patient-result images, logos, fonts, and other media must be used in accordance with their applicable licenses and publication permissions.

---

## Production Considerations

The following items require confirmation before final public launch:

1. Official clinic contact information and WhatsApp number.
2. Accuracy and permission to publish patient testimonials.
3. Publication consent for patient-result images.
4. Permission to use clinic photographs and branding assets.
5. Correct social media links.
6. Production domain and canonical URL.
7. Final responsive testing.
8. Final accessibility and performance checks.
9. Successful build and deployment status.

The website is a frontend application intended for clinic presentation and appointment inquiries. It is not an electronic health record system or clinical appointment-management platform.

---

## Assessment Deliverables

This repository contains the Dentiva frontend application and its related development resources.

Deliverables include:

- Next.js application source code.
- Reusable React components.
- Responsive Arabic UI.
- Interactive galleries and carousels.
- WhatsApp inquiry functionality.
- Booking form.
- Local media and typography assets.
- Project configuration.
- Available test scripts.
- Setup and development instructions.
- Technical project documentation.

Public deployment verification and final client-content approval remain separate release checks.

---

## Project Status

**Development:** Core website implementation completed.

**Responsive UI:** Mobile, tablet, and desktop layouts implemented.

**Booking Integration:** WhatsApp-based inquiry flow implemented.

**Backend / Database:** Not required for the current scope.

**Testing:** Previous local performance and load tests recorded.

**Deployment:** Connected to a GitHub/Vercel workflow; the latest deployment should be verified separately.

---

**Developed for Growth Upsell — Web Developer Technical Assessment**

**Project:** Dentiva  
**Client:** Dr. Bashar Masalameh Dental Center  
**Last Documentation Update:** October 28, 2026
