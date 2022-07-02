type Props = {
	text: string;

	onClick?: () => void;
};

export default function Button({ text, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className="bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-300 my-4 w-full rounded-lg px-4 py-4"
		>
			{text}
		</button>
	);
}
