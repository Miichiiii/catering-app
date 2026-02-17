"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EventTypeStep from "./wizard-steps/event-type-step";
import LocationStep from "./wizard-steps/location-step";
import GuestCountStep from "./wizard-steps/guest-count-step";
import DateStep from "./wizard-steps/date-step";
import DeliveryInfoStep from "./wizard-steps/delivery-info-step";
import AllergyStep from "./wizard-steps/allergy-step";
import FoodSelectionStep from "./wizard-steps/food-selection-step";
import DrinksStep from "./wizard-steps/drinks-step";
import AccessoriesStep from "./wizard-steps/accessories-step";
import CheckoutStep from "./wizard-steps/checkout-step";
import CartSidebar from "./cart-sidebar";
import { getPackageItems, foodItems } from "@/lib/food-data";

interface BookingWizardProps {
  packageName: "classic" | "gold" | "premium";
  onClose: () => void;
}

export default function BookingWizard({
  packageName,
  onClose,
}: BookingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [eventType, setEventType] = useState<"delivery" | "pickup" | null>(
    null,
  );
  const [location, setLocation] = useState("");
  const [guestCount, setGuestCount] = useState<number | null>(null);
  const [eventDate, setEventDate] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [locationName, setLocationName] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [remarks, setRemarks] = useState("");
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({
    salate: [],
    kalte_vorspeisen: [],
    warme_vorspeisen: [],
    hauptgaenge: [],
    beilagen: [],
    dips_saucen: [],
    desserts: [],
    suppen: [],
  });
  const [selectedDrinks, setSelectedDrinks] = useState<Record<string, number>>(
    {},
  );
  const [selectedAccessories, setSelectedAccessories] = useState<
    Record<string, number>
  >({});

  // Checkout States
  const [isCompany, setIsCompany] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingStreet, setBillingStreet] = useState("");
  const [billingHouseNumber, setBillingHouseNumber] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agbAccepted, setAgbAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const packageLimits = getPackageItems(packageName);

  // Alle möglichen Schritte definieren
  const allSteps = [
    "Event-Art",
    "Postleitzahl",
    "Gästeanzahl",
    "Wunschtermin",
    "Salate",
    "Kalte Vorspeisen",
    "Warme Vorspeisen",
    "Hauptgänge",
    "Beilagen",
    "Suppen",
    "Desserts",
    "Getränke",
    "Zubehör",
    "Lieferinformationen",
    "Allergien",
    "Checkout",
  ];

  // Nur Schritte anzeigen, die nicht "0 von 0" haben
  const steps = allSteps.filter((step) => {
    const categoryKey = step
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ & /g, "_")
      .replace(/ /g, "_");

    // Immer diese Schritte anzeigen
    const alwaysShow = [
      "event-art",
      "postleitzahl",
      "gaesteanzahl",
      "wunschtermin",
      "getraenke",
      "zubehoer",
      "lieferinformationen",
      "allergien",
      "checkout",
    ];
    if (alwaysShow.includes(categoryKey)) {
      return true;
    }

    // Food-Selection Schritte nur anzeigen, wenn limit > 0
    const limit = packageLimits[categoryKey as keyof typeof packageLimits];
    return limit !== undefined && limit > 0;
  });

  const basePrices = {
    classic: 50,
    gold: 60,
    premium: 80,
  };

  // Berechne Getränke-Kosten
  const drinksTotal = Object.entries(selectedDrinks).reduce(
    (sum, [drinkId, quantity]) => {
      // Finde den Preis des Getränks
      const drink = [
        { id: "mineralwasser-still", price: 42.9 },
        { id: "mineralwasser-sprudel", price: 42.9 },
        { id: "coca-cola", price: 45.9 },
        { id: "coca-cola-zero", price: 45.9 },
        { id: "fanta-orange", price: 45.9 },
        { id: "sprite", price: 45.9 },
        { id: "apfelschorle", price: 48.0 },
        { id: "orangensaft", price: 48.0 },
        { id: "fassbrause-zitrone", price: 49.9 },
      ].find((d) => d.id === drinkId);

      return sum + (drink ? drink.price * quantity : 0);
    },
    0,
  );

  // Berechne Zubehör-Kosten
  const accessoriesTotal = Object.entries(selectedAccessories).reduce(
    (sum, [accessoryId, quantity]) => {
      // Finde den Preis des Zubehörs
      const accessory = [
        { id: "speiseteller-besteck-30", price: 84.9 },
        { id: "suppenschuessel-loeffel-30", price: 65.9 },
        { id: "dessertteller-besteck-30", price: 65.9 },
        { id: "aufbau-abholung", price: 95.2 },
        { id: "buffet-deko-podeste", price: 239.9 },
        { id: "tischdecke", price: 20.0 },
        { id: "buffet-deko-detail", price: 189.9 },
        { id: "buffet-praesentation-ebenen", price: 289.9 },
      ].find((a) => a.id === accessoryId);

      return sum + (accessory ? accessory.price * quantity : 0);
    },
    0,
  );

  const servicefee = guestCount && guestCount <= 20 ? 40.0 : 0;
  const subTotal =
    (guestCount || 0) * basePrices[packageName] +
    drinksTotal +
    accessoriesTotal;
  const vat = subTotal * 0.07;
  const total = subTotal + vat + servicefee;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Validierung für den aktuellen Schritt
  const isCurrentStepValid = () => {
    const stepName = steps[currentStep];

    switch (stepName) {
      case "Event-Art":
        return eventType !== null;
      case "Postleitzahl":
        return location.trim().length > 0;
      case "Gästeanzahl":
        return guestCount !== null && guestCount >= 20;
      case "Wunschtermin":
        return eventDate.trim().length > 0;
      case "Lieferinformationen":
        const deliveryTimeValid =
          eventType === "delivery" ? deliveryTime.trim().length > 0 : true;
        return (
          streetName.trim().length > 0 &&
          streetNumber.trim().length > 0 &&
          eventStart.trim().length > 0 &&
          deliveryTimeValid
        );
      case "Checkout":
        return (
          firstName.trim().length > 0 &&
          lastName.trim().length > 0 &&
          billingStreet.trim().length > 0 &&
          billingHouseNumber.trim().length > 0 &&
          billingZipCode.trim().length > 0 &&
          billingCity.trim().length > 0 &&
          email.trim().length > 0 &&
          phone.trim().length > 0 &&
          agbAccepted &&
          privacyAccepted
        );
      default:
        // Für Food-Selection Steps und optionale Steps
        return true;
    }
  };

  const handleSubmit = () => {
    if (!agbAccepted || !privacyAccepted) {
      alert("Bitte akzeptieren Sie die AGB und Datenschutzerklärung.");
      return;
    }

    // Formatiere ausgewählte Gerichte mit Namen
    const formatItems = () => {
      const categories = {
        salate: "Salate",
        vorspeisen: "Kalte Vorspeisen",
        fingerfoods: "Warme Vorspeisen",
        hauptgaenge: "Hauptgänge",
        suppen: "Suppen",
        beilagen: "Beilagen",
        desserts: "Desserts",
      };

      let result = "";
      Object.entries(selectedItems).forEach(([key, itemIds]) => {
        if (itemIds.length > 0) {
          result += `\n\n${categories[key as keyof typeof categories]}:\n`;
          // Hole die tatsächlichen Gerichte aus foodItems
          const categoryItems = foodItems[key as keyof typeof foodItems] || [];
          itemIds.forEach((itemId: string) => {
            const item = categoryItems.find((i) => i.id === itemId);
            if (item) {
              result += `  - ${item.name}`;
              if (item.description) {
                result += ` (${item.description})`;
              }
              result += `\n`;
            }
          });
        }
      });
      return result || "\nKeine Gerichte ausgewählt";
    };

    // Formatiere ausgewählte Getränke
    const formatDrinks = () => {
      const drinks = [
        {
          id: "mineralwasser-still",
          name: "Mineralwasser Still",
          description: "24x Flaschen 0,25l inkl. 5,10€ Pfand",
          price: 42.9,
        },
        {
          id: "mineralwasser-sprudel",
          name: "Mineralwasser Sprudel",
          description: "24x Flaschen 0,25l inkl. 5,10€ Pfand",
          price: 42.9,
        },
        {
          id: "coca-cola",
          name: "Coca Cola",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "coca-cola-zero",
          name: "Coca Cola Zero",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "fanta-orange",
          name: "Fanta Orange",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "sprite",
          name: "Sprite",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "apfelschorle",
          name: "Apfelschorle",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 48.0,
        },
        {
          id: "orangensaft",
          name: "Orangensaft",
          description: "6x Flaschen 1l inkl. 1,50€ Pfand",
          price: 48.0,
        },
        {
          id: "fassbrause-zitrone",
          name: "Fassbrause Zitrone",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 49.9,
        },
      ];

      let result = "";
      Object.entries(selectedDrinks).forEach(([drinkId, quantity]) => {
        if (quantity > 0) {
          const drink = drinks.find((d) => d.id === drinkId);
          if (drink) {
            result += `  - ${quantity}x ${drink.name} (${drink.description}) - ${(drink.price * quantity).toFixed(2).replace(".", ",")}€\n`;
          }
        }
      });
      return result || "  Keine Getränke ausgewählt\n";
    };

    // Formatiere ausgewähltes Zubehör
    const formatAccessories = () => {
      const accessories = [
        {
          id: "speiseteller-besteck-30",
          name: "Speiseteller & Besteck 30er Set",
          price: 84.9,
        },
        {
          id: "suppenschuessel-loeffel-30",
          name: "Suppenschüssel & Löffel 30er Set",
          price: 65.9,
        },
        {
          id: "dessertteller-besteck-30",
          name: "Dessertteller & Besteck 30er Set",
          price: 65.9,
        },
        { id: "aufbau-abholung", name: "Aufbau/Abholung", price: 95.2 },
        {
          id: "buffet-deko-podeste",
          name: "Elegante Buffetdekoration mit weißen Podesten",
          price: 239.9,
        },
        { id: "tischdecke", name: "Tischdecke", price: 20.0 },
        {
          id: "buffet-deko-detail",
          name: "Buffetdekoration mit Liebe zum Detail",
          price: 189.9,
        },
        {
          id: "buffet-praesentation-ebenen",
          name: "Stilvolle Buffetpräsentation auf mehreren Ebenen",
          price: 289.9,
        },
      ];

      let result = "";
      Object.entries(selectedAccessories).forEach(([accessoryId, quantity]) => {
        if (quantity > 0) {
          const accessory = accessories.find((a) => a.id === accessoryId);
          if (accessory) {
            result += `  - ${quantity}x ${accessory.name} - ${(accessory.price * quantity).toFixed(2).replace(".", ",")}€\n`;
          }
        }
      });
      return result || "  Kein Zubehör ausgewählt\n";
    };

    // Erstelle Email-Inhalt
    const emailBody = `NEUE CATERING-ANFRAGE
========================

MENÜ-PAKET: ${packageName.toUpperCase()}
Anzahl Gäste: ${guestCount}
Basispreis: ${(guestCount || 0) * basePrices[packageName]}€

VERANSTALTUNG
-------------
Art: ${eventType || "Nicht angegeben"}
Datum: ${eventDate || "Nicht angegeben"}
Uhrzeit: ${eventStart || "Nicht angegeben"}
Gewünschte Lieferzeit: ${deliveryTime || "Nicht angegeben"}
Ort: ${location || "Nicht angegeben"}

LIEFERADRESSE
-------------
Straße: ${streetName} ${streetNumber}
Ortsbezeichnung: ${locationName || "Nicht angegeben"}

AUSGEWÄHLTE GERICHTE${formatItems()}

GETRÄNKE
--------
${formatDrinks()}
Getränke Gesamt: ${drinksTotal.toFixed(2).replace(".", ",")}€

ZUBEHÖR
-------
${formatAccessories()}
Zubehör Gesamt: ${accessoriesTotal.toFixed(2).replace(".", ",")}€

ALLERGIEN
---------
${selectedAllergies.length > 0 ? selectedAllergies.join(", ") : "Keine"}

BESONDERE WÜNSCHE / ANMERKUNGEN
-------------------------------
${remarks || "Keine"}

KUNDENDATEN
-----------
Name: ${firstName} ${lastName}
Email: ${email}
Telefon: ${phone}
Firma: ${isCompany ? "Ja" : "Nein"}

Rechnungsadresse:
${billingStreet} ${billingHouseNumber}
${billingZipCode} ${billingCity}

PREISÜBERSICHT
--------------
Menü (${guestCount} Personen x ${basePrices[packageName]}€): ${((guestCount || 0) * basePrices[packageName]).toFixed(2).replace(".", ",")}€
${drinksTotal > 0 ? `Getränke: ${drinksTotal.toFixed(2).replace(".", ",")}€` : ""}
${accessoriesTotal > 0 ? `Zubehör: ${accessoriesTotal.toFixed(2).replace(".", ",")}€` : ""}
${servicefee > 0 ? `Servicegebühr (bis 20 Personen): ${servicefee.toFixed(2).replace(".", ",")}€` : ""}
Netto: ${subTotal.toFixed(2).replace(".", ",")}€
MwSt. 19%: ${vat.toFixed(2).replace(".", ",")}€
---
GESAMTPREIS BRUTTO: ${total.toFixed(2).replace(".", ",")}€

========================`;

    // WhatsApp-Nachricht erstellen
    const whatsappMessage = encodeURIComponent(emailBody);
    const whatsappLink = `https://api.whatsapp.com/send?phone=491751770787&text=${whatsappMessage}`;

    // Öffne WhatsApp
    window.open(whatsappLink, "_blank");

    setTimeout(() => {
      alert(
        "Vielen Dank für Ihre Anfrage! Ihre Bestellung wurde an WhatsApp gesendet.",
      );
      onClose();
    }, 500);
  };

  const toggleItemSelection = (category: string, itemId: string) => {
    const categoryKey = category
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ & /g, "_")
      .replace(/ /g, "_");
    const currentSelected = selectedItems[categoryKey] || [];
    const limit = packageLimits[categoryKey as keyof typeof packageLimits] || 0;

    if (currentSelected.includes(itemId)) {
      setSelectedItems({
        ...selectedItems,
        [categoryKey]: currentSelected.filter((id) => id !== itemId),
      });
    } else if (currentSelected.length < limit) {
      setSelectedItems({
        ...selectedItems,
        [categoryKey]: [...currentSelected, itemId],
      });
    }
  };

  const toggleAllergy = (allergy: string) => {
    setSelectedAllergies((prev) =>
      prev.includes(allergy)
        ? prev.filter((a) => a !== allergy)
        : [...prev, allergy],
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-foreground hover:bg-muted"
          >
            ← Zurück zur Startseite
          </Button>
          <h1 className="text-2xl font-bold text-primary">
            SLAVA BARAEV CATERING
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step Indicator */}
            <div className="mb-8">
              <div className="text-sm text-muted-foreground mb-2">
                Schritt {currentStep + 1} von {steps.length}
              </div>
              <div className="flex gap-1">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      idx <= currentStep ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Content */}
            <Card className="p-8 mb-8">
              {steps[currentStep] === "Event-Art" && (
                <EventTypeStep selected={eventType} onChange={setEventType} />
              )}
              {steps[currentStep] === "Postleitzahl" && (
                <LocationStep value={location} onChange={setLocation} />
              )}
              {steps[currentStep] === "Gästeanzahl" && (
                <GuestCountStep value={guestCount} onChange={setGuestCount} />
              )}
              {steps[currentStep] === "Wunschtermin" && (
                <DateStep value={eventDate} onChange={setEventDate} />
              )}
              {steps[currentStep] === "Lieferinformationen" && (
                <DeliveryInfoStep
                  eventType={eventType}
                  location={location}
                  streetName={streetName}
                  streetNumber={streetNumber}
                  additionalInfo={locationName}
                  eventStart={eventStart}
                  deliveryTime={deliveryTime}
                  remarks={remarks}
                  onStreetNameChange={setStreetName}
                  onStreetNumberChange={setStreetNumber}
                  onAdditionalInfoChange={setLocationName}
                  onEventStartChange={setEventStart}
                  onDeliveryTimeChange={setDeliveryTime}
                  onRemarksChange={setRemarks}
                />
              )}
              {[
                "Salate",
                "Kalte Vorspeisen",
                "Warme Vorspeisen",
                "Hauptgänge",
                "Beilagen",
                "Suppen",
                "Desserts",
              ].includes(steps[currentStep]) && (
                <FoodSelectionStep
                  category={steps[currentStep]}
                  packageName={packageName}
                  selectedItems={
                    selectedItems[
                      steps[currentStep]
                        .toLowerCase()
                        .replace(/ä/g, "ae")
                        .replace(/ö/g, "oe")
                        .replace(/ü/g, "ue")
                        .replace(/ & /g, "_")
                        .replace(/ /g, "_")
                    ] || []
                  }
                  onToggleItem={(itemId) =>
                    toggleItemSelection(steps[currentStep], itemId)
                  }
                  limit={
                    packageLimits[
                      steps[currentStep]
                        .toLowerCase()
                        .replace(/ä/g, "ae")
                        .replace(/ö/g, "oe")
                        .replace(/ü/g, "ue")
                        .replace(/ & /g, "_")
                        .replace(/ /g, "_") as keyof typeof packageLimits
                    ] || 0
                  }
                />
              )}
              {steps[currentStep] === "Getränke" && (
                <DrinksStep
                  selectedDrinks={selectedDrinks}
                  onDrinksChange={setSelectedDrinks}
                />
              )}
              {steps[currentStep] === "Zubehör" && (
                <AccessoriesStep
                  selectedAccessories={selectedAccessories}
                  onAccessoriesChange={setSelectedAccessories}
                />
              )}
              {steps[currentStep] === "Allergien" && (
                <AllergyStep
                  selectedAllergies={selectedAllergies}
                  onToggleAllergy={toggleAllergy}
                />
              )}
              {steps[currentStep] === "Checkout" && (
                <CheckoutStep
                  isCompany={isCompany}
                  firstName={firstName}
                  lastName={lastName}
                  street={billingStreet}
                  houseNumber={billingHouseNumber}
                  zipCode={billingZipCode}
                  city={billingCity}
                  email={email}
                  phone={phone}
                  agbAccepted={agbAccepted}
                  privacyAccepted={privacyAccepted}
                  onIsCompanyChange={setIsCompany}
                  onFirstNameChange={setFirstName}
                  onLastNameChange={setLastName}
                  onStreetChange={setBillingStreet}
                  onHouseNumberChange={setBillingHouseNumber}
                  onZipCodeChange={setBillingZipCode}
                  onCityChange={setBillingCity}
                  onEmailChange={setEmail}
                  onPhoneChange={setPhone}
                  onAgbAcceptedChange={setAgbAccepted}
                  onPrivacyAcceptedChange={setPrivacyAccepted}
                />
              )}
            </Card>

            {/* Navigation */}
            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-8 bg-transparent"
              >
                ← Zurück
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!agbAccepted || !privacyAccepted}
                  className="px-8 bg-primary hover:opacity-90 text-primary-foreground"
                >
                  Anfrage absenden
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isCurrentStepValid()}
                  className="px-8 bg-primary hover:opacity-90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Weiter →
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar Cart */}
          <CartSidebar
            packageName={packageName}
            guestCount={guestCount}
            basePrice={basePrices[packageName]}
            selectedItems={selectedItems}
            packageLimits={packageLimits}
            selectedDrinks={selectedDrinks}
            selectedAccessories={selectedAccessories}
            drinksTotal={drinksTotal}
            accessoriesTotal={accessoriesTotal}
            subTotal={subTotal}
            vat={vat}
            serviceFee={servicefee}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
