"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Recycle, TreePine, Award, TrendingUp, Calendar, Package, Gift, Users, Zap, Trophy } from "lucide-react"

export default function DashboardPage() {
  const [userLevel] = useState(3)
  const [userPoints] = useState(2450)
  const [nextLevelPoints] = useState(3000)

  const recentPickups = [
    { id: "PU001", date: "2024-01-15", items: "Laptop, Smartphone", status: "Completed", value: 950 },
    { id: "PU002", date: "2024-01-10", items: "Monitor, Keyboard", status: "Processing", value: 350 },
    { id: "PU003", date: "2024-01-05", items: "Printer, Cables", status: "Completed", value: 200 },
  ]

  const achievements = [
    { id: 1, name: "First Pickup", description: "Completed your first e-waste pickup", earned: true, icon: Package },
    { id: 2, name: "Eco Warrior", description: "Recycled 10+ devices", earned: true, icon: Award },
    { id: 3, name: "Green Champion", description: "Saved 50kg+ of e-waste", earned: true, icon: TreePine },
    { id: 4, name: "Referral Master", description: "Referred 5+ friends", earned: false, icon: Users },
    { id: 5, name: "Sustainability Hero", description: "Recycled 100+ devices", earned: false, icon: Trophy },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome back, Priya!</h1>
            <p className="text-xl text-white/80">Track your environmental impact and rewards</p>
          </div>

          {/* Level Progress */}
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-econova-accent to-econova-secondary text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Level {userLevel} - Eco Champion</h2>
                  <p className="text-white/90">
                    {userPoints} / {nextLevelPoints} points to next level
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{userPoints}</div>
                  <div className="text-white/90">Total Points</div>
                </div>
              </div>
              <Progress value={(userPoints / nextLevelPoints) * 100} className="h-3 bg-white/20" />
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border border-white/20">
              <TabsTrigger
                value="overview"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-econova-primary"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="impact"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-econova-primary"
              >
                Impact
              </TabsTrigger>
              <TabsTrigger
                value="rewards"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-econova-primary"
              >
                Rewards
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-econova-primary"
              >
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-econova-text-light text-sm">Total Pickups</p>
                        <p className="text-3xl font-bold text-econova-primary">12</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-xl flex items-center justify-center">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-econova-text-light text-sm">Devices Recycled</p>
                        <p className="text-3xl font-bold text-econova-primary">28</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-xl flex items-center justify-center">
                        <Recycle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-econova-text-light text-sm">Total Earnings</p>
                        <p className="text-3xl font-bold text-econova-primary">₹4,250</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-econova-text-light text-sm">Referrals</p>
                        <p className="text-3xl font-bold text-econova-primary">3</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-econova-primary">Recent Pickups</CardTitle>
                    <CardDescription>Your latest e-waste pickup activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPickups.map((pickup) => (
                        <div
                          key={pickup.id}
                          className="flex items-center justify-between p-4 bg-econova-lighter rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-econova-primary">{pickup.id}</div>
                            <div className="text-sm text-econova-text-light">{pickup.items}</div>
                            <div className="text-xs text-econova-text-light">{pickup.date}</div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={pickup.status === "Completed" ? "default" : "secondary"}
                              className={
                                pickup.status === "Completed"
                                  ? "bg-econova-accent text-white"
                                  : "bg-econova-secondary/10 text-econova-secondary"
                              }
                            >
                              {pickup.status}
                            </Badge>
                            <div className="text-sm font-medium text-econova-primary mt-1">₹{pickup.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-econova-primary">Quick Actions</CardTitle>
                    <CardDescription>Manage your account and schedule new pickups</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-econova-primary hover:bg-econova-primary-light text-white font-semibold py-3">
                      <Package className="h-4 w-4 mr-2" />
                      Schedule New Pickup
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-econova-secondary text-econova-secondary hover:bg-econova-secondary/10 bg-transparent"
                    >
                      <Gift className="h-4 w-4 mr-2" />
                      Redeem Points
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-econova-accent text-econova-accent hover:bg-econova-accent/10 bg-transparent"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Refer Friends
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-8">
              {/* Environmental Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TreePine className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-econova-primary mb-2">45.2 kg</div>
                    <div className="text-econova-text-light">E-waste Diverted</div>
                    <div className="text-sm text-econova-text-light mt-2">From landfills</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-econova-primary mb-2">128 kWh</div>
                    <div className="text-econova-text-light">Energy Saved</div>
                    <div className="text-sm text-econova-text-light mt-2">Through recycling</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-econova-primary mb-2">89.3 kg</div>
                    <div className="text-econova-text-light">CO₂ Prevented</div>
                    <div className="text-sm text-econova-text-light mt-2">Carbon emissions</div>
                  </CardContent>
                </Card>
              </div>

              {/* Impact Visualization */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Your Environmental Impact</CardTitle>
                  <CardDescription>See how your actions contribute to a sustainable future</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-econova-primary mb-4">Equivalent Impact</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-econova-text">Trees planted equivalent</span>
                          <span className="font-semibold text-econova-primary">12 trees</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-econova-text">Car miles offset</span>
                          <span className="font-semibold text-econova-primary">245 miles</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-econova-text">Water saved</span>
                          <span className="font-semibold text-econova-primary">1,250 liters</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-econova-primary mb-4">Monthly Progress</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-econova-text">This Month</span>
                            <span className="text-econova-primary">8.5 kg</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-econova-text">Goal Progress</span>
                            <span className="text-econova-primary">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-8">
              {/* Points and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-econova-primary">Available Points</CardTitle>
                    <CardDescription>Redeem your points for rewards and discounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-econova-accent mb-2">{userPoints}</div>
                      <div className="text-econova-text-light">Available Points</div>
                    </div>
                    <Button className="w-full bg-econova-accent hover:bg-econova-accent/90 text-white font-semibold">
                      <Gift className="h-4 w-4 mr-2" />
                      Browse Rewards
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-econova-primary">Achievements</CardTitle>
                    <CardDescription>Your sustainability milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.slice(0, 3).map((achievement) => {
                        const Icon = achievement.icon
                        return (
                          <div key={achievement.id} className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                achievement.earned
                                  ? "bg-gradient-to-br from-econova-secondary to-econova-accent"
                                  : "bg-gray-200"
                              }`}
                            >
                              <Icon className={`h-5 w-5 ${achievement.earned ? "text-white" : "text-gray-400"}`} />
                            </div>
                            <div className="flex-1">
                              <div
                                className={`font-medium ${achievement.earned ? "text-econova-primary" : "text-gray-400"}`}
                              >
                                {achievement.name}
                              </div>
                              <div className="text-sm text-econova-text-light">{achievement.description}</div>
                            </div>
                            {achievement.earned && <Badge className="bg-econova-accent text-white">Earned</Badge>}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Referral Program */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Referral Program</CardTitle>
                  <CardDescription>Earn points by referring friends to EcoNova</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-econova-primary mb-4">Your Referral Code</h3>
                      <div className="bg-econova-lighter p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-econova-primary mb-2">PRIYA2024</div>
                        <div className="text-sm text-econova-text-light">Share this code with friends</div>
                      </div>
                      <Button className="w-full mt-4 bg-econova-secondary hover:bg-econova-secondary/90 text-white">
                        Share Code
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-econova-primary mb-4">Referral Stats</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-econova-text">Friends Referred</span>
                          <span className="font-semibold text-econova-primary">3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-econova-text">Points Earned</span>
                          <span className="font-semibold text-econova-primary">450</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-econova-text">Next Reward</span>
                          <span className="font-semibold text-econova-primary">2 more referrals</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              {/* Pickup History */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-econova-primary">Pickup History</CardTitle>
                  <CardDescription>Complete history of your e-waste pickups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPickups.map((pickup) => (
                      <div key={pickup.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-lg font-semibold text-econova-primary">{pickup.id}</div>
                            <div className="text-sm text-econova-text-light flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {pickup.date}
                            </div>
                          </div>
                          <Badge
                            variant={pickup.status === "Completed" ? "default" : "secondary"}
                            className={
                              pickup.status === "Completed"
                                ? "bg-econova-accent text-white"
                                : "bg-econova-secondary/10 text-econova-secondary"
                            }
                          >
                            {pickup.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-econova-text-light">Items</div>
                            <div className="font-medium text-econova-primary">{pickup.items}</div>
                          </div>
                          <div>
                            <div className="text-sm text-econova-text-light">Value</div>
                            <div className="font-medium text-econova-primary">₹{pickup.value}</div>
                          </div>
                          <div>
                            <div className="text-sm text-econova-text-light">Points Earned</div>
                            <div className="font-medium text-econova-primary">{Math.floor(pickup.value / 10)} pts</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
