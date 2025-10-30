"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

interface CollectionPoint {
  id: string
  name: string
  x: number
  y: number
  count: number
}

export default function TelanganaMap() {
  const collectionPoints: CollectionPoint[] = [
    { id: "1", name: "Hyderabad Central", x: 45, y: 50, count: 450 },
    { id: "2", name: "Secunderabad", x: 52, y: 48, count: 320 },
    { id: "3", name: "Kukatpally", x: 40, y: 45, count: 280 },
    { id: "4", name: "Gachibowli", x: 48, y: 55, count: 210 },
    { id: "5", name: "Miyapur", x: 35, y: 42, count: 190 },
    { id: "6", name: "Warangal", x: 25, y: 35, count: 280 },
    { id: "7", name: "Vijayawada", x: 60, y: 65, count: 320 },
  ]

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl overflow-hidden border border-border">
      {/* SVG Map Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Telangana State Outline (simplified) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 20 30 L 70 25 L 75 50 L 70 75 L 30 80 L 15 60 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary/30"
        />
      </svg>

      {/* Collection Points */}
      <div className="absolute inset-0">
        {collectionPoints.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
            />

            {/* Main point */}
            <div className="relative w-6 h-6 bg-primary rounded-full border-2 border-primary-foreground shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            </div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute left-8 top-0 bg-card border border-border rounded-lg p-3 whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:pointer-events-auto z-10"
            >
              <p className="font-semibold text-sm text-foreground">{point.name}</p>
              <p className="text-xs text-muted-foreground">{point.count} tons collected</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur border border-border rounded-lg p-3 text-xs">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span className="text-muted-foreground">Collection Points</span>
        </div>
        <p className="text-muted-foreground text-xs">Hover to see details</p>
      </div>

      {/* Info Box */}
      <div className="absolute top-4 right-4 bg-card/80 backdrop-blur border border-border rounded-lg p-4 max-w-xs">
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm text-foreground">Active Collection Points</p>
            <p className="text-xs text-muted-foreground mt-1">{collectionPoints.length} locations across Telangana</p>
          </div>
        </div>
      </div>
    </div>
  )
}
