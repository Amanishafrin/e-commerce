// Original NexaMart logo: a rounded square with a cart-like "N"
export default function Logo({ light = false }) {
  return (
    <span className="logo">
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#7BBDE8" />
        <path d="M11 29V11l18 18V11" fill="none" stroke="#001D39" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={light ? "logo-text light" : "logo-text"}>Nexa<b>Mart</b></span>
    </span>
  );
}
