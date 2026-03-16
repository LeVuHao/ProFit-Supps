import type { Product } from "../../data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  emptyMessage?: string;
};

export default function ProductGrid({
  products,
  emptyMessage = "No products available in this section yet.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
