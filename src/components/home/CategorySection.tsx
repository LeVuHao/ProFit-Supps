import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import SectionHeading from "./SectionHeading";

export default function CategorySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Categories"
        title="Browse By Category"
        description="Clickable category blocks route to filtered catalog pages using mock data only."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            className={`group rounded-2xl border border-zinc-200 bg-gradient-to-br ${category.accent} p-6 transition-transform hover:-translate-y-1`}
            to={`/category/${category.slug}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Collection
            </p>
            <h3 className="mt-4 text-2xl font-bold text-zinc-900">
              {category.name}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
              {category.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900">
              Explore
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
