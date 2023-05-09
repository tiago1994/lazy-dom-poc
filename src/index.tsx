import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FullRender } from "./pages/full-render";
import { SplitRender } from "./pages/split-render";
import { LazyLoadRender } from "./pages/lazy-load-render";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/full-render",
    element: <FullRender />,
  },
  {
    path: "/split-render",
    element: <SplitRender />,
  },
  {
    path: "/lazy-load-render",
    element: <LazyLoadRender />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
