import { forwardRef, useEffect } from "react";

type Props = {
	message: string;
};

const Tooltip = forwardRef<HTMLDivElement, Props>(({ message }, ref) => {
	const after =
		"after:absolute after:top-full after:left-1/2 after:-ml-[5px] after:border-[5px] after:border-t-indigo-500";

	return (
		<div
			ref={ref}
			className={`hidden absolute left-50% -ml-[38px] bottom-[150%] p-[5px] ${after}`}
		>
			<span className="bg-indigo-500 text-white text-sm p-2 rounded-lg">{message}</span>
		</div>
	);
});

export default Tooltip;
