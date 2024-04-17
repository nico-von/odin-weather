export function createDayCard(dayText, highText, lowText, typeSvg) {
    const dayCard = document.createElement("div");
    dayCard.classList.add("card");

    const day = document.createElement("div");
    dayText.classList.add("card-title");
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
    type.appendChild(typeSvg);

    dayCard.append(day, temptype, type);
    return dayCard;
}

export function createHourCard(hourText, tempText, typeSvg) {
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
    type.appendChild(typeSvg);

    hourCard.append(hour, temp, type);
    return hourCard;
}