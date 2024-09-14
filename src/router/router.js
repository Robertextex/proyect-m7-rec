import { createBrowserRouter } from "react-router-dom";

import Default from "../screens/Default";
import Product from "../screens/Product";

import App from "../App";
import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";
import { Dictionary } from "../screens/Dictionary/Dictionary";

const basename = process.env.NODE_ENV === "production" ? "/Proyecto-M7" : "/";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/default",
          element: <Default />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/dictionary",
          element: <Dictionary />,
        },
      ],
    },
  ],
  {
    basename: basename,
  }
);
export default routes;
