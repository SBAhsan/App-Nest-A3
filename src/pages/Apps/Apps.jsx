import React from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import searchImg from "../../assets/search.png";

const Apps = () => {
  const allAppsData = useLoaderData();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold pt-15 pb-4">Our All Applications</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between pt-15 pb-6">
        <h4 className="text-xl font-bold">({allAppsData.length}) Apps Found</h4>
        <div className="flex items-center gap-3 border-1 border-gray-300 pl-6 pr-10 py-2 rounded-sm">
          <div>
            <img src={searchImg} alt="" />
          </div>
          <input type="text" name="" placeholder="Search" />
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
        {allAppsData.map((singleAppData) => (
          <SingleApp
            key={singleAppData.id}
            singleAppData={singleAppData}
          ></SingleApp>
        ))}
      </ul>
    </div>
  );
};

export default Apps;
