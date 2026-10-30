import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaTruck, FaUndo, FaMinus, FaPlus } from "react-icons/fa";
import { BY_ID, PRODUCTS, money, FALLBACK_IMG } from "../data/products.jsx";
import { Stars, ProductGrid } from "../components/ProductCard.jsx";
import { useShop } from "../context/ShopContext.jsx";
import NotFound from "./NotFound.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const p = BY_ID[id];
  const nav = useNavigate();
  const { addToCart, inWish, toggleWish, addViewed } = useShop();
  const [img, setImg] = useState(0);
  const [color, setColor] = useState("");
  const [option, setOption] = useState("");
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState("specs");

  useEffect(() => {
    if (!p) return;
    setImg(0); setQty(1); setColor(p.colors[0] || ""); setOption(p.options[0] || "");
    addViewed(p.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (!p) return <NotFound />;

  const out = p.stock === 0;
  const variant = { color, option };
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 5);
  const buyNow = () => { if (addToCart(p, variant, qty)) nav("/checkout"); };

  return (
    <div className="container page">
      <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link> / <Link to={`/category/${p.category}`}>{p.categoryName}</Link> / {p.name}</nav>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="gallery-main"><img src={p.images[img]} alt={`${p.brand} ${p.name}, view ${img + 1}`} onError={(e) => (e.target.src = FALLBACK_IMG)} /></div>
          <div className="thumbs">{p.images.map((s, i) => <button key={i} className={i === img ? "on" : ""} onClick={() => setImg(i)} aria-label={`Show image ${i + 1}`}><img src={s} alt="" onError={(e) => (e.target.src = FALLBACK_IMG)} /></button>)}</div>
        </div>
        <div className="col-md-6">
          <small className="brand">{p.brand} · {p.sub}</small>
          <h1 className="pd-title">{p.name}</h1>
          <Stars rating={p.rating} reviews={p.reviews} />
          <div className="price big"><b>{money(p.price)}</b><s>{money(p.mrp)}</s><span className="off-inline">{p.discount}% off</span></div>
          <p>{p.description}</p>

          {p.colors.length > 0 && <div className="vgroup"><b>Color: {color}</b><div className="chips">{p.colors.map((c) => <button key={c} className={`chip ${c === color ? "on" : ""}`} aria-pressed={c === color} onClick={() => setColor(c)}>{c}</button>)}</div></div>}
          {p.options.length > 1 && <div className="vgroup"><b>{p.optLabel}: {option}</b><div className="chips">{p.options.map((o) => <button key={o} className={`chip ${o === option ? "on" : ""}`} aria-pressed={o === option} onClick={() => setOption(o)}>{o}</button>)}</div></div>}

          <div className="vgroup"><b>Quantity</b>
            <div className="qty"><button aria-label="Decrease quantity" disabled={qty <= 1} onClick={() => setQty(qty - 1)}><FaMinus /></button><span aria-live="polite">{qty}</span><button aria-label="Increase quantity" disabled={qty >= p.stock} onClick={() => setQty(qty + 1)}><FaPlus /></button></div>
            <small className={out ? "text-danger" : p.stock <= 10 ? "low" : "ok"}>{out ? "Out of stock" : p.stock <= 10 ? `Only ${p.stock} left` : `In stock (${p.stock} available)`}</small></div>

          <div className="d-flex flex-wrap gap-2 my-3">
            <button className="btn-main" disabled={out} onClick={() => addToCart(p, variant, qty)}>Add to Cart</button>
            <button className="btn-dark-nx" disabled={out} onClick={buyNow}>Buy Now</button>
            <button className={`btn-ghost wish-inline ${inWish(p.id) ? "on" : ""}`} onClick={() => toggleWish(p)} aria-pressed={inWish(p.id)}>{inWish(p.id) ? <FaHeart /> : <FaRegHeart />} Wishlist</button>
          </div>
          <ul className="info-list"><li><FaTruck /> Delivery in 3-5 days. Free above ₹999.</li><li><FaUndo /> 7-day easy returns on unused items.</li></ul>

          <div className="acc">
            {[["specs", "Specifications"], ["about", "About this item"]].map(([k, t]) => (
              <div key={k} className="acc-item"><button aria-expanded={open === k} onClick={() => setOpen(open === k ? "" : k)}>{t}<span>{open === k ? "−" : "+"}</span></button>
                <div className={`acc-body ${open === k ? "open" : ""}`}><div>
                  {k === "specs" ? <table className="table table-sm mb-0"><tbody>{p.specs.map(([a, b]) => <tr key={a}><th>{a}</th><td>{b}</td></tr>)}</tbody></table> : <p className="mb-0">{p.description}</p>}
                </div></div></div>))}
          </div>
        </div>
      </div>
      <h2 className="mt-5 mb-3">Related products</h2>
      <ProductGrid items={related} />
    </div>
  );
}
