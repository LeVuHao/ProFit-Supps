export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8">
        <p className="text-sm text-zinc-500">Home / Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-black">Contact</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">Call To Us</h2>
            <p className="mt-3 text-sm text-zinc-500">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mt-2 font-medium">Phone: +8801611112222</p>
          </div>
          <div className="border-t border-zinc-200 pt-6">
            <h2 className="text-xl font-semibold">Write To Us</h2>
            <p className="mt-3 text-sm text-zinc-500">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-2 font-medium">Email: customer@exclusive.demo</p>
          </div>
        </div>
        <form className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <input
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none"
              placeholder="Your Name"
            />
            <input
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none"
              placeholder="Your Email"
            />
            <input
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none"
              placeholder="Your Phone"
            />
          </div>
          <textarea
            className="mt-4 min-h-52 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none"
            placeholder="Your Message"
          />
          <div className="mt-5 text-right">
            <button
              className="rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
              type="button"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
