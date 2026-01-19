"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { foodItems } from "@/lib/food-data";
import Image from "next/image";

interface FoodSelectionStepProps {
  category: string;
  selectedItems: string[];
  onToggleItem: (itemId: string) => void;
  limit: number;
}

export default function FoodSelectionStep({
  category,
  selectedItems,
  onToggleItem,
  limit,
}: FoodSelectionStepProps) {
  const categoryKey = category
    .toLowerCase()
    .replace(/ & /g, "_")
    .replace(/ /g, "_");
  const items = foodItems[categoryKey] || [];

  const categoryNameMap: Record<string, string> = {
    vorspeisen: "Vorspeisen",
    hauptgaenge: "Hauptgänge",
    fingerfoods: "Fingerfoods",
    beilagen: "Beilagen",
    dips_saucen: "Dips & Saucen",
    desserts: "Desserts",
    suppen: "Suppen",
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-foreground">
          {categoryNameMap[categoryKey] || category}
        </h2>
        <div className="text-sm font-bold text-primary">
          {selectedItems.length} von {limit}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Wähle deine Lieblingsgericht aus
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            className={`overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
              selectedItems.includes(item.id)
                ? "ring-2 ring-primary bg-primary/5"
                : ""
            }`}
            onClick={() => {
              if (
                selectedItems.includes(item.id) ||
                selectedItems.length < limit
              ) {
                onToggleItem(item.id);
              }
            }}
          >
            {/* Bild */}
            <div className="relative w-full h-48 bg-muted">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback wenn Bild nicht geladen werden kann
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-6xl">🍽️</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleItem(item.id);
                }}
                disabled={
                  !selectedItems.includes(item.id) &&
                  selectedItems.length >= limit
                }
                variant={
                  selectedItems.includes(item.id) ? "default" : "outline"
                }
                className={`w-full ${
                  selectedItems.includes(item.id)
                    ? "bg-primary text-primary-foreground"
                    : ""
                }`}
              >
                {selectedItems.includes(item.id) ? "✓ Ausgewählt" : "Auswählen"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
