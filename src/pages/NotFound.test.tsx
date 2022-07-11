import { render, screen } from "@testing-library/react";

import { NotFound } from "src/pages";

describe("NotFound", () => {
	it("renders", () => {
		render(<NotFound />);
		expect(screen.getByText("404")).toBeInTheDocument();
		expect(screen.getByText("Oops! Something went wrong")).toBeInTheDocument();

		expect(screen.getByAltText("Not Found")).toHaveAttribute(
			"src",
			"/assets/not-found.svg"
		);
	});
});
