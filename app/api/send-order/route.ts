import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { foodItems } from "@/lib/food-data";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      packageName,
      guestCount,
      eventType,
      eventDate,
      eventTime,
      location,
      deliveryAddress,
      selectedItems,
      allergies,
      customerInfo,
      total,
    } = data;

    // Email-Konfiguration (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Formatierung der ausgewählten Gerichte
    const formatSelectedItems = () => {
      let itemsText = "";

      const categoryLabels: Record<string, string> = {
        vorspeisen: "Vorspeisen/Salate",
        hauptgaenge: "Hauptgänge",
        fingerfoods: "Warme Vorspeisen",
        beilagen: "Beilagen",
        dips_saucen: "Dips & Saucen",
        desserts: "Desserts",
        suppen: "Suppen",
      };

      Object.entries(selectedItems).forEach(([category, itemIds]) => {
        if (Array.isArray(itemIds) && itemIds.length > 0) {
          itemsText += `\n${categoryLabels[category] || category}:\n`;

          // Get the actual item names from foodItems
          const categoryItems =
            foodItems[category as keyof typeof foodItems] || [];
          itemIds.forEach((itemId: string) => {
            const item = categoryItems.find((i) => i.id === itemId);
            if (item) {
              itemsText += `  - ${item.name}\n`;
              if (item.description) {
                itemsText += `    (${item.description})\n`;
              }
            }
          });
        }
      });

      return itemsText || "Keine Gerichte ausgewählt";
    };

    // Email-Inhalt
    const emailContent = `
NEUE CATERING-ANFRAGE
========================

MENÜ-AUSWAHL
------------
Paket: ${packageName.toUpperCase()}
Anzahl Gäste: ${guestCount}

VERANSTALTUNGSDETAILS
---------------------
Veranstaltungsart: ${eventType || "Nicht angegeben"}
Datum: ${eventDate || "Nicht angegeben"}
Uhrzeit: ${eventTime || "Nicht angegeben"}
Veranstaltungsort: ${location || "Nicht angegeben"}

LIEFERADRESSE
-------------
${deliveryAddress?.street || "Nicht angegeben"}
${deliveryAddress?.postalCode || ""} ${deliveryAddress?.city || ""}

AUSGEWÄHLTE GERICHTE
--------------------
${formatSelectedItems()}

ALLERGIEN & UNVERTRÄGLICHKEITEN
-------------------------------
${allergies || "Keine angegeben"}

KUNDENDATEN
-----------
Name: ${customerInfo?.firstName || ""} ${customerInfo?.lastName || ""}
Email: ${customerInfo?.email || ""}
Telefon: ${customerInfo?.phone || ""}
Firma: ${customerInfo?.company || "Nicht angegeben"}

GESAMTPREIS
-----------
${total?.toFixed(2).replace(".", ",")}€ (inkl. MwSt.)

========================
Anfrage eingegangen am: ${new Date().toLocaleString("de-DE")}
`;

    // Email senden
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "michael.medvidov@dci-student.org",
      subject: `Neue Catering-Anfrage von ${customerInfo?.firstName} ${customerInfo?.lastName}`,
      text: emailContent,
      replyTo: customerInfo?.email,
    });

    return NextResponse.json(
      { message: "Anfrage erfolgreich gesendet!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email-Fehler:", error);
    return NextResponse.json(
      {
        message:
          "Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }
}
