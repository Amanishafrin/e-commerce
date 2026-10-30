import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({ id, label, value, onChange, error, autoComplete }) {
  const [show, setShow] = useState(false);
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="pw">
        <input id={id} type={show ? "text" : "password"} value={value} onChange={onChange} autoComplete={autoComplete} className={error ? "bad" : ""} />
        <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}>{show ? <FaEyeSlash /> : <FaEye />}</button>
      </div>
      {error && <small className="err">{error}</small>}
    </div>
  );
}
