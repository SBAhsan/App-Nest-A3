import React from "react";
import Banner from "../../components/Banner/Banner";
import Review from "../../components/Review/Review";
import TrendingApps from "../../components/TrendingApps/TrendingApps";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Review></Review>
      <TrendingApps></TrendingApps>
      <div className="w-fit mx-auto mt-10 mb-15">
        <Link to={'/apps'}>
          <button className="btn text-white bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 px-9">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
