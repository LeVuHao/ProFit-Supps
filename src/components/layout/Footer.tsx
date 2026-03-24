import { Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-[linear-gradient(180deg,#0b1120_0%,#111827_100%)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 xl:grid-cols-5">
        <div className="space-y-4">
          <h2 className="text-2xl font-black tracking-[0.08em]">ProFit</h2>
          <p className="text-sm text-zinc-300">
            Subscribe to get 10% off your first order.
          </p>
          <div className="flex items-center overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
            <input
              className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
              placeholder="Enter your email"
            />
            <button
              className="px-4 text-zinc-200 transition-colors hover:text-orange-300"
              type="button"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3 text-sm text-zinc-300">
          <h3 className="text-base font-semibold text-white">Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="space-y-3 text-sm text-zinc-300">
          <h3 className="text-base font-semibold text-white">Account</h3>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/signup"
          >
            Register
          </Link>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/wishlist"
          >
            Wishlist
          </Link>
        </div>

        <div className="space-y-3 text-sm text-zinc-300">
          <h3 className="text-base font-semibold text-white">Quick Link</h3>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/category/whey-isolate"
          >
            Whey Isolate
          </Link>
          <Link
            className="block transition-colors hover:text-orange-300"
            to="/category/recovery-performance"
          >
            Recovery Stack
          </Link>
        </div>

        <div className="space-y-4 text-sm text-zinc-300">
          <div>
            <h3 className="text-base font-semibold text-white">Download App</h3>
            <p className="mt-2 text-xs text-zinc-500">
              Save $3 with App New User Only
            </p>
          </div>
          <div className="grid grid-cols-[88px_1fr] gap-3">
            <div className="flex h-[88px] items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-xs text-zinc-400">
              QR
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-center text-xs">
                Google Play
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-center text-xs">
                App Store
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-zinc-300">
            <Facebook className="h-4 w-4 transition-colors hover:text-orange-300" />
            <Twitter className="h-4 w-4 transition-colors hover:text-orange-300" />
            <Instagram className="h-4 w-4 transition-colors hover:text-orange-300" />
            <Youtube className="h-4 w-4 transition-colors hover:text-orange-300" />
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-500">
        Copyright ProFit 2026. All rights reserved.
      </div>
    </footer>
  );
}
