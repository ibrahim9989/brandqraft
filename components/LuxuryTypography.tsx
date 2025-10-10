'use client'

import { useEffect, useState } from 'react'
import styles from './LuxuryTypography.module.css'

export default function LuxuryTypography() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.typographyEnhancements} ${isVisible ? styles.visible : ''}`}>
      {/* Luxury text glow effects */}
      <div className={styles.textGlow1} />
      <div className={styles.textGlow2} />
      <div className={styles.textGlow3} />
      
      {/* Floating typography elements */}
      <div className={styles.floatingText1}>Brand</div>
      <div className={styles.floatingText2}>Craft</div>
      <div className={styles.floatingText3}>Design</div>
    </div>
  )
}
