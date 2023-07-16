import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../test-utils";
import Dog from "./dog";

describe("Dog", () => {
	it("displays dog name from name param", () => {
		const dog = faker.animal.dog();
		const { getByText } = renderWithRouter(
			[{ element: <Dog />, path: "dog/:name" }],
			`/dog/${dog}`,
		);
		getByText(`This is ${dog}`);
		expect(() => getByText("is the best dog")).toThrow();
	});
	it("displays best dog for rafa name param", () => {
		const { getByText } = renderWithRouter(
			[{ element: <Dog />, path: "dog/:name" }],
			"/dog/rafa",
		);
		getByText("This is rafa");
		getByText("He is the best dog");
	});
});
