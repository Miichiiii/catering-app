"use client"

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Share2 } from "lucide-react"
import { useState } from "react"

interface CheckoutStepProps {
  isCompany: boolean
  firstName: string
  lastName: string
  street: string
  houseNumber: string
  zipCode: string
  city: string
  email: string
  phone: string
  agbAccepted: boolean
  privacyAccepted: boolean
  onIsCompanyChange: (value: boolean) => void
  onFirstNameChange: (value: string) => void
  onLastNameChange: (value: string) => void
  onStreetChange: (value: string) => void
  onHouseNumberChange: (value: string) => void
  onZipCodeChange: (value: string) => void
  onCityChange: (value: string) => void
  onEmailChange: (value: string) => void
  onPhoneChange: (value: string) => void
  onAgbAcceptedChange: (value: boolean) => void
  onPrivacyAcceptedChange: (value: boolean) => void
}

export default function CheckoutStep({
  isCompany,
  firstName,
  lastName,
  street,
  houseNumber,
  zipCode,
  city,
  email,
  phone,
  agbAccepted,
  privacyAccepted,
  onIsCompanyChange,
  onFirstNameChange,
  onLastNameChange,
  onStreetChange,
  onHouseNumberChange,
  onZipCodeChange,
  onCityChange,
  onEmailChange,
  onPhoneChange,
  onAgbAcceptedChange,
  onPrivacyAcceptedChange,
}: CheckoutStepProps) {
  const [copied, setCopied] = useState(false)
  
  const shareableLink = typeof window !== "undefined" ? window.location.href : ""

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Anfrage abschließen</h2>

      {/* Rechnungsanschrift */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Rechnungsanschrift</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Bitte geben Sie hier die vollständige Rechnungsanschrift ein.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="company"
              checked={isCompany}
              onCheckedChange={(checked) => onIsCompanyChange(checked as boolean)}
            />
            <label
              htmlFor="company"
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              Als Firma bestellen
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Vorname
              </label>
              <Input
                type="text"
                placeholder="Ihr Vorname"
                value={firstName}
                onChange={(e) => onFirstNameChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nachname
              </label>
              <Input
                type="text"
                placeholder="Ihr Nachname"
                value={lastName}
                onChange={(e) => onLastNameChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Straße
              </label>
              <Input
                type="text"
                placeholder="Straßenname"
                value={street}
                onChange={(e) => onStreetChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Hausnummer
              </label>
              <Input
                type="text"
                placeholder="Nr."
                value={houseNumber}
                onChange={(e) => onHouseNumberChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Postleitzahl
              </label>
              <Input
                type="text"
                placeholder="PLZ"
                value={zipCode}
                onChange={(e) => onZipCodeChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Stadt
              </label>
              <Input
                type="text"
                placeholder="Stadt"
                value={city}
                onChange={(e) => onCityChange(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              E-Mail Adresse
            </label>
            <Input
              type="email"
              placeholder="ihre.email@beispiel.de"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Telefonnummer
            </label>
            <Input
              type="tel"
              placeholder="+49 123 456789"
              value={phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              className="text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
        </div>
      </div>

      {/* Teilen & Freigeben */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Teilen & Freigeben</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Leiten Sie Ihren Warenkorb an Freunde, Kollegen oder als Angebot an Vorgesetzte weiter – zum Ansehen oder Bearbeiten.
        </p>
        
        <Card className="p-4 bg-muted border-muted">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={shareableLink}
              readOnly
              className="flex-1 text-foreground bg-background"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyLink}
              className="shrink-0"
            >
              {copied ? "✓" : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Link zum Weiterleiten – z.B. an Freunde oder Vorgesetzte.
          </p>
        </Card>
      </div>

      {/* Bezahlung */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Bezahlung</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Einfache und sichere Bezahlung.
        </p>
        
        <Card className="p-4 bg-muted border-muted mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl">📄</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Auf Rechnung</p>
                <p className="text-xs text-muted-foreground">Zahlung nach Erhalt der Rechnung</p>
              </div>
            </div>
            <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary"></div>
          </div>
        </Card>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agb"
              checked={agbAccepted}
              onCheckedChange={(checked) => onAgbAcceptedChange(checked as boolean)}
              required
            />
            <label
              htmlFor="agb"
              className="text-sm text-foreground cursor-pointer leading-relaxed"
            >
              Ich habe die{" "}
              <a href="/agb" className="text-primary hover:underline" target="_blank">
                Allgemeinen Geschäftsbedingungen (AGB)
              </a>{" "}
              gelesen und stimme ihnen zu.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => onPrivacyAcceptedChange(checked as boolean)}
              required
            />
            <label
              htmlFor="privacy"
              className="text-sm text-foreground cursor-pointer leading-relaxed"
            >
              Ich habe die{" "}
              <a href="/datenschutz" className="text-primary hover:underline" target="_blank">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten gemäß DSGVO zu.
            </label>
          </div>
        </div>
      </div>

      <Card className="p-4 bg-accent/10 border-accent">
        <p className="text-sm text-foreground">
          ✅ Ihre Anfrage wird nach dem Absenden geprüft. Sie erhalten innerhalb von 24 Stunden eine Bestätigung per E-Mail.
        </p>
      </Card>
    </div>
  )
}
