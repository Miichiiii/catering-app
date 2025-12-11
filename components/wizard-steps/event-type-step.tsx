"use client"

import { Card } from "@/components/ui/card"

interface EventTypeStepProps {
  selected: "delivery" | "pickup" | null
  onChange: (value: "delivery" | "pickup") => void
}

export default function EventTypeStep({ selected, onChange }: EventTypeStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-foreground">Wie soll dein Event stattfinden?</h2>
      <div className="space-y-4">
        <Card
          onClick={() => onChange("delivery")}
          className={`p-6 cursor-pointer transition-all ${
            selected === "delivery" ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted"
          }`}
        >
          <div className="font-bold text-lg text-foreground">Lieferung</div>
          <p className="text-sm text-muted-foreground">Wir liefern dein Catering</p>
        </Card>
        <Card
          onClick={() => onChange("pickup")}
          className={`p-6 cursor-pointer transition-all ${
            selected === "pickup" ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted"
          }`}
        >
          <div className="font-bold text-lg text-foreground">Abholung</div>
          <p className="text-sm text-muted-foreground">Du holst dein Catering selbst ab</p>
        </Card>
      </div>
    </div>
  )
}
