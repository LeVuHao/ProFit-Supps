import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductGrid from "../products/ProductGrid";
import SectionHeading from "./SectionHeading";

export default function BestSelling() {
  const bestSelling = products
    .filter((product) => product.isBestSelling)
    .slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="This Month"
        title="Best Selling Products"
        description="Merchandising-focused product rows make the front page feel fuller and more realistic."
        action={
          <Link
            className="inline-flex rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
            to="/wishlist"
          >
            View all
          </Link>
        }
      />
      <ProductGrid products={bestSelling} />
    </section>
  );
}
