import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { site } from "@/data/site";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual glimpse into our café space, morning dishes, espresso pours, and community table moments.",
};

export default function GalleryPage() {
  return (
    <div className="py-24 sm:py-28 bg-cream min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
            Visual Journal
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-forest mt-2 mb-4">
            Our Atmosphere
          </h1>
          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
            Sunlit mornings, hand-thrown ceramics, and dishes that taste as honest as they look.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />

        {/* Instagram Tag Section */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-sand/30 border border-sand text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center mx-auto mb-4">
            <InstagramIcon size={24} />
          </div>
          <h2 className="font-heading text-2xl font-bold text-forest mb-2">
            Share Your Morning With Us
          </h2>
          <p className="text-charcoal/70 text-sm mb-6">
            Tag <strong className="text-forest font-semibold">{site.socials.instagram.handle}</strong> in your photos to be featured on our community board.
          </p>
          <a
            href={site.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-cream text-sm font-semibold hover:bg-terracotta transition-colors"
          >
            <InstagramIcon size={16} />
            <span>Follow {site.socials.instagram.handle}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
