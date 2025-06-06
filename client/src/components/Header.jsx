import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContent } from "../context/AppContex";

const Header = () => {
  const { userData } = useContext(AppContent);
  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img
        src={assets.header_img}
        alt=""
        className="w-36 h-36 rounded-full mb-6"
      />
      <h1 className="flex ite gap-2 text-xl sm:text-3xl font-medium mb-2">
        Hey {userData ? userData.name : "Devloper"}!
        <img className="w-8 aspect-square" src={assets.hand_wave} alt="" />
      </h1>
      <h2 className="text-3xl sm:text-5xl'font-semibold mb-4">
        welcome to our app
      </h2>
      <p className="mb=7 max-w-md">
        let's start with the quick product tour and we will have you up and
        running in no time!
      </p>
      <button
        className="border border-gray-500 rounded-full px-8 py-2.5
      hover:bg-gray-100 transition-all"
      >
        get started
      </button>
    </div>
  );
};

export default Header;
