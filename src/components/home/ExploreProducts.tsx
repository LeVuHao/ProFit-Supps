import { products } from "../../data/products";
import ProductGrid from "../products/ProductGrid";
import SectionHeading from "./SectionHeading";

export default function ExploreProducts() {
  const exploreProducts = products
    .filter((product) => product.isExplore)
    .slice(0, 8);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Our Products"
        title="Explore Our Products"
        description="A larger product grid extends the page vertically and improves the demo browsing experience."
      />
      <ProductGrid products={exploreProducts} />
    </section>
  );
}
