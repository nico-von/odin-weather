import { Weather } from "../model/weather";
function getUrl(base, endpoint, key, q, days ) {
    const url = new URL(`${base}/${endpoint}?`);
    const params = new URLSearchParams({key, q});
    if (days) params.append("days", days);
    return url + params;
}

export async function getWeather(base, endpoint, key, q){   
    const url = getUrl(base, endpoint,key,q)
    const response = await fetch(url);
    //temporary
    const data = await response.json();
    const weatherObj = await createWeatherObject(data);
    return weatherObj;
}

async function createWeatherObject(data) {
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