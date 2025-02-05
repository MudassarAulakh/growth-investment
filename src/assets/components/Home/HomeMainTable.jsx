import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HomeMainTableFeature from "./HomeMainTableFeature";

const HomeMainTable = () => {
  return (
    <div className="w-[85%] mx-auto mt-6">
      <div className="flex justify-between my-7 items-center">
        <h1 className="text-5xl font-semibold">Investment Opportunities</h1>
        <h3 className="flex justify-between items-center cursor-pointer hover:underline">
          Learn more
          <span className="p-2 rounded-full text-white bg-black border">
            <FaArrowRight />
          </span>
        </h3>
      </div>
      <HomeMainTableFeature />
      <div className="flex justify-center items-center">
        <button className="flex justify-start items-center gap-8 border mt-10 bg-black text-white rounded-full px-7 py-4">
          Start Investing
          <span className="bg-white text-black p-2 rounded-full">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomeMainTable;
