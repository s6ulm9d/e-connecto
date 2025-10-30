"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, MapPin, Package, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PickupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function PickupModal({ open, onOpenChange }: PickupModalProps) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    items: "",
    description: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.time) newErrors.time = "Time slot is required"
    if (!formData.location) newErrors.location = "Location is required"
    if (!formData.items) newErrors.items = "Please list items to recycle"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setTimeout(() => {
        onOpenChange(false)
        setFormData({ date: "", time: "", location: "", items: "", description: "" })
        setSubmitted(false)
      }, 2000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors({ ...errors, [name]: "" })
  }

  const handleClose = () => {
    onOpenChange(false)
    setFormData({ date: "", time: "", location: "", items: "", description: "" })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <Card className="border-border">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Schedule Pickup</h2>
                    <p className="text-sm text-muted-foreground mt-1">Book a free e-waste collection</p>
                  </div>
                  <button onClick={handleClose} className="p-1 hover:bg-muted rounded-lg transition">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Success State */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pickup Scheduled!</h3>
                    <p className="text-sm text-muted-foreground">
                      Your pickup has been confirmed. You'll receive a confirmation email shortly.
                    </p>
                  </motion.div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 transition-all ${
                          errors.date ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary"
                        }`}
                      />
                      {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 transition-all ${
                          errors.time ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary"
                        }`}
                      >
                        <option value="">Select time slot</option>
                        <option value="9-11">9:00 AM - 11:00 AM</option>
                        <option value="11-1">11:00 AM - 1:00 PM</option>
                        <option value="2-4">2:00 PM - 4:00 PM</option>
                        <option value="4-6">4:00 PM - 6:00 PM</option>
                      </select>
                      {errors.time && <p className="text-xs text-destructive mt-1">{errors.time}</p>}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        className={`w-full px-4 py-2 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                          errors.location
                            ? "border-destructive focus:ring-destructive"
                            : "border-border focus:ring-primary"
                        }`}
                      />
                      {errors.location && <p className="text-xs text-destructive mt-1">{errors.location}</p>}
                    </div>

                    {/* Items */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Items to Recycle
                      </label>
                      <textarea
                        name="items"
                        value={formData.items}
                        onChange={handleChange}
                        placeholder="e.g., Old laptop, mobile phones, chargers..."
                        rows={3}
                        className={`w-full px-4 py-2 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.items
                            ? "border-destructive focus:ring-destructive"
                            : "border-border focus:ring-primary"
                        }`}
                      />
                      {errors.items && <p className="text-xs text-destructive mt-1">{errors.items}</p>}
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Any special instructions..."
                        rows={2}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        onClick={handleClose}
                        variant="outline"
                        className="flex-1 border-border hover:bg-muted bg-transparent"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        Schedule Pickup
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
