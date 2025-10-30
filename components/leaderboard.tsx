"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Flame } from "lucide-react"

export default function Leaderboard() {
  const [timeframe, setTimeframe] = useState<"week" | "month" | "all">("month")

  const leaderboardData = {
    week: [
      { rank: 1, name: "Eco Warrior", points: 2450, weight: "125 kg", streak: 7, avatar: "EW" },
      { rank: 2, name: "Green Guardian", points: 2180, weight: "110 kg", streak: 5, avatar: "GG" },
      { rank: 3, name: "Sustainability Hero", points: 1950, weight: "98 kg", streak: 4, avatar: "SH" },
      { rank: 4, name: "Planet Protector", points: 1720, weight: "86 kg", streak: 3, avatar: "PP" },
      { rank: 5, name: "Recycle Master", points: 1580, weight: "79 kg", streak: 2, avatar: "RM" },
    ],
    month: [
      { rank: 1, name: "Eco Warrior", points: 8450, weight: "425 kg", streak: 30, avatar: "EW" },
      { rank: 2, name: "Green Guardian", points: 7680, weight: "384 kg", streak: 28, avatar: "GG" },
      { rank: 3, name: "Sustainability Hero", points: 6950, weight: "348 kg", streak: 25, avatar: "SH" },
      { rank: 4, name: "Planet Protector", points: 6220, weight: "311 kg", streak: 20, avatar: "PP" },
      { rank: 5, name: "Recycle Master", points: 5580, weight: "279 kg", streak: 18, avatar: "RM" },
    ],
    all: [
      { rank: 1, name: "Eco Warrior", points: 24500, weight: "1225 kg", streak: 45, avatar: "EW" },
      { rank: 2, name: "Green Guardian", points: 21800, weight: "1090 kg", streak: 42, avatar: "GG" },
      { rank: 3, name: "Sustainability Hero", points: 19500, weight: "975 kg", streak: 38, avatar: "SH" },
      { rank: 4, name: "Planet Protector", points: 17200, weight: "860 kg", streak: 35, avatar: "PP" },
      { rank: 5, name: "Recycle Master", points: 15800, weight: "790 kg", streak: 32, avatar: "RM" },
    ],
  }

  const currentLeaderboard = leaderboardData[timeframe]

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

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />
    if (rank === 3) return <Medal className="w-5 h-5 text-orange-600" />
    return null
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h2>
          <p className="text-muted-foreground">Top contributors to e-waste recycling in Telangana</p>
        </motion.div>

        {/* Timeframe Selector */}
        <motion.div variants={itemVariants} className="flex gap-3">
          {(["week", "month", "all"] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-2 rounded-lg transition-all font-medium capitalize ${
                timeframe === tf ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {tf === "all" ? "All Time" : `This ${tf}`}
            </button>
          ))}
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div variants={itemVariants}>
          <Card className="border-border overflow-hidden">
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
              <CardDescription>Ranked by eco-points earned</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <motion.div variants={containerVariants} className="divide-y divide-border">
                {currentLeaderboard.map((entry, index) => (
                  <motion.div
                    key={entry.rank}
                    variants={itemVariants}
                    className="px-6 py-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Rank */}
                        <div className="flex items-center justify-center w-10 h-10">
                          {getRankIcon(entry.rank) || (
                            <span className="text-lg font-bold text-muted-foreground">#{entry.rank}</span>
                          )}
                        </div>

                        {/* Avatar and Name */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {entry.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{entry.name}</p>
                            <p className="text-xs text-muted-foreground">{entry.weight} collected</p>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">{entry.points.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">eco points</p>
                        </div>

                        {/* Streak */}
                        <div className="flex items-center gap-1 bg-orange-500/10 px-3 py-1 rounded-lg">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-semibold text-orange-600">{entry.streak}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Achievements</h3>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🌱", title: "Seedling", description: "Collect 10 kg of e-waste" },
              { icon: "🌿", title: "Sprout", description: "Collect 50 kg of e-waste" },
              { icon: "🌳", title: "Tree", description: "Collect 100 kg of e-waste" },
              { icon: "🌲", title: "Forest", description: "Collect 500 kg of e-waste" },
            ].map((achievement, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border-border hover:border-primary/50 transition-all text-center">
                  <CardContent className="pt-6">
                    <p className="text-4xl mb-2">{achievement.icon}</p>
                    <p className="font-semibold text-foreground mb-1">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
