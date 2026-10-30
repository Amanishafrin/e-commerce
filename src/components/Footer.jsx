import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaCcVisa, FaCcMastercard, FaGooglePay, FaMoneyBillWave } from "react-icons/fa6";
import Logo from "./Logo.jsx";
import { CATEGORIES } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";

export default function Footer() {
  const { notify } = useShop();
  return (
    <footer className="nx-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4"><Logo light /><p className="mt-3">NexaMart is a frontend portfolio demo store. No real payments or deliveries happen here.</p>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook (demo link)"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram (demo link)"><FaInstagram /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (demo link)"><FaXTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube (demo link)"><FaYoutube /></a>
            </div></div>
          <div className="col-6 col-lg-2"><h6>Quick links</h6><Link to="/">Home</Link><Link to="/deals">Deals</Link><Link to="/new-arrivals">New Arrivals</Link><Link to="/products">All Products</Link></div>
          <div className="col-6 col-lg-2"><h6>My account</h6><Link to="/profile">My Profile</Link><Link to="/orders">My Orders</Link><Link to="/wishlist">Wishlist</Link><Link to="/cart">Cart</Link></div>
          <div className="col-6 col-lg-2"><h6>Categories</h6>{CATEGORIES.map((c) => <Link key={c.slug} to={`/category/${c.slug}`}>{c.name}</Link>)}</div>
          <div className="col-6 col-lg-2"><h6>Contact</h6><p>support@nexamart.demo</p><p>+91 98765 43210 (demo)</p><p>Chennai, Tamil Nadu</p></div>
        </div>
        <form className="foot-news" onSubmit={(e) => { e.preventDefault(); notify("Subscribed (demo)"); e.target.reset(); }}>
          <label htmlFor="fn">Get deals in your inbox</label>
          <input id="fn" type="email" required placeholder="you@example.com" /><button className="btn-main">Subscribe</button>
        </form>
        <div className="foot-bottom"><span>© {new Date().getFullYear()} NexaMart. Demo project.</span><span className="pay"><FaCcVisa /><FaCcMastercard /><FaGooglePay /><FaMoneyBillWave /></span></div>
      </div>
    </footer>
  );
}
