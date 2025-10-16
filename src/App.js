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

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude);
          setLon(pos.coords.longitude);
        },
        () => {
          setError("Location access denied. Using default location.");
          setLat(53.5415);
          setLon(-2.0050);
        }
      );
    } else {
      setError("Geolocation not supported by browser.");
    }
  }, []);

  useEffect(() => {
    if (!lat || !lon || !selectedDate) return;

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
  }, [lat, lon, selectedDate]);

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
