import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import RequireAuth from "../components/RequireAuth";
import AboutPage from "../pages/AboutPage";
import AccountPage from "../pages/AccountPage";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignupPage from "../pages/SignupPage";
import WishlistPage from "../pages/WishlistPage";

function StoreLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_12%_8%,rgba(251,146,60,0.20),transparent_35%),radial-gradient(circle_at_86%_16%,rgba(45,212,191,0.20),transparent_34%),linear-gradient(180deg,#fffdf7_0%,#f8fafc_58%,#ffffff_100%)] text-zinc-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <AccountPage />
            </RequireAuth>
          }
        />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
