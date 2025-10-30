"use client"

import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, AlertCircle, CheckCircle, Award, Zap } from "lucide-react"

interface DashboardProps {
  onSchedulePickup: () => void
}

export default function Dashboard({ onSchedulePickup }: DashboardProps) {
  const wasteData = [
    { month: "Jan", collected: 180, recycled: 140 },
    { month: "Feb", collected: 220, recycled: 170 },
    { month: "Mar", collected: 280, recycled: 220 },
    { month: "Apr", collected: 320, recycled: 260 },
    { month: "May", collected: 380, recycled: 310 },
    { month: "Jun", collected: 420, recycled: 350 },
  ]

  const wasteTypeData = [
    { name: "Phones", value: 35 },
    { name: "Laptops", value: 25 },
    { name: "Appliances", value: 20 },
    { name: "Accessories", value: 20 },
  ]

  const monthlyImpactData = [
    { month: "Jan", co2Saved: 45, trees: 2 },
    { month: "Feb", co2Saved: 55, trees: 3 },
    { month: "Mar", co2Saved: 70, trees: 4 },
    { month: "Apr", co2Saved: 80, trees: 4 },
    { month: "May", co2Saved: 95, trees: 5 },
    { month: "Jun", co2Saved: 105, trees: 5 },
  ]

  const colors = ["#10b981", "#059669", "#047857", "#065f46"]

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
        {/* Quick Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Your Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">245 kg</p>
              <p className="text-xs text-muted-foreground mt-1">+12 kg this month</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-secondary/50 transition-all hover:shadow-lg hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                Eco Points Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">1,225</p>
              <p className="text-xs text-muted-foreground mt-1">+150 this month</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/50 transition-all hover:shadow-lg hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-accent" />
                Pending Pickups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">2</p>
              <p className="text-xs text-muted-foreground mt-1">Next pickup in 3 days</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">#42</p>
              <p className="text-xs text-muted-foreground mt-1">Top 5% contributor</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Charts Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Collection Trends</CardTitle>
              <CardDescription>Monthly e-waste collection and recycling progress</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={wasteData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRecycled" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="collected"
                    stroke="var(--color-primary)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-primary)", r: 5 }}
                    activeDot={{ r: 7 }}
                    isAnimationActive={true}
                  />
                  <Line
                    type="monotone"
                    dataKey="recycled"
                    stroke="var(--color-secondary)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-secondary)", r: 5 }}
                    activeDot={{ r: 7 }}
                    isAnimationActive={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Waste Type Distribution</CardTitle>
              <CardDescription>Breakdown of collected e-waste by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wasteTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                  >
                    {colors.map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Environmental Impact Chart */}
        <motion.div variants={itemVariants}>
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>CO₂ saved and equivalent trees planted through recycling</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyImpactData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="co2Saved"
                    fill="var(--color-primary)"
                    name="CO₂ Saved (kg)"
                    radius={[8, 8, 0, 0]}
                    animationDuration={1000}
                  />
                  <Bar
                    dataKey="trees"
                    fill="var(--color-secondary)"
                    name="Trees Equivalent"
                    radius={[8, 8, 0, 0]}
                    animationDuration={1000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Card */}
        <motion.div variants={itemVariants}>
          <Card className="border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Schedule a Pickup
              </CardTitle>
              <CardDescription>
                Have e-waste at home? Schedule a free pickup from our authorized collectors and earn eco-points.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={onSchedulePickup} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Pickup Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
