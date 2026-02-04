import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-foreground text-background py-16 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-4">SLAVA BARAEV CATERING</h4>
            <p className="text-sm">
              Authentische kulinarische Vielfalt. Tradition trifft auf Handwerk
              – für dein perfektes Event.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4"></h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-75 transition"></a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75 transition"></a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75 transition"></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">DU HAST FRAGEN?</h4>
              <p className="text-sm font-bold mb-3">SLAVA BARAEV CATERING</p>
              <p className="text-sm mb-1">Grafenberger Allee 277</p>
              <p className="text-sm mb-3">40237 Düsseldorf</p>
              <p className="text-sm mb-2">
                Telefon:{" "}
                <a href="tel:017517770787" className="hover:opacity-75">
                  0175 177 70787
                </a>
              </p>
              <p className="text-sm mb-2">
                Telefon:{" "}
                <a href="tel:021123942900" className="hover:opacity-75">
                  0211 239 42900
                </a>
              </p>
              <p className="text-sm">
                Kontakt:{" "}
                <a
                  href="mailto:info@shemesh-restaurant.de"
                  className="hover:opacity-75"
                >
                  info@shemesh-restaurant.de
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">FOLGE UNS</h4>
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:opacity-75 transition">
                  Facebook
                </a>
                <a href="#" className="hover:opacity-75 transition">
                  Instagram
                </a>
                <a href="#" className="hover:opacity-75 transition">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p>
            © 2025, SLAVA BARAEV CATERING |{" "}
            <a href="/datenschutz" className="hover:opacity-75">
              Datenschutzerklärung
            </a>{" "}
            |{" "}
            <a href="/impressum" className="hover:opacity-75">
              Impressum
            </a>{" "}
            |{" "}
            <a href="/agb" className="hover:opacity-75">
              AGB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
