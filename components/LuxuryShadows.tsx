'use client'

import { useEffect, useState } from 'react'
import styles from './LuxuryShadows.module.css'

export default function LuxuryShadows() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.shadowSystem}>
      {/* Dynamic shadow based on scroll */}
      <div 
        className={styles.dynamicShadow}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.min(scrollY / 1000, 0.3)
        }}
      />
      
      {/* Luxury depth layers */}
      <div className={styles.depthLayer1} />
      <div className={styles.depthLayer2} />
      <div className={styles.depthLayer3} />
      
      {/* Floating shadow elements */}
      <div className={styles.floatingShadow1} />
      <div className={styles.floatingShadow2} />
      <div className={styles.floatingShadow3} />
    </div>
  )
}
