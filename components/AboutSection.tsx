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
            <h2 className={styles.sectionTitle}>Where Vision Meets Precision.</h2>
            <p className={styles.aboutDescription}>
              BrandQraft is where strategic thinking meets creative excellence. We don&apos;t just design brands—we architect business identities that resonate, convert, and endure.
            </p>
            <p className={styles.aboutDescription}>
              From startups to scale-ups, we partner with ambitious teams to craft cohesive brand experiences that drive measurable growth.
            </p>
            <Link href="#contact" className={styles.ctaLink} data-cursor-hover>
              Learn More About Us →
            </Link>
          </div>
          <div className={styles.aboutVisual} ref={visualRef}>
            <div className={styles.visualContainer}>
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

