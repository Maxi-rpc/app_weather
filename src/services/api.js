import { API_KEY } from "@/settings/keys";

export const get_data = (country, city) => {
	const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
	const query = `${apiUrl}?q=${city},${country}&appid=${API_KEY}&units=metric`;
	return query;
};
