import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { BY_ID } from "../data/products.jsx";

const Ctx = createContext(null);
export const useShop = () => useContext(Ctx);

const rd = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const wr = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const dataKey = (id) => `nexamart_data_${id}`; // cart, wishlist, orders... are stored per user
const EMPTY = { cart: [], wishlist: [], orders: [], addresses: [], searches: [], viewed: [] };

// Passwords are never stored in plain text: a salted SHA-256 hash is kept (demo only, NOT production security).
async function hash(pw) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("nexamart-demo:" + pw));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function loadUsers() {
  let users = rd("nexamart_users", []);
  if (!users.some((u) => u.email === "demo@example.com")) {
    users = [...users, { id: 1, name: "Demo User", email: "demo@example.com", phone: "9876543210", hash: await hash("Demo@123") }];
    wr("nexamart_users", users);
  }
  return users;
}
const readSession = () => rd("nexamart_currentUser", null) || JSON.parse(sessionStorage.getItem("nexamart_currentUser") || "null");

export function ShopProvider({ children }) {
  const [user, setUser] = useState(readSession);
  const [data, setData] = useState(() => { const u = readSession(); return u ? { ...EMPTY, ...rd(dataKey(u.id), {}) } : EMPTY; });
  const [toast, setToast] = useState(null);
  const [bump, setBump] = useState(0); // triggers cart badge animation
  const timer = useRef();

  // Persist this user's shopping data whenever it changes
  useEffect(() => { if (user) wr(dataKey(user.id), data); }, [data, user]);

  const notify = (msg, type = "success") => {
    setToast({ msg, type, id: Date.now() });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2600);
  };

  // ---------- Auth ----------
  const startSession = (u, remember) => {
    const safe = { id: u.id, name: u.name, email: u.email, isLoggedIn: true };
    if (remember) wr("nexamart_currentUser", safe);
    else { localStorage.removeItem("nexamart_currentUser"); sessionStorage.setItem("nexamart_currentUser", JSON.stringify(safe)); }
    setData({ ...EMPTY, ...rd(dataKey(u.id), {}) });
    setUser(safe);
  };
  const login = async (email, password, remember) => {
    const users = await loadUsers();
    const u = users.find((x) => x.email === email.trim().toLowerCase());
    if (!u || u.hash !== (await hash(password))) return { ok: false, error: "Incorrect email or password." };
    startSession(u, remember);
    return { ok: true };
  };
  const register = async ({ name, email, phone, password }) => {
    const users = await loadUsers();
    const e = email.trim().toLowerCase();
    if (users.some((x) => x.email === e)) return { ok: false, error: "An account with this email already exists. Try logging in." };
    const u = { id: Date.now(), name: name.trim(), email: e, phone, hash: await hash(password) };
    wr("nexamart_users", [...users, u]);
    startSession(u, true);
    return { ok: true };
  };
  const logout = () => {
    localStorage.removeItem("nexamart_currentUser"); // saved cart/wishlist/orders stay in nexamart_data_<id>
    sessionStorage.removeItem("nexamart_currentUser");
    setUser(null); setData(EMPTY);
  };

  // ---------- Cart ----------
  const lineKey = (id, v) => `${id}|${v.color || ""}|${v.option || ""}`;
  const addToCart = (p, variant = {}, qty = 1) => {
    const key = lineKey(p.id, variant);
    const ex = data.cart.find((l) => l.key === key);
    const total = (ex ? ex.qty : 0) + qty;
    if (total > p.stock) { notify(`Only ${p.stock} units of ${p.name} in stock`, "error"); return false; }
    setData((d) => ({ ...d, cart: ex ? d.cart.map((l) => (l.key === key ? { ...l, qty: total } : l)) : [...d.cart, { key, pid: p.id, variant, qty }] }));
    setBump((b) => b + 1);
    notify(`${p.name} added to cart`);
    return true;
  };
  const setQty = (key, qty) => setData((d) => ({
    ...d, cart: d.cart.map((l) => (l.key === key ? { ...l, qty: Math.max(1, Math.min(qty, BY_ID[l.pid].stock)) } : l)),
  }));
  const removeFromCart = (key) => setData((d) => ({ ...d, cart: d.cart.filter((l) => l.key !== key) }));

  const lines = useMemo(() => data.cart.map((l) => ({ ...l, p: BY_ID[l.pid] })).filter((l) => l.p), [data.cart]);
  const cartCount = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const mrpTotal = lines.reduce((s, l) => s + l.p.mrp * l.qty, 0);
  const delivery = (method = "standard") => (!lines.length ? 0 : method === "express" ? 149 : subtotal >= 999 ? 0 : 49);

  // ---------- Wishlist ----------
  const inWish = (id) => data.wishlist.includes(id);
  const toggleWish = (p) => {
    const has = inWish(p.id);
    setData((d) => ({ ...d, wishlist: has ? d.wishlist.filter((x) => x !== p.id) : [...d.wishlist, p.id] }));
    notify(has ? "Removed from wishlist" : "Saved to wishlist");
  };
  const moveToCart = (p) => {
    const v = { color: p.colors[0], option: p.options[0] };
    if (addToCart(p, v)) setData((d) => ({ ...d, wishlist: d.wishlist.filter((x) => x !== p.id) }));
  };

  // ---------- Orders, searches, viewed, addresses ----------
  const placeOrder = (order) => setData((d) => ({
    ...d, cart: [], orders: [order, ...d.orders],
    addresses: [order.address, ...d.addresses.filter((a) => a.address !== order.address.address)].slice(0, 3),
  }));
  const addSearch = (s) => setData((d) => ({ ...d, searches: [s, ...d.searches.filter((x) => x.toLowerCase() !== s.toLowerCase())].slice(0, 6) }));
  const clearSearches = () => setData((d) => ({ ...d, searches: [] }));
  const addViewed = (id) => setData((d) => (d.viewed[0] === id ? d : { ...d, viewed: [id, ...d.viewed.filter((x) => x !== id)].slice(0, 8) }));

  const value = { user, data, login, register, logout, toast, notify, bump, lines, cartCount, subtotal, mrpTotal, delivery,
    addToCart, setQty, removeFromCart, inWish, toggleWish, moveToCart, placeOrder, addSearch, clearSearches, addViewed };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
