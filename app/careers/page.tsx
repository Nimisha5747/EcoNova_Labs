"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Briefcase,
  Users,
  Truck,
  Code,
  HeadphonesIcon,
  BarChart3,
  Wrench,
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const jobCategories = [
  {
    id: "collection",
    title: "🚚 Doorstep Collection Team",
    icon: Truck,
    description: "Join our field team for e-waste pickup and customer interaction",
    positions: ["Collection Executive", "Team Leader", "Logistics Coordinator"],
    requirements: ["Valid driving license", "Good communication skills", "Physical fitness"],
    salary: "₹18,000 - ₹35,000/month",
  },
  {
    id: "tech",
    title: "💻 Technology & Development",
    icon: Code,
    description: "Build the AI-powered platform that's revolutionizing e-waste management",
    positions: ["Full Stack Developer", "AI/ML Engineer", "Mobile App Developer", "DevOps Engineer"],
    requirements: ["Technical degree", "Programming experience", "Problem-solving skills"],
    salary: "₹40,000 - ₹1,20,000/month",
  },
  {
    id: "operations",
    title: "⚙️ Processing & Operations",
    icon: Wrench,
    description: "Handle e-waste processing, component testing, and quality control",
    positions: ["Processing Technician", "Quality Controller", "Inventory Manager"],
    requirements: ["Technical background", "Attention to detail", "Safety awareness"],
    salary: "₹22,000 - ₹45,000/month",
  },
  {
    id: "support",
    title: "🎧 Customer Support",
    icon: HeadphonesIcon,
    description: "Help customers with queries, scheduling, and platform guidance",
    positions: ["Customer Support Executive", "Technical Support", "Chat Support"],
    requirements: ["Good communication", "Computer literacy", "Problem-solving"],
    salary: "₹15,000 - ₹30,000/month",
  },
  {
    id: "sales",
    title: "📊 Sales & Marketing",
    icon: BarChart3,
    description: "Drive business growth and build partnerships with corporates",
    positions: ["Sales Executive", "Business Development", "Marketing Specialist"],
    requirements: ["Sales experience", "Communication skills", "Target-oriented"],
    salary: "₹25,000 - ₹60,000/month + incentives",
  },
  {
    id: "management",
    title: "👥 Management & Leadership",
    icon: Users,
    description: "Lead teams and drive strategic initiatives across departments",
    positions: ["Team Manager", "Operations Head", "Regional Manager"],
    requirements: ["Leadership experience", "Management degree", "Strategic thinking"],
    salary: "₹50,000 - ₹1,50,000/month",
  },
]

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    position: "",
    category: "",
    resume: "",
    coverLetter: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Career application:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm">
            💼 Career Opportunities
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Build Your Career with <span className="text-econova-accent">EcoNova</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join India's leading e-waste management revolution. Work with cutting-edge AI technology while making a
            positive environmental impact. We're hiring across multiple departments!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-econova-accent hover:bg-econova-accent/90 text-white px-10 py-4 text-lg font-semibold"
              onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apply Now <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-econova-primary px-10 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Why Choose EcoNova?</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Be part of a mission-driven company that's changing India's e-waste landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Innovation First",
                desc: "Work with cutting-edge AI and technology solutions",
              },
              {
                icon: GraduationCap,
                title: "Growth Opportunities",
                desc: "Continuous learning and career advancement programs",
              },
              {
                icon: Users,
                title: "Great Team Culture",
                desc: "Collaborative environment with passionate colleagues",
              },
              {
                icon: DollarSign,
                title: "Competitive Benefits",
                desc: "Attractive salary packages with performance incentives",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-econova-primary mb-4">{benefit.title}</h3>
                    <p className="text-econova-text-light">{benefit.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-econova-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Open Positions</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Explore career opportunities across different departments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-econova-primary group-hover:text-econova-secondary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-econova-text-light">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-econova-primary mb-2">Available Positions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.positions.slice(0, 2).map((position, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {position}
                            </Badge>
                          ))}
                          {category.positions.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.positions.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-econova-text-light">
                        <DollarSign className="h-4 w-4" />
                        <span>{category.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-econova-text-light">
                        <MapPin className="h-4 w-4" />
                        <span>Multiple locations</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-econova-primary mb-4">Apply for a Position</h2>
              <p className="text-xl text-econova-text-light">
                Fill out the form below and we'll get back to you within 48 hours
              </p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
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
                      <Label htmlFor="city">Current City *</Label>
                      <Input
                        id="city"
                        placeholder="Enter your current city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Job Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job category" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobCategories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="position">Preferred Position</Label>
                      <Input
                        id="position"
                        placeholder="e.g., Collection Executive, Developer"
                        value={formData.position}
                        onChange={(e) => handleInputChange("position", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Work Experience *</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresher">Fresher (0 years)</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume/CV Link</Label>
                    <Input
                      id="resume"
                      placeholder="Google Drive, Dropbox, or LinkedIn profile link"
                      value={formData.resume}
                      onChange={(e) => handleInputChange("resume", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Why do you want to join EcoNova? *</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us about your motivation, relevant skills, and what you can bring to our team..."
                      rows={5}
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      id="consent"
                      type="checkbox"
                      className="w-4 h-4 text-econova-accent bg-gray-100 border-gray-300 rounded focus:ring-econova-accent"
                      required
                    />
                    <Label htmlFor="consent" className="text-sm text-econova-text">
                      I consent to EcoNova processing my personal data for recruitment purposes
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3 text-lg"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Growing Team - Updated without dummy data */}
      <section className="py-20 bg-econova-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Join Our Growing Team</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Be part of India's fastest-growing e-waste management company and help us build a sustainable future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Growing Team",
                desc: "Join our expanding workforce across India",
                color: "from-econova-accent to-econova-secondary",
              },
              {
                icon: MapPin,
                title: "Multiple Cities",
                desc: "Opportunities available in major Indian cities",
                color: "from-blue-500 to-purple-600",
              },
              {
                icon: Clock,
                title: "Career Growth",
                desc: "Fast-track your career with us",
                color: "from-green-500 to-teal-600",
              },
              {
                icon: Briefcase,
                title: "Great Culture",
                desc: "Work in a positive, mission-driven environment",
                color: "from-yellow-500 to-orange-600",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-xl font-bold text-econova-primary mb-2">{item.title}</div>
                  <div className="text-econova-text-light">{item.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
