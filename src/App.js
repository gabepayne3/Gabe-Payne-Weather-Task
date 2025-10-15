import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      
    </div>
  );
}

export default App;
