import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Toast from "./components/Toast.jsx";
import { useShop } from "./context/ShopContext.jsx";
import Home from "./pages/Home.jsx";
import ProductListing from "./pages/ProductListing.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Checkout from "./pages/Checkout.jsx";
import Orders, { OrderSuccess } from "./pages/Orders.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

// Everything except /login and /register needs a demo session
function ProtectedLayout() {
  const { user } = useShop();
  const loc = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: loc.pathname + loc.search }} replace />;
  return (
    <>
      <Navbar />
      <motion.main key={loc.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
}
function PublicOnly({ children }) {
  const { user } = useShop();
  return user ? <Navigate to="/" replace /> : children;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
        <Route path="/register" element={<PublicOnly><Register /></PublicOnly>} />
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing mode="all" />} />
          <Route path="/category/:slug" element={<ProductListing mode="category" />} />
          <Route path="/deals" element={<ProductListing mode="deals" />} />
          <Route path="/new-arrivals" element={<ProductListing mode="new" />} />
          <Route path="/search" element={<ProductListing mode="search" />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success/:id" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toast />
    </>
  );
}
