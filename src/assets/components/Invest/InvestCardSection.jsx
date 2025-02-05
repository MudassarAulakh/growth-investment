import React from "react";
import { InvestCardArray } from "./InvestCardArray";
import InvestCard from "./InvestCard";
const InvestCardSection = () => {
  return (
    <>
      <div className="w-[100%] mx-auto">
        <div className="py-10  grid grid-cols-3 gap-5">
          {InvestCardArray.map((val, index) => {
            return (
              <InvestCard
                title={val.title}
                description={val.description}
                paragraph={val.paragraph}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default InvestCardSection;