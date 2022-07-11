import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "src/components/Layout";

import URL from "src/models/url";
import { settings } from "src/utils/settings";

type Params = {
	urlId: string;
};

export function ForwardUrl() {
	const { urlId } = useParams<Params>();

	const navigate = useNavigate();

	async function getTargetUrl() {
		try {
			const response = await fetch(`${settings.apiUrl}/url/${urlId}`);

			if (!response.ok) {
				throw new Error("Invalid URL");
			}

			const data = (await response.json()) as URL;
			window.location.replace(data.target_url);
		} catch (error) {
			navigate("/404", { replace: true });
		}
	}

	useEffect(() => {
		getTargetUrl();
	}, []);

	return (
		<Layout
			img="/assets/redirect.svg"
			alt="Redirect"
			title="Redirect..."
			description="You're beign redirect"
		/>
	);
}
