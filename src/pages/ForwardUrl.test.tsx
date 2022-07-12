import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { ForwardUrl } from "src/pages";

beforeEach(() =>
	render(
		<MemoryRouter initialEntries={["/1ZXbYBcoOA"]}>
			<Routes>
				<Route path="/:urlId" element={<ForwardUrl />} />
			</Routes>
		</MemoryRouter>
	)
);

describe("ForwardUrl", () => {
	it("renders", async () => {
		expect(screen.getByText("Redirect...")).toBeInTheDocument();
		expect(screen.getByText("You're beign redirect")).toBeInTheDocument();

		expect(screen.getByAltText("Redirect")).toHaveAttribute(
			"src",
			"/assets/redirect.svg"
		);
	});

	it("redirects to the target url", async () => {
		global.window = Object.create(window);

		Object.defineProperty(window, "location", {
			configurable: true,
			value: {
				replace: (url: string) => url
			}
		});

		await waitFor(() => screen.getByText("https://example.com"));
	});
});
