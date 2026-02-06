"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/images/cateringbilder/Hauptseitebild (2).jpeg",
      alt: "Hauptseitebild",
      title: "Hauptseitebild",
    },
    {
      src: "/images/cateringbilder/Fischplatte.jpeg",
      alt: "Fischplatte",
      title: "Fischplatte",
    },
    {
      src: "/images/cateringbilder/Fleischplatte.jpeg",
      alt: "Fleischplatte",
      title: "Fleischplatte",
    },
    {
      src: "/images/cateringbilder/Hummus mit Falafel.jpeg",
      alt: "Hummus mit Falafel",
      title: "Hummus mit Falafel",
    },
    {
      src: "/images/cateringbilder/Hummus.jpeg",
      alt: "Hummus",
      title: "Hummus",
    },
    {
      src: "/images/cateringbilder/Israelischer Salat.jpeg",
      alt: "Israelischer Salat",
      title: "Israelischer Salat",
    },
    {
      src: "/images/cateringbilder/Kartoffeln Salat nach Israelischer Art.jpeg",
      alt: "Kartoffeln Salat",
      title: "Kartoffeln Salat nach Israelischer Art",
    },
    {
      src: "/images/cateringbilder/Klassische Rotebete Salat mit Pflaumen und Walnüssen, Mayonnaise.jpeg",
      alt: "Rote Bete Salat",
      title: "Klassische Rote Bete Salat",
    },
    {
      src: "/images/cateringbilder/Mohren Salat.jpeg",
      alt: "Möhren Salat",
      title: "Möhren Salat",
    },
    {
      src: "/images/cateringbilder/Nudeln nach Italien Art.jpeg",
      alt: "Nudeln nach Italien Art",
      title: "Nudeln nach Italien Art",
    },
    {
      src: "/images/cateringbilder/Obstplatte.jpeg",
      alt: "Obstplatte",
      title: "Obstplatte",
    },
    {
      src: "/images/cateringbilder/Süßkartoffeln mit Rotebete und Kichererbsen.jpeg",
      alt: "Süßkartoffeln",
      title: "Süßkartoffeln mit Rote Bete und Kichererbsen",
    },
    {
      src: "/images/cateringbilder/WeißkohlRotkohl Salat mit Erbsen.jpeg",
      alt: "Weißkohl/Rotkohl Salat",
      title: "Weißkohl/Rotkohl Salat mit Erbsen",
    },
    {
      src: "/images/cateringbilder/Eingelegte Gemüse.jpeg",
      alt: "Eingelegte Gemüse",
      title: "Eingelegte Gemüse",
    },
    {
      src: "/images/cateringbilder/Auberginen ganz mit frischen Tomaten und Kräutern.jpeg",
      alt: "Auberginen",
      title: "Auberginen mit frischen Tomaten und Kräutern",
    },
    {
      src: "/images/cateringbilder/Garten Salat ( Spinat, Tomaten und Rucola).jpeg",
      alt: "Garten Salat",
      title: "Garten Salat (Spinat, Tomaten und Rucola)",
    },
    {
      src: "/images/cateringbilder/Gefühltefisch auf Anfrage.jpeg",
      alt: "Gefüllter Fisch",
      title: "Gefüllter Fisch auf Anfrage",
    },
    {
      src: "/images/cateringbilder/Sushi auf Anfrage.jpeg",
      alt: "Sushi",
      title: "Sushi auf Anfrage",
    },
    {
      src: "/images/cateringbilder/Chala Brot auf Anfrage.jpeg",
      alt: "Chala Brot",
      title: "Chala Brot auf Anfrage",
    },
    {
      src: "/images/cateringbilder/Chala BrotBrötchen auf Anfrage.jpeg",
      alt: "Chala Brötchen",
      title: "Chala Brötchen auf Anfrage",
    },
    {
      src: "/images/cateringbilder/Galerie Bilder.jpeg",
      alt: "Galerie",
      title: "Galerie",
    },
    {
      src: "/images/cateringbilder/Neu/Blini mit Karrtoffeln.jpg",
      alt: "Blini mit Kartoffeln",
      title: "Blini mit Kartoffeln",
    },
    {
      src: "/images/cateringbilder/Neu/Funcheza Salat.jpg",
      alt: "Funcheza Salat",
      title: "Funcheza Salat",
    },
    {
      src: "/images/cateringbilder/Neu/galeri bilder.jpg",
      alt: "Galerie Übersicht",
      title: "Galerie Übersicht",
    },
    {
      src: "/images/cateringbilder/Neu/galerie.JPG",
      alt: "Galerie",
      title: "Galerie",
    },
    {
      src: "/images/cateringbilder/Neu/Hering unter rotebetemantel.jpg",
      alt: "Hering unter Rote Bete Mantel",
      title: "Hering unter Rote Bete Mantel",
    },
    {
      src: "/images/cateringbilder/Neu/Rotebete mit salzgurken.jpg",
      alt: "Rote Bete mit Salzgurken",
      title: "Rote Bete mit Salzgurken",
    },
    {
      src: "/images/cateringbilder/Auberginen Satte_jpg.jpg",
      alt: "Auberginen Satte",
      title: "Auberginen Satte",
    },
    {
      src: "/images/cateringbilder/Heringmantel_2_.jpg",
      alt: "Hering unter Rote Bete Mantel",
      title: "Hering unter Rote Bete Mantel",
    },
    {
      src: "/images/cateringbilder/lachsfilet im cocos limette sauce.jpg",
      alt: "Lachsfilet in Kokos-Limetten-Sauce",
      title: "Lachsfilet in Kokos-Limetten-Sauce",
    },
    {
      src: "/images/cateringbilder/plov.jpg",
      alt: "Plov nach Usbekischer Art",
      title: "Plov nach Usbekischer Art",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Unsere Galerie
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie die Vielfalt unserer kulinarischen Kreationen und
            lassen Sie sich inspirieren
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <DialogTitle className="sr-only">Bildansicht</DialogTitle>
            {selectedImage && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Vergrößerte Ansicht"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
