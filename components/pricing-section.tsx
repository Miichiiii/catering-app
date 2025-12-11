"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PricingSectionProps {
  onSelectPackage: (packageName: "classic" | "gold" | "premium") => void
}

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  const packages = [
    {
      name: "Klassik Menü",
      price: "34,90€ p.P.",
      items: ["2 Vorspeisen", "2 Hauptgänge", "2 Fingerfoods", "1 Beilage", "1 Dip/Sauce", "1 Dessert"],
      id: "classic",
      description: "Perfekt für kleinere Veranstaltungen",
    },
    {
      name: "Shemesh Gold",
      price: "38,90€ p.P.",
      items: ["3 Vorspeisen", "3 Hauptgänge", "3 Fingerfoods", "2 Beilagen", "2 Dips/Saucen", "2 Desserts"],
      id: "gold",
      featured: true,
      description: "Unsere beliebteste Wahl",
    },
    {
      name: "Premium Menü",
      price: "46,90€ p.P.",
      items: ["4 Vorspeisen", "3 Hauptgänge", "3 Fingerfoods", "2 Beilagen", "3 Dips/Saucen", "3 Desserts"],
      id: "premium",
      description: "Das volle kulinarische Erlebnis",
    },
  ]

  return (
    <section id="pricing" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Unsere All Inclusive Menüs</h2>
        <p className="text-center text-muted-foreground mb-12">Wähle dein perfektes Paket aus</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-8 flex flex-col justify-between transition-transform hover:scale-105 ${
                pkg.featured ? "ring-2 ring-accent bg-muted" : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start">
                      <span className="mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mb-4">+ Getränke & Zubehör nach Wahl</p>
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-bold text-primary">Ab {pkg.price}</p>
                <p className="text-xs text-muted-foreground">inkl. Mwst.</p>
                <Button
                  onClick={() => onSelectPackage(pkg.id as "classic" | "gold" | "premium")}
                  className="w-full bg-primary hover:opacity-90 text-primary-foreground"
                >
                  Jetzt anfragen
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-secondary text-center">
          <p className="text-foreground mb-4">
            Keine der vordefinierten Menüs passen zu dir? Kein Problem! Lass dich von unserem Team beraten und wir
            stellen dir ein individuelles Menü zusammen.
          </p>
          <Button
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-secondary bg-transparent"
          >
            Individuelle Beratung
          </Button>
        </Card>
      </div>
    </section>
  )
}
