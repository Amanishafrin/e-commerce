import { Link, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { money, FALLBACK_IMG } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";
import "../styles/cart.css";

export function Summary({ shipMethod = "standard" }) {
  const { subtotal, mrpTotal, delivery, cartCount } = useShop();
  const ship = delivery(shipMethod);
  return (
    <div className="summary">
      <h3>Price details</h3>
      <div><span>Price ({cartCount} items)</span><span>{money(mrpTotal)}</span></div>
      <div className="save"><span>Discount</span><span>− {money(mrpTotal - subtotal)}</span></div>
      <div><span>Delivery</span><span>{ship ? money(ship) : "Free"}</span></div>
      <div className="total"><span>Total</span><span>{money(subtotal + ship)}</span></div>
      <small className="save">You save {money(mrpTotal - subtotal)} on this order</small>
    </div>
  );
}
export const variantText = (v) => [v.color, v.option].filter(Boolean).join(" · ");

export default function Cart() {
  const { lines, setQty, removeFromCart } = useShop();
  const nav = useNavigate();
  if (!lines.length) return <div className="container empty"><h1>Your cart is empty</h1><p>Add something you love and it will show up here.</p><Link to="/products" className="btn-main">Continue shopping</Link></div>;
  return (
    <div className="container page">
      <h1>Shopping cart</h1>
      <div className="row g-4">
        <div className="col-lg-8">
          {lines.map(({ key, p, qty, variant }) => (
            <div className="cline" key={key}>
              <Link to={`/product/${p.id}`}><img src={p.images[0]} alt={p.name} onError={(e) => (e.target.src = FALLBACK_IMG)} /></Link>
              <div className="grow">
                <Link to={`/product/${p.id}`} className="ptitle">{p.name}</Link>
                <small className="muted d-block">{p.brand}{variantText(variant) && ` · ${variantText(variant)}`}</small>
                <div className="price"><b>{money(p.price)}</b><s>{money(p.mrp)}</s></div>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <div className="qty"><button aria-label="Decrease quantity" disabled={qty <= 1} onClick={() => setQty(key, qty - 1)}><FaMinus /></button><span key={qty} className="qty-n">{qty}</span><button aria-label="Increase quantity" disabled={qty >= p.stock} onClick={() => setQty(key, qty + 1)}><FaPlus /></button></div>
                  <button className="link-btn danger" onClick={() => removeFromCart(key)}><FaTrash /> Remove</button>
                  {qty >= p.stock && <small className="low">Max stock reached</small>}
                </div>
              </div>
              <b className="line-total">{money(p.price * qty)}</b>
            </div>
          ))}
          <Link to="/products" className="btn-ghost mt-2">Continue shopping</Link>
        </div>
        <div className="col-lg-4"><Summary /><button className="btn-main w-100 mt-3" onClick={() => nav("/checkout")}>Proceed to checkout</button></div>
      </div>
    </div>
  );
}
