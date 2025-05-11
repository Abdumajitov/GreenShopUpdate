import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./toolkit/store.js";

const Nav = lazy(() => import("./components/Navbar.jsx"));
const App = lazy(() => import("./App.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const Plants = lazy(() => import("./pages/Plants.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/plant",
        element: <Plants />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="h-[100vh] flex items-center justify-center text-[30px]">
            Loading...
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);
