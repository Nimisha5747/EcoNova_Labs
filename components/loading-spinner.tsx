"use client"

import { useEffect, useState } from "react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Logo with spinning animation */}
        <div className="absolute inset-0 animate-spin">
          <div className="w-full h-full rounded-full border-4 border-transparent border-t-econova-accent border-r-econova-secondary animate-pulse"></div>
        </div>

        {/* EcoNova Logo */}
        <div className="absolute inset-2 flex items-center justify-center">
          <img
            src="/images/email-logo.png"
            alt="EcoNova"
            className="w-full h-full object-contain filter drop-shadow-lg animate-pulse"
            style={{
              filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))",
            }}
          />
        </div>
      </div>
    </div>
  )
}
