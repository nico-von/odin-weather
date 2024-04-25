import { loadForecast, loadWeather } from "./weather";

export function clickHandler(e, settings) {
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
    )
}

export function celciusBtnHandler(e, settings, celciusBtn) {
    clickHandler(e, settings);
    celciusBtn.textContent = settings.celciusState ? '°C' : '°F';
    
}