function OilSection({ oil, news }) {

  return (
    <section id="oil">

      <h2>🛢️ OIL</h2>

      <div className="card">

        <p>💰 Current Price: {oil.currentPrice}</p>

        <p>📈 Day High: {oil.dayHigh}</p>

        <p>📉 Day Low: {oil.dayLow}</p>

        <p>🏆 1-Year High: {oil.fiftyTwoWeekHigh}</p>

        <p>🔻 1-Year Low: {oil.fiftyTwoWeekLow}</p>

        <p>📋 Previous Close: {oil.previousClose}</p>

        <p>📊 Volume: {oil.volume}</p>

        <h3>Latest Oil News</h3>

        {news?.oilNews?.slice(0, 2).map((article, index) => (

          <div
            key={index}
            className="news-item"
          >
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="news-link"
            >
              {article.title}
            </a>
          </div>

        ))}

      </div>

    </section>
  );
}

export default OilSection;