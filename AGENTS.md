# AGENTS.md

Instructions for AI coding agents working on this project. Read this entire file before writing code.

---

## 1. Project Overview

**Marlow & Fern Café** is a demo website for a fictional neighborhood café. It is a portfolio piece for a Fiverr web developer gig, so it must look and behave like a real, production-ready small-business site.

**Pages**
1. Home: hero, highlights, featured dishes, about teaser, testimonials, hours, CTA
2. Menu: categorized, filterable, image-forward
3. Gallery: masonry grid with lightbox
4. Reservations: validated form with success state
5. Contact: address, hours, map, contact details
6. 404 page: friendly, on-brand

**Primary goal:** Food visuals sell. Every section is image-forward and fast.

**Mobile first (non-negotiable):** Most café visitors arrive on a phone, so design and build for a 375px screen first, then enhance for tablet and desktop. Write base Tailwind classes for mobile and add `md:` and `lg:` only to scale up. Never build desktop first and shrink it down.

**Secondary goal:** Show buyers clean code, accessibility, SEO, and performance.

---

## 2. Tech Stack

| Area | Choice |
|---|---|
| Framework | Next.js (App Router) + React + TypeScript (strict) |
| Styling | Tailwind CSS |
| Animation | Framer Motion (subtle only) |
| Images | `next/image` |
| Fonts | `next/font` (Playfair Display + Inter) |
| Icons | lucide-react |
| Forms | React Hook Form + Zod |
| Deployment | Vercel |
| Map | OpenStreetMap embed via iframe (no API key) |

No database. The reservation form posts to a Next.js route handler that validates input and returns success. It does not send real emails or store data (demo only).

---

## 3. Commands

```bash
npm install
npm run dev        # local dev server on :3000
npm run build      # must pass before any task is considered done
npm run lint       # must pass with zero errors
npm run typecheck  # tsc --noEmit, must pass
```

---

## 4. Project Structure

```
/app
  layout.tsx
  page.tsx                  # Home
  /menu/page.tsx
  /gallery/page.tsx
  /reservations/page.tsx
  /contact/page.tsx
  /api/reserve/route.ts
  not-found.tsx
  sitemap.ts
  robots.ts
/components
  /layout    Navbar.tsx, Footer.tsx, MobileMenu.tsx
  /home      Hero.tsx, Highlights.tsx, FeaturedDishes.tsx, AboutTeaser.tsx, Testimonials.tsx, HoursCard.tsx
  /menu      MenuTabs.tsx, MenuCard.tsx, DietaryBadge.tsx
  /gallery   GalleryGrid.tsx, Lightbox.tsx
  /forms     ReservationForm.tsx
  /ui        Button.tsx, Section.tsx, Container.tsx
  MapEmbed.tsx
/data
  site.ts        # brand, contact, hours, socials
  menu.ts        # all menu items
  gallery.ts     # gallery images + alt text
  testimonials.ts
/lib
  schemas.ts     # Zod schemas
  utils.ts
/public/images
  /hero /menu /gallery /about
```

All content lives in `/data`, never hard-coded inside components.

---

## 5. Brand and Content Rules

**Never use lorem ipsum or placeholder text such as "Your text here" or "Item 1".** All copy must be realistic and written for this brand.

### Brand
- **Name:** Marlow & Fern Café
- **Tagline:** "Slow mornings, honest food."
- **Story:** Founded in 2017 by sisters Elena and Priya Marlow-Rao. They started with one espresso machine and a shared love of weekend brunch. Today the café serves all-day brunch, single-origin coffee, and house-baked pastries, using produce from nearby farms and bread from a local bakery.
- **Tone:** Warm, friendly, concise. Short sentences. No corporate jargon.

### Fictional details (use consistently everywhere)
- Address: 214 Willow Lane, Riverside District
- Phone: (555) 014-2290
- Email: hello@marlowandfern.example
- Instagram: @marlowandfern
- Hours: Mon to Fri 7:30 AM to 4:00 PM, Sat and Sun 8:00 AM to 5:00 PM
- Reservation policy: tables held for 15 minutes; parties of 8+ should call

