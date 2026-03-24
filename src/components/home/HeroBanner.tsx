import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

export default function HeroBanner() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-3xl border border-zinc-200/80 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.07)] backdrop-blur">
        <h2 className="mb-4 text-lg font-bold tracking-wide text-zinc-900">
          Shop by category
        </h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              className="group flex translate-x-0 transform-gpu items-center justify-between rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 ease-out hover:translate-x-[5px] hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 motion-reduce:transform-none"
              to={`/category/${category.slug}`}
            >
              <span>{category.name}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          ))}
        </div>
      </aside>

      <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(140deg,#111827_10%,#1f2937_52%,#0f172a_100%)] px-8 py-12 text-white shadow-[0_30px_70px_rgba(15,23,42,0.35)] md:px-12">
        <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%)] lg:block" />
        <div className="relative max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 md:text-sm">
            Featured
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-[0.02em] md:text-6xl">
            Stronger Every Day. Premium Fuel For Your Performance.
          </h1>
          <p className="max-w-xl text-sm leading-7 text-zinc-200 md:text-base">
            Curated whey formulas, performance stacks, and recovery nutrition
            built for strength training and daily athletic progress.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100 md:text-sm">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2">
              24h Dispatch
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2">
              Verified Formula
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2">
              Athlete Approved
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="inline-flex transform-gpu items-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(249,115,22,0.35)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:scale-[1.04] hover:bg-orange-400 motion-reduce:transform-none"
              to="/category/whey-isolate"
            >
              Shop collection
            </Link>
            <Link
              className="group inline-flex transform-gpu items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-[3px] hover:scale-[1.04] hover:border-teal-200/70 hover:text-teal-100 motion-reduce:transform-none"
              to="/about"
            >
              Explore brand
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
