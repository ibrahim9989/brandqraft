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
    { title: 'Reliability', number: '01', description: '' },
    { title: 'Efficiency', number: '02', description: '' },
    { title: 'Quality', number: '03', description: '' },
    { title: 'Delivery', number: '04', description: '' },
  ]

  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.whyGrid}>
          <div className={styles.whyText}>
            <h2 className={styles.sectionTitle} ref={titleRef}>Why Choose Us?</h2>
            <p className={styles.whyDescription}>
              Choosing BrandQraft means partnering with a team that's deeply invested in your startup's success. Unlike agencies that offer fragmented services, we provide a holistic, integrated approach, seamlessly blending branding, digital marketing, and business scaling strategies. We don't just execute tactics; we build lasting brands and sustainable growth engines. We prioritize a collaborative, client-centric experience, ensuring clear communication and transparent reporting. Our focus is on delivering measurable results, driven by data and fueled by creative innovation. We understand the unique challenges of launching a new firm and tailor our solutions to fit your specific needs and budget. In essence, we're not just another agency; we're your strategic growth partner, committed to transforming your vision into a market-leading reality.
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


