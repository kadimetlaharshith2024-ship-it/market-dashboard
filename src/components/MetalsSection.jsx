function MetalsSection({ metals, news }) {

  return (
    <section id="metals">

      <h2>METALS</h2>

      <div className="metals-grid">

        <div className="card">

          <h3>🥇 Gold</h3>

          <p>💰 Price: {metals.metals.gold}</p>

          <h4>Latest News</h4>

          {news?.goldNews?.length > 0 ? (

            news.goldNews.slice(0, 2).map((article, index) => (
              <div key={index} className="news-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-link"
                >
                  {article.title}
                </a>
              </div>
            ))

          ) : (

            <div className="news-item">
              <p>No latest news available.</p>
            </div>

          )}

        </div>

        <div className="card">

          <h3>🥈 Silver</h3>

          <p>💰 Price: {metals.metals.silver}</p>

          <h4>Latest News</h4>

          {news?.silverNews?.length > 0 ? (

            news.silverNews.slice(0, 2).map((article, index) => (
              <div key={index} className="news-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-link"
                >
                  {article.title}
                </a>
              </div>
            ))

          ) : (

            <div className="news-item">
              <p>No latest news available.</p>
            </div>

          )}

        </div>

        <div className="card">

          <h3>🔶 Copper</h3>

          <p>💰 Price: {metals.metals.copper}</p>

          <h4>Latest News</h4>

          {news?.copperNews?.length > 0 ? (

            news.copperNews.slice(0, 2).map((article, index) => (
              <div key={index} className="news-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-link"
                >
                  {article.title}
                </a>
              </div>
            ))

          ) : (

            <div className="news-item">
              <p>No latest news available.</p>
            </div>

          )}

        </div>

        <div className="card">

          <h3>⚙️ Aluminum</h3>

          <p>💰 Price: {metals.metals.aluminum}</p>

          <h4>Latest News</h4>

          {news?.aluminumNews?.length > 0 ? (

            news.aluminumNews.slice(0, 2).map((article, index) => (
              <div key={index} className="news-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-link"
                >
                  {article.title}
                </a>
              </div>
            ))

          ) : (

            <div className="news-item">
              <p>No latest news available.</p>
            </div>

          )}

        </div>

        <div className="card">

          <h3>💎 Platinum</h3>

          <p>💰 Price: {metals.metals.platinum}</p>

          <h4>Latest News</h4>

          {news?.platinumNews?.length > 0 ? (

            news.platinumNews
              .slice(0, 2)
              .map((article, index) => (
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
              ))

          ) : (

            <div className="news-item">
              <p>No latest news available.</p>
            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default MetalsSection;