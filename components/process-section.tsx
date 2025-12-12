"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Catering zusammenstellen",
      description:
        "Stell dir dein Essen kinderleicht mit unserem praktischen Konfigurator zusammen. Such dir aus vielen leckeren Gerichten genau das aus, was dein Event besonders macht.",
    },
    {
      number: 2,
      title: "Anfrage stellen",
      description:
        "Falls du nicht sofort das Passende findest, kontaktiere uns einfach über unser Kontaktformular oder buche ein persönliches Beratungsgespräch.",
    },
    {
      number: 3,
      title: "Angebot erhalten",
      description:
        "Nachdem du dein Catering zusammengestellt hast, prüfen wir deine Anfrage und erstellen ein unverbindliches Angebot für dich.",
    },
    {
      number: 4,
      title: "Auftragsbestätigung erhalten",
      description:
        "Nach Annahme unseres Angebots benötigen wir eine Anzahlung in Höhe von 30 %, damit deine Buchung verbindlich wird.",
    },
    {
      number: 5,
      title: "Auslieferung",
      description:
        "Es ist so weit – wir liefern dein Catering pünktlich zum vereinbarten Zeitpunkt. Bitte beachte, dass der Aufbau inklusive Dekoration etwa 1–2 Stunden in Anspruch nehmen kann.",
    },
    {
      number: 6,
      title: "Abholung",
      description:
        "Bitte sorge dafür, dass alle Behälter und das Equipment vollständig und möglichst sauber für die Abholung bereitstehen.",
    },
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-foreground"
        >
          So funktioniert unser Catering 💡
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-accent-foreground font-bold">
                      {step.number}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-2 border-amber-500 bg-amber-50 dark:bg-amber-950/20 p-6 shadow-lg">
            <div className="flex gap-4">
              <motion.div
                className="flex-shrink-0"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <div className="text-4xl">⚠️</div>
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  WICHTIG
                </h3>
                <p className="text-foreground leading-relaxed">
                  Sollte sich im Nachgang etwas an deiner Buchung ändern, melde
                  dich gerne bei uns telefonisch oder per E-Mail. Wir setzen
                  alles daran, deine Wünsche bestmöglich umzusetzen.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
