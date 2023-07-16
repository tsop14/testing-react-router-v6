import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../test-utils";
import Home from "./home";

describe("Home", () => {
	it("displays welcome text", () => {
		const { getByText } = renderWithRouter([{ element: <Home />, path: "/" }]);
		getByText("WELCOME");
	});
	it("links to /dog/rafa", async () => {
		const { user, findByRole, mockWindow } = renderWithRouter([
			{ element: <Home />, path: "/" },
			{ element: <div />, path: "/dog/rafa" },
		]);
		const link = await findByRole("link");
		await user.click(link);
		expect(mockWindow.location.pathname).toEqual("/dog/rafa");
	});
});
