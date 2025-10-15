# Chinar Deshpande - Professional Portfolio

Ultra-luxury, board-ready portfolio website showcasing 30+ years of global technology leadership. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Overview

This is the professional portfolio of **Chinar Deshpande**, positioning him as India's most valuable Independent Non-Executive Director (INED) with:

- **30+ years** of technology leadership experience
- **14 countries** across geographies
- **8 industries** (E-commerce, Retail, Logistics, FMCG, Education)
- Expertise in **Digital Transformation**, **Robotics Automation**, **ERP Implementation**, and **Innovation Leadership**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd chinar-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start

# Or use preview mode
npm run preview
```

## 📁 Project Structure

```
chinar-portfolio/
├── app/                          # Next.js 14 App Router pages
│   ├── page.tsx                  # Home page (Hero + LinkedIn carousel)
│   ├── about/page.tsx            # About page (Board positioning)
│   ├── experience/page.tsx       # Career timeline
│   ├── board-skills/page.tsx     # Board skills matrix
│   ├── case-studies/             # Case studies section
│   │   ├── page.tsx              # Listing page
│   │   └── [slug]/page.tsx       # Dynamic individual case studies
│   ├── education/page.tsx        # Education & certifications
│   ├── awards/page.tsx           # Awards & recognition
│   ├── articles/page.tsx         # Thought leadership articles
│   ├── robotics/page.tsx         # Robotics & automation platforms
│   ├── contact/page.tsx          # Contact form
│   ├── layout.tsx                # Root layout with fonts and metadata
│   ├── globals.css               # Global styles with Tailwind
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.txt                # SEO robots file
│
├── components/                   # Reusable React components
│   ├── sections/                 # Major page sections
│   │   ├── Navigation.tsx        # Sticky navigation with scroll effects
│   │   ├── Footer.tsx            # Multi-column footer
│   │   ├── Hero.tsx              # Home page hero section
│   │   └── LinkedInPosts.tsx     # LinkedIn posts carousel
│   ├── ui/                       # UI component library
│   │   ├── Button.tsx            # Reusable button (primary/secondary/ghost)
│   │   ├── Card.tsx              # Card component (luxury/boardroom variants)
│   │   ├── Container.tsx         # Responsive container wrapper
│   │   ├── Section.tsx           # Section with background variants
│   │   ├── SectionHeader.tsx     # Consistent section headers
│   │   └── StatCard.tsx          # Animated stat display cards
│   └── JsonLd.tsx                # JSON-LD structured data for SEO
│
├── content/                      # YAML content files (editable)
│   ├── hero.yaml                 # Home page hero content
│   ├── linkedin-posts.yaml       # LinkedIn posts for carousel
│   ├── about.yaml                # About page content
│   ├── experience.yaml           # Career timeline content
│   ├── board-skills.yaml         # Board skills matrix data
│   ├── education.yaml            # Education & certifications
│   ├── awards.yaml               # Awards & recognition
│   ├── articles.yaml             # Thought leadership content
│   ├── robotics.yaml             # Robotics platforms content
│   ├── contact.yaml              # Contact page content
│   └── case-studies/             # Case studies directory
│       ├── index.yaml            # Case studies listing
│       ├── thg-robotics-transformation.yaml
│       ├── future-group-sap-transformation.yaml
│       ├── stellar-innovation-cell.yaml
│       ├── hul-global-peoplesoft.yaml
│       ├── ampersand-education-digital.yaml
│       └── future-group-ecommerce.yaml
│
├── public/                       # Static assets
│   └── images/                   # Images directory (to be added)
│
├── docs/                         # Documentation
│   └── brand.md                  # Brand guidelines and design system
│
├── tailwind.config.ts            # Tailwind custom theme configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies and scripts
```

## ✏️ Content Management

All content is stored in **YAML files** in the `/content` directory. You can edit content without touching any code!

### Editing Content

#### 1. Hero Section (Home Page)

Edit `content/hero.yaml`:

```yaml
headline: "Independent Non-Executive Director"
subheadline: "Visionary Technology Leader"
introduction: "30+ Years Driving Digital Transformation Across 14 Countries"

