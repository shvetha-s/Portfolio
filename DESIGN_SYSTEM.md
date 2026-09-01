# Design System Specification: Swetha S. Portfolio & Case Studies

This design system is extracted directly from the codebase (`styles.css`, `case-study.css`, `index.html`, `butterfingers.html`, `neighbour-to-neighbour.html`, and `script.js`).

---

## 1. Design Tokens & Core Variables

### 1.1 Color Tokens
Defined in `:root` inside `styles.css`:

| Token Name | CSS Value | Usage / Role in Project |
| :--- | :--- | :--- |
| `--bg-color` | `#FEF0B6` | Primary **Light Yellow** background for body, chapters, and warm storytelling canvas |
| `--bg-azure` | `#BBD3E0` | Secondary **Light Azure** for cloud layers, glow accents, and interactive badges |
| `--bg-alt` | `#FFFFFF` | Elevated crisp card and panel backgrounds (`.alt-bg`, `.pinned-note-card`) |
| `--text-primary` | `#472F26` | Primary **Dark Gray Brown** for bold wordmark headlines, massive titles, and text |
| `--text-secondary` | `#6E554C` | Warm muted espresso brown for body copy, school names, and metadata |
| `--accent` | `#472F26` | Signature **Dark Gray Brown** accent for eyebrows, author name, buttons, and custom cursor |
| `--accent-azure` | `#BBD3E0` | Signature **Light Azure** contrast accent for clouds, footer links, and radial glows |

#### Component-Specific Color Implementations:
- **Header Overlay**: `background: rgba(254, 240, 182, 0.88)` with `backdrop-filter: blur(16px)`
- **Hero Radial Glows**: `radial-gradient(circle, rgba(187, 211, 224, 0.75) 0%, rgba(187, 211, 224, 0.35) 45%, transparent 70%)`
- **Custom Cursor**: Dark Gray Brown `#472F26` sunflower petals with Light Azure `#BBD3E0` and Light Yellow `#FEF0B6` core
- **Pinned Education Theme**: `#FEF0B6` drafting grid background with white cards and Dark Gray Brown `#472F26` pushpins
- **Cloudscape Footer**: 4-Layer Cloudscape (Layer 1 Pale Azure `#DCE8EF`, Layer 2 Light Azure `#BBD3E0`, Layer 3 Light Yellow `#FEF0B6`, Layer 4 Dark Gray Brown `#472F26`) with glowing Light Yellow "Get in touch" headline

---

### 1.2 Typography Tokens & Font Stacks

#### Font Families:
- **Heading Font Stack (`--font-heading`)**: `'Space Grotesk', 'Helvetica Neue', Arial, sans-serif`
  - *Source*: Google Fonts `Space Grotesk:wght@400;500;600;700`
- **Body Font Stack (`--font-body`)**: `'Plus Jakarta Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif`
  - *Source*: Google Fonts `Plus Jakarta Sans:wght@300;400;500;600;700;800`

#### Exact Type Scale & Styles:

