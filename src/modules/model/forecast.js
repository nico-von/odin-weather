const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

export class ForecastDay {
    constructor(date, highC, lowC, highF, lowF, type, icon) {
        this.date = date;
        this.highC = highC;
        this.lowC = lowC;
        this.highF = highF;
        this.lowF = lowF;
        this.type = type;
        this.icon = icon;
        const day = new Date(this.date);
        this.day = days[day.getDay()];
    }
}


export class ForecastHour {
    constructor(hour, tempC, tempF, type, icon) {
        this.hour = hour;
        this.tempC = tempC;
        this.tempF = tempF;
        this.type = type;
        this.icon = icon;
    }
}