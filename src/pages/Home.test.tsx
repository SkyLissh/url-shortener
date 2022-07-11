import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Home } from "src/pages";
import useClipboard from "src/hooks/useClipboard";

jest.mock("src/hooks/useClipboard");

const mockUseClipboard = useClipboard as jest.MockedFunction<typeof useClipboard>;

beforeEach(() => render(<Home />));

describe("Home", () => {
	it("renders", () => {
		expect(screen.getByText("Create Short Links!")).toBeInTheDocument();
		expect(
			screen.getByText(
				"This is a simple tool, to create shorter links that are more readable."
			)
		).toBeInTheDocument();

		// Expect render input
		expect(
			screen.getByPlaceholderText("Paste a link to shorten it!")
		).toBeInTheDocument();

		// Expect render button
		expect(screen.getByText("Shorten It!")).toBeInTheDocument();
	});

	it("loads and render url", async () => {
		mockUseClipboard.mockReturnValue("Copied!");

		// Simulate input
		fireEvent.change(screen.getByPlaceholderText("Paste a link to shorten it!"), {
			target: { value: "https://example.com" }
		});

		// Simulate submit
		fireEvent.submit(screen.getByText("Shorten It!"));

		// Wait for response
		await waitFor(() => {
			screen.getByText("http://localhost:3000/1ZXbYBcoOA");
		});

		expect(screen.getByText("Copied!")).toBeInTheDocument();
	});

	it("should throw url required error", async () => {
		// Simulate submit
		fireEvent.submit(screen.getByText("Shorten It!"));

		// Wait for response
		await waitFor(() => {
			screen.getByText("URL is required");
		});
	});

	it("should throw invalid url error", async () => {
		// Simulate input
		fireEvent.change(screen.getByPlaceholderText("Paste a link to shorten it!"), {
			target: { value: "invalid url" }
		});

		// Simulate submit
		fireEvent.submit(screen.getByText("Shorten It!"));

		// Wait for response
		await waitFor(() => {
			screen.getByText("Invalid URL");
		});
	});
});
