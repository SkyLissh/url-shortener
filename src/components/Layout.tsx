type Props = {
	img: string;
	title: string;
	description: string;
};

export default function Layout({ img, title, description }: Props) {
	return (
		<main className="container h-screen mx-auto text-center grid place-items-center">
			<section className="flex items-center justify-center flex-wrap">
				<img className="h-44 w-44 md:h-80 md:w-80" src={img} alt="Not Found" />
				<h1 className="text-indigo-500 text-4xl md:text-9xl font-semibold w-full">
					{title}
				</h1>
				<h2 className="my-4 text-xl md:text-5xl">{description}</h2>
			</section>
		</main>
	);
}
