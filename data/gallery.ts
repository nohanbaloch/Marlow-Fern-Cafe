// /data/gallery.ts

export interface GalleryImage {
  id: string;
  file: string;      // path under /public/images/gallery
  alt: string;
  caption?: string;
  category: "Food" | "Drinks" | "Café";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    file: "/images/menu/ricotta-honey-pancakes.jpg",
    alt: "Stack of ricotta pancakes topped with berries and honey",
    caption: "Ricotta Honey Pancakes",
    category: "Food",
  },
  {
    id: "g2",
    file: "/images/menu/smashed-avocado-toast.jpg",
    alt: "Avocado toast with poached egg on sourdough",
    caption: "Smashed Avocado Toast",
    category: "Food",
  },
  {
    id: "g3",
    file: "/images/menu/honey-oat-latte.jpg",
    alt: "Overhead view of a honey oat latte with leaf latte art",
    caption: "Honey Oat Latte",
    category: "Drinks",
  },
  {
    id: "g4",
    file: "/images/menu/brown-butter-croissant.jpg",
    alt: "Tray of freshly baked golden brown butter croissants",
    caption: "Brown Butter Croissant",
    category: "Food",
  },
  {
    id: "g5",
    file: "/images/about/cafe-interior.jpg",
    alt: "Bright café interior with wooden tables and hanging plants",
    caption: "Our Space",
    category: "Café",
  },
  {
    id: "g6",
    file: "/images/menu/shakshuka-skillet.jpg",
    alt: "Shakshuka skillet with eggs baked in spiced tomato sauce and feta",
    caption: "Shakshuka Skillet",
    category: "Food",
  },
  {
    id: "g7",
    file: "/images/menu/burnt-basque-cheesecake.jpg",
    alt: "Slice of burnt Basque cheesecake on a white plate",
    caption: "Burnt Basque Cheesecake",
    category: "Food",
  },
  {
    id: "g8",
    file: "/images/hero/hero-brunch.jpg",
    alt: "Overhead view of a full café brunch spread with coffee and pastries",
    caption: "Weekend Brunch",
    category: "Food",
  },
];
