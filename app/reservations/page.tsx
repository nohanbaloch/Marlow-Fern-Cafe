import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ReservationForm } from "@/components/reservations/ReservationForm";
import { site } from "@/data/site";
import { Clock, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at Marlow & Fern Café for weekend brunch or weekday coffee gatherings.",
};

export default function ReservationsPage() {
  return (
    <div className="py-24 sm:py-28 bg-cream min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
            Join Our Table
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-forest mt-2 mb-4">
            Table Reservations
          </h1>
          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
            Reserve a spot in advance or walk in anytime. We save walk-in tables for spontaneous neighborhood visitors.
          </p>
        </div>

        {/* Informative Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-sand/30 border border-sand rounded-2xl p-5 flex items-start gap-3.5">
            <Clock size={20} className="text-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-forest">15-Minute Grace</p>
              <p className="text-xs text-charcoal/70 mt-0.5">Tables are held for 15 minutes past your booking time.</p>
            </div>
          </div>

          <div className="bg-sand/30 border border-sand rounded-2xl p-5 flex items-start gap-3.5">
            <Phone size={20} className="text-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-forest">Parties of 8 or More</p>
              <p className="text-xs text-charcoal/70 mt-0.5">Please phone {site.contact.phone} directly for group dining.</p>
            </div>
          </div>

          <div className="bg-sand/30 border border-sand rounded-2xl p-5 flex items-start gap-3.5">
            <ShieldCheck size={20} className="text-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-forest">No Booking Fee</p>
              <p className="text-xs text-charcoal/70 mt-0.5">Zero cancellation fees. Simply let us know if plans change.</p>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <ReservationForm />
      </Container>
    </div>
  );
}
