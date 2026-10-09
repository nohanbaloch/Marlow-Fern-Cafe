import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import { Clock, MapPin, Phone, Mail, ArrowUpRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find hours, location, directions, and contact information for Marlow & Fern Café in the Riverside District.",
};

const faqs = [
  {
    q: "Do you have outdoor seating?",
    a: "Yes! Our garden terrace is open weather permitting, with heat lamps available during cooler mornings.",
  },
  {
    q: "Are pets allowed?",
    a: "Well-behaved dogs on leashes are always warmly welcomed on our patio and terrace areas.",
  },
  {
    q: "Do you cater to dairy and gluten sensitivities?",
    a: "Absolutely. We offer oat, almond, and soy milks at no extra cost, as well as multiple gluten-free pastries and dishes.",
  },
  {
    q: "Can I work on my laptop?",
    a: "We welcome laptops and reading on weekdays. On peak weekend brunch hours (10 AM - 2 PM), tables are reserved for dining guests.",
  },
];

export default function ContactPage() {
  return (
    <div className="py-24 sm:py-28 bg-cream min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-forest mt-2 mb-4">
            Visit &amp; Contact Us
          </h1>
          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
            We are located in the heart of the Riverside District, steps away from the willow-lined river walk.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column: Location & Hours */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-sand shadow-sm space-y-6">
              <h2 className="font-heading text-2xl font-bold text-forest">
                Café Information
              </h2>

              <div className="space-y-5 text-sm text-charcoal/80">
                <div className="flex items-start gap-3.5">
                  <MapPin size={20} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest">Address</p>
                    <p className="mt-0.5">{site.address.full}</p>
                    <a
                      href={`https://maps.google.com/?q=${site.address.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta hover:underline mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock size={20} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest">Opening Hours</p>
                    <p className="mt-0.5">
                      <strong>{site.hours.weekdays.label}:</strong> {site.hours.weekdays.open} &ndash; {site.hours.weekdays.close}
                    </p>
                    <p>
                      <strong>{site.hours.weekends.label}:</strong> {site.hours.weekends.open} &ndash; {site.hours.weekends.close}
                    </p>
                    <p className="text-xs text-charcoal/60 mt-1">Kitchen closes 45 minutes before café closing time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone size={20} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest">Telephone</p>
                    <a
                      href={`tel:${site.contact.phoneRaw}`}
                      className="mt-0.5 inline-block hover:text-terracotta transition-colors"
                    >
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail size={20} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest">Email</p>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="mt-0.5 inline-block hover:text-terracotta transition-colors"
                    >
                      {site.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick note on transit / parking */}
            <div className="bg-sand/30 rounded-2xl p-6 border border-sand text-xs sm:text-sm text-charcoal/80 space-y-2">
              <p className="font-semibold text-forest">Getting Here &amp; Parking</p>
              <p>
                Street parking is available along Willow Lane and Riverbank Promenade. Bike racks are located directly in front of the café entrance.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <ContactForm />
        </div>

        {/* FAQs */}
        <div className="border-t border-sand pt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
              Good To Know
            </span>
            <h2 className="font-heading text-3xl font-bold text-forest mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white p-6 rounded-2xl border border-sand">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-forest text-base mb-1.5">{q}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
