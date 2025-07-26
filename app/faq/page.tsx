"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "🟢 1. What is EcoNova?",
    answer:
      "EcoNova is a digital-first e-waste management platform that offers doorstep pickup, safe recycling, and refurbishing of electronic waste. We help households and businesses dispose of electronics responsibly — and even earn money for it.",
  },
  {
    id: 2,
    question: "🟢 2. What types of devices do you accept?",
    answer:
      "We collect a wide range of e-waste including:\n• Mobile phones, laptops, and tablets\n• Desktops, monitors, and keyboards\n• Chargers, cables, and batteries\n• Printers, routers, modems\n• Old gadgets and small appliances",
  },
  {
    id: 3,
    question: "🟢 3. How do I schedule a pickup?",
    answer:
      "You can schedule a pickup easily through our website or mobile app:\n• Enter your location and device details\n• Choose a preferred time slot\n• Confirm your pickup and track it in real time",
  },
  {
    id: 4,
    question: "🟢 4. Do I get paid for my e-waste?",
    answer:
      "Yes! If your devices or components have resale value, we evaluate them and offer a fair price. You can choose to receive:\n• Instant UPI or wallet payment\n• Store credits for refurbished products\n• Donate it to upcycling or eco-art projects",
  },
  {
    id: 5,
    question: "🟢 5. Is the pickup service free?",
    answer:
      "For households: Pickup is free or has a minimal service fee.\nFor corporates or bulk pickups: Charges may vary based on quantity. We offer custom plans and subscription pricing for businesses.",
  },
  {
    id: 6,
    question: "🟢 6. Is my personal data safe?",
    answer:
      "Absolutely. We do not sell your personal data. Please wipe your devices before handing them over. We also offer secure data destruction options upon request.",
  },
  {
    id: 7,
    question: "🟢 7. What happens to my e-waste after collection?",
    answer:
      "Collected items go through:\n• AI-powered evaluation\n• Component-level disassembly\n• Refurbishment or certified recycling\n\nYou also receive a Safe Disposal Certificate after processing.",
  },
  {
    id: 8,
    question: "🟢 8. How do I know my e-waste is disposed of safely?",
    answer:
      "We follow all government regulations (E-Waste Management Rules 2016) and partner only with authorized recyclers. You'll receive a digital certificate proving your responsible action.",
  },
  {
    id: 9,
    question: "🟢 9. Can businesses use EcoNova?",
    answer:
      "Yes! We offer:\n• Bulk e-waste pickups\n• Custom reporting and certification\n• EPR (Extended Producer Responsibility) compliance support\n\nContact us for corporate plans.",
  },
  {
    id: 10,
    question: "🟢 10. Do you offer rewards or loyalty programs?",
    answer:
      "Yes! With every responsible disposal, you:\n• Earn EcoNova points\n• Track your environmental impact\n• Unlock discounts or donate to green causes",
  },
  {
    id: 11,
    question: "🟢 11. Where is EcoNova available?",
    answer:
      "We're currently operational in major Indian cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and expanding rapidly. Follow us for updates on new city launches!",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about EcoNova's e-waste management services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq) => (
              <Card key={faq.id} className="border-0 shadow-xl">
                <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                      <CardTitle className="text-lg text-econova-primary flex items-center justify-between">
                        <span>{faq.question}</span>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="h-5 w-5 text-econova-accent" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-econova-accent" />
                        )}
                      </CardTitle>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="text-econova-text-light whitespace-pre-line leading-relaxed">{faq.answer}</div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-xl mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-econova-primary mb-4">Still have questions?</h3>
              <p className="text-econova-text-light mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-econova-primary hover:bg-econova-primary-light text-white"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="border-econova-secondary text-econova-secondary hover:bg-econova-secondary/10 bg-transparent"
                  onClick={() => (window.location.href = "/help")}
                >
                  Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
