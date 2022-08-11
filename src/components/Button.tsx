type Props = {
	text: string;
	children?: React.ReactNode;
	disabled?: boolean;

	onClick?: () => void;
};

export default function Button({ text, children, disabled, onClick }: Props) {
	const disabledClass = disabled ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-500";

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${disabledClass} text-white font-semibold flex justify-center items-center shadow-lg shadow-indigo-300 my-4 w-full rounded-lg px-4 py-4 transition-colors ease-in-out duration-300 hover:bg-indigo-400`}
		>
			{children}
			{text}
		</button>
	);
}
