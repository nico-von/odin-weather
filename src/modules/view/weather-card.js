export function setWeatherCard(
    isCelcius,
    weatherObj,
    weatherType,
    weatherTypeIcon,
    weatherLocation,
    weatherDate,
    weatherTime,
    weatherTemp) {
    const { type, icon, location, date, time, currentTempC, currentTempF } = weatherObj;
    weatherType.textContent = type;
    weatherTypeIcon.src = icon;
    weatherLocation.textContent = location;
    weatherDate.textContent = date;
    weatherTime.textContent = time;
    weatherTemp.textContent = isCelcius ? `${currentTempC} °C` : `${currentTempF} °F`;
}


export function setWeatherDetails(
    isCelcius,
    weatherObj,
    feelsLikeE,
    humidityE,
    rainChanceE,
    windSpeedE
) {
    const { heatIndexC, heatIndexF, humidity, rainChance, windSpeed } = weatherObj;
    feelsLikeE.textContent = isCelcius ? `${heatIndexC} °C` : `${heatIndexF} °F`;
    humidityE.textContent = humidity;
    rainChanceE.textContent = rainChance;
    windSpeedE.textContent = windSpeed;
}
