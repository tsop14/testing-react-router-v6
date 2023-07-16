import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Cat from "./routes/cat";
import Dog from "./routes/dog";
import Home from "./routes/home";
import Root from "./routes/root";

const router = createBrowserRouter([
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
				element: <Cat />,
				path: "/cat/:name",
			},
		],
	},
]);

// rome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
