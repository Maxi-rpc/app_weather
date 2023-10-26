import { API_KEY } from "@/settings/keys";
import axios from "axios";

const API_KEY_ENV = process.env.API_KEY;

export const get_data = (country, city) => {
	console.log(API_KEY_ENV);
	const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
	const query = `${apiUrl}?q=${city},${country}&appid=${API_KEY}&units=metric&lang=es`;
	return axios.get(query);
};
