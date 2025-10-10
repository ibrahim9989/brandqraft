import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingCursor from '@/components/FloatingCursor'
import LuxuryParticles from '@/components/LuxuryParticles'
import LuxuryGradients from '@/components/LuxuryGradients'
import LuxuryShadows from '@/components/LuxuryShadows'
import LuxuryTypography from '@/components/LuxuryTypography'
import UltraLuxuryEffects from '@/components/UltraLuxuryEffects'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <FloatingCursor />
        <LuxuryParticles />
        <LuxuryGradients />
        <LuxuryShadows />
        <LuxuryTypography />
        <UltraLuxuryEffects />
        {children}
      </body>
    </html>
  )
}


