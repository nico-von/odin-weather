export function createDayCard(dayText, isCelcius, highCText, highFText, lowCText, lowFText, typeTxt, typeIconUrl) {
    const dayCard = document.createElement("div");
    dayCard.classList.add("card");

    const day = document.createElement("div");
    day.classList.add("card-title");
    day.textContent = dayText;

    const temp = document.createElement("div");
    temp.classList.add("card-temp");

    const high = document.createElement("div");
    high.textContent = isCelcius ? `${highCText} °C` : `${highFText} °F`;

    const low = document.createElement("div");
    low.textContent = isCelcius ? `${lowCText} °C` : `${lowFText} °F`;

    temp.append(high, low);

    const type = document.createElement("div");
    type.classList.add("card-type")
    
    const typeIcon = document.createElement("img");
    typeIcon.classList.add("weather-icon");
    typeIcon.src = typeIconUrl;
    typeIcon.alt = typeTxt;

    type.appendChild(typeIcon);

    dayCard.append(day, temp, type);
    return dayCard;
}

export function createHourCard(hourText, isCelcius, tempCText, tempFText, typeTxt, typeIconUrl) {
    const hourCard = document.createElement("div");
    hourCard.classList.add("card");

    const hour = document.createElement("div");
    hour.classList.add("card-title");
    hour.textContent = hourText;

    const temp = document.createElement("div");
    temp.classList.add("card-temp");
    temp.textContent = isCelcius ? `${tempCText} °C` : `${tempFText} °F`;

    const type = document.createElement("div");
    type.classList.add("card-type")
    
    const typeIcon = document.createElement("img");
    typeIcon.classList.add("weather-icon");
    typeIcon.src = typeIconUrl;
    typeIcon.alt = typeTxt;

    type.appendChild(typeIcon);

    hourCard.append(hour, temp, type);
    return hourCard;
}