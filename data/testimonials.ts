// /data/testimonials.ts

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  descriptor?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The ricotta pancakes are the best I've ever had. We now come every Saturday.",
    author: "Hannah L.",
    descriptor: "Regular guest",
  },
  {
    id: "t2",
    quote:
      "Cozy, bright, and the flat white is perfect. My favorite place to work for an hour.",
    author: "Dev M.",
    descriptor: undefined,
  },
  {
    id: "t3",
    quote:
      "Booked a table for my mom's birthday. They added a candle to the cheesecake without being asked.",
    author: "Sofia R.",
    descriptor: undefined,
  },
];
