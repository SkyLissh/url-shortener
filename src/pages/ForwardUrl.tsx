import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Url from "src/models/url";

import Layout from "src/components/Layout";

type Params = {
	urlId: string;
};

export function ForwardUrl() {
	const { urlId } = useParams<Params>();
	const baseUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}`;

	const navigate = useNavigate();

	async function getTargetUrl() {
		try {
			const response = await fetch(`${baseUrl}/url/${urlId}`);

			if (!response.ok) {
				throw new Error("Invalid URL");
			}

			const data = (await response.json()) as Url;
			window.location.replace(data.target_url);
		} catch (error) {
			navigate("/404", { replace: true });
		}
	}

	useEffect(() => {
		getTargetUrl();
	}, []);

	return (
		<Layout img="redirect" title="Redirect..." description="You're beign redirect" />
	);
}