### Page copy

**Hero**
- Headline: "Slow mornings, honest food."
- Subtext: "Brunch, single-origin coffee, and pastries baked before sunrise. Pull up a chair."
- CTAs: "View Menu" (primary), "Reserve a Table" (secondary)

**Highlights (3 cards)**
1. "Baked Every Morning": Our croissants and loaves come out of the oven by 6:30 AM.
2. "Local Farms First": Eggs, greens, and honey from growers within 40 miles.
3. "Coffee, Done Right": Single-origin beans roasted in small batches by Copperline Roasters.

**About teaser**
"Marlow & Fern began in 2017 with one espresso machine and a big idea: breakfast should never feel rushed. Seven years later, the idea hasn't changed. Come hungry, stay as long as you like."

**Testimonials (use these)**
1. "The ricotta pancakes are the best I've ever had. We now come every Saturday." (Hannah L., regular)
2. "Cozy, bright, and the flat white is perfect. My favorite place to work for an hour." (Dev M.)
3. "Booked a table for my mom's birthday. They added a candle to the cheesecake without being asked." (Sofia R.)

**CTA banner (above footer)**
"Saving you a seat. Reserve a table for this weekend." Button: "Book Now"

---

## 6. Menu Data

Categories: **Brunch**, **Coffee & Tea**, **Pastries**, **Desserts**, **Cold Drinks**.
Dietary tags: `V` vegetarian, `VG` vegan, `GF` gluten-free, `DF` dairy-free.

### Data shape

```ts
export type DietaryTag = "V" | "VG" | "GF" | "DF";
export type Category = "Brunch" | "Coffee & Tea" | "Pastries" | "Desserts" | "Cold Drinks";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;       // path under /public/images/menu
  imageAlt: string;
  tags: DietaryTag[];
  featured?: boolean;
}
```

### Items

**Brunch**
| Item | Price | Description | Tags |
|---|---|---|---|
| Smashed Avocado Toast | 12.50 | Sourdough, lime, chili flakes, soft-poached egg, microgreens | V |
| Ricotta Honey Pancakes | 13.00 | Fluffy stack with whipped ricotta, wildflower honey, seasonal berries | V |
| Fern Breakfast Plate | 15.50 | Two eggs your way, thick-cut bacon, roasted tomatoes, grilled sourdough | |
| Shakshuka Skillet | 14.50 | Eggs baked in spiced tomato and pepper sauce, feta, warm pita | V |
| Mushroom Thyme Benedict | 15.00 | Poached eggs, sautéed mushrooms, hollandaise, toasted English muffin | V |
| Maple Granola Bowl | 10.50 | Greek yogurt, house granola, maple, fresh fruit | V, GF |
| Smoked Salmon Bagel | 14.00 | Cream cheese, capers, red onion, dill, everything bagel | |
| Garden Veggie Hash | 13.50 | Crispy potatoes, zucchini, peppers, kale, fried egg | V, GF, DF |

**Coffee & Tea**
| Item | Price | Description | Tags |
|---|---|---|---|
| Flat White | 4.50 | Double ristretto, steamed whole milk | V, GF |
| Honey Oat Latte | 5.25 | Espresso, oat milk, local honey, pinch of cinnamon | V, DF |
| Cortado | 4.00 | Equal parts espresso and warm milk | V, GF |
| Pour-Over of the Week | 5.00 | Rotating single-origin, ask us for today's tasting notes | VG, GF |
| Spiced Chai Latte | 5.00 | House masala chai, steamed milk | V, GF |
| Jasmine Green Tea | 3.75 | Loose-leaf, served in a small pot | VG, GF |

**Pastries**
| Item | Price | Description | Tags |
|---|---|---|---|
| Brown Butter Croissant | 4.25 | Baked every morning, laminated by hand | V |
| Cardamom Morning Bun | 4.75 | Swirled with cardamom sugar and orange zest | V |
| Almond Frangipane Tart | 5.25 | Buttery crust, almond cream, toasted flaked almonds | V |
| Blueberry Lemon Muffin | 3.95 | Lemon glaze, fresh blueberries | V |
| Olive Oil Focaccia Slice | 4.50 | Rosemary, flaky salt, cherry tomatoes | VG, DF |

