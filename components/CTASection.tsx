'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './CTASection.module.css'

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.ctaSection} id="contact">
      <div className={styles.ctaBackground}>
        <div className={styles.blueprintGrid}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.ctaContent} ref={contentRef}>
          <h2 className={styles.ctaTitle}>Let&apos;s Build What&apos;s Next.</h2>
          <p className={styles.ctaDescription}>
            Ready to elevate your brand? Let&apos;s start with a conversation.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:hello@brandqraft.com" className={styles.btnPrimary} data-cursor-hover>
              Let&apos;s Talk
            </a>
            <Link href="#" className={styles.btnSecondary} data-cursor-hover>
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


