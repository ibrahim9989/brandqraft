'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize theme from document (set by inline script) or from system
    const current = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
    setTheme(current)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  const toggleTheme = () => {
    const next: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img src="/logomark.png" alt="BrandQraft" className={styles.logoImage} />
        </Link>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <li><Link href="/about" onClick={closeMenu} data-cursor-hover>About</Link></li>
          <li><Link href="/services" onClick={closeMenu} data-cursor-hover>Services</Link></li>
          <li><Link href="/work" onClick={closeMenu} data-cursor-hover>Work</Link></li>
          <li><Link href="/blog" onClick={closeMenu} data-cursor-hover>Blog</Link></li>
          <li><Link href="/contact" onClick={closeMenu} data-cursor-hover>Contact</Link></li>
        </ul>
        <div className={styles.navActions}>
          <button onClick={toggleTheme} className={styles.searchButton} aria-label="Toggle theme">
            {theme === 'dark' ? (
              // sun icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V2M12 22v-2M4.93 4.93L3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07L3.52 20.48M20.48 3.52l-1.41 1.41M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              // moon icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <Link href="/contact" className={styles.ctaButton} data-cursor-hover>
            Start Project
          </Link>
        </div>
        <div 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

