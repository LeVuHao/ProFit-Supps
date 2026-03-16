export type Product = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  shortDescription: string;
  description: string;
  isFlashSale?: boolean;
  isBestSelling?: boolean;
  isExplore?: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
};

export const products: Product[] = [
  {
    id: "gamepad-havit-hv-g92",
    name: "HAVIT HV-G92 Gamepad",
    category: "Electronics",
    categorySlug: "electronics",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4.8,
    image: "GP",
    shortDescription:
      "Responsive wireless controller for casual and competitive gaming.",
    description:
      "A lightweight wireless controller with textured grips, low-latency pairing, and long battery life for console-style play.",
    isFlashSale: true,
    isExplore: true,
  },
  {
    id: "ak-900-keyboard",
    name: "AK-900 Wired Keyboard",
    category: "Electronics",
    categorySlug: "electronics",
    price: 960,
    oldPrice: 1160,
    discount: 25,
    rating: 4.7,
    image: "KB",
    shortDescription:
      "Mechanical feel keyboard with solid travel and compact layout.",
    description:
      "Designed for desk setups that need tactile response, durable switches, and a minimalist profile.",
    isFlashSale: true,
    isBestSelling: true,
    isExplore: true,
  },
  {
    id: "ips-lcd-monitor",
    name: "IPS LCD Gaming Monitor",
    category: "Electronics",
    categorySlug: "electronics",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 4.9,
    image: "MN",
    shortDescription: "Crisp visuals and fluid refresh rates for work or play.",
    description:
      "A 27-inch IPS display with rich color, slim bezels, and fast response for immersive viewing.",
    isFlashSale: true,
    isBestSelling: true,
    isFeatured: true,
  },
  {
    id: "s-series-chair",
    name: "S-Series Comfort Chair",
    category: "Home & Lifestyle",
    categorySlug: "home-lifestyle",
    price: 375,
    rating: 4.5,
    image: "CH",
    shortDescription: "Ergonomic seating with a clean silhouette.",
    description:
      "Supportive cushioning, matte metal frame, and posture-friendly design for long sessions.",
    isBestSelling: true,
    isExplore: true,
  },
  {
    id: "north-face-gucci-coat",
    name: "Quilted Winter Coat",
    category: "Women's Fashion",
    categorySlug: "womens-fashion",
    price: 660,
    oldPrice: 780,
    discount: 15,
    rating: 4.6,
    image: "CT",
    shortDescription: "Structured outerwear with lightweight insulation.",
    description:
      "A fashion-forward quilted coat that balances warmth, movement, and statement styling.",
    isExplore: true,
    isNewArrival: true,
  },
  {
    id: "gucci-duffle-bag",
    name: "Savoy Travel Duffle",
    category: "Men's Fashion",
    categorySlug: "mens-fashion",
    price: 960,
    rating: 4.4,
    image: "BG",
    shortDescription:
      "Large carryall bag with structured shape and premium finish.",
    description:
      "A polished travel duffle with roomy interior compartments and elevated detailing.",
    isBestSelling: true,
    isExplore: true,
  },
  {
    id: "deepcool-gammaxx-cooler",
    name: "RGB Liquid Cooler",
    category: "Electronics",
    categorySlug: "electronics",
    price: 160,
    oldPrice: 210,
    discount: 24,
    rating: 4.3,
    image: "CL",
    shortDescription:
      "Quiet thermal performance for high-output desktop builds.",
    description:
      "Keeps temperatures controlled under load with an RGB top plate and efficient radiator design.",
    isFlashSale: true,
    isExplore: true,
  },
  {
    id: "curology-skin-set",
    name: "Curology Skin Set",
    category: "Health & Beauty",
    categorySlug: "health-beauty",
    price: 500,
    rating: 4.8,
    image: "SK",
    shortDescription:
      "Daily skincare essentials with a clean, calming formulation.",
    description:
      "A three-step skincare routine focused on hydration, balance, and texture refinement.",
    isBestSelling: true,
    isExplore: true,
    isFeatured: true,
  },
  {
    id: "kids-electric-car",
    name: "Mini Electric Ride-On",
    category: "Sports & Outdoor",
    categorySlug: "sports-outdoor",
    price: 960,
    rating: 4.2,
    image: "RC",
    shortDescription:
      "Kids ride-on toy with premium styling and rechargeable battery.",
    description:
      "A playful electric ride-on with safe acceleration, remote guidance, and premium trim details.",
    isExplore: true,
    isNewArrival: true,
  },
  {
    id: "copa-sense-boots",
    name: "Copa Sense Boots",
    category: "Sports & Outdoor",
    categorySlug: "sports-outdoor",
    price: 1160,
    oldPrice: 1400,
    discount: 17,
    rating: 4.7,
    image: "FB",
    shortDescription: "Soft-touch football boots with close control feel.",
    description:
      "Engineered boots with adaptive fit, grounded traction, and comfortable support during movement.",
    isExplore: true,
    isFeatured: true,
  },
  {
    id: "canon-eos-250d",
    name: "Canon EOS 250D",
    category: "Electronics",
    categorySlug: "electronics",
    price: 660,
    oldPrice: 760,
    discount: 13,
    rating: 4.9,
    image: "CM",
    shortDescription:
      "Portable mirrorless-ready DSLR for creators on the move.",
    description:
      "Compact body, reliable autofocus, and creator-friendly controls for photo and video.",
    isBestSelling: true,
    isFeatured: true,
  },
  {
    id: "idea-pad-gaming-3",
    name: "IdeaPad Gaming 3",
    category: "Electronics",
    categorySlug: "electronics",
    price: 960,
    oldPrice: 1100,
    discount: 12,
    rating: 4.6,
    image: "LP",
    shortDescription:
      "Gaming laptop with practical performance for everyday users.",
    description:
      "Balanced laptop for gaming, creation, and productivity with modern thermal tuning.",
    isExplore: true,
    isNewArrival: true,
  },
  {
    id: "accent-lounge-lamp",
    name: "Accent Lounge Lamp",
    category: "Home & Lifestyle",
    categorySlug: "home-lifestyle",
    price: 120,
    rating: 4.1,
    image: "LP",
    shortDescription: "Warm ambient lighting with a sculptural silhouette.",
    description:
      "A small-space lamp with soft glow, matte finish, and modern studio-inspired form.",
    isExplore: true,
    isNewArrival: true,
  },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getProductById(id?: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(slug?: string) {
  return products.filter((product) => product.categorySlug === slug);
}
