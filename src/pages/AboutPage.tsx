const stats = [
  { label: "Sellers active on our site", value: "10.5k" },
  { label: "Monthly product sale", value: "33k" },
  { label: "Customers active in our site", value: "45.5k" },
  { label: "Annual gross sale in our site", value: "25k" },
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
        <div>
          <p className="text-sm text-zinc-500">Home / About</p>
          <h1 className="mt-3 text-4xl font-bold text-black">Our Story</h1>
          <div className="mt-5 max-w-2xl space-y-4 text-zinc-600">
            <p>
              Exclusive is a frontend-only storefront demo built to feel like a
              full ecommerce experience while remaining simple to iterate on.
            </p>
            <p>
              The current version focuses on routing, reusable sections, mock
              catalog browsing, and polished UI structure so the project can
              evolve later without needing backend code right now.
            </p>
          </div>
        </div>
        <div className="rounded-[28px] bg-gradient-to-br from-rose-100 via-orange-50 to-white p-8">
          <div className="flex h-72 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-center text-5xl font-bold tracking-[0.2em] text-[#db4444]">
            EX
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-bold text-black">{stat.value}</p>
            <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
