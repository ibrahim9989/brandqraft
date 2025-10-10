# BrandQraft — Deployment Guide

This guide covers deployment options for the BrandQraft Next.js application.

---

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is made by the creators of Next.js.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Done!** Your site is live in seconds.

### Environment Variables

If you add environment variables later:
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add your variables
4. Redeploy

---

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Option 2: Git Integration

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Use Next.js Runtime

---

## ☁️ Deploy to AWS Amplify

### Step 1: Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
amplify configure
```

### Step 2: Initialize & Deploy

```bash
amplify init
amplify add hosting
amplify publish
```

---

## 🐳 Deploy with Docker

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build & Run

```bash
docker build -t brandqraft .
docker run -p 3000:3000 brandqraft
```

---

## 🚂 Deploy to Railway

1. Visit [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Next.js
5. Deploy!

Environment Variables can be added in the Railway dashboard.

---

## 🌊 Deploy to DigitalOcean App Platform

### Via GitHub

1. Push code to GitHub
2. Visit [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
3. "Create App" → Select GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Deploy

### Via CLI

```bash
doctl apps create --spec .do/app.yaml
```

---

## 📦 Static Export (Optional)

If you want to export as static HTML:

### Step 1: Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Build

```bash
npm run build
```

This creates an `out/` directory with static files that can be hosted anywhere.

**Note:** Static export disables some Next.js features like:
- Server-side rendering
- API routes
- Image optimization

---

## 🔒 Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form
EMAIL_API_KEY=your-email-api-key

# CMS (if using)
CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-token
```

**Never commit `.env.local` to git!**

---

## ⚡ Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use Next.js Image component

2. **Minimize Bundle Size**
   ```bash
   npm run build
   # Check bundle size in output
   ```

3. **Enable Compression**
   - Vercel/Netlify do this automatically
   - For custom servers, enable gzip

4. **Add Caching Headers**
   ```javascript
   // next.config.js
   async headers() {
     return [
       {
         source: '/:all*(svg|jpg|png)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
     ]
   }
   ```

---

## 🔍 SEO Configuration

### Add to `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'BrandQraft — We Craft Brands That Build Businesses',
  description: 'Premium creative and product development agency',
  metadataBase: new URL('https://brandqraft.com'),
  openGraph: {
    title: 'BrandQraft',
    description: 'Premium creative agency',
    url: 'https://brandqraft.com',
    siteName: 'BrandQraft',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandQraft',
    description: 'Premium creative agency',
    images: ['/twitter-image.jpg'],
  },
}
```

### Create robots.txt

Place in `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://brandqraft.com/sitemap.xml
```

---

## 📊 Analytics Setup

### Google Analytics

```typescript
// app/layout.tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      # Add deployment steps
```

---

## 🐛 Troubleshooting

### Build Errors

**Error: "Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error: "Out of memory"**
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Runtime Errors

Check browser console and server logs for details.

---

## 📞 Support

For deployment issues:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Netlify Support](https://www.netlify.com/support/)

---

**Happy Deploying! 🚀**

*BrandQraft Team*


