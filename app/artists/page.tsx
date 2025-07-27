"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Palette, Lightbulb, Users, Award, ArrowRight, Sparkles, Camera, Wrench } from "lucide-react"

const artProjects = [
  {
    title: "Circuit Board Sculptures",
    artist: "Maya Patel",
    description: "Creating intricate sculptures using old motherboards and circuit components",
    image: "/placeholder.svg?height=300&width=400",
    materials: "Motherboards, RAM, Capacitors",
  },
  {
    title: "E-Waste Fashion",
    artist: "Arjun Singh",
    description: "Sustainable fashion accessories made from recycled electronic components",
    image: "/placeholder.svg?height=300&width=400",
    materials: "Cables, Connectors, Metal Parts",
  },
  {
    title: "Digital Garden",
    artist: "Sneha Reddy",
    description: "Interactive art installation using old screens and sensors",
    image: "/placeholder.svg?height=300&width=400",
    materials: "LCD Screens, Sensors, Wires",
  },
]

const availableComponents = [
  { name: "Circuit Boards", quantity: "50+", condition: "Various conditions" },
  { name: "LCD Screens", quantity: "25+", condition: "Working/Non-working" },
  { name: "Cables & Wires", quantity: "100+", condition: "Good condition" },
  { name: "Metal Components", quantity: "75+", condition: "Various metals" },
  { name: "Plastic Casings", quantity: "40+", condition: "Different colors" },
  { name: "Keyboards & Buttons", quantity: "30+", condition: "Functional" },
]

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm">
            🎨 Creativity Corner
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Transform E-Waste into <span className="text-econova-accent">Art</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join our creative community where obsolete electronics become raw materials for innovative art, sculptures,
            and installations. Free components for registered artists and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-econova-accent hover:bg-econova-accent/90 text-white px-10 py-4 text-lg font-semibold"
            >
              Join Artist Program <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-econova-primary px-10 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
            >
              Browse Components
            </Button>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Why Join Our Artist Program?</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Empowering creativity while promoting environmental sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Free Components",
                desc: "Access to a wide variety of electronic components at no cost for registered artists",
              },
              {
                icon: Lightbulb,
                title: "Creative Workshops",
                desc: "Regular workshops on e-waste art techniques and sustainable creation methods",
              },
              {
                icon: Users,
                title: "Artist Community",
                desc: "Connect with like-minded creators and collaborate on eco-art projects",
              },
              {
                icon: Award,
                title: "Exhibition Support",
                desc: "Opportunities to showcase your work in our sponsored exhibitions and events",
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

     

      {/* Available Components */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Available Components</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Current inventory of e-waste components available for artists
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableComponents.map((component, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-econova-primary">{component.name}</h3>
                    <Badge className="bg-econova-accent text-white">{component.quantity}</Badge>
                  </div>
                  <p className="text-econova-text-light text-sm">{component.condition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-econova-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-econova-primary mb-4">Join the Artist Program</h2>
              <p className="text-xl text-econova-text-light">Apply to become part of our creative e-waste community</p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Enter your city" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="art-type">Type of Art</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your art type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sculpture">Sculpture</SelectItem>
                        <SelectItem value="installation">Installation Art</SelectItem>
                        <SelectItem value="fashion">Fashion & Accessories</SelectItem>
                        <SelectItem value="functional">Functional Art</SelectItem>
                        <SelectItem value="mixed">Mixed Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                    <Input id="portfolio" placeholder="Link to your portfolio or website" />
                  </div>
                  <div>
                    <Label htmlFor="project-idea">Project Idea</Label>
                    <Textarea
                      id="project-idea"
                      placeholder="Describe your planned project or how you intend to use e-waste components..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="components-needed">Components Needed</Label>
                    <Textarea
                      id="components-needed"
                      placeholder="List the types of electronic components you're interested in..."
                      rows={3}
                    />
                  </div>
                  <Button className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3 text-lg">
                    Submit Application
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-econova-primary mb-4">Community Impact</h2>
            <p className="text-xl text-econova-text-light max-w-2xl mx-auto">
              Together, we're creating art while saving the environment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Active Artists", icon: Users },
              { number: "2.5 Tons", label: "E-Waste Upcycled", icon: Wrench },
              { number: "300+", label: "Art Pieces Created", icon: Palette },
              { number: "50+", label: "Exhibitions Supported", icon: Award },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-econova-primary mb-2">{stat.number}</div>
                  <div className="text-econova-text-light">{stat.label}</div>
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
