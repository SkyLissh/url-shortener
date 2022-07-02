import { FormEvent, useState } from "react";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Clipboard from "src/components/Clipboard";

import URL from "src/models/url";

interface URLRequest {
	target_url: string;
}

export default function App() {
	const baseUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}`;

	const [data, setData] = useState<URL>();
	const [error, setError] = useState<Error>();
	const [url, setUrl] = useState<URLRequest>();

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUrl({ target_url: e.target.value });
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (url) {
			try {
				const response = await fetch(`${baseUrl}/url`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ url })
				});

				setData((await response.json()) as URL);

				if (!response.ok) {
					throw new Error(response.statusText);
				}
			} catch (error) {
				setError(error as Error);
			}
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
					{data && <Clipboard link={data.url} />}
					{error && <p className="text-red-500 text-center my-4">{error.message}</p>}
					<Button text="Shorten It!" />
				</form>
			</div>
		</main>
	);
}
