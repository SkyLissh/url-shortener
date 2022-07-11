import "@testing-library/jest-dom";
import "whatwg-fetch";

import { server } from "src/server";
import { settings } from "src/utils/settings";

jest.mock<{ settings: typeof settings }>("src/utils/settings", () => {
	return {
		settings: {
			apiUrl: "https://api.example.com",
			homeUrl: "http://localhost:3000/"
		}
	};
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
