import { render, screen } from "@testing-library/react";

import Button from "./Button";

test("loads and render Button", () => {
	render(<Button text="Click me" />);

	expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("loads and render Button with onClick", () => {
	const onClick = jest.fn();
	render(<Button text="Click me" onClick={onClick} />);

	screen.getByText("Click me").click();

	expect(onClick).toHaveBeenCalled();
});