**Desserts**
| Item | Price | Description | Tags |
|---|---|---|---|
| Burnt Basque Cheesecake | 7.50 | Creamy center, caramelized top | V, GF |
| Flourless Chocolate Cake | 7.25 | Dark chocolate, sea salt, raspberry coulis | V, GF |
| Lemon Olive Oil Cake | 6.75 | Moist, citrusy, served with whipped cream | V |
| Affogato | 6.00 | Vanilla gelato drowned in a fresh espresso shot | V, GF |

**Cold Drinks**
| Item | Price | Description | Tags |
|---|---|---|---|
| Iced Brown Sugar Latte | 5.50 | Espresso, brown sugar syrup, milk over ice | V, GF |
| Strawberry Basil Lemonade | 4.75 | Fresh-pressed lemon, muddled strawberry, basil | VG, GF |
| Cold Brew | 4.50 | Steeped 18 hours, smooth and low-acid | VG, GF |
| Mango Lassi | 5.25 | Mango, yogurt, a touch of cardamom | V, GF |

Mark 6 items as `featured: true` for the Home page (Ricotta Honey Pancakes, Smashed Avocado Toast, Brown Butter Croissant, Honey Oat Latte, Burnt Basque Cheesecake, Shakshuka Skillet).

---

## 7. Gallery Data

Create 12 to 16 images. Each needs a filename and descriptive alt text. Example captions and alt text:

| File | Alt text |
|---|---|
| pancakes.jpg | Stack of ricotta pancakes topped with berries and honey |
| avocado-toast.jpg | Avocado toast with poached egg on sourdough |
| latte-art.jpg | Overhead view of a flat white with leaf latte art |
| croissants.jpg | Tray of freshly baked golden croissants |
| cafe-interior.jpg | Bright café interior with wooden tables and hanging plants |
| barista.jpg | Barista pouring milk into an espresso cup |
| cheesecake.jpg | Slice of burnt Basque cheesecake on a white plate |
| patio.jpg | Outdoor seating area with string lights at golden hour |

Gallery categories (filter chips): All, Food, Drinks, Café.

---

## 8. Design System

### Colors (define as Tailwind theme tokens)
| Token | Hex | Use |
|---|---|---|
| `cream` | #FAF6EF | page background |
| `sand` | #F0E7D8 | cards, alternate sections |
| `forest` | #2F4A3A | headings, primary buttons, footer |
| `terracotta` | #C8693F | accents, links, hover states |
| `charcoal` | #2B2B2B | body text |

Check contrast: all text on background combinations must meet WCAG AA.

### Typography
- Headings: Playfair Display (600/700)
- Body: Inter (400/500/600)
- Scale: h1 `text-4xl md:text-6xl`, h2 `text-3xl md:text-4xl`, body `text-base md:text-lg`

