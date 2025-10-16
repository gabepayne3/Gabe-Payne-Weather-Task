
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
    <section className="weather-card" aria-labelledby="weather-heading">
  <h2 id="weather-heading">Weather Forecast for {date}</h2>

  <ul className="daily-summary">
    <li>Max Temp: {temperature_2m_max?.[dailyIndex]}°C</li>
    <li>Min Temp: {temperature_2m_min?.[dailyIndex]}°C</li>
    <li>Sunrise: {sunrise?.[dailyIndex]?.slice(11)}</li>
    <li>Sunset: {sunset?.[dailyIndex]?.slice(11)}</li>
  </ul>

  <h3>Hourly Forecast</h3>
  <ul className="hourly-list">
    {hourlyData.map(({ time, index }) => (
      <li className="hourly-item" key={time}>
        <p><strong>{time.slice(11, 16)}</strong></p>
        <p>🌡️ Temp: {temperature_2m?.[index]}°C</p>
        <p>🌧️ Precip: {precipitation?.[index]} mm</p>
        <p>☁️ Cloud Cover: {cloudcover?.[index]}%</p>
        <p>💧 Humidity: {relative_humidity_2m?.[index]}%</p>
        <p>💨 Wind Speed: {wind_speed_10m?.[index]} km/h</p>
      </li>
    ))}
  </ul>
</section>
  );
};

export default WeatherCard;