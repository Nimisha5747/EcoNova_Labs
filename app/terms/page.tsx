"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  CheckCircle,
  User,
  Shield,
  CreditCard,
  XCircle,
  Award,
  RotateCcw,
  Package,
  Lock,
  Scale,
  Edit,
  Mail,
} from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-white/80">Effective Date: January 1, 2024</p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <CheckCircle className="h-8 w-8" />
                  1. 📝 Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-econova-text-light">
                  By accessing or using EcoNova's platform, you agree to be bound by these Terms, our Privacy Policy,
                  and any other policies we publish.
                </p>
                <p className="text-econova-text-light">
                  If you do not agree with any part, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Our Services */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Package className="h-8 w-8" />
                  2. 🚚 Our Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-econova-text-light">EcoNova provides:</p>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>E-waste pickup and recycling services</li>
                  <li>Evaluation and purchase of used electronics</li>
                  <li>Sale of refurbished components</li>
                  <li>Issuance of disposal certificates</li>
                  <li>Subscription plans for repair shops and corporates</li>
                </ul>
                <p className="text-econova-text-light">We may update or modify services at our discretion.</p>
              </CardContent>
            </Card>

            {/* User Eligibility */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <User className="h-8 w-8" />
                  3. 👤 User Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-econova-text-light">You must be:</p>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>At least 18 years old (or have guardian consent if under 18)</li>
                  <li>Providing true, accurate, and complete information when using the platform</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Shield className="h-8 w-8" />
                  4. 🛡️ User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-econova-text-light">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Schedule pickups only for your own or authorized property</li>
                  <li>Ensure devices handed over are not stolen or involved in legal disputes</li>
                  <li>Not misuse or tamper with our app, services, or platform</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing & Payments */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <CreditCard className="h-8 w-8" />
                  5. 💸 Pricing & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Pickup may be free or paid, depending on volume</li>
                  <li>Payments for valuable e-waste will be made after evaluation</li>
                  <li>Subscriptions are billed monthly and may auto-renew unless canceled</li>
                  <li>All prices are inclusive of applicable taxes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Use */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <XCircle className="h-8 w-8" />
                  6. ❌ Prohibited Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-econova-text-light">You may not use EcoNova for:</p>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Illegal, fraudulent, or harmful activities</li>
                  <li>Attempting to resell, reverse-engineer, or disrupt our service</li>
                  <li>Uploading malware or engaging in data scraping</li>
                </ul>
              </CardContent>
            </Card>

            {/* Certification & Impact Tracking */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Award className="h-8 w-8" />
                  7. 🧾 Certification & Impact Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-econova-text-light">
                  EcoNova provides digital certificates for e-waste disposal. These are informational and not legally
                  binding unless verified under specific corporate compliance services.
                </p>
              </CardContent>
            </Card>

            {/* Cancellations & Refunds */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <RotateCcw className="h-8 w-8" />
                  8. 🔄 Cancellations & Refunds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Users may cancel scheduled pickups up to 12 hours before</li>
                  <li>Refunds for subscription plans are not guaranteed but may be considered case-by-case</li>
                  <li>Payments for evaluated devices are final once agreed and accepted by the user</li>
                </ul>
              </CardContent>
            </Card>

            {/* Device Handling */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Package className="h-8 w-8" />
                  9. 📦 Device Handling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-econova-text-light">
                  Once collected, devices become the property of EcoNova unless otherwise agreed. We are not responsible
                  for data left on devices. Please wipe your data before handing over.
                </p>
              </CardContent>
            </Card>

            {/* Data Privacy */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Lock className="h-8 w-8" />
                  10. 🔐 Data Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-econova-text-light">
                  Your use of the service is subject to our Privacy Policy. We never sell your data and only share with
                  partners essential to service fulfillment.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Shield className="h-8 w-8" />
                  11. 📉 Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-econova-text-light">EcoNova is not liable for:</p>
                <ul className="list-disc list-inside space-y-2 text-econova-text-light ml-4">
                  <li>Loss of data from your devices</li>
                  <li>Delays due to force majeure (e.g., weather, strikes)</li>
                  <li>Indirect or incidental damages</li>
                </ul>
                <p className="text-econova-text-light">
                  Our total liability is limited to the amount paid by you in the past 3 months.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Scale className="h-8 w-8" />
                  12. ⚖️ Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-econova-text-light">
                  These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of
                  Prayagraj, Uttar Pradesh.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Edit className="h-8 w-8" />
                  13. ✏️ Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-econova-text-light">
                  We may update these Terms occasionally. Users will be notified of major changes. Continued use implies
                  acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-econova-primary flex items-center gap-3">
                  <Mail className="h-8 w-8" />
                  14. 📩 Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-econova-text-light mb-4">For any concerns, questions, or support:</p>
                <div className="space-y-2 text-econova-text-light">
                  <p>📧 support@econova.in</p>
                  <p>📍 Prayagraj, Uttar Pradesh, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
