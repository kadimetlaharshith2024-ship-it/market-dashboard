function MarketSection({ market }) {
  return (
    <section id="market">

      <h2>MARKET INDICES</h2>

      <div className="market-grid">

        {market.map((item, index) => (

          <div className="card" key={index}>

            <h3>{item.indexName}</h3>

            <p>
              🌍 <strong>{item.country}</strong>
            </p>

            <p>
              Price : <strong>
                {Number(item.price).toLocaleString()}
              </strong>
            </p>

            <p
              className={
                item.changePercent >= 0
                  ? "positive"
                  : "negative"
              }
            >Change:
              {item.changePercent >= 0 ? "🟢" : "🔴"}

              {" "}

              {item.changePercent}%
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default MarketSection;