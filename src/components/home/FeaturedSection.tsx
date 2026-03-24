import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import SectionHeading from "./SectionHeading";

export default function FeaturedSection() {
  const featured = products
    .filter((product) => product.isFeatured || product.isNewArrival)
    .slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Featured"
        title="New Arrival"
        description="A mixed feature section gives the homepage another distinct content band beneath the product grids."
      />
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[28px] bg-black p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Performance Stack
          </p>
          <h3 className="mt-3 text-3xl font-bold">
            Hydrolyzed Whey Peptides For Maximum Speed Absorption.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300">
            Pre-digested amino chains reach your muscles faster than standard
            protein. Perfect for post-workout recovery windows with maximum
            bioavailability.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            to="/category/hydrolyzed-whey"
          >
            Shop now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {featured.map((product) => {
            const hasImagePath =
              product.image.includes("/") ||
              /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(product.image);

            return (
              <Link
                key={product.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
                to={`/product/${product.id}`}
              >
                <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200">
                  {hasImagePath ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-3xl font-bold tracking-[0.2em] text-zinc-400">
                      {product.image}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {product.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#db4444]">
                  View details
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
