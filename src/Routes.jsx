import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home, { fetchProducts } from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails, { fetchProductDetails } from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchProducts,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/burger/:id",
        element: <ProductDetails />,
        loader: fetchProductDetails,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
