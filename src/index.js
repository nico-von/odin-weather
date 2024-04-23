import "./style.css";
import { BASE_URL, KEY, CURRENT_WEATHER_ENDPOINT } from "./modules/weather-api-creds";
import { getWeather } from "./modules/controller/api";


console.log(await getWeather(BASE_URL, CURRENT_WEATHER_ENDPOINT, KEY, "London"));