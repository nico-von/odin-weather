import { BASE_URL, KEY, CURRENT_WEATHER_ENDPOINT } from "../weather-api-creds";
import { getWeather } from "./api";
import { setWeatherCard, setWeatherDetails } from "../view/weather-card";
import {
    weatherCard,
    weatherCardBtns,
    weatherDetails,
    forecastElements
} from "./weather-elements";
import { celciusClickHandler, fahClickHandler, searchHandler } from "./elementHandlers";

export async function loadWeather(location, isCelcius) {
    let weatherObject = await getWeather(BASE_URL, CURRENT_WEATHER_ENDPOINT, KEY, location);
    if (!weatherObject) return;
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

function initialiseBtns(location, isCelcius) {
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

    let celciusState = isCelcius;
    let locationState = location;
    
    celciusBtn.addEventListener('click', e => {
        celciusClickHandler(e, locationState);
        celciusState = true;
    });
    fahBtn.addEventListener('click', e => { 
        fahClickHandler(e, locationState);
        celciusState = false;
    });
    searchBtn.addEventListener('click', e => {
        locationState = searchInput.value;
        searchHandler(e, locationState, celciusState);
    });
}