| Element / Class | Font Family | Size | Weight | Line Height | Letter Spacing | Text Transform | Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** (`.hero-typography h1`) | `--font-heading` | `clamp(6rem, 15vw, 15rem)` | `500` | `1` | `-0.05em` | None | `var(--text-primary)` |
| **Hero Eyebrow** (`.hero-typography span`) | `--font-heading` | `2rem` | Normal | Normal | Normal | None | `var(--accent)` |
| **Hero Statement** (`.hero-statement`) | `--font-body` | `1.5rem` | Normal | `1.6` | Normal | None | `var(--text-secondary)` |
| **Chapter Sticky Title** (`.massive-title`) | `--font-heading` | `clamp(4rem, 8vw, 10rem)` | `500` | `0.9` | `-0.03em` | None | `var(--text-primary)` |
| **Project Outlined Title** (`.project-title`) | `--font-heading` | `clamp(4rem, 8vw, 10rem)` | `500` | `0.9` | `-0.03em` | None | Transparent / `1px` stroke |
| **Kinetic Hero BG** (`.kinetic-track span`) | `--font-heading` | `clamp(8rem, 20vw, 20rem)`| `700` | Normal | Normal | Uppercase | Inherited (`0.04` opacity) |
| **Kinetic Divider** (`.kinetic-track-fast span`)| `--font-heading` | `clamp(3rem, 6vw, 6rem)` | `600` | Normal | `0.05em` | Uppercase | `var(--bg-color)` |
| **Footer Massive Text** (`.footer-huge-text`) | `--font-heading` | `13.5vw` | `700` | `1` | `-0.02em` | Uppercase | `var(--bg-color)` |
| **Section Block Title** (`.block-title`) | `--font-heading` | `2.5rem` | `500` | Normal | `-0.02em` | None | `var(--text-primary)` |
| **Skill Card Title** (`.skill-card-title`) | `--font-heading` | `2rem` | `500` | Normal | `-0.02em` | None | `var(--text-primary)` |
| **Next Project Title** (`.cs-next-title`) | `--font-heading` | `clamp(2.5rem, 5vw, 4rem)` | `700` | Normal | Normal | None | `#ffffff` |
| **Footer Brand Name** (`.footer-brand`) | `--font-heading` | `1.5rem` | `600` | Normal | Normal | None | Inherited |
| **Header Logo** (`.logo`) | `--font-heading` | `1.2rem` | `500` | Normal | `-0.02em` | None | `var(--text-primary)` |
| **Section Number** (`.block-number`) | `--font-heading` | `1.2rem` | Normal | Normal | Normal | None | `var(--accent)` |
| **Skill Card Number** (`.skill-card-number`)| `--font-heading` | `6rem` | `700` | `1` | Normal | None | `rgba(0, 0, 0, 0.7)` |
| **Education Card Title** (`.edu-card-title`) | `--font-heading` | `1.05rem` | `600` | `1.25` | Normal | None | `var(--text-primary)` |
| **Education Number** (`.edu-card-number`) | `--font-heading` | `0.95rem` | `700` | Normal | `0.05em` | None | `var(--accent)` |
| **Education Score** (`.edu-card-score`) | `--font-heading` | `0.9rem` | `700` | Normal | Normal | None | `var(--accent)` |
| **Body / Block Text** (`.block-text`, `li`) | `--font-body` | `1.1rem` | Normal | `1.8` | Normal | None | `var(--text-secondary)` |
| **Skill Body Text** (`.skill-card-text`) | `--font-body` | `1.05rem` | Normal | `1.6` | Normal | None | `var(--text-secondary)` |
| **Nav Links** (`.nav-links a`) | `--font-body` | `0.9rem` | Normal | Normal | `0.05em` | Uppercase | `var(--text-primary)` |
| **Case Study Back Button** (`.cs-back-btn`) | `--font-body` | `0.95rem` | `500` | Normal | Normal | None | `var(--text-primary)` |
| **Case Study Header Title** (`.cs-header-title`)| `--font-heading`| `1rem` | `500` | Normal | `0.05em` | Uppercase | `var(--text-secondary)` |
| **Case Study Label** (`.cs-next-label`) | `--font-body` | `0.9rem` | `600` | Normal | `0.1em` | Uppercase | `var(--accent)` |
| **Primary/Secondary Buttons** (`.cs-btn-*`) | `--font-body` | `1rem` | `600` | Normal | Normal | None | Dynamic |
| **Scroll Prompt Label** (`.scroll-prompt span`)| `--font-body` | `0.8rem` | Normal | Normal | `0.1em` | Uppercase | `var(--text-secondary)` |
| **School Meta / Years** (`.edu-card-school`, `.edu-card-year`)| `--font-body` | `0.78rem` / `0.85rem` | Normal / `500` | `1.35` | Normal | None | `var(--text-secondary)` |

---

### 1.3 Motion & Transition Tokens

