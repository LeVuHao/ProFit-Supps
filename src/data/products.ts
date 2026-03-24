import eliteWheyIsolateImg from "../public/images/Elite_Pro_Whey_Isolate.jpg";
import goldWheyConcentrateImg from "../public/images/Gold_Standard_Whey_Concentrate.jpg";
import hydroRapidRecoveryImg from "../public/images/hydro_rapid_recovery.jpg";
import veganPeaRiceBlendImg from "../public/images/vegan_pea_rice_blend.jpg";

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
    id: "gold-whey-concentrate",
    name: "Gold Standard Whey Concentrate",
    category: "Whey Concentrate",
    categorySlug: "whey-concentrate",
    price: 45,
    oldPrice: 55,
    discount: 18,
    rating: 4.8,
    image: goldWheyConcentrateImg,
    shortDescription:
      "Classic 80% concentration with great taste and mixability.",
    description:
      "Industry standard with proven amino acid profile, 24g protein per scoop, and clean ingredients for daily post-workout recovery.",
    isFlashSale: true,
    isExplore: true,
  },
  {
    id: "elite-whey-isolate",
    name: "Elite Pro Whey Isolate",
    category: "Whey Isolate",
    categorySlug: "whey-isolate",
    price: 65,
    oldPrice: 85,
    discount: 24,
    rating: 4.9,
    image: eliteWheyIsolateImg,
    shortDescription:
      "Microfiltered isolate with 25g protein and minimal carbs.",
    description:
      "Premium 90%+ isolate with reduced lactose, designed for lean physiques and cutting phases while maintaining muscle mass.",
    isFlashSale: true,
    isBestSelling: true,
    isExplore: true,
  },
  {
    id: "hydro-rapid-recovery",
    name: "Hydro-Rapid Recovery Complex",
    category: "Hydrolyzed Whey",
    categorySlug: "hydrolyzed-whey",
    price: 72,
    oldPrice: 88,
    discount: 18,
    rating: 4.7,
    image: hydroRapidRecoveryImg,
    shortDescription: "Pre-hydrolyzed peptides for 40-minute peak absorption.",
    description:
      "Broken-chain whey hydrolysate maximizes amino spike post-training, ideal for intra-workout or immediate post-exercise recovery.",
    isFlashSale: true,
    isBestSelling: true,
    isFeatured: true,
  },
  {
    id: "mass-fuel-bulk-gainer",
    name: "Mass Fuel Bulking Gainer",
    category: "Mass Gainer",
    categorySlug: "mass-gainer",
    price: 38,
    rating: 4.6,
    image: "MG1",
    shortDescription: "1000 cal/scoop blend for serious bulk phases.",
    description:
      "Calorie-dense formula: 50g carbs, 25g protein, 8g fat per serving, designed for hard gainers and off-season training.",
    isBestSelling: true,
    isExplore: true,
  },
  {
    id: "vanilla-whey-pro",
    name: "Vanilla Dream Whey Pro",
    category: "Whey Concentrate",
    categorySlug: "whey-concentrate",
    price: 42,
    oldPrice: 52,
    discount: 19,
    rating: 4.5,
    image: "WC2",
    shortDescription: "Smooth vanilla flavor with BCAA matrix boost.",
    description:
      "Enhanced concentrate formula with added 2:1:1 BCAA ratio for improved recovery signaling and muscle preservation.",
    isExplore: true,
    isNewArrival: true,
  },
  {
    id: "chocolate-isolate-pure",
    name: "Pure Chocolate Isolate",
    category: "Whey Isolate",
    categorySlug: "whey-isolate",
    price: 68,
    rating: 4.8,
    image: "WI2",
    shortDescription: "Rich chocolate isolate with zero sugar and low sodium.",
    description:
      "Clean label isolate with minimal additives, 26g protein, and electrolyte blend for superior hydration during workouts.",
    isBestSelling: true,
    isExplore: true,
  },
  {
    id: "vegan-pea-rice-blend",
    name: "Vegan Pea & Rice Blend",
    category: "Plant Protein",
    categorySlug: "plant-protein",
    price: 48,
    oldPrice: 58,
    discount: 17,
    rating: 4.4,
    image: veganPeaRiceBlendImg,
    shortDescription: "Complete amino profile from organic plant sources.",
    description:
      "Dairy-free, naturally sweetened with stevia, pea + rice protein combo delivers all 9 essential amino acids.",
    isFlashSale: true,
    isExplore: true,
  },
  {
    id: "amino-recovery-stack",
    name: "Advanced Amino Recovery Stack",
    category: "Recovery & Performance",
    categorySlug: "recovery-performance",
    price: 35,
    rating: 4.7,
    image: "RS1",
    shortDescription: "Standalone 6g BCAA + EAA complex for intra-workout use.",
    description:
      "Comprehensive 2:1:1 BCAA + full EAA spectrum, zero carbs, designed to prevent catabolism during fasted training.",
    isBestSelling: true,
    isExplore: true,
    isFeatured: true,
  },
  {
    id: "creatine-monohydrate-elite",
    name: "Creatine Monohydrate Elite",
    category: "Recovery & Performance",
    categorySlug: "recovery-performance",
    price: 18,
    rating: 4.9,
    image: "RS2",
    shortDescription: "Micronized 5g-per-scoop pure creatine monohydrate.",
    description:
      "Pharmaceutical-grade creatine for ATP energy recreation, muscle strength gains, and cognitive support with zero fillers.",
    isExplore: true,
    isNewArrival: true,
  },
  {
    id: "hydro-whey-peptide-pro",
    name: "Hydro Whey Peptide Pro",
    category: "Hydrolyzed Whey",
    categorySlug: "hydrolyzed-whey",
    price: 75,
    oldPrice: 92,
    discount: 18,
    rating: 4.6,
    image: "WH2",
    shortDescription: "Ultra-fast absorption hydrolyzed peptides, vanilla.",
    description:
      "Triple-hydrolyzed whey with added MCT oil for rapid energy, perfect for athletes needing maximum nutrient uptake speed.",
    isExplore: true,
    isFeatured: true,
  },
  {
    id: "lean-muscle-isolate-20",
    name: "Lean Muscle Isolate 20-Pack",
    category: "Whey Isolate",
    categorySlug: "whey-isolate",
    price: 62,
    oldPrice: 78,
    discount: 21,
    rating: 4.8,
    image: "WI3",
    shortDescription:
      "Single-serve isolate packets for grab-and-go convenience.",
    description:
      "20 pre-portioned individual packets, 25g protein each, no mixing needed for on-the-go gym athletes.",
    isBestSelling: true,
    isFeatured: true,
  },
  {
    id: "mass-fuel-chocolate",
    name: "Mass Fuel Chocolate Gainer",
    category: "Mass Gainer",
    categorySlug: "mass-gainer",
    price: 40,
    oldPrice: 48,
    discount: 17,
    rating: 4.5,
    image: "MG2",
    shortDescription: "Thick chocolate gainer with oat base for volume.",
    description:
      "Oat-based mass gainer with 45g carbs and 23g protein, perfect for post-workout calorie surplus and smooth texture.",
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
