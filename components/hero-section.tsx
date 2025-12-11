"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeroSectionProps {
  onSelectPackage: (packageName: "classic" | "gold" | "premium") => void
}

export default function HeroSection({ onSelectPackage }: HeroSectionProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section id="hero" className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Kulinarische Vielfalt für Ihre perfekte Veranstaltung
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Lassen Sie sich von unserer reichhaltigen Auswahl an Spezialitäten aus verschiedenen Kulturen begeistern.
            Shemesh bringt Geschmack, Tradition und Handwerk zu Ihrem Event nach Düsseldorf.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={() => onSelectPackage("gold")}
              className="px-8 py-6 text-lg bg-primary hover:opacity-90 text-primary-foreground"
            >
              Jetzt Catering anfragen
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Menü ansehen
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "variety",
              title: "Authentische Vielfalt",
              description: "Traditionelle Gerichte aus Israel, Russland, Georgien und der Levante",
              icon: "🍽️",
            },
            {
              id: "quality",
              title: "Premium Qualität",
              description: "Frische Zutaten, handwerkliche Zubereitung, höchste Qualitätsstandards",
              icon: "⭐",
            },
            {
              id: "service",
              title: "Professioneller Service",
              description: "Pünktliche Lieferung, flexible Menüs, individuelle Beratung",
              icon: "👨‍🍳",
            },
          ].map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`p-8 rounded-lg border border-border transition-all duration-300 cursor-pointer ${
                hoveredFeature === feature.id ? "bg-primary/5 border-primary shadow-lg" : "bg-background"
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Vertraut von über 500+ Events in Düsseldorf</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Kostenlose Beratung
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Flexible Menüs
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Lieferung & Aufbau
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Allergie-freundlich
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
