import { rest } from "msw";
import { setupServer } from "msw/node";

import URL from "src/models/url";

interface URLRequest {
	target_url: string;
}

function isURL(url: string): boolean {
	try {
		const validURL = new URL(url);
		return validURL.protocol === "http:" || validURL.protocol === "https:";
	} catch (error) {
		return false;
	}
}

const mockResponse: URL = {
	id: "12777e28-7be7-490f-a8bb-9b5216a74372",
	url: "1ZXbYBcoOA",
	target_url: "https://example.com",
	clicks: 0,
	is_active: true
};

export const server = setupServer(
	rest.post<URLRequest, {}, URL>("https://api.example.com/url/", (req, res, ctx) => {
		const { target_url } = req.body;
		if (!isURL(target_url)) {
			return res(ctx.status(422));
		}

		return res(ctx.status(200), ctx.json(mockResponse));
	}),

	rest.get<URLRequest, { id: string }, URL>(
		"https://api.example.com/url/:id",
		(req, res, ctx) => {
			const { id } = req.params;
			if (id === "1ZXbYBcoOA") {
				return res(ctx.status(200), ctx.json(mockResponse));
			}

			return res(ctx.status(404));
		}
	)
);
