"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AccessoriesStepProps {
  selectedAccessories: Record<string, number>;
  onAccessoriesChange: (accessories: Record<string, number>) => void;
}

export default function AccessoriesStep({
  selectedAccessories,
  onAccessoriesChange,
}: AccessoriesStepProps) {
  const accessoryCategories = [
    {
      name: "Geschirr & Besteck",
      items: [
        {
          id: "speiseteller-besteck-30",
          name: "Speiseteller & Besteck 30er Set",
          description:
            "Vermietung inkl. Reinigung\nBeinhaltet:\n- 30x Speiseteller\n- 30x Speisegabel\n- 30x Speisemesser",
          price: 84.9,
        },
        {
          id: "suppenschuessel-loeffel-30",
          name: "Suppenschüssel & Löffel 30er Set",
          description:
            "Vermietung inkl. Reinigung\nBeinhaltet:\n- 30x Suppenschüssel\n- 30x Löffel",
          price: 65.9,
        },
        {
          id: "dessertteller-besteck-30",
          name: "Dessertteller & Besteck 30er Set",
          description:
            "Vermietung inkl. Reinigung\nBeinhaltet:\n- 30x Dessertteller\n- 30x Dessertgabel oder Dessertlöffel",
          price: 65.9,
        },
      ],
    },
    {
      name: "Personal",
      items: [
        {
          id: "aufbau-abholung",
          name: "Aufbau/Abholung",
          description:
            "Das Buffet wird von unserem Team aufgebaut und angerichtet.\nAm darauffolgenden Werktag wird das Buffet zwischen 10:00 - 13:00 Uhr abgeholt.\n\n* Für eine reibungslose Abholung muss das Equipment frei von Essensresten sein und in den bereitgestellten Boxen bereitstehen",
          price: 95.2,
        },
      ],
    },
    {
      name: "Dekoration",
      items: [
        {
          id: "buffet-deko-podeste",
          name: "Elegante Buffetdekoration mit weißen Podesten",
          description:
            "Eine stilvolle Buffetdekoration mit weiße Display-Podeste sorgen für unterschiedliche Höhen und eine elegante Präsentation der Speisen. Kombiniert mit feinen Tischläufern, floralen Kunstblumen-Arrangements entsteht ein harmonisches Gesamtbild – einladend, modern und hochwertig.",
          price: 239.9,
        },
        {
          id: "tischdecke",
          name: "Tischdecke",
          description:
            "Unsere Tischdecken verleihen Ihrem Event eine elegante Atmosphäre und schützen gleichzeitig Ihre Tische. Aus hochwertigem Material, passend zu jeder Feier, sorgen sie für einen stilvollen Rahmen.\n120x100cm. Vermietung inkl. Reinigung",
          price: 20.0,
        },
        {
          id: "buffet-deko-detail",
          name: "Buffetdekoration mit Liebe zum Detail",
          description:
            "Eine stilvolle Kombination aus feinen Tischläufern, natürlichen Holz-Etageren, floralen Akzenten mit Kunstblumen.",
          price: 189.9,
        },
        {
          id: "buffet-praesentation-ebenen",
          name: "Stilvolle Buffetpräsentation auf mehreren Ebenen",
          description:
            "Für eine einladende und stilvolle Präsentation kombinieren wir weiße Deko-Podeste mit warmen Holz-Etageren – so entsteht ein spannendes Spiel aus Höhen, Materialien und Strukturen. Die Speisen werden ansprechend angerichtet, begleitet von weißen Tischdecken, dezenten Tischläufern und ausgewählten Kunstblumen. Eine Dekoration, die schlicht wirkt, aber im Detail überzeugt – charmant, hochwertig und mit Liebe gestaltet.",
          price: 289.9,
        },
      ],
    },
  ];

  const handleQuantityChange = (itemId: string, change: number) => {
    const currentQuantity = selectedAccessories[itemId] || 0;
    const newQuantity = Math.max(0, currentQuantity + change);

    const updatedAccessories = { ...selectedAccessories };
    if (newQuantity === 0) {
      delete updatedAccessories[itemId];
    } else {
      updatedAccessories[itemId] = newQuantity;
    }

    onAccessoriesChange(updatedAccessories);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Zubehör</h2>
        <p className="text-muted-foreground">
          Wählen Sie Ihr gewünschtes Zubehör aus (optional)
        </p>
      </div>

      {accessoryCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground border-b pb-2">
            {category.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item) => {
              const quantity = selectedAccessories[item.id] || 0;
              return (
                <Card
                  key={item.id}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xl font-bold text-primary">
                        {item.price.toFixed(2)}€
                      </span>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={quantity === 0}
                        >
                          -
                        </Button>
                        <span className="w-10 text-center font-semibold text-lg">
                          {quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
