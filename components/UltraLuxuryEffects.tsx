'use client'

import { useEffect, useState } from 'react'
import styles from './UltraLuxuryEffects.module.css'

export default function UltraLuxuryEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.ultraLuxuryEffects}>
      {/* Ultra-premium gradient orbs */}
      <div 
        className={styles.luxuryOrb1}
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          opacity: Math.min(scrollY / 2000, 0.4)
        }}
      />
      <div 
        className={styles.luxuryOrb2}
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          opacity: Math.min(scrollY / 1500, 0.3)
        }}
      />
      <div 
        className={styles.luxuryOrb3}
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          opacity: Math.min(scrollY / 1800, 0.35)
        }}
      />

      {/* Luxury light rays */}
      <div className={styles.luxuryRays} />
      
      {/* Premium shimmer overlay */}
      <div 
        className={styles.premiumShimmer}
        style={{
          transform: `translateX(${scrollY * 0.1}px)`,
          opacity: Math.min(scrollY / 1000, 0.1)
        }}
      />

      {/* Ultra-luxury floating elements */}
      <div className={styles.floatingLuxury1}>✦</div>
      <div className={styles.floatingLuxury2}>◊</div>
      <div className={styles.floatingLuxury3}>◆</div>
      <div className={styles.floatingLuxury4}>◇</div>
    </div>
  )
}
