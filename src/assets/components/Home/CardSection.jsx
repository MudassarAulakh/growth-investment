import React from "react";
import Cards from "./Cards";
import { dummyHeroSectionCardArray } from "./dummyHeroSectionCardArray";
import { FaArrowRight } from "react-icons/fa";
const CardSection = () => {
  return (
    <>
      <div className="w-[85%] mx-auto mt-24  ">
        <div className="text-5xl font-semibold">
          <p>Maximize the potential of your</p>
          <p className="mt-2">money, minimize your efforts</p>
        </div>
        <div className="py-10  grid grid-cols-3 gap-5">
          {dummyHeroSectionCardArray.map((val, index) => {
            return (
              <Cards
                title={val.title}
                src={val.img}
                description={val.description}
                key={index}
              />
            );
          })}
          <div className="bg-blue-800 rounded-[12px] flex items-end justify-end">
            <div className="text-white font-bold text-[18px] flex  items-center gap-2 pb-5 pr-3">
              <p>Become an investor</p>
              <div className="bg-white h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <FaArrowRight className="text-black"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSection;