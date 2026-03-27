import React from "react";
import pageErrorImg from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 text-center">
        <img className="w-96 h-96 mx-auto" src={pageErrorImg} alt="" />
        <div>
          <h1 className="text-4xl font-semibold mb-3">OPPS!! PAGE NOT FOUND</h1>
          <p className="text-gray-400">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn text-white bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 mt-6 px-9"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
