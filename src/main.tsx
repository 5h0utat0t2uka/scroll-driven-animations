import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import "./styles/globals.css";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        lazy: async () => {
          const [{ default: Home }] = await Promise.all([import("./pages/home/index")]);
          return { Component: Home };
        },
      },
      {
        path: "parallax-carousel",
        lazy: async () => {
          const [{ default: Page }] = await Promise.all([
            import("./pages/parallax-carousel/index"),
          ]);
          return { Component: Page };
        },
      },
      {
        path: "parallax-elements",
        lazy: async () => {
          const [{ default: Page }] = await Promise.all([
            import("./pages/parallax-elements/index"),
          ]);
          return { Component: Page };
        },
      },
      {
        path: "horizontal",
        lazy: async () => {
          const [{ default: Page }] = await Promise.all([import("./pages/horizontal/index")]);
          return { Component: Page };
        },
      },
      {
        path: "stack",
        lazy: async () => {
          const [{ default: Page }] = await Promise.all([import("./pages/stack/index")]);
          return { Component: Page };
        },
      },
      {
        path: "grid",
        lazy: async () => {
          const [{ default: Page }] = await Promise.all([import("./pages/grid/index")]);
          return { Component: Page };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const [{ default: NotFound }] = await Promise.all([import("./pages/_not-found/index")]);
          return { Component: NotFound };
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
