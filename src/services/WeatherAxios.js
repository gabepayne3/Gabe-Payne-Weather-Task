import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeather = (lat, lon, date) => {
    return axios.get(BASE_URL, {
        params: {
            latitude: lat,
            longitude: lon,
            hourly: 'temperature_2m,weathercode',
            start_date: date,
            end_date: date,
            timezone: 'auto',
        },
    });
};