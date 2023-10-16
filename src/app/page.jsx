import { get_data } from "@/services/api";
import { Card } from "@/components";

export default function Home() {
	return (
		<main className="flex flex-col p-5 border">
			<Card title="App weather with Next JS"></Card>
			<div className="my-5"></div>
			<div className="w-full p-5 rounded-md shadow-md border">
				<div className="w-full text-center">
					<h1 className="text-xl">App weather with Next JS</h1>
				</div>
			</div>
		</main>
	);
}
