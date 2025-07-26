"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Star, ShoppingCart, Heart, Shield, Truck, RotateCcw } from "lucide-react"

const products = [
  {
    id: 1,
    name: "iPhone 12 Pro - Refurbished",
    category: "Smartphones",
    price: 45000,
    originalPrice: 65000,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    warranty: "6 months",
    condition: "Excellent",
    inStock: true,
    features: ["Face ID", "128GB Storage", "Triple Camera"],
  },
  {
    id: 2,
    name: "MacBook Air M1 - Refurbished",
    category: "Laptops",
    price: 75000,
    originalPrice: 95000,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    warranty: "12 months",
    condition: "Like New",
    inStock: true,
    features: ["M1 Chip", "8GB RAM", "256GB SSD"],
  },
  {
    id: 3,
    name: 'Dell Monitor 24" - Refurbished',
    category: "Monitors",
    price: 12000,
    originalPrice: 18000,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    warranty: "6 months",
    condition: "Good",
    inStock: true,
    features: ["Full HD", "IPS Panel", "HDMI Port"],
  },
  {
    id: 4,
    name: "iPad Air - Refurbished",
    category: "Tablets",
    price: 35000,
    originalPrice: 50000,
    rating: 4.6,
    reviews: 94,
    image: "/placeholder.svg?height=300&width=300",
    warranty: "6 months",
    condition: "Excellent",
    inStock: false,
    features: ['10.9" Display', "64GB Storage", "Touch ID"],
  },
  {
    id: 5,
    name: "Samsung Galaxy S21 - Refurbished",
    category: "Smartphones",
    price: 38000,
    originalPrice: 55000,
    rating: 4.4,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    warranty: "6 months",
    condition: "Very Good",
    inStock: true,
    features: ["5G Ready", "128GB Storage", "Triple Camera"],
  },
  {
    id: 6,
    name: "HP Laptop i5 - Refurbished",
    category: "Laptops",
    price: 32000,
    originalPrice: 45000,
    rating: 4.2,
    reviews: 73,
    image: "/placeholder.svg?height=300&width=300",
    warranty: "9 months",
    condition: "Good",
    inStock: true,
    features: ["Intel i5", "8GB RAM", "512GB SSD"],
  },
]

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [wishlist, setWishlist] = useState<number[]>([])

  const categories = ["all", "Smartphones", "Laptops", "Monitors", "Tablets"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Refurbished Electronics Store</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Quality tested, certified refurbished electronics with warranty and great savings
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white font-semibold">Quality Tested</div>
              <div className="text-white/80 text-sm">Rigorous testing process</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <RotateCcw className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white font-semibold">30-Day Returns</div>
              <div className="text-white/80 text-sm">Hassle-free returns</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <Truck className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white font-semibold">Free Shipping</div>
              <div className="text-white/80 text-sm">On orders above ₹5,000</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <Star className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white font-semibold">Warranty</div>
              <div className="text-white/80 text-sm">Up to 12 months</div>
            </div>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8 border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search for products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </Button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                      <Badge variant="secondary" className="bg-red-500 text-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="bg-econova-accent/10 text-econova-accent mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-econova-primary mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-econova-text-light">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-econova-primary">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-econova-text-light">
                      <span>Condition: {product.condition}</span>
                      <span>Warranty: {product.warranty}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-econova-text-light mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-econova-primary hover:bg-econova-primary-light text-white"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button variant="outline" size="sm" className="px-3 bg-transparent">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-white/60 text-lg">No products found matching your criteria.</div>
              <Button
                variant="outline"
                className="mt-4 border-white text-white hover:bg-white hover:text-econova-primary bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
