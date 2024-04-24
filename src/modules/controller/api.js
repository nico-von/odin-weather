import { ForecastDay, ForecastHour } from "../model/forecast";
import { Weather } from "../model/weather";
function getUrl(base, endpoint, key, q, days ) {
    const url = new URL(`${base}/${endpoint}?`);
    const params = new URLSearchParams({key, q});
    if (days) params.append("days", days);
    return url + params;
}

export async function getWeather(base, endpoint, key, q, days = null){   
    const url = getUrl(base, endpoint,key,q,days)
    const response = await fetch(url);
    if (!response.ok) return;
    return await response.json();
    
    
}

export async function createForecastObject(data) {
    const { forecast } = data;
    const forecastDays = [];
    const forecastHours = [];
    for (const [index, fday] of forecast.forecastday.entries()) {
        const {date, day} = fday;
        const forecastDay = getDayData(date, day);
        forecastDays.push(forecastDay);
        if (index === 0){
            const { hour } = fday;
            for (const h in hour) {
                const forecastHour = getHourData(hour[h]);
                forecastHours.push = forecastHour;
            }
        }
    }
    return {
        forecastDays,
        forecastHours
    }
    
}

function getHourData(h) {
    const {time, temp_c, temp_f, condition} = h;
    const hour = time.split(" ")[1];
    const {text, icon} = condition;
    return new ForecastHour(
        hour,
        temp_c,
        temp_f,
        text,
        icon
    )
}

function getDayData(date, day) {
    const {maxtemp_c, mintemp_c, maxtemp_f, mintemp_f, condition} = day;
    const {text, icon} = condition;
    return new ForecastDay(date, maxtemp_c, mintemp_c, maxtemp_f, mintemp_f, text, icon);
}
export async function createWeatherObject(data) {
    const {location, 
        current
    } = data;
    const { name, localtime } = location;
    const {temp_c, temp_f, condition,
        feelslike_c, 
        feelslike_f, 
        humidity,
        precip_in,
        wind_kph} = current;
    const {text, icon } = condition;
    const ltsplit = localtime.split(" ");
    const date = ltsplit[0];
    const time = ltsplit[1];
    const weatherObject = new Weather(
        name,
        date,
        time,
        temp_f,
        temp_c,
        text,
        icon,
        feelslike_c,
        feelslike_f,
        humidity,
        precip_in,
        wind_kph,
    )
    return weatherObject;
}