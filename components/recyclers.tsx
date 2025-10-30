"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, Star, Award, Search } from "lucide-react"

export default function Recyclers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null)

  const recyclers = [
    {
      id: 1,
      name: "GreenTech Recyclers",
      location: "Hitech City, Hyderabad",
      phone: "+91-9876543210",
      website: "www.greentech.in",
      rating: 4.8,
      reviews: 245,
      certifications: ["ISO 14001", "E-Waste Certified"],
      specialization: ["Electronics", "Appliances"],
      distance: "2.5 km",
    },
    {
      id: 2,
      name: "EcoRecycle Solutions",
      location: "Banjara Hills, Hyderabad",
      phone: "+91-9876543211",
      website: "www.ecorecycle.in",
      rating: 4.6,
      reviews: 189,
      certifications: ["ISO 14001", "SPCB Approved"],
      specialization: ["Computers", "Phones"],
      distance: "3.2 km",
    },
    {
      id: 3,
      name: "Circular Economy Hub",
      location: "Jubilee Hills, Hyderabad",
      phone: "+91-9876543212",
      website: "www.circulareconomy.in",
      rating: 4.9,
      reviews: 312,
      certifications: ["ISO 14001", "E-Waste Certified", "SPCB Approved"],
      specialization: ["All Electronics", "Batteries"],
      distance: "1.8 km",
    },
  ]

  const allSpecializations = Array.from(new Set(recyclers.flatMap((r) => r.specialization)))

  const filteredRecyclers = recyclers.filter((recycler) => {
    const matchesSearch =
      recycler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recycler.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialization = !selectedSpecialization || recycler.specialization.includes(selectedSpecialization)
    return matchesSearch && matchesSpecialization
  })

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
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Authorized Recyclers</h2>
          <p className="text-muted-foreground">Find certified e-waste recycling centers in Telangana</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSpecialization(null)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedSpecialization === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {allSpecializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedSpecialization === spec
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div variants={itemVariants}>
          <p className="text-sm text-muted-foreground">
            Showing {filteredRecyclers.length} of {recyclers.length} recyclers
          </p>
        </motion.div>

        {/* Recyclers Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecyclers.map((recycler) => (
            <motion.div key={recycler.id} variants={itemVariants}>
              <Card className="border-border hover:border-primary/50 transition-all h-full flex flex-col hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{recycler.name}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground mt-1">
                        {recycler.reviews} reviews
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg whitespace-nowrap">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-semibold text-primary">{recycler.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm text-foreground">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{recycler.location}</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground ml-6">
                      {recycler.distance} away
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      {recycler.phone}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground">
                      <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                      {recycler.website}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Specialization:</p>
                    <div className="flex flex-wrap gap-1">
                      {recycler.specialization.map((spec, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Certifications:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {recycler.certifications.map((cert, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                    Contact
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredRecyclers.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <p className="text-muted-foreground">No recyclers found matching your criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
