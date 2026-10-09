"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Focus close button when opened
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Trap focus within the menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-forest transition-opacity duration-300 md:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <span className="font-heading text-cream text-xl font-semibold">
          {site.name}
        </span>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          className="p-3 rounded-full text-cream hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-8">
        <ul className="space-y-2" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "block py-4 text-2xl font-heading font-semibold transition-colors rounded-lg px-4",
                  pathname === link.href
                    ? "text-terracotta"
                    : "text-cream hover:text-terracotta"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-8 pb-12">
        <Link
          href="/reservations"
          onClick={onClose}
          className="block text-center py-4 bg-terracotta text-cream rounded-full font-semibold text-lg min-h-[52px] flex items-center justify-center hover:bg-opacity-90 transition-colors"
        >
          Reserve a Table
        </Link>
        <p className="mt-6 text-white/50 text-sm text-center">
          {site.hours.weekdays.label}: {site.hours.weekdays.open} – {site.hours.weekdays.close}
          <br />
          {site.hours.weekends.label}: {site.hours.weekends.open} – {site.hours.weekends.close}
        </p>
      </div>
    </div>
  );
}
