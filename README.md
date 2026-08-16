# Syntax Institution — Official Website

> **"Excellence in Thought. Power in Language."**  
> *Learn • Grow • Achieve*

[![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

Syntax Institution is a premier educational coaching institution based in Dhaka, Bangladesh, delivering concept-driven O/A Level academic coaching, official Japanese Language JLPT programs (conducted in academic collaboration with **MAINICHIKOTOBA Japanese Language Training Centre**), Spoken English, and IELTS exam preparation.

---

## 🌟 Key Features

- 🌓 **Dual Light / Dark Mode System**: Instant appearance switcher positioned in the header with persistent `localStorage` memory and high-contrast styling for both light and dark themes.
- 🛡️ **Interactive Anti-Spam Canvas Captcha**: Custom HTML5 canvas-rendered verification captcha with dynamic noise, line distortion, and theme-reactive redraws to prevent automated spam submissions.
- 📸 **Campus & Classroom Photo Carousel**:
  - Interactive photo slider showcasing the reception desk, air-conditioned lecture classrooms, and faculty board.
  - Automatic 3.8s timer with mouse-hover pause and direct tab selection.
  - **High-Resolution Lightbox Modal**: Click any photo to inspect full-size images with keyboard arrow (`←` / `→`) and `Esc` controls.
- 📋 **Direct Course Finder Survey & QR Code**:
  - High-resolution scan QR codes for fast mobile assessment.
  - Direct clickable link (`or go to this link ↗`) pointing to the official [Google Form Survey](https://docs.google.com/forms/d/e/1FAIpQLSfWT3Cb3fQgH5qt90EI4nXCpvNu4nn70BcHUwBkJc1-4le8Pg/viewform?pli=1).
- 📍 **Strategic Campus Showcase & Google Maps**:
  - Highlights for both **Dhanmondi Science Lab Center** and **Shyamoli Head Office**.
  - Embedded responsive Google Maps with direct *Get Directions* navigation links.
- 📱 **Mobile-Optimized & Responsive**:
  - Fixed-header spacing and zero-horizontal-overflow layout across all smartphone screen sizes.
  - Full-screen touch drawer menu and floating WhatsApp / call quick action buttons.

---

## 🛠️ Technology Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (Plus Jakarta Sans, Outfit, Cinzel)
- **Styling**: Vanilla CSS Design System with custom HSL tokens and CSS variables

---

## 📁 Project Structure

```text
syntax-institution-site/
├── public/
│   └── images/                     # Optimized web assets, banners, QR codes, and center photos
├── src/
│   ├── assets/                     # Static styling assets
│   ├── components/
│   │   ├── Navbar.vue              # Top bar, branding, desktop nav, single theme toggle & mobile drawer
│   │   ├── HeroSection.vue         # Main banner, credentials, stats & quick admission CTA
│   │   ├── NoticeBanner.vue        # Limited-time discount notice & survey QR card
│   │   ├── ProgramsSection.vue     # JLPT, O/A Level, Spoken English, IELTS course cards & finder
│   │   ├── CollaborationSection.vue# Japanese Wing (Mainichikotoba partnership)
│   │   ├── WhyChooseUs.vue         # Core institutional advantages & philosophy
│   │   ├── BranchesSection.vue     # Dhanmondi & Shyamoli campuses + Photo Carousel & Lightbox
│   │   ├── ContactSection.vue      # Admission form, canvas captcha & embedded Google Map
│   │   ├── FooterSection.vue       # Site footer, quick links, campus details & social channels
│   │   └── FloatingQuickActions.vue# Floating WhatsApp, phone call & scroll-to-top helpers
│   ├── composables/
│   │   └── useTheme.js             # Reactive theme switcher with localStorage persistence
│   ├── App.vue                     # Root application container & event coordinator
│   ├── main.js                     # Application entry point
│   └── style.css                   # Global design tokens, dual theme variables & utilities
├── index.html                      # HTML5 template with SEO meta tags & font imports
├── vercel.json                     # Vercel deployment SPA rewrite rules & asset headers
├── package.json                    # Project metadata and dependencies
└── README.md                       # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/syntax-institution-site.git
   cd syntax-institution-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment on Vercel

The project is pre-configured for one-click deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub / GitLab / Bitbucket.
2. Import the repository in your Vercel Dashboard.
3. Vercel automatically detects the Vite configuration:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. The included [`vercel.json`](./vercel.json) manages single-page application (SPA) routing rewrites and static asset caching.

---

## 📍 Campus & Contact Information

| Campus | Address | Contact |
| :--- | :--- | :--- |
| **Dhanmondi Branch** | 32/2 Latimi Shopping Mall, 1st Floor (Opposite Teacher's Training College), Science Lab, Dhaka 1205 | `+880 1737-733026` / `+880 1711-811639` |
| **Shyamoli Branch (Head Office)** | 64/KC, PC Culture Housing Society, Shyamoli, Dhaka 1207 | `+880 1737-733026` / `+880 1711-811639` |

- **Official Email**: [syntax.institution@gmail.com](mailto:syntax.institution@gmail.com)
- **WhatsApp**: [+880 1737-733026](https://wa.me/8801737733026)
- **Facebook**: [Syntax Institution](https://www.facebook.com/people/Syntax-Institution/61579199366752/)
- **Instagram**: [@syntaxinstitution](https://www.instagram.com/syntaxinstitution/)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
