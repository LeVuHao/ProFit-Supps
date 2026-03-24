import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";
import { formatCurrency, getProductById, products } from "../data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const hasImagePath = Boolean(
    product?.image &&
    (product.image.includes("/") ||
      /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(product.image)),
  );

  if (!product) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
          <h1 className="text-3xl font-bold text-black">Product not found</h1>
          <p className="mt-3 text-zinc-500">
            The product you requested does not exist in the mock catalog.
          </p>
          <Link
            className="mt-6 inline-flex rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white"
            to="/"
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.categorySlug === product.categorySlug && item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <p className="text-sm text-zinc-500">
        Home / {product.category} / {product.name}
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 text-7xl font-bold tracking-[0.22em] text-zinc-400">
            {hasImagePath ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            ) : (
              product.image
            )}
          </div>
        </div>
        <div className="space-y-5 rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {product.category}
            </p>
            <h1 className="mt-2 text-4xl font-bold text-black">
              {product.name}
            </h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-zinc-700">{product.rating.toFixed(1)}</span>
            </div>
            <span>|</span>
            <span>In stock</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-[#db4444]">
              {formatCurrency(product.price)}
            </span>
            {product.oldPrice ? (
              <span className="text-lg text-zinc-400 line-through">
                {formatCurrency(product.oldPrice)}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-7 text-zinc-600">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
              to="/cart"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to cart
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
              to="/wishlist"
            >
              <Heart className="h-4 w-4" />
              Move to wishlist
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="mb-6 text-2xl font-bold text-black">Related Items</h2>
        <ProductGrid
          products={relatedProducts}
          emptyMessage="No related products found for this category yet."
        />
      </div>
    </section>
  );
}