- **Global Transition Token (`--transition`)**: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1)`
- **Keyframe Animations**:
  1. `scrollText`: `0% { transform: translateX(0); } 100% { transform: translateX(-50%); }`
     - Kinetic Hero Background: `40s linear infinite`
     - Kinetic Divider: `20s linear infinite`
  2. `fadeInUp`: `0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); }`
     - Cubic-bezier timing: `1s cubic-bezier(0.16, 1, 0.3, 1) forwards`
     - Delay steps: `.delay-1` (`0.2s`), `.delay-2` (`0.4s`), `.delay-3` (`0.6s`), `.delay-4` (`1s`)
  3. `fadeIn`: `from { opacity: 0; } to { opacity: 1; }` (Used for Lightbox: `0.25s ease`)

---

## 2. Layout Structure & Grid Rules

### 2.1 Split-Screen Storytelling Layout (Desktop)
- Container: `.story-chapter` (`display: flex; min-height: 100vh; position: relative;`)
- Sticky Left Column: `.sticky-title-area`
  - `width: 50%`
  - `position: sticky; top: 0; height: 100vh;`
  - `display: flex; align-items: center; padding-left: 10%;`
- Scrolling Right Column: `.scrolling-content-area` / `.skills-grid-area` / `.education-grid-area`
  - `width: 50%`
  - `padding: 30vh 10% 30vh 0;`
  - `gap: 20vh;` (for `.scrolling-content-area`)

### 2.2 Header System
- Main Story Header (`.story-header`): `position: fixed; top: 0; width: 100%; padding: 2rem 4rem; display: flex; justify-content: space-between; align-items: center; z-index: 100; mix-blend-mode: difference;`
- Case Study Header (`.cs-header`): `position: fixed; top: 0; left: 0; width: 100%; padding: 1.25rem 4rem; display: flex; justify-content: space-between; align-items: center; background: rgba(240, 238, 233, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(0, 0, 0, 0.08); z-index: 100;`

### 2.3 Education Grid
- Grid Container (`.education-grid-area`): `width: 50%; padding: 30vh 10% 30vh 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem; align-items: stretch;`

### 2.4 Footer Grid & Structure
- Footer Container (`.massive-footer`): `background-color: var(--accent); color: var(--bg-color); padding: 3rem 4rem 1rem; border-top: 1px solid rgba(0, 0, 0, 0.1);`
- Navigation Grid (`.footer-nav-grid`): `display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem 4rem;`

---

## 3. Component Specifications

### 3.1 Custom Omnitrix Cursor
- Native cursor hidden globally: `* { cursor: none; }`
- Container (`.cursor`): `position: fixed; width: 96px; height: 96px; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); display: flex; justify-content: center; align-items: center;`
- Image (`.omnitrix-cursor`): `width: 84px; height: 84px; object-fit: contain; transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease; filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.75));`
- Active State (`.cursor.active .omnitrix-cursor`): `transform: scale(1.25) rotate(45deg); filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 28px rgba(255, 77, 0, 0.95));`
- Interactable Elements Triggering Active Cursor: `a`, `button`, `.story-link`, `.cs-img-card`, `.cs-back-btn`, `.skill-card`

### 3.2 Outlined Case Study Titles
- Default State (`.project-title`): `color: transparent; -webkit-text-stroke: 1px var(--text-primary); transition: var(--transition);`
- Hover State (`.story-chapter:hover .project-title`): `color: var(--text-primary); -webkit-text-stroke: 0px;`

### 3.3 Skill Card Component (`.skill-card`)
- Layout: `display: flex; flex-direction: row; min-height: 220px; background: var(--bg-alt); border-radius: 8px; overflow: hidden; border: 1px solid rgba(0, 0, 0, 0.05);`
- Left Visual Block (`.skill-card-image`): `width: 200px; flex-shrink: 0; background: linear-gradient(135deg, rgba(255, 77, 0, 0.9), rgba(255, 77, 0, 0.3)); position: relative;`
- Large Number (`.skill-card-number`): Centered `6rem` bold number with `color: rgba(0, 0, 0, 0.7)`
- Right Content (`.skill-card-content`): `padding: 2.5rem; display: flex; flex-direction: column; flex: 1; justify-content: center;`
- Hover Effect: `box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 20px rgba(255, 77, 0, 0.15);`

### 3.4 Education Card Component (`.edu-card`)
- Layout: Full-width stacked card (`background: var(--bg-alt); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 12px; padding: 1.75rem 2rem; display: flex; flex-direction: column; gap: 0.85rem; width: 100%;`)
- Accent Left Indicator Bar (`.edu-card::before`): `position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--accent); opacity: 0; transition: opacity 0.3s ease;`
- Hover State: `transform: translateY(-4px); border-color: rgba(255, 77, 0, 0.4); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 77, 0, 0.15);` and `.edu-card::before { opacity: 1; }`
- Header Row (`.edu-card-header-row`): Contains number tag (`.edu-card-number`) and pill year tag (`.edu-card-year`).
- Title & School (`.edu-card-title`, `.edu-card-school`): Prominent 600-weight degree title and institution.
- Bottom Meta Row (`.edu-card-meta`): Displays score label (`.edu-card-badge`) and score value (`.edu-card-score`).

### 3.5 Button System
1. **Pill Back Button (`.cs-back-btn`)**:
   - `padding: 0.5rem 1rem; border-radius: 999px; background: rgba(0, 0, 0, 0.05); border: 1px solid rgba(0, 0, 0, 0.1); color: var(--text-primary);`
   - Hover: `background: var(--accent); color: var(--bg-color); border-color: var(--accent);`
2. **Primary Action Button (`.cs-btn-primary`)**:
   - `padding: 1rem 2.25rem; background: var(--accent); color: var(--bg-color); font-weight: 600; border-radius: 999px;`
   - Hover: `box-shadow: 0 10px 25px rgba(255, 77, 0, 0.3);`
3. **Secondary Action Button (`.cs-btn-secondary`)**:
   - `padding: 1rem 2.25rem; background: transparent; color: var(--text-primary); border: 1px solid rgba(0, 0, 0, 0.2); font-weight: 600; border-radius: 999px;`
   - Hover: `background: rgba(0, 0, 0, 0.08); border-color: var(--text-primary);`
4. **Story Text Link (`.story-link`)**:
   - `display: inline-block; margin-top: 2rem; color: var(--text-primary); border-bottom: 1px solid var(--text-primary); padding-bottom: 2px;`
   - Hover: `color: var(--accent); border-color: var(--accent);`

### 3.6 Social Icon Buttons
- Container (`.footer-social-icons a`): `width: 44px; height: 44px; background-color: var(--bg-color); border-radius: 8px; display: flex; justify-content: center; align-items: center;`
- SVG Icon: `fill: var(--accent); width: 18px; height: 18px;`
- Hover: `transform: translateY(-3px);`

### 3.7 Slide Deck & Lightbox Modal
- Slide Wrapper (`.cs-slide-wrap`): `border-radius: 16px; overflow: hidden; background: #111114; border: 1px solid rgba(0, 0, 0, 0.08); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);`
- Slide Image (`.cs-slide-img`): `width: 100%; height: auto; display: block; object-fit: contain; cursor: zoom-in; image-rendering: -webkit-optimize-contrast;`
- Lightbox Modal (`.cs-lightbox`): `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.94); display: none; justify-content: center; align-items: center; z-index: 10000; padding: 2rem; cursor: zoom-out;`
- Lightbox Open State (`.cs-lightbox.open`): `display: flex; animation: fadeIn 0.25s ease;`

