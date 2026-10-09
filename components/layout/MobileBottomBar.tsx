"use client";
// /components/layout/MobileBottomBar.tsx
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/data/site";

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-cream border-t border-sand"
      aria-label="Quick actions"
    >
      <div className="flex">
        <Link
          href="/reservations"
          id="mobile-reserve-btn"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-forest font-semibold text-sm hover:bg-sand transition-colors min-h-[56px]"
        >
          <CalendarCheck size={20} aria-hidden="true" />
          Reserve
        </Link>
        <div className="w-px bg-sand" role="separator" aria-hidden="true" />
        <a
          href={`tel:${site.contact.phoneRaw}`}
          id="mobile-call-btn"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-forest font-semibold text-sm hover:bg-sand transition-colors min-h-[56px]"
        >
          <Phone size={20} aria-hidden="true" />
          Call
        </a>
      </div>
    </div>
  );
}
