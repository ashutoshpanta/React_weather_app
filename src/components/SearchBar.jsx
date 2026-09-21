import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload on form submit
    if (city.trim() === '') return; // don't search empty strings
    onSearch(city);
    setCity(''); // clear input after search
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;