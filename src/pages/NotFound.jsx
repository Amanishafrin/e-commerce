import { Link } from "react-router-dom";
export default function NotFound() {
  return <div className="container empty"><h1>Page not found</h1><p>That page doesn't exist or has moved.</p><Link className="btn-main" to="/">Back to home</Link></div>;
}
