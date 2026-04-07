import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";
import {
  categories as fallbackCategories,
  type Category,
} from "../data/categories";
import { getProductsByCategory as getLocalProducts } from "../data/products";
import { getCategories, getProductsByCategory } from "../services/api";
import type { Product } from "../data/products";

export default function CategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [categories, products] = await Promise.all([
          getCategories(),
          getProductsByCategory(slug),
        ]);

        setCategory(categories.find((item) => item.slug === slug));
        setFilteredProducts(products);
      } catch (err: any) {
        setError("Không thể tải dữ liệu từ backend. Đang dùng dữ liệu nội bộ.");
        const fallbackCategory = fallbackCategories.find(
          (item) => item.slug === slug,
        );
        setCategory(fallbackCategory);
        setFilteredProducts(getLocalProducts(slug));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-16 text-center">
        <p className="text-lg text-zinc-600">Loading category details...</p>
      </section>
    );
  }

  if (!category) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
          <h1 className="text-3xl font-bold text-black">Category not found</h1>
          <p className="mt-3 text-zinc-500">
            This category does not exist in the current storefront.
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
        {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No products are currently assigned to this category."
        />
      </div>
    </section>
  );
}
