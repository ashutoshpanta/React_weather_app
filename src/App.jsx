import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

// Temporary mock data — we'll replace this with a real API call in Step 4
const mockWeather = {
  city: 'Kathmandu',
  temp: 21,
  condition: 'Solrigt men skyet',
  feelsLike: 19,
  high: 22,
  low: 19,
  icon: 'https://openweathermap.org/img/wn/03d@2x.png',
};

function App() {
  const [currentCity, setCurrentCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleSearch = (city) => {
    setCurrentCity(city);
    setWeather(mockWeather); // temporary — pretend the API returned this
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;