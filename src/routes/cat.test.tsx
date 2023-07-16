import { faker } from "@faker-js/faker";
import { describe, it } from "vitest";
import { renderWithRouter, waitFor } from "../test-utils";
import Cat from "./cat";

describe("Cat", () => {
  it("displays cat name from loader data", async () => {
    const cat = faker.animal.cat();
    const { getByText } = renderWithRouter(
      [
        {
          element: <Cat />,
          path: "cat/:name",
          loader: () => {
            return { name: cat };
          },
        },
      ],
      "/cat/abcdef",
    );
    // wait for loader data to be loaded
    await waitFor(() => {
      getByText(`Look at ${cat} fly`);
    });
  });
});
