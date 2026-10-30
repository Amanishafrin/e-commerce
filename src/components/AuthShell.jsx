import { motion } from "framer-motion";
import Logo from "./Logo.jsx";

// Shared layout for Login / Register
export default function AuthShell({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <motion.div className="auth-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="auth-logo"><Logo /></div>
        <h1>{title}</h1>
        <p className="muted">{subtitle}</p>
        {children}
        <p className="demo-note">Demo authentication only. Data stays in your browser's LocalStorage; do not enter real credentials.</p>
      </motion.div>
    </div>
  );
}
