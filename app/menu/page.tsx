import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { Coffee, Info, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our complete menu of all-day brunch classics, single-origin coffees, artisanal teas, and house-baked pastries.",
};

export default function MenuPage() {
  return (
    <div className="py-24 sm:py-28 bg-cream min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
            Fresh Every Morning
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-forest mt-2 mb-4">
            Our Menu
          </h1>
          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
            From sunrise bakes to hearty brunch plates, everything is prepared daily in our kitchen using wholesome, locally-sourced produce.
          </p>
        </div>

        {/* Dietary note banner */}
        <div className="bg-sand/40 border border-sand rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 mb-10 text-xs sm:text-sm text-charcoal/80">
          <Info size={20} className="text-forest flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong>Dietary &amp; Allergen Notice:</strong> We are glad to accommodate dietary preferences where possible. Please notify your server of any severe allergies before ordering.
          </p>
        </div>

        {/* Interactive Menu Filter & Grid */}
        <MenuExplorer />

        {/* Bottom Reservation Callout */}
        <div className="mt-20 bg-forest text-cream rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <Coffee size={36} className="text-terracotta mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Joining us with a group?
          </h2>
          <p className="text-cream/80 text-sm sm:text-base max-w-lg mx-auto mb-6">
            We accept online table reservations for parties of up to 7 guests. For larger parties or special gatherings, please give us a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-cream px-8 py-3.5 font-semibold text-sm hover:bg-terracotta/90 transition-colors"
            >
              <Calendar size={16} aria-hidden="true" />
              <span>Book a Table</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-cream/30 text-cream px-8 py-3.5 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
