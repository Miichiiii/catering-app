import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Shemesh - Erstklassiges Catering für jedes Event",
  description:
    "Erstklassiges Catering für jedes Event. Buche dein All Inclusive Menü online. Wähle zwischen Classic, Gold und Premium Paketen für unvergessliche Momente.",
  keywords: [
    "Catering",
    "Event Catering",
    "Hochzeit Catering",
    "Firmen Event",
    "Catering Service",
    "All Inclusive Menü",
  ],
  authors: [{ name: "SLAVA BARAEV CATERING" }],
  creator: "SLAVA BARAEV CATERING",
  publisher: "SLAVA BARAEV CATERING",
  metadataBase: new URL("https://shemesh.medvidov.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shemesh - Erstklassiges Catering für jedes Event",
    description:
      "Buche dein All Inclusive Catering-Menü online. Classic, Gold & Premium Pakete für unvergessliche Events.",
    url: "https://shemesh.medvidov.com",
    siteName: "Shemesh Catering",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Erstelle später ein Open Graph Bild (1200x630px)
        width: 1200,
        height: 630,
        alt: "Shemesh Catering Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shemesh - Erstklassiges Catering für jedes Event",
    description:
      "Buche dein All Inclusive Catering-Menü online. Classic, Gold & Premium Pakete.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
