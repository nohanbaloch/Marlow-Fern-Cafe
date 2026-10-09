import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { site } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Marlow & Fern Café | Brunch, Coffee & Pastries",
    template: "%s | Marlow & Fern Café",
  },
  description:
    "All-day brunch, single-origin coffee, and pastries baked before sunrise. Visit us at 214 Willow Lane in the Riverside District.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/images/hero/hero-brunch.jpg",
        width: 1200,
        height: 630,
        alt: "Marlow & Fern Café brunch spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlow & Fern Café | Brunch, Coffee & Pastries",
    description:
      "All-day brunch, single-origin coffee, and pastries baked before sunrise.",
    images: ["/images/hero/hero-brunch.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Skip to content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Mobile sticky bottom bar — hidden md:+ */}
        <MobileBottomBar />
      </body>
    </html>
  );
}
