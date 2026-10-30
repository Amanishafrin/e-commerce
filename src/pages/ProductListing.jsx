import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { FaFilter, FaTimes } from "react-icons/fa";
import { PRODUCTS, CATEGORIES, searchProducts } from "../data/products.jsx";
import { ProductGrid } from "../components/ProductCard.jsx";

const INIT = { brands: [], min: "", max: "", rating: 0, disc: 0, stock: false, cat: "" };
const SORTS = { rel: "Relevance", pa: "Price: Low to High", pd: "Price: High to Low", rt: "Highest Rated", nw: "Newest Arrivals", ds: "Biggest Discount", az: "Name: A to Z" };

export default function ProductListing({ mode }) {
  const { slug } = useParams();
  const [sp] = useSearchParams();
  const q = sp.get("q") || "";
  const [f, setF] = useState(INIT);
  const [sort, setSort] = useState("rel");
  const [open, setOpen] = useState(false);
  useEffect(() => { setF(INIT); setSort("rel"); }, [mode, slug, q]);

  const cat = CATEGORIES.find((c) => c.slug === slug);
  const base = useMemo(() => {
    if (mode === "category") return PRODUCTS.filter((p) => p.category === slug);
    if (mode === "search") return searchProducts(q);
    if (mode === "deals") return PRODUCTS.filter((p) => p.discount >= 25);
    if (mode === "new") return [...PRODUCTS].sort((a, b) => b.added - a.added).slice(0, 20);
    return PRODUCTS;
  }, [mode, slug, q]);
  const brands = useMemo(() => [...new Set(base.map((p) => p.brand))].sort(), [base]);

  const items = useMemo(() => {
    let l = base.filter((p) =>
      (!f.brands.length || f.brands.includes(p.brand)) && (!f.cat || p.category === f.cat) &&
      (f.min === "" || p.price >= +f.min) && (f.max === "" || p.price <= +f.max) &&
      p.rating >= f.rating && p.discount >= f.disc && (!f.stock || p.stock > 0));
    const s = { pa: (a, b) => a.price - b.price, pd: (a, b) => b.price - a.price, rt: (a, b) => b.rating - a.rating, nw: (a, b) => b.added - a.added, ds: (a, b) => b.discount - a.discount, az: (a, b) => a.name.localeCompare(b.name) }[sort];
    return s ? [...l].sort(s) : l;
  }, [base, f, sort]);

  const title = { all: "All products", deals: "Deals", new: "New arrivals", category: cat?.name || "Category", search: `Results for “${q}”` }[mode];
  const toggleBrand = (b) => setF({ ...f, brands: f.brands.includes(b) ? f.brands.filter((x) => x !== b) : [...f.brands, b] });

  const panel = (
    <div className="filters">
      <div className="d-flex justify-content-between align-items-center"><h3>Filters</h3><button className="link-btn" onClick={() => setF(INIT)}>Reset filters</button></div>
      {(mode === "search" || mode === "all" || mode === "deals" || mode === "new") && (
        <div className="fgroup"><label htmlFor="fc">Category</label>
          <select id="fc" value={f.cat} onChange={(e) => setF({ ...f, cat: e.target.value })}><option value="">All</option>{CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select></div>)}
      <div className="fgroup"><label>Price (₹)</label>
        <div className="d-flex gap-2"><input type="number" min="0" placeholder="Min" aria-label="Minimum price" value={f.min} onChange={(e) => setF({ ...f, min: e.target.value })} />
          <input type="number" min="0" placeholder="Max" aria-label="Maximum price" value={f.max} onChange={(e) => setF({ ...f, max: e.target.value })} /></div></div>
      <div className="fgroup"><label>Brand</label><div className="brand-list">{brands.map((b) => <label key={b} className="check"><input type="checkbox" checked={f.brands.includes(b)} onChange={() => toggleBrand(b)} /> {b}</label>)}</div></div>
      <div className="fgroup"><label>Customer rating</label>{[4.5, 4, 3].map((r) => <label key={r} className="check"><input type="radio" name="rt" checked={f.rating === r} onChange={() => setF({ ...f, rating: r })} /> {r}★ & above</label>)}</div>
      <div className="fgroup"><label>Discount</label>{[10, 25, 40].map((d) => <label key={d} className="check"><input type="radio" name="dc" checked={f.disc === d} onChange={() => setF({ ...f, disc: d })} /> {d}% or more</label>)}</div>
      <label className="check"><input type="checkbox" checked={f.stock} onChange={(e) => setF({ ...f, stock: e.target.checked })} /> In stock only</label>
    </div>
  );

  return (
    <div className="container page">
      <div className="list-head">
        <div><h1>{title}</h1><p className="muted">{items.length} products</p></div>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn-ghost d-lg-none" onClick={() => setOpen(true)}><FaFilter /> Filters</button>
          <label className="visually-hidden" htmlFor="so">Sort by</label>
          <select id="so" className="sort" value={sort} onChange={(e) => setSort(e.target.value)}>{Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
        </div>
      </div>
      <div className="row g-4">
        <aside className="col-lg-3 d-none d-lg-block">{panel}</aside>
        <div className="col-lg-9">
          {items.length ? <div className="row row-cols-2 row-cols-md-3 row-cols-xl-3 row-cols-xxl-4 g-3">{items.map((p, i) => <ProductGridItem key={p.id} p={p} i={i} />)}</div> : (
            <div className="empty"><h2>No products found</h2><p>{mode === "search" ? "Check the spelling or try a brand, model or category like “phone” or “shoes”." : "Try loosening a filter."}</p><button className="btn-main" onClick={() => setF(INIT)}>Reset filters</button></div>)}
        </div>
      </div>
      <div className={`offc ${open ? "open" : ""}`} role="dialog" aria-label="Filters">
        <div className="offc-top"><b>Filters</b><button className="icon-btn" aria-label="Close filters" onClick={() => setOpen(false)}><FaTimes /></button></div>
        <div className="offc-body">{panel}</div>
        <div className="offc-foot"><button className="btn-main w-100" onClick={() => setOpen(false)}>Show {items.length} products</button></div>
      </div>
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
    </div>
  );
}

import ProductCard from "../components/ProductCard.jsx";
const ProductGridItem = ({ p, i }) => <ProductCard p={p} index={i} />;
