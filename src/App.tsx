import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ForwardUrl, NotFound } from "src/pages";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path=":urlId" element={<ForwardUrl />} />
					<Route path="404" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
