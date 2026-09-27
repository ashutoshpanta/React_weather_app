# Weather Dashboard

A single-page React application that lets users search for any city and view its current weather conditions in real time, fetched live from the OpenWeatherMap API.

## Features

- Search for any city's current weather
- Displays temperature, condition, "feels like" value, and high/low
- Loading state while fetching data
- Error handling for invalid city names or failed requests
- Responsive glassmorphism-styled UI

## Technologies Used

- React.js (functional components + hooks)
- Vite
- OpenWeatherMap API
- CSS3 (glassmorphism / backdrop-filter)

## Setup Instructions

1. Clone the repository

git clone <your-repo-url>
cd weather-dashboard

2. Install dependencies

npm install

3. Create a `.env` file in the project root and add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_api_key_here

4. Run the development server

npm run dev

5. Open the local URL shown in your terminal (typically `http://localhost:5173`)


## Known Limitations

- No search history yet
- No °C/°F toggle
- Only current conditions shown, no multi-day forecast
- Data is not persisted between sessions