### Spacing and layout
- Design at 375px first; max content width 1200px on large screens, centered, `px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Cards: `rounded-2xl`, soft shadow, hover lift of 2 to 4px
- Buttons: `rounded-full`, min height 44px (touch-friendly)

### Motion
- Fade-up on scroll for sections (duration 0.5s, small offset)
- Respect `prefers-reduced-motion`: disable animations when set
- Never animate in a way that delays content or causes layout shift

---

## 9. Mobile-First Rules

**Approach**
- Build and review every component at 375px width first, then 768px, then 1280px
- Base Tailwind classes target mobile; use `md:` and `lg:` to scale up, never `max-md:` to patch desktop layouts
- Test on a real phone or DevTools device mode (iPhone SE and a standard Android size) before finishing any task
- No horizontal scrolling at any width; check for overflowing images, tables, and long words

**Layout**
- Single-column by default; grids only from `md:` up (menu: 1 column mobile, 2 tablet, 3 desktop)
- Gallery: 2 columns on mobile, 3 on tablet, 4 on desktop
- Comfortable side padding (`px-4`) and generous vertical spacing
- Body text at least 16px; never shrink text below that on mobile

**Touch**
- All tappable elements at least 44x44px with spacing between them
- Primary actions ("Reserve", "View Menu", "Get Directions", "Call Us") reachable with a thumb
- Sticky bottom bar on mobile with two buttons: "Reserve" and "Call" (hidden on `md:` and up)
- Phone number is a `tel:` link; address opens the maps app
- Lightbox supports swipe left/right and tap-to-close; no hover-only interactions anywhere

**Forms on mobile**
- Correct input types and attributes: `type="email"`, `type="tel"`, `inputMode="numeric"` where fitting, and `autocomplete` values (name, email, tel)
- Large inputs (min height 48px), labels above fields, errors directly beneath
- Use native date and time pickers on mobile when available
- Keep the keyboard from covering the submit button; the form stays scrollable

**Performance on mobile**
- Test against throttled "Slow 4G" and a mid-range phone profile
- Serve small image sizes to phones via correct `sizes` on `next/image`
- Hero image under 150KB on mobile; lazy load everything below the fold
- Avoid heavy animations and large JS bundles; keep Lighthouse mobile targets in section 14

**Navigation**
- Hamburger menu with a full-screen overlay, large tap targets, focus trap, closes on Escape and on link tap
- Sticky top bar stays slim (max 64px) so content isn't crowded

---

## 10. Component Specs

**Navbar:** Logo left, links center or right (Home, Menu, Gallery, Reservations, Contact), "Reserve" button. Sticky, background blurs on scroll. Mobile: hamburger opening a full-screen menu, trap focus, close on Escape.

**Hero:** Full-width food image with dark gradient overlay, headline, subtext, two CTAs. Use `priority` on the image. Height ~85vh on desktop, ~70vh on mobile.

**MenuCard:** Image (4:3), name, price, description, dietary badges. Entire card is not a link, but badges have `aria-label` text (e.g., "Vegetarian").

**MenuTabs:** Accessible tab pattern (`role="tablist"`, arrow-key navigation). Updates without page reload; category stored in the URL query (`?category=Brunch`) so it is shareable.

**GalleryGrid + Lightbox:** CSS columns masonry. Clicking opens a lightbox with next/previous, close button, keyboard support (Esc, arrows), focus trap, and image caption.

**ReservationForm:** See section 11.

**MapEmbed:** OpenStreetMap iframe with `title`, `loading="lazy"`. Beside it: address, hours, phone, and a "Get Directions" button that opens a maps search for the address in a new tab (`rel="noopener noreferrer"`).

**Footer:** Brand blurb, quick links, hours, address, social icons (with `aria-label`), copyright line.

---

## 11. Reservation Form Spec

**Fields**
| Field | Rules |
|---|---|
| Name | required, 2 to 60 chars |
| Email | required, valid format |
| Phone | required, 7 to 15 digits (allow spaces, dashes, +) |
| Date | required, today or later, within the next 60 days |
| Time | required, within opening hours for the chosen day, 30-minute slots |
| Party size | required, 1 to 10 (show "Call us for 8+" note at 8 or more) |
| Special requests | optional, max 300 chars |

**Behavior**
- Validate with Zod on client and again on the server
- Inline error messages under each field, linked with `aria-describedby`
- Time options update when the date changes (weekday vs weekend hours)
- Submit button shows loading state; disabled while submitting
- Success state: summary card with name, date, time, party size, and a confirmation number like `MF-48213`
- Server error state: friendly message and retry button
- Simulate a short delay (~800ms) in the route handler so the loading state is visible

**API contract**
```
POST /api/reserve
Request:  { name, email, phone, date, time, partySize, notes? }
200:      { ok: true, confirmation: "MF-48213" }
400:      { ok: false, errors: { field: "message" } }
```

---

## 12. SEO and Metadata

- Unique `<title>` and meta description per page
- Open Graph and Twitter card tags with a hero image
- JSON-LD `Restaurant` schema on Home and Contact (name, address, hours, phone, menu URL, cuisine)
- `sitemap.ts` and `robots.ts`
- One `<h1>` per page, logical heading order
- Descriptive alt text on every image

Example titles
- Home: "Marlow & Fern Café | Brunch, Coffee & Pastries"
- Menu: "Menu | Marlow & Fern Café"
- Reservations: "Reserve a Table | Marlow & Fern Café"

---

## 13. Accessibility Requirements

- Keyboard navigable everywhere, with visible focus rings
- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Skip-to-content link at the top of every page
- Labels on all inputs; errors announced via `aria-live`
- Color contrast AA or better
- Touch targets at least 44x44px
- Respect `prefers-reduced-motion`
- No information conveyed by color alone (dietary tags have text)

---

## 14. Performance Targets

- Lighthouse (mobile): Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+
- LCP under 2.5s, CLS under 0.1
- Images: WebP/AVIF via `next/image`, correct `sizes`, lazy load below the fold
- Hero image under 200KB after optimization
- Load only the font weights in use
- No unused dependencies

---

## 15. Image Rules

- Use free-license food photography (Unsplash or Pexels) or generated images, saved locally in `/public/images`
- No real people's faces without a license; avoid recognizable brands or logos in photos
- Consistent warm, natural-light look across images
- Every image has meaningful `alt` text
- Provide `blurDataURL` or `placeholder="blur"` for large images

---

## 16. Code Standards

- TypeScript strict; no `any`
- Functional components and hooks only
- Server Components by default; add `"use client"` only where needed (tabs, lightbox, form, mobile menu)
- Small, reusable components; no file over ~200 lines
- Tailwind utilities; avoid custom CSS unless necessary
- Named exports for components, default exports only for pages
- Meaningful names; comments only where intent is not obvious
- No `console.log` left in code

**Git**
- Small commits with clear messages (e.g., `feat: add menu category tabs`)
- One feature per commit

---

## 17. Build Order (recommended)

1. Scaffold project, Tailwind theme tokens, fonts, layout, mobile Navbar, sticky mobile CTA bar, Footer
2. `/data` files with all content from this document
3. Home page sections
4. Menu page with tabs and cards
5. Gallery with lightbox
6. Reservation form and API route
7. Contact page with map
8. SEO, metadata, sitemap, 404 page
9. Accessibility pass, then mobile performance pass on throttled Slow 4G
10. Final QA with the checklist below, then deploy to Vercel

---

## 18. Definition of Done

- [ ] `npm run build`, `npm run lint`, and `npm run typecheck` all pass
- [ ] No lorem ipsum or placeholder text anywhere
- [ ] Brand details match `/data/site.ts` everywhere
- [ ] Built mobile first: base styles are mobile, `md:`/`lg:` only scale up
- [ ] Looks correct at 375px, 768px, and 1280px with no horizontal scrolling
- [ ] All tap targets are at least 44x44px; sticky mobile Reserve/Call bar works
- [ ] Form works well on a real phone (correct keyboards, autofill, native pickers)
- [ ] All pages have unique titles and meta descriptions
- [ ] Reservation form: validation, loading, success, and error states all work
- [ ] Menu filter and gallery lightbox work with keyboard only
- [ ] Lighthouse targets in section 14 are met
- [ ] All images have alt text and are optimized
- [ ] No broken links; 404 page works
- [ ] Deployed to Vercel with a working preview URL

---

## 19. Do Not

- Do not add dependencies without a clear reason
- Do not use real brand names, real addresses, or real people's photos
- Do not hard-code content inside components; use `/data`
- Do not skip validation on the server
- Do not design desktop first or rely on hover for any interaction
- Do not use autoplay video or heavy animations that hurt performance
- Do not change brand details without updating `/data/site.ts`
- Do not mark a task complete without running the Definition of Done checks

---

## 20. Progress Tracking

- At the start of every session, read PROGRESS.md before doing anything
- At the end of every task, update PROGRESS.md: move finished items to Completed, update In Progress and Next Up, and add a short Session Log entry (date, tool used, what changed, files touched)
- Record important decisions and known issues
- Keep entries short. Do not paste chat transcripts or code into it

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
