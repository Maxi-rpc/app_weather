"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// project
import { get_data } from "@/services/api";
import { Header, CardHeader, CardMain, Loading, Divider } from "@/components";
// assets
import icon_sol from "@/public/icons/icon_sol.svg";
import icon_sol_nublado from "@/public/icons/icon_sol_nublado.svg";
import icon_sol_lluvia from "@/public/icons/icon_sol_lluvia.svg";
import icon_tormenta from "@/public/icons/icon_tormenta.svg";
import icon_lluvia from "@/public/icons/icon_lluvia.svg";
import icon_luna from "@/public/icons/icon_luna.svg";
import icon_luna_nublado from "@/public/icons/icon_luna_nublado.svg";

const icons = {
	Clear: icon_sol,
	Clouds: icon_sol_nublado,
	Rain: icon_lluvia,
};

export default function Home() {
	const [country, setCountry] = useState("Argentina");
	const [city, setCity] = useState("Buenos Aires");
	const [weather, setWeather] = useState({
		main: "",
		description: "",
	});
	const [temp, setTemp] = useState({
		temperature: "",
		feels_like: "",
		temp_min: "",
		temp_max: "",
		humidity: "",
	});

	useEffect(() => {
		get_data(country, city).then((res) => {
			const weather = res.data.weather[0];
			const main = res.data.main;
			setWeather({
				main: weather.main,
				description: weather.description,
			});
			setTemp({
				temperature: main.temp,
				feels_like: main.feels_like,
				temp_min: main.temp_min,
				temp_max: main.temp_max,
				humidity: main.humidity,
			});
		});
	}, [country, city]);

	if (!temp.temperature) {
		return (
			<>
				<div className="w-full p-5 flex justify-center">
					<Loading />
				</div>
			</>
		);
	}

	return (
		<main className="w-1/2 sm:w-full lg:w-1/2 mx-auto">
			<div className="flex flex-col p-5 justify-center">
				{/* header */}
				<Header>
					App weather with <span className="font-bold">Next JS</span>
				</Header>
				<Divider />
				{/* insert city */}
				<div className="w-full">
					<div className="w-1/2">
						<CardMain>
							<form action="">
								<div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3 sm:grid-cols-3">
									<div className="sm:col-span-full">
										<div className="sm:col-span-2 sm:col-start-1">
											<label
												htmlFor="city"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												City
											</label>
											<div className="mt-2">
												<input
													type="text"
													name="city"
													id="city"
													autoComplete="address-level2"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="region"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												State / Province
											</label>
											<div className="mt-2">
												<input
													type="text"
													name="region"
													id="region"
													autoComplete="address-level1"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="postal-code"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												ZIP / Postal code
											</label>
											<div className="mt-2">
												<input
													type="text"
													name="postal-code"
													id="postal-code"
													autoComplete="postal-code"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</CardMain>
					</div>
				</div>
				<Divider />
				{/* card */}
				<div className="w-full">
					<CardMain>
						{/* column */}
						<div className="w-1/2">
							<div className="h-full grid grid-cols-1 content-center text-center space-y-4">
								<h2 className="text-xl font-bold">
									{city}, {country}
								</h2>
								<h3 className="text-5xl">{temp.temperature} °C</h3>
								<h4 className="text-base">
									Max: {temp.temp_max}° / Min: {temp.temp_min}°
								</h4>
								<h5 className="text-base capitalize">{weather.description}</h5>
							</div>
						</div>
						{/* column */}
						<div className="w-1/2">
							<div className="h-full grid grid-cols-1 justify-items-center content-center">
								<Image
									src={icons[weather.main]}
									width={200}
									height={200}
									alt={weather.main}
								/>
							</div>
						</div>
					</CardMain>
				</div>
			</div>
		</main>
	);
}
