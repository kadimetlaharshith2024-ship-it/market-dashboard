import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import MarketSection from "./components/MarketSection";
import MetalsSection from "./components/MetalsSection";
import OilSection from "./components/OilSection";
import WeatherSection from "./components/WeatherSection";
import RainfallSection from "./components/RainfallSection";
import MarketNews from "./components/MarketNews";

function App() {

  const [dashboard, setDashboard] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        console.log(
          "Fetching from: https://market-intelligence-backend-2-bbtv.onrender.com/dashboard"
        );

        const response = await axios.get(
          "https://market-intelligence-backend-2-bbtv.onrender.com/dashboard"
        );

        console.log(response.data);

        setDashboard(response.data);

        setLastUpdated(
          new Date().toLocaleString()
        );

      } catch (error) {

        console.error("Dashboard Error:", error);

      }

    };

    fetchDashboard();

    const interval = setInterval(fetchDashboard, 300000);

    return () => clearInterval(interval);

  }, []);

  if (!dashboard) {

    return (
      <div className="loading">
        Loading Dashboard...
      </div>
    );

  }

  return (
    <div>

      <h1 className="title">
        GLOBAL MARKET INTELLIGENCE HUB
      </h1>

      <p className="last-updated">
        Last Updated: {lastUpdated}
      </p>

      <Navbar />

      <Overview
        oil={dashboard.oil}
        weather={dashboard.weather}
        rainfall={dashboard.rainfall}
        metals={dashboard.metals}
      />

      <MarketSection
        market={dashboard.market}
      />

      <MarketNews />

      <MetalsSection
        metals={dashboard.metals}
        news={dashboard.news}
      />

      <OilSection
        oil={dashboard.oil}
        news={dashboard.news}
      />

      <h2 className="combined-heading">
        🌦️ MUMBAI'S WEATHER AND RAINFALL PREDICTION
      </h2>

      <div className="weather-rainfall-container">

        <WeatherSection
          weather={dashboard.weather}
        />

        <RainfallSection
          rainfall={dashboard.rainfall}
        />

      </div>

      <footer className="footer">
        Global Market Intelligence Hub © 2026
      </footer>

    </div>
  );
}

export default App;