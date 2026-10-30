import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

// Scrolls to top on route change + floating Back to Top button
export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname, search]);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return show ? (
    <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><FaArrowUp /></button>
  ) : null;
}
