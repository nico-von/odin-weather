export function createDayCard(dayText, highText, lowText, typeSvg) {
    const dayCard = document.createElement("div");

    const day = document.createElement("div");
    day.textContent = dayText;

    const temp = document.createElement("div");
    
    const high = document.createElement("div");
    high.textContent = highText;

    const low = document.createElement("div");
    low.textContent = lowText;

    temp.append(high, low);

    const type = document.createElement("div");
    type.appendChild(typeSvg);

    dayCard.append(day, temptype, type);
    return dayCard;
}