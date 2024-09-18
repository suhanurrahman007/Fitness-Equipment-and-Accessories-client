import HomePage from "../pages/home/HomePage";
import Products from "../pages/products/Products";

export const paths = [
  {
    name: "Home",
    path: "dashboard",
    element: <HomePage />,
  },
  {
    name: "Products",
    path: "products",
    element: <Products />,
  },
];
