function NewsSection({ news }) {

  return (
    <section id="news">

      <h2>News Articles</h2>

      <h3>Gold News</h3>

      {news.goldNews.map((article, index) => (
        <div key={index} className="card">
          <h4>{article.title}</h4>
          <p>{article.publishedAt}</p>
        </div>
      ))}

      <h3>Silver News</h3>

      {news.silverNews.map((article, index) => (
        <div key={index} className="card">
          <h4>{article.title}</h4>
          <p>{article.publishedAt}</p>
        </div>
      ))}

      <h3>Copper News</h3>

      {news.copperNews.map((article, index) => (
        <div key={index} className="card">
          <h4>{article.title}</h4>
          <p>{article.publishedAt}</p>
        </div>
      ))}

      <h3>Aluminum News</h3>

      {news.aluminumNews.map((article, index) => (
        <div key={index} className="card">
          <h4>{article.title}</h4>
          <p>{article.publishedAt}</p>
        </div>
      ))}

      <h3>Platinum News</h3>

      {news.platinumNews.map((article, index) => (
        <div key={index} className="card">
          <h4>{article.title}</h4>
          <p>{article.publishedAt}</p>
        </div>
      ))}

      <h3>Oil News</h3>

      {news.oilNews.map((article, index) => (
        <div key={index} className="card">
          <h4>{article.title}</h4>
          <p>{article.publishedAt}</p>
        </div>
      ))}

    </section>
  );
}

export default NewsSection;