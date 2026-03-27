import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/download.png";
import starImg from "../../assets/star.png";
import reviewImg from "../../assets/review.png";
import { addToStoredDB } from "../../Utilities/addToDB";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const appData = useLoaderData();
  const singleApp = appData.find((app) => app.id === appId);
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
  } = singleApp;

  const handleAppInstallation = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row gap-10 pb-5 border-b-1 border-gray-300">
        <img src={image} className="w-full lg:w-[300px] shadow-md" />
        <div>
          <h2 className="text-2xl font-bold pb-2">{title}</h2>
          <p>
            Developed by{" "}
            <span className="font-bold bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <div className="flex items-center gap-10 mt-7 py-7 border-t-1 border-gray-300">
            <div>
              <img className="w-5 h-5" src={downloadImg} alt="" />
              <p className="py-2 text-[12px]">Downloads</p>
              <h3 className="text-3xl font-bold">{downloads / 1000000}M</h3>
            </div>
            <div>
              <img className="w-5 h-5" src={starImg} alt="" />
              <p className="py-2 text-[12px]">Average Ratings</p>
              <h3 className="text-3xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <img className="w-6 h-6" src={reviewImg} alt="" />
              <p className="py-2 text-[12px]">Total Reviews</p>
              <h3 className="text-3xl font-bold">{reviews}</h3>
            </div>
          </div>
          <button
            onClick={() => handleAppInstallation(id)}
            className="btn bg-[#00D390] text-white"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div className="pt-5 pb-4 border-b-1 border-gray-300">
        <h1 className="text-xl font-semibold">Ratings</h1>
      </div>
      <div className="pt-5 pb-4">
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="mt-5 mb-10">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
