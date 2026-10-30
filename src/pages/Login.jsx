import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell.jsx";
import PasswordInput from "../components/PasswordInput.jsx";
import { useShop } from "../context/ShopContext.jsx";

export default function Login() {
  const { login, notify } = useShop();
  const nav = useNavigate();
  const from = useLocation().state?.from || "/";
  const [f, setF] = useState({ email: "", password: "", remember: true });
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email address.";
    if (!f.password) er.password = "Enter your password.";
    setErr(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    const r = await login(f.email, f.password, f.remember);
    setBusy(false);
    if (!r.ok) return setErr({ form: r.error });
    notify("Welcome back!");
    nav(from, { replace: true });
  };
  return (
    <AuthShell title="Welcome back" subtitle="Log in to continue shopping.">
      <form onSubmit={submit} noValidate>
        {err.form && <div className="alert-err" role="alert">{err.form}</div>}
        <div className="field"><label htmlFor="em">Email</label>
          <input id="em" type="email" autoComplete="email" value={f.email} className={err.email ? "bad" : ""} onChange={(e) => setF({ ...f, email: e.target.value })} />
          {err.email && <small className="err">{err.email}</small>}</div>
        <PasswordInput id="pw" label="Password" autoComplete="current-password" value={f.password} error={err.password} onChange={(e) => setF({ ...f, password: e.target.value })} />
        <label className="check"><input type="checkbox" checked={f.remember} onChange={(e) => setF({ ...f, remember: e.target.checked })} /> Remember me</label>
        <button className="btn-main w-100" disabled={busy}>{busy ? "Logging in..." : "Log in"}</button>
        <button type="button" className="btn-ghost w-100 mt-2" onClick={() => setF({ ...f, email: "demo@example.com", password: "Demo@123" })}>Fill demo account (demo@example.com / Demo@123)</button>
      </form>
      <p className="mt-3 text-center">New to NexaMart? <Link to="/register">Sign up</Link></p>
    </AuthShell>
  );
}
