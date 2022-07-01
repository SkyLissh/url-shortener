type Props = {
	text: string;
};

export default function Button({ text }: Props) {
	return (
		<button className="bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-300 my-4 w-full rounded-lg px-4 py-4">
			{text}
		</button>
	);
}
