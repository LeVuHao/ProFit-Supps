import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductGrid from "../products/ProductGrid";
import SectionHeading from "./SectionHeading";

export default function FlashSales() {
  const flashProducts = products
    .filter((product) => product.isFlashSale)
    .slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Today's"
        title="Flash Sales"
        description="Limited-time pricing blocks that make the homepage feel like a real ecommerce campaign."
        action={
          <p className="text-sm font-medium text-zinc-500">03 : 23 : 19 : 56</p>
        }
      />
      <ProductGrid products={flashProducts} />
      <div className="mt-8 text-center">
        <Link
          className="inline-flex rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
          to="/category/electronics"
        >
          View all products
        </Link>
      </div>
    </section>
  );
}
