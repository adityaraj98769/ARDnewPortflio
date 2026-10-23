# Adityaraj Dwivedi — Personal Portfolio

> A modern, component-driven portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**, implementing an elegant **Sage & Off-White** design system.

---

## 🌿 Tech Stack & Architecture

- **Core Framework**: [React 18](https://react.dev/) (Component-based architecture, hooks, declarative UI)
- **Build Tool & Bundler**: [Vite 5](https://vitejs.dev/) (Fast HMR, optimized production build)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/) (Lightweight, accessible SVGs)
- **Contact Integration**: [EmailJS](https://www.emailjs.com/) (Direct browser-based email delivery)

---

## 🎨 Design System: Sage & Off-White

The interface uses a centralized, serene visual theme defined in `tailwind.config.js`:

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `bg` | `#F8F9F6` | Primary page canvas |
| `surface` | `#EFF2ED` | Alternating section backgrounds & pill containers |
| `text` | `#202720` | High-contrast body text & titles |
| `muted` | `#69736B` | Secondary narrative & metadata |
| `primary` | `#527A65` | Brand accent, active states, key buttons |
| `hover` | `#3E624F` | Button & link hover states |
| `border` | `#E1E6DE` | Subtle card & section dividing lines |
| `card` | `#FFFFFF` | Surface containers with soft drop shadows |

---

## 📁 Project Structure

```text
MYPortfolio/
├── public/
│   ├── assets/
│   │   ├── my-profile.jpeg
│   │   ├── appreciation-vc.jpg
│   │   ├── appreciation-stage.jpg
│   │   └── Adityaraj_Dwivedi_Canva_Style_Resume-tags_removed (1).pdf
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header, active section indicator, CV download
│   │   ├── MobileMenu.jsx      # Accessible mobile slide-out drawer
│   │   ├── Hero.jsx            # Hero statement, circular profile aura, CTAs
│   │   ├── About.jsx           # Narrative, stats cards, academic background
│   │   ├── Skills.jsx          # Categorized toolkit badges
│   │   ├── Projects.jsx        # Flagship Waste2Worth spotlight + AI projects
│   │   ├── ProjectCard.jsx     # Reusable card component with tags & links
│   │   ├── ClientWork.jsx      # Production commercial builds & client sites
│   │   ├── Appreciation.jsx    # University leadership felicitation gallery
│   │   ├── LightboxModal.jsx   # High-resolution image modal with captions
│   │   ├── OpenSource.jsx      # GitHub repository showcase
│   │   ├── Contact.jsx         # Working EmailJS contact form with feedback
│   │   └── Footer.jsx          # Copyright, heart accent, smooth scroll-to-top
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── App.jsx                 # Main layout composition & global state
│   ├── main.jsx                # React root mount
│   └── index.css               # Tailwind directives & typography setup
├── legacy-vanilla-backup/      # Safe backup of original HTML/CSS/JS files
├── index.html                  # HTML entry point with SEO metadata
├── tailwind.config.js          # Theme tokens & typography configuration
├── postcss.config.js           # PostCSS Tailwind & Autoprefixer plugin config
├── vite.config.js              # Vite React configuration
└── package.json                # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed:

```bash
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/adityaraj98769/MYPortfolio.git
cd MYPortfolio
npm install
```

### Development Server

Start Vite's development server with instant Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:3000` (or the port specified in terminal) in your browser.

### Production Build

Compile and bundle for production:

```bash
npm run build
```

This generates an optimized static distribution in the `dist/` directory.

### Preview Production Build

Preview the compiled bundle locally:

```bash
npm run preview
```

---

## 🌐 Deployment

The output in `dist/` is 100% static and ready to deploy to any modern host:

### Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect the repository on [Vercel Dashboard](https://vercel.com/) — Vercel will auto-detect Vite and set:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Deploying to Netlify / GitHub Pages

- **Publish directory**: `dist`
- **Build command**: `npm run build`

---

## ✉️ Contact Form Configuration

The contact form is wired to EmailJS using credentials:
- **Service ID**: `service_im4c2ls`
- **Template ID**: `template_862ep26`
- **Public Key**: `0KpnCeTqIKol1X-rD`

Form state, real-time loading feedback, error recovery, and success alerts are handled declaratively in `src/components/Contact.jsx`.
