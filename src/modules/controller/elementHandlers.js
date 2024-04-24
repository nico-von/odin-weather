import { loadWeather } from "./weather";

export function celciusClickHandler(e, location) {
    loadWeather(location, true);
}

export function fahClickHandler (e, location) {
    loadWeather(location, false);
}
