import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";
import { categories } from "../data/categories";
import { getProductsByCategory } from "../data/products";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const filteredProducts = getProductsByCategory(slug);

  if (!category) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
          <h1 className="text-3xl font-bold text-black">Category not found</h1>
          <p className="mt-3 text-zinc-500">
            This category does not exist in the current mock storefront.
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

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div
        className={`rounded-[28px] bg-gradient-to-br ${category.accent} p-8`}
      >
        <p className="text-sm text-zinc-500">
          Home / Category / {category.name}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-black">{category.name}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
          {category.hero} {category.description}
        </p>
      </div>
      <div className="mt-10">
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No mock products are currently assigned to this category."
        />
      </div>
    </section>
  );
}
