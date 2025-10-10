'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current || !gradientRef.current) return
      
      const scrolled = window.pageYOffset
      const heroHeight = heroRef.current.offsetHeight
      
      if (scrolled < heroHeight) {
        // Subtle parallax for content
        contentRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
        
        // Gradient shift on scroll
        gradientRef.current.style.transform = `translateY(${scrolled * 0.2}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero} id="hero" ref={heroRef}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOverlay} ref={gradientRef}></div>
      </div>
      <div className={styles.heroContent} ref={contentRef}>
        <h1 className={styles.heroTitle}>
          We Craft Brands<br />That Build Businesses.
        </h1>
        <p className={styles.heroSubtitle}>
          Strategic branding and product development for visionaries who refuse to blend in.
        </p>
        <div className={styles.heroCta}>
          <Link href="#contact" className={styles.btnPrimary} data-cursor-hover>
            Start Your Project
          </Link>
          <Link href="#work" className={styles.btnSecondary} data-cursor-hover>
            Explore Our Work
          </Link>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
    </section>
  )
}

