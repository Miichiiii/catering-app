import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";

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
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          So funktioniert unser Catering 💡
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {steps.map((step) => (
            <Card key={step.number} className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-accent-foreground font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-amber-500 bg-amber-50 dark:bg-amber-950/20 p-6 shadow-lg">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="text-4xl">⚠️</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                WICHTIG
              </h3>
              <p className="text-foreground leading-relaxed">
                Sollte sich im Nachgang etwas an deiner Buchung ändern, melde
                dich gerne bei uns telefonisch oder per E-Mail. Wir setzen alles
                daran, deine Wünsche bestmöglich umzusetzen.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
