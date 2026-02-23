"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PricingSectionProps {
  onSelectPackage: (packageName: "classic" | "gold" | "premium") => void;
}

export default function PricingSection({
  onSelectPackage,
}: PricingSectionProps) {
  const packages = [
    {
      name: "Klassik Menü",
      price: "50,00€ p.P.",
      items: [
        "4 Salate",
        "1 Vorspeise",
        "2 Hauptgänge (Fisch/ Fleisch)",
        "2 Beilagen",
      ],
      id: "classic",
      description: "Perfekt für kleinere Veranstaltungen",
    },
    {
      name: "Gold",
      price: "60,00€ p.P.",
      items: [
        "5 Salate",
        "1 Kalte Vorspeise",
        "1 Warme Vorspeise",
        "2 Hauptgänge (Fisch/ Fleisch)",
        "2 Beilagen",
        "Dessert (Obst)",
      ],
      id: "gold",
      featured: true,
      description: "Ab 25 Personen • Unsere beliebteste Wahl",
    },
    {
      name: "Premium Menü",
      price: "80,00€ p.P.",
      items: [
        "5 Salate",
        "2 Kalte Vorspeisen",
        "1 Warme Vorspeise",
        "3 Hauptgänge (Fisch/ Fleisch)",
        "3 Beilagen",
        "Dessert (Obst/ Gebäck)",
        "Suppe (gegen Aufpreis)",
      ],
      id: "premium",
      description: "Ab 30 Personen • Das volle kulinarische Erlebnis",
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-foreground"
        >
          Unsere All Inclusive Menüs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12"
        >
          Wähle dein perfektes Paket aus
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card
                className={`p-8 flex flex-col justify-between h-full transition-shadow hover:shadow-xl ${
                  pkg.featured ? "ring-2 ring-accent bg-muted" : ""
                }`}
              >
                <div>
                  {pkg.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.5,
                      }}
                      className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-primary-foreground bg-primary rounded-full"
                    >
                      Beliebt
                    </motion.div>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                        className="text-sm text-foreground flex items-start"
                      >
                        <span className="mr-3 text-primary">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mb-4">
                    + Getränke & Zubehör nach Wahl
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-primary">
                    Ab {pkg.price}
                  </p>
                  <p className="text-xs text-muted-foreground">inkl. 19% Mwst.</p>
                  <Button
                    onClick={() =>
                      onSelectPackage(pkg.id as "classic" | "gold" | "premium")
                    }
                    className="w-full bg-primary hover:opacity-90 text-primary-foreground"
                  >
                    Jetzt anfragen
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-8 bg-secondary text-center">
            <p className="text-foreground mb-4">
              Keine der vordefinierten Menüs passen zu dir? Kein Problem! Lass
              dich von unserem Team beraten und wir stellen dir ein
              individuelles Menü zusammen.
            </p>
            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-secondary bg-transparent hover:scale-105 transition-transform"
              asChild
            >
              <a
                href={`https://api.whatsapp.com/send?phone=491751770787&text=${encodeURIComponent("Hallo, ich interessiere mich für eine individuelle Beratung für mein Event.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Individuelle Beratung
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
