export type Category = {
  slug: string;
  name: string;
  description: string;
  hero: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "whey-concentrate",
    name: "Whey Concentrate",
    description:
      "Balanced protein blend for daily use, taste, and recovery support.",
    hero: "Great value formula for steady muscle nutrition.",
    accent: "from-amber-100 to-orange-50",
  },
  {
    slug: "whey-isolate",
    name: "Whey Isolate",
    description: "High-purity protein with lower carbs, fats, and lactose.",
    hero: "Lean protein choice for cutting phases and clean macros.",
    accent: "from-sky-100 to-cyan-50",
  },
  {
    slug: "hydrolyzed-whey",
    name: "Hydrolyzed Whey",
    description:
      "Pre-digested whey peptides for faster absorption after training.",
    hero: "Advanced recovery support for high-frequency athletes.",
    accent: "from-teal-100 to-emerald-50",
  },
  {
    slug: "mass-gainer",
    name: "Mass Gainer",
    description: "High-calorie protein-carb blends to increase total intake.",
    hero: "Built for hard gainers and bulking cycles.",
    accent: "from-rose-100 to-orange-50",
  },
  {
    slug: "plant-protein",
    name: "Plant Protein",
    description: "Dairy-free blends from pea, rice, and pumpkin proteins.",
    hero: "Smooth vegan protein options for sensitive digestion.",
    accent: "from-lime-100 to-emerald-50",
  },
  {
    slug: "recovery-performance",
    name: "Recovery & Performance",
    description:
      "Post-workout stacks, amino support, and hydration performance aids.",
    hero: "Complete your stack beyond protein powder.",
    accent: "from-violet-100 to-fuchsia-50",
  },
];
