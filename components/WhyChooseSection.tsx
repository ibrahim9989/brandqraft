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
      title: 'Strategy-Led Creativity',
      description: 'Every design decision backed by business objectives',
      number: '01'
    },
    {
      title: 'End-to-End Execution',
      description: 'From concept to launch, we handle every detail',
      number: '02'
    },
    {
      title: 'Agile & Responsive',
      description: 'Fast turnarounds without compromising quality',
      number: '03'
    },
    {
      title: 'Built to Scale',
      description: 'Systems designed to grow with your business',
      number: '04'
    }
  ]

  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.whyGrid}>
          <div className={styles.whyText}>
            <h2 className={styles.sectionTitle} ref={titleRef}>
              Not Just an Agency — a Growth Partner.
            </h2>
            <p className={styles.whyDescription}>
              We bring the strategic rigor of a consultancy and the creative excellence of a design studio—without the overhead or ego.
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


