"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export function HelpNovaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm HelpNova, your AI assistant. How can I help you with EcoNova services today? 🌱",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Pickup related queries
    if (message.includes("pickup") || message.includes("schedule") || message.includes("collect")) {
      return "📅 To schedule a pickup:\n1. Visit our website or download our app\n2. Enter your location and device details\n3. Choose a convenient time slot\n4. Confirm your booking\n\nOur team will arrive at your doorstep at the scheduled time. Pickup is free for most locations! Would you like me to guide you through the process?"
    }

    // Payment related queries
    if (
      message.includes("payment") ||
      message.includes("money") ||
      message.includes("cash") ||
      message.includes("pay")
    ) {
      return "💰 Payment Process:\n• We evaluate your devices using AI technology\n• You receive instant price quotes\n• Payment options: UPI, wallet, or store credits\n• Payments are processed within 24 hours\n• You can also choose to donate to eco-projects\n\nTypical device values:\n📱 Smartphones: ₹2,000-₹25,000\n💻 Laptops: ₹5,000-₹40,000\n🖥️ Desktops: ₹3,000-₹20,000"
    }

    // Device related queries
    if (
      message.includes("device") ||
      message.includes("phone") ||
      message.includes("laptop") ||
      message.includes("computer")
    ) {
      return "📱 We accept all types of electronic devices:\n\n✅ Smartphones & Tablets\n✅ Laptops & Desktops\n✅ Monitors & TVs\n✅ Printers & Scanners\n✅ Routers & Modems\n✅ Cables & Chargers\n✅ Batteries & Power Banks\n✅ Gaming Consoles\n✅ Smart Watches\n\nEven broken or non-functional devices have value! We extract reusable components and recycle the rest responsibly."
    }

    // Pricing related queries
    if (
      message.includes("price") ||
      message.includes("value") ||
      message.includes("worth") ||
      message.includes("cost")
    ) {
      return "🤖 Our AI-powered pricing system considers:\n\n📊 Device condition & functionality\n📈 Current market demand\n🔧 Reusable component value\n📅 Age and model specifications\n\nGet instant quotes:\n1. Upload device photos\n2. Answer condition questions\n3. Receive immediate price estimate\n4. Schedule pickup if satisfied\n\nNo hidden fees - what you see is what you get!"
    }

    // Business related queries
    if (
      message.includes("business") ||
      message.includes("corporate") ||
      message.includes("company") ||
      message.includes("bulk")
    ) {
      return "🏢 EcoNova Business Solutions:\n\n📋 Bulk E-waste Pickup\n🧾 Compliance Certificates\n📊 Detailed Reporting\n🔒 Secure Data Destruction\n📈 EPR Compliance Support\n💼 Custom Corporate Plans\n\nBenefits:\n• Volume-based pricing\n• Scheduled regular pickups\n• Branded certificates\n• CSR impact reports\n\nContact our business team for a custom quote!"
    }

    // Tracking related queries
    if (
      message.includes("track") ||
      message.includes("status") ||
      message.includes("order") ||
      message.includes("pickup status")
    ) {
      return "📍 Track Your Pickup:\n\n1. Login to your EcoNova account\n2. Go to 'My Pickups' section\n3. View real-time status updates\n\nPickup Stages:\n🟡 Scheduled\n🔵 Team Dispatched\n🟢 Pickup Complete\n⚙️ Under Evaluation\n💰 Payment Processed\n\nYou'll receive SMS/email updates at each stage. Need help with a specific pickup? Share your booking ID!"
    }

    // Certificate related queries
    if (message.includes("certificate") || message.includes("disposal") || message.includes("impact")) {
      return "🏆 Safe Disposal Certificates:\n\n📜 Digital certificates for all disposals\n🌍 Environmental impact tracking\n📊 Detailed breakdown of recycled materials\n🎯 Corporate compliance documentation\n\nYour certificate includes:\n• Device details & quantities\n• Recycling methods used\n• Environmental impact metrics\n• Verification QR code\n\nCertificates are available 48 hours after processing!"
    }

    // Store related queries
    if (
      message.includes("store") ||
      message.includes("buy") ||
      message.includes("refurbished") ||
      message.includes("shop")
    ) {
      return "🛍️ EcoNova Refurbished Store:\n\n✨ Quality tested products\n💰 20-30% lower than market price\n🔧 Professional refurbishment\n📱 6-12 months warranty\n🚚 Free delivery on orders >₹5,000\n\nAvailable Products:\n📱 Smartphones\n💻 Laptops\n🖥️ Desktops\n📺 Monitors\n🎮 Gaming accessories\n\nAll products undergo 50+ quality checks before sale!"
    }

    // Contact related queries
    if (
      message.includes("contact") ||
      message.includes("support") ||
      message.includes("help") ||
      message.includes("call")
    ) {
      return "📞 Contact EcoNova Support:\n\n📧 Email: support@econova.in\n📱 Phone: +91 78967840xx\n🕒 Hours: Mon-Sat, 9 AM - 7 PM\n📍 Location: Prayagraj, UP, India\n\n💬 Live Chat: Available on website\n📱 WhatsApp: Quick responses\n📧 Email: Detailed queries\n☎️ Call: Urgent support\n\nI'm here 24/7 for instant help! What specific issue can I assist with?"
    }

    // General greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good")) {
      return "Hello! 👋 Welcome to EcoNova! I'm HelpNova, your AI assistant.\n\nI can help you with:\n🚚 Scheduling pickups\n💰 Understanding pricing\n📱 Device information\n🏢 Business solutions\n📍 Tracking orders\n🛍️ Refurbished store\n📞 Contact support\n\nWhat would you like to know about our e-waste management services?"
    }

    // Default response
    return "I understand you're asking about our services! 🤔\n\nI can help you with:\n• 📅 Pickup scheduling\n• 💰 Device pricing & payments\n• 📱 Accepted devices\n• 🏢 Business solutions\n• 📍 Order tracking\n• 🛍️ Refurbished products\n• 📞 Contact information\n\nCould you please be more specific about what you'd like to know? I'm here to help make your e-waste management journey smooth! 🌱"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const quickActions = ["Schedule Pickup", "Check Pricing", "Track Order", "Business Solutions", "Contact Support"]

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-econova-accent to-econova-secondary hover:from-econova-accent/90 hover:to-econova-secondary/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 group"
        >
          <MessageCircle className="h-8 w-8 group-hover:animate-bounce" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold animate-pulse">!</span>
          </div>
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl border-0 z-50 bg-white">
          <CardHeader className="bg-gradient-to-r from-econova-primary to-econova-primary-light text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">HelpNova</CardTitle>
                  <p className="text-white/80 text-sm">AI Assistant • Online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-0 flex-1 flex flex-col h-[500px]">
                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}>
                        {message.isBot && (
                          <div className="w-8 h-8 bg-gradient-to-r from-econova-accent to-econova-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.isBot
                              ? "bg-gray-100 text-gray-800"
                              : "bg-gradient-to-r from-econova-accent to-econova-secondary text-white"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                        {!message.isBot && (
                          <div className="w-8 h-8 bg-econova-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-econova-accent to-econova-secondary rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className="p-4 border-t bg-gray-50">
                    <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-econova-primary hover:text-white transition-colors duration-200"
                          onClick={() => setInputValue(action)}
                        >
                          {action}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-econova-primary hover:bg-econova-primary-light text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Powered by EcoNova AI • Always here to help 🌱
                  </p>
                </div>
                <div className="text-center mt-2">
  <Button
    variant="ghost"
    size="sm"
    onClick={() => setIsOpen(false)}
    className="text-gray-500 hover:text-red-600"
  >
    Close Chat
  </Button>
</div>

              </CardContent>
            </>
          )}
        </Card>
      )}
    </>
  )
}
