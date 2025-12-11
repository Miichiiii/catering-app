"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

interface DeliveryInfoStepProps {
  eventType: "delivery" | "pickup" | null
  location: string
  streetName: string
  streetNumber: string
  additionalInfo: string
  eventStart: string
  deliveryTime: string
  remarks: string
  onStreetNameChange: (value: string) => void
  onStreetNumberChange: (value: string) => void
  onAdditionalInfoChange: (value: string) => void
  onEventStartChange: (value: string) => void
  onDeliveryTimeChange: (value: string) => void
  onRemarksChange: (value: string) => void
}

export default function DeliveryInfoStep({
  eventType,
  location,
  streetName,
  streetNumber,
  additionalInfo,
  eventStart,
  deliveryTime,
  remarks,
  onStreetNameChange,
  onStreetNumberChange,
  onAdditionalInfoChange,
  onEventStartChange,
  onDeliveryTimeChange,
  onRemarksChange,
}: DeliveryInfoStepProps) {
  return (
    <div className="space-y-8">
      {/* Veranstaltungsort */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Veranstaltungsort</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Bitte lassen Sie uns die folgenden Informationen zukommen, damit die Anlieferung reibungslos und ohne
          Verzögerung erfolgt.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Name der Eventlocation (optional)
            </label>
            <Input
              type="text"
              placeholder="z.B. Restaurant am See"
              value={additionalInfo}
              onChange={(e) => onAdditionalInfoChange(e.target.value)}
              className="text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Straße</label>
              <Input
                type="text"
                placeholder="Geben Sie einen Standort ein."
                value={streetName}
                onChange={(e) => onStreetNameChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Hausnummer</label>
              <Input
                type="text"
                placeholder="z.B. 277"
                value={streetNumber}
                onChange={(e) => onStreetNumberChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Postleitzahl: {location}</label>
          </div>
        </div>
      </div>

      {/* Zeitpunkt */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Zeitpunkt</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Bitte geben Sie die relevanten Informationen zur Zeit ein, damit wir pünktlich ankommen können.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Veranstaltungsbeginn</label>
            <Input
              type="time"
              value={eventStart}
              onChange={(e) => onEventStartChange(e.target.value)}
              className="text-foreground"
            />
          </div>
          {eventType === "delivery" && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Uhrzeit Anlieferung</label>
              <Input
                type="time"
                value={deliveryTime}
                onChange={(e) => onDeliveryTimeChange(e.target.value)}
                className="text-foreground"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bemerkungen und Wünsche */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Zusätzliche Informationen & Wünsche</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Gibt es noch besondere Details, die wir unbedingt beachten sollten?
        </p>
        <Textarea
          placeholder="Bemerkungen / Wünsche"
          value={remarks}
          onChange={(e) => onRemarksChange(e.target.value)}
          maxLength={275}
          className="text-foreground placeholder:text-muted-foreground resize-none h-24"
        />
        <p className="text-xs text-muted-foreground mt-2">{275 - remarks.length} Zeichen verbleibend</p>
      </div>

      <Card className="p-4 bg-muted border-muted">
        <p className="text-sm text-muted-foreground">
          ℹ️ Hinweis: Diese Informationen helfen uns, Ihre Bestellung reibungslos zu liefern. Wir melden uns bei
          Rückfragen.
        </p>
      </Card>
    </div>
  )
}
