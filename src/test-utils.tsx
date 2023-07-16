import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { JSDOM } from "jsdom";
import {
	Route,
	RouteProps,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

/*
 Inspired by react router team's tests...
 https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/__tests__/data-browser-router-test.tsx#L4197-L4202
*/
const getWindow = (initialUrl: string): Window => {
	// Need to use our own custom DOM in order to get a working history
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const dom = new JSDOM("<!DOCTYPE html>", { url: "http://localhost/" });
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
	dom.window.history.replaceState(null, "", initialUrl);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return dom.window as unknown as Window;
};

const noRoutes: RouteProps[] = [];

const renderWithRouter = (routes = noRoutes, initialUrl = "/") => {
	const mockWindow = getWindow(initialUrl);

	const routeNodes = routes.map((route, i) => (
		<Route key={`route-${i}`} {...route} />
	));

	const router = createBrowserRouter(createRoutesFromElements(routeNodes), {
		window: mockWindow,
	});

	return {
		...render(<RouterProvider router={router} />),
		mockWindow,
		user: userEvent.setup(),
	};
};

export * from "@testing-library/react";
export { renderWithRouter };
