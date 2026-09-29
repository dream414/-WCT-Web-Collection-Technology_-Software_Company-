import React from "react";
import { Link } from "react-router-dom";


const Nine = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center max-w-sm w-full space-y-4">

        <img
          src="./error.png"
          alt="Sample"
          className="mx-auto w-88 h-auto rounded"
        />

        <h2 className="text-green-500 text-2xl font-bold">Sorry! Page not found</h2>

        <p className="text-white text-base">
         This page you are looking for doesn't exist or has been moved.
        </p>

        <button className="bg-green-500 text-black font-bold py-2 px-6 rounded-xl hover:bg-white transition">
       <Link to="/home">Go Back to Home</Link>
        </button>

      </div>
    </div>
  );
};

export default Nine;
