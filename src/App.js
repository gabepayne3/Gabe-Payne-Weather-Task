import React, { useEffect, useState } from 'react';
import { fetchWeather } from './services/WeatherAxios';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getToday());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lat = 53.54157234661739 
  const lon = -2.0050347697282214
  function getToday() {
    return new Date().toISOString().split('T')[0];
  }

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeather(lat, lon, selectedDate);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };
    loadWeather();
  }, [selectedDate]);

  return (
    <div className="App">
      <h1>🌤️ Weather Forecast</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        max={getToday()}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} date={selectedDate} />}
    </div>
  );
};

export default App;
