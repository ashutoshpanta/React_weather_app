import './WeatherCard.css';

function WeatherCard({ weather }) {
  if (!weather) return null; // don't render anything if there's no data yet

  const { city, temp, condition, feelsLike, high, low, icon } = weather;

  return (
    <div className="weather-card">
      <img src={icon} alt={condition} className="weather-icon" />
      <h2 className="city-name">{city}</h2>
      <p className="temp">{temp}°</p>
      <p className="condition">{condition}</p>
      <p className="feels-like">Feels like: {feelsLike}°</p>
      <p className="high-low">H: {high}° L: {low}°</p>
    </div>
  );
}

export default WeatherCard;