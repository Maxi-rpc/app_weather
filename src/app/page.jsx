"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// project
import { get_data } from "@/services/api";
import { CardHeader } from "@/components";
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

const Loading = () => {
	return (
		<div className="w-20">
			<svg
				className="animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	);
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
				{/* title */}
				<CardHeader>
					App weather with <span className="font-bold">Next JS</span>
				</CardHeader>
				<div className="my-5"></div>
				{/* card */}
				<div className="flex w-full p-5 rounded-md shadow-md space-x-4 border">
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
