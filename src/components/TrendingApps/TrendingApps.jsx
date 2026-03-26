import React, { useEffect, useState } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = () => {
  const [trendingApps, setTrendingApps] = useState([]);

  useEffect(() => {
    fetch("allApps.json")
      .then((res) => res.json())
      .then((data) => {
        const trending = [...data]
          .sort((a, b) => b.downloads - a.downloads)
          .slice(0, 8);
        setTrendingApps(trending);
      });
  }, []);

  return (
    <div>
      <h1>I am Trending apps</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {trendingApps.map((app) => (
        <TrendingApp key={app.id} app={app}></TrendingApp>
      ))}
      </ul>
    </div>
  );
};

export default TrendingApps;
