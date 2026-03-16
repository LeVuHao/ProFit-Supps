export type Category = {
  slug: string;
  name: string;
  description: string;
  hero: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "womens-fashion",
    name: "Women's Fashion",
    description:
      "Statement pieces, wardrobe staples, and refined everyday looks.",
    hero: "Modern silhouettes with elevated essentials.",
    accent: "from-rose-100 to-orange-50",
  },
  {
    slug: "mens-fashion",
    name: "Men's Fashion",
    description: "Tailored layers, clean lines, and off-duty essentials.",
    hero: "Confident fits for daily wear.",
    accent: "from-slate-100 to-zinc-50",
  },
  {
    slug: "electronics",
    name: "Electronics",
    description: "Performance gear, audio, mobile, and desk-ready upgrades.",
    hero: "Smart tech built for work and play.",
    accent: "from-cyan-100 to-blue-50",
  },
  {
    slug: "home-lifestyle",
    name: "Home & Lifestyle",
    description: "Furniture, decor, and useful upgrades for calm interiors.",
    hero: "Design-forward comfort for every corner.",
    accent: "from-amber-100 to-orange-50",
  },
  {
    slug: "sports-outdoor",
    name: "Sports & Outdoor",
    description: "Training, recovery, movement, and adventure basics.",
    hero: "Move well, outdoors and in.",
    accent: "from-lime-100 to-emerald-50",
  },
  {
    slug: "health-beauty",
    name: "Health & Beauty",
    description:
      "Skincare, wellness, and grooming products with a premium feel.",
    hero: "Daily rituals made better.",
    accent: "from-pink-100 to-fuchsia-50",
  },
];
