import React from "react";
import HowWorkCard from "./HowWorkCard";
import { HowWorkCardArray } from "./HowWorkCardArray";
import { FaArrowRight } from "react-icons/fa";
const HowWorkCardSection = () => {
  return (
    <>
      <div className="w-[100%] mx-auto">
        <div className="py-10  grid grid-cols-3 gap-5">
          {HowWorkCardArray.map((val, index) => {
            return (
              <HowWorkCard
                title={val.title}
                description={val.description}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HowWorkCardSection;