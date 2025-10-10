'use client'

import { useEffect, useState } from 'react'
import styles from './LoadingAnimation.module.css'

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContent}>
        <div className={styles.brandLogo}>BrandQraft</div>
        <div className={styles.loadingBar}>
          <div className={styles.loadingProgress} />
        </div>
        <div className={styles.loadingText}>Crafting Excellence</div>
      </div>
    </div>
  )
}
