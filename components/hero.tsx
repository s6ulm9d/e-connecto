"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroProps {
  onNavigateToPickups: () => void
  onNavigateToAwareness: () => void
}

export default function Hero({ onNavigateToPickups, onNavigateToAwareness }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          Empowering a Cleaner Future with{" "}
          <span className="text-primary">Econnecto</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Schedule your e-waste pickups, connect with recyclers, and join our mission to make the planet greener.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {/* Schedule Pickup Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onNavigateToPickups}
          >
            Schedule a Pickup
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          {/* Learn More Button */}
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            onClick={onNavigateToAwareness}
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Background Decoration (optional aesthetic touch) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  )
}
