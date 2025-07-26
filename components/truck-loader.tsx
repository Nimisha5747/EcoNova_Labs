"use client"

import { useEffect, useState } from "react"

interface TruckLoaderProps {
  isLoading: boolean
  message?: string
}

export function TruckLoader({ isLoading, message = "Loading..." }: TruckLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 40)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/images/email-logo.png"
            alt="EcoNova"
            className="w-20 h-20 object-contain mx-auto animate-pulse"
            style={{
              filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.5))",
            }}
          />
        </div>

        {/* Truck Animation Container */}
        <div className="relative w-96 h-32 mx-auto mb-8 overflow-hidden">
          {/* Road */}
          <div className="absolute bottom-8 left-0 right-0 h-2 bg-gray-600 rounded">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>

          {/* Road Lines */}
          <div className="absolute bottom-9 left-0 right-0 h-0.5 bg-yellow-400 opacity-60">
            <div className="flex space-x-8 animate-pulse">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-6 h-0.5 bg-yellow-400"></div>
              ))}
            </div>
          </div>

          {/* Truck */}
          <div className="absolute bottom-10 animate-truck-move">
            <div className="relative">
              {/* Truck Body */}
              <div className="w-16 h-8 bg-econova-accent rounded-lg relative">
                <div className="absolute top-1 left-1 w-6 h-6 bg-econova-secondary rounded opacity-80"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
              </div>

              {/* Truck Cabin */}
              <div className="absolute -left-6 top-0 w-6 h-6 bg-econova-secondary rounded-l-lg">
                <div className="absolute top-1 left-1 w-3 h-3 bg-blue-200 rounded opacity-70"></div>
              </div>

              {/* Wheels */}
              <div className="absolute -bottom-2 left-1 w-3 h-3 bg-gray-800 rounded-full animate-spin-slow">
                <div className="absolute inset-0.5 bg-gray-600 rounded-full"></div>
              </div>
              <div className="absolute -bottom-2 right-2 w-3 h-3 bg-gray-800 rounded-full animate-spin-slow">
                <div className="absolute inset-0.5 bg-gray-600 rounded-full"></div>
              </div>

              {/* Exhaust Smoke */}
              <div className="absolute -right-2 top-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full opacity-60 animate-bounce"></div>
                <div
                  className="w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-gray-200 rounded-full opacity-20 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Recycling Symbols */}
          <div className="absolute top-4 left-8 text-econova-accent animate-bounce">
            <span className="text-2xl">♻️</span>
          </div>
          <div
            className="absolute top-2 right-12 text-econova-secondary animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-xl">🌱</span>
          </div>
          <div className="absolute top-6 left-32 text-econova-accent animate-bounce" style={{ animationDelay: "1s" }}>
            <span className="text-lg">📱</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-econova-accent to-econova-secondary h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-white/80 text-sm mt-2">{progress}% Complete</div>
        </div>

        {/* Loading Message */}
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">{message}</h2>
          <p className="text-white/80 animate-pulse">Preparing your sustainable e-waste journey...</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes truck-move {
          0% {
            transform: translateX(-100px);
          }
          50% {
            transform: translateX(350px);
          }
          100% {
            transform: translateX(-100px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-truck-move {
          animation: truck-move 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 0.5s linear infinite;
        }
      `}</style>
    </div>
  )
}
