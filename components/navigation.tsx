"use client"

import { useState } from "react"
import { Menu, X, Leaf, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onLoginClick: () => void
  isLoggedIn: boolean
}

export default function Navigation({ activeTab, onTabChange, onLoginClick, isLoggedIn }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "pickups", label: "Pickups" },
    { id: "recyclers", label: "Recyclers" },
    { id: "awareness", label: "Awareness" },
    { id: "profile", label: "Profile" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onTabChange("dashboard")}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">ECONNECTO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {isLoggedIn && (
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">U</span>
                </div>
              </div>
            )}

            {!isLoggedIn && (
              <Button onClick={onLoginClick} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
            {isLoggedIn && (
              <button className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted flex items-center gap-2 font-medium">
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
