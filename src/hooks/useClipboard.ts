import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";

export default function useClipboard(
	selector: string | Element | NodeListOf<Element>,
	onCopy?: () => void
): string {
	const [message, setMessage] = useState("");

	useEffect(() => {
		console.log("useClipboard");
		const clipboard = new ClipboardJS(selector);

		clipboard.on("success", (e: ClipboardJS.Event) => {
			e.clearSelection();
			setMessage("Copied!");
			onCopy?.();
		});

		clipboard.on("error", (e: ClipboardJS.Event) => {
			setMessage("Error!");
			onCopy?.();
		});

		return () => {
			clipboard.destroy();
		};
	}, []);

	return message;
}
