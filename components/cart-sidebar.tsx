import { Card } from "@/components/ui/card";

interface CartSidebarProps {
  packageName: "classic" | "gold" | "premium";
  guestCount: number | null;
  basePrice: number;
  selectedItems: Record<string, string[]>;
  packageLimits: Record<string, number>;
  selectedDrinks?: Record<string, number>;
  selectedAccessories?: Record<string, number>;
  drinksTotal?: number;
  accessoriesTotal?: number;
  subTotal: number;
  vat: number;
  serviceFee: number;
  total: number;
}

export default function CartSidebar({
  packageName,
  guestCount,
  basePrice,
  selectedItems,
  packageLimits,
  selectedDrinks,
  selectedAccessories,
  drinksTotal = 0,
  accessoriesTotal = 0,
  subTotal,
  vat,
  serviceFee,
  total,
}: CartSidebarProps) {
  const categoryLabels: Record<string, string> = {
    vorspeisen: "Vorspeisen",
    hauptgaenge: "Hauptgänge",
    fingerfoods: "Fingerfoods",
    beilagen: "Beilagen",
    dips_saucen: "Suppen, Dipps & Saucen",
    desserts: "Desserts",
  };

  const packageNameMap = {
    classic: "CLASSIC",
    gold: "GOLD",
    premium: "PREMIUM",
  };

  return (
    <div className="lg:sticky lg:top-24 h-fit">
      <Card className="p-6 bg-accent text-accent-foreground">
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">
            ALL INKLUSIVE 🤍 {packageNameMap[packageName]}
          </h3>
          {guestCount && (
            <p className="text-sm">
              {guestCount} Personen x {basePrice.toFixed(2).replace(".", ",")}€
            </p>
          )}
          {guestCount && (
            <p className="text-2xl font-bold mt-2">
              {(guestCount * basePrice).toFixed(2).replace(".", ",")}€
            </p>
          )}
        </div>

        {/* Selection Progress */}
        <div className="space-y-2 mb-6 pb-6 border-b border-accent-foreground/20">
          {Object.entries(categoryLabels).map(([key, label]) => {
            const limit = packageLimits[key];
            // Zeige nur Kategorien mit Limit > 0
            if (limit === 0) return null;

            return (
              <div key={key} className="text-sm">
                <div className="font-semibold">{label}</div>
                <div className="text-xs opacity-75">
                  {selectedItems[key]?.length || 0} von {limit}
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Fee */}
        {serviceFee > 0 && (
          <div className="mb-6 pb-6 border-b border-accent-foreground/20">
            <div className="flex justify-between text-sm mb-2">
              <span>Servicegebühr</span>
              <span>bis 20 Personen</span>
            </div>
            <div className="text-lg font-bold">
              {serviceFee.toFixed(2).replace(".", ",")}€
            </div>
          </div>
        )}

        {/* Drinks & Accessories */}
        {(drinksTotal > 0 || accessoriesTotal > 0) && (
          <div className="mb-6 pb-6 border-b border-accent-foreground/20">
            {drinksTotal > 0 && (
              <div className="flex justify-between text-sm mb-2">
                <span>Getränke</span>
                <span>{drinksTotal.toFixed(2).replace(".", ",")}€</span>
              </div>
            )}
            {accessoriesTotal > 0 && (
              <div className="flex justify-between text-sm">
                <span>Zubehör</span>
                <span>{accessoriesTotal.toFixed(2).replace(".", ",")}€</span>
              </div>
            )}
          </div>
        )}

        {/* Calculation */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Gesamtbetrag netto</span>
            <span>{subTotal.toFixed(2).replace(".", ",")}€</span>
          </div>
          <div className="flex justify-between">
            <span>MwSt. 7%</span>
            <span>{vat.toFixed(2).replace(".", ",")}€</span>
          </div>
          <div className="border-t border-accent-foreground/20 pt-3 mt-3">
            <div className="flex justify-between font-bold text-base">
              <span>Gesamtbetrag brutto</span>
              <span>{total.toFixed(2).replace(".", ",")}€</span>
            </div>
            <div className="text-xs opacity-75 mt-1">
              inkl. {vat.toFixed(2).replace(".", ",")}€ MwSt.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
