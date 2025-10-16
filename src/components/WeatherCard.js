
import './WeatherCard.css';
import React from 'react';

const WeatherCard = ({ data, date }) => {
  if (!data || !data.daily || !data.hourly) return null;

  const { daily, hourly } = data;

  const {
    temperature_2m_max,
    temperature_2m_min,
    sunrise,
    sunset,
    precipitation_sum,
    weathercode,
    time: dailyTime
  } = daily;

  const {
    time: hourlyTime,
    temperature_2m,
    precipitation,
    cloudcover,
    relative_humidity_2m,
    wind_speed_10m
  } = hourly;

 
  const dailyIndex = dailyTime.indexOf(date);
  if (dailyIndex === -1) return <p>No daily data available for {date}.</p>;

 
  const hourlyData = hourlyTime
    .map((t, i) => ({ time: t, index: i }))
    .filter((entry) => entry.time.startsWith(date));

  return (
    <section aria-labelledby="weather-heading">
      <h2 id="weather-heading">Weather Forecast for {date}</h2>

      <ul>
        <li>
          <strong>Daily Summary:</strong>
          <ul>
            <li>Max Temp: {temperature_2m_max?.[dailyIndex]}°C</li>
            <li>Min Temp: {temperature_2m_min?.[dailyIndex]}°C</li>
            <li>Sunrise: {sunrise?.[dailyIndex]?.slice(11)}</li>
            <li>Sunset: {sunset?.[dailyIndex]?.slice(11)}</li>
            <li>Precipitation: {precipitation_sum?.[dailyIndex]} mm</li>
            <li>Weather Code: {weathercode?.[dailyIndex]}</li>
          </ul>
        </li>

        <li>
          <strong>Hourly Forecast:</strong>
          <ul>
            {hourlyData.map(({ time, index }) => (
              <li key={time}>
                <ul>
                  <li><strong>{time.slice(11, 16)}</strong></li>
                  <li>🌡️ Temp: {temperature_2m?.[index]}°C</li>
                  <li>🌧️ Precip: {precipitation?.[index]} mm</li>
                  <li>☁️ Cloud Cover: {cloudcover?.[index]}%</li>
                  <li>💧 Humidity: {relative_humidity_2m?.[index]}%</li>
                  <li>💨 Wind Speed: {wind_speed_10m?.[index]} km/h</li>
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default WeatherCard;