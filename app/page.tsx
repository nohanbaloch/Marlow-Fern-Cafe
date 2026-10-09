import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Coffee,
  Sparkles,
  ArrowRight,
  Star,
  Check,
  Calendar,
} from "lucide-react";
import { site } from "@/data/site";
import { menuItems } from "@/data/menu";
import { testimonials } from "@/data/testimonials";
import { galleryImages } from "@/data/gallery";
import { Container } from "@/components/ui/Container";

export default function Home() {
  const featuredDishes = menuItems.filter((item) => item.featured).slice(0, 6);
  const previewGallery = galleryImages.slice(0, 4);

  return (
    <div className="flex flex-col w-full pb-16 md:pb-0">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section
        aria-label="Welcome to Marlow & Fern Café"
        className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden bg-forest text-cream"
      >
        {/* Background Image with warm dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-brunch.jpg"
            alt="Marlow & Fern artisanal brunch spread with coffee and baked goods"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 brightness-90 filter"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/40" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-cream/20 text-cream text-xs md:text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Riverside District &bull; Open Daily for Brunch & Coffee</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-cream mb-6 leading-[1.12]">
            Slow mornings, <br />
            <span className="italic font-normal text-terracotta text-cream">honest food.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-cream/85 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            All-day brunch, single-origin coffee, and pastries baked fresh before sunrise. Pull up a chair and stay a while.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/menu"
              id="hero-explore-menu-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-cream px-8 py-4 font-semibold text-base shadow-lg hover:bg-terracotta/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              href="/reservations"
              id="hero-reserve-table-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cream/15 hover:bg-cream/25 text-cream border border-cream/30 px-8 py-4 font-semibold text-base backdrop-blur-md active:scale-[0.98] transition-all duration-200"
            >
              <Calendar size={18} aria-hidden="true" />
              <span>Reserve a Table</span>
            </Link>
          </div>

          {/* Quick Hours / Location Footnote */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-cream/70 border-t border-cream/15 pt-6">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-terracotta" aria-hidden="true" />
              Mon–Fri 7:30AM–4PM &bull; Sat–Sun 8AM–5PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-terracotta" aria-hidden="true" />
              {site.address.full}
            </span>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND VALUES / CRAFT PILLARS
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-sand/40 border-y border-sand py-10" aria-label="Our Core Values">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-3">
                <Coffee size={24} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-base">Single-Origin Roasts</h3>
              <p className="text-xs text-charcoal/70 mt-1">Ethically sourced beans from family cooperatives</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-3">
                <Sparkles size={24} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-base">Baked at 5:00 AM</h3>
              <p className="text-xs text-charcoal/70 mt-1">Croissants, brioche & cakes baked daily in-house</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-3">
                <Check size={24} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-base">Local Farms First</h3>
              <p className="text-xs text-charcoal/70 mt-1">Free-range eggs, organic dairy & local honey</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-3">
                <Star size={24} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-base">Sunlit & Pet-Friendly</h3>
              <p className="text-xs text-charcoal/70 mt-1">Lush outdoor terrace & cozy interior seating</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FEATURED MENU SPECIALS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream" aria-labelledby="featured-menu-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
                Curated Morning Favourites
              </span>
              <h2
                id="featured-menu-heading"
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-2"
              >
                Signature Dishes &amp; Sips
              </h2>
              <p className="text-charcoal/75 text-base sm:text-lg mt-3">
                From slow-whipped ricotta to small-batch roasts, every item is crafted with intention and simple, wholesome ingredients.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                href="/menu"
                id="view-full-menu-link"
                className="inline-flex items-center gap-2 font-semibold text-forest hover:text-terracotta transition-colors group"
              >
                <span>View Full Menu ({menuItems.length} items)</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-sand/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden bg-sand/30">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-forest/90 backdrop-blur-sm text-cream text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-heading text-xl font-bold text-forest group-hover:text-terracotta transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-semibold text-terracotta text-lg whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-sand/40">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sand/60 text-charcoal/80"
                        >
                          {tag === "V" && "Vegetarian"}
                          {tag === "VG" && "Vegan"}
                          {tag === "GF" && "Gluten-Free"}
                          {tag === "DF" && "Dairy-Free"}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-forest text-cream px-8 py-3.5 text-base font-semibold hover:bg-terracotta transition-colors duration-200"
            >
              Browse The Complete Menu
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. OUR STORY & CRAFT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-sand/30 border-y border-sand" aria-labelledby="story-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story Visual */}
            <div className="relative">
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-sand">
                <Image
                  src="/images/about/cafe-interior.jpg"
                  alt="Bright, welcoming interior of Marlow & Fern Café with plants and wooden furniture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-forest text-cream p-5 sm:p-6 rounded-2xl shadow-xl max-w-[220px]">
                <p className="font-heading text-3xl font-bold text-terracotta">2017</p>
                <p className="text-xs text-cream/80 mt-1 leading-snug">
                  Serving Riverside District with warmth & craft for nearly a decade.
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:pl-4">
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
                Behind the Counter
              </span>
              <h2
                id="story-heading"
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-2 mb-6"
              >
                A shared table for the neighbourhood.
              </h2>
              <div className="space-y-4 text-charcoal/80 text-base sm:text-lg leading-relaxed">
                <p>
                  Marlow &amp; Fern began with sisters Elena and Priya Marlow-Rao. Armed with a single dual-boiler espresso machine, sourdough starter, and an unwavering love for slow weekend mornings, they set out to build a café where everyone feels like a regular.
                </p>
                <p>
                  Today, we still mill our grains locally, source seasonal fruit from family orchards within 40 miles, and roast single-origin beans that honour the farmers who cultivated them.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-sand">
                <div>
                  <p className="font-heading text-2xl font-bold text-forest">100%</p>
                  <p className="text-xs text-charcoal/70">Single-Origin Beans</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-forest">5:00 AM</p>
                  <p className="text-xs text-charcoal/70">Daily Fresh Bake</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-forest">40 Mi</p>
                  <p className="text-xs text-charcoal/70">Local Farm Radius</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-2 text-forest font-semibold hover:text-terracotta transition-colors group"
                >
                  <span>Book your visit with us</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. GUEST TESTIMONIALS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-cream" aria-labelledby="testimonials-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
              Guest Kind Words
            </span>
            <h2
              id="testimonials-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-forest mt-2"
            >
              Loved by Riverside Locals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white p-8 rounded-2xl border border-sand shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-terracotta mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-charcoal/80 text-base italic leading-relaxed mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="border-t border-sand/40 pt-4">
                  <p className="font-heading font-semibold text-forest text-base">{test.author}</p>
                  {test.descriptor && (
                    <p className="text-xs text-charcoal/60 mt-0.5">{test.descriptor}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. GALLERY PREVIEW
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-sand/20 border-t border-sand" aria-labelledby="gallery-preview-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
                Atmosphere &amp; Moments
              </span>
              <h2
                id="gallery-preview-heading"
                className="font-heading text-3xl sm:text-4xl font-bold text-forest mt-1"
              >
                Life at Marlow &amp; Fern
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-semibold text-forest hover:text-terracotta transition-colors group"
            >
              <span>Explore full gallery</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-sand/30 shadow-sm block"
              >
                <Image
                  src={item.file}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-cream text-xs font-medium font-heading">
                    {item.caption || item.alt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. VISIT & LOCATION BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-cream" aria-labelledby="visit-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
                Come Say Hello
              </span>
              <h2
                id="visit-heading"
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6"
              >
                We have a warm table waiting for you.
              </h2>
              <p className="text-cream/80 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                Whether you are stopping by for a quiet morning espresso, meeting a friend for ricotta hotcakes, or reserving a table for a celebration — our doors are wide open.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-semibold text-terracotta text-sm mb-1">Weekday Hours</p>
                  <p className="text-sm text-cream/90 font-medium">Monday &ndash; Friday</p>
                  <p className="text-xs text-cream/70 mt-0.5">7:30 AM &ndash; 4:00 PM</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-semibold text-terracotta text-sm mb-1">Weekend Hours</p>
                  <p className="text-sm text-cream/90 font-medium">Saturday &ndash; Sunday</p>
                  <p className="text-xs text-cream/70 mt-0.5">8:00 AM &ndash; 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-cream text-charcoal p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center">
              <MapPin size={36} className="text-terracotta mb-4" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-bold text-forest mb-2">Find Us</h3>
              <p className="text-charcoal/80 text-sm mb-6 leading-relaxed">
                {site.address.full}
                <br />
                <span className="text-xs text-charcoal/60">Ample street parking &amp; riverside bicycle racks available</span>
              </p>

              <a
                href={`https://maps.google.com/?q=${site.address.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest text-cream py-3.5 font-semibold text-sm hover:bg-terracotta transition-colors mb-3"
              >
                <span>Get Directions</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <Link
                href="/reservations"
                id="bottom-reserve-btn"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 text-forest py-3.5 font-semibold text-sm hover:bg-sand/60 transition-colors"
              >
                <span>Reserve a Table Online</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
