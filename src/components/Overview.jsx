function Overview({ oil, weather, rainfall, metals }) {

  return (
    <section id="overview">

      <h2>OVERVIEW</h2>

      <div className="overview-grid">

        <div className="card">
          <h3>📊 Markets</h3>
          <p>12 Tracked</p>
        </div>

        <div className="card">
          <h3>🥇 Gold</h3>
          <p>{metals.metals.gold}</p>
        </div>

        <div className="card">
          <h3>🛢️ Oil</h3>
          <p>{oil.currentPrice}</p>
        </div>

        <div className="card">
          <h3>🌤️ Mumbai Temperature's</h3>
          <p>{weather.main.temp}°C</p>
        </div>

        <div className="card">
          <h3>☔ Mumbai's Rainfall</h3>
          <p>{rainfall.prediction}</p>
        </div>

      </div>

    </section>
  );
}

export default Overview;