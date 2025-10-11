import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
