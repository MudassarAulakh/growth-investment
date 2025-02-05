import React from "react";
import { FaArrowRight } from "react-icons/fa";

const InvestmentIntro = () => {
  return (
    <div className="flex w-[100%] flex-col justify-center items-center gap-7">
      <h1 className="text-5xl text-center font-bold">
        Unlock the potential of your <br /> money today!
      </h1>
      <p className="text-2xl text-center">
        Set up your account in minutes and start investing in loans around the
        <br /> world.
      </p>
      <div className="flex justify-center items-center text-center gap-3 h-auto">
        <button className="flex justify-start items-center gap-8 border bg-black text-white rounded-full px-7 py-4">
          Invest Now
          <span className="bg-white text-black p-2 rounded-full">
            <FaArrowRight />
          </span>
        </button>
        <h3 className="cursor-pointer font-semibold hover:underline">
          How does it work?
        </h3>
      </div>
    </div>
  );
};

export default InvestmentIntro;
