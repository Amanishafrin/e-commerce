import { Link } from "react-router-dom";
import { BY_ID } from "../data/products.jsx";
import { ProductGrid } from "../components/ProductCard.jsx";
import { useShop } from "../context/ShopContext.jsx";

export default function Profile() {
  const { user, data, clearSearches } = useShop();
  const viewed = data.viewed.map((id) => BY_ID[id]).filter(Boolean);
  return (
    <div className="container page">
      <h1>My profile</h1>
      <div className="panel mb-4"><p><b>Name:</b> {user.name}</p><p><b>Email:</b> {user.email}</p>
        <p className="mb-0"><b>Saved:</b> {data.orders.length} orders · {data.wishlist.length} wishlist items · {data.addresses.length} addresses</p></div>
      <div className="panel mb-4"><h3>Saved addresses</h3>
        {data.addresses.length ? data.addresses.map((a, i) => <p key={i}>{a.name}, {a.address}, {a.city}, {a.state} {a.pin}</p>) : <p className="muted">Addresses are saved after your first order.</p>}</div>
      <div className="panel mb-4"><div className="d-flex justify-content-between"><h3>Recent searches</h3>{data.searches.length > 0 && <button className="link-btn" onClick={clearSearches}>Clear</button>}</div>
        {data.searches.length ? <div className="chips">{data.searches.map((s) => <Link key={s} className="chip" to={`/search?q=${encodeURIComponent(s)}`}>{s}</Link>)}</div> : <p className="muted mb-0">No searches yet.</p>}</div>
      <h2>Recently viewed</h2>{viewed.length ? <ProductGrid items={viewed} /> : <p className="muted">Products you open will appear here.</p>}
    </div>
  );
}
