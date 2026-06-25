function RainfallSection({ rainfall }) {

  return (
    <section id="rainfall">

      <div className="card">

        <p>☔ Prediction: {rainfall.prediction}</p>

        <h3>Used Variables</h3>

        <p>🌡️ Temperature: {rainfall.temperature}</p>

        <p>💧 Humidity: {rainfall.humidity}</p>

        <p>☁️ Cloud Cover: {rainfall.cloudCover}</p>

        <p>🧭 Pressure: {rainfall.pressure}</p>

        <p>💨 Wind Speed: {rainfall.windSpeed}</p>

      </div>

    </section>
  );
}

export default RainfallSection;