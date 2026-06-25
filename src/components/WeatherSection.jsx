function WeatherSection({ weather }) {

  return (
    <section id="weather">

      <div className="card">

        <p>🌡️ Temperature: {weather.main.temp}°C</p>

        <p>🥵 Feels Like: {weather.main.feels_like}°C</p>

        <p>💧 Humidity: {weather.main.humidity}%</p>

        <p>🧭 Pressure: {weather.main.pressure}</p>

        <p>☁️ Cloud Cover: {weather.clouds.all}%</p>

        <p>👀 Visibility: {weather.visibility}</p>

        <p>💨 Wind Speed: {weather.wind.speed}</p>

      </div>

    </section>
  );
}

export default WeatherSection;