import { ChangeEventHandler } from "react";

type Props = {
	color: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ color, onChange }: Props) {
	return (
		<label className="relative">
			<span className="absolute inset-y-0 left-0 pl-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-6 w-6 ${color}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<title>Link</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
					/>
				</svg>
			</span>
			<input
				className="bg-gray-200 pl-10 border-none py-4 rounded-lg w-full placeholder:text-slate-500 focus:ring-indigo-700"
				type="url"
				onChange={onChange}
				placeholder="Paste a link to shorten it!"
			/>
		</label>
	);
}
