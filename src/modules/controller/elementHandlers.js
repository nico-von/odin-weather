import { loadForecast, loadWeather } from "./weather";

export function tempClickHandler(e, settings) {
    const {
        locationState,
        celciusState,
        dayState,
        daysNumberState } = settings;
    loadWeather(locationState, celciusState);
    loadForecast(
        locationState,
        celciusState,
        dayState,
        daysNumberState
    )
}

export function searchHandler(e, settings) {
    e.preventDefault();
    const {
        locationState,
        celciusState,
        dayState,
        daysNumberState } = settings;
    loadWeather(locationState, celciusState);
    loadForecast(
        locationState,
        celciusState,
        dayState,
        daysNumberState
    );
}