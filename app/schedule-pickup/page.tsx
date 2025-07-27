"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  CalendarIcon,
  Smartphone,
  Laptop,
  Monitor,
  Printer,
  Camera,
  Headphones,
  Upload,
  X,
  Check,
  RefreshCw,
  Heart,
  Package,
} from "lucide-react"
import { format } from "date-fns"

const deviceTypes = [
  { id: "smartphone", name: "Smartphone", icon: Smartphone, basePrice: 150 },
  { id: "laptop", name: "Laptop", icon: Laptop, basePrice: 800 },
  { id: "monitor", name: "Monitor", icon: Monitor, basePrice: 300 },
  { id: "printer", name: "Printer", icon: Printer, basePrice: 200 },
  { id: "camera", name: "Camera", icon: Camera, basePrice: 250 },
  { id: "headphones", name: "Headphones", icon: Headphones, basePrice: 50 },
  { id: "others", name: "Others", icon: Package, basePrice: 100 },
]

interface DeviceEvaluation {
  deviceId: string
  image: string
  condition: string
  issues: string
  estimatedPrice: number
  confidence: number
  status: "pending" | "accepted" | "rejected" | "donated"
}

export default function SchedulePickupPage() {
  const [deviceEvaluations, setDeviceEvaluations] = useState<DeviceEvaluation[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [showCamera, setShowCamera] = useState(false)
  const [currentDeviceType, setCurrentDeviceType] = useState<string>("")
  const [capturedImage, setCapturedImage] = useState<string>("")
  const [deviceCondition, setDeviceCondition] = useState("")
  const [deviceIssues, setDeviceIssues] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    timeSlot: "",
    notes: "",
  })

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
    }
  }

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((track) => track.stop())
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext("2d")
      ctx?.drawImage(video, 0, 0)
      const imageData = canvas.toDataURL("image/jpeg")
      setCapturedImage(imageData)
      stopCamera()
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const evaluateDevice = async () => {
    if (!capturedImage || !currentDeviceType || !deviceCondition) return

    setIsEvaluating(true)

    // Simulate AI evaluation with realistic pricing logic
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const device = deviceTypes.find((d) => d.id === currentDeviceType)
    if (!device) return

    let priceMultiplier = 1
    let confidence = 85

    // Condition-based pricing
    switch (deviceCondition) {
      case "excellent":
        priceMultiplier = 0.75
        confidence = 95
        break
      case "good":
        priceMultiplier = 0.55
        confidence = 90
        break
      case "fair":
        priceMultiplier = 0.35
        confidence = 85
        break
      case "poor":
        priceMultiplier = 0.15
        confidence = 75
        break
    }

    // Issue-based price reduction
    const issueKeywords = ["broken", "cracked", "damaged", "not working", "dead", "faulty"]
    const hasIssues = issueKeywords.some((keyword) => deviceIssues.toLowerCase().includes(keyword))

    if (hasIssues) {
      priceMultiplier *= 0.6
      confidence -= 10
    }

    const estimatedPrice = Math.round(device.basePrice * priceMultiplier)

    const evaluation: DeviceEvaluation = {
      deviceId: currentDeviceType,
      image: capturedImage,
      condition: deviceCondition,
      issues: deviceIssues,
      estimatedPrice,
      confidence: Math.max(confidence, 60),
      status: "pending",
    }

    setDeviceEvaluations((prev) => [...prev, evaluation])
    setIsEvaluating(false)
    setShowCamera(false)
    setCapturedImage("")
    setDeviceCondition("")
    setDeviceIssues("")
    setCurrentDeviceType("")
  }

  const handleEvaluationResponse = (index: number, action: "accept" | "reject" | "donate" | "reevaluate") => {
    setDeviceEvaluations((prev) =>
      prev.map((evaluation, i) =>
        i === index
          ? { ...evaluation, status: action === "accept" ? "accepted" : action === "donate" ? "donated" : "rejected" }
          : evaluation,
      ),
    )

    if (action === "reevaluate") {
      // Trigger re-evaluation with slightly different price
      const evaluation = deviceEvaluations[index]
      const newPrice = Math.round(evaluation.estimatedPrice * (0.9 + Math.random() * 0.2))
      setDeviceEvaluations((prev) =>
        prev.map((deviceEval, i) =>
          i === index ? { ...deviceEval, estimatedPrice: newPrice, status: "pending" } : deviceEval,
        ),
      )
    }
  }

  const calculateTotal = () => {
    const evaluatedTotal = deviceEvaluations
      .filter((deviceEval) => deviceEval.status === "accepted")
      .reduce((total, deviceEval) => total + deviceEval.estimatedPrice, 0)

    return evaluatedTotal
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Schedule Your E-Waste Pickup</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get instant AI-powered pricing by taking photos of your devices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI Photo Evaluation */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary flex items-center gap-2">
                    <Camera className="h-6 w-6" />
                    AI Photo Evaluation
                  </CardTitle>
                  <CardDescription>Take photos of your devices for accurate AI-powered pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {deviceTypes.map((device) => {
                      const Icon = device.icon
                      return (
                        <Button
                          key={device.id}
                          variant="outline"
                          className="h-20 flex flex-col gap-2 hover:border-econova-secondary bg-transparent"
                          onClick={() => {
                            setCurrentDeviceType(device.id)
                            setShowCamera(true)
                          }}
                        >
                          <Icon className="h-6 w-6" />
                          <span className="text-xs">{device.name}</span>
                        </Button>
                      )
                    })}
                  </div>

                  {/* Evaluated Devices */}
                  {deviceEvaluations.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-econova-primary">Evaluated Devices</h3>
                      {deviceEvaluations.map((evaluation, index) => {
                        const device = deviceTypes.find((d) => d.id === evaluation.deviceId)
                        return (
                          <div key={index} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-start gap-4">
                              <img
                                src={evaluation.image || "/placeholder.svg"}
                                alt="Device"
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-econova-primary">{device?.name}</h4>
                                <p className="text-sm text-gray-600">Condition: {evaluation.condition}</p>
                                <p className="text-sm text-gray-600">Issues: {evaluation.issues || "None reported"}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-lg font-bold text-econova-accent">
                                    ₹{evaluation.estimatedPrice}
                                  </span>
                                  <Badge variant="secondary" className="text-xs">
                                    {evaluation.confidence}% confidence
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            {evaluation.status === "pending" && (
                              <div className="flex gap-2 pt-2">
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleEvaluationResponse(index, "accept")}
                                >
                                  <Check className="h-4 w-4 mr-1" />
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleEvaluationResponse(index, "reject")}
                                >
                                  <X className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleEvaluationResponse(index, "reevaluate")}
                                >
                                  <RefreshCw className="h-4 w-4 mr-1" />
                                  Re-evaluate
                                </Button>
                              </div>
                            )}

                            {evaluation.status === "rejected" && (
                              <div className="flex gap-2 pt-2">
                                <Button
                                  size="sm"
                                  className="bg-red-600 hover:bg-red-700"
                                  onClick={() => handleEvaluationResponse(index, "donate")}
                                >
                                  <Heart className="h-4 w-4 mr-1" />
                                  Donate Instead
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleEvaluationResponse(index, "reevaluate")}
                                >
                                  <RefreshCw className="h-4 w-4 mr-1" />
                                  Re-evaluate
                                </Button>
                              </div>
                            )}

                            {evaluation.status === "accepted" && (
                              <Badge className="bg-green-100 text-green-800">
                                <Check className="h-3 w-3 mr-1" />
                                Accepted
                              </Badge>
                            )}

                            {evaluation.status === "donated" && (
                              <Badge className="bg-red-100 text-red-800">
                                <Heart className="h-3 w-3 mr-1" />
                                Will be donated
                              </Badge>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Contact Information</CardTitle>
                  <CardDescription>We'll use this information to coordinate your pickup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="Enter PIN code"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pickup Schedule */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Schedule Pickup</CardTitle>
                  <CardDescription>Choose your preferred date and time slot</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Time Slot</Label>
                      <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Any special instructions or notes for our pickup team"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pickup Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-xl sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Pickup Summary</CardTitle>
                  <CardDescription>Review your devices and estimated value</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {deviceEvaluations.length === 0 ? (
                    <p className="text-econova-text-light text-center py-8">
                      No devices evaluated yet. Use AI evaluation to get started.
                    </p>
                  ) : (
                    <>
                      <div className="space-y-3">
                        {/* AI evaluated devices */}
                        {deviceEvaluations
                          .filter((deviceEval) => deviceEval.status === "accepted")
                          .map((evaluation, index) => {
                            const device = deviceTypes.find((d) => d.id === evaluation.deviceId)
                            return (
                              <div key={index} className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-econova-primary">{device?.name}</div>
                                  <div className="text-sm text-econova-text-light">AI Evaluated</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium text-econova-primary">₹{evaluation.estimatedPrice}</div>
                                </div>
                              </div>
                            )
                          })}

                        {/* Donated devices */}
                        {deviceEvaluations
                          .filter((deviceEval) => deviceEval.status === "donated")
                          .map((evaluation, index) => {
                            const device = deviceTypes.find((d) => d.id === evaluation.deviceId)
                            return (
                              <div key={index} className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-econova-primary">{device?.name}</div>
                                  <div className="text-sm text-red-600">Donation</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium text-red-600">₹0</div>
                                </div>
                              </div>
                            )
                          })}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span className="text-econova-primary">Total Value:</span>
                          <span className="text-econova-accent">₹{calculateTotal()}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-econova-accent/10 text-econova-accent">
                        Free Pickup
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-econova-secondary/10 text-econova-secondary">
                        AI Powered
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-econova-primary/10 text-econova-primary">
                        Eco-Friendly
                      </Badge>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3 mt-6"
                    disabled={
                      deviceEvaluations.filter((e) => e.status === "accepted" || e.status === "donated").length === 0
                    }
                  >
                    Schedule Pickup
                  </Button>

                  <p className="text-xs text-econova-text-light text-center">
                    AI evaluations are estimates. Final pricing confirmed during pickup.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Modal */}
      <Dialog open={showCamera} onOpenChange={setShowCamera}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Evaluate Your Device</DialogTitle>
            <DialogDescription>Take a photo and provide device information for AI-powered pricing</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {!capturedImage ? (
              <div className="space-y-4">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-64 object-cover"
                    onLoadedMetadata={startCamera}
                  />
                  <canvas ref={canvasRef} className="hidden" />
                </div>

                <div className="flex gap-2 justify-center">
                  <Button onClick={capturePhoto} className="bg-econova-primary">
                    <Camera className="h-4 w-4 mr-2" />
                    Capture Photo
                  </Button>
                  <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <img
                  src={capturedImage || "/placeholder.svg"}
                  alt="Captured device"
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Device Condition</Label>
                    <Select value={deviceCondition} onValueChange={setDeviceCondition}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent - Like new</SelectItem>
                        <SelectItem value="good">Good - Minor wear</SelectItem>
                        <SelectItem value="fair">Fair - Visible wear</SelectItem>
                        <SelectItem value="poor">Poor - Heavy wear</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Issues or Problems</Label>
                  <Textarea
                    value={deviceIssues}
                    onChange={(e) => setDeviceIssues(e.target.value)}
                    placeholder="Describe any issues: cracked screen, not working, battery problems, etc."
                    rows={3}
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setCapturedImage("")}>
                    Retake Photo
                  </Button>
                  <Button
                    onClick={evaluateDevice}
                    disabled={!deviceCondition || isEvaluating}
                    className="bg-econova-primary"
                  >
                    {isEvaluating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Evaluating...
                      </>
                    ) : (
                      "Get AI Evaluation"
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
