import { render, screen, fireEvent } from "@testing-library/react";

import Clipboard from "src/components/Clipboard";
import useClipboard from "src/hooks/useClipboard";

jest.mock("src/hooks/useClipboard");

const mockUseClipboard = useClipboard as jest.MockedFunction<typeof useClipboard>;

test("loads and render Clipboard", () => {
	mockUseClipboard.mockReturnValue("Copied!");

	render(<Clipboard link="https://www.google.com" />);
	expect(screen.getByText("Copied!")).toBeInTheDocument();
});

test("copies link to clipboard", () => {
	mockUseClipboard.mockReturnValue("Copied!");

	render(<Clipboard link="https://www.google.com" />);
	const button = screen.getByRole("button");
	fireEvent.click(button);
	expect(mockUseClipboard).toHaveBeenCalled();
});

test("shows tooltip when mouse is over button", () => {
	mockUseClipboard.mockReturnValue("Copied!");

	render(<Clipboard link="https://www.google.com" />);
	const button = screen.getByRole("button");
	fireEvent.mouseOver(button);
	expect(screen.getByText("Copied!")).toBeInTheDocument();
});
