import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="w-full h-[90vh] md:h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dmixvynoo/video/upload/v1755761680/Pinterest_Business_Profiles_Now_Include_Dynamic_Cover_Images__Monthly_Viewers__Video___Video____Cool_pictures_of_nature__Beautiful_scenery_nature__Ama_if4lrc.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
          Awande African Expeditions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium max-w-3xl drop-shadow-md">
          Explore amazing activities and adventures with us!
        </p>
        <Link
          to="/activities"
          className="bg-red-700 hover:bg-red-800 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}

export default Banner;
