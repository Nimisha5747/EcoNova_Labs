"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, Database, Globe, Baby, Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">📜 Privacy Policy – EcoNova</h1>
            <p className="text-xl text-white/80">Effective Date: January 1, 2024</p>
          </div>

          {/* Introduction */}
          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <p className="text-econova-text-light text-lg leading-relaxed">
                EcoNova ("we", "our", "us") is committed to protecting the privacy and personal data of our users. This
                Privacy Policy explains how we collect, use, store, and share your information when you use our website,
                app, or services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Database className="h-8 w-8" />
                1. 📥 Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-econova-primary mb-3">a. Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Pickup address</li>
                  <li>Payment information (processed via third-party gateways)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-econova-primary mb-3">b. Device & Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>IP address</li>
                  <li>Device type and OS</li>
                  <li>Browser type</li>
                  <li>App usage analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-econova-primary mb-3">c. E-Waste Details</h3>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Type of electronic devices submitted</li>
                  <li>Quantity and condition</li>
                  <li>User preferences (e.g., payment, donation, or certificate)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Eye className="h-8 w-8" />
                2. 🛠️ How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-econova-text-light mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                <li>Schedule and process pickups</li>
                <li>Contact you about service updates</li>
                <li>Evaluate devices for pricing and recycling</li>
                <li>Provide digital certificates</li>
                <li>Process payments or donations</li>
                <li>Improve app and platform experience</li>
                <li>Run loyalty or gamification features</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Lock className="h-8 w-8" />
                3. 🔐 Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-econova-text-light">
                We use encryption, secure servers, and access controls to protect your data. However, no system is 100%
                secure. You use our platform at your own risk.
              </p>
            </CardContent>
          </Card>

          {/* Sharing Information */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Users className="h-8 w-8" />
                4. 🤝 Sharing Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-econova-text-light">We do not sell your personal data. We may share data with:</p>
              <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                <li>Logistics partners (to fulfill pickups)</li>
                <li>Recycling facilities (for compliance)</li>
                <li>Payment processors (UPI/wallet services)</li>
                <li>Legal authorities, if required by law</li>
              </ul>
              <p className="text-econova-text-light">All partners are contractually obligated to protect your data.</p>
            </CardContent>
          </Card>

          {/* Your Choices */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary">5. ⚙️ Your Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-econova-text-light mb-4">You can:</p>
              <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                <li>View/edit your profile information</li>
                <li>Delete your account anytime</li>
                <li>Opt out of promotional communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Storage */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Globe className="h-8 w-8" />
                6. 🌍 Data Storage & Retention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-econova-text-light">
                We store your data on secure servers located in India. We retain data only as long as needed to fulfill
                our services or as required by law.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Baby className="h-8 w-8" />
                7. 🧒 Children's Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-econova-text-light">
                EcoNova is not intended for users under 13 years old. We do not knowingly collect data from minors.
              </p>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                <Mail className="h-8 w-8" />
                8. 📩 Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-econova-text-light mb-4">If you have questions or concerns, contact us at:</p>
              <div className="space-y-2 text-econova-text-light">
                <p>📧econova455@gmail.com</p>
                <p>📞 +91 78967840xx</p>
                <p>📍 Prayagraj, Uttar Pradesh, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
