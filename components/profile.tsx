"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Award, TrendingUp, Leaf, Settings, Edit2, LogOut } from "lucide-react"

interface ProfileProps {
  onLogout: () => void
}

export default function Profile({ onLogout }: ProfileProps) {
  const leaderboard = [
    { rank: 1, name: "Rajesh Kumar", points: 5240, waste: "245 kg", badge: "🥇" },
    { rank: 2, name: "Priya Sharma", points: 4890, waste: "220 kg", badge: "🥈" },
    { rank: 3, name: "Amit Patel", points: 4650, waste: "210 kg", badge: "🥉" },
    { rank: 4, name: "You", points: 1225, waste: "55 kg", badge: "⭐", highlight: true },
    { rank: 5, name: "Neha Singh", points: 980, waste: "45 kg", badge: "🌟" },
  ]

  const achievements = [
    { icon: Leaf, title: "Eco Warrior", description: "Recycled 50 kg of e-waste", unlocked: true },
    { icon: Trophy, title: "Top Contributor", description: "In top 10 recyclers", unlocked: true },
    { icon: Award, title: "Certified Green", description: "Completed awareness course", unlocked: false },
    { icon: TrendingUp, title: "Rising Star", description: "Earned 1000+ eco points", unlocked: true },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
        {/* Profile Header */}
        <motion.div variants={itemVariants}>
          <Card className="border-border bg-gradient-to-r from-primary/10 to-secondary/10 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                    U
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Welcome, User!</CardTitle>
                    <CardDescription>Member since November 2024 • Rank #4</CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-border hover:bg-muted bg-transparent gap-2">
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </Button>
                  <Button
                    onClick={onLogout}
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-muted bg-transparent gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Total Eco Points</p>
                  <p className="text-3xl font-bold text-primary">1,225</p>
                  <p className="text-xs text-muted-foreground mt-1">+150 this month</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">E-Waste Recycled</p>
                  <p className="text-3xl font-bold text-secondary">245 kg</p>
                  <p className="text-xs text-muted-foreground mt-1">+12 kg this month</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Pickups Completed</p>
                  <p className="text-3xl font-bold text-accent">12</p>
                  <p className="text-xs text-muted-foreground mt-1">2 pending</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
                  <p className="text-3xl font-bold text-orange-600">7 days</p>
                  <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Your Achievements</h3>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card
                    className={`border-border text-center hover:border-primary/50 transition-all hover:shadow-lg ${
                      !achievement.unlocked ? "opacity-50" : ""
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                          achievement.unlocked ? "bg-primary/10" : "bg-muted"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${achievement.unlocked ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </div>
                      <p className="font-semibold text-foreground">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                      {!achievement.unlocked && (
                        <p className="text-xs text-muted-foreground mt-2 font-medium">Locked</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Leaderboard</h3>
          <Card className="border-border overflow-hidden hover:shadow-lg transition-all">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Rank</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Eco Points</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">E-Waste</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((entry, idx) => (
                      <motion.tr
                        key={idx}
                        variants={itemVariants}
                        className={`border-b border-border transition-colors ${
                          entry.highlight ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-muted"
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {entry.badge} #{entry.rank}
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground font-medium">{entry.name}</td>
                        <td className="px-6 py-4 text-sm text-primary font-semibold">{entry.points}</td>
                        <td className="px-6 py-4 text-sm text-secondary font-semibold">{entry.waste}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings */}
        <motion.div variants={itemVariants}>
          <Card className="border-border hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-foreground">Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-foreground">Pickup Reminders</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-foreground">Leaderboard Updates</span>
                <input type="checkbox" className="w-4 h-4 rounded" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
