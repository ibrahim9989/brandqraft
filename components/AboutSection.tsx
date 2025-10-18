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
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p className={styles.aboutDescription}>
              At Brandqraft, we're passionate about transforming innovative ideas into thriving brands. We specialize in empowering new firms by providing comprehensive branding, digital marketing, and business scaling solutions.
            </p>
            <p className={styles.aboutDescription}>
              We understand the unique challenges faced by new businesses, and we're committed to guiding them through every stage of their journey. Our approach combines creative expertise with data-driven strategies, ensuring measurable results and long-term success. We believe in more than just launching businesses; we believe in building legacies.
            </p>
            <p className={styles.aboutDescription}>
              Our core belief is that business success is a possibility for everyone.
            </p>
            <p className={styles.aboutDescription}><strong>Our Vision:</strong> Business success for every ambitious entrepreneur/business with a strategic and simplified way.</p>
            <p className={styles.aboutDescription}><strong>Our Mission:</strong> To empower ambitious entrepreneurs and businesses by providing end to end business lifecycle solutions from ideation to sustainable/auto-pilot growth.</p>
            <p className={styles.aboutDescription}><strong>Our Values:</strong> Problem Solving • Artistic approach • Simplicity and Minimalism • Integrity • Trust</p>
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

