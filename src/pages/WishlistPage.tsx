import ProductGrid from "../components/products/ProductGrid";
import { products } from "../data/products";

export default function WishlistPage() {
  const wishlistItems = products.slice(3, 7);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">Home / Wishlist</p>
          <h1 className="mt-3 text-4xl font-bold text-black">Wishlist</h1>
        </div>
        <p className="text-sm text-zinc-500">
          {wishlistItems.length} items saved
        </p>
      </div>
      <ProductGrid products={wishlistItems} />
    </section>
  );
}
