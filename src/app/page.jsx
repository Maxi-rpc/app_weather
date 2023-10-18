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
					<div className="w-1/2"></div>
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
									alt={icons[weather.main]}
								/>
							</div>
						</div>
					</CardMain>
				</div>
			</div>
		</main>
	);
}
