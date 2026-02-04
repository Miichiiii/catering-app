import Footer from "@/components/footer";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="mb-4">
            Personenbezogene Daten (nachfolgend zumeist nur „Daten" genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
          </p>
          <p className="mb-4">
            Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO" genannt), gilt als „Verarbeitung" jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
          </p>
          <p className="mb-4">
            Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Unsere Datenschutzerklärung ist wie folgt gegliedert:</h2>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Informationen über uns als Verantwortliche</li>
              <li>Rechte der Nutzer und Betroffenen</li>
              <li>Informationen zur Datenverarbeitung</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">I. Informationen über uns als Verantwortliche</h2>
            <p className="mb-2">Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
            <p className="mb-2 font-semibold">Shemesh Restaurant</p>
            <p className="mb-2">Jakov Baraev</p>
            <p className="mb-2">Grafenberger Allee 277</p>
            <p className="mb-4">40237 Düsseldorf</p>
            <p className="mb-2">
              Telefon: <a href="tel:01751770787" className="text-primary hover:underline">0175 177 0787</a> / <a href="tel:021123942900" className="text-primary hover:underline">0211 239 42900</a>
            </p>
            <p className="mb-4">
              E-Mail: <a href="mailto:info@shemesh-restaurant.de" className="text-primary hover:underline">info@shemesh-restaurant.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">II. Rechte der Nutzer und Betroffenen</h2>
            <p className="mb-4">Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</p>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
              <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
              <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
              <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
              <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
            </ul>
            <p className="mb-4">
              Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.
            </p>
            <p className="mb-4">
              Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">III. Informationen zur Datenverarbeitung</h2>
            <p className="mb-6">
              Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.
            </p>

            <h3 className="text-xl font-semibold mb-3">Cookie Manager</h3>
            <p className="mb-4">
              Zur Einholung einer Einwilligung zum Einsatz von technisch nicht notwendigen Cookies auf der Website, setzt der Anbieter einen Cookie-Manager ein.
            </p>
            <p className="mb-4">
              Bei dem Aufruf der Website wird ein Cookie mit den Einstellungsinformationen auf dem Endgerät des Nutzers abgelegt, sodass bei einem weiteren Besuch die Abfrage in Bezug auf die Einwilligung nicht erfolgen muss.
            </p>
            <p className="mb-6">
              Das Cookie ist erforderlich um eine rechtskonforme Einwilligung des Nutzers einzuholen. Die Installation der Cookies kann der Nutzer durch Einstellungen seines Browsers verhindern bzw. beenden.
            </p>

            <h3 className="text-xl font-semibold mb-3">Cookies</h3>
            
            <h4 className="text-lg font-semibold mb-2">a) Sitzungs-Cookies/Session-Cookies</h4>
            <p className="mb-4">
              Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet.
            </p>
            <p className="mb-4">
              Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.
            </p>
            <p className="mb-4">
              Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.
            </p>
            <p className="mb-4">
              Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
            </p>
            <p className="mb-6">Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</p>

            <h4 className="text-lg font-semibold mb-2">b) Drittanbieter-Cookies</h4>
            <p className="mb-6">
              Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet. Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.
            </p>

            <h4 className="text-lg font-semibold mb-2">c) Beseitigungsmöglichkeit</h4>
            <p className="mb-4">
              Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support.
            </p>
            <p className="mb-6">
              Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind.
            </p>

            <h3 className="text-xl font-semibold mb-3">Kontaktanfragen / Kontaktmöglichkeit</h3>
            <p className="mb-4">
              Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
            </p>
            <p className="mb-4">Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
            <p className="mb-6">
              Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.
            </p>

            <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
            <p className="mb-4">
              Falls Sie sich für unseren kostenlosen Newsletter anmelden, werden die von Ihnen hierzu abgefragten Daten, also Ihre E-Mail-Adresse sowie – optional – Ihr Name und Ihre Anschrift, an uns übermittelt. Gleichzeitig speichern wir die IP-Adresse des Internetanschlusses von dem aus Sie auf unseren Internetauftritt zugreifen sowie Datum und Uhrzeit Ihrer Anmeldung. Im Rahmen des weiteren Anmeldevorgangs werden wir Ihre Einwilligung in die Übersendung des Newsletters einholen, den Inhalt konkret beschreiben und auf diese Datenschutzerklärung verwiesen. Die dabei erhobenen Daten verwenden wir ausschließlich für den Newsletter-Versand – sie werden deshalb insbesondere auch nicht an Dritte weitergegeben.
            </p>
            <p className="mb-4">Rechtsgrundlage hierbei ist Art. 6 Abs. 1 lit. a) DSGVO.</p>
            <p className="mb-6">
              Die Einwilligung in den Newsletter-Versand können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen oder den in jedem Newsletter enthaltenen Abmeldelink betätigen.
            </p>

            <h3 className="text-xl font-semibold mb-3">Facebook</h3>
            <p className="mb-4">
              Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der Plattform Facebook.
            </p>
            <p className="mb-4">
              Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland, verantwortlich.
            </p>
            <p className="mb-4">
              Der Datenschutzbeauftragte von Facebook kann über ein Kontaktformular erreicht werden:{" "}
              <a href="https://www.facebook.com/help/contact/540977946302970" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/help/contact/540977946302970
              </a>
            </p>
            <p className="mb-4">
              Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt. Diese Vereinbarung ist unter folgendem Link abrufbar:{" "}
              <a href="https://www.facebook.com/legal/terms/page_controller_addendum" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/legal/terms/page_controller_addendum
              </a>
            </p>
            <p className="mb-4">
              Weitere Informationen finden Sie in der Datenrichtlinie von Facebook:{" "}
              <a href="https://www.facebook.com/privacy/explanation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/privacy/explanation
              </a>
            </p>
            <p className="mb-6">
              Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Meta Platforms Ireland Limited auch über die Meta Platforms, Inc., 1601 Willow Road, Menlo Park, California 94025 in den USA erfolgt.
            </p>

            <h3 className="text-xl font-semibold mb-3">Instagram</h3>
            <p className="mb-4">
              Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der Plattform Instagram.
            </p>
            <p className="mb-4">
              Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland, verantwortlich.
            </p>
            <p className="mb-4">
              Weitere Informationen finden Sie in der Datenrichtlinie von Instagram:{" "}
              <a href="https://help.instagram.com/519522125107875" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://help.instagram.com/519522125107875
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Fonts</h3>
            <p className="mb-4">
              In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
            </p>
            <p className="mb-4">
              Weitere Informationen:{" "}
              <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Maps</h3>
            <p className="mb-4">
              In unserem Internetauftritt setzen wir Google Maps zur Darstellung unseres Standorts sowie zur Erstellung einer Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4">
              Im Falle einer von Ihnen erteilten Einwilligung für diese Verarbeitung ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in der Optimierung der Funktionalität unseres Internetauftritts.
            </p>
            <p className="mb-4">
              Die Nutzung von Google Maps sowie der über Google Maps erlangten Informationen erfolgt nach den{" "}
              <a href="https://policies.google.com/terms?gl=DE&hl=de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Google-Nutzungsbedingungen
              </a>{" "}
              und den{" "}
              <a href="https://www.google.com/intl/de_de/help/terms_maps.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Geschäftsbedingungen für Google Maps
              </a>
              .
            </p>
          </section>

          <div className="mt-8 pt-8 border-t text-sm text-muted-foreground">
            <p>Muster-Datenschutzerklärung der Anwaltskanzlei Weiß & Partner</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
