"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendarIcon, Plus, Minus, Smartphone, Laptop, Monitor, Printer, Camera, Headphones } from "lucide-react"
import { format } from "date-fns"

const deviceTypes = [
  { id: "smartphone", name: "Smartphone", icon: Smartphone, price: 150 },
  { id: "laptop", name: "Laptop", icon: Laptop, price: 800 },
  { id: "monitor", name: "Monitor", icon: Monitor, price: 300 },
  { id: "printer", name: "Printer", icon: Printer, price: 200 },
  { id: "camera", name: "Camera", icon: Camera, price: 250 },
  { id: "headphones", name: "Headphones", icon: Headphones, price: 50 },
]

export default function SchedulePickupPage() {
  const [selectedDevices, setSelectedDevices] = useState<Record<string, number>>({})
  const [selectedDate, setSelectedDate] = useState<Date>()
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

  const updateDeviceQuantity = (deviceId: string, change: number) => {
    setSelectedDevices((prev) => {
      const current = prev[deviceId] || 0
      const newQuantity = Math.max(0, current + change)
      if (newQuantity === 0) {
        const { [deviceId]: removed, ...rest } = prev
        return rest
      }
      return { ...prev, [deviceId]: newQuantity }
    })
  }

  const calculateTotal = () => {
    return Object.entries(selectedDevices).reduce((total, [deviceId, quantity]) => {
      const device = deviceTypes.find((d) => d.id === deviceId)
      return total + (device?.price || 0) * quantity
    }, 0)
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
              Get instant pricing and schedule a convenient pickup time for your electronic devices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Device Selection */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Select Your Devices</CardTitle>
                  <CardDescription>Choose the electronic devices you want to recycle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {deviceTypes.map((device) => {
                      const Icon = device.icon
                      const quantity = selectedDevices[device.id] || 0
                      return (
                        <div
                          key={device.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-econova-secondary transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-econova-primary">{device.name}</div>
                              <div className="text-sm text-econova-text-light">₹{device.price}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateDeviceQuantity(device.id, -1)}
                              disabled={quantity === 0}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateDeviceQuantity(device.id, 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
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
                  <CardDescription>Review your selected devices and estimated value</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.keys(selectedDevices).length === 0 ? (
                    <p className="text-econova-text-light text-center py-8">
                      No devices selected yet. Choose devices from the left to see your estimate.
                    </p>
                  ) : (
                    <>
                      <div className="space-y-3">
                        {Object.entries(selectedDevices).map(([deviceId, quantity]) => {
                          const device = deviceTypes.find((d) => d.id === deviceId)
                          if (!device) return null
                          return (
                            <div key={deviceId} className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-econova-primary">{device.name}</div>
                                <div className="text-sm text-econova-text-light">Qty: {quantity}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium text-econova-primary">₹{device.price * quantity}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span className="text-econova-primary">Estimated Value:</span>
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
                        Instant Payment
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
                    disabled={Object.keys(selectedDevices).length === 0}
                  >
                    Schedule Pickup
                  </Button>

                  <p className="text-xs text-econova-text-light text-center">
                    By scheduling a pickup, you agree to our terms and conditions. Final pricing may vary based on
                    device condition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
