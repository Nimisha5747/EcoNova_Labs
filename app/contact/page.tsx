"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react"

export default function ContactPage() {
  const [contactMethod, setContactMethod] = useState("email")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    preferredTime: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    // Handle form submission based on contact method
    if (contactMethod === "call") {
      alert("Thank you! We'll call you back within 2 hours during business hours.")
    } else {
      alert("Thank you! We'll respond to your email within 24 hours.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get in touch with our team. We're here to help with any questions or support you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-econova-primary mb-4">Call Us</h3>
                  <p className="text-econova-text-light mb-4">Speak directly with our support team</p>
                  <p className="text-econova-primary font-semibold text-lg">+91 78967840xx</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-econova-text-light">
                    <Clock className="h-4 w-4" />
                    <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-econova-primary mb-4">Email Us</h3>
                  <p className="text-econova-text-light mb-4">Send us an email and we'll respond quickly</p>
                  <p className="text-econova-primary font-semibold text-lg">support@econova.in</p>
                  <p className="text-sm text-econova-text-light mt-2">Response within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-econova-primary mb-4">Visit Us</h3>
                  <p className="text-econova-text-light mb-4">Our office location</p>
                  <p className="text-econova-primary font-semibold">Prayagraj, Uttar Pradesh, India</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Get In Touch</CardTitle>
                  <CardDescription>Choose your preferred contact method and we'll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Contact Method Selection */}
                  <div className="flex gap-4 mb-8">
                    <Button
                      variant={contactMethod === "email" ? "default" : "outline"}
                      onClick={() => setContactMethod("email")}
                      className={contactMethod === "email" ? "bg-econova-primary hover:bg-econova-primary-light" : ""}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Response
                    </Button>
                    <Button
                      variant={contactMethod === "call" ? "default" : "outline"}
                      onClick={() => setContactMethod("call")}
                      className={contactMethod === "call" ? "bg-econova-primary hover:bg-econova-primary-light" : ""}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Back Request
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                    </div>

                    {contactMethod === "call" && (
                      <div>
                        <Label htmlFor="preferredTime">Preferred Call Time</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => handleInputChange("preferredTime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactMethod === "call" ? "Request Call Back" : "Send Message"}
                    </Button>

                    <p className="text-sm text-econova-text-light text-center">
                      {contactMethod === "call"
                        ? "We'll call you back within 2 hours during business hours"
                        : "We'll respond to your email within 24 hours"}
                    </p>
                  </form>
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
