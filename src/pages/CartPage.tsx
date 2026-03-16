import { Link } from "react-router-dom";
import { formatCurrency, products } from "../data/products";

const cartItems = products.slice(0, 3);

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8">
        <p className="text-sm text-zinc-500">Home / Cart</p>
        <h1 className="mt-3 text-4xl font-bold text-black">Your Cart</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr] border-b border-zinc-200 px-6 py-4 text-sm font-semibold text-zinc-500">
            <span>Product</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Total</span>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr] items-center border-b border-zinc-100 px-6 py-5 text-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-100 font-bold tracking-[0.2em] text-zinc-400">
                  {item.image}
                </div>
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <Link
                    className="text-xs text-[#db4444]"
                    to={`/product/${item.id}`}
                  >
                    View details
                  </Link>
                </div>
              </div>
              <span>{formatCurrency(item.price)}</span>
              <span>1</span>
              <span>{formatCurrency(item.price)}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Cart Total</h2>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <span className="text-zinc-500">Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <span className="text-zinc-500">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-[#db4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
            type="button"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
}
