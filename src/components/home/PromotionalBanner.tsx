import { Link } from "react-router-dom";

export default function PromotionalBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="overflow-hidden rounded-[28px] bg-black px-8 py-12 text-white md:px-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
              Categories
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              Enhance your music experience with a premium desk setup.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              Promotional sections create vertical depth and give the homepage
              the same campaign-driven rhythm found in polished commerce landing
              pages.
            </p>
            <Link
              className="inline-flex rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              to="/category/electronics"
            >
              Buy now
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "23", text: "Hours" },
              { label: "05", text: "Days" },
              { label: "59", text: "Minutes" },
              { label: "35", text: "Seconds" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex aspect-square flex-col items-center justify-center rounded-full bg-white text-center text-black"
              >
                <span className="text-2xl font-bold">{item.label}</span>
                <span className="text-sm text-zinc-500">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
