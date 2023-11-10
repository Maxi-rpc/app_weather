"use client";
import { useState, useEffect } from "react";
// project
import { get_data } from "@/services/api";
import {
	Header,
	Footer,
	CardWeather,
	Loading,
	Divider,
	AlertNotify,
	FormSearch,
} from "@/components";
/// Home Page
export default function Home() {
	const [country, setCountry] = useState("Argentina");
	const [province, setProvince] = useState("Buenos Aires");
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

	const [showAlert, setShowAlert] = useState({
		isOpen: false,
		title: "",
		message: "",
	});

	const handleSubmit = (newCountry, newProvince) => {
		get_data(newCountry, newProvince)
			.then((res) => {
				setCountry(newCountry);
				setProvince(res.data.name);
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
			})
			.catch((err) => {
				const title = err.name + " " + err.code;
				setShowAlert({ isOpen: true, title: title, message: err.message });
			});
	};

	useEffect(() => {
		get_data(country, province)
			.then((res) => {
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
			})
			.catch((err) => {
				const title = "get_data ->" + err.name + " " + err.code;
				setShowAlert({ isOpen: true, title: title, message: err.message });
			});
	}, [country, province]);

	if (!temp.temperature) {
		return (
			<>
				<div className="w-full h-5/6 flex justify-center">
					<div className="my-auto">
						<Loading />
					</div>
				</div>
			</>
		);
	}

	return (
		<main className="w-1/2 xs:w-full lg:w-1/2 mx-auto">
			<div className="flex flex-col p-5 justify-center">
				{/* header */}
				<Header>
					App weather with <span className="font-bold">Next JS</span>
				</Header>
				<Divider />
				{/* forms */}
				<div className="w-full">
					<FormSearch action={handleSubmit} />
				</div>
				<Divider />
				{/* card weather */}
				<CardWeather
					country={country}
					province={province}
					image={weather.main}
					temperature={temp.temperature}
					temp_min={temp.temp_min}
					temp_max={temp.temp_max}
					description={weather.description}
				/>
				{/* footer */}
				<Footer />
				{/* alert */}
				<div className="w-full">
					<AlertNotify
						open={showAlert.isOpen}
						setOpen={setShowAlert}
						title={showAlert.title}
						message={showAlert.message}
					/>
				</div>
			</div>
		</main>
	);
}
