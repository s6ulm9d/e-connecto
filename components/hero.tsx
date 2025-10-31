"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Recycle, TrendingUp, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/animated-counter"
import TelanganaMap from "@/components/telangana-map"

// Components
import Awareness from "@/components/awareness"
import Pickups from "@/components/pickups"

export default function Hero() {
  const [activeSection, setActiveSection] = useState<"none" | "pickups" | "awareness">("none")

  const stats = [
    { icon: Recycle, label: "E-Waste Collected", value: 2450, suffix: " Tons", color: "bg-primary" },
    { icon: Users, label: "Active Users", value: 12340, suffix: "", color: "bg-secondary" },
    { icon: TrendingUp, label: "Recycling Rate", value: 78, suffix: "%", color: "bg-accent" },
    { icon: Leaf, label: "CO₂ Saved", value: 1250, suffix: " Tons", color: "bg-primary" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Sustainable E-Waste Management for <span className="text-primary">Telangana</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the circular economy revolution. Responsibly recycle your electronic waste and earn eco-points while
            protecting our environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Opens Pickups section */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setActiveSection("pickups")}
            >
              Schedule a Pickup
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Opens Awareness section */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={() => setActiveSection("awareness")}
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <TelanganaMap />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
              >
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Dynamically render Awareness or Pickups */}
        <div className="mt-20">
          {activeSection === "pickups" && <Pickups onSchedulePickup={() => alert("Pickup scheduled!")} />}
          {activeSection === "awareness" && <Awareness />}
        </div>
      </div>
    </section>
  )
}
