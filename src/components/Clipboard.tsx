import { useEffect, useRef } from "react";
import useClipboard from "src/hooks/useClipboard";

import Tooltip from "src/components/Tooltip";

type Props = {
	link: string;
};

export default function Clipboard({ link }: Props) {
	const tooltipRef = useRef<HTMLDivElement>(null);
	let message = useClipboard("#copy-button", showTooltip);

	function showTooltip() {
		if (tooltipRef.current) {
			tooltipRef.current.classList.remove("hidden");
		}
	}

	function hideTooltip() {
		if (tooltipRef.current && !tooltipRef.current.classList.contains("hidden")) {
			tooltipRef.current.classList.add("hidden");
		}
	}

	return (
		<div className={"bg-gray-200 p-4 mt-4 rounded-lg flex justify-between"}>
			<p className="basis-11/12 w-0 truncate">{link}</p>
			<button
				type="button"
				id="copy-button"
				className="relative"
				onMouseOut={hideTooltip}
				data-clipboard-text={link}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
					/>
				</svg>
				<Tooltip ref={tooltipRef} message={message} />
			</button>
		</div>
	);
}
