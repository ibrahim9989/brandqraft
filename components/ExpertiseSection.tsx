'use client'

import { useEffect, useRef } from 'react'
import styles from './ExpertiseSection.module.css'

export default function ExpertiseSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)

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
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'Brand Identity & Strategy',
      description: 'Comprehensive brand systems that define positioning, visual identity, and voice—built to scale from day one.',
      number: '01',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Digital Product Design',
      description: 'UI/UX design for web and mobile that balances beauty with usability—intuitive experiences users love.',
      number: '02',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Creative Campaigns',
      description: 'Go-to-market campaigns that break through noise—strategic storytelling that drives awareness and action.',
      number: '03',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
    }
  ]

  return (
    <section className={styles.expertise} id="expertise">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} ref={titleRef}>
          End-to-End Brand Evolution.
        </h2>
        <div className={styles.expertiseGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              ref={(el) => { cardsRef.current[index] = el }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 16, marginBottom: 24 }}
              />
              <div className={styles.serviceNumber}>{service.number}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceLink}>
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

