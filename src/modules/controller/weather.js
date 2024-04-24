import { BASE_URL, KEY, CURRENT_WEATHER_ENDPOINT, FORECAST_ENDPOINT } from "../weather-api-creds";
import { createForecastObject, createWeatherObject, getWeather } from "./api";
import { setWeatherCard, setWeatherDetails } from "../view/weather-card";
import {
    weatherCard,
    weatherCardBtns,
    weatherDetails,
    forecastElements
} from "./weather-elements";
import { tempClickHandler, searchHandler } from "./elementHandlers";
import { createDayCard, createHourCard } from "../view/forecast-cards";

export async function loadWeather(location, isCelcius) {
    let data = await getWeather(BASE_URL, CURRENT_WEATHER_ENDPOINT, KEY, location);
    if (!data) return;
    const weatherObject = await createWeatherObject(data);
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

export async function loadForecast(location, isCelcius, isDay, days){
    let data = await getWeather(BASE_URL, FORECAST_ENDPOINT, KEY, location, days);
    if (!data) return;
    const {forecastContent} = forecastElements;
    const forecastObject = await createForecastObject(data);
    const {forecastDays, forecastHours} = forecastObject;
    forecastContent.replaceChildren();
    if (isDay) {
        for (let d of forecastDays){
            const {day, highC, lowC, highF, lowF, type, icon} = d;
            const dayCard = createDayCard(
                day, 
                isCelcius ? highC : highF, 
                isCelcius ? lowC : lowF,
                type,
                icon )
            forecastContent.appendChild(dayCard);
        }
    } else {
        for (let h of forecastHours) {
            const {hour, tempC, tempF, type, icon} = h;
            const hourCard = createHourCard(
                hour,
                isCelcius? tempC : tempF,
                type,
                icon
            )
            forecastContent.appendChild(hourCard);
        }
    }
}

export function initialiseApp(location, isCelcius, isDay, days){
    const settings = {
        celciusState: isCelcius,
        locationState: location,
        dayState: isDay,
        daysNumberState: days
    }
    initialiseBtns(settings);
    loadWeather(location, isCelcius);
    loadForecast(location, isCelcius, isDay, days);
}

function initialiseBtns(settings) {
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
    
    
    celciusBtn.addEventListener('click', e => {
        settings.celciusState = true;
        tempClickHandler(e, settings);
    });
    fahBtn.addEventListener('click', e => { 
        settings.celciusState = false;
        tempClickHandler(e, settings);
    });
    searchBtn.addEventListener('click', e => {
        settings.locationState = searchInput.value;
        searchHandler(e, settings);
    });
}