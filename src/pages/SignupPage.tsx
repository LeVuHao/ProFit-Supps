import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl px-4 py-12">
      <div className="grid w-full gap-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm lg:grid-cols-[1fr_420px]">
        <div className="min-h-[520px] bg-gradient-to-br from-rose-100 via-orange-50 to-white p-10">
          <div className="flex h-full items-center justify-center rounded-[24px] border border-white/70 bg-white/60 text-center text-6xl font-bold tracking-[0.22em] text-[#db4444]">
            NEW
          </div>
        </div>
        <div className="flex items-center p-8 md:p-10">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-black">Create an account</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Enter your details below
            </p>
            <div className="mt-8 space-y-4">
              <input
                className="w-full border-b border-zinc-200 px-1 py-3 outline-none"
                placeholder="Name"
              />
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
            <button
              className="mt-8 w-full rounded-md bg-[#db4444] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
              type="button"
            >
              Create Account
            </button>
            <button
              className="mt-4 w-full rounded-md border border-zinc-200 px-8 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
              type="button"
            >
              Sign up with Google
            </button>
            <p className="mt-8 text-center text-sm text-zinc-500">
              Already have account?{" "}
              <Link className="font-semibold text-black underline" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
