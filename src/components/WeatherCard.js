import React from "react";
import './WeatherCard.css';

const WeatherCard = ({ data, date }) => {
    
  return (
    <div className="weather-card">
      <h2>Weather Forecast for {date}</h2>
      {data.hourly?.temperature_2m?.map((temp, index) => (
        <div key={index} className="hourly-weather">
          <span>{data.hourly.time[index].slice(11, 16)}</span>
          <span>{temp}°C</span>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;