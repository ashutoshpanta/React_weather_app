import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import useWeather from './hooks/useWeather';
import './App.css';



function App() {
  const [currentCity, setCurrentCity] = useState(null);
  const { weather, loading, error } = useWeather(currentCity);

  const handleSearch = (city) => {
    setCurrentCity(city);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="status-text">Loading...</p>}
      {error && <p className="status-text error">{error}</p>}
      {weather && !loading && !error && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;