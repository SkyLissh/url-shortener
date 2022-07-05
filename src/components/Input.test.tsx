import { render, screen } from "@testing-library/react";

import Input from "./Input";

test("loads and render Input", () => {
	const onChange = jest.fn();
	render(<Input color="text-slate-500" onChange={onChange} />);

	expect(screen.getByLabelText("Input")).toBeInTheDocument();
});
