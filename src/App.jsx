import { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [currentCity, setCurrentCity] = useState(null);

  const handleSearch = (city) => {
    setCurrentCity(city);
    console.log('Searching for:', city); // temporary, we'll replace with API call next
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {/* WeatherCard will go here in the next step */}
    </div>
  );
}

export default App;