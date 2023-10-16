import { get_data } from "@/services/api";
export default function Home() {
	return (
		<main className="flex min-h-screen p-24">
			<div className="container">
				<div className="flex">
					<div className="columns-1 w-full border">
						<h1 className="text-xl text-center p-5">
							App weather with Next JS
						</h1>
					</div>
				</div>
			</div>
		</main>
	);
}
