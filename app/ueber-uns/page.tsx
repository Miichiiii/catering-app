"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function AboutPage() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb, 0 0 0) / 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(var(--primary-rgb, 0 0 0) / 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(var(--primary-rgb, 0 0 0) / 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(var(--primary-rgb, 0 0 0) / 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb, 0 0 0) / 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-primary/20 rounded-full pointer-events-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ zIndex: 0 }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            style={{ opacity, scale }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6"
              animate={{
                backgroundImage: [
                  "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground)))",
                  "linear-gradient(to right, hsl(var(--primary)), hsl(var(--foreground)))",
                  "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--primary)))",
                  "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground)))",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
             motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl font-bold text-foreground"
                whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                transition={{ duration: 0.3 }}
              >
                Tradition trifft Innovation
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Slava Baraev Catering steht für höchste kulinarische Qualität
                und authentische koschere Küche. Mit jahrelanger Erfahrung in
                der gehobenen Gastronomie und einer tiefen Verbundenheit zu
                traditionellen Rezepten aus Isr, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(var(--primary-rgb, 0 0 0) / 0.3)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  ],
                }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden relative">
                {/* Animated Border Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-50"
                  animate={{
                    background: [
                      "linear-gradient(0deg, transparent, rgba(var(--primary-rgb, 0 0 0) / 0.1), transparent)",
                      "linear-gradient(90deg, transparent, rgba(var(--primary-rgb, 0 0 0) / 0.1), transparent)",
                      "linear-gradient(180deg, transparent, rgba(var(--primary-rgb, 0 0 0) / 0.1), transparent)",
                      "linear-gradient(270deg, transparent, rgba(var(--primary-rgb, 0 0 0) / 0.1), transparent)",
                      "linear-gradient(360deg, transparent, rgba(var(--primary-rgb, 0 0 0) / 0.1), transparent)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                /
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div
                In Kooperation mit der Jüdischen Gemeinde Duisburg und unter der
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    
              <Link href="/menu">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="mt-4" size="lg">
                    Unser Menü entdecken
                  </Button>
                </motion.div>
              </Link>
            </motion.imate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >motion.div>
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(var(--primary-rgb, 0 0 0) / 0.2)",
                      }}
                    
                Tradition trifft Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Slava Baraev Catering steht für höchste kulinarische Qualität
                und authentische koschere Küche. Mit jahrelanger Erfahrung in
                der gehobenen Gastronomie und einer tiefen Verbundenheit zu
                traditionellen Rezepten aus Israel, Russland, Georgien und der
                Levante, haben wir uns zum Ziel gesetzt, unvergessliche
                kulinarische Erlebnisse zu schaffen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In Kooperation mit der Jüdischen Gemeinde Duisburg und unter der
                Kaschrutaufsicht der ORD garantieren wir höchste Standards bei
                der Zubereitung unserer Speisen.
              </p>
              <Link href="/menu">
                <Button className="mt-4" size="lg">
                  Unser Menü entdecken
                </Button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/dishes/grillplatte.jpg"
                alt="Slava Baraev Catering"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Shemesh Restaurant Connection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            </motion.divclassName="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.h2
              className="text-3xl font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Unsere Werte
            </motion.        Küche nun direkt zu Ihren Veranstaltungen.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Das Shemesh Restaurant in Düsseldorf hat sich einen
                      hervorragenden Ruf für exzellente israelische und
                      levantinische Küche erarbeitet. Diese Erfahrung und
                      Expertise fließt in jeden Aspekt unseres Catering-Services
                      ein.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Unsere Wurzeln
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>
                            Jahrelange Erfahrung in der gehobenen Gastronomie
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>
                            Verwurzelt in der Düsseldorfer Gastronomieszene
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>
                            Spezialisiert auf authentische koschere Küche
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>Rezepte aus verschiedenen Kulturen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Unsere Werte
            </h2>50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    boxShadow: "0 20px 40px rgba(var(--primary-rgb, 0 0 0) / 0.3)",
                  }}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glowing effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/30 relative overflow-hidden">
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                <CardContent className="p-8 md:p-12 text-center relative z-10">
                  <motion.h2
                    className="text-3xl font-bold text-foreground mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Kaschrutaufsicht
                  </motion.>
                    {value.icon}
                  </motion.
                    "Nur die frischesten Zutaten und höchste Qualitätsstandards",
                },
                {
                  icon: "✡️",
                  title: "Kaschrut",
                  description:
                    "Strenge Einhaltung der koscheren Speisegesetze unter Rabbinatsaufsicht",
                },
                {
                  icon: "🎨",
                  title: "Kreativität",
                  description:
                    "Innovative Interpretationen traditioneller Gerichte",
                },
                {
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <motion.div
                      className="bg-primary/5 rounded-lg p-6 border border-primary/20"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "hsl(var(--primary))",
                        boxShadow: "0 10px 30px rgba(var(--primary-rgb, 0 0 0) / 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        Oberrabbiner David Geballe
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Rabbinatsaufsicht ORD
                  <motion.p
                    className="text-sm text-muted-foreground mt-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Auf Wunsch erfolgt die Aufsicht auch durch Chabad Düsseldorf
                  </motion.p>
                </CardContent>
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "hsl(var(--primary))",
                        boxShadow: "0 10px 30px rgba(var(--primary-rgb, 0 0 0) / 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        Oberrabbiner Shimon Lewin
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Rabbinatsaufsicht ORD
                      </p>
                    </motion.div>
                ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate:5, rotateY: 90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -3, 3, 0],
                      backgroundColor: "rgba(var(--primary-rgb, 0 0 0) / 0.2)",
                      borderColor: "hsl(var(--primary))",
                    }}
                    onMouseEnter={() => , scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            cmotion.h2
              className="text-3xl font-bold text-foreground mb-4 relative z-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Bereit für Ihr kulinarisches Erlebnis?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und
              lassen Sie uns gemeinsam Ihr perfektes Menü zusammenstellen.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/menu">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="px-8">
                    Menü ansehen
                  </Button>
                </motion.div>
              </Link>
              <Link href="/gerichte">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="px-8">
                    Unsere Gerichte
                  </Button>
                </motion.div>
              </Link>
            </motion.          className="absolute inset-0 bg-primary/20 rounded-full"
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    <p className="font-semibold text-foreground relative z-10">
                      {city}
                    
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kashrut Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/30">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Kaschrutaufsicht
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Alle unsere Speisen werden unter strenger Kaschrutaufsicht der
                  ORD (Orthodoxe Rabbinerkonferenz Deutschland) zubereitet.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">
                      Oberrabbiner David Geballe
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Rabbinatsaufsicht ORD
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">
                      Oberrabbiner Shimon Lewin
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Rabbinatsaufsicht ORD
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  Auf Wunsch erfolgt die Aufsicht auch durch Chabad Düsseldorf
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coverage Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-20"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Wo wir tätig sind
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Von Düsseldorf aus beliefern wir Veranstaltungen in ganz
                Deutschland
              </p>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Düsseldorf",
                  "Köln",
                  "Duisburg",
                  "Essen",
                  "Dortmund",
                  "Frankfurt",
                  "Berlin",
                  "Und viele weitere Städte",
                ].map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <p className="font-semibold text-foreground">{city}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-12 border border-primary/20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bereit für Ihr kulinarisches Erlebnis?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und
              lassen Sie uns gemeinsam Ihr perfektes Menü zusammenstellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <Button size="lg" className="px-8">
                  Menü ansehen
                </Button>
              </Link>
              <Link href="/gerichte">
                <Button size="lg" variant="outline" className="px-8">
                  Unsere Gerichte
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
