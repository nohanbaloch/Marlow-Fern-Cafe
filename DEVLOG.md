# Development Log — Marlow & Fern Café

All notable updates, architectural decisions, and progress logs for the Marlow & Fern Café website.

---

## [Phase 1: Project Scaffolding & Foundations] — 2026-10-10

### 1. Architectural Setup
- **Framework:** Next.js 16 (App Router) with TypeScript and Turbopack.
- **Styling & Fonts:** Tailwind CSS configured with brand design tokens (`forest`, `terracotta`, `cream`, `sand`, `charcoal`). Google Fonts loaded via `next/font`:
  - Primary Serif: `Playfair Display` (Headings & Hero statements)
  - Primary Sans: `Inter` (Body copy, UI labels, navigational elements)
- **Data Validation:** Zod schemas in `lib/schemas.ts` defining types and strict validation rules for Menu Items, Categories, Testimonials, and Gallery items.

### 2. Core Layout & Navigation
- **`app/layout.tsx`:** Global HTML shell with SEO meta tags, OpenGraph/Twitter cards, skip-to-content accessibility link, and structured wrappers.
- **`components/layout/Navbar.tsx`:** Desktop header with brand mark, navigation links, hours badge, and CTA for reservations.
- **`components/layout/MobileMenu.tsx`:** Slide-out drawer with touch support and accessible navigation links.
- **`components/layout/MobileBottomBar.tsx`:** Persistent mobile bottom bar with quick action buttons (Call, Find Us, Menu, Reserve).
- **`components/layout/Footer.tsx`:** Comprehensive footer with address, operating hours, quick links, and social links.

### 3. Reusable UI Primitives
- **`components/ui/Button.tsx`:** Multi-variant button (`primary`, `secondary`, `outline`, `ghost`) supporting standard button attributes or anchor links.
- **`components/ui/Container.tsx`:** Standardized responsive content wrapper with max-width containment.
- **`components/ui/Section.tsx`:** Semantically structured section container with consistent vertical rhythm.

### 4. Content & Data Assets
- **`data/site.ts`:** Cafe metadata, business hours, coordinates, contact info, and social handles.
- **`data/menu.ts`:** Full menu dataset spanning Coffee & Espresso, Artisanal Teas, All-Day Brunch, Fresh Bakery & Pastries, Seasonal Specials, and Dietary tags (GF, VG, V, DF).
- **`data/gallery.ts`:** High-resolution cafe imagery and interior/food gallery metadata.
- **`data/testimonials.ts`:** Customer reviews, ratings, and press accolades.
- **`public/images/`:** Real cafe photography assets for hero spreads, interior cafe shots, and signature dishes.

---

## [Phase 2: Full Site Implementation & Production Hardening] — 2026-10-10

### 1. Homepage (`app/page.tsx`)
- **Atmospheric Hero:** High-impact photography spread with warm gradient overlays, brand statement *"Slow mornings, honest food."*, live status pill badge, and dual CTAs (*Explore Menu* and *Reserve a Table*).
- **Craft Pillars Ribbon:** Highlights single-origin roasts, 5:00 AM daily baking, local farm produce radius, and sunlit pet-friendly patio.
- **Curated Menu Highlights:** 6 signature items (`featured: true`) with dietary tags, real food photography, pricing, and descriptions.
- **Our Story & Craft:** Narrative detailing founders Elena & Priya Marlow-Rao with milestone callout (`Est. 2017`).
- **Customer Voices:** Testimonial cards featuring authentic guest reviews with star ratings.
- **Atmosphere Teaser:** 4-image preview grid linking directly to the visual journal.
- **Visit & Location Showcase:** Operating hours schedule, street address, and interactive Google Maps directions.

### 2. Menu Explorer (`app/menu/page.tsx` & `components/menu/MenuExplorer.tsx`)
- Category tabs: *All*, *Brunch*, *Coffee & Tea*, *Pastries*, *Desserts*, *Cold Drinks*.
- Real-time text search across item names and ingredient descriptions.
- Multi-select dietary filtering: Vegetarian (`V`), Vegan (`VG`), Gluten-Free (`GF`), Dairy-Free (`DF`).
- Dynamic item count badge and zero-state reset handling.
- Allergen & dietary accommodations policy callout.

### 3. Visual Gallery (`app/gallery/page.tsx` & `components/gallery/GalleryGrid.tsx`)
- Category filter pills: *All*, *Food*, *Drinks*, *Café*.
- Full-screen lightbox modal with keyboard and click-away dismissal.
- Instagram community invitation banner linking to `@marlowandfern`.

### 4. Table Reservations (`app/reservations/page.tsx` & `components/reservations/ReservationForm.tsx`)
- Party size selector (1 to 7 guests, with prompt for 8+ to call).
- Date picker and categorized service time slot pills.
- Seating preference selection (*Main Dining Room*, *Sunlit Window*, *Garden Patio*, *Espresso Counter*).
- Guest contact fields with special dietary/occasion requests.
- Instant submission confirmation card displaying booking summary.
- Highlight cards for the 15-minute table hold policy and group reservation terms.

### 5. Contact & Location (`app/contact/page.tsx` & `components/contact/ContactForm.tsx`)
- Interactive contact inquiry form with subject categorization (General, Private Hire, Bakery Pre-orders, Press).
- Direct Google Maps link using encoded coordinates.
- Operating hours breakdown and parking/transit guidance.
- FAQ accordion answering patio, pet, laptop, and allergen inquiries.

### 6. Architectural Fixes & Next.js 16 Compatibility
- **Deterministic Static Prerendering:** Fixed Next.js 16 blocking prerender error in `Footer.tsx` by replacing dynamic `new Date().getFullYear()` with static constant.
- **Brand SVG Assets:** Replaced missing `lucide-react` Instagram icon with accessible inline SVG across `Footer.tsx` and `gallery/page.tsx`.
- **Validation:** 100% clean TypeScript typecheck (`tsc --noEmit`) and successful production build with 8 static pages prerendered.
- **Windows Path Compatibility:** Fixed Windows cmd-shim path delimiter breakage caused by folder ampersand (`&`) via automated patch script (`scripts/patch-cmd.js`) and `postinstall` hook. Cleaned ESLint warnings and unescaped entity in `MenuExplorer.tsx`.

