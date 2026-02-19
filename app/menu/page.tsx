"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuPage() {
  const menus = [
    {
      id: "menu1",
      title: "Klassik Menü",
      price: "50,00 €",
      pricePerPerson: true,
      description: "Ab 20 Personen • Perfekt für kleinere Veranstaltungen",
      includes: [
        "4 Salate zur Auswahl",
        "1 kalte Vorspeise",
        "2 Hauptspeisen (Fisch / Hähnchenfleisch) ",
        "2 Beilagen",
      ],
      sections: [
        {
          title: "Salate – Menü 1",
          items: [
            "Rote-Bete mit Salzgurken, Olivenöl, frischen Kräutern",
            "Rote-Bete mit Birnen, Meerrettich, Olivenöl, frischem Koriander",
            "Süßkartoffeln mit Rote Bete, Kichererbsen",
            "Möhrensalat",
            "Couscous mit Paprika, Gurken und frischen Kräutern",
            "Nudeln nach italienischer Art mit getrockneten Tomaten, Oliven, Provence-Kräutern",
            "Hummus",
            "Knusprige Falafel",
            "Gebackene Süßkartoffeln mit Tahini und Dattelsirup",
            "Kartoffelsalat nach israelischer Art",
            "Funcheza-Salat (Glasnudeln mit Paprika, Möhren, Sesam, Koriander)",
            "Israelischer Salat mit frischem Gemüse und Kräutern",
            "Weißkohl-/Rotkohlsalat mit Erbsen",
            "Matbucha nach israelischer Art",
            "Rote-Bete klassischer Salat mit Pflaumen, Walnüssen, Mayonnaise",
            "Gartensalat (Spinat, Tomaten, Rucola)",
          ],
        },
        {
          title: "Vorspeisen – Menü 1",
          items: ["Gemüseauflauf (Gemüse nach Wahl)", "Nudelauflauf"],
        },
        {
          title: "Hauptspeisen – Menü 1",
          subsections: [
            {
              subtitle: "Fisch:",
              items: [
                "Zanderfilet in Tomatensauce nach israelischer Art",
                "Lachs in Kokos-Limetten-Sauce",
                "Dorade in Paprika-Weinsauce",
              ],
            },
            {
              subtitle: "Geflügel:",
              items: [
                "Pargiot",
                "Gebackene Hähnchenkeule in Tomatensauce",
                "Hähnchen- / Puten-Geschnetzeltes mit Kokos-Zitronen-Vinaigrette",
              ],
            },
          ],
        },
        {
          title: "Beilagen – Menü 1",
          items: [
            "Gemüsereis",
            "Gebackene Kartoffeln",
            "Gelber Reis",
            "Nudeln",
          ],
        },
      ],
      color: "from-primary/10 to-primary/20",
    },
    {
      id: "menu2",
      title: "Shemesh Gold",
      price: "60,00 €",
      pricePerPerson: true,
      description: "Ab 25 Personen • Unsere beliebteste Wahl",
      includes: [
        "5 Salate",
        "1 kalte Vorspeise",
        "1 warme Vorspeise",
        "2 Hauptspeisen (Fisch / Fleisch)",
        "2 Beilagen",
        "Dessert (Obst)",
      ],
      sections: [
        {
          title: "Salate – Menü 2",
          items: [
            "Rote-Bete mit Salzgurken, Olivenöl, frischen Kräutern",
            "Rote-Bete mit Birnen, Meerrettich, Olivenöl, frischem Koriander",
            "Süßkartoffeln mit Rote Bete, Kichererbsen",
            "Möhrensalat",
            "Hering unter Rote-Bete-Mantel",
            "Couscous mit Paprika, Gurken und frischen Kräutern",
            "Vinaigrette-Salat",
            "Bohnen-Salat",
            "Nudeln nach italienischer Art mit getrockneten Tomaten, Oliven, Provence-Kräutern",
            "Hummus",
            "Knusprige Falafel",
            "Gebackene Süßkartoffeln mit Tahini und Dattelsirup",
            "Kartoffelsalat nach israelischer Art",
            "Funcheza-Salat (Glasnudeln mit Paprika, Möhren, Sesam, Koriander)",
            "Gebackene Auberginen mit Kichererbsen, Paprika, Basilikum, Knoblauch, italienischen Kräutern",
            "Israelischer Salat mit frischem Gemüse und Kräutern",
            "Weißkohl-/Rotkohlsalat mit Erbsen",
            "Matbucha nach israelischer Art",
            "Gebackene Auberginen (ganz) mit frisch geriebenen Tomaten und Kräutern",
            "Rote-Bete klassischer Salat mit Pflaumen, Walnüssen, Mayonnaise",
            "Gartensalat (Spinat, Tomaten, Rucola)",
            "Jüdischer Salat (gebackenes Saisongemüse, frische Tomaten, Kräuter, Knoblauch, Olivenöl)",
          ],
        },
        {
          title: "Kalte Vorspeisen – Menü 2",
          items: [
            "Sauté-Auberginenscheiben mit Mayonnaise und frischen Tomaten",
            "Eingelegtes Gemüse nach israelischer Art",
            "Gefüllte Auberginen mit Möhren nach koreanischer Art",
            "Fischplatte",
            "Gefüllter Fisch als Ganzes (auf Anfrage, Aufpreis)",
            "Sushiplatte (auf Anfrage, Aufpreis)",
            "Gemüseauflauf nach Wahl",
            "Nudelauflauf",
          ],
        },
        {
          title: "Warme Vorspeisen – Menü 2",
          items: [
            "Blini mit Kartoffeln",
            "Blini mit Hähnchenfleisch",
            "Blini mit Pilzen",
            "Burekas mit Kartoffeln",
          ],
        },
        {
          title: "Hauptspeisen – Menü 2",
          subsections: [
            {
              subtitle: "Fisch:",
              items: [
                "Lachsfiletstücke in Kokos-Limetten-Sauce",
                "Dorade in Paprika-Weinsauce",
                "Zanderfilet in Tomatensauce",
              ],
            },
            {
              subtitle: "Fleisch & Geflügel:",
              items: [
                "Hähnchenschenkel in Tomatensauce",
                "Pargiot",
                "Hähnchen- / Puten-Geschnetzeltes",
                "Hähnchen-Chickenwings",
                "Rindergulasch",
                "Beef Stroganoff",
                "Rinderbraten",
                "Rinderbällchen (Frikadellen) in Tomatensauce",
                "Plov nach usbekischer Art",
                "Bolognese",
              ],
            },
          ],
        },
        {
          title: "Beilagen – Menü 2",
          items: [
            "Gemüsereis",
            "Gebackene Kartoffeln",
            "Gelber Reis",
            "Nudeln",
            "Drillinge (Salzkartoffeln)",
          ],
        },
        {
          title: "Dessert – Menü 2",
          items: ["Saisonobst"],
        },
      ],
      color: "from-amber-500/20 to-amber-600/20",
      featured: true,
    },
    {
      id: "menu3",
      title: "Premium Menü",
      price: "80,00 €",
      pricePerPerson: true,
      description: "Für größere institutionelle Events und Hochzeiten",
      includes: [
        "5 Salate",
        "2 kalte Vorspeisen",
        "1 warme Vorspeise",
        "3 Hauptspeisen (Fisch / Fleisch)",
        "3 Beilagen",
        "Dessert (Obst/ Gebäck)",
        "Suppe (gegen Aufpreis)",
      ],
      sections: [
        {
          title: "Salate – Menü 3",
          items: [
            "Rote-Bete mit Salzgurken, Olivenöl und frischen Kräutern",
            "Rote-Bete mit Birnen, Meerrettich, Olivenöl und frischem Koriander",
            "Süßkartoffeln mit Rote Bete und Kichererbsen",
            "Möhrensalat",
            "Hering unter Rote-Bete-Mantel",
            "Couscous mit Paprika, Gurken und frischen Kräutern",
            "Vinaigrette-Salat",
            "Bohnen-Salat",
            "Nudeln nach italienischer Art mit getrockneten Tomaten, Oliven und Provence-Kräutern",
            "Hummus",
            "Knusprige Falafel",
            "Gebackene Süßkartoffeln mit Tahini und Dattelsirup",
            "Kartoffelsalat nach israelischer Art",
            "Funcheza-Salat (Glasnudeln mit Paprika, Möhren, Sesam und Koriander)",
            "Gebackene Auberginen mit Kichererbsen, Paprika, Basilikum, Knoblauch und italienischen Kräutern",
            "Israelischer Salat mit frischem Gemüse und Kräutern",
            "Weißkohl- / Rotkohlsalat mit Erbsen",
            "Matbucha nach israelischer Art",
            "Gebackene Auberginen (ganz) mit frisch geriebenen Tomaten und Kräutern",
            "Rote-Bete klassischer Salat mit Pflaumen, Walnüssen und Mayonnaise",
            "Gartensalat (Spinat, Tomaten, Rucola)",
            "Jüdischer Salat (gebackenes Saisongemüse, frische Tomaten, frische Kräuter, Knoblauch und Olivenöl)",
          ],
        },
        {
          title: "Kalte Vorspeisen – Menü 3",
          items: [
            "Sauté-Auberginenscheiben mit Mayonnaise und frischen Tomaten",
            "Eingelegtes Gemüse nach israelischer Art",
            "Gefüllte Auberginen mit Möhren nach koreanischer Art",
            "Fischplatte",
            "Gefüllter Fisch als Ganzes (auf Anfrage, gegen Aufpreis)",
            "Sushiplatte (auf Anfrage, gegen Aufpreis)",
            "Gemüseauflauf nach Wahl",
            "Nudelauflauf",
          ],
        },
        {
          title: "Warme Vorspeisen – Menü 3",
          items: [
            "Blini mit Kartoffeln",
            "Blini mit Hähnchenfleisch",
            "Blini mit Pilzen",
            "Burekas mit Kartoffeln",
          ],
        },
        {
          title: "Suppen – Menü 3",
          items: [
            "Kartoffel-Cremesuppe",
            "Gemüsesuppe",
            "Vegetarische Nudelsuppe",
            "Borschtsch (vegetarisch)",
          ],
        },
        {
          title: "Hauptspeisen – Menü 3",
          subsections: [
            {
              subtitle: "Fischgerichte:",
              items: [
                "Lachsfiletstücke in Kokos-Limetten-Sauce",
                "Dorade in Paprika-Weinsauce",
                "Zanderfilet in Tomatensauce",
              ],
            },
            {
              subtitle: "Geflügel- und Fleischgerichte:",
              items: [
                "Hähnchenschenkel in Tomatensauce",
                "Pargiot",
                "Hähnchen- / Puten-Geschnetzeltes",
                "Hähnchenflügel (Chicken Wings)",
                "Rindergulasch",
                "Beef Stroganoff",
                "Rinderbraten",
                "Rinderbällchen (Frikadellen) in Tomatensauce",
                "Plov nach usbekischer Art",
                "Bolognese",
              ],
            },
          ],
        },
        {
          title: "Beilagen – Menü 3",
          items: [
            "Gemüsereis",
            "Gebackene Kartoffeln",
            "Gelber Reis",
            "Nudeln",
            "Drillinge (Salzkartoffeln)",
            "Gemüse",
          ],
        },
        {
          title: "Dessert – Menü 3",
          items: ["Saisonobst", "Gebäck nach Absprache"],
        },
      ],
      color: "from-primary/10 to-primary/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Unsere Menüs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto text-foreground"
          >
            Entdecken Sie unsere sorgfältig zusammengestellten All-Inclusive
            Menüs mit authentischen Spezialitäten
          </motion.p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menus.map((menu, menuIndex) => (
              <motion.div
                key={menu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: menuIndex * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <Card
                  className={`p-8 bg-gradient-to-br ${menu.color} border-2 h-full transition-shadow hover:shadow-xl`}
                >
                  {/* Menu Header */}
                  <div className="text-center mb-8">
                    {menu.featured && (
                      <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary rounded-full">
                        Beliebt
                      </span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                      {menu.title} – {menu.price} pro Person
                      {menu.id === "menu3" ? " (ab 30 Personen)" : ""}
                    </h2>
                    {menu.description && (
                      <p className="text-lg mb-4 text-foreground">
                        {menu.description}
                      </p>
                    )}
                  </div>

                  {/* Enthalten */}
                  <div className="mb-8">
                    <h3 className="text-xl font-normal mb-3 text-foreground">
                      Enthalten:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-foreground">
                      {menu.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Menu Sections */}
                  <div className="space-y-8">
                    {menu.sections.map((section, sectionIndex) => (
                      <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: sectionIndex * 0.05,
                        }}
                      >
                        <h3 className="text-xl font-normal mb-4 text-foreground">
                          {section.title}
                        </h3>

                        {/* Regular items */}
                        {section.items && (
                          <ul className="space-y-2 ml-4">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="border-l-2 border-primary pl-3 text-foreground"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Subsections (for Hauptspeisen) */}
                        {"subsections" in section && section.subsections && (
                          <div className="space-y-4 ml-4">
                            {section.subsections.map((subsection, subIndex) => (
                              <div key={subIndex}>
                                <h4 className="font-normal mb-2 text-foreground">
                                  {subsection.subtitle}
                                </h4>
                                <ul className="space-y-2 ml-4">
                                  {subsection.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="border-l-2 border-primary pl-3 text-foreground"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10 text-center">
                    <Link href="/#pricing">
                      <Button className="px-8 py-6 text-lg bg-primary hover:opacity-90 text-primary-foreground">
                        {menu.title} bestellen
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Bereit für Ihre Veranstaltung?
          </h2>
          <p className="text-lg mb-8 text-foreground">
            Wählen Sie Ihr Menü und starten Sie jetzt Ihre Catering-Anfrage
          </p>
          <Link href="/#pricing">
            <Button className="px-8 py-6 text-lg bg-primary hover:opacity-90 text-primary-foreground">
              Jetzt anfragen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
