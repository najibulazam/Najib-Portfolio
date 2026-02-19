# 💼 Md Najib Ul Azam Mahi - Developer Portfolio

Modern, polished Full Stack Developer portfolio showcasing AI-integrated applications, REST API development, and production-ready web solutions. Built with **React (Vite)**, **Tailwind CSS v4**, and a fully custom CSS design-token system.

## 🚀 Major UI Upgrade — v2.0

This release is a complete visual and architectural overhaul. Every section has been redesigned and a reusable component library has been built from scratch.

### What Changed

| Area | Before | After |
|---|---|---|
| Cards | Ad-hoc Tailwind classes | `ModernCard` — glassmorphic, gradient border reveal on hover |
| Buttons | Inline variants | `PrimaryButton` — solid-gradient + ghost-gradient, WCAG touch targets |
| Sections | Repeated markup | `Section` + `SectionHeading` — consistent layout tokens |
| Entry point | Bare `<main>` | `Layout` — IntersectionObserver scroll-reveal with reduced-motion support |
| Hero tech stack | Static icon list | `TechMarquee` — infinite CSS-scroll animated pill strip |
| YouTube embeds | Eager `<iframe>` | `YouTubeFacade` — click-to-load, eliminates cold network cost on page load |
| Footer | Plain links | `BackToTop` button + modernised social links |
| About section | Standalone page | Removed — content compressed into Hero & Contact |
| Assets | Mixed PNG/JPG | All converted to **WebP** for faster load times |
| SEO | Basic meta | `robots.txt` + `sitemap.xml` added |
| CSS | Scattered utilities | Full **CSS custom-property design token** system |

---

## ✨ Features

### Design & UI/UX
- **CSS Design Token System** — all colours, surfaces, borders, and glows driven by `--c-*` and `--site-*` custom properties; trivial to theme
- **Glassmorphic Navbar** (`nav-shell`) with scroll-spy active section tracking and blurred backdrop
- **Hero Section** — floating radial orbs background, animated profile glow, three status badges (Open to Work, Freelance Available, Remote Friendly)
- **ModernCard** — `backdrop-blur` surface with a gradient border that fades in on hover via CSS `mask-composite` technique
- **TechMarquee** — infinite-scroll animated tech stack strip at the bottom of the hero; duplicated for seamless looping
- **YouTubeFacade** — shows a YouTube thumbnail image; full `<iframe>` is only injected into the DOM after user click, cutting three cold connections on load
- **Layout / Scroll-Reveal** — `IntersectionObserver`-powered `.reveal-on-scroll` system; gracefully degrades for `prefers-reduced-motion` and older browsers
- **BackToTop** — smooth animated button that fades in after scrolling
- Fully responsive design optimised for all screen sizes
- Dark mode ready via Tailwind `dark:` variants and CSS custom properties

### Technical Features
- Clean, modular React component architecture with purpose-built reusable primitives
- CSS custom-property design token system (no magic hex values in component files)
- Lazy-load YouTube embeds — no layout shift, no cold-connection cost
- IntersectionObserver scroll-reveal with reduced-motion and no-JS fallbacks
- WebP image assets for optimised load performance
- SEO: `robots.txt`, `sitemap.xml`, Open Graph meta tags

---

## 🛠 Tech Stack

**Frontend:**
- React 19 (Vite 7.0.4)
- Tailwind CSS v4
- React Icons
- CSS custom properties + modern animations

**Design System:**
- CSS design token variables (`--c-accent`, `--c-surface`, `--c-border`, `--site-bg`, etc.)
- Glassmorphism (`backdrop-filter: blur`)
- `ModernCard` gradient border via `mask-composite` / `-webkit-mask-composite`
- Infinite CSS scroll animation (`TechMarquee`)
- IntersectionObserver scroll-reveal (`Layout`)
- WCAG 2.5.5 compliant touch targets (44 px minimum)

**Projects Highlighted:**
- Django REST Framework
- FastAPI
- PostgreSQL & Supabase
- RAG (Retrieval-Augmented Generation)
- LLM Integration (Groq LLaMA)
- Multi-Agent AI Systems

---

## 📁 Project Structure

