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
import CheckoutStep from "./wizard-steps/checkout-step";
import CartSidebar from "./cart-sidebar";
import { getPackageItems } from "@/lib/food-data";

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
    vorspeisen: [],
    hauptgaenge: [],
    fingerfoods: [],
    beilagen: [],
    dips_saucen: [],
    desserts: [],
    suppen: [],
  });

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
  const steps = [
    "Event-Art",
    "Postleitzahl",
    "Gästeanzahl",
    "Wunschtermin",
    "Lieferinformationen",
    "Allergien",
    "Vorspeisen",
    "Hauptgänge",
    "Fingerfoods",
    "Suppen",
    "Desserts",
    "Checkout",
  ];

  const basePrices = {
    classic: 34.9,
    gold: 38.9,
    premium: 46.9,
  };

  const servicefee = guestCount && guestCount <= 20 ? 40.0 : 0;
  const subTotal = (guestCount || 0) * basePrices[packageName];
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

  const handleSubmit = async () => {
    if (!agbAccepted || !privacyAccepted) {
      alert("Bitte akzeptieren Sie die AGB und Datenschutzerklärung.");
      return;
    }

    try {
      // Prepare data for email
      const orderData = {
        packageName,
        guestCount,
        eventType,
        eventDate,
        eventTime: eventStart,
        location,
        deliveryAddress: {
          street: `${streetName} ${streetNumber}`,
          postalCode: "Nicht angegeben",
          city: locationName,
        },
        selectedItems,
        allergies: selectedAllergies.join(", "),
        customerInfo: {
          firstName,
          lastName,
          email,
          phone,
          company: isCompany ? "Ja" : "Nein",
        },
        total,
      };

      // Send order via API
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert(
          "Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        );
        onClose();
      } else {
        alert(
          "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
        );
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert(
        "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
      );
    }
  };

  const toggleItemSelection = (category: string, itemId: string) => {
    const categoryKey = category
      .toLowerCase()
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
            Shemesh Restaurant
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
              {currentStep === 0 && (
                <EventTypeStep selected={eventType} onChange={setEventType} />
              )}
              {currentStep === 1 && (
                <LocationStep value={location} onChange={setLocation} />
              )}
              {currentStep === 2 && (
                <GuestCountStep value={guestCount} onChange={setGuestCount} />
              )}
              {currentStep === 3 && (
                <DateStep value={eventDate} onChange={setEventDate} />
              )}
              {currentStep === 4 && (
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
              {currentStep === 5 && (
                <AllergyStep
                  selectedAllergies={selectedAllergies}
                  onToggleAllergy={toggleAllergy}
                />
              )}
              {currentStep >= 6 && currentStep <= 10 && (
                <FoodSelectionStep
                  category={steps[currentStep]
                    .replace(" & ", "_")
                    .replace(" ", "")}
                  selectedItems={
                    selectedItems[
                      steps[currentStep]
                        .toLowerCase()
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
                        .replace(/ & /g, "_")
                        .replace(/ /g, "_") as keyof typeof packageLimits
                    ] || 0
                  }
                />
              )}
              {currentStep === 11 && (
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
                  className="px-8 bg-primary hover:opacity-90 text-primary-foreground"
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
