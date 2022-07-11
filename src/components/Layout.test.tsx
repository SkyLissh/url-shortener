import { render, screen } from "@testing-library/react";

import Layout from "./Layout";

test("loads and render Layout", () => {
	render(
		<Layout
			img="https://picsum.photos/id/1/200/200"
			title="Title"
			description="Description"
			alt="Alt"
		/>
	);

	expect(screen.getByAltText("Alt")).toBeInTheDocument();
	expect(screen.getByText("Title")).toBeInTheDocument();
	expect(screen.getByText("Description")).toBeInTheDocument();

	expect(screen.getByAltText("Alt")).toHaveAttribute(
		"src",
		"https://picsum.photos/id/1/200/200"
	);
});
