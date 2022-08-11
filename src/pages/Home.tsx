import { FormEvent, useState } from "react";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Clipboard from "src/components/Clipboard";

import { settings } from "src/utils/settings";

import URL from "src/models/url";
import ApiError from "src/models/apiError";

export function Home() {
	const [data, setData] = useState<URL>();
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState(false);

	const [disabled, setDisabled] = useState(false);
	const [url, setUrl] = useState<string>();

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUrl(e.target.value);
		disabled && setDisabled(false);
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (url) {
			try {
				setLoading(true);
				const response = await fetch(`${settings.apiUrl}/url`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: `{"target_url": "${url}"}`
				});

				if (response.status == 422) {
					setData(undefined);
					throw new Error("Invalid URL");
				} else if (!response.ok) {
					setData(undefined);
					const errorMessage: ApiError = await response.json();
					throw new Error(errorMessage.detail);
				}

				setError(undefined);
				setLoading(false);
				setData((await response.json()) as URL);

				setDisabled(true);
			} catch (error) {
				setLoading(false);
				setError(error as Error);

				setDisabled(true);
			}
		} else {
			setError(new Error("URL is required"));

			setDisabled(true);
		}
	}

	return (
		<main className="container mx-auto px-4 h-screen flex items-center justify-center">
			<div className="bg-white shadow-xl rounded-lg p-4 md:p-6">
				<h1 className="text-indigo-700 font-semibold text-center text-2xl">
					Create Short Links!
				</h1>
				<p className="text-slate-600 text-center my-4">
					This is a simple tool, to create shorter links that are more readable.
				</p>

				<form onSubmit={onSubmit} className="mt-14">
					<Input color="text-slate-500" onChange={onChange} />
					{data && <Clipboard link={`${settings.homeUrl}${data.url}`} />}
					{error && <p className="text-red-500 text-center my-4">{error.message}</p>}
					<Button text={loading ? "Loading..." : "Shorten It!"} disabled={disabled}>
						{loading && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						)}
					</Button>
				</form>
			</div>
		</main>
	);
}
