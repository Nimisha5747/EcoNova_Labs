"use client"

import { useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

interface PageLoaderProps {
  isLoading: boolean
  message?: string
}

export function PageLoader({ isLoading, message = "Loading..." }: PageLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 200)

      return () => clearInterval(interval)
    } else {
      setProgress(100)
    }
  }, [isLoading])

  if (!isLoading && progress === 100) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <div className="text-center space-y-8">
        <LoadingSpinner size="xl" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white animate-pulse">{message}</h2>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-econova-accent to-econova-secondary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white/80 text-sm">Preparing your sustainable experience...</p>
        </div>
      </div>
    </div>
  )
}
