'use client'

import { useEffect, useRef } from 'react'
import styles from './ApproachSection.module.css'

export default function ApproachSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

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
    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Deep-dive discovery: your vision, market landscape, and competitive edge'
    },
    {
      number: '02',
      title: 'Research',
      description: 'Strategic insights and positioning to define your unique market space'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Craft cohesive visual systems that translate strategy into tangible brand experiences'
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Launch-ready assets and ongoing support to ensure seamless implementation'
    }
  ]

  return (
    <section className={styles.approach}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} ref={titleRef}>
          Creativity with Method.
        </h2>
        <div className={styles.approachFlow}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepContainer}>
              <div
                className={styles.approachStep}
                ref={(el) => { stepsRef.current[index] = el }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && <div className={styles.approachConnector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