stats:
  - number: "30+"
    label: "Years of Excellence"
  - number: "14"
    label: "Countries"
  # ... add more stats
```

#### 2. LinkedIn Posts Carousel

Edit `content/linkedin-posts.yaml`:

```yaml
posts:
  - id: "automation-arne"
    url: "https://www.linkedin.com/posts/..."
    title: "Retail Fulfillment with Arne"
    excerpt: "Exploring cutting-edge retail fulfillment..."
    tags: ["Retail", "Fulfillment"]
    date: "2025"
```

#### 3. Case Studies

**Listing:** Edit `content/case-studies/index.yaml`

**Individual Case Studies:** Edit files like `content/case-studies/thg-robotics-transformation.yaml`

Structure:
```yaml
metadata:
  id: "unique-id"
  title: "Case Study Title"
  subtitle: "Subtitle"
  # ... metadata

executive_summary: >
  Summary text...

challenge:
  situation: "..."
  problems: [...]
  stakes: "..."

solution:
  strategy: "..."
  key_initiatives: [...]

# ... more sections
```

#### 4. Other Pages

- **About:** `content/about.yaml`
- **Experience:** `content/experience.yaml`
- **Board Skills:** `content/board-skills.yaml`
- **Education:** `content/education.yaml`
- **Awards:** `content/awards.yaml`
- **Articles:** `content/articles.yaml`
- **Robotics:** `content/robotics.yaml`
- **Contact:** `content/contact.yaml`

### Adding New Case Studies

1. Create a new YAML file in `content/case-studies/`:
   ```bash
   cp content/case-studies/thg-robotics-transformation.yaml content/case-studies/my-new-case-study.yaml
   ```

2. Edit the new file with your content

3. Add it to `content/case-studies/index.yaml`:
   ```yaml
   featured_cases:
     - id: "my-new-case-study"
       title: "My New Case Study"
       # ... metadata
       featured: true  # or false
   ```

4. The page will automatically be created at `/case-studies/my-new-case-study`

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--ivory: #FFF6D9        /* Background - warm ivory */
--gold: #C9A961         /* Accent - restrained gold */
--slate-900: #0F172A    /* Text - editorial slate */
--boardroom-navy: #1A2332  /* Luxury dark navy */
--boardroom-cream: #FAF8F5 /* Subtle cream background */

/* Usage */
bg-ivory-500            /* Ivory backgrounds */
bg-gold-500             /* Gold accents */
text-slate-900          /* Primary text */
bg-boardroom-navy       /* Dark sections */
```

### Typography

```css
/* Font Families */
font-display    /* Cormorant Garamond - Headings */
font-serif      /* Playfair Display - Body serif */
font-sans       /* Inter - UI elements */

/* Typography Scale */
text-display-xl    /* 72px / 4.5rem - Page headlines */
text-display-lg    /* 60px / 3.75rem - Section titles */
text-display-md    /* 48px / 3rem - Large headings */
text-h1            /* 36px / 2.25rem - H1 */
text-h2            /* 30px / 1.875rem - H2 */
text-h3            /* 24px / 1.5rem - H3 */
text-body-xl       /* 20px / 1.25rem - Large body */
text-body-lg       /* 18px / 1.125rem - Body text */
```

### Spacing System

```css
/* Cinematic Spacing */
padding="default"  /* 8rem (128px) vertical padding */
padding="compact"  /* 4rem (64px) vertical padding */

/* Component Spacing */
space-y-8         /* 2rem (32px) vertical spacing */
space-y-12        /* 3rem (48px) section spacing */
space-y-24        /* 6rem (96px) major section spacing */
```

### Components

