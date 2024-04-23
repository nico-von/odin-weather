export function setWeatherCard(
    isCelcius,
    weatherObj,
    weatherType,
    weatherTypeIcon,
    weatherLocation,
    weatherDate,
    weatherTemp) {

    const { type, icon, location, date, currentTempC, currentTempF } = weatherObj;
    weatherType.textContent = type;
    weatherTypeIcon.src = icon;
    weatherLocation.textContent = location;
    weatherDate.textContent = date;
    weatherTemp.textContent = isCelcius ? currentTempC : currentTempF;
}


export function setWeatherDetails(
    isCelcius,
    weatherObj,
    feelsLike,
    humidity,
    rainChance,
    windSpeed
) {
    const { heatIndexC, heatIndexF, humidity, rainChance, windSpeed } = weatherObj;
    feelsLike.textContent = isCelcius ? heatIndexC : heatIndexF;
    humidity.textContent = humidity;
    rainChance.textContent = rainChance;
    windSpeed.textContent = windSpeed;
}
