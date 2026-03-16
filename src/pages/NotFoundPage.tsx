import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
        <p className="text-sm text-zinc-500">404 Error</p>
        <h1 className="mt-3 text-4xl font-bold text-black">Page not found</h1>
        <p className="mt-3 text-zinc-500">
          The page you requested does not exist in this frontend demo.
        </p>
        <Link
          className="mt-6 inline-flex rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white"
          to="/"
        >
          Return to home page
        </Link>
      </div>
    </section>
  );
}
