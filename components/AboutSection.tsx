'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-50px' }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (visualRef.current) observer.observe(visualRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText} ref={textRef}>
            <h2 className={styles.sectionTitle}>About Brandqraft</h2>
            <p className={styles.aboutDescription}>
              We turn innovative ideas into successful brands. Our end-to-end practice blends creative craft with data-driven strategy across branding, digital marketing, and business scaling.
            </p>
            <p className={styles.aboutDescription}>
              We believe business success is a possibility for everyone—and we build systems that make it a reality.
            </p>
            <p className={styles.aboutDescription}>
              <strong>Vision:</strong> Make business success a strategic, simplified reality for every ambitious entrepreneur.
            </p>
            <p className={styles.aboutDescription}>
              <strong>Mission:</strong> Empower entrepreneurs with lifecycle solutions—from ideation to sustainable, autopilot growth.
            </p>
            <p className={styles.aboutDescription}>
              <strong>Values:</strong> Problem Solving, Artistic Approach, Simplicity & Minimalism, Integrity, Trust.
            </p>
            <Link href="#contact" className={styles.ctaLink} data-cursor-hover>
              Talk to Us →
            </Link>
          </div>
          <div className={styles.aboutVisual} ref={visualRef}>
            <div className={styles.visualContainer}>
              <img
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop"
                alt="Creative workspace desk"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }}
              />
              <div className={styles.gradientBlock}>
                <div className={styles.brandShowcase}>
                  <div className={styles.showcaseItem}>Brand Strategy</div>
                  <div className={styles.showcaseItem}>Visual Identity</div>
                  <div className={styles.showcaseItem}>Product Design</div>
                  <div className={styles.showcaseItem}>Digital Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

