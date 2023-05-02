import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/pages/home/Home.jsx";
import Itms from "./components/pages/itms/Itms.jsx";
import { chefsAndRecipies } from "./components/loader/DataLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
