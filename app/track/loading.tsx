import { LoadingSpinner } from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter flex items-center justify-center">
      <div className="text-center space-y-6">
        <LoadingSpinner size="xl" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Loading Tracking</h2>
          <p className="text-white/80">Fetching your pickup status...</p>
        </div>
      </div>
    </div>
  )
}
