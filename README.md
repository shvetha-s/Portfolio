# 🌻 Swetha S. — UI/UX Designer Portfolio

Welcome to the official personal portfolio codebase of **Swetha S.**, a fresher **UI/UX Designer** focused on crafting simple, intuitive, and visually engaging digital experiences.

---

## 🌟 Key Portfolio Highlights

- **Custom Interactive Sunflower Cursor**: Real-time rotating vector sunflower cursor (`#cursorDot`) with lerped fluid trailing ring (`#cursorRing`) and interactive scaling on link/card hover.
- **Topographic Contour Hero Section**: Interactive mouse-tracking topographic line SVG (`#contourGlow`) featuring custom anime girl illustration sitting on letter **L** (`PORTFOLIO`).
- **Split-Screen Storytelling Layout**: Desktop sticky 50/50 dual-column narrative layout for seamless reading.
- **Multi-Layered Sunset Cloudscape Footer**: Vector cumulus cloudscape matching warm design system palette (`#F7E6D0`, `#FAD399`, `#FF9426`, `#FF4D00`) with edge-to-edge `GET IN TOUCH` typography statement.
- **Interactive Case Studies**:
  - 🥐 **Butterfingers**: Artisan Bakery App Case Study & Interactive Slide Deck Modal
  - 🏡 **Neighbour-to-Neighbour**: Hyperlocal Community Help Network Case Study
- **Google UX Design Certificate Highlights**: Comprehensive breakdown of all 8 specialization courses.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic document structure & accessibility (`aria-labels`).
- **CSS3 / Vanilla CSS**: Custom CSS variables, fluid `clamp()` typography, grid layouts, keyframe animations, glassmorphism (`backdrop-filter`).
- **JavaScript (ES6+)**: Custom mouse tracking, lerp smoothing, slide deck controls, modal lightbox, dynamic menu toggle.
- **Typography**: Google Fonts — *Space Grotesk* (Headings) & *Plus Jakarta Sans* (Body).
- **Deployment Platform**: Vercel & GitHub.

---

## 📁 Repository Structure

```
portfolio/
├── index.html                   # Main Portfolio Homepage
├── butterfingers.html           # Butterfingers Bakery Case Study Page
├── neighbour-to-neighbour.html  # Neighbour-to-Neighbour Case Study Page
├── styles.css                   # Primary Design System & Global Styles
├── case-study.css               # Case Study Specific Styles
├── script.js                    # Interactive JavaScript Controls & Custom Cursor
├── DESIGN_SYSTEM.md             # Complete Design System Tokens & Guidelines
├── Swetha_S_Resume.pdf          # Official Resume PDF Document
├── girl_sunflowers.png          # Hero Illustration Asset
├── bb pin.png                   # Butterfingers Case Study Cover Image
├── nn pin.png                   # Neighbour-to-Neighbour Case Study Cover Image
├── ft pin.png                   # Experience / Feature Pin Image
├── tt pin.png                   # Project Pin Image
├── package.json                 # NPM Package Metadata & Dev Server Commands
├── vercel.json                  # Vercel Clean URL & Caching Routing Rules
└── .gitignore                   # Git Exclusion Rules
```

---

## 🚀 Local Development Setup

To run this portfolio locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/swetha-portfolio.git
   cd swetha-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:8080`.

---

## ⚡ Deployment to Vercel (1-Click)

This project is pre-configured for instant deployment on **[Vercel](https://vercel.com)**.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/swetha-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to **[Vercel Dashboard](https://vercel.com/new)**.
3. Click **"Import Project"** and select `swetha-portfolio` from your GitHub repositories.
4. Keep the Framework Preset as **"Other"** / **"Static HTML"**.
5. Click **"Deploy"**. Your live portfolio link will be generated in seconds!

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

© 2026 Swetha S. All Rights Reserved.
