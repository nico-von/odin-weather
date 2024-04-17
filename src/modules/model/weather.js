export class Weather {
    constructor(
        location,
        date,
        time,
        currentTemp,
        highTemp,
        lowTemp,
        type,
        heatIndex,
        humidity,
        rainChance,
        windSpeed) {
        this.locaton = location;
        this.date = date;
        this.time = time;
        this.currentTemp = currentTemp;
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
        this.type = type;
        this.heatIndex = heatIndex;
        this.humidity = humidity;
        this.rainChance = rainChance;
        this.windSpeed = windSpeed;
    }
}