### 3.8 Pinned Polaroid Project Visuals
- Container (`.project-visual-frame`): `width: 100%; max-width: 650px; display: flex; justify-content: flex-start; align-items: center; position: relative; padding: 0.5rem 0;`
- Pinned Image (`.project-pin-img`): `width: 100%; max-width: 580px; height: auto; max-height: 72vh; object-fit: contain; filter: drop-shadow(0 20px 45px rgba(0, 0, 0, 0.85)); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease; transform: rotate(-2deg);`
- Hover Interactive Glow: `transform: rotate(0deg) scale(1.03); filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 30px rgba(255, 77, 0, 0.25));`

---

## 4. Responsive Breakpoint Rules

### 4.1 `@media (max-width: 1024px)`
- `.story-header`: `padding: 1rem 1.5rem; background: rgba(240, 238, 233, 0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(0, 0, 0, 0.08); z-index: 1000;`
- `.mobile-menu-btn`: Displayed on mobile with 3 animated bars (`width: 44px; height: 44px; border-radius: 10px;`). Morphs to 'X' on toggle.
- `.nav-links`: Fullscreen frosted glass drawer overlay (`width: 100vw; height: 100vh; background: rgba(240, 238, 233, 0.98); backdrop-filter: blur(24px);`).
- `.nav-links a`: `font-size: 1.85rem; font-weight: 600;` with lime accent active/hover color.
- `.story-chapter`: Stacks vertically (`flex-direction: column; min-height: auto;`)
- `.hero-chapter`: `height: auto; min-height: auto; padding: 5rem 0 1.5rem;`
- `.sticky-title-area`: `padding: 2rem 1.5rem 0.25rem;`
- `.scrolling-content-area`: `padding: 0.5rem 1.5rem 2.5rem; gap: 2rem;`
- `.skills-grid-area`: `padding: 0.5rem 1.5rem 2.5rem; gap: 1.5rem;`
- `.education-grid-area`: `grid-template-columns: 1fr; gap: 1rem; padding: 0.5rem 1.5rem 2.5rem;`
- `.massive-footer`: `padding: 2.5rem 1.5rem 1rem;`
- `.footer-top-content`: Stacks vertically (`flex-direction: column; gap: 2rem;`)
- `.footer-huge-text`: Scaled to `clamp(2.4rem, 11vw, 5.5rem)`

