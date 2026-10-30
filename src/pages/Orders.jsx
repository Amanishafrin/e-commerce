import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { money, FALLBACK_IMG } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";
import { variantText } from "./Cart.jsx";

// Simulated status based on time since the order was placed (NOT real tracking)
const status = (o) => { const m = (Date.now() - new Date(o.date)) / 60000; return m < 1 ? "Order placed" : m < 3 ? "Packed (demo)" : "Shipped (demo)"; };

export function OrderCard({ o, startOpen = false }) {
  const [open, setOpen] = useState(startOpen);
  return (
    <div className="order">
      <div className="order-head">
        <div><b>{o.id}</b><small className="muted d-block">{new Date(o.date).toLocaleString("en-IN")}</small></div>
        <span className="status">{status(o)}</span>
        <b>{money(o.total)}</b>
        <button className="btn-ghost" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Hide details" : "View details"}</button>
      </div>
      <div className="order-items">{o.items.map((i, k) => <img key={k} src={i.image} alt={i.name} onError={(e) => (e.target.src = FALLBACK_IMG)} />)}</div>
      {open && (
        <div className="order-detail">
          {o.items.map((i, k) => <div className="rev" key={k}><span>{i.name} × {i.qty}<small className="muted d-block">{variantText(i.variant)}</small></span><b>{money(i.price * i.qty)}</b></div>)}
          <p className="mt-2 mb-1">Delivery: {money(o.delivery)} · Total: <b>{money(o.total)}</b></p>
          <p className="mb-1"><b>Address:</b> {o.address.name}, {o.address.address}, {o.address.city}, {o.address.state} {o.address.pin}</p>
          <p className="mb-0"><b>Payment:</b> {o.pay}</p>
        </div>)}
    </div>
  );
}

export function OrderSuccess() {
  const { id } = useParams();
  const { data } = useShop();
  const o = data.orders.find((x) => x.id === id);
  if (!o) return <div className="container empty"><h1>Order not found</h1><Link to="/orders" className="btn-main">View orders</Link></div>;
  return (
    <div className="container page">
      <div className="success"><h1>Thank you, your demo order is confirmed</h1><p>Order ID <b>{o.id}</b>. This is a demo, so nothing will be shipped or charged.</p></div>
      <OrderCard o={o} startOpen />
      <div className="d-flex gap-2 mt-3"><Link to="/orders" className="btn-main">View orders</Link><Link to="/products" className="btn-ghost">Continue shopping</Link></div>
    </div>
  );
}

export default function Orders() {
  const { data } = useShop();
  if (!data.orders.length) return <div className="container empty"><h1>No orders yet</h1><p>Orders you place will appear here.</p><Link to="/products" className="btn-main">Start shopping</Link></div>;
  return <div className="container page"><h1>My orders</h1>{data.orders.map((o) => <OrderCard key={o.id} o={o} />)}</div>;
}
