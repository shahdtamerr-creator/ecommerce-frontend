import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
// import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: "shop", element: <Shop /> },
  {path: "/Cart", element:<Cart/>},
{path:"/Wishlist", element:<Wishlist/>},
]);

export default router;
