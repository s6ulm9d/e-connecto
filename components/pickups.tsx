"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Lightbulb, BookOpen, Video, ExternalLink } from "lucide-react"

export default function Awareness() {
  const resources = [
    {
      id: 1,
      icon: BookOpen,
      title: "E-Waste: A Growing Environmental Crisis",
      description: "Learn about the environmental and health effects of electronic waste.",
      category: "Education",
      color: "bg-primary/10 text-primary",
    },
    {
      id: 2,
      icon: Video,
      title: "Proper E-Waste Disposal Methods",
      description: "A step-by-step video guide to responsibly recycle your old electronics.",
      category: "Tutorial",
      color: "bg-secondary/10 text-secondary",
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: "Toxic Components in Electronics",
      description: "Understand the hazardous materials present in common gadgets.",
      category: "Health & Safety",
      color: "bg-accent/10 text-accent",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Building a Circular Economy",
      description: "See how e-waste recycling contributes to sustainable growth.",
      category: "Sustainability",
      color: "bg-primary/10 text-primary",
    },
  ]

  const facts = [
    { stat: "57M Tons", description: "Global e-waste generated annually" },
    { stat: "20%", description: "E-waste formally recycled in India" },
    { stat: "40K Tons", description: "E-waste generated in Greater Hyderabad yearly" },
    { stat: "78%", description: "Citizens aware of e-waste hazards" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Awareness & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about e-waste management, recycling benefits, and sustainability practices.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facts.map((fact, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="text-center border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 pb-6">
                  <p className="text-3xl font-bold text-primary mb-2">{fact.stat}</p>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Educational Resources */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Resources & Articles</h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {resources.map((res) => {
              const Icon = res.icon
              return (
                <motion.div key={res.id} variants={itemVariants}>
                  <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-3 rounded-lg ${res.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                          {res.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-foreground">{res.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription>{res.description}</CardDescription>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Policy & Documents */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Policies & Official Documents
          </h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              { title: "Telangana E-Waste Management Policy 2017", link: "#" },
              { title: "E-Waste Annual Report 2018-19", link: "#" },
              { title: "HYSEA E-Waste Campaign Guidelines", link: "#" },
              { title: "SPCB E-Waste Regulations 2022", link: "#" },
            ].map((doc, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border-border hover:border-primary/50 transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-foreground flex items-center justify-between">
                      {doc.title}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={doc.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
