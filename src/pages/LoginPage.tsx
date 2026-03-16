import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl px-4 py-12">
      <div className="grid w-full gap-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm lg:grid-cols-[1fr_420px]">
        <div className="min-h-[520px] bg-gradient-to-br from-sky-100 via-cyan-50 to-white p-10">
          <div className="flex h-full items-center justify-center rounded-[24px] border border-white/70 bg-white/60 text-center text-6xl font-bold tracking-[0.22em] text-sky-500">
            LOG
          </div>
        </div>
        <div className="flex items-center p-8 md:p-10">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-black">
              Log in to Exclusive
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Enter your details below
            </p>
            <div className="mt-8 space-y-4">
              <input
                className="w-full border-b border-zinc-200 px-1 py-3 outline-none"
                placeholder="Email or Phone Number"
              />
              <input
                className="w-full border-b border-zinc-200 px-1 py-3 outline-none"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                className="rounded-md bg-[#db4444] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
                type="button"
              >
                Log In
              </button>
              <button
                className="text-sm font-medium text-[#db4444]"
                type="button"
              >
                Forget Password?
              </button>
            </div>
            <p className="mt-8 text-sm text-zinc-500">
              New here?{" "}
              <Link className="font-semibold text-black underline" to="/signup">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
