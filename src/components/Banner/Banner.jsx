import React from "react";
import bannerImg from '../../assets/hero.png'
import googleImg from '../../assets/google.png';
import appStoreImg from '../../assets/app-store.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center flex flex-col">
          <div className="pt-15">
            <h1 className="text-5xl font-bold max-w-md mx-auto">
              We Build{" "}
              <span className="font-extrabold bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-6 w-[750px]">
              At AppNest, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <button className="btn mx-1"><img className="w-5 h-5 mr-1" src={googleImg} alt="" />Google Play</button>
            <button className="btn mx-1"><img className="w-5 h-5 mr-1" src={appStoreImg} alt="" />App Store</button>
          </div>
          <img className="w-[500px] h-67 mt-4" src={bannerImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
