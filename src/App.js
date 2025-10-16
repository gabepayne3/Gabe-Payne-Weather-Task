import React, { useEffect, useState } from 'react';
import { fetchWeather } from './services/WeatherAxios';
import WeatherCard from './components/WeatherCard';
import './App.css';


function getToday() {
  return new Date().toISOString().split('T')[0]; 
}

function getMaxForecastDate() {
  const date = new Date();
  date.setDate(date.getDate() + 16);
  return date.toISOString().split('T')[0];
}

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getToday()); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lat = 53.5415;
  const lon = -2.0050;

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchWeather(lat, lon, selectedDate)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch(() => {
        setError('Failed to fetch weather data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedDate]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <input
        type="date"
        value={selectedDate}
        min="1979-01-01"
        max={getMaxForecastDate()}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} date={selectedDate} />}
    </div>
  );
};

export default App;