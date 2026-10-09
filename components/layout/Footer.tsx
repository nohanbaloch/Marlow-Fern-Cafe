// /components/layout/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-forest text-cream" aria-label="Site footer">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand blurb */}
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl font-bold mb-3">
              Marlow &amp; Fern
            </p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              Slow mornings, honest food. All-day brunch, single-origin coffee, and
              pastries baked before sunrise — right here in the Riverside District since 2017.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={site.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marlow & Fern on Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-terracotta transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="Email us"
                className="p-2 rounded-full bg-white/10 hover:bg-terracotta transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream/50">
              Quick Links
            </p>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-terracotta transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours & Contact */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream/50">
              Visit Us
            </p>
            <ul className="space-y-3" role="list">
              <li className="flex gap-2 text-sm text-cream/80">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-terracotta" aria-hidden="true" />
                <span>
                  {site.hours.weekdays.label}: {site.hours.weekdays.open} – {site.hours.weekdays.close}
                  <br />
                  {site.hours.weekends.label}: {site.hours.weekends.open} – {site.hours.weekends.close}
                </span>
              </li>
              <li className="flex gap-2 text-sm text-cream/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-terracotta" aria-hidden="true" />
                <a
                  href={`https://maps.google.com/?q=${site.address.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  {site.address.full}
                </a>
              </li>
              <li className="flex gap-2 text-sm text-cream/80">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-terracotta" aria-hidden="true" />
                <a
                  href={`tel:${site.contact.phoneRaw}`}
                  className="hover:text-terracotta transition-colors"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
          <p>
            &copy; {currentYear} Marlow &amp; Fern Café. All rights reserved.
          </p>
          <p>Demo site — not a real business</p>
        </div>
      </Container>
    </footer>
  );
}
