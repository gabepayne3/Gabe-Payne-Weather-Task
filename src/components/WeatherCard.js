import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data, date }) => {
  const { daily, hourly } = data;

  const {
    temperature_2m_max,
    temperature_2m_min,
    sunrise,
    sunset
  } = daily;

  const {
    time,
    temperature_2m,
    precipitation,
    cloudcover,
    relative_humidity_2m,
    wind_speed_10m
  } = hourly;

  return (
    <div className="weather-card">
      <h2>Weather Forecast for {date}</h2>

      <div className="daily-summary">
        <p><strong>High:</strong> {temperature_2m_max[0]}°C</p>
        <p><strong>Low:</strong> {temperature_2m_min[0]}°C</p>
        <p><strong>Sunrise:</strong> {sunrise[0].slice(11)}</p>
        <p><strong>Sunset:</strong> {sunset[0].slice(11)}</p>
      </div>

      <h3>Hourly Forecast</h3>
      <div className="hourly-list">
        {time.map((t, i) => (
          <div className="hourly-item" key={i}>
            <p><strong>{t.slice(11, 16)}</strong></p>
            <p>🌡️ {temperature_2m[i]}°C</p>
            <p>🌧️ {precipitation[i]} mm</p>
            <p>☁️ {cloudcover[i]}%</p>
            <p>💧 {relative_humidity_2m[i]}%</p>
            <p>💨 {wind_speed_10m[i]} km/h</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
