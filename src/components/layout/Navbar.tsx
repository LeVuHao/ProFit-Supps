import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100/80 bg-white/90 backdrop-blur-xl">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-4 py-2 text-center text-sm font-medium text-white">
        New season fuel deals are live. Extra perks on first order.{" "}
        <Link
          className="font-semibold underline decoration-white/70 underline-offset-4"
          to="/signup"
        >
          Shop now
        </Link>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-4 py-5">
        <Link
          className="mr-2 rounded-xl bg-zinc-900 px-4 py-2 text-2xl font-black tracking-[0.1em] text-white shadow-[0_12px_24px_rgba(24,24,27,0.16)]"
          to="/"
        >
          ProFit
        </Link>

        <nav className="flex flex-1 flex-wrap items-center gap-3 text-sm font-semibold">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {({ isActive }) => (
                <span
                  className={`group relative inline-flex origin-left transform-gpu rounded-full px-3 py-1.5 transition-all duration-[250ms] ease-in-out motion-reduce:transform-none ${
                    isActive
                      ? "scale-[1.03] bg-orange-100 text-orange-700"
                      : "text-zinc-700 hover:scale-[1.03] hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`mt-1 h-[2px] origin-left rounded-full bg-orange-500 transition-transform duration-[250ms] ease-in-out motion-reduce:transform-none ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
          {!isAuthenticated ? (
            <>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/account">Account</NavLink>
              <span className="rounded-full px-3 py-1.5 text-sm font-semibold text-zinc-700">
                Hello, {username ?? "User"}
              </span>
              <button
                type="button"
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
          <div className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-500 shadow-sm md:flex">
            <Search className="h-4 w-4" />
            <span>Find supplement, gear, outfit...</span>
          </div>
          <Link
            aria-label="Wishlist"
            className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-600"
            to="/wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Cart"
            className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-600"
            to="/cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>
          {!isAuthenticated ? (
            <Link
              aria-label="Login"
              className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-600"
              to="/login"
            >
              <User className="h-5 w-5" />
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
