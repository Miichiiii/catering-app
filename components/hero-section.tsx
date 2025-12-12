"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  onSelectPackage: (packageName: "classic" | "gold" | "premium") => void;
}

export default function HeroSection({ onSelectPackage }: HeroSectionProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section
      id="hero"
      className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dishes/grillplatte.jpg"
          alt="Catering Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Kulinarische Vielfalt für Ihre perfekte Veranstaltung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
          >
            Lassen Sie sich von unserer reichhaltigen Auswahl an Spezialitäten
            aus verschiedenen Kulturen begeistern. Shemesh bringt Geschmack,
            Tradition und Handwerk zu Ihrem Event nach Düsseldorf.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => onSelectPackage("gold")}
              className="px-8 py-6 text-lg bg-primary hover:opacity-90 text-primary-foreground hover:scale-105 transition-transform"
            >
              Jetzt Catering anfragen
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/10 bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              Menü ansehen
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "variety",
              title: "Authentische Vielfalt",
              description:
                "Traditionelle Gerichte aus Israel, Russland, Georgien und der Levante",
              icon: "🍽️",
            },
            {
              id: "quality",
              title: "Premium Qualität",
              description:
                "Frische Zutaten, handwerkliche Zubereitung, höchste Qualitätsstandards",
              icon: "⭐",
            },
            {
              id: "service",
              title: "Professioneller Service",
              description:
                "Pünktliche Lieferung, flexible Menüs, individuelle Beratung",
              icon: "👨‍🍳",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`p-8 rounded-lg border border-border transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                hoveredFeature === feature.id
                  ? "bg-primary/10 border-primary shadow-lg transform scale-105"
                  : "bg-background/80"
              }`}
            >
              <motion.div
                animate={{
                  scale: hoveredFeature === feature.id ? 1.2 : 1,
                  rotate: hoveredFeature === feature.id ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-4xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Vertraut von über 500+ Events in Düsseldorf
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-primary">✓</span> Kostenlose Beratung
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-primary">✓</span> Flexible Menüs
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-primary">✓</span> Lieferung & Aufbau
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-primary">✓</span> Allergie-freundlich
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