```
src/
├── assets/                  # WebP-optimised images and media files
├── components/
│   ├── Layout.jsx            # IntersectionObserver scroll-reveal wrapper
│   ├── Navbar.jsx            # Glassmorphic nav with scroll-spy active tracking
│   ├── Home.jsx              # Hero — gradient text, floating orbs, status badges
│   ├── Experience.jsx        # Client projects with ModernCard hover effects
│   ├── Projects.jsx          # AI projects with YouTubeFacade lazy embeds
│   ├── Education.jsx         # Education cards + certifications
│   ├── Extracurricular.jsx   # Leadership section with ModernCard design
│   ├── Contact.jsx           # Contact cards + Open to Opportunities section
│   ├── Footer.jsx            # Modern footer with social links
│   ├── BackToTop.jsx         # Animated scroll-to-top button
│   ├── ModernCard.jsx        # Reusable glassmorphic card primitive
│   ├── PrimaryButton.jsx     # Solid-gradient and ghost-gradient button variants
│   ├── Section.jsx           # Section layout wrapper
│   ├── SectionHeading.jsx    # Consistent section heading component
│   ├── TechMarquee.jsx       # Infinite-scroll animated tech pill strip
│   └── YouTubeFacade.jsx     # Click-to-load YouTube embed facade
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
└── index.css                 # Design token system + global component classes

public/
├── robots.txt               # SEO crawl rules
├── sitemap.xml              # XML sitemap
└── Md_Najib_Ul_Azam_Mahi_CV.pdf
```

---

## 🧑‍💻 How to Run Locally

```bash
git clone https://github.com/najibulazam/Najib-Portfolio.git
cd Najib-Portfolio
npm install
npm run dev
```

The application will start at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

---

## 🎯 Featured Projects

### 1. Shwapnobunon - Sustainable E-commerce Platform (Client Project)
Full-stack e-commerce platform built for a sustainability-focused client with end-to-end development from requirements to deployment.

**Tech Stack:** FastAPI, React, PostgreSQL (Supabase), Vercel

**Live Site:** [shwapnobunon.com](https://shwapnobunon.com)

### 2. Organic E-Commerce Platform with RAG AI Chatbot
Full-stack e-commerce platform with AI-powered product recommendations using RAG architecture.

**Tech Stack:** Django REST, React, PostgreSQL, RAG, Groq LLaMA 70B, Sentence Transformers

**GitHub:** [View Repository](https://github.com/najibulazam/Organic-E-Commerce-Store-with-RAG-AI-Chatbot)

### 3. AI-Powered Resume Screening System
Multi-agent AI system for automated resume screening with explainable decisions.

**Tech Stack:** FastAPI, React, Multi-Agent AI, Groq LLaMA, NLP

**GitHub:** [View Repository](https://github.com/najibulazam/AI-Powered-Resume-Screening-System)

### 4. AI-Enhanced Online Voting System
Secure voting platform with JWT authentication and AI-generated analytics.

**Tech Stack:** Django REST, React, JWT, Groq LLaMA, AI Analytics

**GitHub:** [View Repository](https://github.com/najibulazam/AI-Enhanced-Online-Voting-System-Using-Django-REST-and-React)

---

## 🌐 Live Demo

[Visit Portfolio](https://md-najib-ul-azam.netlify.app/)

## 🎨 Design System Highlights

- **Design Token Variables:** All colours and surfaces are CSS custom properties — no magic hex values in component files
- **ModernCard border technique:** `linear-gradient` applied via `mask-composite: exclude` to reveal a gradient border only on hover, with zero DOM overhead
- **TechMarquee:** Two identical `<ul>` sets laid out with `translateX` CSS animation creating a seamless infinite loop; `aria-hidden` on the duplicate set
- **YouTubeFacade:** `hqdefault.jpg` thumbnail from YouTube's CDN used as a static preview; iframe injected only on click
- **Scroll-reveal:** `IntersectionObserver` with `rootMargin: 0px 0px -10% 0px` and `threshold: 0.15`; falls back to immediate visibility for `prefers-reduced-motion`
- **Button system:** `btn-gradient` (solid, 200% background-size with hover position shift) and `btn-ghost-gradient` (transparent fill, gradient border)

---

## 📬 Contact

**Email:** azam.mdnajibul@gmail.com  
**LinkedIn:** [linkedin.com/in/najibulazam](https://linkedin.com/in/najibulazam)  
**GitHub:** [github.com/najibulazam](https://github.com/najibulazam)  
**WhatsApp:** +880 1978264938

---

**Open to:** Full-Time Roles | Freelance Projects | Technical Collaborations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
