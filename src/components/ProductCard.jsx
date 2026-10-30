import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar, FaCheck, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { money, FALLBACK_IMG } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";

export function Stars({ rating, reviews }) {
  return <span className="stars"><span className="rate-pill">{rating} <FaStar /></span>{reviews != null && <small>({reviews.toLocaleString("en-IN")})</small>}</span>;
}

export default function ProductCard({ p, index = 0 }) {
  const { addToCart, inWish, toggleWish } = useShop();
  const [added, setAdded] = useState(false);
  const wished = inWish(p.id);
  const out = p.stock === 0;
  const add = () => {
    if (addToCart(p, { color: p.colors[0], option: p.options[0] })) { setAdded(true); setTimeout(() => setAdded(false), 1200); }
  };
  return (
    <motion.div className="col" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35, delay: (index % 5) * 0.05 }}>
      <article className="pcard">
        <button className={`wish ${wished ? "on" : ""}`} aria-label={wished ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={wished} onClick={() => toggleWish(p)}>
          {wished ? <FaHeart /> : <FaRegHeart />}
        </button>
        {p.discount >= 15 && <span className="off">{p.discount}% off</span>}
        <Link to={`/product/${p.id}`} className="pimg"><img src={p.images[0]} alt={`${p.brand} ${p.name}`} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }} /></Link>
        <div className="pbody">
          <small className="brand">{p.brand}</small>
          <Link to={`/product/${p.id}`} className="ptitle">{p.name}</Link>
          <Stars rating={p.rating} reviews={p.reviews} />
          <div className="price"><b>{money(p.price)}</b><s>{money(p.mrp)}</s></div>
          <small className={out ? "text-danger" : p.stock <= 10 ? "low" : "ok"}>{out ? "Out of stock" : p.stock <= 10 ? `Only ${p.stock} left` : "In stock"}</small>
          <div className="pbtns">
            <button className={`btn-main ${added ? "done" : ""}`} disabled={out} onClick={add}>{added ? <><FaCheck /> Added</> : <><FaShoppingCart /> Add to Cart</>}</button>
            <Link to={`/product/${p.id}`} className="btn-ghost">View Details</Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export function ProductGrid({ items }) {
  return <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-3">{items.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}</div>;
}
