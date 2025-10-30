"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, CheckCircle, Truck, AlertCircle } from "lucide-react"

interface PickupsProps {
  onSchedulePickup: () => void
}

export default function Pickups({ onSchedulePickup }: PickupsProps) {
  const pickups = [
    {
      id: 1,
      date: "2024-11-15",
      time: "10:00 AM - 12:00 PM",
      location: "Hitech City, Hyderabad",
      status: "scheduled",
      items: ["Laptop", "Mobile Phone", "Chargers"],
      weight: "2.5 kg",
      ecoPoints: 125,
    },
    {
      id: 2,
      date: "2024-11-08",
      time: "2:00 PM - 4:00 PM",
      location: "Banjara Hills, Hyderabad",
      status: "completed",
      items: ["Desktop Computer", "Monitor"],
      weight: "8.2 kg",
      ecoPoints: 410,
    },
    {
      id: 3,
      date: "2024-10-28",
      time: "9:00 AM - 11:00 AM",
      location: "Jubilee Hills, Hyderabad",
      status: "completed",
      items: ["Washing Machine", "Microwave"],
      weight: "15.5 kg",
      ecoPoints: 775,
    },
  ]

  const stats = [
    { label: "Total Pickups", value: pickups.length, icon: Truck },
    { label: "Completed", value: pickups.filter((p) => p.status === "completed").length, icon: CheckCircle },
    { label: "Total Weight", value: "26.2 kg", icon: AlertCircle },
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
        {/* Header */}
        <motion.div variants={itemVariants} className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Your Pickups</h2>
            <p className="text-muted-foreground mt-1">Manage and track your e-waste collection requests</p>
          </div>
          <Button onClick={onSchedulePickup} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            New Pickup
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    </div>
                    <Icon className="w-8 h-8 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        {/* Pickups List */}
        <motion.div variants={containerVariants} className="space-y-4">
          {pickups.map((pickup) => (
            <motion.div key={pickup.id} variants={itemVariants}>
              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{pickup.location}</CardTitle>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                            pickup.status === "completed"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary/20 text-secondary"
                          }`}
                        >
                          {pickup.status === "completed" ? "Completed" : "Scheduled"}
                        </span>
                      </div>
                      <CardDescription className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(pickup.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {pickup.time}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Items:</p>
                      <div className="flex flex-wrap gap-2">
                        {pickup.items.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        Total Weight: <span className="font-semibold text-foreground">{pickup.weight}</span>
                      </span>
                      {pickup.status === "completed" && (
                        <span className="text-sm text-primary flex items-center gap-1 font-medium">
                          <CheckCircle className="w-4 h-4" />+{pickup.ecoPoints} eco points
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
