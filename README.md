🌦️ Weather Forecast App

A simple and accessible React application that uses the Open-Meteo Weather API to display weather forecasts and historical weather data for the user’s current location.

---

🚀 Features

Fetches live and historical weather data from the Open-Meteo API.

Uses the browser’s geolocation to automatically detect the user’s location.

Allows users to select any date from January 1, 1979 up to 15 days into the future.

Displays both daily summaries (max/min temperature, sunrise, sunset) and hourly forecasts (temperature, precipitation, humidity, cloud cover, wind).

Fully accessible, including screen-reader-friendly emojis and labeled form controls.

Responsive design with animated hover effects and a clean layout.

---

🧭 Preview

Users can:

See their current location’s weather forecast.

Pick a specific date using the date picker to view historical or upcoming weather.

Explore hourly conditions for the chosen date.

---

🛠️ Installation & Setup

Follow these steps to clone and run the project locally:

1. Clone the repository

git clone https://github.com/gabepayne3/Gabe-Payne-Weather-Task.git

2. Navigate into the project folder

cd Gabe-Payne-Weather-Task

3. Install dependencies

npm install

4. Start the development server

npm start

This will open the app in your default browser at:
👉 http://localhost:3000

---

⚙️ Project Structure

weather-forecast-app/
│
├── src/
│   ├── components/
│   │   └── WeatherCard.jsx
│   ├── services/
│   │   └── WeatherAxios.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
│
├── public/
│   └── index.html
│
└── README.md

---

🌤️ How It Works

On load, the app requests geolocation permission to get the user’s coordinates.

It calls the Open-Meteo API to fetch daily and hourly weather data for that location.

The selected date (default: today) determines which day’s data is shown.

Users can choose any past or future date (from 1979 to +15 days ahead).

Results are displayed in a clean, card-style interface with hover animations and accessible emoji labels.

---

🔗 API Reference

This app uses the free and public Open-Meteo API

---

💡 Accessibility

All emojis include descriptive aria-labels for screen readers.

The date picker has a labeled input field for clarity.

The layout adapts to various screen sizes with consistent spacing and shadows.

---

🧩 Technologies Used

React – for the UI

Axios – for API requests

CSS – for styling and hover animations

Open-Meteo API – for weather data

---

Developed By Gabriel Payne





















