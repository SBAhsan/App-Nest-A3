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
      <div className="text-center">
        <h1 className="text-3xl font-bold pt-15 pb-4">Trending Apps</h1>
        <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {trendingApps.map((app) => (
        <TrendingApp key={app.id} app={app}></TrendingApp>
      ))}
      </ul>
    </div>
  );
};

export default TrendingApps;
