import Button from "src/components/Button";
import Input from "src/components/Input";
import Clipboard from "src/components/Clipboard";

export default function App() {
	return (
		<main className="container mx-auto px-4 h-screen flex items-center justify-center">
			<div className="bg-white shadow-xl rounded-lg p-4 md:p-6">
				<h1 className="text-indigo-700 font-semibold text-center text-2xl">
					Create Short Links!
				</h1>
				<p className="text-slate-600 text-center my-4">
					This is a simple tool, to create shorter links that are more readable.
				</p>

				<form className="mt-14">
					<Input color="text-slate-500" />
					<Clipboard hide link="https://tiangolo.fastapi.com" />
					<Button text="Shorten It!" />
				</form>
			</div>
		</main>
	);
}
