'use client'

import { useEffect, useState } from 'react'
import styles from './FloatingCursor.module.css'

export default function FloatingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [data-cursor-hover]')) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [data-cursor-hover]')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className={`${styles.cursor} ${isHovering ? styles.hovering : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <div
        className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  )
}
