# BrandQraft — Premium Brand Agency Website

> **"We Craft Brands That Build Businesses."**

A sophisticated, minimal, and confident homepage design for BrandQraft, built with Next.js 14, React, and TypeScript. A premium creative and product development agency that blends artistry with strategy.

---

## 🎨 Design Philosophy

**Quiet Confidence** — Premium, not flashy. Strategic thinking meets creative excellence.

### Design Attributes

| Attribute | Direction |
|-----------|-----------|
| **Overall Tone** | Sophisticated, minimal, confident |
| **Color Palette** | Monochrome base + Royal Blue accent (#2563eb) |
| **Typography** | Modern sans-serif (Inter) with generous line height |
| **Imagery Style** | Conceptual, abstract, motion-based — no cliché stock photos |
| **Animation Style** | Subtle and deliberate — fade-ins, parallax, microinteractions |

---

## 📋 Page Structure

### 1. **Hero Section** — "We Craft Brands That Build Businesses."
- Full-screen (100vh) hero with animated gradient orbs
- Bold headline with modern typography
- Two CTAs: "Start Your Project" (primary) & "Explore Our Work" (secondary)
- Subtle parallax scroll effect

### 2. **About BrandQraft** — "Where Vision Meets Precision."
- Two-column split layout
- Left: Compelling text with CTA
- Right: Animated abstract shapes representing creative process

### 3. **Our Expertise** — "End-to-End Brand Evolution."
- Three service cards with scroll-triggered animations
- Custom SVG icons with hover effects
- Services: Brand Identity & Strategy, Digital Product Design, Creative Campaigns

### 4. **Work / Clients** — "Trusted by Visionaries."
- Featured project showcase
- Client logo grid with scroll animations

### 5. **Our Approach** — "Creativity with Method."
- Four-step process visualization (Understand → Research → Design → Deliver)
- Scroll-triggered step animations

### 6. **Why Choose BrandQraft** — "Not Just an Agency — a Growth Partner."
- Two-column layout with four key differentiators
- Slide-in animations for each highlight

### 7. **CTA Section** — "Let's Build What's Next."
- Deep background with blueprint grid texture
- Bold CTAs for engagement

### 8. **Footer**
- Three-column structure
- Brand info, quick links, contact & social

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd brandqraft
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
brandqraft/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── HeroSection.tsx     # Hero with parallax effects
│   ├── AboutSection.tsx    # About with animated shapes
│   ├── ExpertiseSection.tsx    # Services grid
│   ├── WorkSection.tsx     # Portfolio showcase
│   ├── ApproachSection.tsx # Process steps
│   ├── WhyChooseSection.tsx    # Differentiators
│   ├── CTASection.tsx      # Call-to-action
│   ├── Footer.tsx          # Footer component
│   ├── ScrollProgress.tsx  # Progress bar
│   └── *.module.css        # Component-specific styles
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

---

## ✨ Features

### Modern Next.js Stack
- **Next.js 14** with App Router
- **React 18** with Server and Client Components
- **TypeScript** for type safety
- **CSS Modules** for component-scoped styling

### Animations & Interactions
- **Parallax scrolling** on hero section
- **Intersection Observer API** for scroll-triggered animations
- **Hover effects** on cards, buttons, and interactive elements
- **Smooth scrolling** for anchor links
- **Scroll progress indicator** at top of page
- **Mobile-responsive navigation** with hamburger menu

### Performance
- Server-side rendering (SSR) by default
- Optimized fonts with `next/font`
- Automatic code splitting
- Image optimization ready
- React Server Components where applicable

### Responsive Design
- **Desktop**: Full multi-column layouts
- **Tablet** (< 1024px): Adaptive grid layouts
- **Mobile** (< 768px): Stacked layouts with hamburger menu
- **Small Mobile** (< 480px): Optimized typography and spacing

---

## 🎯 Key Technologies

- **Next.js 14** — React framework with App Router
- **React 18** — UI library with hooks
- **TypeScript** — Type safety
- **CSS Modules** — Scoped styling
- **Inter Font** — Modern, professional typography

---

## 🎨 Color Palette

```css
/* Monochrome Base */
--primary-dark: #0a0a0a
--secondary-dark: #1a1a1a
--charcoal: #2a2a2a
--grey-dark: #666666
--grey-medium: #999999
--grey-light: #e5e5e5
--off-white: #f8f8f8
--pure-white: #ffffff

/* Accent Color - Royal Blue */
--accent: #2563eb
--accent-dark: #1e40af
--accent-light: #3b82f6
```

---

## 📱 Customization

### Changing Colors
Edit the CSS custom properties in `app/globals.css`:
```css
:root {
    --accent: #2563eb; /* Change to your brand color */
}
```

### Updating Content
Content is in individual component files in the `components/` directory. Each section is a separate component for easy maintenance.

### Adding New Sections
1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Use CSS Modules for styling

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

```bash
npm run build
# Upload the .next and public folders
```

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported — uses modern features)

---

## 📈 Performance Tips

1. **Optimize Images**: Use Next.js Image component for automatic optimization
2. **Add real content**: Replace placeholder text with actual content
3. **Enable analytics**: Add Google Analytics or Plausible
4. **Configure caching**: Use proper cache headers in production
5. **Monitor performance**: Use Vercel Analytics or Lighthouse

---

## 🎭 Design Inspiration

This design channels the sophistication of:
- **McKinsey** (strategic authority)
- **Pentagram** (creative excellence)
- **Stripe** (minimal, modern UI)
- **Apple** (quiet confidence, generous whitespace)

---

## 📧 Contact

**BrandQraft**  
Email: hello@brandqraft.com

---

## 📄 License

This project is created for BrandQraft. All rights reserved.

---

## 🙏 Credits

- **Typography**: Inter by Rasmus Andersson
- **Icons**: Custom SVG icons
- **Framework**: Next.js by Vercel
- **Design & Development**: BrandQraft Team

---

## 🚀 Next Steps

### Recommended Enhancements:
1. ✅ **Add real images** using Next.js Image component
2. ✅ **Implement contact form** with API route
3. ✅ **Add case study pages** using dynamic routes
4. ✅ **Integrate CMS** (Contentful, Sanity, or Prismic)
5. ✅ **Add blog section** with MDX support
6. ✅ **SEO optimization** (sitemap, robots.txt, structured data)
7. ✅ **Add analytics** (Vercel Analytics, Google Analytics)
8. ✅ **Performance monitoring** (Lighthouse CI)
9. ✅ **Add tests** (Jest, React Testing Library)
10. ✅ **Internationalization** (i18n support)

---

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

**Built with precision. Designed with purpose.**

*BrandQraft — Where Vision Meets Precision.*
