import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes, FaHistory } from "react-icons/fa";
import { searchProducts, money, FALLBACK_IMG } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";

export default function SearchBar({ onDone }) {
  const nav = useNavigate();
  const { data, addSearch, clearSearches } = useShop();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  // close suggestions when clicking outside
  useEffect(() => {
    const h = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const suggestions = useMemo(() => (q.trim() ? searchProducts(q).slice(0, 6) : []), [q]);
  const go = (text) => {
    const s = text.trim();
    if (!s) return;
    addSearch(s); setQ(s); setOpen(false);
    nav("/search?q=" + encodeURIComponent(s));
    onDone && onDone();
  };

  return (
    <div className="search" ref={box} role="search">
      <form onSubmit={(e) => { e.preventDefault(); go(q); }}>
        <input value={q} onChange={(e) => { setQ(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)}
          placeholder="Search iPhone, Samsung, shoes, sofa..." aria-label="Search products" />
        {q && <button type="button" className="icon-btn" aria-label="Clear search" onClick={() => setQ("")}><FaTimes /></button>}
        <button type="submit" className="search-go" aria-label="Search"><FaSearch /></button>
      </form>
      {open && (suggestions.length > 0 || (!q.trim() && data.searches.length > 0) || q.trim()) && (
        <div className="suggest">
          {!q.trim() && data.searches.length > 0 && (
            <>
              <div className="suggest-head"><span>Recent searches</span><button onClick={clearSearches}>Clear</button></div>
              {data.searches.map((s) => <button key={s} className="suggest-row" onClick={() => go(s)}><FaHistory /> {s}</button>)}
            </>
          )}
          {suggestions.map((p) => (
            <button key={p.id} className="suggest-row" onClick={() => { setOpen(false); nav(`/product/${p.id}`); onDone && onDone(); }}>
              <img src={p.images[0]} alt="" onError={(e) => (e.target.src = FALLBACK_IMG)} />
              <span className="grow">{p.name}<small>{p.brand} · {p.categoryName}</small></span>
              <b>{money(p.price)}</b>
            </button>
          ))}
          {q.trim() && suggestions.length === 0 && <p className="suggest-empty">No matches for “{q}”. Try a brand or category.</p>}
          {q.trim() && suggestions.length > 0 && <button className="suggest-all" onClick={() => go(q)}>See all results for “{q}”</button>}
        </div>
      )}
    </div>
  );
}
