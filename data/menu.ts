// /data/menu.ts

export type DietaryTag = "V" | "VG" | "GF" | "DF";
export type Category =
  | "Brunch"
  | "Coffee & Tea"
  | "Pastries"
  | "Desserts"
  | "Cold Drinks";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;     // path under /public/images/menu
  imageAlt: string;
  tags: DietaryTag[];
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // ── Brunch ──────────────────────────────────────────────────────────
  {
    id: "brunch-avocado-toast",
    name: "Smashed Avocado Toast",
    category: "Brunch",
    price: 12.5,
    description:
      "Sourdough, lime, chili flakes, soft-poached egg, microgreens.",
    image: "/images/menu/smashed-avocado-toast.jpg",
    imageAlt: "Smashed avocado toast on sourdough with a poached egg and microgreens",
    tags: ["V"],
    featured: true,
  },
  {
    id: "brunch-ricotta-pancakes",
    name: "Ricotta Honey Pancakes",
    category: "Brunch",
    price: 13.0,
    description:
      "Fluffy stack with whipped ricotta, wildflower honey, seasonal berries.",
    image: "/images/menu/ricotta-honey-pancakes.jpg",
    imageAlt: "Fluffy ricotta honey pancakes topped with berries and a drizzle of honey",
    tags: ["V"],
    featured: true,
  },
  {
    id: "brunch-fern-plate",
    name: "Fern Breakfast Plate",
    category: "Brunch",
    price: 15.5,
    description:
      "Two eggs your way, thick-cut bacon, roasted tomatoes, grilled sourdough.",
    image: "/images/menu/smashed-avocado-toast.jpg",
    imageAlt: "Full breakfast plate with eggs, bacon, roasted tomatoes, and sourdough",
    tags: [],
  },
  {
    id: "brunch-shakshuka",
    name: "Shakshuka Skillet",
    category: "Brunch",
    price: 14.5,
    description:
      "Eggs baked in spiced tomato and pepper sauce, feta, warm pita.",
    image: "/images/menu/shakshuka-skillet.jpg",
    imageAlt: "Shakshuka skillet with eggs in spiced tomato sauce, feta, and warm pita",
    tags: ["V"],
    featured: true,
  },
  {
    id: "brunch-mushroom-benedict",
    name: "Mushroom Thyme Benedict",
    category: "Brunch",
    price: 15.0,
    description:
      "Poached eggs, sautéed mushrooms, hollandaise, toasted English muffin.",
    image: "/images/menu/smashed-avocado-toast.jpg",
    imageAlt: "Eggs Benedict with sautéed mushrooms and hollandaise on an English muffin",
    tags: ["V"],
  },
  {
    id: "brunch-granola-bowl",
    name: "Maple Granola Bowl",
    category: "Brunch",
    price: 10.5,
    description: "Greek yogurt, house granola, maple, fresh fruit.",
    image: "/images/menu/ricotta-honey-pancakes.jpg",
    imageAlt: "Greek yogurt granola bowl with maple syrup and fresh seasonal fruit",
    tags: ["V", "GF"],
  },
  {
    id: "brunch-smoked-salmon",
    name: "Smoked Salmon Bagel",
    category: "Brunch",
    price: 14.0,
    description:
      "Cream cheese, capers, red onion, dill, everything bagel.",
    image: "/images/menu/smashed-avocado-toast.jpg",
    imageAlt: "Smoked salmon bagel with cream cheese, capers, red onion, and dill",
    tags: [],
  },
  {
    id: "brunch-veggie-hash",
    name: "Garden Veggie Hash",
    category: "Brunch",
    price: 13.5,
    description:
      "Crispy potatoes, zucchini, peppers, kale, fried egg.",
    image: "/images/menu/shakshuka-skillet.jpg",
    imageAlt: "Crispy garden veggie hash with potatoes, greens, and a fried egg",
    tags: ["V", "GF", "DF"],
  },

  // ── Coffee & Tea ─────────────────────────────────────────────────────
  {
    id: "coffee-flat-white",
    name: "Flat White",
    category: "Coffee & Tea",
    price: 4.5,
    description: "Double ristretto, steamed whole milk.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Flat white coffee with a delicate tulip latte art in a ceramic cup",
    tags: ["V", "GF"],
  },
  {
    id: "coffee-honey-oat-latte",
    name: "Honey Oat Latte",
    category: "Coffee & Tea",
    price: 5.25,
    description:
      "Espresso, oat milk, local honey, pinch of cinnamon.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Honey oat latte in a ceramic cup with latte art and a dusting of cinnamon",
    tags: ["V", "DF"],
    featured: true,
  },
  {
    id: "coffee-cortado",
    name: "Cortado",
    category: "Coffee & Tea",
    price: 4.0,
    description: "Equal parts espresso and warm milk.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Cortado served in a small glass with equal parts espresso and milk",
    tags: ["V", "GF"],
  },
  {
    id: "coffee-pour-over",
    name: "Pour-Over of the Week",
    category: "Coffee & Tea",
    price: 5.0,
    description:
      "Rotating single-origin — ask us for today's tasting notes.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "A clear glass pour-over coffee with light floral notes",
    tags: ["VG", "GF"],
  },
  {
    id: "coffee-chai-latte",
    name: "Spiced Chai Latte",
    category: "Coffee & Tea",
    price: 5.0,
    description: "House masala chai, steamed milk.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Spiced chai latte in a ceramic mug with a sprinkle of spice on top",
    tags: ["V", "GF"],
  },
  {
    id: "coffee-jasmine-tea",
    name: "Jasmine Green Tea",
    category: "Coffee & Tea",
    price: 3.75,
    description: "Loose-leaf, served in a small pot.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Jasmine green tea in a small ceramic teapot with a matching cup",
    tags: ["VG", "GF"],
  },

  // ── Pastries ──────────────────────────────────────────────────────────
  {
    id: "pastry-croissant",
    name: "Brown Butter Croissant",
    category: "Pastries",
    price: 4.25,
    description: "Baked every morning, laminated by hand.",
    image: "/images/menu/brown-butter-croissant.jpg",
    imageAlt: "Golden flaky brown butter croissant on a ceramic plate with honey on the side",
    tags: ["V"],
    featured: true,
  },
  {
    id: "pastry-morning-bun",
    name: "Cardamom Morning Bun",
    category: "Pastries",
    price: 4.75,
    description: "Swirled with cardamom sugar and orange zest.",
    image: "/images/menu/brown-butter-croissant.jpg",
    imageAlt: "Cardamom morning bun swirled with sugar and orange zest",
    tags: ["V"],
  },
  {
    id: "pastry-almond-tart",
    name: "Almond Frangipane Tart",
    category: "Pastries",
    price: 5.25,
    description: "Buttery crust, almond cream, toasted flaked almonds.",
    image: "/images/menu/brown-butter-croissant.jpg",
    imageAlt: "Almond frangipane tart with a golden crust and toasted almond topping",
    tags: ["V"],
  },
  {
    id: "pastry-blueberry-muffin",
    name: "Blueberry Lemon Muffin",
    category: "Pastries",
    price: 3.95,
    description: "Lemon glaze, fresh blueberries.",
    image: "/images/menu/ricotta-honey-pancakes.jpg",
    imageAlt: "Blueberry lemon muffin with a glossy lemon glaze and fresh blueberries",
    tags: ["V"],
  },
  {
    id: "pastry-focaccia",
    name: "Olive Oil Focaccia Slice",
    category: "Pastries",
    price: 4.5,
    description: "Rosemary, flaky salt, cherry tomatoes.",
    image: "/images/menu/brown-butter-croissant.jpg",
    imageAlt: "Olive oil focaccia slice with rosemary, flaky salt, and cherry tomatoes",
    tags: ["VG", "DF"],
  },

  // ── Desserts ──────────────────────────────────────────────────────────
  {
    id: "dessert-cheesecake",
    name: "Burnt Basque Cheesecake",
    category: "Desserts",
    price: 7.5,
    description: "Creamy center, caramelized top.",
    image: "/images/menu/burnt-basque-cheesecake.jpg",
    imageAlt: "Slice of burnt Basque cheesecake with a dark caramelized top and creamy interior",
    tags: ["V", "GF"],
    featured: true,
  },
  {
    id: "dessert-chocolate-cake",
    name: "Flourless Chocolate Cake",
    category: "Desserts",
    price: 7.25,
    description: "Dark chocolate, sea salt, raspberry coulis.",
    image: "/images/menu/burnt-basque-cheesecake.jpg",
    imageAlt: "Flourless dark chocolate cake with sea salt and raspberry coulis",
    tags: ["V", "GF"],
  },
  {
    id: "dessert-olive-oil-cake",
    name: "Lemon Olive Oil Cake",
    category: "Desserts",
    price: 6.75,
    description: "Moist, citrusy, served with whipped cream.",
    image: "/images/menu/ricotta-honey-pancakes.jpg",
    imageAlt: "Lemon olive oil cake with a dusting of icing sugar and whipped cream",
    tags: ["V"],
  },
  {
    id: "dessert-affogato",
    name: "Affogato",
    category: "Desserts",
    price: 6.0,
    description: "Vanilla gelato drowned in a fresh espresso shot.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Vanilla gelato in a glass with a freshly poured espresso shot",
    tags: ["V", "GF"],
  },

  // ── Cold Drinks ───────────────────────────────────────────────────────
  {
    id: "cold-iced-latte",
    name: "Iced Brown Sugar Latte",
    category: "Cold Drinks",
    price: 5.5,
    description: "Espresso, brown sugar syrup, milk over ice.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Iced brown sugar latte with espresso and cold milk in a tall glass",
    tags: ["V", "GF"],
  },
  {
    id: "cold-strawberry-lemonade",
    name: "Strawberry Basil Lemonade",
    category: "Cold Drinks",
    price: 4.75,
    description: "Fresh-pressed lemon, muddled strawberry, basil.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Strawberry basil lemonade with fresh strawberries and basil in a glass",
    tags: ["VG", "GF"],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    category: "Cold Drinks",
    price: 4.5,
    description: "Steeped 18 hours, smooth and low-acid.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Cold brew coffee in a tall glass over ice",
    tags: ["VG", "GF"],
  },
  {
    id: "cold-mango-lassi",
    name: "Mango Lassi",
    category: "Cold Drinks",
    price: 5.25,
    description: "Mango, yogurt, a touch of cardamom.",
    image: "/images/menu/honey-oat-latte.jpg",
    imageAlt: "Mango lassi in a tall glass garnished with a pinch of cardamom",
    tags: ["V", "GF"],
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

export const categories: Category[] = [
  "Brunch",
  "Coffee & Tea",
  "Pastries",
  "Desserts",
  "Cold Drinks",
];
