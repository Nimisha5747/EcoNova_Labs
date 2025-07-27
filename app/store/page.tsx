"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Clock, Sparkles } from "lucide-react"

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm">
              🛍️ Refurbished Electronics Store
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Coming Soon: Our <span className="text-econova-accent">Refurbished Store</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              We're working hard to bring you quality tested, certified refurbished electronics with warranty and great
              savings
            </p>
          </div>

          {/* Work in Progress Card */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl text-econova-primary mb-4">We're Working on This Feature</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-lg text-econova-text-light leading-relaxed">
                Our team is developing an amazing refurbished electronics marketplace where you can find high-quality,
                tested devices at incredible prices. Stay tuned for updates!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-econova-lighter rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-econova-primary mb-2">Quality Tested</h3>
                  <p className="text-sm text-econova-text-light">Rigorous testing process for all devices</p>
                </div>

                <div className="text-center p-6 bg-econova-lighter rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-econova-primary mb-2">Warranty Included</h3>
                  <p className="text-sm text-econova-text-light">Up to 12 months warranty coverage</p>
                </div>

                <div className="text-center p-6 bg-econova-lighter rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Badge className="w-8 h-8 bg-transparent border-2 border-white text-white flex items-center justify-center text-xs font-bold">
                      %
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-econova-primary mb-2">Great Savings</h3>
                  <p className="text-sm text-econova-text-light">20-30% lower than market prices</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-econova-accent to-econova-secondary p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">🔔 Get Notified When We Launch</h3>
                <p className="text-white/90 mb-4">
                  Be the first to know when our refurbished store goes live and get exclusive early access deals!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded-lg text-econova-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-econova-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-econova-text-light">
                  In the meantime, you can still{" "}
                  <a href="/schedule-pickup" className="text-econova-accent font-semibold hover:underline">
                    schedule a pickup
                  </a>{" "}
                  for your e-waste and earn money!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
