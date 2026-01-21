"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface DrinksStepProps {
  selectedDrinks: Record<string, number>;
  onDrinksChange: (drinks: Record<string, number>) => void;
}

export default function DrinksStep({
  selectedDrinks,
  onDrinksChange,
}: DrinksStepProps) {
  const drinkCategories = [
    {
      name: "Wasser",
      items: [
        {
          id: "mineralwasser-still",
          name: "Mineralwasser Still",
          description: "24x Flaschen 0,25l inkl. 5,10€ Pfand",
          price: 42.9,
        },
        {
          id: "mineralwasser-sprudel",
          name: "Mineralwasser Sprudel",
          description: "24x Flaschen 0,25l inkl. 5,10€ Pfand",
          price: 42.9,
        },
      ],
    },
    {
      name: "Softdrinks",
      items: [
        {
          id: "coca-cola",
          name: "Coca Cola",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "coca-cola-zero",
          name: "Coca Cola Zero",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "fanta-orange",
          name: "Fanta Orange",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
        {
          id: "sprite",
          name: "Sprite",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 45.9,
        },
      ],
    },
    {
      name: "Schorlen",
      items: [
        {
          id: "apfelschorle",
          name: "Apfelschorle",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 48.0,
        },
      ],
    },
    {
      name: "Säfte",
      items: [
        {
          id: "orangensaft",
          name: "Orangensaft",
          description: "6x Flaschen 1l inkl. 1,50€ Pfand",
          price: 48.0,
        },
      ],
    },
    {
      name: "Alkoholfreie Getränke",
      items: [
        {
          id: "fassbrause-zitrone",
          name: "Fassbrause Zitrone",
          description: "24x Flaschen 0,33l inkl. 5,10€ Pfand",
          price: 49.9,
        },
      ],
    },
  ];

  const handleQuantityChange = (itemId: string, change: number) => {
    const currentQuantity = selectedDrinks[itemId] || 0;
    const newQuantity = Math.max(0, currentQuantity + change);

    const updatedDrinks = { ...selectedDrinks };
    if (newQuantity === 0) {
      delete updatedDrinks[itemId];
    } else {
      updatedDrinks[itemId] = newQuantity;
    }

    onDrinksChange(updatedDrinks);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Getränke</h2>
        <p className="text-muted-foreground">
          Wählen Sie Ihre gewünschten Getränke aus (optional)
        </p>
      </div>

      {drinkCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground border-b pb-2">
            {category.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.map((item) => {
              const quantity = selectedDrinks[item.id] || 0;
              return (
                <Card
                  key={item.id}
                  className="p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {item.price.toFixed(2)}€
                      </span>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={quantity === 0}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center font-semibold">
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
