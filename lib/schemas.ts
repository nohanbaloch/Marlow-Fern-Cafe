// /lib/schemas.ts — Zod validation schemas

import { z } from "zod";

export const reservationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be 60 characters or fewer"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^[\d\s\-+()]{7,15}$/,
      "Please enter a valid phone number (7–15 digits)"
    ),
  date: z
    .string()
    .refine((val) => {
      const d = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const maxDate = new Date(today);
      maxDate.setDate(maxDate.getDate() + 60);
      return d >= today && d <= maxDate;
    }, "Date must be today or within the next 60 days"),
  time: z.string().min(1, "Please select a time"),
  partySize: z
    .number()
    .int()
    .min(1, "Party size must be at least 1")
    .max(10, "For parties larger than 10, please call us"),
  notes: z.string().max(300, "Notes must be 300 characters or fewer").optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
