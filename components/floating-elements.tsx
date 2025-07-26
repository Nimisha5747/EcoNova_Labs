"use client"

import { useEffect, useState } from "react"
import { Recycle, Leaf, Zap, Shield } from "lucide-react"

const icons = [Recycle, Leaf, Zap, Shield]

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      Icon: any
      x: number
      y: number
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {elements.map((element) => {
        const Icon = element.Icon
        return (
          <div
            key={element.id}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
        )
      })}
    </div>
  )
}
