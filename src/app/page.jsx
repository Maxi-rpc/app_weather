"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { get_data } from "@/services/api";
// assets
import icon_sol from "@/public/icons/icon_sol.svg";
import icon_sol_nublado from "@/public/icons/icon_sol_nublado.svg";
import icon_sol_lluvia from "@/public/icons/icon_sol_lluvia.svg";
import icon_tormenta from "@/public/icons/icon_tormenta.svg";
import icon_lluvia from "@/public/icons/icon_lluvia.svg";
import icon_luna from "@/public/icons/icon_luna.svg";
import icon_luna_nublado from "@/public/icons/icon_luna_nublado.svg";

const icons = {
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

	return (
		<main className="w-1/2 sm:w-full lg:w-1/2 mx-auto">
			<div className="flex flex-col p-5 justify-center">
				{/* title */}
				<div className="w-full p-5 rounded-md shadow-md border">
					<div className="w-full text-center">
						<h1 className="text-xl capitalize">
							App weather with <span className="font-bold">Next JS</span>
						</h1>
					</div>
				</div>
				<div className="my-5"></div>
				{/* card */}
				<div className="flex align-middle w-full p-5 rounded-md shadow-md space-x-4 border">
					{/* column */}
					<div className="w-1/2">
						<div className="flex flex-col space-y-4 text-center">
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
						<div className="flex flex-col">
							<div className="mx-auto">
								<Image
									src={icons[weather.main]}
									width={150}
									height={150}
									alt={icons[weather.main]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
