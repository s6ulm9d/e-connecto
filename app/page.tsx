"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import LayoutWrapper from "@/components/layout-wrapper"
import Hero from "@/components/hero"
import Dashboard from "@/components/dashboard"
import Pickups from "@/components/pickups"
import Recyclers from "@/components/recyclers"
import Leaderboard from "@/components/leaderboard"
import Awareness from "@/components/awareness"
import Profile from "@/components/profile"
import Footer from "@/components/footer"
import LoginModal from "@/components/modals/login-modal"
import PickupModal from "@/components/modals/pickup-modal"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showPickupModal, setShowPickupModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onSchedulePickup={() => setShowPickupModal(true)} />
      case "pickups":
        return <Pickups onSchedulePickup={() => setShowPickupModal(true)} />
      case "recyclers":
        return <Recyclers />
      case "leaderboard":
        return <Leaderboard />
      case "awareness":
        return <Awareness />
      case "profile":
        return <Profile onLogout={() => setIsLoggedIn(false)} />
      default:
        return <Dashboard onSchedulePickup={() => setShowPickupModal(true)} />
    }
  }

  const getPageTitle = () => {
    const tabLabels: Record<string, string> = {
      dashboard: "Dashboard",
      pickups: "My Pickups",
      recyclers: "Find Recyclers",
      leaderboard: "Leaderboard",
      awareness: "E-Waste Awareness",
      profile: "My Profile",
    }
    return tabLabels[activeTab] || "Dashboard"
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLoginClick={() => setShowLoginModal(true)}
        isLoggedIn={isLoggedIn}
      />

      {activeTab === "dashboard" && <Hero />}

      <LayoutWrapper title={activeTab !== "dashboard" ? getPageTitle() : undefined}>{renderContent()}</LayoutWrapper>

      <Footer />

      <LoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
        onLoginSuccess={() => {
          setIsLoggedIn(true)
          setShowLoginModal(false)
        }}
      />

      <PickupModal open={showPickupModal} onOpenChange={setShowPickupModal} />
    </div>
  )
}
