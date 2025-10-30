"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({ value, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const countRef = useRef(0)
  const animationRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)

      const currentValue = Math.floor(progress * value)
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationRef.current = setTimeout(animate, 16)
      }
    }

    animate()

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current)
    }
  }, [value, duration])

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
