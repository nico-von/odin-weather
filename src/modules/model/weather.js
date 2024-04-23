export class Weather {
    constructor(
        location,
        date,
        time,
        currentTempF,
        currentTempC,
        type,
        icon,
        heatIndexC,
        heatIndexF,
        humidity,
        rainChance,
        windSpeed) {
        this.locaton = location;
        this.date = date;
        this.time = time;
        this.currentTempC = currentTempC;
        this.currentTempF = currentTempF;
        this.type = type;
        this.icon = icon;
        this.heatIndexC = heatIndexC;
        this.heatIndexF = heatIndexF;
        this.humidity = humidity;
        this.rainChance = rainChance;
        this.windSpeed = windSpeed;
    }
}