import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { steps } from "./InvestmentStepsArray";
const InvestmentSteps = () => {

  return (
    <div className="w-[70%] mx-auto flex justify-between gap-10">
      <div className="flex justify-center items-center">
        <img src="./home/image2.webp" alt="Investment Process" />
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-5xl font-semibold">
          Start investing simply and <br /> with confidence
        </h1>
        <div className="flex flex-col gap-7 py-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-5 items-center">
              <span className="rounded-full py-2 bg-[#F6F6F9] px-3">{step.number}</span>
              <div>
                <h2 className="font-bold">{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
          <button className="flex justify-start items-center gap-8 border w-[34%] mt-10 bg-black text-white rounded-full px-7 py-4">
            Start now
            <span className="bg-white text-black p-2 rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSteps;
