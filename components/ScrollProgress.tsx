'use client'

import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.pageYOffset / windowHeight) * 100
      setProgress(scrolled)
      setIsVisible(window.pageYOffset > 100)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className={`${styles.scrollProgress} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.progressTrack}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}


