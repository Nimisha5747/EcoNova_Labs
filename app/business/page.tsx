"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, FileText, Clock, CheckCircle, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "₹5,000",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 50 devices/month",
      "Monthly pickup schedule",
      "Basic EPR compliance",
      "Email support",
      "Standard reporting",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹15,000",
    period: "/month",
    description: "Ideal for growing companies",
    features: [
      "Up to 200 devices/month",
      "Bi-weekly pickup schedule",
      "Full EPR compliance",
      "Priority phone support",
      "Advanced reporting & analytics",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    features: [
      "Unlimited devices",
      "Custom pickup schedule",
      "Complete compliance suite",
      "24/7 dedicated support",
      "Custom reporting dashboard",
      "On-site consultation",
      "Bulk processing discounts",
    ],
    popular: false,
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm">
            🏢 Enterprise E-Waste Solutions
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Complete E-Waste Management for <span className="text-econova-accent">Your Business</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Streamline your corporate e-waste management with our comprehensive solutions. EPR compliance, bulk
            processing, and dedicated support for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-econova-accent hover:bg-econova-accent/90 text-white px-10 py-4 text-lg font-semibold"
            >
              Get Custom Quote <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-econova-primary px-10 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Why Choose EcoNova for Business?</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Comprehensive e-waste management solutions designed for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-econova-primary mb-4">EPR Compliance</h3>
                <p className="text-econova-text-light">
                  Complete Extended Producer Responsibility compliance with certified documentation and reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-econova-primary mb-4">Flexible Scheduling</h3>
                <p className="text-econova-text-light">
                  Custom pickup schedules that fit your business operations and inventory cycles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-econova-primary mb-4">Detailed Reporting</h3>
                <p className="text-econova-text-light">
                  Comprehensive analytics and reporting for CSR documentation and sustainability goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-econova-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Choose Your Plan</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Flexible pricing options to match your business needs and scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl relative ${plan.popular ? "ring-2 ring-econova-accent" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-econova-accent text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-econova-primary">{plan.name}</CardTitle>
                  <CardDescription className="text-econova-text-light">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-econova-primary">{plan.price}</span>
                    <span className="text-econova-text-light">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-econova-accent flex-shrink-0" />
                        <span className="text-econova-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full font-semibold py-3 ${
                      plan.popular
                        ? "bg-econova-accent hover:bg-econova-accent/90 text-white"
                        : "bg-econova-primary hover:bg-econova-primary-light text-white"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-econova-primary mb-4">Get a Custom Quote</h2>
              <p className="text-xl text-econova-text-light">
                Tell us about your business needs and we'll create a tailored solution
              </p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <Label htmlFor="employees">Company Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="devices">Estimated Monthly E-Waste Volume</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select estimated volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-25">1-25 devices</SelectItem>
                        <SelectItem value="26-100">26-100 devices</SelectItem>
                        <SelectItem value="101-500">101-500 devices</SelectItem>
                        <SelectItem value="500+">500+ devices</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="requirements">Specific Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your specific e-waste management needs, compliance requirements, or any questions you have..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3 text-lg">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
