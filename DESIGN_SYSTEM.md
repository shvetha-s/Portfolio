# Design System Specification: Kids Storybook Fantasy Theme

This design system reflects the **Kids Storybook Fantasy Theme** (inspired by fairytale storybooks, watercolor illustrations, rolling meadow hills, magical characters, and warm parchment typography).

---

## 1. Design Tokens & Core Variables

### 1.1 Color Tokens
Defined in `:root` inside `css/styles.css`:

| Token Name | CSS Value | Storybook Usage |
| :--- | :--- | :--- |
| `--bg-color` | `#FAF7EE` | Warm antique storybook parchment page background |
| `--bg-alt` | `#FFFDF8` | Pure storybook page white for cards, scrolls, and elevated story blocks |
| `--text-primary` | `#1C3D29` | Deep fairytale forest green for primary headings and storybook titles |
| `--text-secondary` | `#4B5347` | Earthy olive charcoal for body text and story descriptions |
| `--text-muted` | `#7A8275` | Soft woodland moss gray for metadata, notes, and dates |
| `--accent` | `#EFA73F` | Golden lantern yellow / fairy dust amber for badges, accents & CTAs |
| `--accent-forest` | `#234E35` | Enchanted woodland pine green for primary buttons and framing |
| `--accent-terracotta` | `#D96D4D` | Warm dragon clay / fairytale rose tone |
| `--accent-sky` | `#D4EBF8` | Whimsical sky ribbon blue |
| `--accent-meadow` | `#5A945E` | Fresh grassy meadow green |

#### Storybook Card & Element Accents:
- **Storybook Parchment Borders**: `1.5px solid rgba(44, 94, 59, 0.12)`
- **Organic Watercolor Shadows**: `0 12px 32px rgba(44, 94, 59, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03)`
- **Paper Cutout Corners**: `border-radius: 20px` with slight organic waviness
- **Watercolor Grassy Hill Dividers**: Hand-drawn SVG wave partitions with gradient fills (`#A8D59D` to `#62A769` and `#D4EBF8` sky ribbons).

---

## 1.2 Typography Tokens & Font Stacks

### Google Font Pairings:
- **Storybook Headings (`--font-heading`)**: `'Fraunces', 'DM Serif Display', Georgia, serif`
  - *Source*: Google Fonts `Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900`
- **Storytelling Cursive / Subtitles (`--font-handwriting`)**: `'Caveat', 'Playfair Display', cursive`
  - *Source*: Google Fonts `Caveat:wght@600;700`
- **Body Text (`--font-body`)**: `'Plus Jakarta Sans', 'Nunito', sans-serif`
  - *Source*: Google Fonts `Plus Jakarta Sans:wght@400;500;600;700`

### Type Hierarchy:
- **Hero Title**: `Fraunces`, `clamp(3.5rem, 7vw, 6.5rem)`, weight `800`, line-height `1.05`
- **Chapter Titles (`.massive-title`)**: `Fraunces`, `clamp(3.2rem, 6vw, 5.5rem)`, weight `800`, color `var(--text-primary)`
- **Block Titles (`.block-title`)**: `Fraunces`, `clamp(1.6rem, 2.8vw, 2.2rem)`, weight `700`
- **Story Body (`.block-text`, `p`)**: `Plus Jakarta Sans`, `1.08rem`, line-height `1.75`
- **Story Chapter Label**: `Caveat`, `1.35rem`, weight `700`, color `var(--accent-terracotta)`

---

## 1.3 Interactive Cursor & Micro-Interactions

- **Magic Star Wand Cursor**: 3D golden fairy star wand (`assets/icons/cursor_32.png`) with gentle starlight sparkle.
- **Storybook Parallax & Stacking**: About page stays pinned like an open storybook while Education and following chapters smoothly turn and slide upwards over it.
