import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/responsive.css";
import App from "./App.jsx";
import { ShopProvider } from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ShopProvider><App /></ShopProvider>
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>
);
