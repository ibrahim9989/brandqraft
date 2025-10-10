'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img src="/logomark.png" alt="BrandQraft" className={styles.logoImage} />
        </Link>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <li><Link href="#about" onClick={closeMenu} data-cursor-hover>About</Link></li>
          <li><Link href="#expertise" onClick={closeMenu} data-cursor-hover>Services</Link></li>
          <li><Link href="#work" onClick={closeMenu} data-cursor-hover>Work</Link></li>
          <li><Link href="#contact" onClick={closeMenu} data-cursor-hover>Contact</Link></li>
        </ul>
        <div className={styles.navActions}>
          <button className={styles.searchButton} aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link href="#contact" className={styles.ctaButton} data-cursor-hover>
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

