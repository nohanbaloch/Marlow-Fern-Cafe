"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand shadow-sm text-center">
        <div className="w-14 h-14 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-forest mb-2">Message Sent!</h3>
        <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
          Thank you for reaching out, {name}. A member of our team will get back to you shortly at {email}.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="px-6 py-2.5 rounded-full bg-forest text-cream text-sm font-semibold hover:bg-terracotta transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand shadow-sm">
      <h3 className="font-heading text-2xl font-bold text-forest mb-2">Send Us a Note</h3>
      <p className="text-charcoal/70 text-sm mb-6">
        Have questions about private hire, custom cake orders, or our coffee origins? Let us know.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-charcoal/70 mb-1">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-charcoal/70 mb-1">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs font-medium text-charcoal/70 mb-1">
            Subject
          </label>
          <select
            id="contact-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Private Events & Hire">Private Events &amp; Space Hire</option>
            <option value="Bakery Pre-Orders">Bakery &amp; Cake Pre-Orders</option>
            <option value="Press & Collaborations">Press &amp; Collaborations</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-medium text-charcoal/70 mb-1">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what's on your mind..."
            className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-sand text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-full bg-forest text-cream font-semibold text-sm hover:bg-terracotta transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send size={16} />
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </div>
  );
}
