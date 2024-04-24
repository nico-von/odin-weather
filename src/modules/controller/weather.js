import { BASE_URL, KEY, CURRENT_WEATHER_ENDPOINT } from "../weather-api-creds";
import { getWeather } from "./api";
import { setWeatherCard, setWeatherDetails } from "../view/weather-card";
import {
    weatherCard,
    weatherCardBtns,
    weatherDetails,
    forecastElements
} from "./weather-elements";
import { celciusClickHandler, fahClickHandler } from "./elementHandlers";

export async function loadWeather(location, isCelcius) {
    const weatherObject = await getWeather(BASE_URL, CURRENT_WEATHER_ENDPOINT, KEY, location);
    const {
        weatherType,
        weatherTypeIcon,
        weatherLocation,
        weatherDate,
        weatherTemp } = weatherCard;
    const {
        feelsLike,
        humidity,
        rainChance,
        windSpeed
    } = weatherDetails;

    setWeatherCard(
        isCelcius,
        weatherObject,
        weatherType,
        weatherTypeIcon,
        weatherLocation,
        weatherDate,
        weatherTemp);
    setWeatherDetails(
        isCelcius,
        weatherObject,
        feelsLike,
        humidity,
        rainChance,
        windSpeed
    );
}

export function initialiseApp(location, isCelcius){
    initialiseBtns(location);
    loadWeather(location, isCelcius);
}

function initialiseBtns(location) {
    const {
        celciusBtn, 
        fahBtn, 
        searchInput, 
        searchBtn
    } = weatherCardBtns;
    const {
        dailyBtn, 
        hourlyBtn
    } = forecastElements;
    celciusBtn.addEventListener('click', e => {celciusClickHandler(e, location)});
    fahBtn.addEventListener('click', e => { fahClickHandler(e, location)});
}