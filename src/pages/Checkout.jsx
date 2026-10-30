import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { money } from "../data/products.jsx";
import { useShop } from "../context/ShopContext.jsx";
import { Summary, variantText } from "./Cart.jsx";

const STEPS = ["Review cart", "Address", "Shipping", "Payment", "Confirm"];
const PAYS = [["upi", "UPI (Demo)"], ["card", "Credit / Debit Card (Demo)"], ["cod", "Cash on Delivery"], ["net", "Net Banking (Demo)"]];
const BLANK = { name: "", email: "", phone: "", address: "", city: "", state: "", pin: "" };

export default function Checkout() {
  const { user, data, lines, subtotal, delivery, placeOrder, notify } = useShop();
  const nav = useNavigate();
  const placing = useRef(false); // blocks duplicate orders from repeated clicks
  const [step, setStep] = useState(0);
  const [addr, setAddr] = useState({ ...BLANK, name: user.name, email: user.email, ...(data.addresses[0] || {}) });
  const [err, setErr] = useState({});
  const [ship, setShip] = useState("standard");
  const [pay, setPay] = useState("upi");
  const [fail, setFail] = useState(false);
  const [busy, setBusy] = useState(false);
  const [payErr, setPayErr] = useState("");

  if (!lines.length && !placing.current) return <div className="container empty"><h1>Nothing to check out</h1><p>Your cart is empty.</p><Link className="btn-main" to="/products">Continue shopping</Link></div>;

  const validate = () => {
    const e = {};
    if (addr.name.trim().length < 2) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(addr.email)) e.email = "Enter a valid email.";
    if (!/^[6-9]\d{9}$/.test(addr.phone)) e.phone = "Enter a 10-digit mobile number.";
    if (addr.address.trim().length < 6) e.address = "Enter your full address.";
    if (!addr.city.trim()) e.city = "Enter your city.";
    if (!addr.state.trim()) e.state = "Enter your state.";
    if (!/^\d{6}$/.test(addr.pin)) e.pin = "Enter a 6-digit postal code.";
    setErr(e);
    return !Object.keys(e).length;
  };
  const next = () => { if (step === 1 && !validate()) return; setStep(step + 1); };
  const total = subtotal + delivery(ship);

  const place = () => {
    if (placing.current) return;
    placing.current = true; setBusy(true); setPayErr("");
    setTimeout(() => {
      // Simulated payment: no real card/UPI data is collected or sent anywhere
      if (pay !== "cod" && fail) { placing.current = false; setBusy(false); setPayErr("Demo payment failed. Your cart is safe, try again or pick another method."); return; }
      const id = "NM-" + Date.now().toString(36).toUpperCase() + Math.floor(Math.random() * 90 + 10);
      placeOrder({
        id, date: new Date().toISOString(), address: addr, ship, pay: PAYS.find((x) => x[0] === pay)[1],
        items: lines.map((l) => ({ pid: l.pid, name: l.p.name, brand: l.p.brand, image: l.p.images[0], price: l.p.price, qty: l.qty, variant: l.variant })),
        subtotal, delivery: delivery(ship), total,
      });
      notify("Demo order placed");
      nav(`/order-success/${id}`, { replace: true });
    }, 1200);
  };

  const field = (k, label, type = "text", ac) => (
    <div className="field"><label htmlFor={`c-${k}`}>{label}</label>
      <input id={`c-${k}`} type={type} autoComplete={ac} value={addr[k]} className={err[k] ? "bad" : ""} onChange={(e) => setAddr({ ...addr, [k]: e.target.value })} />
      {err[k] && <small className="err">{err[k]}</small>}</div>
  );

  return (
    <div className="container page">
      <h1>Checkout <span className="demo-tag">Demo</span></h1>
      <ol className="steps">{STEPS.map((s, i) => <li key={s} className={i === step ? "on" : i < step ? "done" : ""}>{s}</li>)}</ol>
      <div className="row g-4">
        <div className="col-lg-8"><div className="panel">
          {step === 0 && lines.map((l) => <div key={l.key} className="rev"><span>{l.p.name}<small className="muted d-block">{variantText(l.variant)} × {l.qty}</small></span><b>{money(l.p.price * l.qty)}</b></div>)}
          {step === 1 && (
            <>
              {data.addresses.length > 0 && <div className="field"><label htmlFor="sa">Saved addresses</label>
                <select id="sa" onChange={(e) => setAddr(e.target.value === "" ? { ...BLANK, name: user.name, email: user.email } : data.addresses[+e.target.value])}>
                  <option value="">Enter a new address</option>{data.addresses.map((a, i) => <option key={i} value={i}>{a.name}, {a.address}, {a.city}</option>)}</select></div>}
              <div className="row g-2"><div className="col-md-6">{field("name", "Full name", "text", "name")}</div><div className="col-md-6">{field("phone", "Phone", "tel", "tel")}</div></div>
              {field("email", "Email", "email", "email")}{field("address", "Address", "text", "street-address")}
              <div className="row g-2"><div className="col-md-4">{field("city", "City", "text", "address-level2")}</div><div className="col-md-4">{field("state", "State", "text", "address-level1")}</div><div className="col-md-4">{field("pin", "Postal code", "text", "postal-code")}</div></div>
            </>)}
          {step === 2 && [["standard", "Standard (3-5 days)", delivery("standard")], ["express", "Express (1-2 days)", 149]].map(([k, t, c]) => (
            <label key={k} className={`opt ${ship === k ? "on" : ""}`}><input type="radio" name="ship" checked={ship === k} onChange={() => setShip(k)} /> {t}<b>{c ? money(c) : "Free"}</b></label>))}
          {step === 3 && (
            <>
              <p className="demo-note">Demo only. No real money moves and no card or UPI details are collected.</p>
              {PAYS.map(([k, t]) => <label key={k} className={`opt ${pay === k ? "on" : ""}`}><input type="radio" name="pay" checked={pay === k} onChange={() => setPay(k)} /> {t}</label>)}
              {pay !== "cod" && <label className="check mt-2"><input type="checkbox" checked={fail} onChange={(e) => setFail(e.target.checked)} /> Simulate a failed payment</label>}
            </>)}
          {step === 4 && (
            <>
              <h3>Confirm your demo order</h3>
              <p><b>Deliver to:</b> {addr.name}, {addr.address}, {addr.city}, {addr.state} {addr.pin}</p>
              <p><b>Shipping:</b> {ship === "express" ? "Express" : "Standard"} · <b>Payment:</b> {PAYS.find((x) => x[0] === pay)[1]}</p>
              {payErr && <div className="alert-err" role="alert">{payErr}</div>}
              <button className="btn-main" disabled={busy} onClick={place}>{busy ? "Processing demo payment..." : `Place order · ${money(total)}`}</button>
            </>)}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn-ghost" disabled={step === 0 || busy} onClick={() => setStep(step - 1)}>Back</button>
            {step < 4 && <button className="btn-main" onClick={next}>Continue</button>}
          </div>
        </div></div>
        <div className="col-lg-4"><Summary shipMethod={ship} /></div>
      </div>
    </div>
  );
}
