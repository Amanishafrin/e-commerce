import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTruck, FaUndo, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { CATEGORIES, PRODUCTS, BRANDS, money, FALLBACK_IMG } from "../data/products.jsx";
import { ProductGrid } from "../components/ProductCard.jsx";
import { useShop } from "../context/ShopContext.jsx";
import { BY_ID } from "../data/products.jsx";
import "../styles/home.css";

const top = (fn, n = 5) => [...PRODUCTS].sort(fn).slice(0, n);
const TESTIMONIALS = [
  ["Aarav M.", "Checkout was quick and the filters made finding a phone easy."],
  ["Priya S.", "Loved the clean layout. The wishlist and cart actually remember everything."],
  ["Karthik R.", "Great deals page. Prices and discounts were clear before I added anything."],
];

function Section({ title, link, children, tint }) {
  return (
    <section className={`hsec ${tint ? "tint" : ""}`}>
      <div className="container">
        <div className="hsec-head"><h2>{title}</h2>{link && <Link to={link}>View all</Link>}</div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const { data, notify } = useShop();
  const featured = top((a, b) => b.discount - a.discount, 3);
  const viewed = data.viewed.map((id) => BY_ID[id]).filter(Boolean).slice(0, 5);
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1>Everything you need, under one roof.</h1>
            <p>Phones, fashion, furniture, beauty and kitchen essentials with up to {Math.max(...PRODUCTS.map((p) => p.discount))}% off this week.</p>
            <div className="d-flex flex-wrap gap-2"><Link to="/products" className="btn-light-nx">Shop now</Link><Link to="/category/mobiles-electronics" className="btn-outline-nx">Explore categories</Link></div>
          </motion.div>
          <div className="hero-cards">
            {featured.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12 }}>
                <Link to={`/product/${p.id}`} className="hero-card">
                  <img src={p.images[0]} alt={p.name} onError={(e) => (e.target.src = FALLBACK_IMG)} />
                  <span>{p.name}<b>{money(p.price)} · {p.discount}% off</b></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<Section title="Shop by category">
  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
    {CATEGORIES.map((c) => (
      <div className="col" key={c.slug}>
        <Link to={`/category/${c.slug}`} className="catcard">

          <div className="category-image-box">
            <img
              src={c.images || FALLBACK_IMG}
              alt={c.name}
              className="category-img"
              loading="lazy"
            />
          </div>

          <span className="category-name">{c.name}</span>

        </Link>
      </div>
    ))}
  </div>
</Section>
      <Section title="Flash deals" link="/deals" tint><ProductGrid items={top((a, b) => b.discount - a.discount)} /></Section>
      <Section title="Trending products" link="/products"><ProductGrid items={top((a, b) => b.reviews - a.reviews)} /></Section>
      <Section title="Best sellers" link="/products" tint><ProductGrid items={top((a, b) => b.rating * 1000 + b.reviews / 100 - (a.rating * 1000 + a.reviews / 100))} /></Section>
      <Section title="New arrivals" link="/new-arrivals"><ProductGrid items={top((a, b) => b.added - a.added)} /></Section>
      <Section title="Special offers" tint>
        <div className="row g-3">
          {[["Under ₹1,000", "/search?q=skincare", "Skincare and grooming picks"], ["Upgrade your kitchen", "/category/appliances-kitchen", "Air fryers, mixers and more"], ["Phones, 5G ready", "/category/mobiles-electronics", "iPhone, Galaxy, OnePlus and more"]].map(([t, l, s]) => (
            <div className="col-md-4" key={t}><Link to={l} className="offer"><h3>{t}</h3><p>{s}</p></Link></div>))}
        </div>
      </Section>
      <Section title="Featured brands">
        <div className="brand-row">{BRANDS.slice(0, 14).map((b) => <Link key={b} to={`/search?q=${encodeURIComponent(b)}`}>{b}</Link>)}</div>
      </Section>
      <Section title="Recommended for you" tint><ProductGrid items={viewed.length ? viewed : top((a, b) => b.rating - a.rating)} /></Section>
      <Section title="Why shop with us">
        <div className="row row-cols-2 row-cols-lg-4 g-3">
          {[[FaTruck, "Fast delivery", "Free above ₹999"], [FaUndo, "Easy returns", "7-day window"], [FaShieldAlt, "Secure demo checkout", "No real payments"], [FaHeadset, "Friendly support", "Every day, 9am to 9pm"]].map(([I, t, s]) => (
            <div className="col" key={t}><div className="why"><I /><b>{t}</b><span>{s}</span></div></div>))}
        </div>
      </Section>
      <Section title="What customers say" tint>
        <div className="row g-3">{TESTIMONIALS.map(([n, t]) => <div className="col-md-4" key={n}><blockquote className="quote">“{t}”<footer>{n}</footer></blockquote></div>)}</div>
      </Section>
      <section className="news"><div className="container">
        <h2>Never miss a deal</h2>
        <form onSubmit={(e) => { e.preventDefault(); notify("Subscribed (demo)"); e.target.reset(); }}>
          <label htmlFor="hn" className="visually-hidden">Email</label><input id="hn" type="email" required placeholder="Your email" /><button className="btn-light-nx">Subscribe</button>
        </form></div></section>
    </>
  );
}
