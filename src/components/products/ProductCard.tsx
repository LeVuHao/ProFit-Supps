import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency, type Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const hasImagePath =
    product.image.includes("/") ||
    /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(product.image);

  return (
    <Link
      className="group block translate-y-0 scale-100 transform-gpu overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-[5px] hover:scale-[1.05] hover:shadow-[0_22px_50px_rgba(15,23,42,0.14)] motion-reduce:transform-none"
      to={`/product/${product.id}`}
    >
      <div className="relative border-b border-zinc-100 bg-zinc-100 p-5 transition-colors duration-300 ease-out group-hover:bg-zinc-50">
        {product.discount ? (
          <span className="absolute left-4 top-4 rounded bg-[#db4444] px-2 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        ) : null}
        <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none">
          {hasImagePath ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="text-4xl font-bold tracking-[0.2em] text-zinc-400">
              {product.image}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {product.category}
          </p>
          <h3 className="mt-1 text-base font-semibold text-zinc-900 transition-colors group-hover:text-[#db4444]">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-zinc-500">
            {product.shortDescription}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#db4444]">
            {formatCurrency(product.price)}
          </span>
          {product.oldPrice ? (
            <span className="text-sm text-zinc-400 line-through">
              {formatCurrency(product.oldPrice)}
            </span>
          ) : null}
        </div>
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-zinc-700">{product.rating.toFixed(1)}</span>
          </div>
          <span className="font-medium text-zinc-900">View Details</span>
        </div>
      </div>
    </Link>
  );
}
