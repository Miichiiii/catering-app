"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { foodItems } from "@/lib/food-data";

export default function GerichtePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("alle");

  const categories = [
    { id: "alle", name: "Alle Gerichte" },
    { id: "vorspeisen", name: "Vorspeisen & Salate" },
    { id: "fingerfoods", name: "Warme Vorspeisen" },
    { id: "suppen", name: "Suppen" },
    { id: "hauptgaenge", name: "Hauptgerichte" },
    { id: "beilagen", name: "Beilagen" },
    { id: "desserts", name: "Desserts" },
  ];

  const allDishes =
    selectedCategory === "alle"
      ? Object.values(foodItems).flat()
      : foodItems[selectedCategory] || [];

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
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Unsere Gerichte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto text-foreground"
          >
            Entdecken Sie unsere Vielfalt an authentischen Spezialitäten
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-background sticky top-[73px] z-40 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48 bg-muted">
                    {dish.image && (
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-foreground mb-3">
                      {dish.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {dish.availableIn?.map((pkg) => (
                        <span
                          key={pkg}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {pkg === "classic"
                            ? "Klassik"
                            : pkg === "gold"
                              ? "Gold"
                              : "Premium"}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {allDishes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-foreground">
                Keine Gerichte in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Bereit für Ihre Veranstaltung?
          </h2>
          <p className="text-lg mb-8 text-foreground">
            Stellen Sie jetzt Ihr individuelles Menü zusammen
          </p>
          <Link href="/#pricing">
            <Button className="px-8 py-6 text-lg bg-primary hover:opacity-90 text-primary-foreground">
              Jetzt Catering anfragen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
