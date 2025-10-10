'use client'

import { useEffect, useState } from 'react'
import styles from './UltraPremiumOverlay.module.css'

export default function UltraPremiumOverlay() {
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
    <div className={styles.ultraPremiumOverlay}>
      {/* Ultra-premium gradient orbs */}
      <div 
        className={styles.premiumOrb1}
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          opacity: Math.min(scrollY / 3000, 0.2)
        }}
      />
      <div 
        className={styles.premiumOrb2}
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          opacity: Math.min(scrollY / 2500, 0.15)
        }}
      />
      <div 
        className={styles.premiumOrb3}
        style={{
          transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
          opacity: Math.min(scrollY / 2800, 0.18)
        }}
      />

      {/* Ultra-premium light rays */}
      <div className={styles.premiumRays} />
      
      {/* Premium shimmer overlay */}
      <div 
        className={styles.premiumShimmer}
        style={{
          transform: `translateX(${scrollY * 0.05}px)`,
          opacity: Math.min(scrollY / 2000, 0.05)
        }}
      />

      {/* Ultra-luxury floating elements */}
      <div className={styles.floatingPremium1}>◊</div>
      <div className={styles.floatingPremium2}>◆</div>
      <div className={styles.floatingPremium3}>◇</div>
    </div>
  )
}
