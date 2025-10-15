import axios from 'axios';

const FORECAST_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const ARCHIVE_BASE_URL = 'https://archive-api.open-meteo.com/v1/archive';

export const fetchWeather = (lat, lon, date) => {
  const today = new Date().toISOString().split('T')[0];
  const isPast = date < today;

  const BASE_URL = isPast ? ARCHIVE_BASE_URL : FORECAST_BASE_URL;

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