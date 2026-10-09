// /data/site.ts — single source of truth for brand/contact info

export const site = {
  name: "Marlow & Fern Café",
  tagline: "Slow mornings, honest food.",
  description:
    "Brunch, single-origin coffee, and pastries baked before sunrise. Pull up a chair.",
  story:
    "Founded in 2017 by sisters Elena and Priya Marlow-Rao. They started with one espresso machine and a shared love of weekend brunch. Today the café serves all-day brunch, single-origin coffee, and house-baked pastries, using produce from nearby farms and bread from a local bakery.",
  address: {
    street: "214 Willow Lane",
    district: "Riverside District",
    full: "214 Willow Lane, Riverside District",
    mapsQuery: "214+Willow+Lane+Riverside+District",
  },
  contact: {
    phone: "(555) 014-2290",
    phoneRaw: "5550142290",
    email: "hello@marlowandfern.example",
  },
  hours: {
    weekdays: { label: "Mon – Fri", open: "7:30 AM", close: "4:00 PM" },
    weekends: { label: "Sat – Sun", open: "8:00 AM", close: "5:00 PM" },
  },
  socials: {
    instagram: {
      handle: "@marlowandfern",
      url: "https://instagram.com/marlowandfern",
    },
  },
  reservationPolicy:
    "Tables are held for 15 minutes. Parties of 8 or more should call ahead.",
  url: "https://marlowandfern.example",
} as const;

export type Site = typeof site;
