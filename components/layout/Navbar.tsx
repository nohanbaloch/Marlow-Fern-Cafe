"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 max-h-16",
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-8 h-16"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Marlow & Fern Café — home"
            className="font-heading text-forest font-bold text-lg md:text-xl leading-tight hover:text-terracotta transition-colors flex-shrink-0"
          >
            Marlow&nbsp;&amp;&nbsp;Fern
          </Link>

          {/* Desktop nav links */}
          <ul
            className="hidden md:flex items-center gap-1 lg:gap-2"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-terracotta font-semibold"
                      : "text-charcoal hover:text-terracotta"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/reservations"
              id="navbar-reserve-btn"
              className="inline-flex items-center justify-center rounded-full bg-forest text-cream px-5 py-2.5 text-sm font-semibold min-h-[44px] hover:bg-terracotta transition-colors duration-200"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-3 rounded-full text-forest hover:bg-sand transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
