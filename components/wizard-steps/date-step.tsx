"use client"

import { Input } from "@/components/ui/input"

interface DateStepProps {
  value: string
  onChange: (value: string) => void
}

export default function DateStep({ value, onChange }: DateStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-foreground">Wann findet deine Veranstaltung statt?</h2>
      <p className="text-sm text-muted-foreground mb-6">Wähle einen Termin</p>
      <Input type="date" value={value} onChange={(e) => onChange(e.target.value)} className="mb-6 text-foreground" />
    </div>
  )
}
