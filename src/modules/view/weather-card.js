export function setWeatherCard(
    isCelcius,
    weatherObj,
    weatherType,
    weatherTypeIcon,
    weatherLocation,
    weatherDate,
    weatherTemp) {

    const {type, icon, location, date, currentTempC, currentTempF} = weatherObj;
    weatherType.textContent = type;
    weatherTypeIcon.src = icon;
    weatherLocation.textContent = location;
    weatherDate.textContent = date;
    weatherTemp.textContent = isCelcius ? currentTempC : currentTempF;
}