import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/download.png";
import starImg from "../../assets/star.png";
import reviewImg from "../../assets/review.png";
import { addToStoredDB } from "../../Utilities/addToDB";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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
    ratings
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
          <Link to={"/installation"}>
            <button
              onClick={() => handleAppInstallation(id)}
              className="btn bg-[#00D390] text-white"
            >
              Install Now ({size} MB)
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-5 pb-4 border-b-1 border-gray-300">
        <h1 className="text-xl font-semibold mb-5">Ratings</h1>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} stroke="#e0e0e0" />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#999" }}
              domain={[0, "auto"]}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 12, fill: "#555" }}
              width={40}
            />
            <Bar dataKey="count" fill="#f5a623" radius={[0, 4, 4, 0]} barSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="pt-5 pb-4">
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="mt-5">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
