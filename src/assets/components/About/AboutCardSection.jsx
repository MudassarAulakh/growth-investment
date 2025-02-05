import React from "react";
import { AboutCardArray } from "./AboutCardArray";
import AboutCard from "./AboutCard";
const AboutCardSection = () => {
  return (
    <>
      <div className="w-[100%] mx-auto">
        <div className="py-10  grid grid-cols-3 gap-5">
          {AboutCardArray.map((val, index) => {
            return (
              <AboutCard 
                img={val.img}
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
export default AboutCardSection;