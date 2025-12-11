"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PricingSection from "@/components/pricing-section"
import ProcessSection from "@/components/process-section"
import Footer from "@/components/footer"
import BookingWizard from "@/components/booking-wizard"

export default function Home() {
  const [showWizard, setShowWizard] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<"classic" | "gold" | "premium" | null>(null)

  const handleSelectPackage = (packageName: "classic" | "gold" | "premium") => {
    setSelectedPackage(packageName)
    setShowWizard(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCloseWizard = () => {
    setShowWizard(false)
    setSelectedPackage(null)
  }

  if (showWizard && selectedPackage) {
    return <BookingWizard packageName={selectedPackage} onClose={handleCloseWizard} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onSelectPackage={handleSelectPackage} />
      <PricingSection onSelectPackage={handleSelectPackage} />
      <ProcessSection />
      <Footer />
    </div>
  )
}
