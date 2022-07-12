import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "src/components/Layout";

import URL from "src/models/url";
import { settings } from "src/utils/settings";

type Params = {
	urlId: string;
};

export function ForwardUrl() {
	const [data, setData] = useState<URL>();

	const { urlId } = useParams<Params>();
	const navigate = useNavigate();

	async function getTargetUrl() {
		try {
			const response = await fetch(`${settings.apiUrl}/url/${urlId}`);

			if (!response.ok) {
				throw new Error("Invalid URL");
			}

			setData((await response.json()) as URL);
		} catch (error) {
			navigate("/404", { replace: true });
		}
	}

	useEffect(() => {
		getTargetUrl();
	}, []);

	return (
		<>
			<Layout
				img="/assets/redirect.svg"
				alt="Redirect"
				title="Redirect..."
				description={`You're beign redirect`}
			/>
			{data && window.location.replace(data.target_url)}
		</>
	);
}
