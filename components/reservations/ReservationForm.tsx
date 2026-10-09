"use client";

import { useState } from "react";
import { Calendar, Users, Clock, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
];

const seatingOptions = [
  "Main Dining Room",
  "Sunlit Window Table",
  "Garden Patio (Weather Permitting)",
  "Espresso Counter",
];

export function ReservationForm() {
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>("2026-10-12");
  const [time, setTime] = useState<string>("10:00 AM");
  const [seating, setSeating] = useState<string>("Main Dining Room");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand shadow-lg text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} className="text-forest" />
        </div>
        <span className="text-xs uppercase tracking-widest text-terracotta font-bold">
          Reservation Confirmed
        </span>
        <h2 className="font-heading text-3xl font-bold text-forest mt-2 mb-4">
          We can&apos;t wait to host you, {name}!
        </h2>
        <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
          A confirmation email has been dispatched to <strong>{email}</strong> with your reservation details.
        </p>

        <div className="bg-sand/30 rounded-2xl p-5 mb-8 text-left space-y-2 text-sm text-charcoal">
          <div className="flex justify-between border-b border-sand pb-2">
            <span className="text-charcoal/60">Date &amp; Time:</span>
            <span className="font-semibold text-forest">{date} at {time}</span>
          </div>
          <div className="flex justify-between border-b border-sand pb-2">
            <span className="text-charcoal/60">Guests:</span>
            <span className="font-semibold text-forest">{guests} {guests === 1 ? "guest" : "guests"}</span>
          </div>
          <div className="flex justify-between border-b border-sand pb-2">
            <span className="text-charcoal/60">Seating Preference:</span>
            <span className="font-semibold text-forest">{seating}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-charcoal/60">Location:</span>
            <span className="font-semibold text-forest">{site.address.full}</span>
          </div>
        </div>

        <p className="text-xs text-charcoal/60 mb-6 italic">
          Reminder: Tables are held for 15 minutes after reserved time. Need to modify? Call {site.contact.phone}.
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
            setNotes("");
          }}
          className="px-8 py-3 rounded-full bg-forest text-cream font-semibold text-sm hover:bg-terracotta transition-colors"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand shadow-sm max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Party Size */}
        <div>
          <label className="block text-sm font-semibold text-forest mb-3 flex items-center gap-2">
            <Users size={18} className="text-terracotta" />
            <span>Party Size</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <button
                type="button"
                key={num}
                onClick={() => setGuests(num)}
                className={`w-12 h-12 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                  guests === num
                    ? "bg-forest text-cream shadow-sm"
                    : "bg-cream text-charcoal border border-sand hover:border-forest/40"
                }`}
              >
                {num}
              </button>
            ))}
            <div className="flex items-center text-xs text-charcoal/60 pl-2">
              For 8+ guests, please <a href={`tel:${site.contact.phoneRaw}`} className="text-terracotta font-semibold underline ml-1">call us</a>.
            </div>
          </div>
        </div>

        {/* Step 2: Date & Seating Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="reservation-date" className="block text-sm font-semibold text-forest mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-terracotta" />
              <span>Select Date</span>
            </label>
            <input
              id="reservation-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
              required
            />
          </div>

          <div>
            <label htmlFor="seating-pref" className="block text-sm font-semibold text-forest mb-2 flex items-center gap-2">
              <Sparkles size={18} className="text-terracotta" />
              <span>Seating Preference</span>
            </label>
            <select
              id="seating-pref"
              value={seating}
              onChange={(e) => setSeating(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            >
              {seatingOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 3: Time Slot */}
        <div>
          <label className="block text-sm font-semibold text-forest mb-3 flex items-center gap-2">
            <Clock size={18} className="text-terracotta" />
            <span>Select Preferred Time</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {timeSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => setTime(slot)}
                className={`py-2 px-2 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                  time === slot
                    ? "bg-terracotta text-cream shadow-xs"
                    : "bg-cream text-charcoal/80 border border-sand hover:border-terracotta/50"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Contact Information */}
        <div className="border-t border-sand pt-6 space-y-4">
          <p className="text-sm font-semibold text-forest">Your Contact Information</p>

          <div>
            <label htmlFor="guest-name" className="block text-xs font-medium text-charcoal/70 mb-1">
              Full Name *
            </label>
            <input
              id="guest-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Eleanor Vance"
              className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="guest-email" className="block text-xs font-medium text-charcoal/70 mb-1">
                Email Address *
              </label>
              <input
                id="guest-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
              />
            </div>
            <div>
              <label htmlFor="guest-phone" className="block text-xs font-medium text-charcoal/70 mb-1">
                Phone Number *
              </label>
              <input
                id="guest-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="guest-notes" className="block text-xs font-medium text-charcoal/70 mb-1">
              Special Requests or Dietary Notes (Optional)
            </label>
            <textarea
              id="guest-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Celebrating a birthday, high-chair needed, gluten sensitivity..."
              className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-full bg-forest text-cream font-semibold text-base hover:bg-terracotta transition-colors shadow-md disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Confirming Table..." : `Book Table for ${guests} ${guests === 1 ? "Guest" : "Guests"}`}
          </button>
          <p className="text-center text-xs text-charcoal/60 mt-3">
            {site.reservationPolicy}
          </p>
        </div>
      </form>
    </div>
  );
}
