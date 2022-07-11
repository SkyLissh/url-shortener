import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ForwardUrl } from "src/pages";

beforeEach(() =>
	render(
		<MemoryRouter initialEntries={["/1ZXbYBcoOA"]}>
			<ForwardUrl />
		</MemoryRouter>
	)
);

describe("ForwardUrl", () => {
	it("renders", () => {
		expect(screen.getByText("Redirect...")).toBeInTheDocument();
		expect(screen.getByText("You're beign redirect")).toBeInTheDocument();

		expect(screen.getByAltText("Redirect")).toHaveAttribute(
			"src",
			"/assets/redirect.svg"
		);
	});
});
