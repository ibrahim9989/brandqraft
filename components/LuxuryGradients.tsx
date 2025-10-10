'use client'

import { useEffect, useState } from 'react'
import styles from './LuxuryGradients.module.css'

export default function LuxuryGradients() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={styles.gradientOverlays}>
      {/* Main luxury gradient */}
      <div 
        className={styles.luxuryGradient}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(0, 0, 0, 0.02) 0%, 
            rgba(0, 0, 0, 0.01) 30%, 
            transparent 70%)`
        }}
      />
      
      {/* Subtle corner gradients */}
      <div className={styles.cornerGradient1} />
      <div className={styles.cornerGradient2} />
      <div className={styles.cornerGradient3} />
      <div className={styles.cornerGradient4} />
      
      {/* Animated luxury shimmer */}
      <div className={styles.luxuryShimmer} />
    </div>
  )
}
