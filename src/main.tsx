import React from "react";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <CartProvider>
        <WishlistProvider>
    <RouterProvider router={router} />
     </WishlistProvider>

    </CartProvider>
  </React.StrictMode>,
);
