"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Startseite", isLink: true },
    { href: "/ueber-uns", label: "Über uns", isLink: true },
    { href: "/menu", label: "Speisekarte", isLink: true },
    { href: "/galerie", label: "Galerie", isLink: true },
    { href: "/#pricing", label: "Menüs", isLink: true },
    { href: "/#process", label: "Ablauf", isLink: true },
    { href: "/#footer", label: "Kontakt", isLink: true },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition"
        >
          SLAVA BARAEV CATERING
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isLink ? (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü öffnen">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-primary">
                SLAVA BARAEV CATERING
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) =>
                item.isLink ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-foreground hover:text-primary transition py-2 border-b border-border"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg text-foreground hover:text-primary transition py-2 border-b border-border"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
