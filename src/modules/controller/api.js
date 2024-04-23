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
    return data;
}