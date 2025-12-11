"use client"

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface LocationStepProps {
  value: string
  onChange: (value: string) => void
}

export default function LocationStep({ value, onChange }: LocationStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-foreground">In welchem Ort findet dein Event statt?</h2>
      <p className="text-sm text-muted-foreground mb-6">Wir beliefern einen Radius von ca 100km.</p>
      <Input
        type="text"
        placeholder="PLZ oder Ort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mb-6 text-foreground placeholder:text-muted-foreground"
      />
      <Card className="p-4 bg-muted">
        <p className="text-sm text-muted-foreground">
          🎯 Tipp: Gib deine Postleitzahl oder deinen Ort ein, um sicherzustellen, dass wir liefern können.
        </p>
      </Card>
    </div>
  )
}
