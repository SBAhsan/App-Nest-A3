import React from "react";
import downloadImg from "../../assets/download.png";
import starImg from "../../assets/star.png";
import { Link } from "react-router";

const SingleApp = ({ singleAppData }) => {
  const { id, image, title, downloads, ratingAvg } = singleAppData;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="bg-base-100 shadow-sm">
        <figure className="pt-4 px-4 w-fit mx-auto">
          <img src={image} className="rounded-xl w-[500px] lg:w-[300px]" />
        </figure>
        <div className="text-center p-5">
          <h2 className="card-title pt-2">{title}</h2>
          <div className="flex justify-between pt-4">
            <div className="flex items-center gap-2 text-[#00D390] bg-[#F1F5E8] px-2 py-1 rounded-sm">
              <img src={downloadImg} />
              <span>{downloads / 1000000}M</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded-sm">
              <img src={starImg} />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
