import Footer from "@/components/footer";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Verträge zwischen Shemesh Restaurant & Bar, Istam Baraeva,
              Grafenberger Allee 277, 40237 Düsseldorf (nachfolgend "Anbieter"
              genannt) und dem Auftraggeber (nachfolgend "Kunde" genannt) über
              die Erbringung von Catering-Dienstleistungen.
            </p>
            <p className="mb-4">
              Abweichende, entgegenstehende oder ergänzende Allgemeine
              Geschäftsbedingungen des Kunden werden nur dann und insoweit
              Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich
              schriftlich zugestimmt hat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">§ 2 Vertragsschluss</h2>
            <p className="mb-4">
              Der Vertrag kommt durch die schriftliche Auftragsbestätigung des
              Anbieters oder durch die tatsächliche Leistungserbringung
              zustande. Angebote des Anbieters sind freibleibend und
              unverbindlich, sofern nicht ausdrücklich etwas anderes vereinbart
              wurde.
            </p>
            <p className="mb-4">
              Anfragen des Kunden stellen ein unverbindliches Angebot dar. Der
              Anbieter kann dieses Angebot innerhalb von 14 Tagen durch eine
              schriftliche Auftragsbestätigung annehmen.
            </p>
            <p className="mb-4">
              Der Kunde ist an seine Bestellung für einen Zeitraum von 7 Tagen
              gebunden. Die Annahmefrist beginnt am Tag nach der Absendung der
              Bestellung und endet mit Ablauf des siebten Tages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">§ 3 Leistungsumfang</h2>
            <p className="mb-4">
              Der Umfang der zu erbringenden Leistungen ergibt sich aus der
              Auftragsbestätigung. Nachträgliche Änderungen des Leistungsinhalts
              bedürfen der schriftlichen Bestätigung durch den Anbieter.
            </p>
            <p className="mb-4">
              Der Anbieter behält sich das Recht vor, die vereinbarte Leistung
              durch eine gleichwertige Leistung zu ersetzen, sofern dies für den
              Kunden zumutbar ist und die wesentlichen Vertragspflichten nicht
              berührt werden.
            </p>
            <p className="mb-4">
              Alle Mengenangaben (z.B. Personenanzahl) müssen spätestens 7 Tage
              vor dem Veranstaltungstermin verbindlich mitgeteilt werden. Später
              gemeldete Änderungen können nur nach Verfügbarkeit berücksichtigt
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 4 Preise und Zahlungsbedingungen
            </h2>
            <p className="mb-4">
              Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise.
              Alle Preise verstehen sich in Euro und enthalten die gesetzliche
              Mehrwertsteuer.
            </p>
            <p className="mb-4">
              Bei einer Teilnehmerzahl von weniger als 20 Personen kann ein
              Mindermengenzuschlag berechnet werden. Bei besonders aufwendigen
              Veranstaltungen oder ungünstigen Anfahrtswegen kann ein
              angemessener Zuschlag vereinbart werden.
            </p>
            <p className="mb-4">
              Soweit nicht anders vereinbart, ist eine Anzahlung in Höhe von 30%
              des Gesamtpreises bei Auftragsbestätigung fällig. Der Restbetrag
              ist spätestens 3 Tage vor der Veranstaltung zu zahlen.
            </p>
            <p className="mb-4">
              Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in
              Höhe von 5 Prozentpunkten über dem Basiszinssatz zu berechnen. Die
              Geltendmachung weiterer Schäden bleibt unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 5 Lieferung und Leistungserbringung
            </h2>
            <p className="mb-4">
              Der Anbieter erbringt seine Leistungen zu dem vereinbarten Termin
              am vereinbarten Ort. Die Lieferung erfolgt, soweit nicht anders
              vereinbart, bis zur ersten verschließbaren Tür der Lieferadresse.
            </p>
            <p className="mb-4">
              Der Kunde hat sicherzustellen, dass am Veranstaltungsort die
              erforderlichen Anschlüsse (Strom, Wasser, etc.) und ausreichend
              Platz für den Auf- und Abbau zur Verfügung stehen. Notwendige
              Genehmigungen sind vom Kunden einzuholen.
            </p>
            <p className="mb-4">
              Verlängert sich die Veranstaltung über den vereinbarten Zeitraum
              hinaus, so kann der Anbieter einen angemessenen Aufpreis für die
              Mehrleistung berechnen.
            </p>
            <p className="mb-4">
              Leihgeschirr, Besteck und sonstige Ausstattung bleiben Eigentum
              des Anbieters und sind pfleglich zu behandeln. Beschädigungen oder
              Verlust gehen zu Lasten des Kunden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 6 Stornierung und Rücktritt
            </h2>
            <p className="mb-4">
              Stornierungen oder Verschiebungen durch den Kunden sind nur
              schriftlich möglich. Es gelten folgende Stornierungsfristen und
              -gebühren:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Bis 30 Tage vor der Veranstaltung: kostenfrei</li>
              <li>
                29 bis 14 Tage vor der Veranstaltung: 30% des Auftragswertes
              </li>
              <li>
                13 bis 7 Tage vor der Veranstaltung: 50% des Auftragswertes
              </li>
              <li>
                Weniger als 7 Tage vor der Veranstaltung: 80% des Auftragswertes
              </li>
              <li>
                Am Tag der Veranstaltung oder Nichterscheinen: 100% des
                Auftragswertes
              </li>
            </ul>
            <p className="mb-4">
              Eine Reduzierung der Teilnehmerzahl ist bis zu 7 Tage vor der
              Veranstaltung kostenfrei möglich. Bei kurzfristigeren Änderungen
              wird die ursprünglich vereinbarte Personenzahl berechnet.
            </p>
            <p className="mb-4">
              Der Anbieter ist berechtigt, vom Vertrag zurückzutreten, wenn
              höhere Gewalt oder sonstige, vom Anbieter nicht zu vertretende
              Umstände die Leistungserbringung unmöglich machen. In diesem Fall
              werden bereits geleistete Zahlungen vollständig erstattet.
              Weitergehende Ansprüche sind ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 7 Allergene und besondere Anforderungen
            </h2>
            <p className="mb-4">
              Der Kunde ist verpflichtet, Allergien, Unverträglichkeiten oder
              spezielle Ernährungswünsche (vegetarisch, vegan, halal, koscher,
              etc.) rechtzeitig, spätestens 7 Tage vor der Veranstaltung,
              mitzuteilen.
            </p>
            <p className="mb-4">
              Der Anbieter bemüht sich, auf besondere Anforderungen einzugehen,
              kann jedoch keine absolute Garantie für die vollständige
              Abwesenheit von Allergenen geben, da in der Küche verschiedene
              Lebensmittel verarbeitet werden.
            </p>
            <p className="mb-4">
              Bei nicht oder zu spät gemeldeten Allergien oder
              Unverträglichkeiten ist eine Haftung des Anbieters ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 8 Gewährleistung und Haftung
            </h2>
            <p className="mb-4">
              Der Anbieter haftet für Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit, die auf einer vorsätzlichen oder
              fahrlässigen Pflichtverletzung des Anbieters oder eines
              gesetzlichen Vertreters oder Erfüllungsgehilfen des Anbieters
              beruhen.
            </p>
            <p className="mb-4">
              Für sonstige Schäden haftet der Anbieter nur bei Vorsatz und
              grober Fahrlässigkeit. Dies gilt nicht für Schäden aus der
              Verletzung wesentlicher Vertragspflichten; in diesem Fall ist die
              Haftung auf den vertragstypischen, vorhersehbaren Schaden
              begrenzt.
            </p>
            <p className="mb-4">
              Mängel sind unverzüglich, spätestens jedoch innerhalb von 24
              Stunden nach Leistungserbringung, schriftlich anzuzeigen. Bei
              berechtigten Mängelrügen wird der Anbieter nach seiner Wahl
              nachbessern oder eine angemessene Minderung des Preises gewähren.
            </p>
            <p className="mb-4">
              Die Haftung für indirekte Schäden und Folgeschäden, insbesondere
              entgangenen Gewinn, ist ausgeschlossen, soweit nicht Vorsatz oder
              grobe Fahrlässigkeit vorliegt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 9 Hygiene- und Lebensmittelsicherheit
            </h2>
            <p className="mb-4">
              Der Anbieter gewährleistet die Einhaltung aller relevanten
              lebensmittelrechtlichen Vorschriften und Hygienestandards. Alle
              Speisen werden nach den geltenden HACCP-Richtlinien zubereitet und
              transportiert.
            </p>
            <p className="mb-4">
              Der Kunde ist verpflichtet, die gelieferten Speisen sachgerecht zu
              lagern und innerhalb der vom Anbieter angegebenen Zeit zu
              verzehren. Bei Nichteinhaltung dieser Vorgaben ist jegliche
              Haftung des Anbieters ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 10 Geheimhaltung und Datenschutz
            </h2>
            <p className="mb-4">
              Beide Vertragsparteien verpflichten sich, alle im Rahmen der
              Geschäftsbeziehung bekannt gewordenen vertraulichen Informationen
              der anderen Partei streng vertraulich zu behandeln.
            </p>
            <p className="mb-4">
              Die Verarbeitung personenbezogener Daten erfolgt gemäß der
              Datenschutz-Grundverordnung (DSGVO). Weitere Informationen finden
              Sie in unserer Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 11 Urheberrecht und Bildrechte
            </h2>
            <p className="mb-4">
              Der Anbieter behält sich das Recht vor, Fotos von der
              Veranstaltung für Werbezwecke (z.B. Website, Social Media) zu
              verwenden, sofern der Kunde dem nicht ausdrücklich widerspricht.
            </p>
            <p className="mb-4">
              Alle vom Anbieter erstellten Angebote, Konzepte und Rezepte sind
              urheberrechtlich geschützt und dürfen ohne schriftliche
              Genehmigung nicht an Dritte weitergegeben oder vervielfältigt
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 12 Schlussbestimmungen
            </h2>
            <p className="mb-4">
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p className="mb-4">
              Erfüllungsort und Gerichtsstand für alle Streitigkeiten aus diesem
              Vertragsverhältnis ist Düsseldorf, sofern der Kunde Kaufmann,
              juristische Person des öffentlichen Rechts oder
              öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className="mb-4">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon
              unberührt. An die Stelle der unwirksamen Bestimmung tritt eine
              wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen
              Bestimmung am nächsten kommt.
            </p>
            <p className="mb-4">
              Änderungen oder Ergänzungen dieser AGB bedürfen zu ihrer
              Wirksamkeit der Schriftform. Dies gilt auch für die Abbedingung
              dieses Schriftformerfordernisses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              § 13 Verbraucherschlichtungsstelle
            </h2>
            <p className="mb-4">
              Zur Beilegung von Streitigkeiten können Verbraucher die Allgemeine
              Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V.,
              Straßburger Str. 8, 77694 Kehl am Rhein anrufen (
              <a
                href="https://www.verbraucher-schlichter.de"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.verbraucher-schlichter.de
              </a>
              ).
            </p>
            <p className="mb-4">
              Der Anbieter ist nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Shemesh Restaurant & Bar</strong>
              <br />
              Istam Baraeva
              <br />
              Grafenberger Allee 277
              <br />
              40237 Düsseldorf
              <br />
              <br />
              Stand: Februar 2026
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
