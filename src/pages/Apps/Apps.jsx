import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import searchImg from "../../assets/search.png";
import appErrorImg from "../../assets/App-Error.png";

const Apps = () => {
  const allAppsData = useLoaderData();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredApps = allAppsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {filteredApps.length === 0 ? (
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col gap-8 text-center">
            <img className="w-96 h-96 mx-auto" src={appErrorImg} alt="" />
          <div>
            <h1 className="text-4xl font-semibold mb-3">OPPS!! APP NOT FOUND</h1>
            <p className="text-gray-400">The App you are requesting is not found on our system. Please try another app</p>
            <button onClick={() => navigate(-1)} className="btn text-white bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 mt-6 px-9">Go Back!</button>
          </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center">
            <h1 className="text-3xl font-bold pt-15 pb-4">
              Our All Applications
            </h1>
            <p className="text-gray-400">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 justify-between pt-15 pb-6">
            <h4 className="text-xl font-bold">
              ({allAppsData.length}) Apps Found
            </h4>
            <div className="flex items-center gap-3 border-1 border-gray-300 pl-6 pr-10 py-2 rounded-sm">
              <div>
                <img src={searchImg} alt="" />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none"
              />
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredApps.map((singleAppData) => (
              <SingleApp key={singleAppData.id} singleAppData={singleAppData} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Apps;
