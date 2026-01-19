"use client";

import { foodItems } from "@/lib/food-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuPage() {
  const menuConfigurations = [
    {
      name: "Klassik Menü",
      price: "50,00€ p.P.",
      description: "Perfekt für kleinere Veranstaltungen",
      color: "from-blue-500/20 to-blue-600/20",
      sections: [
        {
          title: "Salate",
          count: 4,
          items: foodItems.vorspeisen.filter((item) =>
            item.availableIn?.includes("classic"),
          ),
        },
        {
          title: "Vorspeisen",
          count: 2,
          items: foodItems.vorspeisen.filter(
            (item) =>
              item.availableIn?.includes("classic") &&
              item.category === "Vorspeisen" &&
              !item.description.includes("Salat"),
          ),
        },
        {
          title: "Hauptgänge",
          count: 2,
          subtitle: "1 Fischgericht + 1 Geflügelgericht",
          items: foodItems.hauptgaenge.filter((item) =>
            item.availableIn?.includes("classic"),
          ),
        },
        {
          title: "Beilagen",
          count: 2,
          items: foodItems.beilagen.filter((item) =>
            item.availableIn?.includes("classic"),
          ),
        },
      ],
    },
    {
      name: "Shemesh Gold",
      price: "60,00€ p.P.",
      description: "Ab 25 Personen • Unsere beliebteste Wahl",
      color: "from-amber-500/20 to-amber-600/20",
      featured: true,
      sections: [
        {
          title: "Salate",
          count: 5,
          items: foodItems.vorspeisen.filter((item) =>
            item.availableIn?.includes("gold"),
          ),
        },
        {
          title: "Kalte Vorspeisen",
          count: 2,
          items: foodItems.vorspeisen.filter(
            (item) =>
              item.availableIn?.includes("gold") &&
              item.category === "Vorspeisen",
          ),
        },
        {
          title: "Warme Vorspeisen",
          count: 1,
          items: foodItems.fingerfoods.filter((item) =>
            item.availableIn?.includes("gold"),
          ),
        },
        {
          title: "Hauptgänge",
          count: 2,
          items: foodItems.hauptgaenge.filter((item) =>
            item.availableIn?.includes("gold"),
          ),
        },
        {
          title: "Beilagen",
          count: 2,
          items: foodItems.beilagen.filter((item) =>
            item.availableIn?.includes("gold"),
          ),
        },
        {
          title: "Desserts",
          count: 1,
          items: foodItems.desserts.filter((item) =>
            item.availableIn?.includes("gold"),
          ),
        },
      ],
    },
    {
      name: "Premium Menü",
      price: "80,00€ p.P.",
      description: "Ab 30 Personen • Das volle kulinarische Erlebnis",
      color: "from-purple-500/20 to-purple-600/20",
      sections: [
        {
          title: "Salate",
          count: 6,
          items: foodItems.vorspeisen.filter((item) =>
            item.availableIn?.includes("premium"),
          ),
        },
        {
          title: "Warme Vorspeisen",
          count: 2,
          items: foodItems.fingerfoods.filter((item) =>
            item.availableIn?.includes("premium"),
          ),
        },
        {
          title: "Suppen",
          count: 1,
          items: foodItems.suppen,
        },
        {
          title: "Hauptgänge",
          count: 3,
          items: foodItems.hauptgaenge.filter((item) =>
            item.availableIn?.includes("premium"),
          ),
        },
        {
          title: "Beilagen",
          count: 3,
          items: foodItems.beilagen.filter((item) =>
            item.availableIn?.includes("premium"),
          ),
        },
        {
          title: "Desserts",
          count: 1,
          items: foodItems.desserts.filter((item) =>
            item.availableIn?.includes("premium"),
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:opacity-80 transition"
          >
            Shemesh Restaurant
          </Link>
          <Link href="/">
            <Button variant="outline">Zurück zur Startseite</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Unsere Menüs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Entdecken Sie unsere sorgfältig zusammengestellten All-Inclusive
            Menüs mit authentischen Spezialitäten
          </motion.p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {menuConfigurations.map((menu, menuIndex) => (
            <motion.div
              key={menu.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: menuIndex * 0.1 }}
              className="relative"
            >
              {/* Menu Header */}
              <div className="text-center mb-12">
                {menu.featured && (
                  <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary rounded-full">
                    Beliebt
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {menu.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {menu.description}
                </p>
                <p className="text-2xl font-bold text-primary">
                  Ab {menu.price}
                </p>
                <p className="text-sm text-muted-foreground">inkl. MwSt.</p>
              </div>

              {/* Menu Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menu.sections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.05,
                    }}
                  >
                    <Card
                      className={`p-6 h-full bg-gradient-to-br ${menu.color} border-2`}
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {section.subtitle
                            ? section.subtitle
                            : `Wähle ${section.count} aus:`}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: itemIndex * 0.02,
                            }}
                            className="border-l-2 border-primary pl-3"
                          >
                            <div className="font-medium text-foreground text-sm">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              {menuIndex < menuConfigurations.length - 1 && (
                <div className="mt-16 border-t border-border"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bereit für Ihre Veranstaltung?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
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
