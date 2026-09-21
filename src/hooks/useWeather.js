import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return; // don't fetch if there's no city yet

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error(
            res.status === 404 ? 'City not found' : 'Something went wrong'
          );
        }

        const data = await res.json();

        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          condition: data.weather[0].description,
          feelsLike: Math.round(data.main.feels_like),
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          humidity: data.main.humidity,
        });
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // re-run this effect whenever `city` changes

  return { weather, loading, error };
}

export default useWeather;