import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/pages/home/Home.jsx";
import Itms from "./components/pages/itms/Itms.jsx";
import Details from "./components/pages/details/Details.jsx";
import Login from "./components/pages/login/Login.jsx";
import Signup from "./components/pages/signup/Signup.jsx";
import ChefDetails from "./components/pages/chefDetails/ChefDetails.jsx";
import Error from "./components/pages/error/Error.jsx";
import Blog from "./components/pages/blog/Blog.jsx";
import { chefsAndRecipies } from "./components/loader/DataLoader.js";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoutes from "./components/routes/PrivateRoutes.jsx";
import Favourite from "./components/pages/fav/Favourite.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: chefsAndRecipies,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/itms",
        element: <Itms />,
      },
      {
        path: "/favourite",
        element: (
          <PrivateRoutes>
            <Favourite />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) => params.id,
      },
      {
        path: "/chef_details/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
