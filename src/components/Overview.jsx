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
          <p>{metals?.metals?.gold ?? "N/A"}</p>
        </div>

        <div className="card">
          <h3>🛢️ Oil</h3>
          <p>{oil?.currentPrice ?? "N/A"}</p>
        </div>

        <div className="card">
          <h3>🌤️ Mumbai Temperature</h3>
          <p>{weather?.main?.temp ?? "N/A"}°C</p>
        </div>

        <div className="card">
          <h3>☔ Mumbai's Rainfall</h3>
          <p>{rainfall?.prediction ?? "Unavailable"}</p>
        </div>

      </div>

    </section>
  );
}

export default Overview;