"use client"

import { Card } from "@/components/ui/card"

interface AllergyStepProps {
  selectedAllergies: string[]
  onToggleAllergy: (allergy: string) => void
}

export default function AllergyStep({ selectedAllergies, onToggleAllergy }: AllergyStepProps) {
  const allergies = [
    "Eier",
    "Erdnüsse",
    "Fisch",
    "Glutenhaltige Getreide",
    "Krebstiere",
    "Lupinen",
    "Milch",
    "Schalenfrüchte",
    "Sellerie",
    "Sesamsamen",
    "Senf",
    "Soja",
    "Schwefeldioxid und Sulphite",
    "Weichtiere",
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-foreground">Allergien und Unverträglichkeiten</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Gibt es unter deinen Gästen Allergien oder Unverträglichkeiten, von denen wir wissen sollten?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {allergies.map((allergy) => (
          <Card
            key={allergy}
            onClick={() => onToggleAllergy(allergy)}
            className={`p-4 cursor-pointer transition-all ${
              selectedAllergies.includes(allergy) ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selectedAllergies.includes(allergy)
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted-foreground"
                }`}
              >
                {selectedAllergies.includes(allergy) && <span className="text-sm">✓</span>}
              </div>
              <span className="text-foreground font-medium">{allergy}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-4 bg-muted mt-6 border-muted">
        <p className="text-sm text-muted-foreground">
          ⚠️ Wichtig: Bitte informieren Sie uns über alle bekannten Allergien und Unverträglichkeiten. Wir nehmen dies
          sehr ernst und passen Ihre Bestellung entsprechend an.
        </p>
      </Card>
    </div>
  )
}
