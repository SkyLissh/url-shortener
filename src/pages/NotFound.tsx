import Layout from "src/components/Layout";

import notFound from "src/images/not-found.svg";

export function NotFound() {
	console.log(notFound);
	return <Layout img={notFound} title="404" description="Oops! Something went wrong" />;
}
