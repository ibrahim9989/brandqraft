'use client'

import { useEffect, useRef } from 'react'
import styles from './WhyChooseSection.module.css'

export default function WhyChooseSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const highlightsRef = useRef<(HTMLDivElement | null)[]>([])

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
    highlightsRef.current.forEach((highlight) => {
      if (highlight) observer.observe(highlight)
    })

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      title: 'Holistic & Integrated',
      description: 'Branding, digital marketing, and scaling—seamlessly connected under one roof',
      number: '01'
    },
    {
      title: 'Reliability & Delivery',
      description: 'Clear plans, consistent communication, and on-time outcomes you can trust',
      number: '02'
    },
    {
      title: 'Efficiency & Quality',
      description: 'Lean, focused teams producing premium work without the agency overhead',
      number: '03'
    },
    {
      title: 'Built for Sustainable Growth',
      description: 'Systems, data, and processes designed for long-term, compounding results',
      number: '04'
    }
  ]

  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.whyGrid}>
          <div className={styles.whyText}>
            <h2 className={styles.sectionTitle} ref={titleRef}>
              Why Choose Brandqraft?
            </h2>
            <p className={styles.whyDescription}>
              We act as your strategic growth partner—combining branding, digital marketing, and business scaling to build lasting brands and sustainable growth.
            </p>
          </div>
          <div className={styles.whyHighlights}>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={styles.highlightItem}
                ref={(el) => { highlightsRef.current[index] = el }}
              >
                <div className={styles.highlightNumber}>{highlight.number}</div>
                <div className={styles.highlightContent}>
                  <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


