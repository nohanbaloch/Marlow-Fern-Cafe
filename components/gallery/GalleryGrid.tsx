"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryImages, type GalleryImage } from "@/data/gallery";

type GalleryCategory = "All" | "Food" | "Drinks" | "Café";
const filterCategories: GalleryCategory[] = ["All", "Food", "Drinks", "Café"];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const displayedImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-forest text-cream shadow-sm"
                : "bg-white text-charcoal/70 border border-sand hover:bg-sand/40 hover:text-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-sand/30 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-sand/60"
          >
            <Image
              src={img.file}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-[11px] uppercase tracking-wider text-terracotta font-bold">
                {img.category}
              </span>
              <p className="font-heading text-lg font-bold text-cream mt-1">
                {img.caption || img.alt}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-cream/80">
                <ZoomIn size={14} aria-hidden="true" />
                <span>Click to view larger</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-forest rounded-2xl overflow-hidden p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-cream hover:bg-terracotta transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={selectedImage.file}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1200px) 90vw, 1000px"
                className="object-contain"
              />
            </div>

            <div className="py-3 px-4 text-center w-full">
              <p className="font-heading text-lg font-bold text-cream">
                {selectedImage.caption || selectedImage.alt}
              </p>
              <p className="text-xs text-cream/70 mt-1 uppercase tracking-wider">
                {selectedImage.category} &bull; Marlow &amp; Fern
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
