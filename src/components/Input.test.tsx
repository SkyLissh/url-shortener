import { render, screen, fireEvent } from "@testing-library/react";

import Input from "./Input";

test("loads and render Input", () => {
	const onChange = jest.fn();
	render(<Input color="text-slate-500" onChange={onChange} />);

	expect(screen.getByPlaceholderText("Paste a link to shorten it!")).toBeInTheDocument();
	expect(screen.getByTitle("Link")).toBeInTheDocument();

	const input: HTMLInputElement = screen.getByPlaceholderText(
		"Paste a link to shorten it!"
	);

	fireEvent.change(input, { target: { value: "https://www.google.com" } });

	expect(onChange).toHaveBeenCalledTimes(1);
	expect(input.value).toBe<string>("https://www.google.com");
});
