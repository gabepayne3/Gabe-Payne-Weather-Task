import React, { useEffect, useState } from 'react';
import { fetchWeather } from './services/WeatherAxios';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getToday());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: 53.5415, lon: -2.0050 }); // Default location

  function getToday() {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }

  // Get user's location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          // If permission denied or error, keep default location
          console.warn('Geolocation permission denied or unavailable.');
        }
      );
    }
  }, []);

  // Fetch weather data when location or date changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchWeather(location.lat, location.lon, selectedDate)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch(() => {
        setError('Failed to fetch weather data');
        setWeatherData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location, selectedDate]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <input
        type="date"
        value={selectedDate}
        min="1979-01-01"
        max={getToday()}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} date={selectedDate} />}
    </div>
  );
};

export default App;