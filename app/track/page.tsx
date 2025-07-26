"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react"

const mockTrackingData = {
  PU001: {
    id: "PU001",
    status: "Completed",
    items: ["Laptop", "Smartphone", "Charger"],
    scheduledDate: "2024-01-15",
    completedDate: "2024-01-15",
    estimatedValue: 950,
    actualValue: 920,
    address: "123 Tech Street, Bangalore, Karnataka 560001",
    timeline: [
      { status: "Scheduled", date: "2024-01-14", time: "10:30 AM", completed: true },
      { status: "Pickup Confirmed", date: "2024-01-15", time: "9:00 AM", completed: true },
      { status: "Items Collected", date: "2024-01-15", time: "11:30 AM", completed: true },
      { status: "Processing", date: "2024-01-15", time: "2:00 PM", completed: true },
      { status: "Completed", date: "2024-01-15", time: "4:30 PM", completed: true },
    ],
  },
  PU002: {
    id: "PU002",
    status: "In Transit",
    items: ["Monitor", "Keyboard", "Mouse"],
    scheduledDate: "2024-01-20",
    completedDate: null,
    estimatedValue: 350,
    actualValue: null,
    address: "456 Business Park, Mumbai, Maharashtra 400001",
    timeline: [
      { status: "Scheduled", date: "2024-01-19", time: "2:00 PM", completed: true },
      { status: "Pickup Confirmed", date: "2024-01-20", time: "8:00 AM", completed: true },
      { status: "Items Collected", date: "2024-01-20", time: "10:15 AM", completed: true },
      { status: "Processing", date: "2024-01-20", time: "1:00 PM", completed: false },
      { status: "Completed", date: null, time: null, completed: false },
    ],
  },
}

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [trackingData, setTrackingData] = useState<any>(null)
  const [searchMethod, setSearchMethod] = useState<"id" | "phone">("id")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrack = async () => {
    setIsLoading(true)
    setError("")
    setTrackingData(null)

    // Simulate API call
    setTimeout(() => {
      if (searchMethod === "id" && mockTrackingData[trackingId as keyof typeof mockTrackingData]) {
        setTrackingData(mockTrackingData[trackingId as keyof typeof mockTrackingData])
      } else if (searchMethod === "phone" && phoneNumber === "9876543210") {
        setTrackingData(mockTrackingData.PU001)
      } else {
        setError("No pickup found with the provided information. Please check and try again.")
      }
      setIsLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500"
      case "processing":
      case "in transit":
        return "bg-blue-500"
      case "scheduled":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return CheckCircle
      case "processing":
      case "in transit":
        return Truck
      case "scheduled":
        return Clock
      default:
        return Package
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Track Your Pickup</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Enter your pickup ID or phone number to track the status of your e-waste pickup
            </p>
          </div>

          {/* Search Form */}
          <Card className="mb-8 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary">Find Your Pickup</CardTitle>
              <CardDescription>Track your pickup using either method below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4 mb-6">
                <Button
                  variant={searchMethod === "id" ? "default" : "outline"}
                  onClick={() => setSearchMethod("id")}
                  className={searchMethod === "id" ? "bg-econova-primary hover:bg-econova-primary-light" : ""}
                >
                  <Package className="h-4 w-4 mr-2" />
                  Pickup ID
                </Button>
                <Button
                  variant={searchMethod === "phone" ? "default" : "outline"}
                  onClick={() => setSearchMethod("phone")}
                  className={searchMethod === "phone" ? "bg-econova-primary hover:bg-econova-primary-light" : ""}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number
                </Button>
              </div>

              {searchMethod === "id" ? (
                <div>
                  <Label htmlFor="tracking-id">Pickup ID</Label>
                  <Input
                    id="tracking-id"
                    placeholder="Enter your pickup ID (e.g., PU001)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                  <p className="text-sm text-econova-text-light mt-2">
                    You can find your pickup ID in the confirmation email or SMS
                  </p>
                </div>
              ) : (
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your registered phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-sm text-econova-text-light mt-2">
                    Enter the phone number used during pickup scheduling
                  </p>
                </div>
              )}

              <Button
                onClick={handleTrack}
                disabled={isLoading || (searchMethod === "id" ? !trackingId : !phoneNumber)}
                className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Track Pickup
                  </>
                )}
              </Button>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-6">
              {/* Pickup Summary */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-econova-primary">Pickup {trackingData.id}</CardTitle>
                      <CardDescription>Scheduled for {trackingData.scheduledDate}</CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(trackingData.status)} text-white px-4 py-2`}>
                      {trackingData.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-econova-primary mb-3">Pickup Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-econova-text-light" />
                          <span className="text-econova-text text-sm">{trackingData.address}</span>
                        </div>
                        <div>
                          <span className="text-econova-text-light text-sm">Items: </span>
                          <span className="text-econova-text text-sm">{trackingData.items.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-econova-text-light text-sm">Estimated Value: </span>
                          <span className="text-econova-text text-sm">₹{trackingData.estimatedValue}</span>
                        </div>
                        {trackingData.actualValue && (
                          <div>
                            <span className="text-econova-text-light text-sm">Final Value: </span>
                            <span className="text-econova-primary font-semibold text-sm">
                              ₹{trackingData.actualValue}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-econova-primary mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-econova-text-light" />
                          <span className="text-econova-text text-sm">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-econova-text-light" />
                          <span className="text-econova-text text-sm">support@econova.in</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Pickup Timeline</CardTitle>
                  <CardDescription>Track the progress of your pickup from start to finish</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingData.timeline.map((step: any, index: number) => {
                      const Icon = getStatusIcon(step.status)
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              step.completed
                                ? "bg-gradient-to-br from-econova-secondary to-econova-accent"
                                : "bg-gray-200"
                            }`}
                          >
                            <Icon className={`h-5 w-5 ${step.completed ? "text-white" : "text-gray-400"}`} />
                          </div>
                          <div className="flex-1">
                            <div
                              className={`font-semibold ${step.completed ? "text-econova-primary" : "text-gray-400"}`}
                            >
                              {step.status}
                            </div>
                            {step.date && (
                              <div className="text-sm text-econova-text-light">
                                {step.date} {step.time && `at ${step.time}`}
                              </div>
                            )}
                            {!step.completed && index === trackingData.timeline.findIndex((s: any) => !s.completed) && (
                              <div className="text-sm text-econova-secondary font-medium mt-1">
                                Currently in progress
                              </div>
                            )}
                          </div>
                          {step.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-econova-primary hover:bg-econova-primary-light text-white">
                      <Package className="h-4 w-4 mr-2" />
                      Schedule Another Pickup
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-econova-secondary text-econova-secondary hover:bg-econova-secondary/10 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Section */}
          <Card className="mt-8 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary">Need Help?</CardTitle>
              <CardDescription>Can't find your pickup or have questions?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-econova-primary mb-3">Contact Support</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-econova-text-light" />
                      <span className="text-econova-text">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-econova-text-light" />
                      <span className="text-econova-text">support@econova.in</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-econova-primary mb-3">Common Issues</h3>
                  <ul className="text-sm text-econova-text space-y-1">
                    <li>• Pickup ID not found - Check your confirmation email</li>
                    <li>• Status not updated - Allow 2-4 hours for updates</li>
                    <li>• Missing items - Contact support immediately</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
