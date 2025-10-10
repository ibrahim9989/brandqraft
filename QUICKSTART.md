# 🚀 BrandQraft — Quick Start Guide

Get your BrandQraft site running in less than 5 minutes!

---

## 📦 Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn or pnpm:

```bash
yarn install
# or
pnpm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- And all necessary dependencies

---

## 🏃 Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at:
**http://localhost:3000**

You should see:
✅ Compiling...
✅ Ready in 2-3 seconds

---

## 🎨 Step 3: Explore the Site

Open your browser and navigate to `http://localhost:3000`

You'll see all 8 sections:
1. ✨ Hero Section with animated orbs
2. 📖 About Section
3. 💼 Expertise/Services
4. 🎯 Work/Portfolio
5. 🔄 Approach/Process
6. ⭐ Why Choose Us
7. 📞 CTA Section
8. 📧 Footer

---

## ✏️ Step 4: Customize Content

### Change Text Content

Navigate to the `components/` directory:

- **Hero text**: Edit `components/HeroSection.tsx`
- **About text**: Edit `components/AboutSection.tsx`
- **Services**: Edit `components/ExpertiseSection.tsx`
- **Contact email**: Edit `components/CTASection.tsx` and `components/Footer.tsx`

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --accent: #2563eb;  /* Change this to your brand color */
  --primary-dark: #0a0a0a;
  /* ... more colors */
}
```

### Change Typography

Edit `app/layout.tsx` to change the font:

```typescript
import { Inter, Poppins } from 'next/font/google'

const customFont = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
```

---

## 🖼️ Step 5: Add Your Images

1. Place images in the `public/` folder:
   ```
   public/
   ├── logo.png
   ├── project-1.jpg
   ├── project-2.jpg
   └── favicon.ico
   ```

2. Use them in components:
   ```typescript
   import Image from 'next/image'
   
   <Image 
     src="/logo.png" 
     alt="BrandQraft Logo"
     width={200}
     height={60}
   />
   ```

---

## 🏗️ Step 6: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

Test the production build locally:

```bash
npm run start
```

---

## 🌐 Step 7: Deploy

### Easiest: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Push code to GitHub
2. Import repository on Vercel
3. Deploy automatically

See `DEPLOYMENT.md` for more deployment options!

---

## 📝 Common Tasks

### Add a New Section

1. Create new component:
   ```bash
   components/TestimonialsSection.tsx
   components/TestimonialsSection.module.css
   ```

2. Import in `app/page.tsx`:
   ```typescript
   import TestimonialsSection from '@/components/TestimonialsSection'
   
   // Add to the page:
   <TestimonialsSection />
   ```

### Update Navigation Links

Edit `components/Navigation.tsx`:

```typescript
<li><Link href="#testimonials">Testimonials</Link></li>
```

### Change Meta Tags (SEO)

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description',
}
```

---

## 🛠️ Development Tips

### Hot Reload

Next.js has hot reload built-in. Just save your files and see changes instantly!

### Component Structure

Each section is a separate component:
- `.tsx` file = Component logic
- `.module.css` file = Component styles

This keeps code organized and maintainable.

### TypeScript

TypeScript is configured and ready. It will catch errors as you type!

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Module Not Found Error

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Styles Not Updating

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 🎯 Project Structure Overview

```
brandqraft/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Nav bar
│   ├── HeroSection.tsx    # Hero
│   ├── ...                # Other sections
│   └── *.module.css       # Component styles
├── public/                # Static assets
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

---

## 💡 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Customize content
4. ✅ Add your images
5. ✅ Update colors
6. ✅ Build & deploy

---

## 🎉 You're All Set!

Your BrandQraft website is ready to customize and deploy.

**Need help?** Check out:
- `README.md` — Full documentation
- `DEPLOYMENT.md` — Deployment guides

---

**Happy Building! 🚀**

*BrandQraft Team*