See `docs/brand.md` for complete brand guidelines including:
- Component patterns (Cards, Buttons, Sections)
- Layout grid and containers
- Shadows and borders
- Accessibility guidelines
- Responsive breakpoints

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  ivory: {
    500: '#FFF6D9',  // Change this hex value
  },
  gold: {
    500: '#C9A961',  // Change this hex value
  },
  // ... other colors
},
```

### Changing Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';

// Replace with your preferred Google Fonts
const myFont = MyFont({
  subsets: ["latin"],
  variable: "--font-my-font",
  display: 'swap',
});
```

### Adding New Pages

1. Create a new page file:
   ```bash
   mkdir app/my-new-page
   touch app/my-new-page/page.tsx
   ```

2. Create the page component:
   ```typescript
   import { Metadata } from 'next';
   import { Navigation, Footer } from '@/components/sections';

   export const metadata: Metadata = {
     title: 'My New Page | Chinar Deshpande',
     description: 'Page description',
   };

   export default function MyNewPage() {
     return (
       <div className="min-h-screen">
         <Navigation />
         <main className="pt-20">
           {/* Your content */}
         </main>
         <Footer />
       </div>
     );
   }
   ```

3. Add navigation link in `components/sections/Navigation.tsx`

4. Create content file: `content/my-new-page.yaml`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
.next

# Or use Netlify CLI
npm install -g netlify-cli
netlify deploy
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://www.chinardeshpande.com
# Add other environment variables as needed
```

## 📊 Performance

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **FID (First Input Delay):** < 100ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅

### Optimization Features

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG) where applicable
- ✅ Automatic image optimization
- ✅ Font optimization (Google Fonts with display: swap)
- ✅ Minimal JavaScript bundle
- ✅ CSS optimized with Tailwind purge

## 🔍 SEO

### Features Implemented

- ✅ Per-page metadata (title, description, OG tags)
- ✅ Dynamic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ JSON-LD structured data (Person, BreadcrumbList, Article schemas)
- ✅ Semantic HTML
- ✅ Accessible navigation
- ✅ Mobile-friendly responsive design

### JSON-LD Schemas

The site includes rich structured data for search engines:

- **Person Schema** (Home, About pages) - Professional profile
- **BreadcrumbList** (All pages) - Navigation breadcrumbs
- **Article Schema** (Articles page) - Thought leadership content
- **VideoObject** (Robotics page) - LinkedIn video embeds
- **ItemList** (Case Studies) - Case study listings

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works across all pages
- [ ] Forms submit correctly (Contact page)
- [ ] LinkedIn carousel scrolls smoothly
- [ ] Case study dynamic routes work
- [ ] Responsive design on mobile/tablet/desktop
- [ ] All links functional
- [ ] Images load correctly (when added)

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Mobile Chrome (Android)

## 📝 Content Checklist

- [x] Home page (Hero + LinkedIn posts)
- [x] About page
- [x] Experience page
- [x] Board Skills Matrix
- [x] Case Studies (6 detailed studies)
- [x] Education page
- [x] Awards & Recognition
- [x] Articles & Insights
- [x] Robotics & Platforms
- [x] Contact page
- [ ] Add professional headshot images
- [ ] Add case study images/screenshots
- [ ] Add platform/technology logos
- [ ] Add award badge images

## 🐛 Troubleshooting

### Build Errors

**Issue:** TypeScript errors during build
```bash
# Check TypeScript errors
npm run type-check

# Fix by running
npm run build
```

**Issue:** YAML parsing errors
- Check YAML syntax in content files
- Ensure proper indentation (use spaces, not tabs)
- Validate YAML: https://www.yamllint.com/

### Development Issues

**Issue:** Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or run on different port
PORT=3001 npm run dev
```

**Issue:** Changes not reflecting
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📚 Additional Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [YAML Syntax Guide](https://yaml.org/spec/1.2.2/)

## 📄 License

© 2025 Chinar Deshpande. All rights reserved.

## 👤 Contact

For questions or support:
- LinkedIn: [linkedin.com/in/chinardeshpande](https://www.linkedin.com/in/chinardeshpande/)
- Website: [www.chinardeshpande.com](https://www.chinardeshpande.com) (once deployed)

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
