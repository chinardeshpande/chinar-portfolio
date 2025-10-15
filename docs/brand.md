# Brand System - Chinar Deshpande Portfolio

## Overview
Ultra-luxury, board-ready personal website positioning Chinar Deshpande as India's most valuable Independent Non-Executive Director (INED).

---

## Design Philosophy

**Aesthetic**: Classy white, ivory, restrained gold accents; editorial typography; cinematic spacing; micro-interactions only.

**Tone**: Authority, gravitas, global sophistication, proven excellence.

**Inspiration**: High-end editorial magazines (Monocle, Financial Times Weekend), luxury brand websites, museum exhibition design.

---

## Color Palette

### Primary Colors

#### Ivory (Background & Surfaces)
- **ivory-50**: `#FFFFF0` - Lightest ivory, page backgrounds
- **ivory-500**: `#FFF6D9` - Primary ivory for cards and sections
- **ivory-900**: `#D6CFB5` - Darker ivory for subtle contrast

#### Gold (Accents & Highlights)
- **gold-500**: `#C9A961` - Restrained gold for accents, borders, highlights
- **gold-700**: `#A68739` - Deeper gold for hover states
- **Usage**: Sparingly - underlines, dividers, icons, CTAs

#### Slate (Typography)
- **slate-600**: `#475569` - Primary editorial body text
- **slate-900**: `#0F172A` - Headlines, strong emphasis
- **slate-400**: `#94A3B8` - Secondary text, captions

### Specialty Colors

#### Boardroom
- **boardroom-navy**: `#1A2332` - Deep navy for authority, navigation
- **boardroom-charcoal**: `#2C2C2C` - Sophisticated dark backgrounds
- **boardroom-cream**: `#FAF8F5` - Warm alternative background

---

## Typography

### Font Families

#### Display & Headlines
```css
font-family: 'Cormorant Garamond', 'Playfair Display', serif
```
- **Usage**: Hero headlines, section titles, pull quotes
- **Character**: Elegant, editorial, sophisticated
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium)

#### Serif Body
```css
font-family: 'Playfair Display', Georgia, serif
```
- **Usage**: Subheadings, emphasized paragraphs, card titles
- **Character**: Classic, authoritative
- **Weights**: 400 (Regular), 600 (SemiBold), 700 (Bold)

#### Sans Body
```css
font-family: 'Inter', system-ui, sans-serif
```
- **Usage**: Body text, UI elements, navigation, buttons
- **Character**: Clean, modern, highly legible
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Type Scale (Cinematic Editorial)

| Token | Size | Line Height | Letter Spacing | Use Case |
|-------|------|-------------|----------------|----------|
| `text-hero` | 4.5rem (72px) | 1.1 | -0.02em | Homepage hero |
| `text-display-xl` | 3.75rem (60px) | 1.1 | -0.015em | Page headers |
| `text-display-lg` | 3rem (48px) | 1.15 | -0.01em | Section headers |
| `text-display-md` | 2.25rem (36px) | 1.2 | -0.005em | Subsections |
| `text-display-sm` | 1.875rem (30px) | 1.25 | 0 | Card titles |
| `text-body-xl` | 1.25rem (20px) | 1.75 | 0 | Large body |
| `text-body-lg` | 1.125rem (18px) | 1.75 | 0 | Standard body |
| `text-base` | 1rem (16px) | 1.5 | 0 | UI elements |

---

## Spacing System

### Cinematic Scale
- **section**: `8rem` (128px) - Vertical spacing between major sections
- **section-sm**: `6rem` (96px) - Smaller section spacing
- **container**: `1440px` - Max content width

### Standard Scale
- Use Tailwind's default spacing: `4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64`
- **Principle**: Generous whitespace = luxury

---

## Shadows & Effects

### Shadows
```css
shadow-luxury: 0 4px 24px rgba(0, 0, 0, 0.06)
shadow-luxury-lg: 0 8px 40px rgba(0, 0, 0, 0.08)
shadow-gold-glow: 0 0 20px rgba(201, 169, 97, 0.15)
```

### Animations (Subtle Only)
- **fade-in**: 0.6s ease-in-out
- **slide-up**: 0.5s ease-out
- **slide-in**: 0.4s ease-out

**Principle**: Micro-interactions should enhance, not distract. Use sparingly.

---

## Component Patterns

### Cards
```tsx
<div className="bg-ivory-500 rounded-lg shadow-luxury p-8 border border-gold-500/10">
  {/* Content */}
</div>
```

### Buttons (Primary)
```tsx
<button className="bg-gold-500 hover:bg-gold-700 text-white px-8 py-3 rounded font-medium transition-colors">
  View Board Bio
</button>
```

### Buttons (Secondary)
```tsx
<button className="border-2 border-boardroom-navy text-boardroom-navy hover:bg-boardroom-navy hover:text-white px-8 py-3 rounded font-medium transition-all">
  Schedule Introduction
</button>
```

### Section Headers
```tsx
<h2 className="font-display text-display-lg text-slate-900 mb-4">
  Professional Experience
</h2>
<div className="w-24 h-0.5 bg-gold-500 mb-12"></div>
```

### Dividers (Gold Accent)
```tsx
<div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent my-section"></div>
```

---

## Layout Grid

### Container
```tsx
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-24">
  {/* Content */}
</div>
```

### Column Grids
- **Two-column**: `grid grid-cols-1 lg:grid-cols-2 gap-12`
- **Three-column**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Asymmetric**: `grid grid-cols-12`, use `col-span-*`

---

## Accessibility

- **WCAG AA Compliant**: All text meets 4.5:1 contrast ratio
- **Focus States**: Gold outline on interactive elements
- **Keyboard Navigation**: Full keyboard support
- **ARIA**: Proper labeling and roles

---

## Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

---

## Image Treatment

### Profile/Hero Images
- **Aspect Ratio**: 1:1 (square) or 3:4 (portrait)
- **Treatment**: Subtle grayscale overlay with gold border
- **Size**: High resolution (minimum 1200px width)

### Company Logos
- **Treatment**: Grayscale by default, color on hover
- **Size**: Consistent height (48-64px)
- **Spacing**: Generous padding around logos

### Case Study Images
- **Aspect Ratio**: 16:9
- **Treatment**: Overlay with gradient on hover
- **Caption**: Small text, slate-400

---

## Content Tone

### Headlines
- Authoritative, concise
- Lead with quantified achievements
- Example: "30+ Years Driving Technology Excellence Across 14 Countries"

### Body Copy
- Third-person (for authority)
- Specific, quantified results
- Industry terminology (ERP, digital transformation, board governance)

### CTAs
- Professional, invitation-based
- Examples: "Schedule Introduction Call", "View Board Bio", "Explore Case Studies"

---

## Do's and Don'ts

### ✅ Do
- Use generous whitespace
- Emphasize quantified achievements (30+ years, 14 countries, INR 3B budget)
- Keep gold accents restrained
- Use editorial typography for authority
- Maintain clean, uncluttered layouts

### ❌ Don't
- Overuse animations or transitions
- Use bright, saturated colors
- Crowd content - let it breathe
- Use casual language or first-person
- Add decorative elements without purpose

---

## Implementation Notes

### Font Loading
Load fonts in `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
```

### Dark Mode
Not required - site maintains consistent light, luxury aesthetic.

### Performance
- Use Next.js Image component for all images
- Lazy load below-the-fold content
- Keep animations CSS-based (no heavy JS)

---

**Version**: 1.0
**Last Updated**: October 2025
**Designer**: Chinar Deshpande Portfolio Project
