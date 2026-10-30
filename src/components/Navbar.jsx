import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCircle, FaBars, FaTimes, FaTruck } from "react-icons/fa";
import Logo from "./Logo.jsx";
import SearchBar from "./SearchBar.jsx";
import { CATEGORIES } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";
import "../styles/navbar.css";

export default function Navbar() {
  const { user, data, cartCount, bump, logout, notify } = useShop();
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [side, setSide] = useState(false);
  const [menu, setMenu] = useState(false);
  const [catMenu, setCatMenu] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // Escape closes any open menu (keyboard accessibility)
  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") { setMenu(false); setCatMenu(false); setSide(false); setConfirm(false); } };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const doLogout = () => { logout(); setConfirm(false); notify("You have been logged out"); nav("/login"); };
  const links = (
    <>
      <NavLink to="/" end onClick={() => setSide(false)}>Home</NavLink>
      <div className="cat-dd" onMouseLeave={() => setCatMenu(false)}>
        <button aria-expanded={catMenu} aria-haspopup="true" onClick={() => setCatMenu(!catMenu)} onMouseEnter={() => setCatMenu(true)}>All Categories ▾</button>
        <div className={`dd ${catMenu ? "open" : ""}`}>
          {CATEGORIES.map((c) => <Link key={c.slug} to={`/category/${c.slug}`} onClick={() => { setCatMenu(false); setSide(false); }}>{c.name}</Link>)}
          <Link to="/products" onClick={() => { setCatMenu(false); setSide(false); }}>View all products</Link>
        </div>
      </div>
      <NavLink to="/deals" onClick={() => setSide(false)}>Deals</NavLink>
      <NavLink to="/new-arrivals" onClick={() => setSide(false)}>New Arrivals</NavLink>
    </>
  );

  return (
    <header className={`nx-header ${scrolled ? "scrolled" : ""}`}>
      <div className="announce"><FaTruck /> Free delivery on orders above ₹999 · Flat 10% off demo code NEXA10 · Demo store, no real orders</div>
      <div className="container nx-bar">
        <button className="icon-btn burger" aria-label="Open menu" onClick={() => setSide(true)}><FaBars /></button>
        <Link to="/" aria-label="NexaMart home"><Logo light /></Link>
        <nav className="nx-links" aria-label="Main">{links}</nav>
        <div className="nx-search"><SearchBar /></div>
        <div className="nx-actions">
          <Link to="/wishlist" className="act" aria-label="Wishlist"><FaHeart />{data.wishlist.length > 0 && <span className="badge-n">{data.wishlist.length}</span>}</Link>
          <Link to="/cart" className="act" aria-label={`Cart, ${cartCount} items`}><FaShoppingCart />{cartCount > 0 && <span key={bump} className="badge-n pop">{cartCount}</span>}</Link>
          <div className="user-dd">
            <button className="act" aria-label="Account menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><FaUserCircle /></button>
            <div className={`dd right ${menu ? "open" : ""}`}>
              <p className="dd-name">{user.name}<small>{user.email}</small></p>
              <Link to="/profile" onClick={() => setMenu(false)}>My Profile</Link>
              <Link to="/orders" onClick={() => setMenu(false)}>My Orders</Link>
              <Link to="/wishlist" onClick={() => setMenu(false)}>Wishlist</Link>
              <button onClick={() => { setMenu(false); setConfirm(true); }}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="nx-search-m container"><SearchBar /></div>

      {side && <div className="scrim" onClick={() => setSide(false)} />}
      <aside className={`side ${side ? "open" : ""}`} aria-hidden={!side}>
        <div className="side-top"><Logo light /><button className="icon-btn" aria-label="Close menu" onClick={() => setSide(false)}><FaTimes /></button></div>
        <nav className="side-links">
          <NavLink to="/" end onClick={() => setSide(false)}>Home</NavLink>
          {CATEGORIES.map((c) => <NavLink key={c.slug} to={`/category/${c.slug}`} onClick={() => setSide(false)}>{c.name}</NavLink>)}
          <NavLink to="/deals" onClick={() => setSide(false)}>Deals</NavLink>
          <NavLink to="/new-arrivals" onClick={() => setSide(false)}>New Arrivals</NavLink>
          <NavLink to="/wishlist" onClick={() => setSide(false)}>Wishlist</NavLink>
          <NavLink to="/orders" onClick={() => setSide(false)}>My Orders</NavLink>
        </nav>
      </aside>

      {confirm && (
        <div className="modal-back" onClick={() => setConfirm(false)}>
          <div className="nx-modal" role="dialog" aria-modal="true" aria-label="Confirm logout" onClick={(e) => e.stopPropagation()}>
            <h3>Log out of NexaMart?</h3>
            <p>Your cart, wishlist and orders stay saved for when you log back in.</p>
            <div className="d-flex gap-2 justify-content-end"><button className="btn-ghost" onClick={() => setConfirm(false)}>Stay logged in</button><button className="btn-main" onClick={doLogout}>Log out</button></div>
          </div>
        </div>
      )}
    </header>
  );
}
