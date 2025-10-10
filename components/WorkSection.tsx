'use client'

import { useEffect, useRef } from 'react'
import styles from './WorkSection.module.css'

export default function WorkSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-80px' }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (featuredRef.current) observer.observe(featuredRef.current)
    
    logosRef.current.forEach((logo) => {
      if (logo) observer.observe(logo)
    })

    return () => observer.disconnect()
  }, [])

  const clients = ['Innovate Co', 'TechVision', 'BrandLab', 'Nexus Group', 'Catalyst Inc', 'Pioneer Studios']

  return (
    <section className={styles.work} id="work">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} ref={titleRef}>
          Trusted by Visionaries.
        </h2>
        
        <div className={styles.featuredWork} ref={featuredRef}>
          <div className={styles.projectVisual}>
            <div className={styles.projectFrame}>
              <div className={styles.projectPlaceholder}>
                <div className={styles.placeholderContent}>
                  <div className={styles.placeholderIcon}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Featured Work</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectInfo}>
            <div className={styles.projectMeta}>Case Study</div>
            <h3 className={styles.projectTitle}>Complete Brand System & Digital Experience</h3>
            <p className={styles.projectDescription}>
              End-to-end brand identity and product design for a next-generation fintech platform, from strategic positioning to launch.
            </p>
            <div className={styles.projectTags}>
              <span>Brand Strategy</span>
              <span>Visual Identity</span>
              <span>Product Design</span>
            </div>
          </div>
        </div>

        <div className={styles.clientSection}>
          <div className={styles.clientsLabel}>Partnered With</div>
          <div className={styles.clientLogos}>
            {clients.map((client, index) => (
              <div
                key={index}
                className={styles.logoItem}
                ref={(el) => { logosRef.current[index] = el }}
              >
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


