import { FormEvent, useState } from "react";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Clipboard from "src/components/Clipboard";

import URL from "src/models/url";

export function Home() {
	const baseUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}`;

	const [data, setData] = useState<URL>();
	const [error, setError] = useState<Error>();
	const [url, setUrl] = useState<string>();

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUrl(e.target.value);
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (url) {
			try {
				const response = await fetch(`${baseUrl}/url/`, {
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
					const errorMessage = await response.json();
					throw new Error(errorMessage.detail);
				}

				setError(undefined);
				setData((await response.json()) as URL);
			} catch (error) {
				setError(error as Error);
			}
		} else {
			setError(new Error("URL is required"));
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
					{data && <Clipboard link={`${import.meta.env.VITE_HOME_URL}${data.url}`} />}
					{error && <p className="text-red-500 text-center my-4">{error.message}</p>}
					<Button text="Shorten It!" />
				</form>
			</div>
		</main>
	);
}
