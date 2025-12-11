"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { foodItems } from "@/lib/food-data"

interface FoodSelectionStepProps {
  category: string
  selectedItems: string[]
  onToggleItem: (itemId: string) => void
  limit: number
}

export default function FoodSelectionStep({ category, selectedItems, onToggleItem, limit }: FoodSelectionStepProps) {
  const categoryKey = category.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_")
  const items = foodItems[categoryKey] || []

  const categoryNameMap: Record<string, string> = {
    vorspeisen: "Vorspeisen",
    hauptgaenge: "Hauptgänge",
    fingerfoods: "Fingerfoods",
    beilagen: "Beilagen",
    dips_saucen: "Dips & Saucen",
    desserts: "Desserts",
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-foreground">{categoryNameMap[categoryKey] || category}</h2>
        <div className="text-sm font-bold text-primary">
          {selectedItems.length} von {limit}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Wähle deine Lieblingsgericht aus</p>

      <div className="space-y-4">
        {items.map((item) => (
          <Card
            key={item.id}
            className={`p-4 cursor-pointer transition-all ${
              selectedItems.includes(item.id) ? "ring-2 ring-primary bg-primary/5" : ""
            }`}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
              <Button
                onClick={() => onToggleItem(item.id)}
                disabled={!selectedItems.includes(item.id) && selectedItems.length >= limit}
                variant={selectedItems.includes(item.id) ? "default" : "outline"}
                className={`whitespace-nowrap ${
                  selectedItems.includes(item.id) ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {selectedItems.includes(item.id) ? "✓ Ausgewählt" : "Auswählen"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
