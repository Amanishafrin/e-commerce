import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell.jsx";
import PasswordInput from "../components/PasswordInput.jsx";
import { useShop } from "../context/ShopContext.jsx";

export default function Register() {
  const { register, notify } = useShop();
  const nav = useNavigate();
  const [f, setF] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email address.";
    if (!/^[6-9]\d{9}$/.test(f.phone)) er.phone = "Enter a 10-digit Indian mobile number.";
    if (f.password.length < 8 || !/\d/.test(f.password) || !/[a-zA-Z]/.test(f.password)) er.password = "Use 8+ characters with letters and numbers.";
    if (f.confirm !== f.password) er.confirm = "Passwords do not match.";
    setErr(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    const r = await register(f);
    setBusy(false);
    if (!r.ok) return setErr({ email: r.error });
    notify("Account created. Welcome to NexaMart!");
    nav("/", { replace: true });
  };
  const text = (id, label, k, type = "text", ac) => (
    <div className="field"><label htmlFor={id}>{label}</label>
      <input id={id} type={type} autoComplete={ac} value={f[k]} onChange={set(k)} className={err[k] ? "bad" : ""} />
      {err[k] && <small className="err">{err[k]}</small>}</div>
  );
  return (
    <AuthShell title="Create your account" subtitle="Join NexaMart in under a minute.">
      <form onSubmit={submit} noValidate>
        {text("rn", "Full name", "name", "text", "name")}
        {text("re", "Email address", "email", "email", "email")}
        {text("rp", "Phone number", "phone", "tel", "tel")}
        <PasswordInput id="rpw" label="Password" autoComplete="new-password" value={f.password} error={err.password} onChange={set("password")} />
        <PasswordInput id="rcp" label="Confirm password" autoComplete="new-password" value={f.confirm} error={err.confirm} onChange={set("confirm")} />
        <button className="btn-main w-100" disabled={busy}>{busy ? "Creating..." : "Register"}</button>
      </form>
      <p className="mt-3 text-center">Already have an account? <Link to="/login">Log in</Link></p>
    </AuthShell>
  );
}
