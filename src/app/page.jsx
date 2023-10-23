"use client";
import { useState, useEffect } from "react";
// project
import { get_data } from "@/services/api";
import {
	Header,
	CardMain,
	CardWeather,
	Loading,
	Divider,
	AlertNotify,
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
	const [newCountry, setNewCountry] = useState("");
	const [newProvince, setNewProvince] = useState("");
	const [showAlert, setShowAlert] = useState({
		isOpen: false,
		title: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
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
				const title = err.name + " " + err.code;
				setShowAlert({ isOpen: true, title: title, message: err.message });
			});
	}, [country, province]);

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
				{/* forms */}
				<div className="w-full">
					<CardMain>
						<form className="flex justify-center space-x-6 w-full">
							<div className="w-1/3">
								<div className="mt-2">
									<input
										id="country"
										name="country"
										type="text"
										placeholder="Country"
										required
										value={newCountry}
										onChange={(e) => setNewCountry(e.target.value)}
										className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="w-1/3">
								<div className="mt-2">
									<input
										id="province"
										name="province"
										type="text"
										placeholder="Province"
										required
										value={newProvince}
										onChange={(e) => setNewProvince(e.target.value)}
										className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="w-1/3">
								<div className="mt-2">
									<button
										type="submit"
										onClick={handleSubmit}
										className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
									>
										Search
									</button>
								</div>
							</div>
						</form>
					</CardMain>
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
