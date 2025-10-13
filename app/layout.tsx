import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingCursor from '@/components/FloatingCursor'
import UltraPremiumOverlay from '@/components/UltraPremiumOverlay'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BrandQraft — We Craft Brands That Build Businesses',
  description: 'Premium creative and product development agency that blends artistry with strategy. Strategic branding for visionaries who refuse to blend in.',
  keywords: ['branding', 'design agency', 'product development', 'creative agency', 'brand strategy'],
  authors: [{ name: 'BrandQraft' }],
  openGraph: {
    title: 'BrandQraft — We Craft Brands That Build Businesses',
    description: 'Premium creative and product development agency',
    type: 'website',
  },
}

function ThemeScript() {
  // Inline script string to avoid FOUC
  const script = `(() => {
    try {
      const stored = localStorage.getItem('theme');
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const preferred = mql.matches ? 'dark' : 'light';
      const theme = stored === 'light' || stored === 'dark' ? stored : preferred;
      document.documentElement.setAttribute('data-theme', theme);
    } catch {
      // default to system preference
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      document.documentElement.setAttribute('data-theme', mql.matches ? 'dark' : 'light');
    }
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <FloatingCursor />
        <UltraPremiumOverlay />
        {children}
      </body>
    </html>
  )
}