### 4.2 `@media (max-width: 768px)`
- `.skill-card`: Stacks vertically (`flex-direction: column; min-height: auto;`)
- `.skill-card-image`: Full width banner (`width: 100%; height: 130px;`)
- `.skill-card-number`: `font-size: 4rem;`
- `.skill-card-content`: `padding: 1.5rem;`
- `.skill-card-title`: `font-size: 1.6rem;`
- `.skill-card-text`: `font-size: 0.95rem; margin-bottom: 1.25rem;`
- `.hero-typography h1`: `font-size: clamp(3.2rem, 14vw, 5rem); margin-bottom: 1.25rem;`
- `.hero-statement`: `font-size: 1.15rem;`
- `.scroll-prompt`: `bottom: 2rem; left: 1.5rem;`
- `.block-title`: `font-size: 1.85rem; margin-bottom: 1rem;`
- `.kinetic-divider`: `padding: 4vh 0; margin: 6vh 0;`
- `.kinetic-track span`: `font-size: clamp(4rem, 14vw, 8rem);`
- `.kinetic-track-fast span`: `font-size: clamp(2rem, 6vw, 3.5rem);`
- `.footer-social-icons`: `gap: 0.75rem;`
- `.footer-social-icons a`: `width: 42px; height: 42px;`
- `.footer-nav-grid`: `grid-template-columns: repeat(2, 1fr); gap: 1rem 2rem;`
- `.footer-bottom-content`: `flex-direction: column; gap: 0.5rem; text-align: left;`

### 4.3 `@media (max-width: 480px)`
- `.sticky-title-area`: `padding: 4.5rem 1.25rem 0.5rem;`
- `.scrolling-content-area`, `.skills-grid-area`, `.education-grid-area`: `padding: 1rem 1.25rem 4rem; gap: 3rem;`
- `.massive-title`: `font-size: clamp(2.8rem, 14vw, 4rem);`
- `.footer-huge-text`: `font-size: clamp(2.2rem, 10.5vw, 3.8rem);`
- `.footer-nav-grid`: `grid-template-columns: 1fr; gap: 0.75rem;`
- `.cs-header-title`: `display: none;`
- `.cs-container`: `padding: 5.5rem 1.25rem 3rem; gap: 2rem;`

