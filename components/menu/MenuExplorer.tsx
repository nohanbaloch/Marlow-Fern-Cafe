"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, Check, UtensilsCrossed } from "lucide-react";
import { menuItems, type Category, type DietaryTag } from "@/data/menu";

const categories: ("All" | Category)[] = [
  "All",
  "Brunch",
  "Coffee & Tea",
  "Pastries",
  "Desserts",
  "Cold Drinks",
];

const dietaryFilters: { tag: DietaryTag; label: string }[] = [
  { tag: "V", label: "Vegetarian" },
  { tag: "VG", label: "Vegan" },
  { tag: "GF", label: "Gluten-Free" },
  { tag: "DF", label: "Dairy-Free" },
];

export function MenuExplorer() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [selectedTags, setSelectedTags] = useState<DietaryTag[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: DietaryTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setActiveCategory("All");
    setSelectedTags([]);
    setSearchQuery("");
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter: must contain all selected tags
      if (
        selectedTags.length > 0 &&
        !selectedTags.every((t) => item.tags.includes(t))
      ) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesName || matchesDesc;
      }
      return true;
    });
  }, [activeCategory, selectedTags, searchQuery]);

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          CONTROLS / FILTER BAR
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-sand/80 mb-12">
        {/* Search input */}
        <div className="relative mb-6">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ingredient or dish (e.g. sourdough, ricotta, oat)..."
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-cream/50 border border-sand focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 text-sm text-charcoal placeholder:text-charcoal/45 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-forest text-cream shadow-sm"
                  : "bg-sand/40 text-charcoal/70 hover:bg-sand hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dietary Filters & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-sand/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mr-2">
              Dietary:
            </span>
            {dietaryFilters.map(({ tag, label }) => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-terracotta text-cream shadow-xs"
                      : "bg-cream text-charcoal/70 border border-sand hover:border-terracotta/40"
                  }`}
                >
                  {active && <Check size={12} strokeWidth={3} />}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs text-charcoal/60 ml-auto">
            <span>
              Showing <strong className="text-forest font-semibold">{filteredItems.length}</strong> items
            </span>
            {(activeCategory !== "All" || selectedTags.length > 0 || searchQuery) && (
              <button
                onClick={clearAllFilters}
                className="text-terracotta hover:underline font-semibold cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MENU ITEMS GRID
          ───────────────────────────────────────────────────────────── */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-sand p-8">
          <div className="w-16 h-16 rounded-full bg-sand/40 flex items-center justify-center mx-auto mb-4 text-terracotta">
            <UtensilsCrossed size={32} />
          </div>
          <h3 className="font-heading text-2xl font-bold text-forest mb-2">No matching dishes found</h3>
          <p className="text-charcoal/70 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any items matching your selected criteria. Try adjusting your search term or dietary tags.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 rounded-full bg-forest text-cream font-semibold text-sm hover:bg-terracotta transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-sand shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-sand/30">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-forest/90 backdrop-blur-sm text-cream text-xs font-semibold rounded-full">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-terracotta text-cream text-[11px] font-bold rounded-full uppercase tracking-wider">
                    Staff Pick
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-3 mb-2">
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
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sand/50 text-charcoal/80"
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
      )}
    </div>
  );
}
