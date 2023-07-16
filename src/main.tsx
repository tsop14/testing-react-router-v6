import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cat from "./routes/cat";
import Dog from "./routes/dog";
import Home from "./routes/home";
import Root from "./routes/root";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Dog />,
        path: "/dog/:name",
      },
      {
        loader: ({ params }) => {
          const name = params.name;
          return { name };
        },
        element: <Cat />,
        path: "/cat/:name",
      },
    ],
  },
];

const router = createBrowserRouter(routes);

// rome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// rome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
