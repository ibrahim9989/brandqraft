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
          <li><Link href="#contact" className={styles.navCta} onClick={closeMenu} data-cursor-hover>Start Project</Link></li>
        </ul>
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

