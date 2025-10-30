"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Lightbulb, BookOpen, Video, Download, ExternalLink } from "lucide-react"

export default function Awareness() {
  const resources = [
    {
      id: 1,
      type: "article",
      icon: BookOpen,
      title: "E-Waste: A Growing Environmental Crisis",
      description: "Learn about the impact of electronic waste on our environment and health.",
      category: "Education",
      color: "bg-primary/10 text-primary",
    },
    {
      id: 2,
      type: "video",
      icon: Video,
      title: "How to Properly Dispose of E-Waste",
      description: "Step-by-step guide on responsible e-waste disposal methods.",
      category: "Tutorial",
      color: "bg-secondary/10 text-secondary",
    },
    {
      id: 3,
      type: "warning",
      icon: AlertTriangle,
      title: "Hazardous Materials in Electronics",
      description: "Understand the toxic chemicals found in electronic devices.",
      category: "Health & Safety",
      color: "bg-accent/10 text-accent",
    },
    {
      id: 4,
      type: "tip",
      icon: Lightbulb,
      title: "Circular Economy Benefits",
      description: "Discover how recycling creates economic opportunities.",
      category: "Sustainability",
      color: "bg-primary/10 text-primary",
    },
  ]

  const facts = [
    {
      stat: "57 Million Tons",
      description: "Global e-waste generated annually",
    },
    {
      stat: "20%",
      description: "E-waste formally recycled in India",
    },
    {
      stat: "40,000 Tons",
      description: "Annual e-waste in Greater Hyderabad",
    },
    {
      stat: "78%",
      description: "Awareness about e-waste in India",
    },
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
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Awareness & Education</h2>
          <p className="text-muted-foreground">Learn about e-waste management and sustainable practices</p>
        </motion.div>

        {/* Key Facts */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-primary mb-2">{fact.stat}</p>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Resources */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Resources & Articles</h3>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <motion.div key={resource.id} variants={itemVariants}>
                  <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-3 rounded-lg ${resource.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                          {resource.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription>{resource.description}</CardDescription>
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

        {/* Policy Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Official Policies & Documents</h3>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Telangana E-Waste Management Policy 2017", link: "#" },
              { title: "E-Waste Annual Report 2018-19", link: "#" },
              { title: "HYSEA E-Waste Campaign Guidelines", link: "#" },
              { title: "SPCB E-Waste Regulations", link: "#" },
            ].map((doc, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {doc.title}
                    </p>
                    <a
                      href={doc.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants}>
          <Card className="border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Join the Movement
              </CardTitle>
              <CardDescription>
                Become an e-waste ambassador and help spread awareness in your community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Become an Ambassador</Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
