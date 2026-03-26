import React from "react";

const Review = () => {
  return (
    <div className="text-center text-white bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
      <h1 className="text-3xl font-semibold py-10">Trusted by Millions, Built for You</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-15 lg:gap-25 mx-auto pb-10">
        <div>
            <p className="text-[11px] font-thin">Total Downloads</p>
            <h1 className="text-4xl font-bold my-3">29.6M</h1>
            <p className="text-[11px] font-thin">21% more than last month</p>
        </div>
        <div>
            <p className="text-[11px] font-thin">Total Reviews</p>
            <h1 className="text-4xl font-bold my-3">906K</h1>
            <p className="text-[11px] font-thin">46% more than last month</p>
        </div>
        <div>
            <p className="text-[11px] font-thin">Active Apps</p>
            <h1 className="text-4xl font-bold my-3">132+</h1>
            <p className="text-[11px] font-thin">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
