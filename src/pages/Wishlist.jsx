import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { BY_ID, money, FALLBACK_IMG } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";

export default function Wishlist() {
  const { data, toggleWish, moveToCart } = useShop();
  const items = data.wishlist.map((id) => BY_ID[id]).filter(Boolean);
  if (!items.length) return <div className="container empty"><h1>Your wishlist is empty</h1><p>Tap the heart on any product to save it for later.</p><Link to="/products" className="btn-main">Browse products</Link></div>;
  return (
    <div className="container page">
      <h1>Wishlist <small className="muted">({items.length})</small></h1>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {items.map((p) => (
          <div className="col" key={p.id}><div className="cline">
            <Link to={`/product/${p.id}`}><img src={p.images[0]} alt={p.name} onError={(e) => (e.target.src = FALLBACK_IMG)} /></Link>
            <div className="grow"><Link to={`/product/${p.id}`} className="ptitle">{p.name}</Link><small className="muted d-block">{p.brand}</small>
              <div className="price"><b>{money(p.price)}</b><s>{money(p.mrp)}</s></div>
              <div className="d-flex gap-2 flex-wrap"><button className="btn-main" disabled={!p.stock} onClick={() => moveToCart(p)}>Move to cart</button>
                <button className="btn-ghost" onClick={() => toggleWish(p)} aria-label={`Remove ${p.name}`}><FaTrash /> Remove</button></div></div>
          </div></div>))}
      </div>
    </div>
  );
}
