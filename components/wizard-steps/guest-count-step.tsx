"use client"

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface GuestCountStepProps {
  value: number | null
  onChange: (value: number | null) => void
}

export default function GuestCountStep({ value, onChange }: GuestCountStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-foreground">Wie viele Personen kommen?</h2>
      <p className="text-sm text-muted-foreground mb-6">Wir liefern schon ab 20 Personen</p>
      <Input
        type="number"
        min="20"
        placeholder="Anzahl Gäste"
        value={value || ""}
        onChange={(e) => onChange(e.target.value ? Number.parseInt(e.target.value) : null)}
        className="mb-6 text-foreground placeholder:text-muted-foreground"
      />
      <Card className="p-4 bg-muted">
        <p className="text-sm text-muted-foreground">💡 Gib an, wie viele Personen auf deinem Event sein werden.</p>
      </Card>
    </div>
  )
}
