import { render, screen } from "@testing-library/react";

import Tooltip from "./Tooltip";

test("loads and render Tooltip", () => {
	render(<Tooltip message="Hello" />);

	expect(screen.getByText("Hello")).toBeInTheDocument();
});
