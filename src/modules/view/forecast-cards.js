export function createDayCard(dayText, highText, lowText, typeTxt, typeIconUrl) {
    const dayCard = document.createElement("div");
    dayCard.classList.add("card");

    const day = document.createElement("div");
    day.classList.add("card-title");
    day.textContent = dayText;

    const temp = document.createElement("div");
    temp.classList.add("card-temp");

    const high = document.createElement("div");
    high.textContent = highText;

    const low = document.createElement("div");
    low.textContent = lowText;

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

export function createHourCard(hourText, tempText, typeTxt, typeIconUrl) {
    const hourCard = document.createElement("div");
    hourCard.classList.add("card");

    const hour = document.createElement("div");
    hour.classList.add("card-title");
    hour.textContent = hourText;

    const temp = document.createElement("div");
    temp.classList.add("card-temp");
    temp.textContent = tempText;

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